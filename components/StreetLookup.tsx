import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, AlertTriangle, XCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { BANNED_STREETS, RESTRICTED_STREETS } from '../data';
import { StreetStatus } from '../types';

const ITEMS_PER_PAGE = 10;

export const StreetLookup: React.FC = () => {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState<'BANNED' | 'RESTRICTED'>('BANNED');
  
  // Reference for the search bar to handle scrolling
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Filter based on Tab AND Query
  const filteredStreets = useMemo(() => {
    // 1. Select source based on Tab
    let sourceData = activeTab === 'BANNED' ? BANNED_STREETS : RESTRICTED_STREETS;
    
    // 2. Filter by Query
    if (query) {
        const lowerQuery = query.toLowerCase();
        sourceData = sourceData.filter(s => s.name.toLowerCase().includes(lowerQuery));
    }
    
    return sourceData;
  }, [query, activeTab]);

  // Reset to page 1 when searching or switching tabs
  useEffect(() => {
    setCurrentPage(1);
  }, [query, activeTab]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredStreets.length / ITEMS_PER_PAGE);
  const currentData = filteredStreets.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      
      // Smooth scroll back to the search bar when changing pages
      // This ensures the user sees the top of the new list
      if (searchContainerRef.current) {
        // Use a small timeout to ensure state update has processed if needed, though mostly native works immediately
        // block: 'center' puts the search bar in the middle, 'start' puts it at the top (sticky position)
        // Since it's sticky top-0, 'start' is usually correct, but 'nearest' is less jarring.
        // However, to ensure they see the top of the list, we aim for the sticky container.
        const yOffset = -10; // offset if needed
        const element = searchContainerRef.current;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        
        window.scrollTo({top: y, behavior: 'smooth'});
      }
    }
  };

  return (
    // Removed overflow-hidden from here to allow sticky search to work with the document scroll
    <div className="bg-white rounded border border-vne-border shadow-sm mb-6 relative">
      <div className="p-4 pb-0">
        <h3 className="font-serif font-bold text-xl text-gray-900 flex items-center mb-4">
            <span className="w-1.5 h-5 bg-vne-red mr-3 inline-block rounded-sm"></span>
            Tra cứu tuyến đường
        </h3>

        {/* Tabs - Split View */}
        <div className="flex border-b border-gray-200">
            <button 
                onClick={() => setActiveTab('BANNED')}
                className={`flex-1 pb-3 text-sm font-bold uppercase tracking-wide transition-colors relative ${
                    activeTab === 'BANNED' ? 'text-vne-red' : 'text-gray-400 hover:text-gray-600'
                }`}
            >
                Cấm đường
                {activeTab === 'BANNED' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-vne-red"></span>}
            </button>
            <button 
                onClick={() => setActiveTab('RESTRICTED')}
                className={`flex-1 pb-3 text-sm font-bold uppercase tracking-wide transition-colors relative ${
                    activeTab === 'RESTRICTED' ? 'text-orange-600' : 'text-gray-400 hover:text-gray-600'
                }`}
            >
                Hạn chế
                {activeTab === 'RESTRICTED' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600"></span>}
            </button>
        </div>
      </div>

      {/* Sticky Search Bar Container */}
      {/* Attached ref here for scrolling */}
      <div 
        ref={searchContainerRef}
        className="sticky top-0 z-20 bg-white px-4 py-3 border-b border-gray-100 shadow-sm transition-all"
      >
        <div className="relative">
            <input
            type="text"
            placeholder={activeTab === 'BANNED' ? "Tìm đường cấm (VD: Lê Duẩn...)" : "Tìm đường hạn chế (VD: Láng...)"}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:border-vne-red focus:bg-white transition-all text-sm text-gray-800"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
        </div>
      </div>

      {/* Results Area */}
      <div className="p-4 pt-2 min-h-[300px]">
        {currentData.length > 0 ? (
            <div className="space-y-2">
                {currentData.map((street, idx) => (
                    <div key={`${street.name}-${idx}`} className="flex items-start py-2 border-b border-gray-100 last:border-0">
                        <div className="mr-3 mt-1 shrink-0">
                            {street.type === StreetStatus.BANNED ? (
                            <XCircle className="text-vne-red w-4 h-4" />
                            ) : (
                            <AlertTriangle className="text-orange-500 w-4 h-4" />
                            )}
                        </div>
                        <div>
                            <div className="font-bold text-gray-900 text-sm leading-tight">{street.name}</div>
                            {street.description && (
                            <p className="text-sm text-gray-600 mt-1 leading-snug">{street.description}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <div className="text-center py-10 text-gray-500">
                <p className="text-sm">Không tìm thấy kết quả.</p>
            </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-4 pt-2 border-t border-gray-100">
                <button 
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-1.5 rounded border border-gray-200 text-gray-500 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>
                
                <span className="text-xs font-bold text-gray-500">
                    Trang {currentPage} / {totalPages}
                </span>

                <button 
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-1.5 rounded border border-gray-200 text-gray-500 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        )}
      </div>
    </div>
  );
};