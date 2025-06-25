
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Building, 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  CreditCard, 
  Users, 
  Download,
  Upload,
  Save,
  Eye,
  EyeOff,
  Camera,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

interface SettingsInterfaceProps {
  onClose: () => void;
}

const SettingsInterface = ({ onClose }: SettingsInterfaceProps) => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('fr');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const tabs = [
    { id: 'profile', label: 'Profil', icon: User },
    { id: 'workshop', label: 'Atelier', icon: Building },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Sécurité', icon: Shield },
    { id: 'appearance', label: 'Apparence', icon: Palette },
    { id: 'users', label: 'Utilisateurs', icon: Users },
    { id: 'billing', label: 'Facturation', icon: CreditCard },
    { id: 'data', label: 'Données', icon: Download },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  JD
                </div>
                <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-100 hover:bg-gray-50 transition-colors">
                  <Camera className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Jean Dupont</h3>
                <p className="text-gray-500">Administrateur</p>
                <Badge className="mt-1 bg-green-100 text-green-800">Compte Pro</Badge>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Prénom</label>
                <Input defaultValue="Jean" className="h-10" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Nom</label>
                <Input defaultValue="Dupont" className="h-10" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input defaultValue="jean.dupont@email.com" className="pl-10 h-10" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Téléphone</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input defaultValue="+33 6 12 34 56 78" className="pl-10 h-10" />
              </div>
            </div>

            <Button className="gradient-primary text-white">
              <Save className="w-4 h-4 mr-2" />
              Sauvegarder les modifications
            </Button>
          </div>
        );

      case 'workshop':
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Nom de l'atelier</label>
              <Input defaultValue="Réparation Mobile Pro" className="h-10" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Adresse</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input defaultValue="123 Rue de la République, 75001 Paris" className="pl-10 h-10" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Téléphone atelier</label>
                <Input defaultValue="01 23 45 67 89" className="h-10" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">SIRET</label>
                <Input defaultValue="12345678901234" className="h-10" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Horaires d'ouverture</label>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600 w-12">Lun-Ven</span>
                  <Input defaultValue="09:00" type="time" className="h-8 text-xs" />
                  <span className="text-gray-400">-</span>
                  <Input defaultValue="18:00" type="time" className="h-8 text-xs" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600 w-12">Samedi</span>
                  <Input defaultValue="09:00" type="time" className="h-8 text-xs" />
                  <span className="text-gray-400">-</span>
                  <Input defaultValue="17:00" type="time" className="h-8 text-xs" />
                </div>
              </div>
            </div>

            <Button className="gradient-primary text-white">
              <Save className="w-4 h-4 mr-2" />
              Sauvegarder les informations
            </Button>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Changer le mot de passe</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Mot de passe actuel</label>
                  <div className="relative">
                    <Input
                      type={showCurrentPassword ? "text" : "password"}
                      className="pr-10 h-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    >
                      {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Nouveau mot de passe</label>
                  <div className="relative">
                    <Input
                      type={showNewPassword ? "text" : "password"}
                      className="pr-10 h-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    >
                      {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <Button className="gradient-primary text-white">
                  Mettre à jour le mot de passe
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Authentification à deux facteurs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">2FA désactivée</p>
                    <p className="text-sm text-gray-500">Ajoutez une couche de sécurité supplémentaire</p>
                  </div>
                  <Button variant="outline">Activer</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'appearance':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Thème</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Mode sombre</p>
                    <p className="text-sm text-gray-500">Basculer vers une interface sombre</p>
                  </div>
                  <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      isDarkMode ? 'bg-[#005EFF]' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        isDarkMode ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Langue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { code: 'fr', name: 'Français', flag: '🇫🇷' },
                    { code: 'en', name: 'English', flag: '🇺🇸' },
                    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
                  ].map((lang) => (
                    <label key={lang.code} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="language"
                        value={lang.code}
                        checked={language === lang.code}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="text-[#005EFF]"
                      />
                      <span className="text-xl">{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
                    </label>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'data':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Exporter les données</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="h-12">
                    <Download className="w-4 h-4 mr-2" />
                    Tickets (CSV)
                  </Button>
                  <Button variant="outline" className="h-12">
                    <Download className="w-4 h-4 mr-2" />
                    Clients (CSV)
                  </Button>
                  <Button variant="outline" className="h-12">
                    <Download className="w-4 h-4 mr-2" />
                    Stock (CSV)
                  </Button>
                  <Button variant="outline" className="h-12">
                    <Download className="w-4 h-4 mr-2" />
                    Rapports (PDF)
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Importer les données</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">
                    Glissez vos fichiers CSV ici ou cliquez pour parcourir
                  </p>
                  <Button variant="outline" size="sm">
                    Choisir des fichiers
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return (
          <div className="text-center py-8">
            <p className="text-gray-500">Cette section est en cours de développement</p>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden animate-scale-in">
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Paramètres</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeTab === tab.id
                      ? 'bg-[#005EFF] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {tabs.find(tab => tab.id === activeTab)?.label}
                </h3>
                <p className="text-gray-500">
                  Gérez vos préférences et paramètres de compte
                </p>
              </div>

              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsInterface;
