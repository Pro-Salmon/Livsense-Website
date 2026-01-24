import React, { useEffect, useState } from 'react';
import { MapPin, CheckCircle2, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
export function LocationCapture() {
  const [location, setLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate GPS capture delay
    const timer = setTimeout(() => {
      setLocation({
        lat: -6.2088,
        lng: 106.8456
      });
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-blue-50 rounded-full text-blue-600">
          <MapPin className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
            Location Tag
          </p>
          {loading ?
          <p className="text-sm text-gray-400">Acquiring satellites...</p> :

          <p className="text-sm font-bold text-gray-900 font-mono">
              {location?.lat.toFixed(4)}, {location?.lng.toFixed(4)}
            </p>
          }
        </div>
      </div>

      <div className="flex items-center">
        {loading ?
        <motion.div
          animate={{
            rotate: 360
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: 'linear'
          }}>

            <Loader2 className="w-5 h-5 text-blue-500" />
          </motion.div> :

        <motion.div
          initial={{
            scale: 0,
            opacity: 0
          }}
          animate={{
            scale: 1,
            opacity: 1
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20
          }}>

            <CheckCircle2 className="w-6 h-6 text-emerald-500" />
          </motion.div>
        }
      </div>
    </div>);

}