"use client";

import React, { useState, useEffect, useMemo } from "react";
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
    HistoryIcon,
    Menu,
    X,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import StylishDropdown from "../../ui/StylishDropdown";
import { useAuth } from "@/hooks/useAuth";
import { useGetBusinessNamesQuery, useGetBusinessLocationsQuery } from "@/redux/api/AI/nameFatchingApi";
import { getUserIdFromToken } from "@/utils/authUtils";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedBusiness, setSelectedLocation, setSelectedAddress } from "@/redux/slices/businessSlice";

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
    const { logout } = useAuth();
    const pathname = usePathname();
    const userId = getUserIdFromToken();
    const dispatch = useDispatch();

    const selectedShop = useSelector((state: any) => state.business.selectedBusiness);
    const selectedLocation = useSelector((state: any) => state.business.selectedLocation);

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    // Fetch Business Names
    const { data: namesData, isLoading: isLoadingNames } = useGetBusinessNamesQuery(userId || "", {
        skip: !userId,
    });

    // Fetch Business Locations when a shop is selected
    const { data: locationsData, isLoading: isLoadingLocations } = useGetBusinessLocationsQuery(
        { userId: userId || "", businessName: (selectedShop as string) },
        { skip: !userId || !selectedShop }
    );

    const shopOptions = useMemo(() => namesData?.business_names.map((name) => ({
        label: name,
        value: name,
    })) || [], [namesData]);

    const locationOptions = useMemo(() => locationsData?.locations.map((loc) => ({
        label: loc.address_or_city,
        value: loc.google_maps_url,
    })) || [], [locationsData]);

    useEffect(() => {
        if (shopOptions.length > 0 && !selectedShop) {
            dispatch(setSelectedBusiness(shopOptions[0].value));
        }
    }, [shopOptions, selectedShop, dispatch]);

    // Automatically select the first location whenever the shop (and thus locationOptions) changes
    useEffect(() => {
        if (locationOptions.length > 0) {
            dispatch(setSelectedLocation(locationOptions[0].value));
            dispatch(setSelectedAddress(locationOptions[0].label));
        } else {
            dispatch(setSelectedLocation(""));
            dispatch(setSelectedAddress(""));
        }
    }, [locationOptions, dispatch]);

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
                "group fixed left-0 top-0 bottom-0 z-50 transition-all duration-300 ease-in-out border-r border-[#E2E8F0] bg-white text-gray-800 flex flex-col overflow-hidden",
                // On Desktop: Always 256px
                // On Small Device: 72px by default, 256px on toggle (as overlay)
                !isSmallScreen ? "w-64" : (isExpanded ? "w-64 shadow-2xl" : "w-[72px]")
            )}
        >
            {/* Header Section */}
            <div className="flex h-20 items-center px-4 overflow-hidden mb-2 shrink-0 justify-between">
                <div className={cn(
                    "flex items-center transition-all duration-300",
                    isSmallScreen && !isExpanded ? "w-0 opacity-0" : "w-auto opacity-100"
                )}>
                    <Link href="/dashboard">
                        <Image src="/logo.svg" alt="Logo" width={150} height={50} priority />
                    </Link>
                </div>

                {isSmallScreen && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center justify-center size-10 rounded-xl text-gray-500 hover:bg-gray-100 transition-all border border-gray-100 shadow-sm"
                    >
                        {isExpanded ? <X size={20} /> : <Menu size={20} />}
                    </button>
                )}

                {!isSmallScreen && (
                    <div className="flex items-center justify-center size-10">
                        {/* Placeholder to match spacing if needed, or just leave it */}
                    </div>
                )}
            </div>

            {/* Collapsed Logo (only when small screen and not expanded) */}
            {isSmallScreen && !isExpanded && (
                <div className="absolute top-5 left-4 z-10 pointer-events-none transition-all duration-300">
                    <Link href="/dashboard">
                        <Image src="/short-logo.svg" alt="Logo" width={40} height={40} priority />
                    </Link>
                </div>
            )}

            {/* Context Selectors (Mocked) */}
            <div className={cn(
                "relative z-20 px-4 mb-2 space-y-3 transition-all duration-300 shrink-0",
                isSmallScreen && !isExpanded ? "h-0 opacity-0 pointer-events-none overflow-hidden" : "h-auto opacity-100 overflow-visible"
            )}>
                <StylishDropdown
                    options={shopOptions}
                    value={selectedShop || ""}
                    onChange={(val) => dispatch(setSelectedBusiness(val as string))}
                    icon={<Store className="size-4 shrink-0" />}
                    className="h-10"
                />
                <StylishDropdown
                    options={locationOptions}
                    value={selectedLocation || ""}
                    onChange={(val) => {
                        dispatch(setSelectedLocation(val as string));
                        const selectedOption = locationOptions.find(opt => opt.value === val);
                        if (selectedOption) {
                            dispatch(setSelectedAddress(selectedOption.label));
                        }
                    }}
                    icon={<MapPin className="size-4 shrink-0" />}
                    className="h-10"
                />
            </div>

            {/* Divider */}
            <div className={cn(
                "mx-4 my-2 h-px bg-gray-100 shrink-0",
                isSmallScreen && !isExpanded ? "opacity-0" : "opacity-100"
            )} />

            {/* Navigation Items */}
            <nav className="flex-1 min-h-0 px-3 space-y-1.5 overflow-x-hidden overflow-y-auto custom-scrollbar">
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
                                isSmallScreen && !isExpanded ? "opacity-0" : "opacity-100"
                            )}>
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </nav>

            <div className="mt-auto border-t border-gray-100 bg-gray-50/50 p-4 shrink-0">
                <button 
                    onClick={() => logout()}
                    className={cn(
                        "w-full flex items-center h-11 rounded-xl transition-all duration-200 cursor-pointer text-red-500 hover:bg-red-50 hover:text-red-600",
                        isSmallScreen && !isExpanded ? "justify-center" : "px-3"
                    )}
                >
                    <div className="flex items-center justify-center w-11 h-11 flex-shrink-0">
                        <LogOut className="size-5" />
                    </div>
                    <span className={cn(
                        "ml-1 text-sm font-medium transition-all duration-300 opacity-0 w-0 overflow-hidden whitespace-nowrap",
                        (!isSmallScreen || isExpanded) && "opacity-100 w-auto ml-1"
                    )}>
                        Logout
                    </span>
                </button>
            </div>
        </aside>
    );
}
