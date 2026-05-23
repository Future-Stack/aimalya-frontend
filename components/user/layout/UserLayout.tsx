"use client";

import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { decodeToken } from "@/lib/utils";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useRouter } from "next/navigation";
import SubscriptionGuard from "../SubscriptionGuard";

interface UserLayoutProps {
    children: React.ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
    const [mounted, setMounted] = useState(false);
    const [sidebarOffset, setSidebarOffset] = useState(256);

    const router = useRouter();

    useEffect(() => {
        setMounted(true);
        const token = Cookies.get("accessToken");
        const decoded = token ? decodeToken(token) : null;
        const role = decoded?.role;

        if (!token) {
            router.push("/login");
        } else if (role === "ADMIN" || role === "SUPER_ADMIN") {
            router.push("/admin/dashboard");
        } else if (role !== "USER") {
            router.push("/login");
        }
        
        const handleResize = () => {
            setSidebarOffset(window.innerWidth < 1024 ? 72 : 256);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [router]);

    if (!mounted) {
        return <div className="min-h-screen bg-[#F9FCFF]" />;
    }

    return (
        <div className="flex h-screen overflow-hidden bg-[#F9FCFF]">
            <Sidebar />

            <div
                className="flex-1 flex flex-col h-full overflow-y-auto overflow-x-hidden transition-all duration-300"
                style={{ paddingLeft: `${sidebarOffset}px` }}
            >
                <Navbar />

                <main className="flex-1 p-4 md:p-6 lg:p-8">
                    <div className="max-w-[1600px] mx-auto">
                        <SubscriptionGuard>
                            {children}
                        </SubscriptionGuard>
                    </div>
                </main>
            </div>
        </div>
    );
}
