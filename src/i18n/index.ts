import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import enTranslation from './locales/en';
import ptPTTranslation from './locales/pt-PT';
import frTranslation from './locales/fr';
import esTranslation from './locales/es';
import deTranslation from './locales/de';

// Configure i18next
i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      'pt-PT': {
        translation: ptPTTranslation
      },
      fr: {
        translation: frTranslation
      },
      es: {
        translation: esTranslation
      },
      de: {
        translation: deTranslation
      }
    },
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
    
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n; 