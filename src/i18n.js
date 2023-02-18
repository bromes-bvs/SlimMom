import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationRF from './locales/fr/translation.json';
import translationUK from './locales/uk/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationRF,
  },
  uk: {
    translation: translationUK,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources,
    // debug: true,
    whitelist: ['en', 'fr', 'uk'],
    defaultNS: ['translation'],
  });

export default i18n;
