// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Sample translations
const resources = {
    en: {
        translation: {
            welcome: "Welcome",
            // ...other translations
        },
    },
    fr: {
        translation: {
            welcome: "Bienvenue",
            // ...other translations
        },
    },
    // Add other languages here
};

i18n
    .use(initReactI18next) // Passes i18n down to react-i18next
    .init({
        resources,
        lng: 'en', // Default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // React already escapes by default
        },
    });

export default i18n;
