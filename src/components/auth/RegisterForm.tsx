
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, EyeOff, Mail, Lock, User, Building, Phone, Smartphone } from 'lucide-react';

interface RegisterFormProps {
  onSwitchToLogin: () => void;
  onRegister: (userData: any) => void;
}

const RegisterForm = ({ onSwitchToLogin, onRegister }: RegisterFormProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    workshopName: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }
    
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    onRegister(formData);
    setIsLoading(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    setCurrentStep(2);
  };

  const prevStep = () => {
    setCurrentStep(1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#005EFF]/10 via-blue-50 to-white p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Talifouni+</h1>
          </div>
          <p className="text-gray-600">Créez votre atelier intelligent</p>
        </div>

        <Card className="animate-scale-in shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-semibold text-gray-900">
              Inscription
            </CardTitle>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className={`w-8 h-2 rounded-full transition-colors ${currentStep >= 1 ? 'bg-[#005EFF]' : 'bg-gray-200'}`} />
              <div className={`w-8 h-2 rounded-full transition-colors ${currentStep >= 2 ? 'bg-[#005EFF]' : 'bg-gray-200'}`} />
            </div>
            <p className="text-gray-500 text-sm mt-2">
              Étape {currentStep} sur 2
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {currentStep === 1 && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Prénom</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          placeholder="Jean"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="pl-10 h-11 border-gray-200 focus:border-[#005EFF] transition-colors"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Nom</label>
                      <Input
                        placeholder="Dupont"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="h-11 border-gray-200 focus:border-[#005EFF] transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        type="email"
                        placeholder="jean.dupont@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="pl-10 h-11 border-gray-200 focus:border-[#005EFF] transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Téléphone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        type="tel"
                        placeholder="+33 6 12 34 56 78"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="pl-10 h-11 border-gray-200 focus:border-[#005EFF] transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="button"
                    onClick={nextStep}
                    className="w-full h-11 gradient-primary text-white font-medium hover:shadow-lg transition-all duration-200"
                  >
                    Continuer
                  </Button>
                </>
              )}

              {currentStep === 2 && (
                <>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Nom de l'atelier</label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        placeholder="Réparation Mobile Pro"
                        value={formData.workshopName}
                        onChange={(e) => handleInputChange('workshopName', e.target.value)}
                        className="pl-10 h-11 border-gray-200 focus:border-[#005EFF] transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Mot de passe</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className="pl-10 pr-10 h-11 border-gray-200 focus:border-[#005EFF] transition-colors"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Confirmer le mot de passe</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        className="pl-10 pr-10 h-11 border-gray-200 focus:border-[#005EFF] transition-colors"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 text-sm">
                    <input type="checkbox" className="mt-1 rounded border-gray-300" required />
                    <span className="text-gray-600">
                      J'accepte les{' '}
                      <button type="button" className="text-[#005EFF] hover:underline">
                        conditions d'utilisation
                      </button>{' '}
                      et la{' '}
                      <button type="button" className="text-[#005EFF] hover:underline">
                        politique de confidentialité
                      </button>
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      type="button"
                      onClick={prevStep}
                      variant="outline"
                      className="flex-1 h-11"
                    >
                      Retour
                    </Button>
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 h-11 gradient-primary text-white font-medium hover:shadow-lg transition-all duration-200"
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Création...
                        </div>
                      ) : (
                        "Créer mon compte"
                      )}
                    </Button>
                  </div>
                </>
              )}
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Déjà un compte ?{' '}
                <button
                  onClick={onSwitchToLogin}
                  className="text-[#005EFF] font-medium hover:underline"
                >
                  Se connecter
                </button>
              </p>
            </div>

            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-[#005EFF] text-white">Gratuit</Badge>
                <span className="text-sm font-medium text-gray-700">Essai de 30 jours</span>
              </div>
              <p className="text-xs text-gray-600">
                Toutes les fonctionnalités incluses • Sans engagement • Support inclus
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterForm;
