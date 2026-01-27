"use client";

import { Mail, Phone, MapPin, Twitter, Github, Linkedin, Instagram } from "lucide-react";

export default function LandingFooter() {
    return (
        <footer className="bg-[#050510] text-white pt-24 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between gap-16 mb-20">
                    <div className="max-w-sm">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="w-9 h-9 bg-[#0066FF] rounded-lg flex items-center justify-center p-1.5 shadow-lg shadow-black">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 18V9M4 18H7M4 18C3.44772 18 3 17.5523 3 17V10C3 9.44772 3.44772 9 4 9H7M20 18V7M20 18H17M20 18C20.5523 18 21 17.5523 21 17V8C21 7.44772 20.5523 7 20 7H17M12 18V4M12 18H9M12 18C11.4477 18 11 17.5523 11 17V5C11 4.44772 11.4477 4 12 4H9M12 18H15M12 18C12.5523 18 13 17.5523 13 17V5C13 4.44772 12.5523 4 12 4H15" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-[22px] font-bold tracking-tight">ReviewIQ</span>
                        </div>
                        <p className="text-zinc-500 text-[15px] mb-10 leading-relaxed">
                            The complete platform for analyzing reviews and customer feedback. Simple, fast, and helpful.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center hover:bg-[#0066FF] transition-all"><Icon size={18} /></a>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-20">
                        <div>
                            <h5 className="font-extrabold text-[17px] mb-8">Quick Links</h5>
                            <ul className="space-y-4 text-zinc-500 text-[15px]">
                                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-extrabold text-[17px] mb-8">Contact</h5>
                            <ul className="space-y-4 text-zinc-500 text-[15px]">
                                <li className="flex gap-3"><MapPin size={18} className="text-[#0066FF] flex-shrink-0" /> Dublin, Ireland</li>
                                <li className="flex gap-3"><Phone size={18} className="text-[#0066FF] flex-shrink-0" /> +44 1234 567 890</li>
                                <li className="flex gap-3"><Mail size={18} className="text-[#0066FF] flex-shrink-0" /> info@company.com</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6 text-zinc-600 text-[12px] font-bold">
                    <p>&copy; 2026 ReviewIQ. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-zinc-400">Terms</a>
                        <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
