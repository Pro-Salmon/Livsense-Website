import React, { useState } from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function EmergencyButton() {
  const [isPressed, setIsPressed] = useState(false);
  const handlePress = () => {
    setIsPressed(true);
    // Reset after 3 seconds for demo
    setTimeout(() => setIsPressed(false), 3000);
  };
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-gray-200 z-50 pb-20">
      <AnimatePresence mode="wait">
        {!isPressed ?
        <motion.button
          key="emergency"
          onClick={handlePress}
          initial={{
            scale: 1
          }}
          animate={{
            scale: [1, 1.02, 1],
            boxShadow: [
            '0px 0px 0px rgba(220, 38, 38, 0)',
            '0px 0px 15px rgba(220, 38, 38, 0.3)',
            '0px 0px 0px rgba(220, 38, 38, 0)']

          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: 'easeInOut'
          }}
          whileTap={{
            scale: 0.95
          }}
          className="w-full h-16 bg-red-600 text-white rounded-xl font-bold text-lg flex items-center justify-center space-x-3 shadow-lg shadow-red-200">

            <AlertTriangle className="w-6 h-6" />
            <span>REPORT EMERGENCY</span>
          </motion.button> :

        <motion.div
          key="success"
          initial={{
            scale: 0.9,
            opacity: 0
          }}
          animate={{
            scale: 1,
            opacity: 1
          }}
          exit={{
            scale: 0.9,
            opacity: 0
          }}
          className="w-full h-16 bg-red-800 text-white rounded-xl font-bold text-lg flex items-center justify-center space-x-3 shadow-lg">

            <CheckCircle className="w-6 h-6" />
            <span>ALERT SENT - HELP NOTIFIED</span>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}