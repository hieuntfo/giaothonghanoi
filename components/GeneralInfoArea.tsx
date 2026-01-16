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
        const lastDate = dates[dates.length - 1];
        if (isDatePast(lastDate)) {
            return; 
        }

        const slots = JSON.parse(key);
        let label = dates[0];
        
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

  useEffect(() => {
    const activeGroupIdx = visibleGroups.findIndex(g => g.hasActiveDate);
    if (activeGroupIdx !== -1) {
        setActiveIndex(activeGroupIdx);
    }
  }, [visibleGroups]);

  const activeGroup = visibleGroups[activeIndex] || visibleGroups[0];
  const isSingleGroup = visibleGroups.length === 1;

  if (visibleGroups.length === 0) {
      return null;
  }

  return (
    <div className="bg-white rounded border border-vne-border shadow-sm overflow-hidden">
        {/* Header Section - Compact */}
        <div className="bg-gray-50/50 px-3 py-2 border-b border-gray-100">
             <div className="flex flex-row justify-between items-center gap-2">
                <h3 className="font-serif font-bold text-lg text-gray-900 flex items-center leading-tight">
                    <span className="w-1 h-4 bg-vne-red mr-2 inline-block rounded-sm"></span>
                    Khung giờ cấm
                </h3>
                
                {/* Active Date Badge */}
                {activeGroup && (
                    <div className={`flex items-center text-[11px] font-bold px-2 py-1 rounded border shadow-sm ${
                        activeGroup.hasActiveDate 
                        ? 'text-vne-red bg-white border-red-100 ring-1 ring-red-50' 
                        : 'text-gray-600 bg-white border-gray-200'
                    }`}>
                        <CalendarDays className="w-3 h-3 mr-1" />
                        {activeGroup.label}
                        {activeGroup.isUpcoming && <span className="ml-1 pl-1 border-l border-gray-200 text-blue-600">Sắp tới</span>}
                        {activeGroup.hasActiveDate && <span className="ml-1 pl-1 border-l border-red-200 text-vne-red animate-pulse">Hôm nay</span>}
                    </div>
                )}
             </div>

             {/* Vehicle Types (Ultra Compact) */}
             <div className="flex flex-wrap gap-2 text-xs text-gray-500 mt-1.5">
                <span className="inline-flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-vne-gray mr-1"></span>
                    Xe tải
                </span>
                <span className="inline-flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-vne-gray mr-1"></span>
                    Xe khách {'>'} 16 chỗ
                </span>
             </div>
        </div>
             
        <div className="p-3">
            {/* Tabs */}
            {!isSingleGroup && visibleGroups.length > 0 && (
                <div className="mb-3 overflow-x-auto scrollbar-hide">
                    <div className="flex space-x-1.5 pb-1">
                        {visibleGroups.map((group, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`py-1.5 px-3 text-xs font-bold rounded transition-all whitespace-nowrap border ${
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

            {/* Time Slots Grid - Compact */}
            {activeGroup ? (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="grid grid-cols-2 gap-2">
                        {activeGroup.slots.map((slot, idx) => (
                            <div key={idx} className={`relative group overflow-hidden rounded border border-gray-200 ${activeGroup.hasActiveDate ? 'bg-red-50/30 border-red-100' : 'bg-white'}`}>
                                <div className="flex items-center justify-center p-2">
                                    <Clock className="w-3.5 h-3.5 text-vne-red mr-1.5 opacity-80" />
                                    <span className="text-base font-bold font-serif text-gray-900">{slot.start} - {slot.end}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Updated Note for Ring Road 3 */}
                    {activeGroup.label.includes('19') && (
                        <div className="mt-2 flex gap-2 p-2.5 bg-orange-50 rounded border border-orange-100">
                            <AlertCircle className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                            <div className="text-xs text-gray-800 leading-snug">
                                <span className="font-bold block text-orange-800 mb-0.5">Lưu ý Vành đai 3 trên cao:</span>
                                Cấm xe tải ≥ 10 tấn (đoạn Cầu Thăng Long - Nút giao QL5) từ 06:00 - 21:00.
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="text-center py-6 text-gray-400 text-sm">
                    <p>Không có lịch cấm.</p>
                </div>
            )}
        </div>
    </div>
  );
};