import React, { useState, useMemo, useEffect } from 'react';
import { Clock, CalendarDays, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SCHEDULES } from '../data';
import { BanSchedule } from '../types';

export const GeneralInfoArea: React.FC = () => {
  // --- Helper: Check if a date string (DD/MM) is in the past ---
  const isDatePast = (dateStr: string) => {
    const [day, month] = dateStr.split('/').map(Number);
    const now = new Date();
    const currentYear = now.getFullYear();
    
    // Create a date object for the end of that specific day
    const targetDate = new Date(currentYear, month - 1, day, 23, 59, 59);
    return targetDate < now;
  };

  // --- Helper: Check if today is within a date range ---
  const isDateActive = (dateStr: string) => {
    const [day, month] = dateStr.split('/').map(Number);
    const now = new Date();
    const currentYear = now.getFullYear();
    const targetDate = new Date(currentYear, month - 1, day);
    
    return targetDate.getDate() === now.getDate() && targetDate.getMonth() === now.getMonth();
  };

  // --- Schedule Grouping Logic with Filtering ---
  const visibleGroups = useMemo(() => {
    const groups: { label: string, dates: string[], slots: BanSchedule['slots'], isUpcoming: boolean, hasActiveDate: boolean }[] = [];
    const getKey = (slots: BanSchedule['slots']) => JSON.stringify(slots);
    const uniqueMap = new Map<string, string[]>();
    
    SCHEDULES.forEach(sch => {
        const k = getKey(sch.slots);
        if(!uniqueMap.has(k)) uniqueMap.set(k, []);
        uniqueMap.get(k)?.push(sch.date);
    });

    uniqueMap.forEach((dates, key) => {
        // Filter Logic: Check if the LAST date in the group is past.
        // If the entire group is in the past, we skip adding it.
        const lastDate = dates[dates.length - 1];
        if (isDatePast(lastDate)) {
            return; // Skip this group entirely
        }

        const slots = JSON.parse(key);
        let label = dates[0];
        
        // Determine status
        const firstDateStr = dates[0];
        const [fDay, fMonth] = firstDateStr.split('/').map(Number);
        const firstDateObj = new Date(new Date().getFullYear(), fMonth - 1, fDay);
        const now = new Date();
        const isUpcoming = firstDateObj > now;
        const hasActiveDate = dates.some(d => isDateActive(d));

        if (dates.length > 1) {
            const first = dates[0];
            const last = dates[dates.length - 1];
            label = `${first} - ${last}`;
        }
        
        groups.push({ label, dates, slots, isUpcoming, hasActiveDate });
    });
    
    return groups;
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-select the active group if possible
  useEffect(() => {
    const activeGroupIdx = visibleGroups.findIndex(g => g.hasActiveDate);
    if (activeGroupIdx !== -1) {
        setActiveIndex(activeGroupIdx);
    }
  }, [visibleGroups]);

  // Safe access
  const activeGroup = visibleGroups[activeIndex] || visibleGroups[0];
  const isSingleGroup = visibleGroups.length === 1;

  if (visibleGroups.length === 0) {
      return null; // Don't render anything if all bans are over
  }

  return (
    <div className="bg-white rounded-lg border border-vne-border shadow-sm mb-6 overflow-hidden">
        {/* Header Section */}
        <div className="bg-gray-50/50 p-4 border-b border-gray-100">
             <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-3">
                <h3 className="font-serif font-bold text-xl text-gray-900 flex items-center leading-tight">
                    <span className="w-1.5 h-6 bg-vne-red mr-3 inline-block rounded-sm"></span>
                    Khung giờ cấm
                </h3>
                
                {/* Active Date Badge */}
                {activeGroup && (
                    <div className={`flex items-center text-xs font-bold px-3 py-1.5 rounded-full border self-start shadow-sm ${
                        activeGroup.hasActiveDate 
                        ? 'text-vne-red bg-white border-red-100 ring-1 ring-red-50' 
                        : 'text-gray-600 bg-white border-gray-200'
                    }`}>
                        <CalendarDays className="w-3.5 h-3.5 mr-1.5" />
                        {activeGroup.label}
                        {activeGroup.isUpcoming && <span className="ml-2 pl-2 border-l border-gray-200 text-blue-600">Sắp diễn ra</span>}
                        {activeGroup.hasActiveDate && <span className="ml-2 pl-2 border-l border-red-200 text-vne-red animate-pulse">Hôm nay</span>}
                    </div>
                )}
             </div>

             {/* Vehicle Types (Compact) */}
             <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                <span className="inline-flex items-center bg-white px-2 py-1 rounded border border-gray-200">
                    <span className="w-2 h-2 rounded-full bg-vne-gray mr-2"></span>
                    Xe tải
                </span>
                <span className="inline-flex items-center bg-white px-2 py-1 rounded border border-gray-200">
                    <span className="w-2 h-2 rounded-full bg-vne-gray mr-2"></span>
                    Xe khách {'>'} 16 chỗ
                </span>
             </div>
        </div>
             
        <div className="p-4 pt-2">
            {/* Tabs - Only show if there are multiple groups left */}
            {!isSingleGroup && visibleGroups.length > 0 && (
                <div className="mb-5 overflow-x-auto scrollbar-hide">
                    <div className="flex space-x-2 pb-1">
                        {visibleGroups.map((group, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`py-2 px-4 text-sm font-bold rounded-md transition-all whitespace-nowrap border ${
                                    activeIndex === idx 
                                    ? 'text-vne-red bg-red-50 border-red-100 shadow-sm' 
                                    : 'text-gray-500 bg-white border-gray-100 hover:bg-gray-50'
                                }`}
                            >
                                {group.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Time Slots Grid - Optimized Visuals */}
            {activeGroup ? (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {activeGroup.slots.map((slot, idx) => (
                            <div key={idx} className="relative group overflow-hidden">
                                <div className="flex items-center justify-between p-3.5 bg-white rounded-lg border border-gray-200 shadow-sm group-hover:border-red-200 transition-colors">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center mr-3 group-hover:bg-vne-red group-hover:text-white transition-colors">
                                            <Clock className="w-4 h-4 text-vne-red group-hover:text-white" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-0.5">Khung giờ {idx + 1}</span>
                                            <span className="text-xl font-bold font-serif text-gray-900">{slot.start} - {slot.end}</span>
                                        </div>
                                    </div>
                                    {/* Visual indicator active */}
                                    {activeGroup.hasActiveDate && (
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Special Note for Ring Road 3 */}
                    {activeGroup.label.includes('19') && (
                        <div className="mt-4 flex gap-3 p-4 bg-orange-50 rounded-lg border border-orange-100">
                            <AlertCircle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                            <div className="text-sm">
                                <p className="font-bold text-gray-900 mb-1">Lưu ý Vành đai 3 trên cao:</p>
                                <p className="text-gray-700 leading-snug">
                                    Áp dụng lệnh cấm riêng cho xe tải <span className="font-bold">≥ 10 tấn</span> trong khung giờ <span className="font-bold">06:00 - 21:00</span>.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="text-center py-8 text-gray-500 bg-gray-50 rounded border border-dashed border-gray-300">
                    <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-green-500" />
                    <p>Hiện không có lịch cấm nào trong tương lai gần.</p>
                </div>
            )}
        </div>
    </div>
  );
};