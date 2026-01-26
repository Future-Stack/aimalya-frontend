"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    MessageSquare,
    BrainCircuit,
    FileText,
    Users,
    LifeBuoy,
    Bell,
    Settings,
    LogOut,
    Store,
    MapPin,
    ChevronDown,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const menuItems = [
    { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
    { icon: MessageSquare, label: "Review", href: "/review" },
    { icon: BrainCircuit, label: "AI Insights", href: "/ai-insights" },
    { icon: FileText, label: "Reports", href: "/reports" },
    { icon: Users, label: "Competitors", href: "/competitors" },
    { icon: LifeBuoy, label: "Support", href: "/support" },
    { icon: Bell, label: "Notification", href: "/notification" },
    { icon: Settings, label: "Settings", href: "/settings" },
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
                "group fixed left-0 top-0 z-50 h-screen transition-all duration-300 ease-in-out border-r border-[#E2E8F0] bg-white text-gray-800 flex flex-col",
                // On Desktop: Always 256px
                // On Small Device: 72px by default, 256px on hover (as overlay)
                !isSmallScreen ? "w-64" : "w-[72px] hover:w-64 shadow-2xl"
            )}
        >
            {/* Logo Section */}
            <div className="flex h-20 items-center px-4 overflow-hidden">
                <div className="flex aspect-square size-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-500/20 flex-shrink-0">
                    <LayoutDashboard className="size-6 text-white" />
                </div>
                <span className={cn(
                    "ml-4 text-xl font-bold tracking-tight transition-all duration-300 whitespace-nowrap text-gray-900",
                    isSmallScreen ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                )}>
                    ReviewIQ
                </span>
            </div>

            {/* Context Selectors (Mocked) */}
            <div className={cn(
                "px-4 mb-2 space-y-2 transition-all duration-300 overflow-hidden",
                isSmallScreen ? "h-0 opacity-0 group-hover:h-auto group-hover:opacity-100" : "h-auto opacity-100"
            )}>
                <button className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-2 overflow-hidden">
                        <Store className="size-4 text-gray-500 shrink-0" />
                        <span className="truncate">Softvence Shop</span>
                    </div>
                    <ChevronDown className="size-4 text-gray-400 shrink-0" />
                </button>
                <button className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-2 overflow-hidden">
                        <MapPin className="size-4 text-gray-500 shrink-0" />
                        <span className="truncate">All Locations</span>
                    </div>
                    <ChevronDown className="size-4 text-gray-400 shrink-0" />
                </button>
            </div>

            {/* Divider */}
            <div className="mx-4 my-2 h-px bg-gray-100" />

            {/* Navigation Items */}
            <nav className="flex-1 px-3 space-y-1.5 overflow-x-hidden overflow-y-auto custom-scrollbar">
                {menuItems.map((item) => {
                    const isActive = pathname.startsWith(item.href);
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "relative flex items-center h-11 rounded-xl transition-all duration-200 cursor-pointer",
                                isActive
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
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
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom Actions */}
            <div className="mt-auto border-t border-gray-100 bg-gray-50/50 p-4">
                <div className={cn(
                    "transition-all duration-300 overflow-hidden",
                    isSmallScreen ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                )}>
                    {/* Add any bottom actions or credits here if needed */}
                </div>
            </div>
        </aside>
    );
}
