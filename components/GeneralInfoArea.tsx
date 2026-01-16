import React, { useState, useMemo, useEffect } from 'react';
import { Clock, CalendarDays, AlertCircle, Truck, Bus } from 'lucide-react';
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
        {/* Header: Title + Vehicle Types */}
        <div className="px-3 py-2 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-gray-50">
             <div className="flex items-center">
                <span className="w-1 h-3.5 bg-vne-red mr-2 inline-block rounded-sm"></span>
                <h3 className="font-serif font-bold text-base text-gray-900 leading-none">
                    Khung giờ cấm
                </h3>
             </div>
             
             {/* Compact Vehicle Icons */}
             <div className="flex items-center text-xs text-gray-600 bg-white px-2 py-1 rounded border border-gray-200 shadow-sm self-start sm:self-auto">
                <span className="font-bold mr-2 text-gray-500 uppercase text-[10px]">Cấm:</span>
                <div className="flex items-center gap-3">
                    <span className="flex items-center" title="Xe tải">
                        <Truck className="w-3.5 h-3.5 mr-1 text-vne-red" /> Xe tải
                    </span>
                    <span className="w-px h-3 bg-gray-200"></span>
                    <span className="flex items-center" title="Xe khách trên 16 chỗ">
                        <Bus className="w-3.5 h-3.5 mr-1 text-vne-red" /> Khách &gt;16 chỗ
                    </span>
                </div>
             </div>
        </div>
             
        <div className="p-2 sm:p-3">
            {/* Date Tabs (Pills) */}
            {!isSingleGroup && visibleGroups.length > 0 && (
                <div className="mb-2 flex flex-wrap gap-1.5">
                    {visibleGroups.map((group, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`py-1 px-2.5 text-xs font-bold rounded transition-all whitespace-nowrap border flex items-center ${
                                activeIndex === idx 
                                ? 'text-vne-red bg-red-50 border-red-100' 
                                : 'text-gray-500 bg-white border-gray-100 hover:bg-gray-50'
                            }`}
                        >
                            <CalendarDays className={`w-3 h-3 mr-1 ${activeIndex === idx ? 'text-vne-red' : 'text-gray-400'}`} />
                            {group.label}
                            {group.hasActiveDate && <span className="ml-1.5 flex h-1.5 w-1.5 rounded-full bg-vne-red animate-pulse"></span>}
                        </button>
                    ))}
                </div>
            )}

            {/* Time Slots Grid - 4 Columns (Single Row on Desktop) */}
            {activeGroup ? (
                <div className="animate-in fade-in duration-300">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {activeGroup.slots.map((slot, idx) => (
                            <div key={idx} className={`flex items-center justify-center py-1.5 px-1 rounded border text-center ${
                                activeGroup.hasActiveDate 
                                ? 'bg-red-50/50 border-red-100 text-vne-red' 
                                : 'bg-gray-50 border-gray-100 text-gray-700'
                            }`}>
                                <Clock className="w-3 h-3 mr-1 opacity-70" />
                                <span className="text-sm font-bold font-sans">{slot.start}-{slot.end}</span>
                            </div>
                        ))}
                    </div>
                    
                    {/* Compact Note for Ring Road 3 */}
                    {activeGroup.label.includes('19') && (
                        <div className="mt-2 text-[11px] text-gray-600 bg-orange-50/50 px-2 py-1.5 rounded border border-orange-100 flex items-start">
                            <AlertCircle className="w-3 h-3 text-orange-600 mr-1.5 mt-0.5 shrink-0" />
                            <span>
                                <b className="text-orange-800">Lưu ý Vành đai 3 trên cao (Cầu Thăng Long - QL5):</b> Cấm xe tải ≥10 tấn từ 06:00-21:00.
                            </span>
                        </div>
                    )}
                </div>
            ) : (
                <div className="text-center py-2 text-gray-400 text-xs">
                    Không có lịch cấm.
                </div>
            )}
        </div>
    </div>
  );
};