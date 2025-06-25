
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
  Calendar, 
  Plus, 
  Search, 
  Filter, 
  Clock, 
  User, 
  Phone, 
  MapPin,
  CheckCircle,
  AlertTriangle,
  Edit,
  Trash2,
  Send,
  Eye,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const AppointmentScheduler = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isCreateAppointmentOpen, setIsCreateAppointmentOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('week');

  const appointments = [
    {
      id: 'RDV-001',
      customer: 'Marie Dubois',
      phone: '+33 6 12 34 56 78',
      device: 'iPhone 13 Pro',
      issue: 'Écran cassé',
      date: '2024-01-17',
      time: '09:00',
      duration: 30,
      status: 'Confirmé',
      type: 'Diagnostic',
      notes: 'Client signale chute importante',
      technician: 'Ahmed K.'
    },
    {
      id: 'RDV-002',
      customer: 'Pierre Martin',
      phone: '+33 6 98 76 54 32',
      device: 'Samsung Galaxy S22',
      issue: 'Batterie défaillante',
      date: '2024-01-17',
      time: '10:30',
      duration: 45,
      status: 'En attente',
      type: 'Réparation',
      notes: 'Batterie gonfle, à changer rapidement',
      technician: 'Sophie L.'
    },
    {
      id: 'RDV-003',
      customer: 'Julie Rodriguez',
      phone: '+33 6 45 67 89 12',
      device: 'iPhone 12',
      issue: 'Problème de charge',
      date: '2024-01-17',
      time: '14:00',
      duration: 60,
      status: 'Confirmé',
      type: 'Réparation',
      notes: 'Connecteur de charge défaillant',
      technician: 'Ahmed K.'
    },
    {
      id: 'RDV-004',
      customer: 'Thomas Leroy',
      phone: '+33 6 23 45 67 89',
      device: 'Huawei P40',
      issue: 'Caméra ne fonctionne plus',
      date: '2024-01-18',
      time: '11:00',
      duration: 30,
      status: 'Annulé',
      type: 'Diagnostic',
      notes: 'Client a annulé - report demandé',
      technician: 'Sophie L.'
    }
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmé':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'En attente':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Annulé':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'Terminé':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Confirmé':
        return CheckCircle;
      case 'En attente':
        return Clock;
      case 'Annulé':
        return AlertTriangle;
      case 'Terminé':
        return CheckCircle;
      default:
        return Clock;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Diagnostic':
        return 'bg-blue-100 text-blue-800';
      case 'Réparation':
        return 'bg-purple-100 text-purple-800';
      case 'Récupération':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('fr-FR', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const CreateAppointmentModal = () => (
    <Dialog open={isCreateAppointmentOpen} onOpenChange={setIsCreateAppointmentOpen}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Plus className="w-5 h-5 text-[#005EFF]" />
            Nouveau rendez-vous
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Client Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <User className="w-4 h-4" />
              Client
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
                <Label htmlFor="client-email">Email (optionnel)</Label>
                <Input id="client-email" type="email" placeholder="jean.dupont@email.com" />
              </div>
            </div>
          </div>

          {/* Appointment Details */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Détails du rendez-vous
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="appointment-date">Date</Label>
                <Input id="appointment-date" type="date" />
              </div>
              <div>
                <Label htmlFor="appointment-time">Heure</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner..." />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>{time}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="duration">Durée (minutes)</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Durée..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 min</SelectItem>
                    <SelectItem value="45">45 min</SelectItem>
                    <SelectItem value="60">1 heure</SelectItem>
                    <SelectItem value="90">1h30</SelectItem>
                    <SelectItem value="120">2 heures</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Service Details */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Service
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="service-type">Type de service</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="diagnostic">Diagnostic</SelectItem>
                    <SelectItem value="repair">Réparation</SelectItem>
                    <SelectItem value="pickup">Récupération</SelectItem>
                    <SelectItem value="consultation">Consultation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="technician">Technicien</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Assigner..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ahmed">Ahmed K.</SelectItem>
                    <SelectItem value="sophie">Sophie L.</SelectItem>
                    <SelectItem value="auto">Attribution automatique</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-2">
                <Label htmlFor="device-info">Appareil</Label>
                <Input id="device-info" placeholder="iPhone 13 Pro, Samsung Galaxy S22..." />
              </div>
              <div className="col-span-2">
                <Label htmlFor="issue-description">Problème signalé</Label>
                <Textarea 
                  id="issue-description" 
                  placeholder="Description du problème..."
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes">Notes internes (optionnel)</Label>
            <Textarea 
              id="notes" 
              placeholder="Notes pour le technicien..."
              rows={2}
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="outline" onClick={() => setIsCreateAppointmentOpen(false)}>
              Annuler
            </Button>
            <Button variant="outline">
              Sauvegarder comme brouillon
            </Button>
            <Button className="bg-[#005EFF] hover:bg-[#0047CC] text-white">
              Créer le rendez-vous
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  const CalendarView = () => {
    const today = new Date();
    const currentWeekStart = new Date(today.setDate(today.getDate() - today.getDay() + 1));
    const weekDays = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(currentWeekStart);
      date.setDate(currentWeekStart.getDate() + i);
      return date;
    });

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <h3 className="font-semibold text-lg">
              Semaine du {formatDate(weekDays[0])}
            </h3>
            <Button variant="outline" size="sm">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-2">
            <Button 
              variant={viewMode === 'day' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setViewMode('day')}
            >
              Jour
            </Button>
            <Button 
              variant={viewMode === 'week' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setViewMode('week')}
            >
              Semaine
            </Button>
            <Button 
              variant={viewMode === 'month' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setViewMode('month')}
            >
              Mois
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-8 gap-2">
          <div className="p-2 font-medium text-sm text-gray-600">Heure</div>
          {weekDays.map((day, index) => (
            <div key={index} className="p-2 text-center border-b">
              <div className="font-medium text-sm">
                {day.toLocaleDateString('fr-FR', { weekday: 'short' })}
              </div>
              <div className="text-lg font-bold text-gray-900">
                {day.getDate()}
              </div>
            </div>
          ))}
          
          {timeSlots.map((time) => (
            <>
              <div key={time} className="p-2 text-sm text-gray-600 border-r">
                {time}
              </div>
              {weekDays.map((day, dayIndex) => {
                const dayAppointments = appointments.filter(apt => 
                  apt.date === day.toISOString().split('T')[0] && apt.time === time
                );
                
                return (
                  <div key={`${time}-${dayIndex}`} className="p-1 border-r border-b min-h-[60px]">
                    {dayAppointments.map((apt) => (
                      <div 
                        key={apt.id} 
                        className={`
                          p-2 rounded text-xs cursor-pointer hover:shadow-md transition-shadow
                          ${getStatusColor(apt.status)}
                        `}
                      >
                        <div className="font-medium truncate">{apt.customer}</div>
                        <div className="truncate">{apt.device}</div>
                        <div className="text-xs opacity-75">{apt.technician}</div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#005EFF]" />
              Gestion des rendez-vous
            </CardTitle>
            <Button 
              className="bg-[#005EFF] hover:bg-[#0047CC] text-white"
              onClick={() => setIsCreateAppointmentOpen(true)}
            >
              <Plus className="w-4 h-4 mr-2" />
              Nouveau RDV
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Rechercher par client, appareil, technicien..."
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

            <Tabs defaultValue="calendar" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="calendar">Calendrier</TabsTrigger>
                <TabsTrigger value="list">Liste (12)</TabsTrigger>
                <TabsTrigger value="today">Aujourd'hui (3)</TabsTrigger>
                <TabsTrigger value="pending">En attente (2)</TabsTrigger>
              </TabsList>
              
              <TabsContent value="calendar" className="mt-6">
                <CalendarView />
              </TabsContent>
              
              <TabsContent value="list" className="space-y-4 mt-6">
                {appointments.map((appointment) => {
                  const StatusIcon = getStatusIcon(appointment.status);
                  return (
                    <Card key={appointment.id} className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center gap-3">
                            <div className="font-mono text-sm font-bold text-[#005EFF]">
                              {appointment.id}
                            </div>
                            <Badge className={`${getStatusColor(appointment.status)} border`}>
                              <StatusIcon className="w-3 h-3 mr-1" />
                              {appointment.status}
                            </Badge>
                            <Badge className={`${getTypeColor(appointment.type)}`}>
                              {appointment.type}
                            </Badge>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Send className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                              <User className="w-4 h-4" />
                              Client
                            </h4>
                            <p className="font-medium">{appointment.customer}</p>
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                              <Phone className="w-3 h-3" />
                              {appointment.phone}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Service</h4>
                            <p className="font-medium">{appointment.device}</p>
                            <p className="text-sm text-red-600">{appointment.issue}</p>
                            <p className="text-sm text-gray-500">Tech: {appointment.technician}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              Horaire
                            </h4>
                            <p className="font-medium">{appointment.date}</p>
                            <p className="text-sm text-gray-600">{appointment.time} ({appointment.duration}min)</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Notes</h4>
                            <p className="text-sm text-gray-600">{appointment.notes}</p>
                            <div className="flex gap-2 mt-3">
                              {appointment.status === 'En attente' && (
                                <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                                  Confirmer
                                </Button>
                              )}
                              {appointment.status === 'Confirmé' && (
                                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                                  Démarrer
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </TabsContent>

              <TabsContent value="today" className="mt-6">
                <div className="space-y-4">
                  {appointments.filter(apt => apt.date === '2024-01-17').map((appointment) => {
                    const StatusIcon = getStatusIcon(appointment.status);
                    return (
                      <Card key={appointment.id} className="hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="text-2xl font-bold text-[#005EFF]">
                                {appointment.time}
                              </div>
                              <div>
                                <p className="font-medium">{appointment.customer}</p>
                                <p className="text-sm text-gray-600">{appointment.device} - {appointment.issue}</p>
                              </div>
                              <Badge className={`${getStatusColor(appointment.status)} border`}>
                                <StatusIcon className="w-3 h-3 mr-1" />
                                {appointment.status}
                              </Badge>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                Modifier
                              </Button>
                              {appointment.status === 'Confirmé' && (
                                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                                  Démarrer
                                </Button>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>

              <TabsContent value="pending" className="mt-6">
                <div className="space-y-4">
                  {appointments.filter(apt => apt.status === 'En attente').map((appointment) => (
                    <Card key={appointment.id} className="border-yellow-200 bg-yellow-50">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="text-lg font-bold text-yellow-600">
                              {appointment.date} - {appointment.time}
                            </div>
                            <div>
                              <p className="font-medium">{appointment.customer}</p>
                              <p className="text-sm text-gray-600">{appointment.device} - {appointment.issue}</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              Reprogrammer
                            </Button>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                              Confirmer
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
      
      <CreateAppointmentModal />
    </div>
  );
};

export default AppointmentScheduler;
