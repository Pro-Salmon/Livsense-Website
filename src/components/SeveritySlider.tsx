import React from 'react';
import { motion } from 'framer-motion';
interface SeveritySliderProps {
  value: number;
  onChange: (value: number) => void;
}
export function SeveritySlider({ value, onChange }: SeveritySliderProps) {
  const levels = [
  {
    val: 1,
    label: 'Mild',
    color: 'bg-emerald-400',
    text: 'text-emerald-700'
  },
  {
    val: 2,
    label: 'Moderate',
    color: 'bg-yellow-400',
    text: 'text-yellow-700'
  },
  {
    val: 3,
    label: 'Concerning',
    color: 'bg-orange-400',
    text: 'text-orange-700'
  },
  {
    val: 4,
    label: 'Severe',
    color: 'bg-red-400',
    text: 'text-red-700'
  },
  {
    val: 5,
    label: 'Critical',
    color: 'bg-red-600',
    text: 'text-red-900'
  }];

  const currentLevel = levels.find((l) => l.val === value) || levels[0];
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
      <div className="flex justify-between items-end mb-6">
        <h3 className="text-lg font-bold text-gray-900">Severity Level</h3>
        <span
          className={`text-sm font-bold px-3 py-1 rounded-full bg-opacity-20 ${currentLevel.text} bg-current`}>

          {currentLevel.label}
        </span>
      </div>

      <div className="relative h-12 flex items-center">
        {/* Track Background */}
        <div className="absolute w-full h-4 rounded-full bg-gradient-to-r from-emerald-400 via-yellow-400 to-red-600 opacity-30" />

        {/* Step Markers */}
        <div className="absolute w-full flex justify-between px-1">
          {[1, 2, 3, 4, 5].map((step) =>
          <div
            key={step}
            className={`w-1 h-4 rounded-full ${step <= value ? 'bg-gray-400' : 'bg-gray-200'}`} />

          )}
        </div>

        {/* Interactive Input */}
        <input
          type="range"
          min="1"
          max="5"
          step="1"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="absolute w-full h-12 opacity-0 cursor-pointer z-20"
          aria-label="Severity Slider" />


        {/* Custom Thumb */}
        <motion.div
          className={`absolute h-8 w-8 rounded-full border-4 border-white shadow-lg z-10 pointer-events-none ${currentLevel.color}`}
          style={{
            left: `calc(${(value - 1) / 4 * 100}% - 16px)`
          }}
          animate={{
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 0.2
          }} />

      </div>

      <div className="flex justify-between mt-2 text-xs text-gray-400 font-medium">
        <span>Mild</span>
        <span>Critical</span>
      </div>
    </div>);

}