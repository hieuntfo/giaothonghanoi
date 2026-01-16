import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, AlertTriangle, XCircle, ChevronLeft, ChevronRight, Map, List, MapPin } from 'lucide-react';
import { ROAD_DATA } from '../data';
import { HanoiMap } from './HanoiMap';

const ITEMS_PER_PAGE = 10;

export const StreetLookup: React.FC = () => {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState<'forbidden' | 'restricted'>('forbidden');
  const [viewMode, setViewMode] = useState<'LIST' | 'MAP'>('LIST');
  
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
    <div className="bg-white rounded border border-vne-border shadow-sm mb-6 relative">
      <div className="p-4 pb-0">
        <div className="flex justify-between items-center mb-4">
            <h3 className="font-serif font-bold text-xl text-gray-900 flex items-center">
                <span className="w-1.5 h-5 bg-vne-red mr-3 inline-block rounded-sm"></span>
                Tra cứu tuyến đường
            </h3>
            
            {/* View Toggle */}
            <div className="flex bg-gray-100 p-1 rounded-lg">
                <button
                    onClick={() => setViewMode('LIST')}
                    className={`p-2 rounded-md flex items-center gap-2 text-sm font-bold transition-all ${
                        viewMode === 'LIST' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                    <List className="w-4 h-4" />
                    <span className="hidden sm:inline">Danh sách</span>
                </button>
                <button
                    onClick={() => setViewMode('MAP')}
                    className={`p-2 rounded-md flex items-center gap-2 text-sm font-bold transition-all ${
                        viewMode === 'MAP' ? 'bg-white shadow text-vne-red' : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                    <Map className="w-4 h-4" />
                    <span className="hidden sm:inline">Bản đồ</span>
                </button>
            </div>
        </div>

        {viewMode === 'LIST' && (
            <div className="flex border-b border-gray-200">
                <button 
                    onClick={() => setActiveTab('forbidden')}
                    className={`flex-1 pb-3 text-sm font-bold uppercase tracking-wide transition-colors relative ${
                        activeTab === 'forbidden' ? 'text-vne-red' : 'text-gray-400 hover:text-gray-600'
                    }`}
                >
                    Cấm đường
                    {activeTab === 'forbidden' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-vne-red"></span>}
                </button>
                <button 
                    onClick={() => setActiveTab('restricted')}
                    className={`flex-1 pb-3 text-sm font-bold uppercase tracking-wide transition-colors relative ${
                        activeTab === 'restricted' ? 'text-orange-600' : 'text-gray-400 hover:text-gray-600'
                    }`}
                >
                    Hạn chế
                    {activeTab === 'restricted' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600"></span>}
                </button>
            </div>
        )}
      </div>

      {viewMode === 'LIST' ? (
        <>
          <div 
            ref={searchContainerRef}
            className="sticky top-0 z-20 bg-white px-4 py-3 border-b border-gray-100 shadow-sm transition-all"
          >
            <div className="relative">
                <input
                type="text"
                placeholder={activeTab === 'forbidden' ? "Tìm đường cấm (VD: Lê Duẩn...)" : "Tìm đường hạn chế (VD: Láng...)"}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:border-vne-red focus:bg-white transition-all text-sm text-gray-800"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
            </div>
          </div>

          <div className="p-4 pt-2 min-h-[300px]">
            {currentData.length > 0 ? (
                <div className="space-y-3">
                    {currentData.map((street, idx) => (
                        <div key={`${street.name}-${idx}`} className="flex items-start justify-between py-3 border-b border-gray-100 last:border-0 group">
                            <div className="flex items-start">
                                <div className="mr-3 mt-1 shrink-0">
                                    {street.type === 'forbidden' ? (
                                    <XCircle className="text-vne-red w-5 h-5" />
                                    ) : (
                                    <AlertTriangle className="text-orange-500 w-5 h-5" />
                                    )}
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900 text-base leading-tight mb-1">{street.name}</div>
                                    <p className="text-sm text-gray-600 leading-snug">
                                        <span className="font-semibold">{street.origin.replace(', Hà Nội', '')}</span> - <span className="font-semibold">{street.destination.replace(', Hà Nội', '')}</span>
                                    </p>
                                    {street.note && (
                                        <p className="text-xs text-gray-500 mt-1 italic">{street.note}</p>
                                    )}
                                </div>
                            </div>
                            
                            <button 
                                onClick={() => openGoogleMaps(street.name)}
                                className="shrink-0 ml-2 p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 active:bg-blue-200 transition-colors"
                                title="Xem trên Google Maps"
                            >
                                <MapPin className="w-5 h-5" />
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-10 text-gray-500">
                    <p className="text-sm">Không tìm thấy kết quả.</p>
                </div>
            )}

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
        </>
      ) : (
        /* MAP VIEW */
        <div className="p-4 animate-in fade-in duration-300">
             <div className="mb-3 text-sm text-gray-600 bg-gray-50 p-2 rounded border border-gray-100">
                <strong className="text-gray-900">Mẹo:</strong> 
                Các tuyến đường được vẽ theo địa hình thực tế. 
                <span className="text-vne-red font-bold mx-1">Màu Đỏ</span> là Cấm, 
                <span className="text-orange-600 font-bold mx-1">Màu Cam</span> là Hạn chế.
                Bấm vào tuyến đường để xem chi tiết.
            </div>
            <HanoiMap />
        </div>
      )}
    </div>
  );
};