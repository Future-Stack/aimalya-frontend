"use client";

import React from "react";
import PricingSection from "@/components/user/home/PricingSection";

export default function PricingPage() {
    return (
        <div className="pb-10">
            <div className="mb-10">
                <h1 className="text-3xl font-black text-[#0F172A] tracking-tight">Subscription Plans</h1>
                <p className="text-gray-500 font-medium mt-1">Choose the plan that best fits your business needs.</p>
            </div>
            
            <div className="overflow-hidden">
                <PricingSection isDashboard={true} />
            </div>
        </div>
    );
}
