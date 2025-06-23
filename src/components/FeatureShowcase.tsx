
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Smartphone, 
  Package, 
  Users, 
  CreditCard, 
  BarChart3, 
  Clock,
  CheckCircle,
  Star,
  Zap,
  Shield,
  Globe,
  ArrowRight
} from 'lucide-react';

const FeatureShowcase = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Tableau de bord en temps réel",
      description: "Vue synthétique de tous vos tickets, graphiques de performance et alertes intelligentes pour ne rien manquer.",
      features: ["Suivi en temps réel", "Alertes automatiques", "Graphiques interactifs"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Package,
      title: "Gestion de stock intelligente",
      description: "Suivi automatique des pièces détachées avec alertes de réapprovisionnement et intégration fournisseurs.",
      features: ["Alerts automatiques", "Import/Export CSV", "Liaison pièce-réparation"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: CreditCard,
      title: "Facturation & paiements",
      description: "Génération de devis et factures professionnelles avec multiple modes de paiement intégrés.",
      features: ["Paiements multiples", "Export comptable", "Relances automatiques"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Gestion des clients",
      description: "Fiches clients détaillées avec historique, programme de fidélité et communications automatisées.",
      features: ["Historique complet", "Programme fidélité", "Notifications SMS/Email"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: BarChart3,
      title: "Rapports & analytics",
      description: "Analyses avancées de performance avec exports automatiques et intégrations BI.",
      features: ["KPIs détaillés", "Exports automatiques", "Intégration Power BI"],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Smartphone,
      title: "Application mobile",
      description: "Apps dédiées pour techniciens et clients avec suivi en temps réel et communications.",
      features: ["Mode offline", "Scan de pièces", "Suivi client temps réel"],
      color: "from-pink-500 to-pink-600"
    }
  ];

  const benefits = [
    { icon: Clock, title: "Gain de temps", description: "Automatisation de 70% des tâches répétitives" },
    { icon: CheckCircle, title: "Fiabilité", description: "99.9% de disponibilité garantie" },
    { icon: Star, title: "Satisfaction", description: "4.8/5 de satisfaction client moyenne" },
    { icon: Zap, title: "Performance", description: "Réduction de 40% du temps de traitement" },
    { icon: Shield, title: "Sécurité", description: "Données chiffrées et conformité RGPD" },
    { icon: Globe, title: "Multi-langues", description: "Interface FR/EN/AR avec support RTL" }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#005EFF]/10 text-[#005EFF] border-[#005EFF]/20">
            ✨ Fonctionnalités complètes
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tout ce dont votre atelier a besoin
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une solution complète qui s'adapte à votre workflow et grandit avec votre business.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits section */}
        <div className="bg-gradient-to-r from-[#005EFF]/5 to-blue-50 rounded-3xl p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Pourquoi choisir Talifouni+ ?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Rejoignez plus de 500 ateliers qui ont déjà transformé leur activité avec notre solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <benefit.icon className="w-8 h-8 text-[#005EFF]" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div className="bg-gradient-to-r from-[#005EFF] to-[#0047CC] rounded-3xl p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Prêt à transformer votre atelier ?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Commencez dès aujourd'hui avec notre essai gratuit de 14 jours. 
            Aucune carte de crédit requise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-white text-[#005EFF] hover:bg-gray-100 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Essai gratuit 14 jours
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#005EFF] px-8 py-3 text-lg font-semibold"
            >
              Demander une démo
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8 text-sm opacity-80">
            <span>✓ Installation rapide</span>
            <span>✓ Formation incluse</span>
            <span>✓ Support français</span>
            <span>✓ Migration de données</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureShowcase;
