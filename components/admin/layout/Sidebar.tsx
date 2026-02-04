"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    User,
    CreditCard,
    Building2,
    BarChart3,
    LifeBuoy,
    Settings,
    LogOut,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const menuItems = [
    { icon: LayoutDashboard, label: "Overview", href: "/admin/dashboard" },
    { icon: User, label: "User", href: "/admin/users" },
    { icon: CreditCard, label: "Subscription", href: "/admin/subscription" },
    { icon: Building2, label: "Businesses", href: "/admin/businesses" },
    { icon: BarChart3, label: "Analytics", href: "/admin/analytics" },
    { icon: LifeBuoy, label: "Support", href: "/admin/support" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1024);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <aside
            className={cn(
                "group fixed left-0 top-0 bottom-0 z-50 transition-all duration-300 ease-in-out border-r border-[#1E293B] bg-[#0F172A] text-white flex flex-col overflow-hidden",
                // On Desktop: Always 256px
                // On Small Device: 72px by default, 256px on hover (as overlay)
                !isSmallScreen ? "w-64" : "w-[72px] hover:w-64 shadow-2xl"
            )}
        >
            {/* Logo Section */}
            <Link href="/admin/dashboard">
                <div className="flex h-20 items-center px-4 overflow-hidden">
                    <div className="flex aspect-square size-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-500/20 flex-shrink-0">
                        <BarChart3 className="size-6 text-white" />
                    </div>
                    <span className={cn(
                        "ml-2 text-xl font-bold tracking-tight transition-all duration-300 whitespace-nowrap",
                        isSmallScreen ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                    )}>
                        ReviewIQ
                    </span>
                </div>
            </Link>

            {/* Divider */}
            <div className="mx-4 mb-4 h-px bg-gray-500/50" />

            {/* Navigation Items */}
            <nav className="flex-1 min-h-0 px-3 space-y-1.5 overflow-x-hidden overflow-y-auto custom-scrollbar">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "relative flex items-center h-11 rounded-xl transition-all duration-200 cursor-pointer",
                                isActive
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                                    : "text-gray-400 hover:bg-[#1E293B] hover:text-white"
                            )}
                        >
                            <div className="flex items-center justify-center w-11 h-11 flex-shrink-0">
                                <item.icon className="size-5" />
                            </div>
                            <span className={cn(
                                "ml-1 text-sm font-medium transition-all duration-300 whitespace-nowrap",
                                isSmallScreen ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                            )}>
                                {item.label}
                            </span>

                            {/* {isActive && (
                                <div className={cn(
                                    "absolute right-3 size-1.5 rounded-full bg-white transition-opacity duration-300",
                                    isSmallScreen ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                                )} />
                            )} */}
                        </Link>
                    );
                })}
            </nav>

            {/* Profile Section */}
            <div className="mt-auto border-t border-gray-500/50 bg-[#111827]/50 m-4 pt-4">
                <Link href="/admin/signin" className="block">
                    <button className={cn(
                        "w-full flex items-center h-11 rounded-xl transition-all duration-200 cursor-pointer text-red-500 hover:bg-[#1E293B] hover:text-red-400",
                        isSmallScreen ? "justify-center group-hover:justify-start" : "px-3"
                    )}>
                        <div className="flex items-center justify-center w-11 h-11 flex-shrink-0 ml-[-12px]">
                            <LogOut className="size-5" />
                        </div>
                        <span className={cn(
                            "text-sm font-medium transition-all duration-300 opacity-0 w-0 overflow-hidden whitespace-nowrap",
                            isSmallScreen ? "group-hover:opacity-100 group-hover:w-auto group-hover:ml-1" : "opacity-100 w-auto ml-1"
                        )}>
                            Logout
                        </span>
                    </button>
                </Link>
            </div>
        </aside>
    );
}
