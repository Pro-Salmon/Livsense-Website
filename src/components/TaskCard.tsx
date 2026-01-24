import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, AlertCircle } from 'lucide-react';
interface TaskCardProps {
  title: string;
  subtitle: string;
  status: 'due' | 'completed' | 'urgent';
  icon: React.ElementType;
}
export function TaskCard({
  title,
  subtitle,
  status,
  icon: Icon
}: TaskCardProps) {
  const statusColors = {
    due: 'bg-orange-100 text-orange-700',
    completed: 'bg-green-100 text-green-700',
    urgent: 'bg-red-100 text-red-700'
  };
  const statusLabels = {
    due: 'Due Today',
    completed: 'Completed',
    urgent: 'Urgent'
  };
  return (
    <motion.div
      whileTap={{
        scale: 0.98
      }}
      className="min-w-[280px] bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-start space-x-4 mr-4 snap-start">

      <div className="p-3 bg-gray-50 rounded-lg">
        <Icon className="w-6 h-6 text-gray-600" />
      </div>

      <div className="flex-1">
        <h3 className="font-bold text-gray-900 text-sm mb-1">{title}</h3>
        <div className="flex items-center text-xs text-gray-500 mb-3">
          <Clock className="w-3 h-3 mr-1" />
          {subtitle}
        </div>

        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[status]}`}>

          {status === 'completed' && <CheckCircle2 className="w-3 h-3 mr-1" />}
          {status === 'urgent' && <AlertCircle className="w-3 h-3 mr-1" />}
          {statusLabels[status]}
        </span>
      </div>
    </motion.div>);

}