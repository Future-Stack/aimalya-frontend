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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance
      const heroTl = gsap.timeline();
      heroTl.from(".hero-text", {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      })
        .from(".hero-cards", {
          x: 100,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        }, "-=0.8");

      // Section to Section Scroll Transitions
      const sections = Object.values(sectionRefs);
      sections.forEach((section, i) => {
        if (section.current) {
          // Reveal children on scroll
          gsap.from(section.current.querySelectorAll(".reveal-up"), {
            scrollTrigger: {
              trigger: section.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            y: 60,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
          });

          // Section transition (slight scale or background shift)
          if (i > 0) {
            gsap.from(section.current, {
              scrollTrigger: {
                trigger: section.current,
                start: "top bottom",
                end: "top top",
                scrub: 1,
              },
              backgroundColor: i % 2 === 0 ? "#f8fafc" : "#ffffff",
              ease: "none",
            });
          }
        }
      });

      // Special animation for dashboard cards in hero
      gsap.to(".floating-card", {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

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
          {/* Diagonal Background Overlay matching image */}
          <div className="absolute top-0 right-0 w-[55%] h-full bg-[#33E5EA] -z-10 skew-x-[-15deg] origin-top translate-x-32 hidden lg:block"></div>
          <div className="absolute top-0 right-0 w-[45%] h-full bg-[#35CBF9] -z-20 skew-x-[-15deg] origin-top translate-x-40 hidden lg:block"></div>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="hero-text">
              <h1 className="text-[52px] lg:text-[68px] font-extrabold text-[#1A1A1A] leading-[1] mb-8">
                Turn Customer Reviews into <span className="text-[#1A1A1A]">Business Growth</span>
              </h1>
              <p className="text-[17px] text-zinc-500 mb-11 max-w-[500px] leading-[1.6]">
                AI-powered insights from your Google reviews. Understand your customers, outperform competitors, and make data-driven improvements.
              </p>
              <div className="flex flex-wrap gap-5">
                <button className="bg-[#0066FF] text-white px-9 py-4 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 text-[15px]">
                  Start Free Trial
                </button>
                <button className="bg-white text-zinc-800 border-2 border-zinc-100 px-9 py-4 rounded-lg font-bold hover:bg-zinc-50 transition-all text-[15px]">
                  Request Demo
                </button>
              </div>
            </div>

            <div className="hero-cards relative">
              <div className="relative z-10 grid grid-cols-2 gap-6 scale-110 lg:translate-x-12 translate-y-8">
                {/* Simulated Dashboard Cards */}
                <div className="bg-white p-5 rounded-2xl shadow-2xl floating-card">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[12px] font-bold text-zinc-400">Statistic</span>
                    <span className="text-zinc-300">...</span>
                  </div>
                  <div className="h-24 flex items-end gap-2 px-2">
                    {[30, 60, 45, 80, 50, 70, 40].map((h, i) => (
                      <div key={i} className={`flex-1 rounded-t-sm ${i === 3 ? 'bg-cyan-400' : 'bg-rose-400 opacity-80'}`} style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl shadow-2xl floating-card translate-y-12">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[13px] font-bold text-zinc-800">$4.658</span>
                  </div>
                  <span className="text-[10px] text-zinc-400">Earned This Month</span>
                  <div className="mt-4 flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-3xl shadow-2xl floating-card col-span-2 -translate-y-4">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="text-[14px] font-bold">Global Statistic</h4>
                      <p className="text-[10px] text-zinc-400">Sale (75%)</p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-32 h-32 rounded-full border-[15px] border-zinc-50 relative flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border-[15px] border-t-purple-400 border-r-rose-400 border-b-amber-400 border-l-transparent rotate-45"></div>
                      <span className="text-[14px] font-bold">75%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" ref={sectionRefs.about} className="py-28 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center mb-20 reveal-up">
            <h2 className="text-[44px] font-extrabold text-[#111111] mb-6">About Us</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-[17px] leading-relaxed">
              Turn customer feedback into clear, actionable insights with AI, helping you track performance, uncover trends, and grow with confidence.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            {[
              { id: 'ai', icon: <Zap size={28} className="text-[#0066FF]" />, title: 'AI-Powered Insights', desc: 'Automatically analyze sentiment, themes, and satisfaction from every review.' },
              { id: 'reports', icon: <BarChart3 size={28} className="text-[#0066FF]" />, title: 'Monthly Reports', desc: 'Comprehensive business intelligence reports delivered automatically.' },
              { id: 'comp', icon: <Target size={28} className="text-[#0066FF]" />, title: 'Competitor Analysis', desc: 'Benchmark your performance against competitors and find opportunities.' },
              { id: 'recom', icon: <CheckCircle2 size={28} className="text-[#0066FF]" />, title: 'Actionable Recommendations', desc: 'Get specific improvement suggestions based on customer feedback.' }
            ].map((card, i) => (
              <div key={card.id} className="bg-zinc-50/50 p-10 rounded-3xl border border-transparent hover:bg-white hover:border-zinc-100 hover:shadow-xl hover:shadow-zinc-100 transition-all duration-500 group reveal-up">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-[19px] font-extrabold mb-4 group-hover:text-[#0066FF] transition-colors">{card.title}</h3>
                <p className="text-zinc-500 text-[14.5px] leading-[1.6]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-zinc-100/30 py-24">
            <div className="max-w-7xl mx-auto px-6 text-center mb-20 reveal-up">
              <h2 className="text-[38px] font-extrabold text-[#111111]">Everything You Need</h2>
            </div>

            <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
              {[
                { title: "Sentiment Analysis", desc: "Track positive, neutral, and negative sentiment trends" },
                { title: "Theme Detection", desc: "Identify recurring issues and strengths automatically" },
                { title: "Multi-Location Support", desc: "Manage and compare multiple business locations" },
                { title: "Response Rate Tracking", desc: "Monitor which reviews have been replied to" },
                { title: "Custom Alerts", desc: "Get notified of rating drops or negative review spikes" },
                { title: "Export Reports", desc: "Download PDF and Excel reports anytime" }
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-5 items-start reveal-up">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#10B981] flex items-center justify-center">
                    <Check size={14} className="text-[#10B981]" strokeWidth={4} />
                  </div>
                  <div className="text-left">
                    <h4 className="text-[17px] font-bold mb-1.5 text-zinc-900">{feature.title}</h4>
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
              <div key={idx} className="relative bg-white pt-14 pb-10 px-10 rounded-[40px] border border-zinc-100 shadow-sm hover:shadow-2xl transition-all duration-500 reveal-up group">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-[#0066FF] rounded-full flex items-center justify-center text-white shadow-xl shadow-blue-200">
                  <Quote size={24} fill="white" />
                </div>
                <div className="flex gap-1 mb-6 justify-start">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#FACC15" className="text-[#FACC15]" />)}
                </div>
                <p className="text-zinc-600 text-[16px] leading-[1.6] mb-10 min-h-[80px]">
                  {t.content}
                </p>
                <div className="pt-8 border-t border-[#0066FF]/20 flex items-center gap-4">
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

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
            {/* Starter */}
            <div className="bg-white p-12 rounded-[40px] border border-zinc-100 shadow-sm hover:shadow-xl transition-all reveal-up">
              <h3 className="text-[22px] font-extrabold mb-8">Starter</h3>
              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-[52px] font-extrabold">$49</span>
                <span className="text-zinc-400 font-bold text-[18px]">/mo</span>
              </div>
              <ul className="space-y-5 mb-12">
                {['1 Location', 'Up to 500 reviews/mo', 'Monthly reports', 'Basic AI insights'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[15px] text-zinc-600 font-medium">
                    <Star size={18} className="text-[#0066FF]" /> {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 px-6 rounded-xl border-2 border-zinc-100 text-[#111111] font-bold hover:bg-zinc-50 transition-all text-[15px]">
                Get Started
              </button>
            </div>

            {/* Professional */}
            <div className="bg-[#0066FF] p-12 rounded-[40px] shadow-2xl shadow-blue-200 lg:scale-[1.08] z-10 relative overflow-hidden reveal-up">
              <div className="absolute top-6 left-0 w-full text-center">
                <span className="text-[10px] text-white/70 font-bold uppercase tracking-[2px]">Most Popular</span>
              </div>
              <h3 className="text-[22px] font-extrabold mb-8 text-white mt-4">Professional</h3>
              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-[52px] font-extrabold text-white">$149</span>
                <span className="text-white/60 font-bold text-[18px]">/mo</span>
              </div>
              <ul className="space-y-5 mb-12">
                {[
                  'Up to 5 Locations',
                  'Unlimited reviews',
                  'Weekly + Monthly reports',
                  'Advanced AI insights',
                  'Competitor analysis'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[15px] text-white font-medium">
                    <Star size={18} fill="white" className="text-white" /> {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 px-6 rounded-xl bg-white text-[#0066FF] font-extrabold hover:bg-blue-50 transition-all text-[15px]">
                Get Started
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-white p-12 rounded-[40px] border border-zinc-100 shadow-sm hover:shadow-xl transition-all reveal-up">
              <h3 className="text-[22px] font-extrabold mb-8">Enterprise</h3>
              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-[52px] font-extrabold">Custom</span>
              </div>
              <ul className="space-y-5 mb-12">
                {[
                  'Unlimited Locations',
                  'Unlimited reviews',
                  'Custom reporting',
                  'API access',
                  'Dedicated support'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[15px] text-zinc-600 font-medium">
                    <Star size={18} className="text-[#0066FF]" /> {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 px-6 rounded-xl border-2 border-zinc-100 text-[#111111] font-bold hover:bg-zinc-50 transition-all text-[15px]">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" ref={sectionRefs.contact} className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center mb-20 reveal-up">
            <h2 className="text-[52px] font-extrabold text-[#111111] mb-6">Get In Touch</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-[17px]">
              Have questions or need help getting started? Our team is here to assist you.
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-6 reveal-up">
              {[
                { icon: <Mail className="text-white" size={24} />, title: 'Email Us', text: 'support@yourwebsite.com', color: 'bg-blue-600' },
                { icon: <Phone className="text-zinc-600" size={24} />, title: 'Call Us', text: '+880XXXXXXXXXX', color: 'bg-blue-100' },
                { icon: <MapPin className="text-zinc-600" size={24} />, title: 'Office', text: 'Available 24/7 Worldwide', color: 'bg-blue-100' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-8 p-10 bg-white border border-zinc-100 rounded-[30px] shadow-sm hover:shadow-md transition-all">
                  <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[17px] mb-1">{item.title}</h4>
                    <p className="text-zinc-500 text-[14px]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-3 bg-white p-12 rounded-[40px] border border-zinc-100 shadow-sm reveal-up">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                  <div className="space-y-3">
                    <label className="text-[15px] font-extrabold text-zinc-800">Name</label>
                    <input type="text" placeholder="Your full name" className="w-full px-6 py-4 rounded-xl border border-zinc-100 bg-[#FAFAFA] focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[15px] font-extrabold text-zinc-800">Email</label>
                    <input type="email" placeholder="your@email.com" className="w-full px-6 py-4 rounded-xl border border-zinc-100 bg-[#FAFAFA] focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[15px] font-extrabold text-zinc-800">Message</label>
                  <textarea rows={5} placeholder="Tell us how we can help you..." className="w-full px-6 py-4 rounded-xl border border-zinc-100 bg-[#FAFAFA] focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"></textarea>
                </div>
                <div>
                  <button className="bg-[#0066FF] text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-3 w-full">
                    Send Message
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
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
