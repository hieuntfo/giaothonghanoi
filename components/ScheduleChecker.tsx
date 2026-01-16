import React, { useState, useMemo } from 'react';
import { Clock } from 'lucide-react';
import { SCHEDULES } from '../data';
import { BanSchedule } from '../types';

export const ScheduleChecker: React.FC = () => {
  // Group logic: Combine consecutive dates with identical time slots
  const scheduleGroups = useMemo(() => {
    const groups: { label: string, slots: BanSchedule['slots'] }[] = [];
    
    // Helper to compare slots
    const getKey = (slots: BanSchedule['slots']) => JSON.stringify(slots);

    // Naive grouping suitable for sorted list
    const uniqueMap = new Map<string, string[]>();
    
    SCHEDULES.forEach(sch => {
        const k = getKey(sch.slots);
        if(!uniqueMap.has(k)) uniqueMap.set(k, []);
        uniqueMap.get(k)?.push(sch.date);
    });

    // Convert map to view model
    uniqueMap.forEach((dates, key) => {
        const slots = JSON.parse(key);
        // Optimize label: 14/01 or 19/01 - 25/01
        let label = dates[0];
        if (dates.length > 1) {
            // Check if sequential roughly
            const first = dates[0];
            const last = dates[dates.length - 1];
            label = `${first} - ${last}`;
        }
        groups.push({ label, slots });
    });

    return groups;
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const activeGroup = scheduleGroups[activeIndex];

  return (
    <div className="bg-white rounded border border-vne-border p-5 mb-6 shadow-sm">
      <h3 className="font-serif font-bold text-lg text-gray-800 mb-4 flex items-center">
        <span className="w-1.5 h-5 bg-vne-red mr-3 inline-block rounded-sm"></span>
        Khung giờ cấm theo ngày
      </h3>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-4">
        {scheduleGroups.map((group, idx) => (
            <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`pb-3 px-4 sm:px-6 text-sm sm:text-base font-bold transition-all relative outline-none ${
                    activeIndex === idx 
                    ? 'text-vne-red' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
            >
                {group.label}
                {activeIndex === idx && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-vne-red"></span>
                )}
            </button>
        ))}
      </div>

      <div className="animate-in fade-in slide-in-from-top-1 duration-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {activeGroup?.slots.map((slot, idx) => (
                <div key={idx} className="flex items-center justify-center bg-gray-50 py-3 rounded border border-gray-200 text-gray-800 font-medium shadow-sm">
                    <Clock className="w-4 h-4 mr-2 text-vne-red" />
                    <span className="text-lg font-bold font-serif">{slot.start} - {slot.end}</span>
                </div>
            ))}
        </div>
        
        {/* Specific Note for the 19-25 group */}
        {activeGroup?.label.includes('19') && (
             <div className="mt-4 bg-red-50 p-3 rounded border border-red-100 text-sm text-red-900 flex items-start">
                <span className="font-bold mr-1 shrink-0">Lưu ý Vành đai 3 trên cao:</span> 
                Cấm xe tải ≥ 10 tấn từ 06:00 đến 21:00.
             </div>
        )}
      </div>
    </div>
  );
};