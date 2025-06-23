
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
  Home
} from 'lucide-react';

interface NavigationProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

const Navigation = ({ activeView, onViewChange }: NavigationProps) => {
  const navigationItems = [
    { id: 'home', icon: Home, label: 'Accueil', badge: null },
    { id: 'dashboard', icon: LayoutDashboard, label: 'Tableau de bord', badge: null },
    { id: 'tickets', icon: Wrench, label: 'Réparations', badge: '12' },
    { id: 'inventory', icon: Package, label: 'Stock', badge: '3' },
    { id: 'customers', icon: Users, label: 'Clients', badge: null },
    { id: 'invoicing', icon: CreditCard, label: 'Facturation', badge: null },
    { id: 'appointments', icon: Calendar, label: 'Rendez-vous', badge: '5' },
    { id: 'reports', icon: BarChart3, label: 'Rapports', badge: null },
    { id: 'settings', icon: Settings, label: 'Paramètres', badge: null },
  ];

  return (
    <nav className="w-64 bg-white border-r border-gray-200 fixed left-0 top-16 bottom-0 overflow-y-auto">
      <div className="p-4">
        <div className="space-y-2">
          {navigationItems.map((item) => (
            <Button
              key={item.id}
              variant={activeView === item.id ? "default" : "ghost"}
              className={`w-full justify-start gap-3 ${
                activeView === item.id 
                  ? 'bg-[#005EFF] hover:bg-[#0047CC] text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => onViewChange(item.id)}
            >
              <item.icon className="w-5 h-5" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <Badge 
                  variant={activeView === item.id ? "secondary" : "outline"}
                  className={`${
                    activeView === item.id 
                      ? 'bg-white/20 text-white border-white/30' 
                      : 'bg-[#005EFF] text-white border-[#005EFF]'
                  }`}
                >
                  {item.badge}
                </Badge>
              )}
            </Button>
          ))}
        </div>
        
        <div className="mt-8 p-4 bg-gradient-to-r from-[#005EFF]/10 to-blue-100 rounded-lg">
          <h3 className="font-semibold text-gray-900 text-sm mb-2">💡 Astuce du jour</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Utilisez le scan IMEI pour créer rapidement un nouveau ticket de réparation.
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
