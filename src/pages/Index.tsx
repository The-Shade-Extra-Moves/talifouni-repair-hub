
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Smartphone, Users, Settings, Calendar, Search, Plus, Clock, CheckCircle, AlertTriangle, FileText, Zap, BarChart3, TrendingUp, Euro, Package, UserCheck, MessageSquare } from 'lucide-react';
import DashboardStats from '@/components/DashboardStats';
import TicketManagement from '@/components/TicketManagement';
import InventoryManagement from '@/components/InventoryManagement';
import CustomerManagement from '@/components/CustomerManagement';
import Navigation from '@/components/Navigation';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeatureShowcase from '@/components/FeatureShowcase';

const Index = () => {
  const [activeView, setActiveView] = useState('dashboard');

  const renderMainContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardView />;
      case 'tickets':
        return <TicketManagement />;
      case 'inventory':
        return <InventoryManagement />;
      case 'customers':
        return <CustomerManagement />;
      case 'home':
        return <HomeView />;
      default:
        return <DashboardView />;
    }
  };

  const DashboardView = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tableau de bord</h1>
          <p className="text-gray-600 mt-1">Vue d'ensemble de votre activité en temps réel</p>
        </div>
        <Button className="bg-[#005EFF] hover:bg-[#0047CC] text-white">
          <Plus className="w-4 h-4 mr-2" />
          Nouvelle réparation
        </Button>
      </div>
      
      <DashboardStats />
      
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[#005EFF]" />
                Performance cette semaine
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Taux de satisfaction</span>
                  <span className="text-lg font-semibold text-green-600">94%</span>
                </div>
                <Progress value={94} className="h-2" />
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Temps moyen de réparation</span>
                  <span className="text-lg font-semibold text-blue-600">2.3h</span>
                </div>
                <Progress value={77} className="h-2" />
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Objectif mensuel</span>
                  <span className="text-lg font-semibold text-orange-600">68%</span>
                </div>
                <Progress value={68} className="h-2" />
              </div>
            </CardContent>
          </Card>
          
          <TicketManagement />
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                Alertes importantes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                <AlertTriangle className="w-4 h-4 text-red-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-red-900">Stock faible</p>
                  <p className="text-xs text-red-600">Écrans iPhone 13 - 2 restants</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                <Clock className="w-4 h-4 text-orange-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-orange-900">Retard</p>
                  <p className="text-xs text-orange-600">Réparation #R-2024-0156</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <MessageSquare className="w-4 h-4 text-blue-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-900">Nouveau message</p>
                  <p className="text-xs text-blue-600">Client demande un devis</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#005EFF]" />
                Rendez-vous aujourd'hui
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 p-2 border rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">9:30 - M. Dubois</p>
                  <p className="text-xs text-gray-500">Écran cassé - Samsung A54</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-2 border rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">14:00 - Mme Martin</p>
                  <p className="text-xs text-gray-500">Batterie - iPhone 12</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-2 border rounded-lg">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">16:30 - M. Rodriguez</p>
                  <p className="text-xs text-gray-500">Diagnostic - Huawei P40</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const HomeView = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <HeroSection />
      <FeatureShowcase />
    </div>
  );

  if (activeView === 'home') {
    return <HomeView />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Navigation activeView={activeView} onViewChange={setActiveView} />
        <main className="flex-1 p-6 ml-64">
          {renderMainContent()}
        </main>
      </div>
    </div>
  );
};

export default Index;
