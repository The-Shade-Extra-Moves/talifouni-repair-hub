
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Bell, Search, MessageSquare, Settings } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[#005EFF] to-[#0047CC] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T+</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Talifouni+</h1>
              <p className="text-xs text-gray-500">Atelier Pro - Centre Ville</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Rechercher un ticket, client..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005EFF] focus:border-transparent w-80"
            />
          </div>
          
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="w-5 h-5" />
            <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 text-xs bg-red-500 hover:bg-red-600">
              3
            </Badge>
          </Button>
          
          <Button variant="ghost" size="sm">
            <MessageSquare className="w-5 h-5" />
          </Button>
          
          <Button variant="ghost" size="sm">
            <Settings className="w-5 h-5" />
          </Button>
          
          <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder.svg" alt="Avatar" />
              <AvatarFallback className="bg-[#005EFF] text-white">JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-gray-900">Jean Dupont</p>
              <p className="text-xs text-gray-500">Manager</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
