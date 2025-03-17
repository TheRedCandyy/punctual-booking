import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MobileNav } from './MobileNav';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const { t } = useTranslation();

  const menuItems = [
    { label: t('nav.features', 'Features'), href: '#features' },
    { label: t('nav.pricing', 'Pricing'), href: '#pricing' },
    { label: t('nav.about', 'About'), href: '#about' },
    { label: t('nav.blog', 'Blog'), href: '#blog' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-[50] w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center px-4 mx-auto">
        <div className="flex gap-6 md:gap-10">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-primary text-xl font-bold tracking-wide">PUNCTUAL</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
                onClick={(e) => scrollToSection(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              asChild 
              variant="ghost" 
              className="text-foreground/60 hover:text-foreground hover:bg-transparent"
            >
              <Link to="/login">{t('nav.login', 'Log in')}</Link>
            </Button>
            <Button 
              asChild
            >
              <Link to="/register">{t('nav.trial', 'Start Free Trial')}</Link>
            </Button>
          </nav>
          <MobileNav />
        </div>
      </div>
    </header>
  );
} 