
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Plus, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Calendar, 
  BarChart3, 
  MessageSquare,
  QrCode,
  TrendingUp,
  Activity,
  Zap
} from 'lucide-react';
import DashboardStats from '@/components/DashboardStats';
import TicketManagement from '@/components/TicketManagement';
import InventoryManagement from '@/components/InventoryManagement';
import CustomerManagement from '@/components/CustomerManagement';
import Navigation from '@/components/Navigation';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeatureShowcase from '@/components/FeatureShowcase';
import AnimatedDashboard from '@/components/AnimatedDashboard';
import EnhancedTicketManagement from '@/components/EnhancedTicketManagement';
import SmartInventory from '@/components/SmartInventory';

const Index = () => {
  const [activeView, setActiveView] = useState('dashboard');

  const renderMainContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <EnhancedDashboardView />;
      case 'tickets':
        return <EnhancedTicketManagement />;
      case 'inventory':
        return <SmartInventory />;
      case 'customers':
        return <CustomerManagement />;
      case 'analytics':
        return <AnimatedDashboard />;
      case 'home':
        return <HomeView />;
      default:
        return <EnhancedDashboardView />;
    }
  };

  const EnhancedDashboardView = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div className="animate-slide-in-left">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <Zap className="w-8 h-8 text-[#005EFF]" />
            Dashboard Intelligent
          </h1>
          <p className="text-gray-600 mt-1">Pilotez votre atelier en temps réel avec des insights précis</p>
        </div>
        <div className="flex gap-3 animate-slide-in-right">
          <Button 
            variant="outline" 
            className="hover:scale-105 transition-transform duration-200"
            onClick={() => setActiveView('analytics')}
          >
            <BarChart3 className="w-4 h-4 mr-2" />
            Analytics Avancées
          </Button>
          <Button className="bg-[#005EFF] hover:bg-[#0047CC] text-white hover:scale-105 transition-transform duration-200">
            <Plus className="w-4 h-4 mr-2" />
            Nouvelle réparation
          </Button>
        </div>
      </div>
      
      <DashboardStats />
      
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Performance en temps réel */}
          <Card className="hover:shadow-xl transition-all duration-300 animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#005EFF]" />
                Performance en temps réel
                <Badge className="bg-green-100 text-green-800 animate-pulse">LIVE</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Taux de satisfaction client</span>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold text-green-600">96%</span>
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  </div>
                </div>
                <Progress value={96} className="h-3 transition-all duration-500" />
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Délai moyen de réparation</span>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold text-blue-600">1.8h</span>
                    <Badge className="bg-blue-100 text-blue-800">-15%</Badge>
                  </div>
                </div>
                <Progress value={82} className="h-3 transition-all duration-500" />
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Objectif CA mensuel</span>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold text-orange-600">74%</span>
                    <Badge className="bg-orange-100 text-orange-800">+8%</Badge>
                  </div>
                </div>
                <Progress value={74} className="h-3 transition-all duration-500" />
              </div>
            </CardContent>
          </Card>
          
          {/* Aperçu des tickets récents */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-[#005EFF]" />
                  Tickets récents
                </CardTitle>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setActiveView('tickets')}
                  className="hover:scale-105 transition-transform"
                >
                  Voir tout
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { id: 'R-2024-0158', client: 'Marie Dubois', device: 'iPhone 13 Pro', status: 'En cours', priority: 'Urgent' },
                { id: 'R-2024-0157', client: 'Pierre Martin', device: 'Samsung S22', status: 'Diagnostic', priority: 'Normal' },
                { id: 'R-2024-0156', client: 'Julie Rodriguez', device: 'iPhone 12', status: 'Terminé', priority: 'Normal' }
              ].map((ticket, index) => (
                <div 
                  key={ticket.id} 
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer hover:scale-102 transform duration-150"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="font-mono text-sm font-semibold text-[#005EFF]">
                      {ticket.id}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{ticket.client}</p>
                      <p className="text-sm text-gray-600">{ticket.device}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={
                      ticket.status === 'En cours' ? 'bg-blue-100 text-blue-800' :
                      ticket.status === 'Diagnostic' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }>
                      {ticket.status}
                    </Badge>
                    {ticket.priority === 'Urgent' && (
                      <Badge className="bg-red-100 text-red-800">
                        {ticket.priority}
                      </Badge>
                    )}
                    <Button variant="ghost" size="sm">
                      <QrCode className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          {/* Alertes intelligentes */}
          <Card className="hover:shadow-xl transition-all duration-300 animate-slide-in-right">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                Alertes intelligentes
                <Badge className="bg-red-100 text-red-800 animate-bounce">3</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-200 hover:shadow-md transition-shadow">
                <AlertTriangle className="w-4 h-4 text-red-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-red-900">Stock critique</p>
                  <p className="text-xs text-red-600">Écrans iPhone 13 Pro - 2 restants</p>
                </div>
                <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                  Commander
                </Button>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200 hover:shadow-md transition-shadow">
                <Clock className="w-4 h-4 text-orange-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-orange-900">Retard détecté</p>
                  <p className="text-xs text-orange-600">Réparation #R-2024-0156 - +2h</p>
                </div>
                <Button size="sm" variant="outline">
                  Notifier
                </Button>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
                <MessageSquare className="w-4 h-4 text-blue-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-900">Message client</p>
                  <p className="text-xs text-blue-600">M. Dubois demande un devis</p>
                </div>
                <Button size="sm" variant="outline">
                  Répondre
                </Button>
              </div>

              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-green-900">Réparation terminée</p>
                  <p className="text-xs text-green-600">iPhone 12 - Mme Rodriguez</p>
                </div>
                <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                  Notifier
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Planning du jour */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#005EFF]" />
                Planning du jour
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { time: '9:30', client: 'M. Dubois', service: 'Écran cassé - Samsung A54', status: 'confirmed' },
                { time: '11:00', client: 'Mme Petit', service: 'Batterie - iPhone 12', status: 'confirmed' },
                { time: '14:00', client: 'M. Martin', service: 'Diagnostic - Huawei P40', status: 'pending' },
                { time: '16:30', client: 'Mlle Rodriguez', service: 'Caméra - OnePlus 9', status: 'confirmed' }
              ].map((appointment, index) => (
                <div 
                  key={appointment.time} 
                  className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-3 h-3 rounded-full ${
                    appointment.status === 'confirmed' ? 'bg-green-500' : 'bg-orange-500'
                  } animate-pulse`}></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <p className="text-sm font-medium">{appointment.time} - {appointment.client}</p>
                      {appointment.status === 'pending' && (
                        <Badge className="bg-orange-100 text-orange-800 text-xs">
                          À confirmer
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-gray-500">{appointment.service}</p>
                  </div>
                </div>
              ))}
              
              <Button 
                variant="outline" 
                className="w-full mt-3 hover:bg-[#005EFF] hover:text-white transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                Ajouter un RDV
              </Button>
            </CardContent>
          </Card>

          {/* QR Code du jour */}
          <Card className="hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-[#005EFF]/5 to-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <QrCode className="w-5 h-5 text-[#005EFF]" />
                QR Code atelier
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="w-32 h-32 bg-white border-2 border-[#005EFF] rounded-lg mx-auto mb-4 flex items-center justify-center">
                <QrCode className="w-16 h-16 text-[#005EFF]" />
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Scannez pour accéder à votre espace client
              </p>
              <Button size="sm" variant="outline" className="w-full">
                Télécharger QR
              </Button>
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
        <main className="flex-1 p-6 ml-64 transition-all duration-300">
          {renderMainContent()}
        </main>
      </div>
    </div>
  );
};

export default Index;
