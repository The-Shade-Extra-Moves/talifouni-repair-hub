import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  QrCode, 
  Camera, 
  FileText, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  MapPin,
  Package,
  Wrench,
  TestTube,
  CheckCircle,
  Edit,
  Save,
  Printer,
  Download,
  Share,
  Euro,
  Calendar
} from 'lucide-react';

interface RepairDetailsProps {
  ticketId: string;
  onClose: () => void;
}

const RepairDetails = ({ ticketId, onClose }: RepairDetailsProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('details');

  // Mock data - in real app, this would come from API
  const ticket = {
    id: 'R-2024-0158',
    qrCode: 'QR_R20240158',
    customer: {
      name: 'Marie Dubois',
      phone: '+33 6 12 34 56 78',
      email: 'marie.dubois@email.com',
      address: '15 Rue de la République, 75001 Paris'
    },
    device: {
      brand: 'Apple',
      model: 'iPhone 13 Pro',
      imei: '358240051111110',
      color: 'Graphite',
      capacity: '256GB'
    },
    issue: {
      type: 'Écran cassé',
      description: 'Écran complètement fissuré, tactile non fonctionnel suite à chute',
      priority: 'Urgent',
      photos: ['photo1.jpg', 'photo2.jpg']
    },
    status: 'En cours',
    technician: 'Ahmed K.',
    createdAt: '2024-01-15 14:30',
    updatedAt: '2024-01-15 16:45',
    estimatedCompletion: '2024-01-16 18:00',
    timeline: [
      { step: 'Réception', status: 'completed', date: '2024-01-15 14:30', notes: 'Appareil réceptionné, photos prises' },
      { step: 'Diagnostic', status: 'completed', date: '2024-01-15 15:00', notes: 'Écran LCD endommagé, tactile HS' },
      { step: 'Commande pièces', status: 'completed', date: '2024-01-15 15:15', notes: 'Écran commandé chez fournisseur' },
      { step: 'Réparation', status: 'in-progress', date: null, notes: 'En cours de démontage' },
      { step: 'Test', status: 'pending', date: null, notes: '' },
      { step: 'Nettoyage', status: 'pending', date: null, notes: '' },
      { step: 'Prêt', status: 'pending', date: null, notes: '' }
    ],
    parts: [
      { name: 'Écran iPhone 13 Pro Original', reference: 'IP13P-LCD-001', quantity: 1, unitPrice: 150, totalPrice: 150, status: 'En stock' },
      { name: 'Film protecteur', reference: 'FILM-IP13P', quantity: 1, unitPrice: 15, totalPrice: 15, status: 'En stock' }
    ],
    labor: {
      description: 'Remplacement écran iPhone 13 Pro',
      duration: '2h',
      rate: 45,
      total: 90
    },
    pricing: {
      partsTotal: 165,
      laborTotal: 90,
      subtotal: 255,
      tax: 51,
      total: 306,
      deposit: 100,
      remaining: 206
    },
    notes: [
      { date: '2024-01-15 14:30', author: 'Ahmed K.', text: 'Client signale chute importante. Vérifier état général.' },
      { date: '2024-01-15 15:00', author: 'Ahmed K.', text: 'Diagnostic complet effectué. Seul écran à remplacer.' }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500 text-white';
      case 'in-progress': return 'bg-blue-500 text-white animate-pulse';
      case 'pending': return 'bg-gray-300 text-gray-600';
      default: return 'bg-gray-300 text-gray-600';
    }
  };

  const getTimelineIcon = (step: string) => {
    switch (step) {
      case 'Réception': return Package;
      case 'Diagnostic': return FileText;
      case 'Commande pièces': return Package;
      case 'Réparation': return Wrench;
      case 'Test': return TestTube;
      case 'Nettoyage': return CheckCircle;
      case 'Prêt': return CheckCircle;
      default: return Clock;
    }
  };

  const generateQRCode = () => {
    // In real app, this would generate/display actual QR code
    alert(`QR Code généré pour le ticket ${ticket.id}`);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[95vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#005EFF] to-blue-600 text-white p-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold mb-2">Détails de la réparation</h1>
              <div className="flex items-center gap-4">
                <span className="text-xl font-mono">{ticket.id}</span>
                <Badge className="bg-white/20 text-white">{ticket.status}</Badge>
                <Badge className="bg-white/20 text-white">{ticket.issue.priority}</Badge>
              </div>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={generateQRCode}
              >
                <QrCode className="w-4 h-4 mr-2" />
                QR Code
              </Button>
              <Button 
                variant="outline" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={onClose}
              >
                ×
              </Button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(95vh-120px)]">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="details">Détails</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
              <TabsTrigger value="parts">Pièces</TabsTrigger>
              <TabsTrigger value="photos">Photos</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
              <TabsTrigger value="invoice">Facture</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Client Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="w-5 h-5" />
                      Informations client
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-500" />
                      <span className="font-medium">{ticket.customer.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <span>{ticket.customer.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span>{ticket.customer.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-sm">{ticket.customer.address}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Device Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      Appareil
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-500">Marque</label>
                        <p className="font-medium">{ticket.device.brand}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Modèle</label>
                        <p className="font-medium">{ticket.device.model}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">IMEI</label>
                        <p className="font-mono text-sm">{ticket.device.imei}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Couleur</label>
                        <p>{ticket.device.color}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Problem Description */}
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Wrench className="w-5 h-5" />
                      Problème signalé
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-500">Type</label>
                        <p className="font-medium text-red-600">{ticket.issue.type}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Description</label>
                        <p>{ticket.issue.description}</p>
                      </div>
                      <div className="flex gap-4">
                        <div>
                          <label className="text-sm font-medium text-gray-500">Technicien</label>
                          <p className="font-medium">{ticket.technician}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">Fin estimée</label>
                          <p className="font-medium">{ticket.estimatedCompletion}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="timeline" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Progression de la réparation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {ticket.timeline.map((step, index) => {
                      const Icon = getTimelineIcon(step.step);
                      const isLast = index === ticket.timeline.length - 1;
                      
                      return (
                        <div key={step.step} className="relative flex items-start">
                          <div className={`
                            flex items-center justify-center w-12 h-12 rounded-full border-2 
                            ${getStatusColor(step.status)}
                            transition-all duration-300
                          `}>
                            <Icon className="w-6 h-6" />
                          </div>
                          
                          {!isLast && (
                            <div className={`
                              absolute left-6 w-0.5 h-16 mt-12
                              ${step.status === 'completed' ? 'bg-green-500' : 'bg-gray-300'}
                              transition-all duration-300
                            `} />
                          )}
                          
                          <div className="ml-6 flex-1">
                            <h4 className="font-semibold text-lg">{step.step}</h4>
                            {step.date && (
                              <p className="text-sm text-gray-500 mb-2">{step.date}</p>
                            )}
                            {step.notes && (
                              <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                                {step.notes}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="parts" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Pièces utilisées</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {ticket.parts.map((part, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium">{part.name}</h4>
                          <p className="text-sm text-gray-500">Réf: {part.reference}</p>
                          <Badge className="mt-1 bg-green-100 text-green-800">{part.status}</Badge>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">Qté: {part.quantity}</p>
                          <p className="text-sm text-gray-500">{part.unitPrice}€ / unité</p>
                          <p className="font-bold text-[#005EFF]">{part.totalPrice}€</p>
                        </div>
                      </div>
                    ))}
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Total pièces</span>
                        <span className="font-bold text-xl text-[#005EFF]">{ticket.pricing.partsTotal}€</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="photos" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="w-5 h-5" />
                    Photos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {ticket.issue.photos.map((photo, index) => (
                      <div key={index} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                        <Camera className="w-8 h-8 text-gray-400" />
                        <span className="ml-2 text-sm text-gray-500">Photo {index + 1}</span>
                      </div>
                    ))}
                    <div className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-[#005EFF] transition-colors">
                      <div className="text-center">
                        <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <span className="text-sm text-gray-500">Ajouter photo</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notes" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Notes et commentaires</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {ticket.notes.map((note, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-medium">{note.author}</span>
                          <span className="text-sm text-gray-500">{note.date}</span>
                        </div>
                        <p className="text-gray-700">{note.text}</p>
                      </div>
                    ))}
                    <div className="border-t pt-4">
                      <Textarea placeholder="Ajouter une note..." className="mb-3" />
                      <Button className="bg-[#005EFF] hover:bg-[#0047CC] text-white">
                        Ajouter note
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="invoice" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Euro className="w-5 h-5" />
                      Facturation
                    </span>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Printer className="w-4 h-4 mr-2" />
                        Imprimer
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        PDF
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Labor */}
                    <div>
                      <h4 className="font-semibold mb-3">Main d'œuvre</h4>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">{ticket.labor.description}</p>
                          <p className="text-sm text-gray-500">{ticket.labor.duration} × {ticket.labor.rate}€/h</p>
                        </div>
                        <span className="font-bold text-[#005EFF]">{ticket.labor.total}€</span>
                      </div>
                    </div>

                    {/* Pricing Summary */}
                    <div className="border-t pt-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Sous-total pièces</span>
                          <span>{ticket.pricing.partsTotal}€</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Main d'œuvre</span>
                          <span>{ticket.pricing.laborTotal}€</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sous-total</span>
                          <span>{ticket.pricing.subtotal}€</span>
                        </div>
                        <div className="flex justify-between">
                          <span>TVA (20%)</span>
                          <span>{ticket.pricing.tax}€</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg border-t pt-2">
                          <span>Total</span>
                          <span className="text-[#005EFF]">{ticket.pricing.total}€</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Acompte versé</span>
                          <span>-{ticket.pricing.deposit}€</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg text-green-600">
                          <span>Reste à payer</span>
                          <span>{ticket.pricing.remaining}€</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default RepairDetails;
