import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'pt-PT', name: 'Português (Portugal)' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' },
  { code: 'de', name: 'Deutsch' },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-2 font-secondary text-sm text-muted-foreground hover:text-foreground"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe className="h-4 w-4" />
        <span>{currentLanguage.name}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute bottom-full mb-2 w-48 rounded-md border bg-background shadow-md z-50">
          <ul
            className="py-1"
            role="listbox"
            aria-labelledby="language-selector"
            aria-activedescendant={currentLanguage.code}
          >
            {languages.map((language) => (
              <li
                key={language.code}
                className={`px-3 py-2 cursor-pointer font-secondary text-sm hover:bg-accent hover:text-accent-foreground ${
                  language.code === i18n.language ? 'bg-accent/50' : ''
                }`}
                role="option"
                aria-selected={language.code === i18n.language}
                onClick={() => changeLanguage(language.code)}
              >
                {language.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
} 