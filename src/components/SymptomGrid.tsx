import React from 'react';
import {
  Utensils,
  Zap,
  AlertTriangle,
  Users,
  Footprints,
  Droplets,
  Wind,
  Waves,
  Eye,
  Circle,
  Scan,
  Thermometer } from
'lucide-react';
import { motion } from 'framer-motion';
export type Symptom = {
  id: string;
  label: string;
  icon: React.ElementType;
  category: 'behavioral' | 'physical' | 'visual';
};
const symptoms: Symptom[] = [
{
  id: 'not-eating',
  label: 'Not Eating',
  icon: Utensils,
  category: 'behavioral'
},
{
  id: 'lethargic',
  label: 'Lethargic',
  icon: Zap,
  category: 'behavioral'
},
{
  id: 'limping',
  label: 'Limping',
  icon: Footprints,
  category: 'physical'
},
{
  id: 'drooling',
  label: 'Drooling',
  icon: Droplets,
  category: 'physical'
},
{
  id: 'red-eyes',
  label: 'Red Eyes',
  icon: Eye,
  category: 'visual'
},
{
  id: 'fever',
  label: 'High Fever',
  icon: Thermometer,
  category: 'physical'
},
{
  id: 'breathing',
  label: 'Heavy Breath',
  icon: Wind,
  category: 'physical'
},
{
  id: 'isolation',
  label: 'Isolating',
  icon: Users,
  category: 'behavioral'
}];

interface SymptomGridProps {
  selectedSymptoms: string[];
  onToggle: (id: string) => void;
}
export function SymptomGrid({ selectedSymptoms, onToggle }: SymptomGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {symptoms.map((symptom, index) => {
        const isSelected = selectedSymptoms.includes(symptom.id);
        const Icon = symptom.icon;
        return (
          <motion.button
            key={symptom.id}
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: index * 0.05
            }}
            onClick={() => onToggle(symptom.id)}
            whileTap={{
              scale: 0.95
            }}
            className={`
              relative flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-200 h-32
              ${isSelected ? 'border-emerald-500 bg-emerald-50 shadow-md' : 'border-gray-100 bg-white shadow-sm hover:border-gray-200'}
            `}>

            {isSelected &&
            <div className="absolute top-3 right-3 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                <svg
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">

                  <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7" />

                </svg>
              </div>
            }

            <Icon
              className={`w-10 h-10 mb-3 ${isSelected ? 'text-emerald-600' : 'text-gray-500'}`}
              strokeWidth={1.5} />


            <span
              className={`text-sm font-bold ${isSelected ? 'text-emerald-800' : 'text-gray-600'}`}>

              {symptom.label}
            </span>
          </motion.button>);

      })}
    </div>);

}