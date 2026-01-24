import React from 'react';
import { Home, ClipboardList, Bell, User } from 'lucide-react';
import { motion } from 'framer-motion';
export type Page = 'dashboard' | 'report' | 'alerts' | 'profile';
interface BottomNavProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}
export function BottomNav({ currentPage, onNavigate }: BottomNavProps) {
  const navItems = [
  {
    id: 'dashboard',
    label: 'LivHome',
    icon: Home
  },
  {
    id: 'report',
    label: 'LivReport',
    icon: ClipboardList
  },
  {
    id: 'alerts',
    label: 'LivAlerts',
    icon: Bell
  },
  {
    id: 'profile',
    label: 'LivProfile',
    icon: User
  }];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe pt-2 px-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50">
      <div className="flex justify-between items-center h-16">
        {navItems.map((item) => {
          const isActive = currentPage === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id as Page)}
              className="relative flex flex-col items-center justify-center w-16 h-full">

              <div
                className={`relative p-1.5 rounded-xl transition-colors duration-200 ${isActive ? 'bg-[#52796f]/10' : 'bg-transparent'}`}>

                <Icon
                  className={`w-6 h-6 ${isActive ? 'text-[#52796f]' : 'text-gray-400'}`}
                  strokeWidth={isActive ? 2.5 : 2} />

                {item.id === 'alerts' &&
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
                }
              </div>
              <span
                className={`text-[10px] mt-1 font-medium ${isActive ? 'text-[#52796f]' : 'text-gray-400'}`}>

                {item.label}
              </span>

              {isActive &&
              <motion.div
                layoutId="nav-indicator"
                className="absolute -top-2 w-8 h-1 bg-[#52796f] rounded-b-full" />

              }
            </button>);

        })}
      </div>
    </div>);

}