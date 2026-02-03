"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function LandingNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const [language, setLanguage] = useState<'en' | 'ar'>('en');

    const [activeSection, setActiveSection] = useState('home');

    // Scrollspy effect
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-50% 0px -50% 0px' // Check center of viewport
            }
        );

        const sections = ['home', 'about', 'testimonials', 'pricing', 'contact'];
        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);

    const handleLanguageChange = (lang: 'en' | 'ar') => {
        setLanguage(lang);
        setIsLangMenuOpen(false);
        // Here you would typically trigger your i18n change
    };

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'testimonials', label: 'Testimonials' },
        { id: 'pricing', label: 'Pricing' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-zinc-100 px-6 py-3">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="Logo" width={160} height={60} />
                </div>

                <div className="hidden lg:flex items-center gap-10 text-[15px] font-medium text-zinc-600">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={(e) => scrollToSection(e, link.id)}
                            className={`transition-colors ${activeSection === link.id ? 'text-[#0066FF] font-bold' : 'hover:text-[#0066FF]'}`}
                        >
                            {link.label}
                        </a>
                    ))}
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

                    <Link href="/login" className="hidden sm:block text-[#0066FF] border border-[#0066FF] px-6 py-2 rounded-lg text-sm font-bold hover:bg-blue-50 transition-all cursor-pointer">
                        Login
                    </Link>
                    <Link href="/signup" className="bg-[#0066FF] text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 cursor-pointer">
                        Start Free Trial
                    </Link>
                </div>
            </div>
        </nav>
    );
}
