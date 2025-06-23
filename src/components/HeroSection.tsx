
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, ArrowRight, Smartphone, Zap, Users, BarChart3 } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-100">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-[#005EFF]/10 text-[#005EFF] border-[#005EFF]/20 hover:bg-[#005EFF]/20">
            🚀 Nouvelle génération de SaaS pour ateliers
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#005EFF] to-[#0047CC] bg-clip-text text-transparent">
              Talifouni+
            </span>
            <br />
            La solution tout-en-un pour votre atelier
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transformez votre atelier de réparation en un centre intelligent, rentable et automatisé. 
            Simplifiez vos réparations, accélérez vos workflows, et fidélisez vos clients grâce à une technologie puissante et intuitive.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              className="bg-[#005EFF] hover:bg-[#0047CC] text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Commencer gratuitement
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-[#005EFF] text-[#005EFF] hover:bg-[#005EFF] hover:text-white px-8 py-3 text-lg font-semibold"
            >
              <Play className="mr-2 w-5 h-5" />
              Voir la démo
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Installation en 5 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Support 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>+ de 500 ateliers font confiance</span>
            </div>
          </div>
        </div>
        
        {/* Features Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Gestion des réparations</h3>
            <p className="text-gray-600 text-sm">Suivi en temps réel de tous vos tickets de réparation avec notifications automatiques.</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Stock intelligent</h3>
            <p className="text-gray-600 text-sm">Gestion automatisée de votre inventaire avec alertes de réapprovisionnement.</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Clients fidèles</h3>
            <p className="text-gray-600 text-sm">Programme de fidélité intégré avec suivi personnalisé et communications automatiques.</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics avancés</h3>
            <p className="text-gray-600 text-sm">Rapports détaillés et KPIs pour optimiser la performance de votre atelier.</p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>
  );
};

export default HeroSection;
