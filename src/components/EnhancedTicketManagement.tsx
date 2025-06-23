
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  Plus, 
  Eye, 
  Edit, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  User, 
  QrCode,
  Camera,
  FileText,
  Wrench,
  TestTube,
  Package,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const EnhancedTicketManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const tickets = [
    {
      id: 'R-2024-0158',
      qrCode: 'QR_R20240158',
      customer: {
        name: 'Marie Dubois',
        phone: '+33 6 12 34 56 78',
        email: 'marie.dubois@email.com',
        address: '15 Rue de la République, 75001 Paris'
      },
      device: 'iPhone 13 Pro',
      imei: '358240051111110',
      issue: 'Écran cassé',
      status: 'En cours',
      priority: 'Urgent',
      technician: 'Ahmed K.',
      createdAt: '2024-01-15 14:30',
      estimatedTime: '2h',
      price: '180€',
      timeline: [
        { step: 'Réception', status: 'completed', date: '2024-01-15 14:30' },
        { step: 'Diagnostic', status: 'completed', date: '2024-01-15 15:00' },
        { step: 'Réparation', status: 'in-progress', date: null },
        { step: 'Test', status: 'pending', date: null },
        { step: 'Prêt', status: 'pending', date: null }
      ],
      parts: [
        { name: 'Écran iPhone 13 Pro', quantity: 1, price: '150€' },
        { name: 'Film protecteur', quantity: 1, price: '15€' }
      ],
      photos: ['photo1.jpg', 'photo2.jpg'],
      notes: 'Écran complètement fissuré, tactile non fonctionnel'
    },
    // ... autres tickets
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
      case 'Test':
        return 'bg-purple-100 text-purple-800 border-purple-300';
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

  const getTimelineIcon = (step: string) => {
    switch (step) {
      case 'Réception':
        return Package;
      case 'Diagnostic':
        return FileText;
      case 'Réparation':
        return Wrench;
      case 'Test':
        return TestTube;
      case 'Prêt':
        return CheckCircle;
      default:
        return Clock;
    }
  };

  const TimelineComponent = ({ timeline }: { timeline: any[] }) => (
    <div className="relative">
      {timeline.map((step, index) => {
        const Icon = getTimelineIcon(step.step);
        const isLast = index === timeline.length - 1;
        
        return (
          <div key={step.step} className="flex items-center mb-4 last:mb-0">
            <div className={`
              flex items-center justify-center w-10 h-10 rounded-full border-2 
              ${step.status === 'completed' ? 'bg-green-500 border-green-500 text-white' :
                step.status === 'in-progress' ? 'bg-blue-500 border-blue-500 text-white animate-pulse' :
                'bg-gray-200 border-gray-300 text-gray-500'
              }
              transition-all duration-300
            `}>
              <Icon className="w-5 h-5" />
            </div>
            
            {!isLast && (
              <div className={`
                absolute left-5 w-0.5 h-8 mt-10
                ${step.status === 'completed' ? 'bg-green-500' : 'bg-gray-300'}
                transition-all duration-300
              `} />
            )}
            
            <div className="ml-4 flex-1">
              <h4 className={`font-medium ${
                step.status === 'completed' ? 'text-green-700' :
                step.status === 'in-progress' ? 'text-blue-700' :
                'text-gray-500'
              }`}>
                {step.step}
              </h4>
              {step.date && (
                <p className="text-sm text-gray-500">{step.date}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );

  const CreateTicketModal = () => (
    <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Plus className="w-5 h-5 text-[#005EFF]" />
            Créer un nouveau ticket de réparation
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Informations client */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <User className="w-4 h-4" />
              Informations client
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="client-name">Nom complet</Label>
                <Input id="client-name" placeholder="Jean Dupont" />
              </div>
              <div>
                <Label htmlFor="client-phone">Téléphone</Label>
                <Input id="client-phone" placeholder="+33 6 12 34 56 78" />
              </div>
              <div className="col-span-2">
                <Label htmlFor="client-email">Email</Label>
                <Input id="client-email" type="email" placeholder="jean.dupont@email.com" />
              </div>
            </div>
          </div>

          {/* Appareil */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Appareil
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="device-brand">Marque</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="samsung">Samsung</SelectItem>
                    <SelectItem value="huawei">Huawei</SelectItem>
                    <SelectItem value="xiaomi">Xiaomi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="device-model">Modèle</Label>
                <Input id="device-model" placeholder="iPhone 13 Pro" />
              </div>
              <div className="col-span-2">
                <Label htmlFor="imei">IMEI</Label>
                <div className="flex gap-2">
                  <Input id="imei" placeholder="358240051111110" />
                  <Button variant="outline" size="icon">
                    <QrCode className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Problème */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Problème signalé
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="issue-type">Type de problème</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="screen">Écran cassé</SelectItem>
                    <SelectItem value="battery">Batterie défaillante</SelectItem>
                    <SelectItem value="camera">Problème caméra</SelectItem>
                    <SelectItem value="charging">Problème de charge</SelectItem>
                    <SelectItem value="water">Dégât des eaux</SelectItem>
                    <SelectItem value="other">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="priority">Priorité</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-2">
                <Label htmlFor="description">Description détaillée</Label>
                <Textarea 
                  id="description" 
                  placeholder="Décrivez le problème rencontré..."
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* Photos */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <Camera className="w-4 h-4" />
              Photos (optionnel)
            </h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#005EFF] transition-colors">
              <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Cliquez pour ajouter des photos</p>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="outline" onClick={() => setIsCreateModalOpen(false)}>
              Annuler
            </Button>
            <Button className="bg-[#005EFF] hover:bg-[#0047CC] text-white">
              Créer le ticket
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#005EFF]" />
              Gestion des réparations
            </CardTitle>
            <Button 
              className="bg-[#005EFF] hover:bg-[#0047CC] text-white"
              onClick={() => setIsCreateModalOpen(true)}
            >
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
                  placeholder="Rechercher par ticket, client, IMEI, appareil..."
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
              
              <TabsContent value="all" className="space-y-4 mt-6">
                {tickets.map((ticket) => (
                  <Card key={ticket.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <div className="font-mono text-lg font-bold text-[#005EFF]">
                            {ticket.id}
                          </div>
                          <Badge className={`${getStatusColor(ticket.status)} border`}>
                            {ticket.status}
                          </Badge>
                          <Badge className={`${getPriorityColor(ticket.priority)} border`}>
                            {ticket.priority}
                          </Badge>
                          <Button variant="ghost" size="sm" className="text-[#005EFF]">
                            <QrCode className="w-4 h-4 mr-1" />
                            QR
                          </Button>
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
                      
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Informations client et appareil */}
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                              <User className="w-4 h-4" />
                              Client
                            </h4>
                            <div className="space-y-1 text-sm">
                              <p className="font-medium">{ticket.customer.name}</p>
                              <div className="flex items-center gap-1 text-gray-600">
                                <Phone className="w-3 h-3" />
                                {ticket.customer.phone}
                              </div>
                              <div className="flex items-center gap-1 text-gray-600">
                                <Mail className="w-3 h-3" />
                                {ticket.customer.email}
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Appareil</h4>
                            <div className="space-y-1 text-sm">
                              <p className="font-medium">{ticket.device}</p>
                              <p className="text-gray-600">IMEI: {ticket.imei}</p>
                              <p className="text-red-600">{ticket.issue}</p>
                            </div>
                          </div>
                        </div>

                        {/* Timeline */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            Progression
                          </h4>
                          <TimelineComponent timeline={ticket.timeline} />
                        </div>

                        {/* Détails et prix */}
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Pièces utilisées</h4>
                            <div className="space-y-1 text-sm">
                              {ticket.parts.map((part, index) => (
                                <div key={index} className="flex justify-between">
                                  <span>{part.name} x{part.quantity}</span>
                                  <span className="font-medium">{part.price}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="pt-4 border-t">
                            <div className="flex justify-between items-center">
                              <span className="font-semibold">Total</span>
                              <span className="text-2xl font-bold text-[#005EFF]">{ticket.price}</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                              <Clock className="w-3 h-3" />
                              Durée estimée: {ticket.estimatedTime}
                            </div>
                            <div className="text-xs text-gray-400 mt-1">
                              Technicien: {ticket.technician}
                            </div>
                          </div>
                          
                          <div className="flex gap-2 pt-2">
                            <Button size="sm" variant="outline" className="flex-1">
                              Modifier
                            </Button>
                            <Button size="sm" className="flex-1 bg-[#005EFF] hover:bg-[#0047CC] text-white">
                              Détails
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
      
      <CreateTicketModal />
    </div>
  );
};

export default EnhancedTicketManagement;
