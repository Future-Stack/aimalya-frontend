"use client";

import { Star, Loader2 } from "lucide-react";
import { forwardRef, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import gsap from "gsap";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface PricingSectionProps {
    isDashboard?: boolean;
}

const PricingSection = forwardRef<HTMLDivElement, PricingSectionProps>(({ isDashboard }, ref) => {
    const router = useRouter();
    const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

    const handlePlanClick = (planName: string) => {
        setLoadingPlan(planName);

        // Show toast
        toast.error("Please login to purchase this plan", {
            duration: 3000,
            position: "top-center",
            style: {
                borderRadius: '12px',
                background: '#1a1a1a',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '14px',
                zIndex: 9999,
            },
        });

        // Start Page Exit Animation
        const mainElement = document.querySelector('main');
        const navbarElement = document.querySelector('nav');

        if (mainElement) {
            gsap.to([mainElement, navbarElement].filter(Boolean), {
                opacity: 0,
                y: -30,
                duration: 0.8,
                ease: "power2.inOut",
                onComplete: () => {
                    router.push("/login");
                }
            });
        } else {
            // Fallback if elements not found
            setTimeout(() => {
                router.push("/login");
            }, 1000);
        }
    };

    return (
        <section id="pricing" ref={ref} className={cn(
            "bg-[#f8fafc]",
            isDashboard ? "py-10" : "py-28"
        )}>
            {!isDashboard && (
                <div className="max-w-7xl mx-auto px-6 text-center mb-20 reveal-up">
                    <h2 className="text-[44px] font-extrabold text-[#111111] tracking-tight">Simple, Transparent Pricing</h2>
                </div>
            )}

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Starter */}
                <div className="gsap-pricing-card bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all reveal-up">
                    <h3 className="text-[22px] font-black mb-2 tracking-tight text-[#0F172A]">Starter</h3>
                    <div className="flex items-baseline gap-1 mb-8">
                        <span className="text-[48px] font-black tracking-tighter text-[#0F172A]">$49</span>
                        <span className="text-gray-400 font-bold text-[16px]">/mo</span>
                    </div>
                    <ul className="space-y-5 mb-10">
                        {['1 Location', 'Up to 500 reviews/mo', 'Monthly reports', 'Basic AI insights'].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-[14px] text-[#475569] font-bold tracking-tight">
                                <Star size={16} className="text-[#0066FF]" /> {item}
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={() => handlePlanClick('Starter')}
                        disabled={loadingPlan !== null}
                        className="w-full cursor-pointer py-4 px-6 rounded-2xl border-2 border-gray-100 text-[#0F172A] font-black hover:bg-gray-50 transition-all text-[14px] shadow-sm flex items-center justify-center gap-2"
                    >
                        {loadingPlan === 'Starter' ? (
                            <Loader2 className="size-4 animate-spin" />
                        ) : "Get Started"}
                    </button>
                </div>

                {/* Professional - Featured */}
                <div className="gsap-pricing-card bg-[#0066FF] p-10 rounded-[40px] shadow-2xl shadow-blue-200 lg:scale-110 z-10 relative overflow-hidden reveal-up">
                    <div className="absolute top-5 left-0 w-full text-center">
                        <span className="text-[11px] text-white/90 font-black uppercase tracking-[2px]">Most Popular</span>
                    </div>
                    <h3 className="text-[22px] font-black text-white mt-8 mb-2 tracking-tight">Professional</h3>
                    <div className="flex items-baseline gap-1 mb-8">
                        <span className="text-[48px] font-black text-white tracking-tighter">$149</span>
                        <span className="text-white/80 font-bold text-[16px]">/mo</span>
                    </div>
                    <ul className="space-y-5 mb-10">
                        {[
                            'Up to 5 Locations',
                            'Unlimited reviews',
                            'Weekly + Monthly reports',
                            'Advanced AI insights',
                            'Competitor analysis'
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-[14px] text-white font-bold tracking-tight">
                                <Star size={16} fill="white" className="text-white" /> {item}
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={() => handlePlanClick('Professional')}
                        disabled={loadingPlan !== null}
                        className="w-full cursor-pointer py-4 px-6 rounded-2xl bg-white text-[#0066FF] font-black hover:bg-blue-50 transition-all text-[14px] shadow-xl flex items-center justify-center gap-2"
                    >
                        {loadingPlan === 'Professional' ? (
                            <Loader2 className="size-4 animate-spin" />
                        ) : "Get Started"}
                    </button>
                </div>

                {/* Enterprise */}
                <div className="gsap-pricing-card bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all reveal-up">
                    <h3 className="text-[22px] font-black mb-2 tracking-tight text-[#0F172A]">Enterprise</h3>
                    <div className="flex items-baseline gap-1 mb-8">
                        <span className="text-[48px] font-black tracking-tighter text-[#0F172A]">Custom</span>
                    </div>
                    <ul className="space-y-5 mb-10">
                        {[
                            'Unlimited Locations',
                            'Unlimited reviews',
                            'Custom reporting',
                            'API access',
                            'Dedicated support'
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-[14px] text-[#475569] font-bold tracking-tight">
                                <Star size={16} className="text-[#0066FF]" /> {item}
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={() => handlePlanClick('Enterprise')}
                        disabled={loadingPlan !== null}
                        className="w-full cursor-pointer py-4 px-6 rounded-2xl border-2 border-gray-100 text-[#0F172A] font-black hover:bg-gray-50 transition-all text-[14px] shadow-sm flex items-center justify-center gap-2"
                    >
                        {loadingPlan === 'Enterprise' ? (
                            <Loader2 className="size-4 animate-spin" />
                        ) : "Contact Sales"}
                    </button>
                </div>
            </div>
        </section>
    );
});

PricingSection.displayName = "PricingSection";
export default PricingSection;
