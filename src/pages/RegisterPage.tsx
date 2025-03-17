import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../components/ui/button';
import { SEO } from '../components/SEO';

export function RegisterPage() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: Implement actual registration logic
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to admin dashboard after successful registration
      window.location.href = 'https://admin.punctual-booking.com';
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <SEO
        title="Start Your Free Trial - Punctual Booking"
        description="Sign up for a 14-day free trial of Punctual Booking. No credit card required."
        keywords="free trial, sign up, registration, booking software"
      />

      <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="glassmorphism-card-no-hover max-w-md w-full space-y-8 p-8 rounded-lg">
          <div>
            <h2 className="mt-6 text-center text-3xl font-primary">
              {t('register.title', 'Start Your Free Trial')}
            </h2>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              {t('register.subtitle', 'No credit card required. 14-day free trial.')}
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md space-y-4">
              <div>
                <label htmlFor="businessName" className="sr-only">
                  {t('register.businessName', 'Business Name')}
                </label>
                <input
                  id="businessName"
                  name="businessName"
                  type="text"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-input bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder={t('register.businessNamePlaceholder', 'Business Name')}
                  value={formData.businessName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  {t('register.email', 'Email address')}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-input bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder={t('register.emailPlaceholder', 'Email address')}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  {t('register.password', 'Password')}
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-input bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder={t('register.passwordPlaceholder', 'Password')}
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="sr-only">
                  {t('register.confirmPassword', 'Confirm Password')}
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-input bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder={t('register.confirmPasswordPlaceholder', 'Confirm Password')}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('register.creating', 'Creating your account...')}
                  </span>
                ) : (
                  t('register.submit', 'Start Free Trial')
                )}
              </Button>
            </div>
          </form>

          <div className="text-center text-sm text-muted-foreground">
            {t('register.alreadyHaveAccount', 'Already have an account?')}{' '}
            <a href="/login" className="font-medium text-primary hover:text-primary/90">
              {t('register.signIn', 'Sign in')}
            </a>
          </div>
        </div>
      </div>
    </>
  );
} 