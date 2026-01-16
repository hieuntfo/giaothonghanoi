import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { DETOURS } from '../data';

export const DetourGuide: React.FC = () => {
  return (
    <div className="bg-white rounded border border-vne-border shadow-sm p-4">
      <h3 className="font-serif font-bold text-xl text-gray-900 mb-4 flex items-center">
        <span className="w-1.5 h-5 bg-vne-red mr-3 inline-block rounded-sm"></span>
        Lộ trình thay thế
      </h3>

      <div className="space-y-4">
        {DETOURS.map((route, idx) => (
            <div key={idx} className="bg-gray-50 p-4 rounded border border-gray-100">
                <div className="flex flex-wrap items-center gap-2 mb-2 text-sm font-bold text-gray-800">
                    <span className="flex items-center text-vne-red">
                        <MapPin className="w-4 h-4 mr-1" />
                        {route.from}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <span>{route.to}</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed border-l-2 border-gray-300 pl-3 text-justify">
                    {route.path}
                </p>
            </div>
        ))}
      </div>
    </div>
  );
};