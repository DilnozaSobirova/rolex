import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // Import tilni aniqlash uchun
import enTranslation from './en.json';
import uzTranslation from './uz.json';

const resources = {
    en: { translation: enTranslation },
    uz: { translation: uzTranslation }
};
i18n
    .use(LanguageDetector) // LanguageDetector dan foydalanish
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        },
        detection: {
            order: ['localStorage', 'navigator'], // Tildan foydalanish tartibi
            caches: ['localStorage'] // Tanlangan tilni localStorage'ga saqlash
        }
    });

export default i18n;
