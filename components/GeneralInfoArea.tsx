import React, { useState, useMemo } from 'react';
import { Clock, CalendarDays, AlertCircle } from 'lucide-react';
import { SCHEDULES } from '../data';
import { BanSchedule } from '../types';

export const GeneralInfoArea: React.FC = () => {
  // --- Schedule Grouping Logic ---
  const scheduleGroups = useMemo(() => {
    const groups: { label: string, slots: BanSchedule['slots'] }[] = [];
    const getKey = (slots: BanSchedule['slots']) => JSON.stringify(slots);
    const uniqueMap = new Map<string, string[]>();
    
    SCHEDULES.forEach(sch => {
        const k = getKey(sch.slots);
        if(!uniqueMap.has(k)) uniqueMap.set(k, []);
        uniqueMap.get(k)?.push(sch.date);
    });

    uniqueMap.forEach((dates, key) => {
        const slots = JSON.parse(key);
        let label = dates[0];
        if (dates.length > 1) {
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
    <div className="bg-white rounded border border-vne-border shadow-sm mb-6">
        <div className="p-4">
             {/* Header Area */}
             <div className="mb-4 pb-4 border-b border-gray-100">
                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                    <h3 className="font-serif font-bold text-xl text-gray-900 flex items-center leading-tight">
                        <span className="w-1.5 h-5 bg-vne-red mr-3 inline-block rounded-sm"></span>
                        Khung giờ cấm
                    </h3>
                    <div className="flex items-center text-xs font-bold text-vne-red bg-red-50 px-3 py-1.5 rounded-full border border-red-100 self-start">
                        <CalendarDays className="w-3.5 h-3.5 mr-1.5" />
                        14/1 - 25/1
                    </div>
                 </div>

                 {/* Compact Vehicles Info */}
                 <div className="text-sm text-gray-700 leading-relaxed">
                    <p className="mb-1">
                        <span className="font-bold text-gray-900">• Xe tải:</span> Cấm xe thông dụng & chuyên dùng.
                    </p>
                    <p>
                        <span className="font-bold text-gray-900">• Xe khách:</span> Cấm xe từ 16 chỗ trở lên.
                    </p>
                 </div>
             </div>
             
             {/* Tabs for Dates */}
             <div className="mb-4 overflow-x-auto scrollbar-hide">
                <div className="flex space-x-1 border-b border-gray-200">
                    {scheduleGroups.map((group, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`py-2 px-4 text-sm font-bold transition-all whitespace-nowrap border-b-2 ${
                                activeIndex === idx 
                                ? 'text-vne-red border-vne-red' 
                                : 'text-gray-500 border-transparent hover:text-gray-700'
                            }`}
                        >
                            {group.label}
                        </button>
                    ))}
                </div>
             </div>

            {/* Time Slots Grid */}
             <div className="animate-in fade-in duration-300">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeGroup?.slots.map((slot, idx) => (
                        <div key={idx} className="flex items-center justify-center py-3 bg-gray-50 rounded border border-gray-100 text-gray-800">
                            <Clock className="w-4 h-4 mr-2 text-vne-red" />
                            <span className="text-lg font-bold font-serif">{slot.start} - {slot.end}</span>
                        </div>
                    ))}
                </div>
                
                {activeGroup?.label.includes('19') && (
                    <div className="mt-3 flex items-start text-sm text-gray-700 bg-red-50 p-3 rounded border border-red-100">
                        <AlertCircle className="w-4 h-4 mr-2 shrink-0 mt-0.5 text-vne-red" />
                        <span>
                            <span className="font-bold text-vne-red">Lưu ý Vành đai 3 trên cao:</span><br/> 
                            Cấm xe tải ≥ 10 tấn từ 06:00 - 21:00.
                        </span>
                    </div>
                )}
             </div>
        </div>
    </div>
  );
};