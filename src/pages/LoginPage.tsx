import { useState } from 'react';
import { Button } from '../components/ui/button';
import { useTranslation } from 'react-i18next';
import '../styles/cards.css';

export function LoginPage() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Replace with your admin app URL
  const ADMIN_APP_URL = 'https://admin.punctual-booking.com';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // In a real application, you would make an API call to authenticate
      // For demonstration, we'll simulate a successful login
      
      // Example API call:
      // const response = await fetch('https://api.punctual-booking.com/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password }),
      // });
      
      // if (!response.ok) throw new Error('Invalid credentials');
      // const data = await response.json();
      
      // Store the authentication token
      // localStorage.setItem('auth_token', data.token);
      
      // For demo purposes:
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to admin app with token
      // In production, you might use a more secure method like OAuth
      window.location.href = `${ADMIN_APP_URL}/dashboard?token=demo_token`;
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="font-primary text-4xl tracking-tight">PUNCTUAL</h1>
          <h2 className="font-secondary text-xl text-gray-700 mt-2">
            {t('login.title', 'ADMIN LOGIN')}
          </h2>
        </div>
        
        <div className="glassmorphism-card-no-hover p-8 rounded-lg">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">
                {t('login.email', 'Email')}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-left">
                {t('login.password', 'Password')}
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  {t('login.rememberMe', 'Remember me')}
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-primary hover:text-primary/80">
                  {t('login.forgotPassword', 'Forgot your password?')}
                </a>
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                disabled={isLoading}
              >
                {isLoading ? t('login.signingIn', 'Signing in...') : t('login.signIn', 'Sign in')}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
} 