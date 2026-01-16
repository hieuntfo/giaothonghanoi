import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, AlertTriangle, XCircle, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { ROAD_DATA } from '../data';

const ITEMS_PER_PAGE = 10;

export const StreetLookup: React.FC = () => {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState<'forbidden' | 'restricted'>('forbidden');
  
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Flatten the data for the list view
  const currentGroupData = useMemo(() => {
    // Find the group corresponding to the active tab
    const groupNameKeyword = activeTab === 'forbidden' ? "Cấm" : "Hạn chế";
    const group = ROAD_DATA.find(g => g.group.includes(groupNameKeyword));
    return group ? group.roads : [];
  }, [activeTab]);

  // Filter based on Query
  const filteredStreets = useMemo(() => {
    let sourceData = currentGroupData;
    if (query) {
        const lowerQuery = query.toLowerCase();
        sourceData = sourceData.filter(s => s.name.toLowerCase().includes(lowerQuery));
    }
    return sourceData;
  }, [query, currentGroupData]);

  useEffect(() => {
    setCurrentPage(1);
  }, [query, activeTab]);

  const totalPages = Math.ceil(filteredStreets.length / ITEMS_PER_PAGE);
  const currentData = filteredStreets.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      if (searchContainerRef.current) {
        const yOffset = -10; 
        const element = searchContainerRef.current;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
      }
    }
  };

  const openGoogleMaps = (streetName: string) => {
    const encodedQuery = encodeURIComponent(`${streetName}, Hà Nội`);
    const url = `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white rounded border border-vne-border shadow-sm relative">
      <div className="p-3 pb-0">
        <div className="flex justify-between items-center mb-3">
            <h3 className="font-serif font-bold text-lg text-gray-900 flex items-center">
                <span className="w-1 h-4 bg-vne-red mr-2 inline-block rounded-sm"></span>
                Tra cứu tuyến đường
            </h3>
        </div>

        <div className="flex border-b border-gray-200">
            <button 
                onClick={() => setActiveTab('forbidden')}
                className={`flex-1 pb-2 text-xs sm:text-sm font-bold uppercase tracking-wide transition-colors relative ${
                    activeTab === 'forbidden' ? 'text-vne-red' : 'text-gray-400 hover:text-gray-600'
                }`}
            >
                Cấm đường
                {activeTab === 'forbidden' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-vne-red"></span>}
            </button>
            <button 
                onClick={() => setActiveTab('restricted')}
                className={`flex-1 pb-2 text-xs sm:text-sm font-bold uppercase tracking-wide transition-colors relative ${
                    activeTab === 'restricted' ? 'text-orange-600' : 'text-gray-400 hover:text-gray-600'
                }`}
            >
                Hạn chế
                {activeTab === 'restricted' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600"></span>}
            </button>
        </div>
      </div>

      {/* LIST VIEW */}
      <>
        <div 
        ref={searchContainerRef}
        className="sticky top-0 z-20 bg-white px-3 py-2 border-b border-gray-100 shadow-sm transition-all"
        >
        <div className="relative">
            <input
            type="text"
            placeholder={activeTab === 'forbidden' ? "Tìm đường cấm (VD: Lê Duẩn...)" : "Tìm đường hạn chế (VD: Láng...)"}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:border-vne-red focus:bg-white transition-all text-sm text-gray-800"
            />
            <Search className="absolute left-2.5 top-2.5 text-gray-400 w-4 h-4" />
        </div>
        </div>

        <div className="px-3 min-h-[300px]">
        {currentData.length > 0 ? (
            <div className="divide-y divide-gray-50">
                {currentData.map((street, idx) => (
                    <div key={`${street.name}-${idx}`} className="flex items-start justify-between py-2.5 group hover:bg-gray-50/50 -mx-1 px-1 rounded">
                        <div className="flex items-start">
                            <div className="mr-2.5 mt-1 shrink-0">
                                {street.type === 'forbidden' ? (
                                <XCircle className="text-vne-red w-4 h-4" />
                                ) : (
                                <AlertTriangle className="text-orange-500 w-4 h-4" />
                                )}
                            </div>
                            <div>
                                <div className="font-bold text-gray-900 text-sm leading-tight mb-0.5">{street.name}</div>
                                <p className="text-xs text-gray-600 leading-tight">
                                    <span className="font-semibold">{street.origin.replace(', Hà Nội', '')}</span> - <span className="font-semibold">{street.destination.replace(', Hà Nội', '')}</span>
                                </p>
                                {street.note && (
                                    <p className="text-[11px] text-gray-500 mt-0.5 italic">{street.note}</p>
                                )}
                            </div>
                        </div>
                        
                        <button 
                            onClick={() => openGoogleMaps(street.name)}
                            className="shrink-0 ml-2 p-1.5 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 active:bg-blue-200 transition-colors"
                            title="Xem trên Google Maps"
                        >
                            <MapPin className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>
        ) : (
            <div className="text-center py-8 text-gray-400">
                <p className="text-sm">Không tìm thấy kết quả.</p>
            </div>
        )}

        {totalPages > 1 && (
            <div className="flex items-center justify-center gap-1.5 mt-2 mb-3 pt-2 border-t border-gray-100">
                <button 
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-1 rounded border border-gray-200 text-gray-500 disabled:opacity-30 hover:bg-gray-50"
                >
                    <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                
                <span className="text-xs font-bold text-gray-500 mx-1">
                    {currentPage}/{totalPages}
                </span>

                <button 
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-1 rounded border border-gray-200 text-gray-500 disabled:opacity-30 hover:bg-gray-50"
                >
                    <ChevronRight className="w-3.5 h-3.5" />
                </button>
            </div>
        )}
        </div>
      </>
    </div>
  );
};