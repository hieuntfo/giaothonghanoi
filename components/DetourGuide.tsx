import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { DETOURS } from '../data';

export const DetourGuide: React.FC = () => {
  return (
    <div className="bg-white rounded border border-vne-border shadow-sm p-3">
      <h3 className="font-serif font-bold text-lg text-gray-900 mb-3 flex items-center">
        <span className="w-1 h-4 bg-vne-red mr-2 inline-block rounded-sm"></span>
        Lộ trình thay thế
      </h3>

      <div className="space-y-2">
        {DETOURS.map((route, idx) => (
            <div key={idx} className="bg-gray-50 p-3 rounded border border-gray-100">
                <div className="flex flex-wrap items-center gap-1.5 mb-1.5 text-xs font-bold text-gray-800">
                    <span className="flex items-center text-vne-red">
                        <MapPin className="w-3 h-3 mr-1" />
                        {route.from}
                    </span>
                    <ArrowRight className="w-3 h-3 text-gray-400" />
                    <span>{route.to}</span>
                </div>
                <p className="text-gray-700 text-sm leading-snug border-l-2 border-gray-300 pl-2 text-justify">
                    {route.path}
                </p>
            </div>
        ))}
      </div>
    </div>
  );
};