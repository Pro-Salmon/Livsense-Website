import React, { useEffect, useState } from 'react';
import { Wifi, WifiOff, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function OfflineIndicator() {
  const [isOffline, setIsOffline] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  // Simulate random connection drops for demo purposes
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsOffline((prev) => !prev);
        if (!isOffline) {
          // If coming back online, simulate sync
          setIsSyncing(true);
          setTimeout(() => setIsSyncing(false), 2000);
        }
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [isOffline]);
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          height: 0,
          opacity: 0
        }}
        animate={{
          height: 'auto',
          opacity: 1
        }}
        exit={{
          height: 0,
          opacity: 0
        }}
        className={`w-full px-4 py-2 flex items-center justify-center text-sm font-medium text-white transition-colors duration-300 ${isOffline ? 'bg-amber-500' : 'bg-emerald-600'}`}>

        {isOffline ?
        <div className="flex items-center space-x-2">
            <WifiOff className="w-4 h-4" />
            <span>Offline Mode • Reports Queued</span>
          </div> :

        <div className="flex items-center space-x-2">
            {isSyncing ?
          <motion.div
            animate={{
              rotate: 360
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: 'linear'
            }}>

                <RefreshCw className="w-4 h-4" />
              </motion.div> :

          <Wifi className="w-4 h-4" />
          }
            <span>
              {isSyncing ? 'Syncing Data...' : 'Connected • System Online'}
            </span>
          </div>
        }
      </motion.div>
    </AnimatePresence>);

}