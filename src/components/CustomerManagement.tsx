
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users, Search, Plus, Phone, Mail, MapPin, Star, Clock, Euro } from 'lucide-react';

const CustomerManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const customers = [
    {
      id: 'C-001',
      name: 'Marie Dubois',
      email: 'marie.dubois@email.com',
      phone: '+33 6 12 34 56 78',
      address: '15 Rue de la République, 75001 Paris',
      repairs: 3,
      totalSpent: '450€',
      lastVisit: '2024-01-15',
      satisfaction: 5,
      status: 'VIP',
      notes: 'Cliente fidèle, toujours ponctuelle'
    },
    {
      id: 'C-002',
      name: 'Pierre Martin',
      email: 'pierre.martin@email.com',
      phone: '+33 6 98 76 54 32',
      address: '8 Avenue des Champs, 75008 Paris',
      repairs: 1,
      totalSpent: '120€',
      lastVisit: '2024-01-15',
      satisfaction: 4,
      status: 'Nouveau',
      notes: 'Première visite, satisfait du service'
    },
    {
      id: 'C-003',
      name: 'Julie Rodriguez',
      email: 'julie.rodriguez@email.com',
      phone: '+33 6 45 67 89 12',
      address: '22 Boulevard Saint-Germain, 75006 Paris',
      repairs: 5,
      totalSpent: '720€',
      lastVisit: '2024-01-14',
      satisfaction: 5,
      status: 'Fidèle',
      notes: 'Recommande régulièrement nos services'
    },
    {
      id: 'C-004',
      name: 'Thomas Leroy',
      email: 'thomas.leroy@email.com',
      phone: '+33 6 23 45 67 89',
      address: '33 Rue du Commerce, 75015 Paris',
      repairs: 2,
      totalSpent: '285€',
      lastVisit: '2024-01-14',
      satisfaction: 4,
      status: 'Régulier',
      notes: 'Préfère les rendez-vous le matin'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'VIP':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'Fidèle':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'Régulier':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Nouveau':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`} 
      />
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestion des clients</h1>
          <p className="text-gray-600 mt-1">Suivi et fidélisation de votre clientèle</p>
        </div>
        <Button className="bg-[#005EFF] hover:bg-[#0047CC] text-white">
          <Plus className="w-4 h-4 mr-2" />
          Nouveau client
        </Button>
      </div>

      {/* Stats clients */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total clients</p>
                <p className="text-2xl font-bold text-gray-900">247</p>
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Nouveaux ce mois</p>
                <p className="text-2xl font-bold text-green-600">18</p>
              </div>
              <Plus className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Clients VIP</p>
                <p className="text-2xl font-bold text-purple-600">23</p>
              </div>
              <Star className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Satisfaction moy.</p>
                <p className="text-2xl font-bold text-yellow-600">4.7/5</p>
              </div>
              <Star className="w-8 h-8 text-yellow-500 fill-current" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-[#005EFF]" />
            Base clients
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Rechercher un client par nom, téléphone, email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="space-y-4">
              {customers.map((customer) => (
                <div key={customer.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src="/placeholder.svg" alt={customer.name} />
                        <AvatarFallback className="bg-[#005EFF] text-white">
                          {customer.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-gray-900">{customer.name}</h3>
                        <p className="text-sm text-gray-500 font-mono">{customer.id}</p>
                      </div>
                      <Badge className={`${getStatusColor(customer.status)} border`}>
                        {customer.status}
                      </Badge>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        {renderStars(customer.satisfaction)}
                      </div>
                      <p className="text-sm text-gray-500">Satisfaction</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4 text-gray-500" />
                        <span>{customer.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <span>{customer.email}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-gray-500 mt-0.5" />
                        <span className="text-gray-600">{customer.address}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">Dernière visite: {customer.lastVisit}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Euro className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-semibold text-green-600">
                          {customer.totalSpent} dépensés
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {customer.repairs} réparation{customer.repairs > 1 ? 's' : ''}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Notes:</p>
                      <p className="text-sm text-gray-800 italic">{customer.notes}</p>
                      <div className="flex gap-2 mt-3">
                        <Button variant="outline" size="sm">
                          Voir historique
                        </Button>
                        <Button size="sm" className="bg-[#005EFF] hover:bg-[#0047CC] text-white">
                          Contacter
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomerManagement;
