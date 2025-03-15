import { useState, useEffect } from 'react';
import { Menu, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from './ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  const mainNavItems: Array<{ title: string; href: string; children?: Array<{ title: string; href: string; description: string; icon: React.ReactNode }> }> = [
    { title: t('nav.features', 'Features'), href: '#features', children: [
      { title: t('features.onlineBooking.title', 'Online Booking'), href: '#online-booking', description: t('features.onlineBooking.description', 'Allow clients to book appointments 24/7'), icon: <Calendar className="h-4 w-4" /> },
      { title: t('features.reminders.title', 'Automated Reminders'), href: '#reminders', description: t('features.reminders.description', 'Reduce no-shows with SMS and email reminders'), icon: <Calendar className="h-4 w-4" /> },
      { title: t('features.team.title', 'Team Management'), href: '#team', description: t('features.team.description', 'Manage staff schedules and availability'), icon: <Calendar className="h-4 w-4" /> },
      { title: t('features.analytics.title', 'Analytics'), href: '#analytics', description: t('features.analytics.description', 'Track performance with detailed reports'), icon: <Calendar className="h-4 w-4" /> },
      { title: t('features.customization.title', 'Customization'), href: '#customization', description: t('features.customization.description', 'Tailor the platform to your business needs'), icon: <Calendar className="h-4 w-4" /> },
    ] },
    { title: t('nav.pricing', 'Pricing'), href: '#pricing' },
    { title: t('nav.about', 'About'), href: '#about' },
    { title: t('nav.blog', 'Blog'), href: '#' },
  ];

  // Add scroll event listener with proper cleanup
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check
    handleScroll();

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-200',
        isScrolled
          ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b'
          : 'bg-transparent'
      )}
    >
      <div className="container flex h-16 items-center justify-between py-4 mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center space-x-2">
            <Calendar className="h-6 w-6 text-primary" />
            <span className="font-primary text-xl tracking-tight">PUNCTUAL</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center flex-1">
          <NavigationMenu>
            <NavigationMenuList>
              {mainNavItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger className="font-secondary text-sm">{item.title}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.children.map((child) => (
                            <li key={child.title}>
                              <NavigationMenuLink
                                asChild
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <a href={child.href}>
                                  <div className="flex items-center gap-2">
                                    {child.icon}
                                    <div className="font-primary text-sm leading-none">
                                      {child.title}
                                    </div>
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground font-secondary mt-2">
                                    {child.description}
                                  </p>
                                </a>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className={cn(navigationMenuTriggerStyle(), "font-secondary text-sm")}
                    >
                      {item.title}
                    </a>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#login" className="font-secondary text-sm">
            {t('nav.login', 'Log in')}
          </a>
          <Button 
            asChild 
            size="lg"
            className="font-secondary bg-primary hover:bg-primary/90 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a href="#signup">{t('nav.startFreeTrial', 'Start Free Trial')}</a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 py-6">
                <a href="/" className="flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-primary" />
                  <span className="font-primary text-xl tracking-tight">PUNCTUAL</span>
                </a>
                <nav className="flex flex-col gap-4">
                  {mainNavItems.map((item) => (
                    <div key={item.title} className="flex flex-col gap-2">
                      <a
                        href={item.href}
                        className="text-lg font-secondary hover:text-primary"
                      >
                        {item.title}
                      </a>
                      {item.children && (
                        <div className="ml-4 flex flex-col gap-2 text-sm">
                          {item.children.map((child) => (
                            <a
                              key={child.title}
                              href={child.href}
                              className="flex items-center gap-2 hover:text-primary font-secondary"
                            >
                              {child.icon}
                              <span>{child.title}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
                <div className="flex flex-col gap-2">
                  <a href="#login" className="text-sm font-secondary hover:text-primary">
                    {t('nav.login', 'Log in')}
                  </a>
                  <Button 
                    asChild 
                    size="lg"
                    className="w-full font-secondary bg-primary hover:bg-primary/90 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none"
                  >
                    <a href="#signup">{t('nav.startFreeTrial', 'Start Free Trial')}</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
} 