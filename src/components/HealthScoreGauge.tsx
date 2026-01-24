import React from 'react';
import { motion } from 'framer-motion';
interface HealthScoreGaugeProps {
  score: number;
}
export function HealthScoreGauge({ score }: HealthScoreGaugeProps) {
  // SVG parameters
  const radius = 80;
  const strokeWidth = 12;
  const circumference = Math.PI * radius; // Semi-circle
  const strokeDashoffset = circumference - score / 100 * circumference;
  return (
    <div className="relative flex flex-col items-center justify-center py-6">
      <svg
        width="200"
        height="110"
        viewBox="0 0 200 110"
        className="overflow-visible">

        {/* Background Arc */}
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          strokeLinecap="round" />


        {/* Foreground Arc (Animated) */}
        <motion.path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="#52796f"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{
            strokeDashoffset: circumference
          }}
          animate={{
            strokeDashoffset
          }}
          transition={{
            duration: 1.5,
            ease: 'easeOut'
          }} />

      </svg>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-center mt-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.5
          }}>

          <span className="text-4xl font-bold text-gray-900">{score}%</span>
          <p className="text-sm font-medium text-[#52796f]">Healthy</p>
        </motion.div>
      </div>
    </div>);

}