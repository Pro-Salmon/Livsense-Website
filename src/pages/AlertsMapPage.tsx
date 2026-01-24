import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, AlertTriangle, Plus, Minus, Info } from 'lucide-react';
export function AlertsMapPage() {
  const [zoom, setZoom] = useState(1);
  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Map Header */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-white/90 backdrop-blur-md px-6 pt-12 pb-4 shadow-sm">
        <h1 className="text-xl font-bold text-gray-900">Disease Risk Map</h1>
        <div className="flex items-center space-x-4 mt-2 text-xs font-medium">
          <div className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-red-500 mr-1"></span>
            High Risk
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-yellow-500 mr-1"></span>
            Medium Risk
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span>
            Safe Zone
          </div>
        </div>
      </div>

      {/* Map Container (Mock) */}
      <div className="w-full h-screen bg-gray-200 relative overflow-hidden">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(#52796f 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }} />


        {/* Map Content Container with Zoom */}
        <motion.div
          className="w-full h-full relative"
          animate={{
            scale: zoom
          }}
          transition={{
            duration: 0.3
          }}>

          {/* Risk Zones (Heatmap) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Medium Risk Zone (5km) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/20 rounded-full border border-yellow-400/30 animate-pulse" />

            {/* High Risk Zone (3km) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-500/20 rounded-full border border-red-500/30" />

            {/* Outbreak Center */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-600 rounded-full shadow-lg shadow-red-500/50 animate-ping" />
          </div>

          {/* User Location Pin */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-12 ml-12">
            <div className="relative">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full absolute -top-3 -left-3 animate-ping" />
              <MapPin
                className="w-6 h-6 text-blue-600 drop-shadow-lg relative z-10"
                fill="currentColor" />

              <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-[10px] font-bold whitespace-nowrap mt-1">
                You are here
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map Controls */}
        <div className="absolute right-4 top-32 flex flex-col space-y-2">
          <button
            onClick={() => setZoom((z) => Math.min(z + 0.2, 2))}
            className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-700 active:bg-gray-50">

            <Plus className="w-5 h-5" />
          </button>
          <button
            onClick={() => setZoom((z) => Math.max(z - 0.2, 0.5))}
            className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-700 active:bg-gray-50">

            <Minus className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Alert Card Overlay */}
      <motion.div
        initial={{
          y: 100,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          delay: 0.5,
          type: 'spring'
        }}
        className="absolute bottom-24 left-4 right-4 bg-white rounded-2xl p-4 shadow-xl border-l-4 border-red-500">

        <div className="flex items-start space-x-3">
          <div className="p-2 bg-red-100 rounded-full shrink-0">
            <AlertTriangle className="w-6 h-6 text-red-600" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-gray-900">High Risk Alert</h3>
              <span className="text-xs text-gray-400">2h ago</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Flu outbreak detected in 5km radius. Recommended action: Isolate
              sick livestock immediately.
            </p>
            <button className="mt-3 text-sm font-bold text-red-600 flex items-center">
              View Details <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>);

}
function ArrowRight({ className }: {className?: string;}) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">

      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3" />

    </svg>);

}