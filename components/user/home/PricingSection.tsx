"use client";

import { Star } from "lucide-react";
import { forwardRef } from "react";

const PricingSection = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <section id="pricing" ref={ref} className="py-28 bg-[#f8fafc]">
            <div className="max-w-7xl mx-auto px-6 text-center mb-20 reveal-up">
                <h2 className="text-[44px] font-extrabold text-[#111111]">Simple, Transparent Pricing</h2>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Starter */}
                <div className="gsap-pricing-card bg-white p-10 rounded-[30px] border border-zinc-200 shadow-sm hover:shadow-lg transition-all reveal-up">
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
                    <button className="w-full cursor-pointer py-3.5 px-6 rounded-xl border-2 border-zinc-200 text-[#111111] font-bold hover:bg-zinc-50 transition-all text-[14px]">
                        Get Started
                    </button>
                </div>

                {/* Professional - Featured */}
                <div className="gsap-pricing-card bg-[#0066FF] p-10 rounded-[30px] shadow-2xl shadow-blue-200 lg:scale-105 z-10 relative overflow-hidden reveal-up">
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
                    <button className="w-full cursor-pointer py-3.5 px-6 rounded-xl bg-white text-[#0066FF] font-extrabold hover:bg-blue-50 transition-all text-[14px]">
                        Get Started
                    </button>
                </div>

                {/* Enterprise */}
                <div className="gsap-pricing-card bg-white p-10 rounded-[30px] border border-zinc-200 shadow-sm hover:shadow-lg transition-all reveal-up">
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
                    <button className="w-full cursor-pointer py-3.5 px-6 rounded-xl border-2 border-zinc-200 text-[#111111] font-bold hover:bg-zinc-50 transition-all text-[14px]">
                        Contact Sales
                    </button>
                </div>
            </div>
        </section>
    );
});

PricingSection.displayName = "PricingSection";
export default PricingSection;
