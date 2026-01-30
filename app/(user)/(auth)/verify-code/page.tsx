"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function VerifyCodePage() {
    const router = useRouter();
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        // Focus first input on mount
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    const handleChange = (index: number, value: string) => {
        if (value.length > 1) {
            // Handle paste potentially
            value = value.slice(0, 1);
        }

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to next input if value is entered
        if (value && index < 5 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
            // Move to previous input on backspace if current is empty
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Verify logic here
        router.push("/reset-password");
    };

    return (
        <div className="min-h-screen w-full relative content-center flex items-center justify-center overflow-hidden bg-[#E0F2FE]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/forgot-bg.png"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
            </div>

            {/* Brand Logo (Top Left) */}
            <div className="hidden md:flex absolute top-8 left-8 z-10 items-center gap-2">
                <Image src="/logo.svg" alt="Logo" width={207} height={60} />
            </div>

            {/* Verify Code Card */}
            <div className="relative z-10 w-[calc(100%-2rem)] max-w-[600px] bg-white/60 backdrop-blur-xl rounded-[30px] p-6 sm:p-10 md:p-12 shadow-xl border border-white/50 space-y-6 sm:space-y-8">
                <div className="text-center space-y-4">
                    <h1 className="text-2xl sm:text-[32px] font-bold text-[#1A1A1A]">Verify OTP</h1>
                    <p className="text-zinc-500 text-sm sm:text-[15px] max-w-[450px] mx-auto leading-relaxed">
                        We have sent you a 6 digit OTP code to your provided email:
                        <br />
                        <span className="font-bold text-zinc-800">example@email.com</span> please input that code here to proceed.
                    </p>
                </div>

                <div className="flex justify-center">
                    <span className="text-[#FF5B5B] font-bold text-[18px]">2:59</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="flex justify-center gap-2 md:gap-4">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={(el) => { inputRefs.current[index] = el }}
                                type="text"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                className="w-12 h-12 md:w-14 md:h-14 text-center text-xl font-bold bg-slate-50/50 rounded-xl border border-zinc-200 focus:border-[#0066FF] focus:ring-4 focus:ring-blue-50 outline-none transition-all text-zinc-800"
                            />
                        ))}
                    </div>

                    <div className="text-center">
                        <button type="button" className="text-[#0066FF] font-bold text-[15px] hover:underline">
                            Resend
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button
                            type="submit"
                            className="w-full h-12 bg-[#0055D4] text-white rounded-xl font-bold text-[15px] hover:bg-[#0044AA] transition-all shadow-lg shadow-blue-200"
                        >
                            Verify
                        </button>
                        <Link
                            href="/forget-password"
                            className="w-full h-12 bg-[#DCEAF8] text-[#0055D4] rounded-xl font-bold text-[15px] hover:bg-[#cbe0f5] transition-all flex items-center justify-center"
                        >
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
