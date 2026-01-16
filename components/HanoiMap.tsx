import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { ROAD_DATA } from '../data';
import { Road } from '../types';
import { Navigation2 } from 'lucide-react';

export const HanoiMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    // Initialize Map centered on My Dinh area
    const map = L.map(mapContainerRef.current).setView([21.0200, 105.7850], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    mapInstanceRef.current = map;

    // Fix grey tiles on load
    setTimeout(() => {
      map.invalidateSize();
    }, 100);

    // User Location Logic
    map.locate({ setView: false, watch: true, enableHighAccuracy: true });
    map.on('locationfound', (e) => {
      setUserLocation(e.latlng);
      
      const userIcon = L.divIcon({
        className: 'user-location-marker',
        html: '<div style="background-color: #2563eb; width: 16px; height: 16px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>',
        iconSize: [20, 20]
      });

      map.eachLayer((layer) => {
        if ((layer as any).isUserLocation) {
          map.removeLayer(layer);
        }
      });

      const marker = L.marker(e.latlng, { icon: userIcon }).addTo(map);
      (marker as any).isUserLocation = true;
    });

    // --- Main Logic: Render Dots (CircleMarkers) ---
    const drawRoads = () => {
      ROAD_DATA.forEach(group => {
        group.roads.forEach(road => {
          if (road.cachedPath && road.cachedPath.length > 0) {
             renderDots(road, road.cachedPath);
          }
        });
      });
    };

    const renderDots = (road: Road, coords: [number, number][]) => {
        // Define popup content once
        const popupContent = `
            <div style="font-family: Arial; font-size: 13px; line-height: 1.5; min-width: 200px;">
                <div style="color: ${road.color}; font-weight: bold; text-transform: uppercase; border-bottom: 1px solid #eee; padding-bottom: 4px; margin-bottom: 4px;">
                    ${road.type === 'forbidden' ? 'ĐƯỜNG CẤM' : 'HẠN CHẾ'}: ${road.name}
                </div>
                <div style="color: #333;">
                   <div style="display: flex; align-items: flex-start; margin-bottom: 2px;">
                      <span style="color: #666; font-size: 11px; margin-right: 4px; min-width: 20px;">Từ:</span> 
                      <b>${road.origin.replace(', Hà Nội', '')}</b>
                   </div>
                   <div style="display: flex; align-items: flex-start;">
                      <span style="color: #666; font-size: 11px; margin-right: 4px; min-width: 20px;">Đến:</span> 
                      <b>${road.destination.replace(', Hà Nội', '')}</b>
                   </div>
                </div>
                <div style="margin-top: 6px; font-style: italic; color: #555; background: #f9f9f9; padding: 4px; border-radius: 4px;">
                    ${road.note}
                </div>
            </div>
        `;

        // Render each coordinate as a circle marker
        coords.forEach((coord, index) => {
            const isEndpoint = index === 0 || index === coords.length - 1;
            
            // Endpoints are larger and fully opaque. 
            // Intermediate points are smaller and semi-transparent.
            const radius = isEndpoint ? 7 : 4; 
            const fillOpacity = isEndpoint ? 1 : 0.7;
            const weight = isEndpoint ? 2 : 0; // White border only for endpoints

            const marker = L.circleMarker(coord, {
                radius: radius,
                fillColor: road.color,
                color: '#ffffff',
                weight: weight,
                opacity: 1,
                fillOpacity: fillOpacity,
                className: 'leaflet-interactive' // Ensures click events work
            }).addTo(map);

            marker.bindPopup(popupContent);
        });
    };

    drawRoads();

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  const flyToUser = () => {
    if (userLocation && mapInstanceRef.current) {
        mapInstanceRef.current.flyTo(userLocation, 15);
    } else {
        alert("Đang lấy vị trí của bạn... Hãy đảm bảo đã cấp quyền truy cập vị trí.");
        mapInstanceRef.current?.locate({ setView: true, maxZoom: 16 });
    }
  };

  return (
    <div className="relative w-full h-[500px] bg-gray-100 rounded border border-gray-200 overflow-hidden">
      <div ref={mapContainerRef} className="w-full h-full z-10" />
      
      {/* Legend Overlay */}
      <div className="absolute top-3 right-3 z-[500] bg-white/95 p-3 rounded-lg shadow-md border border-gray-200 backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-vne-red border border-white shadow-sm"></div>
            <span className="text-xs font-bold text-gray-700">Điểm Cấm (Đỏ)</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-600 border border-white shadow-sm"></div>
            <span className="text-xs font-bold text-gray-700">Điểm Hạn Chế (Cam)</span>
        </div>
      </div>

      {/* My Location Button */}
      <button 
        onClick={flyToUser}
        className="absolute bottom-4 right-4 z-[500] bg-white p-3 rounded-full shadow-lg border border-gray-200 text-blue-600 active:bg-blue-50 transition-transform active:scale-95"
        title="Vị trí của tôi"
      >
        <Navigation2 className="w-6 h-6 fill-current" />
      </button>
    </div>
  );
};