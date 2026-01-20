"use client";

import React from "react";
import AuthLayout from "@/components/admin/auth/AuthLayout";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ForgetPasswordPage = () => {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/admin/verify-otp");
    };

    return (
        <AuthLayout
            title="Forgot Password!"
            subtitle="Do you forgot your password. It's ease to reset, just provide your email address. We'll send you a OTP code."
            icon={
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    <path d="M12 15v3"></path>
                    <path d="M10 16h4"></path>
                </svg>
            }
        >
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-blue-200/80 text-sm mb-2 ml-1" htmlFor="email">
                        Email
                    </label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-blue-300/50 group-focus-within:text-blue-400 transition-colors">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </div>
                        <input
                            className="w-full bg-[#334155]/50 border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white placeholder-blue-300/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-[#334155]/80 transition-all text-sm"
                            id="email"
                            type="email"
                            placeholder="admin@reviewiq.com"
                        />
                    </div>
                </div>

                <div className="flex gap-4">
                    <Link
                        href="/admin/signin"
                        className="flex-1 border border-white/20 text-white font-semibold py-4 rounded-xl hover:bg-white/5 transition-all text-center flex items-center justify-center"
                    >
                        Cancel
                    </Link>
                    <button
                        className="flex-[1.5] bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] hover:from-[#6d28d9] hover:to-[#4338ca] text-white font-semibold py-4 rounded-xl shadow-lg shadow-blue-900/40 transition-all flex items-center justify-center"
                        type="submit"
                    >
                        Send OTP
                    </button>
                </div>
            </form>
        </AuthLayout>
    );
};

export default ForgetPasswordPage;
