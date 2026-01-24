import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Syringe, ClipboardCheck, Stethoscope } from 'lucide-react';
import { HealthScoreGauge } from '../components/HealthScoreGauge';
import { TaskCard } from '../components/TaskCard';
interface DashboardPageProps {
  onQuickCheckIn: () => void;
}
export function DashboardPage({ onQuickCheckIn }: DashboardPageProps) {
  const tasks = [
  {
    id: 1,
    title: 'Check Barn A',
    subtitle: 'Daily Inspection • 8:00 AM',
    status: 'due' as const,
    icon: ClipboardCheck
  },
  {
    id: 2,
    title: 'Vaccination Due',
    subtitle: 'Cattle Group B • 2:00 PM',
    status: 'urgent' as const,
    icon: Syringe
  },
  {
    id: 3,
    title: 'Weekly Report',
    subtitle: 'Submitted Yesterday',
    status: 'completed' as const,
    icon: Stethoscope
  }];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="bg-white px-6 pt-12 pb-6 rounded-b-3xl shadow-sm">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-sm text-gray-500 font-medium mb-1">
              Welcome back, Dimas Harrison
            </p>
            <h1 className="text-2xl font-bold text-gray-900">
              Embun Morning Farm
            </h1>
          </div>
          <div className="h-10 w-10 bg-gray-200 rounded-full overflow-hidden border-2 border-white shadow-sm">
            <img
              src="https://api.dicebear.com/7.x/open-peeps/svg?seed=Eliza"
              alt="User" />

          </div>
        </div>

        <HealthScoreGauge score={85} />

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="text-center p-3 bg-gray-50 rounded-xl">
            <p className="text-xs text-gray-500 mb-1">Livestock</p>
            <p className="text-lg font-bold text-gray-900">1,240</p>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-xl">
            <p className="text-xs text-gray-500 mb-1">Sick</p>
            <p className="text-lg font-bold text-orange-600">12</p>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-xl">
            <p className="text-xs text-gray-500 mb-1">Recovered</p>
            <p className="text-lg font-bold text-[#52796f]">45</p>
          </div>
        </div>
      </header>

      {/* Active Tasks */}
      <section className="mt-8">
        <div className="px-6 mb-4 flex justify-between items-end">
          <h2 className="text-lg font-bold text-gray-900">Active Tasks</h2>
          <button className="text-sm text-[#52796f] font-semibold">
            See All
          </button>
        </div>

        <div className="flex overflow-x-auto px-6 pb-4 snap-x hide-scrollbar">
          {tasks.map((task) =>
          <TaskCard
            key={task.id}
            title={task.title}
            subtitle={task.subtitle}
            status={task.status}
            icon={task.icon} />

          )}
        </div>
      </section>

      {/* Recent Activity */}
      <section className="mt-4 px-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          Recent Activity
        </h2>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 space-y-4">
          <div className="flex items-start space-x-3 pb-4 border-b border-gray-100">
            <div className="w-2 h-2 mt-2 rounded-full bg-green-500" />
            <div>
              <p className="text-sm font-medium text-gray-900">
                Health Report Submitted
              </p>
              <p className="text-xs text-gray-500">Barn B • 2 hours ago</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 mt-2 rounded-full bg-blue-500" />
            <div>
              <p className="text-sm font-medium text-gray-900">
                System Sync Complete
              </p>
              <p className="text-xs text-gray-500">
                All data updated • 4 hours ago
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <motion.button
        onClick={onQuickCheckIn}
        whileTap={{
          scale: 0.95
        }}
        className="fixed bottom-24 right-6 bg-[#52796f] text-white px-6 py-4 rounded-full shadow-lg shadow-[#52796f]/40 flex items-center space-x-2 font-bold z-40">

        <Plus className="w-5 h-5" />
        <span>Quick Check-In</span>
      </motion.button>
    </div>);

}