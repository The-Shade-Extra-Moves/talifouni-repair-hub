
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Package, 
  Search, 
  AlertTriangle, 
  Plus, 
  TrendingUp, 
  TrendingDown, 
  Bell,
  FileDown,
  FileUp,
  Barcode,
  Edit,
  Trash2,
  CheckCircle
} from 'lucide-react';

const SmartInventory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const inventory = [
    {
      id: 'P-001',
      name: 'Écran iPhone 13 Pro',
      category: 'Écrans',
      brand: 'Apple',
      model: 'iPhone 13 Pro',
      stock: 2,
      minStock: 5,
      maxStock: 20,
      price: '180€',
      costPrice: '120€',
      supplier: 'TechParts France',
      lastOrder: '2024-01-10',
      status: 'Stock faible',
      barcode: '1234567890123',
      location: 'A1-B2',
      usedThisMonth: 12,
      averageUsage: 8
    },
    {
      id: 'P-002',
      name: 'Batterie Samsung Galaxy S22',
      category: 'Batteries',
      brand: 'Samsung',
      model: 'Galaxy S22',
      stock: 8,
      minStock: 3,
      maxStock: 15,
      price: '45€',
      costPrice: '25€',
      supplier: 'Mobile Parts Pro',
      lastOrder: '2024-01-08',
      status: 'En stock',
      barcode: '2345678901234',
      location: 'B2-C1',
      usedThisMonth: 5,
      averageUsage: 6
    },
    {
      id: 'P-003',
      name: 'Module caméra iPhone 12',
      category: 'Caméras',
      brand: 'Apple',
      model: 'iPhone 12',
      stock: 0,
      minStock: 2,
      maxStock: 10,
      price: '120€',
      costPrice: '80€',
      supplier: 'TechParts France',
      lastOrder: '2024-01-05',
      status: 'Rupture',
      barcode: '3456789012345',
      location: 'C1-D2',
      usedThisMonth: 3,
      averageUsage: 4
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En stock':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'Stock faible':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'Rupture':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'Surstockage':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getStockLevel = (current: number, min: number, max: number) => {
    if (current === 0) return 'empty';
    if (current <= min) return 'low';
    if (current >= max) return 'high';
    return 'normal';
  };

  const criticalItems = inventory.filter(item => item.stock <= item.minStock);
  const totalValue = inventory.reduce((sum, item) => {
    const price = parseFloat(item.costPrice.replace('€', ''));
    return sum + (price * item.stock);
  }, 0);

  const AddPartModal = () => (
    <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Plus className="w-5 h-5 text-[#005EFF]" />
            Ajouter une nouvelle pièce
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="part-name">Nom de la pièce</Label>
              <Input id="part-name" placeholder="Écran iPhone 14" />
            </div>
            <div>
              <Label htmlFor="part-category">Catégorie</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="screens">Écrans</SelectItem>
                  <SelectItem value="batteries">Batteries</SelectItem>
                  <SelectItem value="cameras">Caméras</SelectItem>
                  <SelectItem value="connectors">Connecteurs</SelectItem>
                  <SelectItem value="buttons">Boutons</SelectItem>
                  <SelectItem value="speakers">Haut-parleurs</SelectItem>
                  <SelectItem value="other">Autre</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="part-brand">Marque</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="samsung">Samsung</SelectItem>
                  <SelectItem value="huawei">Huawei</SelectItem>
                  <SelectItem value="xiaomi">Xiaomi</SelectItem>
                  <SelectItem value="oppo">Oppo</SelectItem>
                  <SelectItem value="oneplus">OnePlus</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="part-model">Modèle</Label>
              <Input id="part-model" placeholder="iPhone 14 Pro" />
            </div>
            <div>
              <Label htmlFor="barcode">Code-barres</Label>
              <div className="flex gap-2">
                <Input id="barcode" placeholder="1234567890123" />
                <Button variant="outline" size="icon">
                  <Barcode className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div>
              <Label htmlFor="location">Emplacement</Label>
              <Input id="location" placeholder="A1-B2" />
            </div>
            <div>
              <Label htmlFor="cost-price">Prix d'achat (€)</Label>
              <Input id="cost-price" type="number" placeholder="120" />
            </div>
            <div>
              <Label htmlFor="sell-price">Prix de vente (€)</Label>
              <Input id="sell-price" type="number" placeholder="180" />
            </div>
            <div>
              <Label htmlFor="min-stock">Stock minimum</Label>
              <Input id="min-stock" type="number" placeholder="5" />
            </div>
            <div>
              <Label htmlFor="max-stock">Stock maximum</Label>
              <Input id="max-stock" type="number" placeholder="20" />
            </div>
            <div>
              <Label htmlFor="current-stock">Stock initial</Label>
              <Input id="current-stock" type="number" placeholder="10" />
            </div>
            <div>
              <Label htmlFor="supplier">Fournisseur</Label>
              <Input id="supplier" placeholder="TechParts France" />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="outline" onClick={() => setIsAddModalOpen(false)}>
              Annuler
            </Button>
            <Button className="bg-[#005EFF] hover:bg-[#0047CC] text-white">
              Ajouter la pièce
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="space-y-6">
      {/* En-tête avec actions */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestion intelligente du stock</h1>
          <p className="text-gray-600 mt-1">Suivi automatique et alertes en temps réel</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <FileDown className="w-4 h-4" />
            Exporter CSV
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <FileUp className="w-4 h-4" />
            Importer CSV
          </Button>
          <Button 
            className="bg-[#005EFF] hover:bg-[#0047CC] text-white"
            onClick={() => setIsAddModalOpen(true)}
          >
            <Plus className="w-4 h-4 mr-2" />
            Nouvelle pièce
          </Button>
        </div>
      </div>

      {/* Alertes critiques */}
      {criticalItems.length > 0 && (
        <Card className="border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-800">
              <Bell className="w-5 h-5" />
              Alertes stock ({criticalItems.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {criticalItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 bg-white rounded-lg border border-orange-200">
                  <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-600">Stock: {item.stock} / Min: {item.minStock}</p>
                  </div>
                  <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white">
                    Commander
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Stats rapides */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pièces en stock</p>
                <p className="text-2xl font-bold text-gray-900">
                  {inventory.reduce((sum, item) => sum + item.stock, 0)}
                </p>
              </div>
              <Package className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Alertes critiques</p>
                <p className="text-2xl font-bold text-orange-600">{criticalItems.length}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Valeur totale</p>
                <p className="text-2xl font-bold text-green-600">{totalValue.toFixed(0)}€</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Références actives</p>
                <p className="text-2xl font-bold text-blue-600">{inventory.length}</p>
              </div>
              <TrendingDown className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Liste des pièces */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center gap-2">
              <Package className="w-5 h-5 text-[#005EFF]" />
              Inventaire des pièces détachées
            </CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Filtrer par catégorie</Button>
              <Button variant="outline" size="sm">Trier par stock</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Rechercher une pièce, référence, marque, modèle..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="space-y-3">
              {inventory.map((item) => (
                <Card key={item.id} className="hover:shadow-md transition-all duration-200">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        <div className="font-mono text-sm font-semibold text-[#005EFF]">
                          {item.id}
                        </div>
                        <Badge className={`${getStatusColor(item.status)} border`}>
                          {item.status}
                        </Badge>
                        {item.usedThisMonth > item.averageUsage && (
                          <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300 border">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Forte demande
                          </Badge>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                      <div className="md:col-span-2">
                        <h3 className="font-medium text-gray-900 text-lg">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.category} - {item.brand} {item.model}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          <Barcode className="w-3 h-3 inline mr-1" />
                          {item.barcode} | {item.location}
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-600">Stock</p>
                        <div className="flex items-center gap-2">
                          <span className={`text-lg font-bold ${
                            item.stock === 0 ? 'text-red-600' : 
                            item.stock <= item.minStock ? 'text-orange-600' : 'text-green-600'
                          }`}>
                            {item.stock}
                          </span>
                          <span className="text-sm text-gray-500">/ {item.maxStock}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div 
                            className={`h-2 rounded-full ${
                              item.stock === 0 ? 'bg-red-500' :
                              item.stock <= item.minStock ? 'bg-orange-500' : 'bg-green-500'
                            }`}
                            style={{ width: `${Math.min((item.stock / item.maxStock) * 100, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-600">Prix</p>
                        <p className="font-semibold text-[#005EFF] text-lg">{item.price}</p>
                        <p className="text-xs text-gray-500">Coût: {item.costPrice}</p>
                        <p className="text-xs text-green-600">
                          Marge: {((parseFloat(item.price.replace('€', '')) - parseFloat(item.costPrice.replace('€', ''))) / parseFloat(item.costPrice.replace('€', '')) * 100).toFixed(0)}%
                        </p>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <div className="text-sm">
                          <p className="text-gray-600">Utilisé ce mois</p>
                          <p className="font-medium">{item.usedThisMonth} pièces</p>
                          <p className="text-xs text-gray-500">Moy: {item.averageUsage}/mois</p>
                        </div>
                        
                        <div className="flex gap-1 mt-auto">
                          <Button size="sm" variant="outline" className="flex-1">
                            Détails
                          </Button>
                          {item.stock <= item.minStock && (
                            <Button size="sm" className="flex-1 bg-[#005EFF] hover:bg-[#0047CC] text-white">
                              Commander
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-3 pt-3 border-t flex justify-between items-center text-sm text-gray-500">
                      <span>Fournisseur: {item.supplier}</span>
                      <span>Dernière commande: {item.lastOrder}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      
      <AddPartModal />
    </div>
  );
};

export default SmartInventory;
