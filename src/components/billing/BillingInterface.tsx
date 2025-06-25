import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Euro, 
  Plus, 
  Search, 
  Filter, 
  FileText, 
  Download, 
  Printer, 
  Edit, 
  Eye, 
  Send,
  Clock,
  CheckCircle,
  AlertTriangle,
  Calendar,
  User,
  CreditCard
} from 'lucide-react';

const BillingInterface = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isCreateInvoiceOpen, setIsCreateInvoiceOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('invoices');

  const invoices = [
    {
      id: 'INV-2024-001',
      ticketId: 'R-2024-0158',
      customer: 'Marie Dubois',
      date: '2024-01-15',
      dueDate: '2024-01-30',
      amount: 306,
      status: 'Payée',
      paymentMethod: 'Carte bancaire',
      items: [
        { description: 'Écran iPhone 13 Pro', quantity: 1, unitPrice: 150, total: 150 },
        { description: 'Film protecteur', quantity: 1, unitPrice: 15, total: 15 },
        { description: 'Main d\'œuvre (2h)', quantity: 2, unitPrice: 45, total: 90 }
      ]
    },
    {
      id: 'INV-2024-002',
      ticketId: 'R-2024-0157',
      customer: 'Pierre Martin',
      date: '2024-01-16',
      dueDate: '2024-01-31',
      amount: 120,
      status: 'En attente',
      paymentMethod: '',
      items: [
        { description: 'Batterie Samsung Galaxy S22', quantity: 1, unitPrice: 80, total: 80 },
        { description: 'Main d\'œuvre (1h)', quantity: 1, unitPrice: 40, total: 40 }
      ]
    },
    {
      id: 'INV-2024-003',
      ticketId: 'R-2024-0156',
      customer: 'Julie Rodriguez',
      date: '2024-01-14',
      dueDate: '2024-01-29',
      amount: 85,
      status: 'Overdue',
      paymentMethod: '',
      items: [
        { description: 'Connecteur de charge iPhone 12', quantity: 1, unitPrice: 45, total: 45 },
        { description: 'Main d\'œuvre (1h)', quantity: 1, unitPrice: 40, total: 40 }
      ]
    }
  ];

  const quotes = [
    {
      id: 'DEV-2024-001',
      customer: 'Thomas Leroy',
      device: 'Huawei P40',
      issue: 'Caméra défaillante',
      date: '2024-01-17',
      validUntil: '2024-01-24',
      amount: 150,
      status: 'En attente',
      items: [
        { description: 'Module caméra Huawei P40', quantity: 1, unitPrice: 110, total: 110 },
        { description: 'Main d\'œuvre (1h)', quantity: 1, unitPrice: 40, total: 40 }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Payée':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'En attente':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Overdue':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'Brouillon':
        return 'bg-gray-100 text-gray-800 border-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Payée':
        return CheckCircle;
      case 'En attente':
        return Clock;
      case 'Overdue':
        return AlertTriangle;
      default:
        return FileText;
    }
  };

  const CreateInvoiceModal = () => (
    <Dialog open={isCreateInvoiceOpen} onOpenChange={setIsCreateInvoiceOpen}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Plus className="w-5 h-5 text-[#005EFF]" />
            Créer une nouvelle facture
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Client Selection */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <User className="w-4 h-4" />
              Client
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="client-select">Sélectionner un client</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choisir un client..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="marie">Marie Dubois</SelectItem>
                    <SelectItem value="pierre">Pierre Martin</SelectItem>
                    <SelectItem value="julie">Julie Rodriguez</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="ticket-select">Ticket associé (optionnel)</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choisir un ticket..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="r158">R-2024-0158</SelectItem>
                    <SelectItem value="r157">R-2024-0157</SelectItem>
                    <SelectItem value="r156">R-2024-0156</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Invoice Details */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Détails de la facture
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="invoice-date">Date de facture</Label>
                <Input id="invoice-date" type="date" defaultValue="2024-01-17" />
              </div>
              <div>
                <Label htmlFor="due-date">Date d'échéance</Label>
                <Input id="due-date" type="date" defaultValue="2024-02-01" />
              </div>
              <div>
                <Label htmlFor="payment-terms">Conditions de paiement</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immédiat</SelectItem>
                    <SelectItem value="15days">15 jours</SelectItem>
                    <SelectItem value="30days">30 jours</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Articles</h3>
            <div className="border rounded-lg p-4 space-y-4">
              <div className="grid grid-cols-12 gap-2 font-medium text-sm text-gray-600">
                <div className="col-span-5">Description</div>
                <div className="col-span-2">Quantité</div>
                <div className="col-span-2">Prix unitaire</div>
                <div className="col-span-2">Total</div>
                <div className="col-span-1">Action</div>
              </div>
              
              <div className="grid grid-cols-12 gap-2 items-center">
                <div className="col-span-5">
                  <Input placeholder="Description de l'article" />
                </div>
                <div className="col-span-2">
                  <Input type="number" placeholder="1" />
                </div>
                <div className="col-span-2">
                  <Input type="number" placeholder="0.00" />
                </div>
                <div className="col-span-2">
                  <Input placeholder="0.00" disabled />
                </div>
                <div className="col-span-1">
                  <Button variant="outline" size="sm">+</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Totals */}
          <div className="space-y-4">
            <div className="flex justify-end">
              <div className="w-1/2 space-y-2">
                <div className="flex justify-between">
                  <span>Sous-total</span>
                  <span>0.00€</span>
                </div>
                <div className="flex justify-between">
                  <span>TVA (20%)</span>
                  <span>0.00€</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Total</span>
                  <span className="text-[#005EFF]">0.00€</span>
                </div>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes">Notes (optionnel)</Label>
            <Textarea id="notes" placeholder="Notes additionnelles..." rows={3} />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="outline" onClick={() => setIsCreateInvoiceOpen(false)}>
              Annuler
            </Button>
            <Button variant="outline">
              Sauvegarder comme brouillon
            </Button>
            <Button className="bg-[#005EFF] hover:bg-[#0047CC] text-white">
              Créer la facture
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
              <Euro className="w-5 h-5 text-[#005EFF]" />
              Gestion de la facturation
            </CardTitle>
            <Button 
              className="bg-[#005EFF] hover:bg-[#0047CC] text-white"
              onClick={() => setIsCreateInvoiceOpen(true)}
            >
              <Plus className="w-4 h-4 mr-2" />
              Nouvelle facture
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Rechercher par numéro, client, ticket..."
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

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="invoices">Factures (15)</TabsTrigger>
                <TabsTrigger value="quotes">Devis (8)</TabsTrigger>
                <TabsTrigger value="payments">Paiements (23)</TabsTrigger>
                <TabsTrigger value="reports">Rapports</TabsTrigger>
              </TabsList>
              
              <TabsContent value="invoices" className="space-y-4 mt-6">
                {invoices.map((invoice) => {
                  const StatusIcon = getStatusIcon(invoice.status);
                  return (
                    <Card key={invoice.id} className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center gap-3">
                            <div className="font-mono text-lg font-bold text-[#005EFF]">
                              {invoice.id}
                            </div>
                            <Badge className={`${getStatusColor(invoice.status)} border`}>
                              <StatusIcon className="w-3 h-3 mr-1" />
                              {invoice.status}
                            </Badge>
                            {invoice.ticketId && (
                              <Badge variant="outline" className="bg-gray-50">
                                Ticket: {invoice.ticketId}
                              </Badge>
                            )}
                          </div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Download className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Printer className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Client</h4>
                            <p className="font-medium">{invoice.customer}</p>
                            <p className="text-sm text-gray-500">Date: {invoice.date}</p>
                            <p className="text-sm text-gray-500">Échéance: {invoice.dueDate}</p>
                          </div>
                          
                          <div className="col-span-2">
                            <h4 className="font-semibold text-gray-900 mb-2">Articles</h4>
                            <div className="space-y-1 text-sm">
                              {invoice.items.slice(0, 2).map((item, index) => (
                                <div key={index} className="flex justify-between">
                                  <span>{item.description}</span>
                                  <span className="font-medium">{item.total}€</span>
                                </div>
                              ))}
                              {invoice.items.length > 2 && (
                                <p className="text-gray-500">+{invoice.items.length - 2} autre(s) article(s)</p>
                              )}
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-2xl font-bold text-[#005EFF] mb-2">
                              {invoice.amount}€
                            </div>
                            {invoice.paymentMethod && (
                              <div className="flex items-center justify-end gap-1 text-sm text-gray-500">
                                <CreditCard className="w-3 h-3" />
                                {invoice.paymentMethod}
                              </div>
                            )}
                            {invoice.status === 'En attente' && (
                              <Button size="sm" className="mt-2 bg-green-600 hover:bg-green-700 text-white">
                                <Send className="w-3 h-3 mr-1" />
                                Envoyer
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </TabsContent>

              <TabsContent value="quotes" className="space-y-4 mt-6">
                {quotes.map((quote) => (
                  <Card key={quote.id} className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <div className="font-mono text-lg font-bold text-[#005EFF]">
                            {quote.id}
                          </div>
                          <Badge className="bg-orange-100 text-orange-800 border-orange-300">
                            <Clock className="w-3 h-3 mr-1" />
                            {quote.status}
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                            Convertir en facture
                          </Button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Client</h4>
                          <p className="font-medium">{quote.customer}</p>
                          <p className="text-sm text-gray-500">{quote.device}</p>
                          <p className="text-sm text-gray-500">{quote.issue}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Validité</h4>
                          <p className="text-sm text-gray-500">Créé le: {quote.date}</p>
                          <p className="text-sm text-gray-500">Valide jusqu'au: {quote.validUntil}</p>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-2xl font-bold text-[#005EFF]">
                            {quote.amount}€
                          </div>
                          <p className="text-sm text-gray-500">TTC</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="payments" className="mt-6">
                <div className="text-center py-8">
                  <p className="text-gray-500">Section des paiements en cours de développement</p>
                </div>
              </TabsContent>

              <TabsContent value="reports" className="mt-6">
                <div className="text-center py-8">
                  <p className="text-gray-500">Section des rapports en cours de développement</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
      
      <CreateInvoiceModal />
    </div>
  );
};

export default BillingInterface;
