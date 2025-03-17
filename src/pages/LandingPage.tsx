import { SEO } from '../components/SEO';
import { StructuredData } from '../components/StructuredData';
import { FAQStructuredData } from '../components/FAQStructuredData';
import { Button } from '../components/ui/button';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import placeholderImage from '../assets/images/landing-page-placeholder.webp';
import calendarImage from '../assets/images/calendar-image-placeholder.png';
import '../styles/cards.css';
import { Toggle } from '../components/ui/toggle';
import { useState } from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LandingPage() {
  const { t } = useTranslation();
  const [isYearly, setIsYearly] = useState(false);
  
  // SEO metadata for this page
  const seoData = {
    title: 'Punctual Booking - Streamline Your Appointment Scheduling',
    description: 'Punctual Booking helps businesses manage appointments efficiently with our powerful SaaS platform. Try it free today!',
    keywords: 'appointment scheduling, booking software, calendar management, scheduling platform, business scheduling',
    ogTitle: 'Punctual Booking - Streamline Your Appointment Scheduling',
    ogDescription: 'Manage appointments efficiently with our powerful SaaS platform. Try it free today!',
    ogImage: '/images/og-landing-page.jpg',
    canonicalUrl: 'https://punctual-booking.com',
  };

  // Structured data for rich snippets
  const structuredData = {
    name: 'Punctual Booking',
    description: 'Appointment scheduling software for businesses',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '19.99',
      priceCurrency: 'USD',
      priceValidUntil: '2024-12-31',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1024',
    },
  };

  // FAQ data for structured data
  const faqData = [
    {
      question: t('faq.question1', 'How does the free trial work?'),
      answer: t('faq.answer1', 'Our 14-day free trial gives you full access to all features. No credit card required to start.'),
    },
    {
      question: t('faq.question2', 'Can I cancel my subscription anytime?'),
      answer: t('faq.answer2', 'Yes, you can cancel your subscription at any time with no cancellation fees.'),
    },
    {
      question: t('faq.question3', 'Is my data secure?'),
      answer: t('faq.answer3', 'We use industry-standard encryption and security practices to keep your data safe.'),
    },
  ];

  // Example testimonials data
  const testimonialsData = [
    {
      quote: t('testimonials.quote1', '"Punctual Booking has transformed how we manage appointments. Our no-show rate has dropped by 60%!"'),
      name: t('testimonials.name1', 'MARIA SANTOS'),
      position: t('testimonials.position1', 'Salon Owner'),
    },
    {
      quote: t('testimonials.quote2', '"The platform is intuitive and easy to use. Our team loves it!"'),
      name: t('testimonials.name2', 'JOHN DOE'),
      position: t('testimonials.position2', 'Business Manager'),
    },
    {
      quote: t('testimonials.quote3', '"Punctual Booking has transformed how we manage appointments. Our no-show rate has dropped by 60%!"'),
      name: t('testimonials.name3', 'MARIA SANTOS'),
      position: t('testimonials.position3', 'Salon Owner'),
    },
    {
      quote: t('testimonials.quote4', '"Punctual Booking has transformed how we manage appointments. Our no-show rate has dropped by 60%!"'),
      name: t('testimonials.name4', 'MARIA SANTOS'),
      position: t('testimonials.position4', 'Salon Owner'),
    },
    {
      quote: t('testimonials.quote5', '"The automated reminders and easy rescheduling have made our clinic much more efficient."'),
      name: t('testimonials.name5', 'DAVID SILVA'),
      position: t('testimonials.position5', 'Medical Director'),
    },
    {
      quote: t('testimonials.quote6', '"Best investment we made for our business. The customer support is exceptional!"'),
      name: t('testimonials.name6', 'ANA COSTA'),
      position: t('testimonials.position6', 'Restaurant Owner'),
    }
    // Add more testimonials as needed
  ];

  const pricingPlans = [
    {
      name: t('pricing.starter.title', 'Starter'),
      price: {
        monthly: 29,
        yearly: 24,
      },
      description: t('pricing.starter.description', 'Perfect for small businesses'),
      features: [
        t('pricing.starter.features.0', 'Up to 50 appointments/month'),
        t('pricing.starter.features.1', 'Basic email support'),
        t('pricing.starter.features.2', 'Calendar integration'),
      ],
      cta: t('pricing.starter.cta', 'Get Started'),
      highlighted: false,
    },
    {
      name: t('pricing.professional.title', 'Professional'),
      price: {
        monthly: 79,
        yearly: 64,
      },
      description: t('pricing.professional.description', 'Ideal for growing businesses'),
      features: [
        t('pricing.professional.features.0', 'Unlimited appointments'),
        t('pricing.professional.features.1', 'Priority support'),
        t('pricing.professional.features.2', 'Advanced analytics'),
        t('pricing.professional.features.3', 'Team management'),
      ],
      cta: t('pricing.professional.cta', 'Start Free Trial'),
      highlighted: true,
    },
    {
      name: t('pricing.enterprise.title', 'Enterprise'),
      price: {
        monthly: 199,
        yearly: 159,
      },
      description: t('pricing.enterprise.description', 'For large organizations'),
      features: [
        t('pricing.enterprise.features.0', 'Custom integrations'),
        t('pricing.enterprise.features.1', 'Dedicated support'),
        t('pricing.enterprise.features.2', 'Advanced security'),
        t('pricing.enterprise.features.3', 'API access'),
      ],
      cta: t('pricing.enterprise.cta', 'Contact Sales'),
      highlighted: false,
    },
  ];

  return (
    <>
      {/* SEO Components */}
      <SEO {...seoData} />
      <StructuredData type="SoftwareApplication" data={structuredData} />
      <FAQStructuredData faqs={faqData} />

      {/* Main Content */}
      <main className="flex flex-col min-h-screen text-center">
        <section className="hero py-20 md:py-32 relative">
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-background pointer-events-none"></div>
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col space-y-8 items-center text-center">
                <h1 className="font-primary text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight">
                  PUNCTUAL
                </h1>
                <h2 className="font-secondary text-xl md:text-2xl text-gray-700">
                  {t('hero.subtitle', 'BOOKING MANAGEMENT')}
                </h2>
                <p className="font-secondary text-gray-600 max-w-[500px]">
                  {t('hero.description', 'Streamline your appointment scheduling with our powerful booking platform. Reduce no-shows and grow your business.')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                  <Button 
                    size="lg" 
                    asChild 
                    className="font-bold shadow-lg hover:shadow-xl"
                  >
                    <Link to="/register">{t('hero.cta.trial', 'Start Free Trial')}</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="font-secondary">
                    <a href="#demo">{t('hero.cta.demo', 'Watch Demo')}</a>
                  </Button>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                {/* Image placeholder - you can replace this with your actual image */}
                <div className="aspect-[4/3] bg-gray-200 rounded-md overflow-hidden max-w-[500px]">
                  <img 
                    src={placeholderImage} 
                    alt="Booking management interface" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="relative py-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background pointer-events-none"></div>
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex justify-center">
              <div className="bg-white/30 backdrop-blur-md rounded-lg shadow-lg overflow-hidden max-w-[1000px]">
                <img 
                  src={calendarImage} 
                  alt="Calendar interface" 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <section id="features" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />
          <div className="container px-4 md:px-6 mx-auto relative">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="font-primary text-3xl md:text-4xl tracking-tight">{t('features.title', 'KEY FEATURES')}</h2>
              <p className="font-secondary text-muted-foreground max-w-[600px]">
                {t('features.subtitle', 'Everything you need to manage appointments efficiently')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glassmorphism-card p-8 rounded-xl">
                <h3 className="font-primary text-xl mb-4">{t('features.onlineBooking.title', 'ONLINE BOOKING')}</h3>
                <p className="font-secondary text-muted-foreground">{t('features.onlineBooking.description', 'Allow clients to book appointments 24/7 from any device')}</p>
              </div>
              <div className="glassmorphism-card p-8 rounded-xl">
                <h3 className="font-primary text-xl mb-4">{t('features.reminders.title', 'AUTOMATED REMINDERS')}</h3>
                <p className="font-secondary text-muted-foreground">{t('features.reminders.description', 'Reduce no-shows with SMS and email reminders')}</p>
              </div>
              <div className="glassmorphism-card p-8 rounded-xl">
                <h3 className="font-primary text-xl mb-4">{t('features.team.title', 'TEAM MANAGEMENT')}</h3>
                <p className="font-secondary text-muted-foreground">{t('features.team.description', 'Manage staff schedules and availability')}</p>
              </div>
              <div className="glassmorphism-card p-8 rounded-xl">
                <h3 className="font-primary text-xl mb-4">{t('features.analytics.title', 'ANALYTICS')}</h3>
                <p className="font-secondary text-muted-foreground">{t('features.analytics.description', 'Track performance with detailed reports')}</p>
              </div>
              <div className="glassmorphism-card p-8 rounded-xl">
                <h3 className="font-primary text-xl mb-4">{t('features.customization.title', 'CUSTOMIZATION')}</h3>
                <p className="font-secondary text-muted-foreground">{t('features.customization.description', 'Tailor the platform to your business needs')}</p>
              </div>
              <div className="glassmorphism-card p-8 rounded-xl">
                <h3 className="font-primary text-xl mb-4">{t('features.payment.title', 'PAYMENT PROCESSING')}</h3>
                <p className="font-secondary text-muted-foreground">{t('features.payment.description', 'Accept payments and deposits at time of booking')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials py-20 relative overflow-hidden">
          <div className="container px-4 md:px-6 mx-auto relative">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="font-primary text-3xl md:text-4xl tracking-tight">{t('testimonials.title', 'TESTIMONIALS')}</h2>
              <p className="font-secondary text-muted-foreground max-w-[600px]">
                {t('testimonials.subtitle', 'Trusted by businesses worldwide')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonialsData.map((testimonial, index) => (
                <div key={index} className="glassmorphism-card p-8 rounded-xl">
                  <p className="font-secondary text-lg italic mb-6">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="ml-4">
                      <p className="font-primary text-sm">{testimonial.name}</p>
                      <p className="font-secondary text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-primary mb-4">{t('pricing.title', 'Simple, Transparent Pricing')}</h2>
              <p className="text-xl text-muted-foreground font-secondary">
                {t('pricing.subtitle', 'Choose the plan that best fits your needs')}
              </p>
            </div>

            <div className="flex justify-center items-center gap-4 mb-12">
              <span className={`text-sm ${!isYearly ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
                {t('pricing.monthly', 'Monthly')}
              </span>
              <Toggle
                pressed={isYearly}
                onPressedChange={setIsYearly}
                className="relative inline-flex h-6 w-11 items-center justify-center rounded-full bg-primary/20 data-[state=on]:bg-primary transition-colors"
              >
                <span
                  className={`absolute h-5 w-5 rounded-full bg-white shadow-lg transition-transform duration-200 ease-in-out ${
                    isYearly ? 'translate-x-[40%]' : '-translate-x-[40%]'
                  }`}
                />
              </Toggle>
              <span className={`text-sm ${isYearly ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
                {t('pricing.yearly', 'Yearly')}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`glassmorphism-card p-8 rounded-lg flex flex-col ${
                    plan.highlighted ? 'border-2 border-primary' : ''
                  }`}
                >
                  <div>
                    <h3 className="text-2xl font-primary mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-4xl font-bold">
                          ${isYearly ? plan.price.yearly : plan.price.monthly}
                        </span>
                        <span className="text-muted-foreground">/{t('pricing.perMonth', 'month')}</span>
                        {isYearly && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                            {t('pricing.save', 'Save 20%')}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">{plan.description}</p>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    asChild
                    variant={plan.highlighted ? 'default' : 'secondary'}
                    className="w-full mt-auto"
                  >
                    <Link to="/register">{plan.cta}</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />
          <div className="container px-4 md:px-6 mx-auto relative">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="font-primary text-3xl md:text-4xl tracking-tight">{t('faq.title', 'FAQ')}</h2>
              <p className="font-secondary text-muted-foreground max-w-[600px]">
                {t('faq.subtitle', 'Find answers to common questions about Punctual Booking')}
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className="glassmorphism-card p-8 rounded-xl">
                  <h3 className="font-primary text-xl mb-4">{faq.question}</h3>
                  <p className="font-secondary text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="font-primary text-3xl md:text-4xl tracking-tight">{t('about.title', 'ABOUT US')}</h2>
              <p className="font-secondary text-muted-foreground max-w-[600px]">
                {t('about.subtitle', 'Our mission is to help businesses save time and improve customer satisfaction')}
              </p>
            </div>
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-secondary text-muted-foreground mb-4">
                {t('about.description1', 'Punctual Booking was founded in 2023 with a simple goal: to make appointment scheduling effortless for businesses of all sizes. Our team of experienced developers and business experts has created a platform that combines powerful features with an intuitive interface.')}
              </p>
              <p className="font-secondary text-muted-foreground">
                {t('about.description2', 'We\'re committed to continuous improvement and innovation, regularly adding new features based on customer feedback. Our customer success team provides personalized support to ensure you get the most out of our platform.')}
              </p>
            </div>
          </div>
        </section>

        <section id="signup" className="py-20 bg-primary/10 dark:bg-primary/5">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center space-y-4 mb-8">
              <h2 className="font-primary text-3xl md:text-4xl tracking-tight">{t('cta.title', 'READY TO GET STARTED?')}</h2>
              <p className="font-secondary text-muted-foreground max-w-[600px]">
                {t('cta.subtitle', 'Join thousands of businesses that trust Punctual Booking for their scheduling needs')}
              </p>
            </div>
            <div className="flex justify-center">
              <Button 
                size="lg" 
                asChild 
                className="font-secondary bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to="/register">{t('cta.button', 'Start Your 14-Day Free Trial')}</Link>
              </Button>
            </div>
          </div>
        </section>

        <footer className="py-12 bg-background border-t">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="flex items-center space-x-2 mb-4">
                  <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span className="font-primary text-xl tracking-tight">PUNCTUAL</span>
                </div>
                <p className="font-secondary text-muted-foreground">
                  {t('footer.description', 'Streamline your appointment scheduling with our powerful booking platform')}
                </p>
                <div className="mt-4">
                  <LanguageSwitcher />
                </div>
              </div>
              <div>
                <h3 className="font-primary mb-4">{t('footer.product', 'PRODUCT')}</h3>
                <ul className="space-y-2 font-secondary">
                  <li><a href="#features" className="text-muted-foreground hover:text-foreground">{t('nav.features', 'Features')}</a></li>
                  <li><a href="#pricing" className="text-muted-foreground hover:text-foreground">{t('nav.pricing', 'Pricing')}</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">{t('footer.integrations', 'Integrations')}</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">{t('footer.api', 'API')}</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-primary mb-4">{t('footer.company', 'COMPANY')}</h3>
                <ul className="space-y-2 font-secondary">
                  <li><a href="#about" className="text-muted-foreground hover:text-foreground">{t('nav.about', 'About')}</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">{t('nav.blog', 'Blog')}</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">{t('footer.careers', 'Careers')}</a></li>
                  <li><a href="#contact" className="text-muted-foreground hover:text-foreground">{t('footer.contact', 'Contact')}</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-primary mb-4">{t('footer.legal', 'LEGAL')}</h3>
                <ul className="space-y-2 font-secondary">
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">{t('footer.privacy', 'Privacy Policy')}</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">{t('footer.terms', 'Terms of Service')}</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">{t('footer.cookie', 'Cookie Policy')}</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">{t('footer.gdpr', 'GDPR')}</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
              <p className="font-secondary">{t('footer.copyright', '© 2024 Punctual Booking. All rights reserved.')}</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
} 