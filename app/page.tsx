"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  BarChart3,
  Target,
  Star,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Zap,
  LayoutDashboard,
  Check,
  ChevronDown,
  Quote
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    testimonials: useRef<HTMLDivElement>(null),
    pricing: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     // Hero Entrance
  //     const heroTl = gsap.timeline();
  //     heroTl.from(".hero-text", {
  //       x: -100,
  //       opacity: 0,
  //       duration: 1,
  //       ease: "power4.out",
  //     })
  //       .from(".hero-cards", {
  //         x: 100,
  //         opacity: 0,
  //         duration: 1,
  //         ease: "power4.out",
  //       }, "-=0.8");

  //     // Section to Section Scroll Transitions
  //     const sections = Object.values(sectionRefs);
  //     sections.forEach((section, i) => {
  //       if (section.current) {
  //         // Reveal children on scroll
  //         gsap.from(section.current.querySelectorAll(".reveal-up"), {
  //           scrollTrigger: {
  //             trigger: section.current,
  //             start: "top 80%",
  //             toggleActions: "play none none none",
  //           },
  //           y: 60,
  //           opacity: 0,
  //           duration: 1,
  //           stagger: 0.15,
  //           ease: "power3.out",
  //         });

  //         // Section transition (slight scale or background shift)
  //         if (i > 0) {
  //           gsap.from(section.current, {
  //             scrollTrigger: {
  //               trigger: section.current,
  //               start: "top bottom",
  //               end: "top top",
  //               scrub: 1,
  //             },
  //             backgroundColor: i % 2 === 0 ? "#f8fafc" : "#ffffff",
  //             ease: "none",
  //           });
  //         }
  //       }
  //     });

  //     // Special animation for dashboard cards in hero
  //     gsap.to(".floating-card", {
  //       y: -15,
  //       duration: 2,
  //       repeat: -1,
  //       yoyo: true,
  //       ease: "sine.inOut",
  //       stagger: 0.3
  //     });
  //   }, containerRef);

  //   return () => ctx.revert();
  // }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      {/* Navbar */}
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
            <a href="#home" className="text-[#0066FF]">Home</a>
            <a href="#about" className="hover:text-[#0066FF] transition-colors">About</a>
            <a href="#testimonials" className="hover:text-[#0066FF] transition-colors">Testimonials</a>
            <a href="#pricing" className="hover:text-[#0066FF] transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-[#0066FF] transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-2 text-zinc-600 cursor-pointer hover:text-zinc-900 transition-colors">
              <div className="w-6 h-4 bg-[#E8F3EF] rounded flex items-center justify-center overflow-hidden">
                <span className="text-[10px] scale-75">🇸🇦</span>
              </div>
              <span className="text-sm font-semibold">Ar</span>
              <ChevronDown size={14} strokeWidth={3} />
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

      <main>
        {/* Hero Section */}
        <section id="home" ref={sectionRefs.hero} className="relative pt-32 pb-20 lg:pt-44 lg:pb-40 overflow-hidden">
          {/* Full Width Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/hero-bg.png"
              alt="Hero Background"
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>

          {/* Content Overlay */}
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Text Content */}
              <div className="hero-text">
                <h1 className="text-[42px] lg:text-[48px] font-extrabold text-[#1A1A1A] leading-[1.15] mb-6 text-wrap">
                  Turn Customer Reviews into Business Growth
                </h1>
                <p className="text-[16px] text-zinc-600 mb-10 max-w-[480px] leading-[1.65]">
                  AI-powered insights from your Google reviews. Understand your customers, outperform competitors, and make data-driven improvements.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-[#0066FF] text-white px-8 py-3.5 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 text-[15px]">
                    Start Free Trial
                  </button>
                  <button className="bg-white text-zinc-700 border-2 border-zinc-200 px-8 py-3.5 rounded-lg font-bold hover:bg-zinc-50 transition-all text-[15px]">
                    Request Demo
                  </button>
                </div>
              </div>

              {/* Right Column - Empty space for the background image to show through */}
              <div className="hero-cards relative hidden lg:block h-[500px]">
                {/* Background image shows the dashboard cards */}
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" ref={sectionRefs.about} className="py-28 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center mb-16 reveal-up">
            <h2 className="text-[44px] font-extrabold text-[#111111] mb-6">About Us</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-[17px] leading-relaxed">
              Turn customer feedback into clear, actionable insights with AI,<br />
              helping you track performance, uncover trends, and grow with confidence.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {[
              { id: 'ai', icon: <Zap size={28} className="text-[#0066FF]" />, title: 'AI-Powered Insights', desc: 'Automatically analyze sentiment, themes, and satisfaction from every review.' },
              { id: 'reports', icon: <BarChart3 size={28} className="text-[#0066FF]" />, title: 'Monthly Reports', desc: 'Comprehensive business intelligence reports delivered automatically.' },
              { id: 'comp', icon: <Target size={28} className="text-[#0066FF]" />, title: 'Competitor Analysis', desc: 'Benchmark your performance against competitors and find opportunities.' },
              { id: 'recom', icon: <CheckCircle2 size={28} className="text-[#0066FF]" />, title: 'Actionable Recommendations', desc: 'Get specific improvement suggestions based on customer feedback.' }
            ].map((card, i) => (
              <div key={card.id} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group reveal-up">
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 transition-colors group-hover:bg-blue-100">
                  {card.icon}
                </div>
                <h3 className="text-[17px] font-extrabold mb-3 text-gray-900">{card.title}</h3>
                <p className="text-zinc-500 text-[14px] leading-[1.6]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50/50 py-20">
            <div className="max-w-7xl mx-auto px-6 text-center mb-16 reveal-up">
              <h2 className="text-[38px] font-extrabold text-[#111111]">Everything You Need</h2>
            </div>

            <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
              {[
                { title: "Sentiment Analysis", desc: "Track positive, neutral, and negative sentiment trends" },
                { title: "Theme Detection", desc: "Identify recurring issues and strengths automatically" },
                { title: "Multi-Location Support", desc: "Manage and compare multiple business locations" },
                { title: "Response Rate Tracking", desc: "Monitor which reviews have been replied to" },
                { title: "Custom Alerts", desc: "Get notified of rating drops or negative review spikes" },
                { title: "Export Reports", desc: "Download PDF and Excel reports anytime" }
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4 items-start reveal-up">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#10B981] flex items-center justify-center">
                    <Check size={14} className="text-[#10B981]" strokeWidth={3} />
                  </div>
                  <div className="text-left">
                    <h4 className="text-[16px] font-bold mb-1 text-zinc-900">{feature.title}</h4>
                    <p className="text-zinc-500 text-[14px]">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" ref={sectionRefs.testimonials} className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center mb-20 reveal-up">
            <h2 className="text-[44px] font-extrabold text-[#111111] mb-6">Testimonials</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-[17px] leading-relaxed">
              See how businesses use our platform to turn customer feedback into smarter decisions.<br />
              Real results from real teams who value data-driven growth.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "John Doe", role: "Operations Manager", company: "Retail Brand", content: "This platform helped us quickly spot customer issues and improve our ratings within weeks." },
              { name: "Sarah Smith", role: "Marketing Lead", company: "Hospitality Company", content: "The AI insights saved us hours of manual review work and gave us clear action steps." },
              { name: "Mike Johnson", role: "Founder", company: "Multi-Location Business", content: "Easy to use, powerful reports, and incredibly helpful for tracking sentiment across locations." }
            ].map((t, idx) => (
              <div key={idx} className="relative bg-white pt-14 pb-10 px-10 rounded-[30px] border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500 reveal-up group">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-[#0066FF] rounded-full flex items-center justify-center text-white shadow-xl shadow-blue-200">
                  <Quote size={24} fill="white" />
                </div>
                <div className="flex gap-1 mb-6 justify-start">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#FACC15" className="text-[#FACC15]" />)}
                </div>
                <p className="text-zinc-600 text-[16px] leading-[1.6] mb-10 min-h-[80px]">
                  {t.content}
                </p>
                <div className="pt-8 border-t border-zinc-200 flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-100 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-[#E5E5E5] flex items-center justify-center text-zinc-400 font-bold">
                      {t.name[0]}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-extrabold text-[15px]">{t.name}</h5>
                    <p className="text-zinc-400 text-[12px]">{t.role}</p>
                    <p className="text-zinc-400 text-[12px]">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" ref={sectionRefs.pricing} className="py-28 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-6 text-center mb-20 reveal-up">
            <h2 className="text-[44px] font-extrabold text-[#111111]">Simple, Transparent Pricing</h2>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Starter */}
            <div className="bg-white p-10 rounded-[30px] border border-zinc-200 shadow-sm hover:shadow-lg transition-all reveal-up">
              <h3 className="text-[20px] font-extrabold mb-2">Starter</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-[48px] font-extrabold">$49</span>
                <span className="text-zinc-400 font-medium text-[16px]">/mo</span>
              </div>
              <ul className="space-y-4 mb-10">
                {['1 Location', 'Up to 500 reviews/mo', 'Monthly reports', 'Basic AI insights'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[14px] text-zinc-600 font-medium">
                    <Star size={16} className="text-[#0066FF]" /> {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3.5 px-6 rounded-xl border-2 border-zinc-200 text-[#111111] font-bold hover:bg-zinc-50 transition-all text-[14px]">
                Get Started
              </button>
            </div>

            {/* Professional - Featured */}
            <div className="bg-[#0066FF] p-10 rounded-[30px] shadow-2xl shadow-blue-200 lg:scale-105 z-10 relative overflow-hidden reveal-up">
              <div className="absolute top-4 left-0 w-full text-center">
                <span className="text-[10px] text-white/80 font-bold uppercase tracking-[2px]">Most Popular</span>
              </div>
              <h3 className="text-[20px] font-extrabold text-white mt-6 mb-2">Professional</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-[48px] font-extrabold text-white">$149</span>
                <span className="text-white/70 font-medium text-[16px]">/mo</span>
              </div>
              <ul className="space-y-4 mb-10">
                {[
                  'Up to 5 Locations',
                  'Unlimited reviews',
                  'Weekly + Monthly reports',
                  'Advanced AI insights',
                  'Competitor analysis'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[14px] text-white font-medium">
                    <Star size={16} fill="white" className="text-white" /> {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3.5 px-6 rounded-xl bg-white text-[#0066FF] font-extrabold hover:bg-blue-50 transition-all text-[14px]">
                Get Started
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-white p-10 rounded-[30px] border border-zinc-200 shadow-sm hover:shadow-lg transition-all reveal-up">
              <h3 className="text-[20px] font-extrabold mb-2">Enterprise</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-[48px] font-extrabold">Custom</span>
              </div>
              <ul className="space-y-4 mb-10">
                {[
                  'Unlimited Locations',
                  'Unlimited reviews',
                  'Custom reporting',
                  'API access',
                  'Dedicated support'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[14px] text-zinc-600 font-medium">
                    <Star size={16} className="text-[#0066FF]" /> {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3.5 px-6 rounded-xl border-2 border-zinc-200 text-[#111111] font-bold hover:bg-zinc-50 transition-all text-[14px]">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" ref={sectionRefs.contact} className="py-28 bg-white">

        </section>
      </main>

      <footer className="bg-[#050510] text-white pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-16 mb-20">
            <div className="max-w-sm">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-9 h-9 bg-[#0066FF] rounded-lg flex items-center justify-center p-1.5 shadow-md shadow-blue-100">
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

          <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6 text-zinc-600 text-[12px] font-bold">
            <p>&copy; 2026 ReviewIQ. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-zinc-400">Terms</a>
              <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
