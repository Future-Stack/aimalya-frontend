"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface UserLayoutProps {
    children: React.ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
    const [mounted, setMounted] = useState(false);
    const [sidebarOffset, setSidebarOffset] = useState(256);

    useEffect(() => {
        setMounted(true);
        const handleResize = () => {
            setSidebarOffset(window.innerWidth < 1024 ? 72 : 256);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (!mounted) {
        return <div className="min-h-screen bg-[#F8FAFC]" />;
    }

    return (
        <div className="flex min-h-screen bg-[#F8FAFC]">
            <Sidebar />

            <div
                className="flex-1 flex flex-col min-h-screen transition-all duration-300"
                style={{ paddingLeft: `${sidebarOffset}px` }}
            >
                <Navbar />

                <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-x-hidden">
                    <div className="max-w-[1600px] mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
