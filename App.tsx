import React from 'react';
import { StreetLookup } from './components/StreetLookup';
import { GeneralInfoArea } from './components/GeneralInfoArea';
import { DetourGuide } from './components/DetourGuide';

export default function App() {
  return (
    <div className="font-sans text-[#333] bg-white sm:bg-[#fcfcfc] p-0 sm:p-4 flex justify-center">
        {/* Widget Container - Max Width 680px for Article Embedding */}
        <div className="w-full max-w-[680px] bg-white sm:border sm:border-gray-200 sm:rounded-lg sm:shadow-sm overflow-hidden">
            
            {/* Header */}
            <header className="bg-white border-b border-gray-100 p-4 pb-4">
                <h1 className="font-serif font-bold text-xl sm:text-2xl text-vne-red leading-tight mb-2">
                    Chi tiết lịch cấm đường ở Hà Nội
                </h1>
                <p className="text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-wide">
                    Phục vụ Đại hội Đảng toàn quốc lần thứ XIV
                </p>
            </header>

            {/* Main Content */}
            <main className="p-4 space-y-6">
                
                {/* 1. Street Lookup */}
                <StreetLookup />

                {/* 2. Combined General Info & Schedule */}
                <GeneralInfoArea />
                
                {/* 3. Detours */}
                <DetourGuide />

                <footer className="mt-8 text-center border-t border-gray-100 pt-4">
                    <p className="text-xs text-gray-400">
                        Nguồn: Cục Cảnh sát Giao thông / Công an TP Hà Nội.
                    </p>
                </footer>

            </main>
        </div>
    </div>
  );
}