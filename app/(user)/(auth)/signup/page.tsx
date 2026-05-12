"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff, User, Briefcase } from "lucide-react";
import { useRegisterMutation } from "@/redux/api/BE/user/authApi";
import Cookies from "js-cookie";

export default function SignupPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
    // Form state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        businessName: "",
        password: "",
        confirmPassword: ""
    });

    const [register, { isLoading }] = useRegisterMutation();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { placeholder, value } = e.target;
        const nameMap: { [key: string]: string } = {
            "Full Name": "name",
            "Business Email": "email",
            "Business Name": "businessName",
            "Password": "password",
            "Confirm Password": "confirmPassword"
        };
        const fieldName = nameMap[placeholder];
        if (fieldName) {
            setFormData(prev => ({ ...prev, [fieldName]: value }));
        }
    };

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const result = await register({
                email: formData.email,
                password: formData.password,
                name: formData.name,
                role: "USER",
                operationsRole: formData.businessName
            }).unwrap();

            if (result.success) {
                Cookies.set("accessToken", result.data.accessToken, { expires: 7, path: '/' });
                Cookies.set("refreshToken", result.data.refreshToken, { expires: 30, path: '/' });
                router.push("/account-setup");
            }
        } catch (err: any) {
            console.error("Signup failed:", err);
            alert(err?.data?.message || "Registration failed. Please try again.");
        }
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
            <div className="hidden md:flex absolute top-8 left-8 z-10 items-center gap-2">
                <Image src="/auth_icon.svg" alt="Logo" width={207} height={60} />
            </div>

            {/* Signup Card */}
            <div className="relative z-10 w-[calc(100%-2rem)] max-w-[550px] user-auth-bg rounded-3xl p-6 sm:p-10 md:p-12 border border-white/50 space-y-6 sm:space-y-8">
                <div className="text-center space-y-2">
                    <h1 className="text-2xl sm:text-[32px] font-bold text-[#1A1A1A]">Create Account</h1>
                    <p className="text-auth-subtitle-color font-medium text-sm sm:text-[15px]">Start analysing your reviews today</p>
                </div>

                <form className="space-y-4" onSubmit={handleSignup}>
                    {/* Full Name */}
                    <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-auth-subtitle-color transition-colors pl-1">
                            <User size={20} />
                        </div>
                        <input
                            type="text"
                            required
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full bg-white h-12 rounded-xl pl-12 pr-4 text-[15px] border border-transparent focus:border-auth-subtitle-color focus:ring focus:ring-auth-subtitle-color outline-none transition-all placeholder:text-zinc-400 shadow-sm"
                        />
                    </div>

                    {/* Business Email */}
                    <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-auth-subtitle-color transition-colors pl-1">
                            <Mail size={20} />
                        </div>
                        <input
                            type="email"
                            required
                            placeholder="Business Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full bg-white h-12 rounded-xl pl-12 pr-4 text-[15px] border border-transparent focus:border-auth-subtitle-color focus:ring focus:ring-auth-subtitle-color outline-none transition-all placeholder:text-zinc-400 shadow-sm"
                        />
                    </div>

                    {/* Business Name */}
                    <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-auth-subtitle-color transition-colors pl-1">
                            <Briefcase size={20} />
                        </div>
                        <input
                            type="text"
                            required
                            placeholder="Business Name"
                            value={formData.businessName}
                            onChange={handleInputChange}
                            className="w-full bg-white h-12 rounded-xl pl-12 pr-4 text-[15px] border border-transparent focus:border-auth-subtitle-color focus:ring focus:ring-auth-subtitle-color outline-none transition-all placeholder:text-zinc-400 shadow-sm"
                        />
                    </div>

                    {/* Password */}
                    <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-auth-subtitle-color transition-colors pl-1">
                            <Lock size={20} />
                        </div>
                        <input
                            type={showPassword ? "text" : "password"}
                            required
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full bg-white h-12 rounded-xl pl-12 pr-12 text-[15px] border border-transparent focus:border-auth-subtitle-color focus:ring focus:ring-auth-subtitle-color outline-none transition-all placeholder:text-zinc-400 shadow-sm"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 transition-colors"
                        >
                            {showPassword ? <EyeOff size={20} className="text-cyan-300 cursor-pointer" /> : <Eye size={20} className="text-cyan-300 cursor-pointer" />}
                        </button>
                    </div>

                    {/* Confirm Password */}
                    <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-auth-subtitle-color transition-colors pl-1">
                            <Lock size={20} />
                        </div>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            required
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            className="w-full bg-white h-12 rounded-xl pl-12 pr-12 text-[15px] border border-transparent focus:border-auth-subtitle-color focus:ring focus:ring-auth-subtitle-color outline-none transition-all placeholder:text-zinc-400 shadow-sm"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 transition-colors"
                        >
                            {showConfirmPassword ? <EyeOff size={20} className="text-cyan-300 cursor-pointer" /> : <Eye size={20} className="text-cyan-300 cursor-pointer" />}
                        </button>
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                        <input
                            type="checkbox"
                            id="terms"
                            required
                            className="w-4 h-4 rounded cursor-pointer"
                            style={{ accentColor: '#22D3EE' }}
                        />
                        <label htmlFor="terms" className="text-[14px] text-zinc-500 font-medium">
                            I accept the <Link href="#" className="text-auth-subtitle-color font-bold hover:underline">Terms & Privacy Policy</Link>
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="cursor-pointer w-full h-12 bg-auth-subtitle-color hover:bg-cyan-300 text-white rounded-xl font-bold text-[15px] transition-all shadow-lg shadow-blue-200 mt-4 disabled:opacity-50"
                    >
                        {isLoading ? "Creating Account..." : "Create Account"}
                    </button>
                </form>

                <p className="text-center text-[14px] text-zinc-500 font-medium">
                    Already have an account?{' '}
                    <Link href="/login" className="text-auth-subtitle-color font-bold hover:underline">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
}