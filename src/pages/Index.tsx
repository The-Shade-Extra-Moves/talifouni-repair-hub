
import { useState } from 'react';
import AuthWrapper from '@/components/auth/AuthWrapper';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeatureShowcase from '@/components/FeatureShowcase';
import AnimatedDashboard from '@/components/AnimatedDashboard';
import EnhancedTicketManagement from '@/components/EnhancedTicketManagement';
import SmartInventory from '@/components/SmartInventory';
import CustomerManagement from '@/components/CustomerManagement';
import SettingsInterface from '@/components/settings/SettingsInterface';

const Index = () => {
  const [user, setUser] = useState(null);
  const [activeView, setActiveView] = useState('home');
  const [showSettings, setShowSettings] = useState(false);

  const handleAuthSuccess = (userData: any) => {
    setUser(userData);
    setActiveView('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setActiveView('home');
  };

  const renderContent = () => {
    if (!user) {
      return <AuthWrapper onAuthSuccess={handleAuthSuccess} />;
    }

    switch (activeView) {
      case 'home':
        return (
          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <HeroSection />
            <FeatureShowcase />
          </div>
        );
      case 'dashboard':
        return <AnimatedDashboard />;
      case 'tickets':
        return <EnhancedTicketManagement />;
      case 'inventory':
        return <SmartInventory />;
      case 'customers':
        return <CustomerManagement />;
      case 'analytics':
        return <AnimatedDashboard />;
      default:
        return (
          <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {activeView.charAt(0).toUpperCase() + activeView.slice(1)}
              </h2>
              <p className="text-gray-600">Cette section est en cours de développement</p>
            </div>
          </div>
        );
    }
  };

  if (!user) {
    return <AuthWrapper onAuthSuccess={handleAuthSuccess} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        user={user} 
        onLogout={handleLogout}
        onOpenSettings={() => setShowSettings(true)}
      />
      
      <div className="flex">
        <Navigation 
          activeView={activeView} 
          onViewChange={setActiveView} 
        />
        
        <main className="flex-1 ml-64 pt-16">
          {renderContent()}
        </main>
      </div>

      {showSettings && (
        <SettingsInterface onClose={() => setShowSettings(false)} />
      )}
    </div>
  );
};

export default Index;
