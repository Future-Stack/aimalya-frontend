"use client";

import { Zap, BarChart3, Target, CheckCircle2, Check } from "lucide-react";
import { forwardRef } from "react";

const AboutSection = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <section id="about" ref={ref} className="pt-28 bg-white overflow-hidden">
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
    );
});

AboutSection.displayName = "AboutSection";
export default AboutSection;
