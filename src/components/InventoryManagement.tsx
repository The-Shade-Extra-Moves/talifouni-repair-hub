
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Package, Search, AlertTriangle, Plus, TrendingUp, TrendingDown } from 'lucide-react';

const InventoryManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const inventory = [
    {
      id: 'P-001',
      name: 'Écran iPhone 13 Pro',
      category: 'Écrans',
      brand: 'Apple',
      stock: 2,
      minStock: 5,
      price: '180€',
      supplier: 'TechParts France',
      lastOrder: '2024-01-10',
      status: 'Stock faible'
    },
    {
      id: 'P-002',
      name: 'Batterie Samsung Galaxy S22',
      category: 'Batteries',
      brand: 'Samsung',
      stock: 8,
      minStock: 3,
      price: '45€',
      supplier: 'Mobile Parts Pro',
      lastOrder: '2024-01-08',
      status: 'En stock'
    },
    {
      id: 'P-003',
      name: 'Module caméra iPhone 12',
      category: 'Caméras',
      brand: 'Apple',
      stock: 0,
      minStock: 2,
      price: '120€',
      supplier: 'TechParts France',
      lastOrder: '2024-01-05',
      status: 'Rupture'
    },
    {
      id: 'P-004',
      name: 'Connecteur charge Huawei P40',
      category: 'Connecteurs',
      brand: 'Huawei',
      stock: 15,
      minStock: 5,
      price: '25€',
      supplier: 'Euro Mobile Parts',
      lastOrder: '2024-01-12',
      status: 'En stock'
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
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestion de stock</h1>
          <p className="text-gray-600 mt-1">Suivi intelligent de vos pièces détachées</p>
        </div>
        <Button className="bg-[#005EFF] hover:bg-[#0047CC] text-white">
          <Plus className="w-4 h-4 mr-2" />
          Ajouter une pièce
        </Button>
      </div>

      {/* Stats rapides */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pièces en stock</p>
                <p className="text-2xl font-bold text-gray-900">47</p>
              </div>
              <Package className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Stock faible</p>
                <p className="text-2xl font-bold text-orange-600">3</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Valeur totale</p>
                <p className="text-2xl font-bold text-green-600">3,240€</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Commandes en cours</p>
                <p className="text-2xl font-bold text-blue-600">2</p>
              </div>
              <TrendingDown className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="w-5 h-5 text-[#005EFF]" />
            Inventaire des pièces
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Rechercher une pièce, référence, marque..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="space-y-3">
              {inventory.map((item) => (
                <div key={item.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="font-mono text-sm font-semibold text-[#005EFF]">
                        {item.id}
                      </div>
                      <Badge className={`${getStatusColor(item.status)} border`}>
                        {item.status}
                      </Badge>
                      {item.stock <= item.minStock && item.stock > 0 && (
                        <Badge className="bg-orange-100 text-orange-800 border-orange-300 border">
                          <AlertTriangle className="w-3 h-3 mr-1" />
                          Réapprovisionnement
                        </Badge>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-[#005EFF] text-lg">{item.price}</p>
                      <p className="text-sm text-gray-500">Prix unitaire</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.category} - {item.brand}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600">Stock actuel</p>
                      <p className={`font-semibold ${
                        item.stock === 0 ? 'text-red-600' : 
                        item.stock <= item.minStock ? 'text-orange-600' : 'text-green-600'
                      }`}>
                        {item.stock} unités
                      </p>
                      <p className="text-xs text-gray-500">Min: {item.minStock}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600">Fournisseur</p>
                      <p className="font-medium text-gray-900">{item.supplier}</p>
                      <p className="text-xs text-gray-500">Dernière commande: {item.lastOrder}</p>
                    </div>
                    
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">
                        Voir détails
                      </Button>
                      {item.stock <= item.minStock && (
                        <Button size="sm" className="bg-[#005EFF] hover:bg-[#0047CC] text-white">
                          Commander
                        </Button>
                      )}
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

export default InventoryManagement;
