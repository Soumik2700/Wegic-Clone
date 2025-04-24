import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
    { name: 'English', code: 'en' },
    { name: 'Français', code: 'fr' },
    // Add other languages here
];

function LanguageDropdown() {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    const currentLang = languages.find((lang) => lang.code === i18n.language) || languages[0];

    const handleLanguageChange = (langCode) => {
        i18n.changeLanguage(langCode);
        setOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setOpen(!open)}
                className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-white bg-[#222] rounded-full hover:bg-[#333] transition"
            >
                🌐 {currentLang.name}
                <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {open && (
                <div className="absolute z-10 right-0 mt-2 w-40 origin-top-right rounded-xl bg-[#111] shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`w-full text-left px-4 py-2 text-sm text-white hover:bg-[#222] ${currentLang.code === lang.code ? 'bg-[#222]' : ''
                                }`}
                        >
                            {lang.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default LanguageDropdown;
