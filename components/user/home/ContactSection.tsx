"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
    return (
        <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16 reveal-up">
                <h2 className="text-[44px] font-extrabold text-[#111111] mb-6">
                    Get In Touch
                </h2>
                <p className="text-zinc-500 max-w-2xl mx-auto text-[17px] leading-relaxed">
                    Have questions or need help getting started? Our team is here to assist you.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column: Contact Info Cards */}
                <div className="space-y-6">
                    {/* Email Card */}
                    <div className="bg-white p-8 rounded-2xl border border-zinc-200 hover:border-[#0066FF] transition-colors reveal-up group">
                        <div className="w-12 h-12 bg-[#0066FF] rounded-xl flex items-center justify-center mb-6 shadow-md shadow-blue-100 group-hover:scale-110 transition-transform">
                            <Mail size={24} className="text-white" />
                        </div>
                        <h3 className="text-[18px] font-bold text-zinc-900 mb-2">Email Us</h3>
                        <p className="text-zinc-500">support@yourwebsite.com</p>
                    </div>

                    {/* Phone Card */}
                    <div className="bg-white p-8 rounded-2xl border border-zinc-200 hover:border-[#0066FF] transition-colors reveal-up group">
                        <div className="w-12 h-12 bg-[#bfdbfe] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Phone size={24} className="text-[#1e3a8a]" />
                        </div>
                        <h3 className="text-[18px] font-bold text-zinc-900 mb-2">Call Us</h3>
                        <p className="text-zinc-500">+880XXXXXXXXXXX</p>
                    </div>

                    {/* Office Card */}
                    <div className="bg-white p-8 rounded-2xl border border-zinc-200 hover:border-[#0066FF] transition-colors reveal-up group">
                        <div className="w-12 h-12 bg-[#bfdbfe] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <MapPin size={24} className="text-[#1e3a8a]" />
                        </div>
                        <h3 className="text-[18px] font-bold text-zinc-900 mb-2">Office</h3>
                        <p className="text-zinc-500">Available 24/7 Worldwide</p>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="bg-white p-8 lg:p-10 rounded-2xl border border-zinc-200 reveal-up">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-[15px] font-bold text-zinc-700 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your full name"
                                className="w-full px-5 py-3.5 rounded-xl border border-zinc-200 focus:outline-none focus:border-[#0066FF] focus:ring-4 focus:ring-blue-50 transition-all text-zinc-600 placeholder:text-zinc-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-[15px] font-bold text-zinc-700 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="your@email.com"
                                className="w-full px-5 py-3.5 rounded-xl border border-zinc-200 focus:outline-none focus:border-[#0066FF] focus:ring-4 focus:ring-blue-50 transition-all text-zinc-600 placeholder:text-zinc-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-[15px] font-bold text-zinc-700 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                placeholder="Tell us how we can help you..."
                                className="w-full px-5 py-3.5 rounded-xl border border-zinc-200 focus:outline-none focus:border-[#0066FF] focus:ring-4 focus:ring-blue-50 transition-all text-zinc-600 placeholder:text-zinc-400 resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full cursor-pointer bg-[#0066FF] text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-blue-300 transition-all flex items-center justify-center gap-2"
                        >
                            Send Message
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
