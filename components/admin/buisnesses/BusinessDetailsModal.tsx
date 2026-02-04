"use client";

import React, { useState } from "react";
import {
    X,
    Building2,
    MapPin,
    Star,
    TrendingUp,
    MessageSquare,
    ChevronRight,
    Search
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface BusinessDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    business: any;
}

export default function BusinessDetailsModal({ isOpen, onClose, business }: BusinessDetailsModalProps) {
    const [activeTab, setActiveTab] = useState("Overview");

    if (!isOpen || !business) return null;

    const tabs = ["Overview", `Locations (${business.locations})`, "Analytics"];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 transition-opacity">
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-2xl bg-white shadow-2xl flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between p-6">
                    <div className="flex items-center gap-4">
                        <div className="h-16 w-16 overflow-hidden rounded-xl bg-gray-100">
                            <img
                                src={business.image}
                                alt={business.name}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h2 className="text-2xl font-bold text-[#0F172A]">{business.name}</h2>
                                <span className="rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-bold uppercase text-green-700">
                                    {business.status}
                                </span>
                            </div>
                            <p className="text-sm text-gray-500">{business.type}</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                        <X className="size-6" />
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 px-6 border-b border-gray-100">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab.startsWith("Overview") ? "Overview" : tab.startsWith("Locations") ? "Locations" : "Analytics")}
                            className={cn(
                                "pb-4 text-sm font-semibold transition-all relative cursor-pointer",
                                (activeTab === "Overview" && tab.startsWith("Overview")) ||
                                    (activeTab === "Locations" && tab.startsWith("Locations")) ||
                                    (activeTab === "Analytics" && tab.startsWith("Analytics"))
                                    ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600"
                                    : "text-gray-500 hover:text-gray-700"
                            )}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                    {activeTab === "Overview" && (
                        <>
                            {/* Quick Stats */}
                            <div className="grid grid-cols-4 gap-4">
                                <div className="rounded-xl bg-blue-50 p-4">
                                    <p className="text-[10px] font-bold text-blue-600 uppercase">Total Locations</p>
                                    <p className="mt-1 text-xl font-bold text-blue-900">{business.locations}</p>
                                </div>
                                <div className="rounded-xl bg-purple-50 p-4">
                                    <p className="text-[10px] font-bold text-purple-600 uppercase">Total Reviews</p>
                                    <p className="mt-1 text-xl font-bold text-purple-900">{business.reviews}</p>
                                </div>
                                <div className="rounded-xl bg-amber-50 p-4">
                                    <p className="text-[10px] font-bold text-amber-600 uppercase">Average Rating</p>
                                    <p className="mt-1 text-xl font-bold text-amber-900">{business.rating}</p>
                                </div>
                                <div className="rounded-xl bg-green-50 p-4">
                                    <p className="text-[10px] font-bold text-green-600 uppercase">Monthly Growth</p>
                                    <p className="mt-1 text-xl font-bold text-green-900">+12%</p>
                                </div>
                            </div>

                            {/* Business Information */}
                            <div className="rounded-xl border border-blue-50 bg-white p-6 shadow-sm">
                                <h3 className="text-lg font-bold text-[#0F172A] mb-4">Business Information</h3>
                                <div className="grid grid-cols-2 gap-y-6">
                                    <div>
                                        <p className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wider">Business Owner</p>
                                        <p className="text-sm font-bold text-[#0F172A]">{business.owner}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wider">Category</p>
                                        <p className="text-sm font-bold text-[#0F172A]">{business.type}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wider">Account Created</p>
                                        <p className="text-sm font-bold text-[#0F172A]">January 15, 2025</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wider">Last Active</p>
                                        <p className="text-sm font-bold text-[#0F172A]">2 hours ago</p>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Activity */}
                            <div className="rounded-xl border border-blue-50 bg-white p-6 shadow-sm">
                                <h3 className="text-lg font-bold text-[#0F172A] mb-4">Recent Activity</h3>
                                <div className="space-y-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="flex justify-between items-center py-2 border-b last:border-0 border-gray-50">
                                            <div>
                                                <p className="text-sm font-bold text-[#0F172A]">
                                                    {i % 2 === 0 ? "New location added" : "Monthly report generated"}
                                                </p>
                                                <p className="text-xs text-gray-400">All locations</p>
                                            </div>
                                            <p className="text-xs text-gray-400">2 hours ago</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}

                    {activeTab === "Locations" && (
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="rounded-xl border border-blue-50 bg-white p-6 shadow-sm">
                                    <div className="flex items-start justify-between mb-8">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                                                <MapPin className="size-5 text-blue-600" />
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-[#0F172A]">{business.name} - Downtown</h4>
                                                <p className="text-xs text-gray-500 font-medium mt-0.5">123 Main St, City, State 12345</p>
                                            </div>
                                        </div>
                                        <span className="rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-bold uppercase text-green-700">
                                            active
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4">
                                        <div>
                                            <p className="text-[10px] text-gray-400 uppercase font-bold mb-1 tracking-wider">Reviews</p>
                                            <p className="text-sm font-bold text-[#0F172A]">456</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-400 uppercase font-bold mb-1 tracking-wider">Rating</p>
                                            <div className="flex items-center gap-1.5">
                                                <Star className="size-3.5 text-amber-500 fill-amber-500" />
                                                <span className="text-sm font-bold text-[#0F172A]">4.6</span>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-400 uppercase font-bold mb-1 tracking-wider">Action</p>
                                            <button className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer">
                                                View Details
                                                <ChevronRight className="size-3.5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === "Analytics" && (
                        <div className="space-y-6">
                            {/* Sentiment Analysis */}
                            <div className="rounded-xl border border-blue-50 bg-white p-6 shadow-sm">
                                <h3 className="text-lg font-bold text-[#0F172A] mb-6">Sentiment Analysis (Last 30 Days)</h3>
                                <div className="grid grid-cols-3 gap-8 mb-4">
                                    <div>
                                        <p className="text-2xl font-bold text-green-600">68%</p>
                                        <p className="text-xs text-gray-400 font-medium">Positive</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-amber-500">24%</p>
                                        <p className="text-xs text-gray-400 font-medium">Neutral</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-red-500">8%</p>
                                        <p className="text-xs text-gray-400 font-medium">Negative</p>
                                    </div>
                                </div>
                                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden flex">
                                    <div className="h-full bg-green-500" style={{ width: '68%' }}></div>
                                    <div className="h-full bg-amber-500" style={{ width: '24%' }}></div>
                                    <div className="h-full bg-red-500" style={{ width: '8%' }}></div>
                                </div>
                            </div>

                            {/* Key Performance Metrics */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-[#0F172A]">5 Key Performance Metrics</h3>
                                <div className="space-y-6">
                                    {[
                                        { label: "Signups", value: "250", color: "bg-blue-600", width: "100%" },
                                        { label: "Completed Onboarding", value: "225 (90%)", color: "bg-purple-600", width: "90%" },
                                        { label: "Started Trial", value: "198 (79%)", color: "bg-green-500", width: "79%" },
                                        { label: "Converted to Paid", value: "167 (67%)", color: "bg-amber-600", width: "67%" },
                                    ].map((metric) => (
                                        <div key={metric.label}>
                                            <div className="flex justify-between items-center mb-2">
                                                <p className="text-xs font-bold text-[#0F172A]">{metric.label}</p>
                                                <p className="text-xs text-gray-400 font-medium">{metric.value}</p>
                                            </div>
                                            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                                <div className={cn("h-full rounded-full", metric.color)} style={{ width: metric.width }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Review Response Rate */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-[#0F172A]">Review Response Rate</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="rounded-xl bg-blue-50 p-4">
                                        <p className="text-[10px] font-bold text-blue-600 uppercase">Reviews with Response</p>
                                        <p className="mt-1 text-2xl font-bold text-blue-900">842</p>
                                    </div>
                                    <div className="rounded-xl bg-gray-50 p-4">
                                        <p className="text-[10px] font-bold text-gray-400 uppercase font-bold">No Response</p>
                                        <p className="mt-1 text-2xl font-bold text-[#0F172A]">392</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <p className="text-xs font-bold text-[#0F172A]">Response Rate</p>
                                        <p className="text-xs text-[#0F172A] font-bold">68%</p>
                                    </div>
                                    <div className="h-2 w-full bg-blue-50 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-600 rounded-full" style={{ width: '68%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer Actions */}
                <div className="flex gap-4 p-6 border-t border-gray-100">
                    <button className="rounded-lg border border-red-500 px-6 py-2.5 text-sm font-bold text-red-600 hover:bg-red-50 transition-colors cursor-pointer">
                        Suspend Account
                    </button>
                    <button
                        onClick={onClose}
                        className="rounded-lg border border-gray-200 px-6 py-2.5 text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                        Close
                    </button>
                </div>
            </div>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #E2E8F0;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #CBD5E1;
                }
            `}</style>
        </div>
    );
}
