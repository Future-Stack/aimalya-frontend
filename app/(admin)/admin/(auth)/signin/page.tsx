"use client";

import React, { useState } from "react";
import AuthLayout from "@/components/admin/auth/AuthLayout";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

const SignInPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <AuthLayout title="Admin Portal" subtitle="ReviewIQ Management System">
            <form className="space-y-6">
                <div>
                    <label className="block text-blue-200/80 text-sm mb-2 ml-1" htmlFor="email">
                        Admin Email
                    </label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-blue-300/50 group-focus-within:text-blue-400 transition-colors">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <input
                            className="w-full bg-[#334155]/50 border border-white/5 rounded-xl py-4 pl-12 pr-4 !text-white placeholder-blue-300/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-[#334155]/80 transition-all text-sm"
                            id="email"
                            type="email"
                            placeholder="admin@reviewiq.com"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-blue-200/80 text-sm mb-2 ml-1" htmlFor="password">
                        Password
                    </label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-blue-300/50 group-focus-within:text-blue-400 transition-colors">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                        </div>
                        <input
                            className="w-full bg-[#334155]/50 border border-white/5 rounded-xl py-4 pl-12 pr-12 !text-white placeholder-blue-300/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-[#334155]/80 transition-all text-sm"
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-4 flex items-center text-blue-300/50 hover:text-blue-400 transition-colors cursor-pointer"
                        >
                            {showPassword ? (
                                <EyeOff size={20} />
                            ) : (
                                <Eye size={20} />
                            )}
                        </button>
                    </div>
                    <div className="flex justify-end mt-4">
                        <Link
                            href="/admin/forget-password"
                            className="text-red-400 text-sm hover:underline transition-all"
                        >
                            Forgot Password
                        </Link>
                    </div>
                </div>

                <Link href="/admin/dashboard">
                    <button
                        className="w-full bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] hover:from-[#6d28d9] hover:to-[#4338ca] text-white font-semibold py-4 rounded-xl shadow-lg shadow-blue-900/40 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                        type="submit"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" />
                        </svg>
                        Sign In
                    </button>
                </Link>

                <p className="text-center text-sm text-blue-200/60 mt-6">
                    Don't have an account?{' '}
                    <Link href="/admin/signup" className="text-blue-400 font-semibold hover:text-blue-300 hover:underline transition-all">
                        Sign Up
                    </Link>
                </p>
            </form>
        </AuthLayout>
    );
};

export default SignInPage;
