
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Filter, Plus, Eye, Edit, Clock, CheckCircle, AlertTriangle, User } from 'lucide-react';

const TicketManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const tickets = [
    {
      id: 'R-2024-0158',
      customer: 'Marie Dubois',
      phone: '+33 6 12 34 56 78',
      device: 'iPhone 13 Pro',
      issue: 'Écran cassé',
      status: 'En cours',
      priority: 'Urgent',
      technician: 'Ahmed K.',
      createdAt: '2024-01-15 14:30',
      estimatedTime: '2h',
      price: '180€'
    },
    {
      id: 'R-2024-0157',
      customer: 'Pierre Martin',
      phone: '+33 6 98 76 54 32',
      device: 'Samsung Galaxy S22',
      issue: 'Batterie défaillante',
      status: 'Diagnostic',
      priority: 'Normal',
      technician: 'Sophie L.',
      createdAt: '2024-01-15 11:15',
      estimatedTime: '1.5h',
      price: '120€'
    },
    {
      id: 'R-2024-0156',
      customer: 'Julie Rodriguez',
      phone: '+33 6 45 67 89 12',
      device: 'iPhone 12',
      issue: 'Problème de charge',
      status: 'En attente pièce',
      priority: 'Normal',
      technician: 'Ahmed K.',
      createdAt: '2024-01-14 16:45',
      estimatedTime: '1h',
      price: '85€'
    },
    {
      id: 'R-2024-0155',
      customer: 'Thomas Leroy',
      phone: '+33 6 23 45 67 89',
      device: 'Huawei P40',
      issue: 'Caméra ne fonctionne plus',
      status: 'Terminé',
      priority: 'Normal',
      technician: 'Sophie L.',
      createdAt: '2024-01-14 09:30',
      estimatedTime: '2.5h',
      price: '150€'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En cours':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Diagnostic':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'En attente pièce':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'Terminé':
        return 'bg-green-100 text-green-800 border-green-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Urgent':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'Normal':
        return 'bg-gray-100 text-gray-800 border-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-[#005EFF]" />
            Gestion des réparations
          </CardTitle>
          <Button className="bg-[#005EFF] hover:bg-[#0047CC] text-white">
            <Plus className="w-4 h-4 mr-2" />
            Nouveau ticket
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Rechercher par ticket, client, appareil..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filtres
            </Button>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">Tous (12)</TabsTrigger>
              <TabsTrigger value="progress">En cours (4)</TabsTrigger>
              <TabsTrigger value="waiting">En attente (3)</TabsTrigger>
              <TabsTrigger value="diagnostic">Diagnostic (2)</TabsTrigger>
              <TabsTrigger value="completed">Terminés (3)</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-3 mt-4">
              {tickets.map((ticket) => (
                <div key={ticket.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="font-mono text-sm font-semibold text-[#005EFF]">
                        {ticket.id}
                      </div>
                      <Badge className={`${getStatusColor(ticket.status)} border`}>
                        {ticket.status}
                      </Badge>
                      <Badge className={`${getPriorityColor(ticket.priority)} border`}>
                        {ticket.priority}
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-500" />
                        <div>
                          <p className="font-medium text-gray-900">{ticket.customer}</p>
                          <p className="text-sm text-gray-500">{ticket.phone}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="font-medium text-gray-900">{ticket.device}</p>
                      <p className="text-sm text-gray-600">{ticket.issue}</p>
                      <p className="text-xs text-gray-500">Technicien: {ticket.technician}</p>
                    </div>
                    
                    <div className="text-right space-y-1">
                      <p className="font-semibold text-[#005EFF] text-lg">{ticket.price}</p>
                      <div className="flex items-center justify-end gap-1 text-sm text-gray-500">
                        <Clock className="w-3 h-3" />
                        {ticket.estimatedTime}
                      </div>
                      <p className="text-xs text-gray-400">{ticket.createdAt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  );
};

export default TicketManagement;
