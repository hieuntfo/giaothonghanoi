import React, { useMemo } from 'react';
import { StreetLookup } from './components/StreetLookup';
import { GeneralInfoArea } from './components/GeneralInfoArea';
import { DetourGuide } from './components/DetourGuide';
import { Calendar, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function App() {
  // Logic to determine today's status
  const dateStatus = useMemo(() => {
    const now = new Date();
    // Get Vietnam time string for display
    const dateStr = now.toLocaleDateString('vi-VN', { weekday: 'long', day: '2-digit', month: '2-digit' });
    
    const month = now.getMonth() + 1; // 0-indexed
    const day = now.getDate();

    // Ban period: Jan 14 to Jan 25
    const isBanPeriod = month === 1 && day >= 14 && day <= 25;

    return {
      text: dateStr,
      isBanPeriod,
      message: isBanPeriod ? "Đang trong thời gian cấm/hạn chế" : "Hôm nay không có lịch cấm"
    };
  }, []);

  return (
    <div className="font-sans text-[#333] bg-white sm:bg-[#fcfcfc] p-0 sm:p-4 flex justify-center">
        {/* Widget Container - Max Width 680px for Article Embedding */}
        <div className="w-full max-w-[680px] bg-white sm:border sm:border-gray-200 sm:rounded-lg sm:shadow-sm min-h-screen sm:min-h-0">
            
            {/* Header */}
            <header className="bg-white border-b border-gray-100 p-4 pb-2 sm:rounded-t-lg">
                <h1 className="font-serif font-bold text-xl sm:text-2xl text-vne-red leading-tight mb-1">
                    Lịch cấm đường Hà Nội
                </h1>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wide mb-2">
                    Đại hội Đảng lần thứ XIV
                </p>

                {/* Today's Status Bar - Optimized for visibility */}
                <div className={`py-1.5 px-3 rounded border flex items-center justify-between shadow-sm transition-colors ${
                    dateStatus.isBanPeriod 
                    ? 'bg-red-50 border-red-100' 
                    : 'bg-green-50 border-green-100'
                }`}>
                    <div className="flex items-center gap-2">
                        <Calendar className={`w-3.5 h-3.5 ${dateStatus.isBanPeriod ? 'text-vne-red' : 'text-green-600'}`} />
                        <span className="text-sm font-bold text-gray-800 capitalize">{dateStatus.text}</span>
                    </div>
                    
                    <div className="flex items-center gap-1.5">
                        {dateStatus.isBanPeriod ? (
                            <>
                                <AlertCircle className="w-3.5 h-3.5 text-vne-red" />
                                <span className="text-[10px] sm:text-xs font-bold text-vne-red uppercase">Đang hiệu lực</span>
                            </>
                        ) : (
                            <>
                                <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                                <span className="text-[10px] sm:text-xs font-bold text-green-700 uppercase">Bình thường</span>
                            </>
                        )}
                    </div>
                </div>
            </header>

            {/* Main Content - Compact Spacing */}
            <main className="p-3 space-y-3">
                
                {/* 1. Street Lookup */}
                <StreetLookup />

                {/* 2. Combined General Info & Schedule */}
                <GeneralInfoArea />
                
                {/* 3. Detours */}
                <DetourGuide />

                <footer className="mt-4 text-center border-t border-gray-100 pt-3 pb-2">
                    <p className="text-[11px] text-gray-400">
                        Nguồn: Cục Cảnh sát Giao thông / Công an TP Hà Nội.
                    </p>
                </footer>

            </main>
        </div>
    </div>
  );
}