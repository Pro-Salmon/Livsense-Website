import React from 'react';
import {
  Settings,
  LogOut,
  Bell,
  Globe,
  ChevronRight,
  User,
  Shield } from
'lucide-react';
interface ProfilePageProps {
  onLogout: () => void;
}
export function ProfilePage({ onLogout }: ProfilePageProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-8 rounded-b-3xl shadow-sm mb-6">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
            <img
              src="https://api.dicebear.com/7.x/open-peeps/svg?seed=Eliza"
              alt="User"
              className="w-full h-full object-cover" />

          </div>
          <h1 className="text-xl font-bold text-gray-900">Dimas Harrison</h1>
          <p className="text-sm text-[#52796f] font-medium">
            Field Officer • Embun Morning Farm
          </p>

          <div className="grid grid-cols-2 gap-4 w-full mt-8">
            <div className="bg-gray-50 p-4 rounded-xl text-center">
              <p className="text-2xl font-bold text-gray-900">142</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Live Reports
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl text-center">
              <p className="text-2xl font-bold text-gray-900">85%</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Avg Health
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Settings List */}
      <div className="px-4 space-y-4">
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <div className="p-4 border-b border-gray-100 font-bold text-gray-900 text-sm">
            Account Settings
          </div>

          <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-50">
            <div className="flex items-center space-x-3">
              <User className="w-5 h-5 text-gray-400" />
              <span className="text-gray-700 font-medium">
                Personal Information
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-300" />
          </button>

          <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-50">
            <div className="flex items-center space-x-3">
              <Bell className="w-5 h-5 text-gray-400" />
              <span className="text-gray-700 font-medium">Notifications</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-300" />
          </button>

          <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-gray-400" />
              <span className="text-gray-700 font-medium">
                Security & Privacy
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-300" />
          </button>
        </div>

        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <div className="p-4 border-b border-gray-100 font-bold text-gray-900 text-sm">
            App Preferences
          </div>

          <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-gray-400" />
              <span className="text-gray-700 font-medium">Language</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400">English</span>
              <ChevronRight className="w-5 h-5 text-gray-300" />
            </div>
          </button>
        </div>

        <button
          onClick={onLogout}
          className="w-full bg-white rounded-xl p-4 flex items-center justify-center space-x-2 text-red-600 font-bold shadow-sm hover:bg-red-50 transition-colors">

          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>

        <p className="text-center text-xs text-gray-400 py-4">
          Version 2.4.0 (Build 1042)
        </p>
      </div>
    </div>);

}