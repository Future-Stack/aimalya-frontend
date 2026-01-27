"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff, User, Briefcase } from "lucide-react";

export default function SignupPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/account-setup");
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

            {/* Brand Logo (Top Left) */}
            <div className="absolute top-8 left-8 z-10 flex items-center gap-2">
                <Image src="/logo.svg" alt="Logo" width={207} height={60} />
            </div>

            {/* Signup Card */}
            <div className="relative z-10 w-full max-w-[550px] bg-white/60 backdrop-blur-xl rounded-[30px] p-8 md:p-12 shadow-xl border border-white/50 space-y-8">
                <div className="text-center space-y-2">
                    <h1 className="text-[32px] font-bold text-[#1A1A1A]">Create Account</h1>
                    <p className="text-[#0066FF] font-medium text-[15px]">Start analysing your reviews today</p>
                </div>

                <form className="space-y-4" onSubmit={handleSignup}>
                    {/* Full Name */}
                    <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#0066FF] transition-colors pl-1">
                            <User size={20} />
                        </div>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full bg-white h-12 rounded-xl pl-12 pr-4 text-[15px] border border-transparent focus:border-[#0066FF] focus:ring-4 focus:ring-blue-50 outline-none transition-all placeholder:text-zinc-400 shadow-sm"
                        />
                    </div>

                    {/* Business Email */}
                    <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#0066FF] transition-colors pl-1">
                            <Mail size={20} />
                        </div>
                        <input
                            type="email"
                            placeholder="Business Email"
                            className="w-full bg-white h-12 rounded-xl pl-12 pr-4 text-[15px] border border-transparent focus:border-[#0066FF] focus:ring-4 focus:ring-blue-50 outline-none transition-all placeholder:text-zinc-400 shadow-sm"
                        />
                    </div>

                    {/* Business Name */}
                    <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#0066FF] transition-colors pl-1">
                            <Briefcase size={20} />
                        </div>
                        <input
                            type="text"
                            placeholder="Business Name"
                            className="w-full bg-white h-12 rounded-xl pl-12 pr-4 text-[15px] border border-transparent focus:border-[#0066FF] focus:ring-4 focus:ring-blue-50 outline-none transition-all placeholder:text-zinc-400 shadow-sm"
                        />
                    </div>

                    {/* Password */}
                    <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#0066FF] transition-colors pl-1">
                            <Lock size={20} />
                        </div>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="w-full bg-white h-12 rounded-xl pl-12 pr-12 text-[15px] border border-transparent focus:border-[#0066FF] focus:ring-4 focus:ring-blue-50 outline-none transition-all placeholder:text-zinc-400 shadow-sm"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 transition-colors"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    {/* Confirm Password */}
                    <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#0066FF] transition-colors pl-1">
                            <Lock size={20} />
                        </div>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            className="w-full bg-white h-12 rounded-xl pl-12 pr-12 text-[15px] border border-transparent focus:border-[#0066FF] focus:ring-4 focus:ring-blue-50 outline-none transition-all placeholder:text-zinc-400 shadow-sm"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 transition-colors"
                        >
                            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                        <input
                            type="checkbox"
                            id="terms"
                            className="w-4 h-4 rounded border-gray-300 text-[#0066FF] focus:ring-[#0066FF]"
                        />
                        <label htmlFor="terms" className="text-[14px] text-zinc-500 font-medium">
                            I accept the <Link href="#" className="text-[#0066FF] font-bold hover:underline">Terms & Privacy Policy</Link>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full h-12 bg-[#0055D4] text-white rounded-xl font-bold text-[15px] hover:bg-[#0044AA] transition-all shadow-lg shadow-blue-200 mt-4"
                    >
                        Create Account
                    </button>
                </form>

                <p className="text-center text-[14px] text-zinc-500 font-medium">
                    Already have an account?{' '}
                    <Link href="/login" className="text-[#0066FF] font-bold hover:underline">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
}