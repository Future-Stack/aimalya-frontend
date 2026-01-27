"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
    Building2,
    MapPin,
    Trash2,
    Plus,
    ChevronDown,
    CheckCircle2,
    Loader2,
    TrendingUp,
    Globe
} from "lucide-react";

// --- Types ---

interface Location {
    id: string;
    name: string;
    address: string;
}

interface Business {
    id: string;
    name: string;
    category: string;
    locations: Location[];
}

// --- Components ---

const Stepper = ({ currentStep }: { currentStep: number }) => {
    const steps = [
        { id: 1, label: "Welcome" },
        { id: 2, label: "Connect" },
        { id: 3, label: "Structure" },
        { id: 4, label: "Goal" },
        { id: 5, label: "Sync" },
    ];

    return (
        <div className="flex items-center justify-center gap-2 mb-10 w-full max-w-2xl mx-auto px-4">
            {steps.map((step, idx) => (
                <div key={step.id} className="flex items-center">
                    <div className={`flex items-center gap-2 ${step.id <= currentStep ? "text-[#0066FF]" : "text-zinc-300"}`}>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border ${step.id <= currentStep ? "bg-[#0066FF] text-white border-[#0066FF]" : "bg-zinc-100 text-zinc-400 border-zinc-200"}`}>
                            {step.id}
                        </div>
                        <span className="text-[12px] text-black font-medium hidden sm:block">{step.label}</span>
                    </div>
                    {idx < steps.length - 1 && (
                        <div className={`w-8 h-[1px] mx-2 sm:mx-4 ${step.id < currentStep ? "bg-[#0066FF]" : "bg-black"}`} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default function AccountSetupPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [businesses, setBusinesses] = useState<Business[]>([
        { id: '1', name: '', category: '', locations: [{ id: 'l1', name: '', address: '' }] }
    ]);
    const [goals, setGoals] = useState({
        businessName: '',
        competitors: '',
        frequency: 'Monthly',
        selectedGoals: [] as string[]
    });

    // --- Step 1: Welcome ---
    const StepWelcome = () => (
        <div className="text-center py-10">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
                <TrendingUp className="text-[#0066FF]" size={32} />
            </div>
            <h2 className="text-[28px] font-bold text-[#1A1A1A] mb-3">Welcome to ReviewIQ, Jane Cooper!</h2>
            <p className="text-zinc-500 max-w-md mx-auto mb-10 text-[15px] leading-relaxed">
                We'll analyze your Google reviews and turn them into actionable insights.
                This setup will only take a few minutes.
            </p>
            <button
                onClick={() => setStep(2)}
                className="bg-[#0066FF] text-white px-10 py-3.5 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
                Connect Your Business
            </button>
        </div>
    );

    // --- Step 2: Connect ---
    const StepConnect = () => (
        <div className="py-6">
            <div className="text-center mb-10">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Globe className="text-[#0066FF]" size={28} />
                </div>
                <h2 className="text-[24px] font-bold text-[#1A1A1A]">Connect Your Google Business</h2>
            </div>

            <div className="flex flex-col gap-4 max-w-md mx-auto mb-12">
                {/* Manual Entry */}
                <button
                    onClick={() => setStep(3)}
                    className="w-full bg-white border-2 border-zinc-100 hover:border-[#0066FF] hover:bg-blue-50/30 p-6 rounded-2xl flex flex-col items-center gap-2 transition-all group"
                >
                    <span className="font-bold text-[#1A1A1A] group-hover:text-[#0066FF]">Manual Entry</span>
                    <span className="text-[13px] text-zinc-400">Paste Google Maps link</span>
                </button>

                {/* Connect with Google */}
                <button
                    className="w-full bg-white border-2 border-blue-100 p-6 rounded-2xl flex flex-col items-center gap-3 transition-all relative overflow-hidden"
                >
                    <div className="flex items-center gap-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z" fill="#4285F4" />
                            <path d="M12.24 24.0008C15.4765 24.0008 18.2059 22.9382 20.1945 21.1039L16.3275 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.24 24.0008Z" fill="#34A853" />
                            <path d="M5.50253 14.3003C5.00236 12.8099 5.00236 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z" fill="#FBBC05" />
                            <path d="M12.24 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.0344664 12.24 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61049L5.50264 9.70143C6.45505 6.86181 9.10947 4.74966 12.24 4.74966Z" fill="#EA4335" />
                        </svg>
                        <span className="font-bold text-[#1A1A1A]">Connect with Google</span>
                    </div>
                    <span className="text-[12px] text-zinc-400">Click below to authenticate with your Google Business Profile account</span>
                </button>
            </div>

            <div className="flex justify-start"> {/* Only Back button requested by user for this step controls */}
                <button onClick={() => setStep(1)} className="px-8 py-3 rounded-xl border border-zinc-200 text-zinc-600 font-bold hover:bg-zinc-50 transition-all text-[14px]">
                    Back
                </button>
            </div>
        </div>
    );

    // --- Step 3: Structure ---
    const StepStructure = () => {
        const addBusiness = () => {
            setBusinesses([...businesses, { id: Date.now().toString(), name: '', category: '', locations: [{ id: Date.now().toString() + 'l', name: '', address: '' }] }]);
        };

        const addLocation = (bizIndex: number) => {
            const newBusinesses = [...businesses];
            newBusinesses[bizIndex].locations.push({ id: Date.now().toString(), name: '', address: '' });
            setBusinesses(newBusinesses);
        };

        const removeLocation = (bizIndex: number, locIndex: number) => {
            const newBusinesses = [...businesses];
            newBusinesses[bizIndex].locations.splice(locIndex, 1);
            setBusinesses(newBusinesses);
        };

        return (
            <div>
                <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Building2 className="text-[#0066FF]" size={24} />
                    </div>
                    <h2 className="text-[24px] font-bold text-[#1A1A1A]">Business Profile Setup</h2>
                </div>

                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-[#1A1A1A]">Business Structure</h3>
                    <button onClick={addBusiness} className="bg-[#0066FF] text-white px-3 py-1.5 rounded-lg text-[12px] font-bold flex items-center gap-1 hover:bg-blue-700">
                        <Plus size={14} /> Add Business
                    </button>
                </div>

                <div className="space-y-6 mb-10 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                    {businesses.map((biz, bIdx) => (
                        <div key={biz.id} className="border border-zinc-200 rounded-2xl p-6 bg-white/50">
                            <div className="mb-4 pb-4 border-b border-zinc-100">
                                <h4 className="text-[13px] font-bold text-[#1A1A1A] mb-3">Business Information</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-[11px] font-semibold text-zinc-500 mb-1 block">Business Name</label>
                                        <div className="relative">
                                            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                                            <input
                                                type="text"
                                                placeholder="XYZ Food Corner"
                                                className="w-full h-10 bg-white border border-zinc-200 rounded-lg pl-9 pr-3 text-[13px] focus:border-[#0066FF] outline-none"
                                                value={biz.name}
                                                onChange={(e) => {
                                                    const newBiz = [...businesses];
                                                    newBiz[bIdx].name = e.target.value;
                                                    setBusinesses(newBiz);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-[11px] font-semibold text-zinc-500 mb-1 block">Business Category</label>
                                        <div className="relative">
                                            <select
                                                className="w-full h-10 bg-white border border-zinc-200 rounded-lg pl-3 pr-8 text-[13px] focus:border-[#0066FF] outline-none appearance-none text-zinc-600"
                                                value={biz.category}
                                                onChange={(e) => {
                                                    const newBiz = [...businesses];
                                                    newBiz[bIdx].category = e.target.value;
                                                    setBusinesses(newBiz);
                                                }}
                                            >
                                                <option value="">Select category</option>
                                                <option value="Restaurant">Restaurant</option>
                                                <option value="Retail">Retail</option>
                                                <option value="Service">Service</option>
                                            </select>
                                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" size={14} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className="text-[13px] font-bold text-[#1A1A1A]">Location</h4>
                                    <button onClick={() => addLocation(bIdx)} className="text-[#0066FF] text-[11px] font-bold flex items-center gap-1 hover:underline">
                                        <Plus size={12} /> Add Location
                                    </button>
                                </div>

                                <div className="space-y-3">
                                    <div className="grid grid-cols-[1fr_1fr_24px] gap-4 px-2 mb-1">
                                        <label className="text-[11px] font-semibold text-zinc-500">Business Location</label>
                                        <label className="text-[11px] font-semibold text-zinc-500">Address / City</label>
                                    </div>
                                    {biz.locations.map((loc, lIdx) => (
                                        <div key={loc.id} className="grid grid-cols-[1fr_1fr_24px] gap-4 items-center">
                                            <div className="relative">
                                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={14} />
                                                <input
                                                    type="text"
                                                    placeholder="Google Maps Business URL"
                                                    className="w-full h-10 bg-white border border-zinc-200 rounded-lg pl-9 pr-3 text-[13px] focus:border-[#0066FF] outline-none"
                                                />
                                            </div>
                                            <div className="relative">
                                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={14} />
                                                <input
                                                    type="text"
                                                    placeholder="Address or City"
                                                    className="w-full h-10 bg-white border border-zinc-200 rounded-lg pl-9 pr-3 text-[13px] focus:border-[#0066FF] outline-none"
                                                />
                                            </div>
                                            <button onClick={() => removeLocation(bIdx, lIdx)} className="text-red-400 hover:text-red-600 transition-colors">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between mt-8">
                    <button onClick={() => setStep(2)} className="px-8 py-3 rounded-xl border border-zinc-200 text-zinc-600 font-bold hover:bg-zinc-50 transition-all text-[14px]">
                        Back
                    </button>
                    <button onClick={() => setStep(4)} className="bg-[#0066FF] text-white px-10 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 text-[14px]">
                        Continue
                    </button>
                </div>
            </div>
        );
    };

    // --- Step 4: Goal ---
    const StepGoal = () => (
        <div>
            <div className="text-center mb-8">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="text-[#0066FF]" size={24} />
                </div>
                <h2 className="text-[24px] font-bold text-[#1A1A1A]">Business Profile Setup</h2>
            </div>

            <div className="space-y-6 mb-10">
                <h3 className="font-bold text-[#1A1A1A] border-b border-zinc-100 pb-2">Goals & Preferences</h3>

                <div className="space-y-4">
                    <div>
                        <label className="text-[13px] font-bold text-zinc-700 mb-2 block">Business Name</label>
                        <div className="relative">
                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                            <div className="w-full h-12 bg-blue-50/50 border border-transparent rounded-xl flex items-center px-12 text-[14px] text-zinc-600">
                                Coffee house
                            </div>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                        </div>
                    </div>

                    <div>
                        <label className="text-[13px] font-bold text-zinc-700 mb-2 block">Competitors (Optional)</label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                            <input
                                type="text"
                                placeholder="Enter competitor names, separated by commas"
                                className="w-full h-12 bg-blue-50/50 border border-transparent focus:bg-white focus:border-[#0066FF] rounded-xl pl-12 pr-4 text-[14px] outline-none transition-all placeholder:text-zinc-400"
                            />
                        </div>
                        <p className="text-[11px] text-zinc-400 mt-1 pl-1">You can add more later</p>
                    </div>

                    <div>
                        <label className="text-[13px] font-bold text-zinc-700 mb-2 block">Report Frequency</label>
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
                                <TrendingUp size={18} />
                            </div>
                            <select className="w-full h-12 bg-blue-50/50 border border-transparent focus:bg-white focus:border-[#0066FF] rounded-xl pl-12 pr-10 text-[14px] outline-none appearance-none text-zinc-600 transition-all cursor-pointer">
                                <option>Monthly</option>
                                <option>Weekly</option>
                                <option>Daily</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" size={16} />
                        </div>
                    </div>

                    <div>
                        <label className="text-[13px] font-bold text-zinc-700 mb-2 block">Your Goals (Select all that apply)</label>
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
                                <Target size={18} />
                            </div>
                            <select className="w-full h-12 bg-blue-50/50 border border-transparent focus:bg-white focus:border-[#0066FF] rounded-xl pl-12 pr-10 text-[14px] outline-none appearance-none text-zinc-600 transition-all cursor-pointer">
                                <option>Improve customer satisfaction</option>
                                <option>Increase review volume</option>
                                <option>Monitor competitors</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" size={16} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between mt-8">
                <button onClick={() => setStep(3)} className="px-8 py-3 rounded-xl border border-zinc-200 text-zinc-600 font-bold hover:bg-zinc-50 transition-all text-[14px]">
                    Back
                </button>
                <button onClick={() => setStep(5)} className="bg-[#0066FF] text-white px-10 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 text-[14px]">
                    Start Analysis
                </button>
            </div>
        </div>
    );

    // --- Step 5: Sync ---
    const StepSync = () => {
        // Auto redirect after delay
        useEffect(() => {
            const timer = setTimeout(() => {
                router.push('/login');
            }, 4000);
            return () => clearTimeout(timer);
        }, []);

        return (
            <div className="text-center py-10">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-8 animate-pulse">
                    <Loader2 className="text-[#0066FF] animate-spin" size={32} />
                </div>
                <h2 className="text-[24px] font-bold text-[#1A1A1A] mb-4">Setting Up Your Dashboard</h2>
                <p className="text-zinc-500 text-[14px] mb-8">We're fetching your reviews and analyzing the data. This may take a minute.</p>

                <div className="max-w-xs mx-auto space-y-3">
                    <div className="h-1.5 w-full bg-blue-100 rounded-full overflow-hidden mb-6">
                        <div className="h-full bg-[#0066FF] rounded-full animate-[width_3s_ease-in-out_forwards] w-0" style={{ width: '1000%' }} />
                        {/* Note: Tailwind arbitrary value animation class might need config, using inline style to simulate filling for now or just generic progress */}
                        <div className="h-full bg-[#0066FF] rounded-full w-2/3 animate-pulse" />
                    </div>

                    <div className="flex items-center gap-2 text-[13px] text-zinc-500">
                        <CheckCircle2 size={16} className="text-[#10B981]" /> Fetching reviews
                    </div>
                    <div className="flex items-center gap-2 text-[13px] text-zinc-500">
                        <CheckCircle2 size={16} className="text-[#10B981]" /> Analyzing sentiment
                    </div>
                    <div className="flex items-center gap-2 text-[13px] text-zinc-500">
                        <CheckCircle2 size={16} className="text-[#10B981]" /> Detecting themes
                    </div>
                    <div className="flex items-center gap-2 text-[13px] text-zinc-500">
                        <span className="w-4 h-4 rounded-full border-2 border-zinc-200 border-t-[#0066FF] animate-spin" /> Generating insights
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen w-full relative content-center flex items-center justify-center overflow-hidden bg-[#E0F2FE]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/auth-bg.png"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
            </div>

            {/* Brand Logo */}
            <div className="absolute top-8 left-8 z-10 flex items-center gap-2">
                <Image src="/logo.svg" alt="Logo" width={207} height={60} />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-4xl px-4 flex flex-col items-center">
                <Stepper currentStep={step} />

                <div className="w-full bg-white/80 backdrop-blur-xl rounded-[30px] p-8 md:p-12 shadow-2xl border border-white/60 min-h-[500px] flex flex-col justify-center">
                    {step === 1 && <StepWelcome />}
                    {step === 2 && <StepConnect />}
                    {step === 3 && <StepStructure />}
                    {step === 4 && <StepGoal />}
                    {step === 5 && <StepSync />}
                </div>
            </div>
        </div>
    );
}

// Add imported icons that were missing in the component body but used
import { User, Target } from "lucide-react";
