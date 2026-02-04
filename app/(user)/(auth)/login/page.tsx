"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

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

            {/* Login Card */}
            <div className="relative z-10 w-[calc(100%-2rem)] max-w-[480px] user-auth-bg rounded-3xl p-6 sm:p-10 md:p-12 border border-white/50 space-y-6 sm:space-y-8">
                <div className="text-center space-y-2">
                    <h1 className="text-2xl sm:text-[32px] font-bold text-[#1A1A1A]">Welcome Back</h1>
                    <p className="text-auth-subtitle-color font-medium text-sm sm:text-[15px]">Please login to your account</p>
                </div>

                <form className="space-y-5">
                    <div className="space-y-5">
                        {/* Email Input */}
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-auth-subtitle-color transition-colors pl-1">
                                <Mail size={20} />
                            </div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-white h-12 rounded-xl pl-12 pr-4 text-[15px] border border-transparent focus:border-auth-subtitle-color focus:ring focus:ring-auth-subtitle-color outline-none transition-all placeholder:text-zinc-400 shadow-sm"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-auth-subtitle-color transition-colors pl-1">
                                <Lock size={20} />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
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
                    </div>

                    <div className="flex justify-end">
                        <Link
                            href="/forget-password"
                            className="text-[13px] font-bold text-[#E04F4F] transition-colors"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    <Link href="/dashboard">
                        <button
                            type="submit"
                            className="w-full h-12 bg-auth-subtitle-color text-white rounded-xl font-bold text-[15px] hover:bg-cyan-300 transition-all shadow-lg shadow-blue-200 cursor-pointer"
                        >
                            Log In
                        </button>
                    </Link>
                </form>

                <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-zinc-200/60"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-4 text-[13px] font-medium text-zinc-400">Or login With</span>
                    </div>
                </div>

                <button className="cursor-pointer w-full h-12 bg-white border border-zinc-100/80 text-zinc-700 rounded-xl font-bold text-[15px] hover:bg-zinc-50 transition-all shadow-sm flex items-center justify-center gap-2.5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z" fill="#4285F4" />
                        <path d="M12.24 24.0008C15.4765 24.0008 18.2059 22.9382 20.1945 21.1039L16.3275 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.24 24.0008Z" fill="#34A853" />
                        <path d="M5.50253 14.3003C5.00236 12.8099 5.00236 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z" fill="#FBBC05" />
                        <path d="M12.24 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.0344664 12.24 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61049L5.50264 9.70143C6.45505 6.86181 9.10947 4.74966 12.24 4.74966Z" fill="#EA4335" />
                    </svg>
                    Google
                </button>

                <p className="text-center text-[14px] text-zinc-500 font-medium">
                    Don't have an account?{' '}
                    <Link href="/signup" className="text-auth-subtitle-color font-bold hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}
