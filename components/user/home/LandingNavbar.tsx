"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function LandingNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const [language, setLanguage] = useState<'en' | 'ar'>('en');

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);

    const handleLanguageChange = (lang: 'en' | 'ar') => {
        setLanguage(lang);
        setIsLangMenuOpen(false);
        // Here you would typically trigger your i18n change
    };

    return (
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-zinc-100 px-6 py-3">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-[#0066FF] rounded-lg flex items-center justify-center p-1.5 shadow-md shadow-blue-100">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 18V9M4 18H7M4 18C3.44772 18 3 17.5523 3 17V10C3 9.44772 3.44772 9 4 9H7M20 18V7M20 18H17M20 18C20.5523 18 21 17.5523 21 17V8C21 7.44772 20.5523 7 20 7H17M12 18V4M12 18H9M12 18C11.4477 18 11 17.5523 11 17V5C11 4.44772 11.4477 4 12 4H9M12 18H15M12 18C12.5523 18 13 17.5523 13 17V5C13 4.44772 12.5523 4 12 4H15" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span className="text-[22px] font-bold tracking-tight text-zinc-900">ReviewIQ</span>
                </div>

                <div className="hidden lg:flex items-center gap-10 text-[15px] font-medium text-zinc-600">
                    <a href="#" onClick={(e) => scrollToSection(e, 'home')} className="text-[#0066FF]">Home</a>
                    <a href="#" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-[#0066FF] transition-colors">About</a>
                    <a href="#" onClick={(e) => scrollToSection(e, 'testimonials')} className="hover:text-[#0066FF] transition-colors">Testimonials</a>
                    <a href="#" onClick={(e) => scrollToSection(e, 'pricing')} className="hover:text-[#0066FF] transition-colors">Pricing</a>
                    <a href="#" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-[#0066FF] transition-colors">Contact</a>
                </div>

                <div className="flex items-center gap-6">
                    <div className="relative">
                        <button
                            onClick={toggleLangMenu}
                            className="hidden sm:flex items-center gap-2 text-zinc-600 cursor-pointer hover:text-zinc-900 transition-colors"
                        >
                            <div className="w-6 h-4 bg-[#E8F3EF] rounded flex items-center justify-center overflow-hidden">
                                <span className="text-[10px] scale-75">{language === 'en' ? '🇺🇸' : '🇸🇦'}</span>
                            </div>
                            <span className="text-sm font-semibold">{language === 'en' ? 'En' : 'Ar'}</span>
                            <ChevronDown size={14} strokeWidth={3} className={`transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Language Dropdown */}
                        {isLangMenuOpen && (
                            <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-xl border border-zinc-100 shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                <button
                                    onClick={() => handleLanguageChange('en')}
                                    className={`w-full px-4 py-2 text-left text-sm font-medium hover:bg-zinc-50 flex items-center gap-3 ${language === 'en' ? 'text-[#0066FF] bg-blue-50/50' : 'text-zinc-600'}`}
                                >
                                    <span className="text-lg">🇺🇸</span> English
                                </button>
                                <button
                                    onClick={() => handleLanguageChange('ar')}
                                    className={`w-full px-4 py-2 text-left text-sm font-medium hover:bg-zinc-50 flex items-center gap-3 ${language === 'ar' ? 'text-[#0066FF] bg-blue-50/50' : 'text-zinc-600'}`}
                                >
                                    <span className="text-lg">🇸🇦</span> Arabic
                                </button>
                            </div>
                        )}
                    </div>

                    <button className="hidden sm:block text-[#0066FF] border border-[#0066FF] px-6 py-2 rounded-lg text-sm font-bold hover:bg-blue-50 transition-all">
                        Login
                    </button>
                    <button className="bg-[#0066FF] text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
                        Start Free Trial
                    </button>
                </div>
            </div>
        </nav>
    );
}
