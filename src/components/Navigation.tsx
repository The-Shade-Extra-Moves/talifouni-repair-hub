
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  LayoutDashboard, 
  Wrench, 
  Package, 
  Users, 
  FileText, 
  BarChart3, 
  Calendar,
  Settings,
  CreditCard,
  Home,
  Activity,
  TrendingUp
} from 'lucide-react';

interface NavigationProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

const Navigation = ({ activeView, onViewChange }: NavigationProps) => {
  const navigationItems = [
    { id: 'home', icon: Home, label: 'Accueil', badge: null },
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', badge: null },
    { id: 'analytics', icon: TrendingUp, label: 'Analytics', badge: 'NEW' },
    { id: 'tickets', icon: Wrench, label: 'Réparations', badge: '12' },
    { id: 'inventory', icon: Package, label: 'Stock Intelligent', badge: '3' },
    { id: 'customers', icon: Users, label: 'Clients', badge: null },
    { id: 'invoicing', icon: CreditCard, label: 'Facturation', badge: null },
    { id: 'appointments', icon: Calendar, label: 'Rendez-vous', badge: '5' },
    { id: 'reports', icon: BarChart3, label: 'Rapports', badge: null },
    { id: 'settings', icon: Settings, label: 'Paramètres', badge: null },
  ];

  return (
    <nav className="w-64 bg-white border-r border-gray-200 fixed left-0 top-16 bottom-0 overflow-y-auto shadow-lg">
      <div className="p-4">
        <div className="space-y-2">
          {navigationItems.map((item) => (
            <Button
              key={item.id}
              variant={activeView === item.id ? "default" : "ghost"}
              className={`w-full justify-start gap-3 transition-all duration-200 ${
                activeView === item.id 
                  ? 'bg-[#005EFF] hover:bg-[#0047CC] text-white shadow-md transform scale-105' 
                  : 'text-gray-700 hover:bg-gray-100 hover:scale-102'
              }`}
              onClick={() => onViewChange(item.id)}
            >
              <item.icon className="w-5 h-5" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <Badge 
                  variant={activeView === item.id ? "secondary" : "outline"}
                  className={`transition-all duration-200 ${
                    activeView === item.id 
                      ? 'bg-white/20 text-white border-white/30' 
                      : item.badge === 'NEW'
                        ? 'bg-green-100 text-green-800 border-green-300 animate-pulse'
                        : 'bg-[#005EFF] text-white border-[#005EFF]'
                  }`}
                >
                  {item.badge}
                </Badge>
              )}
            </Button>
          ))}
        </div>
        
        <div className="mt-8 p-4 bg-gradient-to-r from-[#005EFF]/10 to-blue-100 rounded-lg hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-gray-900 text-sm mb-2 flex items-center gap-2">
            💡 Astuce du jour
            <Activity className="w-4 h-4 text-[#005EFF]" />
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Utilisez le scan IMEI et les codes QR pour créer rapidement vos tickets de réparation.
          </p>
          <Button size="sm" variant="outline" className="w-full mt-3 text-xs">
            En savoir plus
          </Button>
        </div>

        {/* Section statistiques rapides */}
        <div className="mt-6 p-3 bg-gray-50 rounded-lg">
          <h4 className="text-xs font-semibold text-gray-700 mb-3 uppercase tracking-wide">
            Aujourd'hui
          </h4>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Réparations</span>
              <Badge className="bg-blue-100 text-blue-800">8</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">CA réalisé</span>
              <Badge className="bg-green-100 text-green-800">1,247€</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Satisfaction</span>
              <Badge className="bg-yellow-100 text-yellow-800">4.8/5</Badge>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
