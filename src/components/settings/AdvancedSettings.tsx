
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Settings, 
  Bell, 
  Mail, 
  Phone, 
  Shield, 
  Database, 
  FileText, 
  Printer,
  Wifi,
  Smartphone,
  QrCode,
  Save,
  Upload,
  Download
} from 'lucide-react';

const AdvancedSettings = () => {
  const [activeTab, setActiveTab] = useState('notifications');

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-[#005EFF]" />
            Paramètres avancés
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="integrations">Intégrations</TabsTrigger>
              <TabsTrigger value="templates">Modèles</TabsTrigger>
              <TabsTrigger value="hardware">Matériel</TabsTrigger>
              <TabsTrigger value="backup">Sauvegarde</TabsTrigger>
              <TabsTrigger value="system">Système</TabsTrigger>
            </TabsList>

            <TabsContent value="notifications" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Bell className="w-5 h-5" />
                    Notifications par email
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { id: 'new-ticket', label: 'Nouveau ticket créé', description: 'Recevoir un email à chaque nouveau ticket' },
                    { id: 'status-change', label: 'Changement de statut', description: 'Notification quand un ticket change de statut' },
                    { id: 'payment-received', label: 'Paiement reçu', description: 'Notification de paiement de facture' },
                    { id: 'low-stock', label: 'Stock faible', description: 'Alerte quand le stock est bas' },
                    { id: 'appointment', label: 'Rendez-vous', description: 'Rappel de rendez-vous client' }
                  ].map((notification) => (
                    <div key={notification.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{notification.label}</h4>
                        <p className="text-sm text-gray-500">{notification.description}</p>
                      </div>
                      <button
                        className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#005EFF] transition-colors"
                      >
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
                      </button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Notifications SMS
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="sms-provider">Fournisseur SMS</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="twilio">Twilio</SelectItem>
                          <SelectItem value="ovh">OVH SMS</SelectItem>
                          <SelectItem value="orange">Orange Business</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="sms-sender">Nom d'expéditeur</Label>
                      <Input id="sms-sender" placeholder="REPARATION" maxLength={11} />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="sms-api-key">Clé API</Label>
                    <Input id="sms-api-key" type="password" placeholder="Votre clé API..." />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="integrations" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Intégrations disponibles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { 
                      name: 'Stripe', 
                      description: 'Paiements en ligne sécurisés',
                      status: 'Connecté',
                      icon: '💳'
                    },
                    { 
                      name: 'PayPal', 
                      description: 'Paiements PayPal',
                      status: 'Non connecté',
                      icon: '🅿️'
                    },
                    { 
                      name: 'Mailchimp', 
                      description: 'Marketing par email',
                      status: 'Non connecté',
                      icon: '📧'
                    },
                    { 
                      name: 'Google Analytics', 
                      description: 'Statistiques de site web',
                      status: 'Non connecté',
                      icon: '📊'
                    }
                  ].map((integration) => (
                    <div key={integration.name} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="text-2xl">{integration.icon}</div>
                        <div>
                          <h4 className="font-medium">{integration.name}</h4>
                          <p className="text-sm text-gray-500">{integration.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`px-2 py-1 rounded text-xs ${
                          integration.status === 'Connecté' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {integration.status}
                        </span>
                        <Button variant="outline" size="sm">
                          {integration.status === 'Connecté' ? 'Configurer' : 'Connecter'}
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="templates" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Modèles de documents
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { type: 'Facture', description: 'Modèle de facture standard' },
                    { type: 'Devis', description: 'Modèle de devis' },
                    { type: 'Reçu', description: 'Reçu de paiement' },
                    { type: 'Bon de réparation', description: 'Bon de prise en charge' }
                  ].map((template) => (
                    <div key={template.type} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{template.type}</h4>
                        <p className="text-sm text-gray-500">{template.description}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          Aperçu
                        </Button>
                        <Button variant="outline" size="sm">
                          Modifier
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Modèles de messages</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="sms-ready">SMS - Réparation terminée</Label>
                    <Textarea 
                      id="sms-ready"
                      defaultValue="Bonjour {client}, votre {appareil} est prêt. Vous pouvez venir le récupérer. Montant: {prix}€"
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email-quote">Email - Envoi de devis</Label>
                    <Textarea 
                      id="email-quote"
                      defaultValue="Bonjour {client}, veuillez trouver ci-joint votre devis pour la réparation de votre {appareil}."
                      rows={3}
                    />
                  </div>
                  <Button className="bg-[#005EFF] hover:bg-[#0047CC] text-white">
                    <Save className="w-4 h-4 mr-2" />
                    Sauvegarder les modèles
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="hardware" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Printer className="w-5 h-5" />
                    Imprimantes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="receipt-printer">Imprimante de reçus</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="epson-tm-t20">Epson TM-T20</SelectItem>
                          <SelectItem value="star-tsp143">Star TSP143</SelectItem>
                          <SelectItem value="default">Imprimante par défaut</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="label-printer">Imprimante d'étiquettes</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="zebra-gk420">Zebra GK420d</SelectItem>
                          <SelectItem value="brother-ql">Brother QL-700</SelectItem>
                          <SelectItem value="dymo">Dymo LabelWriter</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button variant="outline">
                    Tester l'impression
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <QrCode className="w-5 h-5" />
                    Scanner QR Code
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="scanner-device">Périphérique de scan</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="camera">Caméra intégrée</SelectItem>
                        <SelectItem value="usb-scanner">Scanner USB</SelectItem>
                        <SelectItem value="mobile">Application mobile</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#005EFF] transition-colors">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
                    </button>
                    <Label>Scanner automatique des codes IMEI</Label>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="backup" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Database className="w-5 h-5" />
                    Sauvegarde automatique
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="backup-frequency">Fréquence</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Quotidienne</SelectItem>
                          <SelectItem value="weekly">Hebdomadaire</SelectItem>
                          <SelectItem value="monthly">Mensuelle</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="backup-time">Heure de sauvegarde</Label>
                      <Input id="backup-time" type="time" defaultValue="02:00" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="backup-location">Emplacement de sauvegarde</Label>
                    <div className="flex gap-2">
                      <Input 
                        id="backup-location" 
                        placeholder="/chemin/vers/sauvegarde" 
                        className="flex-1"
                      />
                      <Button variant="outline">
                        Parcourir
                      </Button>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="bg-[#005EFF] hover:bg-[#0047CC] text-white">
                      <Download className="w-4 h-4 mr-2" />
                      Sauvegarder maintenant
                    </Button>
                    <Button variant="outline">
                      <Upload className="w-4 h-4 mr-2" />
                      Restaurer
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Historique des sauvegardes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { date: '2024-01-17 02:00', size: '245 MB', status: 'Réussie' },
                      { date: '2024-01-16 02:00', size: '243 MB', status: 'Réussie' },
                      { date: '2024-01-15 02:00', size: '240 MB', status: 'Réussie' }
                    ].map((backup, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">{backup.date}</p>
                          <p className="text-sm text-gray-500">{backup.size}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                            {backup.status}
                          </span>
                          <Button variant="outline" size="sm">
                            Restaurer
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="system" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Informations système</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Version</span>
                        <span className="font-medium">2.1.4</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Base de données</span>
                        <span className="font-medium">PostgreSQL 14.2</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Stockage utilisé</span>
                        <span className="font-medium">1.2 GB / 10 GB</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Dernière mise à jour</span>
                        <span className="font-medium">2024-01-10</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Licence</span>
                        <span className="font-medium">Pro - Active</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Support</span>
                        <span className="font-medium">Jusqu'au 2024-12-31</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Maintenance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Button variant="outline">
                      Vérifier les mises à jour
                    </Button>
                    <Button variant="outline">
                      Optimiser la base de données
                    </Button>
                    <Button variant="outline">
                      Vider le cache
                    </Button>
                  </div>
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>Attention:</strong> Les opérations de maintenance peuvent temporairement affecter les performances.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdvancedSettings;
