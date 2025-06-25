
import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

interface AuthWrapperProps {
  onAuthSuccess: (user: any) => void;
}

const AuthWrapper = ({ onAuthSuccess }: AuthWrapperProps) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (email: string, password: string) => {
    // Simulate authentication
    const user = {
      id: 1,
      email,
      name: 'Jean Dupont',
      role: 'admin',
      workshop: 'Réparation Mobile Pro'
    };
    onAuthSuccess(user);
  };

  const handleRegister = (userData: any) => {
    // Simulate registration
    const user = {
      id: 1,
      email: userData.email,
      name: `${userData.firstName} ${userData.lastName}`,
      role: 'admin',
      workshop: userData.workshopName
    };
    onAuthSuccess(user);
  };

  return (
    <>
      {isLogin ? (
        <LoginForm
          onSwitchToRegister={() => setIsLogin(false)}
          onLogin={handleLogin}
        />
      ) : (
        <RegisterForm
          onSwitchToLogin={() => setIsLogin(true)}
          onRegister={handleRegister}
        />
      )}
    </>
  );
};

export default AuthWrapper;
