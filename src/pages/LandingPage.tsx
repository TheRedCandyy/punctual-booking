import { SEO } from '../components/SEO';
import { StructuredData } from '../components/StructuredData';
import { FAQStructuredData } from '../components/FAQStructuredData';
import { Button } from '../components/ui/button';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import placeholderImage from '../assets/images/landing-page-placeholder.webp';

export function LandingPage() {
  const { t } = useTranslation();
  
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
                    className="font-secondary bg-primary hover:bg-primary/90 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300  hover:animate-none"
                  >
                    <a href="#signup">{t('hero.cta.trial', 'Start Free Trial')}</a>
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

        <section id="features" className="py-20 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="font-primary text-3xl md:text-4xl tracking-tight">{t('features.title', 'KEY FEATURES')}</h2>
              <p className="font-secondary text-muted-foreground max-w-[600px]">
                {t('features.subtitle', 'Everything you need to manage appointments efficiently')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div id="online-booking" className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm border">
                <h3 className="font-primary text-xl mb-2">{t('features.onlineBooking.title', 'ONLINE BOOKING')}</h3>
                <p className="font-secondary text-muted-foreground">{t('features.onlineBooking.description', 'Allow clients to book appointments 24/7 from any device')}</p>
              </div>
              <div id="reminders" className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm border">
                <h3 className="font-primary text-xl mb-2">{t('features.reminders.title', 'AUTOMATED REMINDERS')}</h3>
                <p className="font-secondary text-muted-foreground">{t('features.reminders.description', 'Reduce no-shows with SMS and email reminders')}</p>
              </div>
              <div id="team" className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm border">
                <h3 className="font-primary text-xl mb-2">{t('features.team.title', 'TEAM MANAGEMENT')}</h3>
                <p className="font-secondary text-muted-foreground">{t('features.team.description', 'Manage staff schedules and availability')}</p>
              </div>
              <div id="analytics" className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm border">
                <h3 className="font-primary text-xl mb-2">{t('features.analytics.title', 'ANALYTICS')}</h3>
                <p className="font-secondary text-muted-foreground">{t('features.analytics.description', 'Track performance with detailed reports')}</p>
              </div>
              <div id="customization" className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm border">
                <h3 className="font-primary text-xl mb-2">{t('features.customization.title', 'CUSTOMIZATION')}</h3>
                <p className="font-secondary text-muted-foreground">{t('features.customization.description', 'Tailor the platform to your business needs')}</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm border">
                <h3 className="font-primary text-xl mb-2">{t('features.payment.title', 'PAYMENT PROCESSING')}</h3>
                <p className="font-secondary text-muted-foreground">{t('features.payment.description', 'Accept payments and deposits at time of booking')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials py-20 bg-secondary/20 relative">
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-background pointer-events-none"></div>
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="font-primary text-3xl md:text-4xl tracking-tight">{t('testimonials.title', 'TESTIMONIALS')}</h2>
              <p className="font-secondary text-muted-foreground max-w-[600px]">
                {t('testimonials.subtitle', 'Trusted by businesses worldwide')}
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="bg-card p-8 rounded-lg shadow-sm border text-center">
                <p className="font-secondary text-lg italic mb-4">
                  {t('testimonials.quote', '"Punctual Booking has transformed how we manage appointments. Our no-show rate has dropped by 60%!"')}
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    MS
                  </div>
                  <div className="ml-4">
                    <p className="font-primary">{t('testimonials.name', 'MARIA SANTOS')}</p>
                    <p className="font-secondary text-sm text-muted-foreground">{t('testimonials.position', 'Salon Owner')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="font-primary text-3xl md:text-4xl tracking-tight">{t('pricing.title', 'PRICING')}</h2>
              <p className="font-secondary text-muted-foreground max-w-[600px]">
                {t('pricing.subtitle', 'Choose the plan that works best for your business')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col p-6 bg-card rounded-lg shadow-sm border text-center">
                <h3 className="font-primary text-xl mb-2">{t('pricing.starter.title', 'STARTER')}</h3>
                <p className="text-3xl font-bold mb-4">€19.99<span className="font-secondary text-sm font-normal text-muted-foreground">/month</span></p>
                <ul className="space-y-2 mb-6 flex-grow font-secondary">
                  <li className="flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {t('pricing.starter.feature1', 'Up to 3 staff members')}
                  </li>
                  <li className="flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {t('pricing.starter.feature2', '100 bookings/month')}
                  </li>
                  <li className="flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {t('pricing.starter.feature3', 'Email reminders')}
                  </li>
                  <li className="flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {t('pricing.starter.feature4', 'Basic reporting')}
                  </li>
                </ul>
                <Button asChild className="font-secondary">
                  <a href="#signup">Get Started</a>
                </Button>
              </div>
              <div className="flex flex-col p-6 bg-primary text-primary-foreground rounded-lg shadow-sm border-2 border-primary relative text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium font-secondary">
                  Most Popular
                </div>
                <h3 className="font-primary text-xl mb-2">{t('pricing.professional.title', 'PROFESSIONAL')}</h3>
                <p className="text-3xl font-bold mb-4">€39.99<span className="font-secondary text-sm font-normal opacity-80">/month</span></p>
                <ul className="space-y-2 mb-6 flex-grow font-secondary">
                  <li className="flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {t('pricing.professional.feature1', 'Up to 10 staff members')}
                  </li>
                  <li className="flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {t('pricing.professional.feature2', 'Unlimited bookings')}
                  </li>
                  <li className="flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {t('pricing.professional.feature3', 'SMS & email reminders')}
                  </li>
                  <li className="flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {t('pricing.professional.feature4', 'Advanced reporting')}
                  </li>
                  <li className="flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {t('pricing.professional.feature5', 'Payment processing')}
                  </li>
                </ul>
                <Button variant="secondary" asChild className="font-secondary">
                  <a href="#signup">Get Started</a>
                </Button>
              </div>
              <div className="flex flex-col p-6 bg-card rounded-lg shadow-sm border text-center">
                <h3 className="font-primary text-xl mb-2">{t('pricing.enterprise.title', 'ENTERPRISE')}</h3>
                <p className="text-3xl font-bold mb-4">€99.99<span className="font-secondary text-sm font-normal text-muted-foreground">/month</span></p>
                <ul className="space-y-2 mb-6 flex-grow font-secondary">
                  <li className="flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {t('pricing.enterprise.feature1', 'Unlimited staff')}
                  </li>
                  <li className="flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {t('pricing.enterprise.feature2', 'Unlimited bookings')}
                  </li>
                  <li className="flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {t('pricing.enterprise.feature3', 'Custom branding')}
                  </li>
                  <li className="flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {t('pricing.enterprise.feature4', 'API access')}
                  </li>
                  <li className="flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {t('pricing.enterprise.feature5', 'Dedicated support')}
                  </li>
                </ul>
                <Button variant="outline" asChild className="font-secondary">
                  <a href="#contact">Contact Sales</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 bg-secondary/20">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="font-primary text-3xl md:text-4xl tracking-tight">{t('faq.title', 'FAQ')}</h2>
              <p className="font-secondary text-muted-foreground max-w-[600px]">
                {t('faq.subtitle', 'Find answers to common questions about Punctual Booking')}
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-sm border text-center">
                  <h3 className="font-primary text-xl mb-2">{faq.question.toUpperCase()}</h3>
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

        <section id="signup" className="py-20 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center space-y-4 mb-8">
              <h2 className="font-primary text-3xl md:text-4xl tracking-tight">{t('cta.title', 'READY TO GET STARTED?')}</h2>
              <p className="font-secondary max-w-[600px] opacity-90">
                {t('cta.subtitle', 'Join thousands of businesses that trust Punctual Booking for their scheduling needs')}
              </p>
            </div>
            <div className="flex justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                asChild 
                className="font-secondary bg-white hover:bg-white/90 text-primary font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:animate-none"
              >
                <a href="#signup">{t('cta.button', 'Start Your 14-Day Free Trial')}</a>
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