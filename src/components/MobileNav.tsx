import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';

export function MobileNav() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

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
      const headerOffset = 80; // Height of the header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden relative z-[60]"
          aria-label="Open menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 z-[70]" />
        
        <Dialog.Content className="fixed right-0 top-0 h-full w-[300px] bg-background shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right z-[80]">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b">
              <Link to="/" className="font-primary text-xl" onClick={() => setOpen(false)}>
                PUNCTUAL
              </Link>
              <Dialog.Close asChild>
                <Button variant="ghost" size="icon" aria-label="Close menu">
                  <X className="h-5 w-5" />
                </Button>
              </Dialog.Close>
            </div>

            <nav className="flex-1 p-6">
              <ul className="space-y-4">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                      onClick={(e) => scrollToSection(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="p-6 border-t">
              <div className="flex flex-col gap-3">
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  <Link to="/login">{t('nav.login', 'Log in')}</Link>
                </Button>
                <Button 
                  asChild 
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  <Link to="/register">{t('nav.trial', 'Start Free Trial')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
} 