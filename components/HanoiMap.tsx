import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { BANNED_STREETS, RESTRICTED_STREETS } from '../data';
import { MapPin, Navigation2 } from 'lucide-react';

export const HanoiMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    // Initialize Map centered on Hanoi
    const map = L.map(mapContainerRef.current).setView([21.0285, 105.8542], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    mapInstanceRef.current = map;

    // Add User Location if available
    map.locate({ setView: false, watch: true, enableHighAccuracy: true });

    map.on('locationfound', (e) => {
      setUserLocation(e.latlng);
      
      // Custom user icon
      const userIcon = L.divIcon({
        className: 'user-location-marker',
        html: '<div style="background-color: #2563eb; width: 16px; height: 16px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>',
        iconSize: [20, 20]
      });

      // Clear existing user marker if any (simple implementation: assume one)
      map.eachLayer((layer) => {
        if ((layer as any).isUserLocation) {
          map.removeLayer(layer);
        }
      });

      const marker = L.marker(e.latlng, { icon: userIcon }).addTo(map);
      (marker as any).isUserLocation = true;
      marker.bindPopup("Bạn đang ở đây").openPopup();
    });

    // Draw Banned Streets (Red)
    BANNED_STREETS.forEach(street => {
      if (street.lat && street.lng) {
        L.circle([street.lat, street.lng], {
          color: '#9f224e', // VnExpress Red
          fillColor: '#9f224e',
          fillOpacity: 0.5,
          radius: 300
        }).addTo(map).bindPopup(`
          <div style="font-family: Arial; font-size: 13px;">
            <strong style="color: #9f224e;">CẤM: ${street.name}</strong><br/>
            ${street.description || ''}
          </div>
        `);
      }
    });

    // Draw Restricted Streets (Orange)
    RESTRICTED_STREETS.forEach(street => {
        if (street.lat && street.lng) {
          L.circle([street.lat, street.lng], {
            color: '#ea580c', // Orange
            fillColor: '#ea580c',
            fillOpacity: 0.5,
            radius: 300
          }).addTo(map).bindPopup(`
            <div style="font-family: Arial; font-size: 13px;">
              <strong style="color: #ea580c;">HẠN CHẾ: ${street.name}</strong><br/>
              ${street.description || ''}
            </div>
          `);
        }
      });

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  const flyToUser = () => {
    if (userLocation && mapInstanceRef.current) {
        mapInstanceRef.current.flyTo(userLocation, 15);
    } else {
        alert("Đang lấy vị trí của bạn...");
    }
  };

  return (
    <div className="relative w-full h-[450px] bg-gray-100 rounded border border-gray-200 overflow-hidden">
      <div ref={mapContainerRef} className="w-full h-full z-10" />
      
      {/* Legend Overlay */}
      <div className="absolute bottom-4 left-4 z-[500] bg-white/90 p-3 rounded shadow-lg backdrop-blur-sm border border-gray-200">
        <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-vne-red"></div>
            <span className="text-xs font-bold text-gray-700">Đường Cấm</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-600"></div>
            <span className="text-xs font-bold text-gray-700">Đường Hạn Chế</span>
        </div>
      </div>

      {/* My Location Button */}
      <button 
        onClick={flyToUser}
        className="absolute bottom-4 right-4 z-[500] bg-white p-2.5 rounded shadow-lg border border-gray-200 text-blue-600 active:bg-gray-50"
        title="Vị trí của tôi"
      >
        <Navigation2 className="w-6 h-6 fill-current" />
      </button>
    </div>
  );
};