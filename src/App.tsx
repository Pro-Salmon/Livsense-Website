import React, { useState } from 'react';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { SymptomReportPage } from './pages/SymptomReportPage';
import { AlertsMapPage } from './pages/AlertsMapPage';
import { ProfilePage } from './pages/ProfilePage';
import { BottomNav, Page } from './components/BottomNav';
export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('dashboard');
  };
  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }
  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Page Content */}
      <div className="h-full">
        {currentPage === 'dashboard' &&
        <DashboardPage onQuickCheckIn={() => setCurrentPage('report')} />
        }
        {currentPage === 'report' && <SymptomReportPage />}
        {currentPage === 'alerts' && <AlertsMapPage />}
        {currentPage === 'profile' && <ProfilePage onLogout={handleLogout} />}
      </div>

      {/* Bottom Navigation */}
      <BottomNav currentPage={currentPage} onNavigate={setCurrentPage} />
    </div>);

}