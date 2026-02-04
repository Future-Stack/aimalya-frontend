"use client";

import React from "react";
import { X, User, Mail, Shield, Building2, MapPin, Calendar, Clock } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface UserDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    user: any;
}

export default function UserDetailsModal({ isOpen, onClose, user }: UserDetailsModalProps) {
    if (!isOpen || !user) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 transition-opacity animate-in fade-in duration-200">
            <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl flex flex-col animate-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="flex items-start justify-between p-6 bg-[#F8FAFC] border-b border-gray-100">
                    <div className="flex items-center gap-4">
                        <div className="size-14 rounded-full bg-blue-600 flex items-center justify-center border-4 border-white shadow-sm overflow-hidden">
                            <img
                                src={`https://ui-avatars.com/api/?name=${user.name}&background=2563eb&color=fff&bold=true`}
                                alt={user.name}
                                className="size-full object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-[#0F172A]">{user.name}</h2>
                            <p className="text-sm text-gray-500 flex items-center gap-1.5">
                                <Mail className="size-3.5" /> {user.email}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                        <X className="size-6" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    {/* Status & Plan Section */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-xl border border-gray-100 p-4 space-y-1">
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Account Status</p>
                            <span className={cn(
                                "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider",
                                user.status === "Active" && "bg-green-50 text-green-700",
                                user.status === "Trial" && "bg-blue-50 text-blue-700",
                                user.status === "Suspended" && "bg-red-50 text-red-700"
                            )}>
                                <span className={cn(
                                    "size-1.5 rounded-full",
                                    user.status === "Active" && "bg-green-500",
                                    user.status === "Trial" && "bg-blue-500",
                                    user.status === "Suspended" && "bg-red-500"
                                )} />
                                {user.status}
                            </span>
                        </div>
                        <div className="rounded-xl border border-gray-100 p-4 space-y-1">
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Current Plan</p>
                            <div className="flex items-center gap-2">
                                <Shield className="size-4 text-amber-500" />
                                <p className="text-sm font-bold text-[#0F172A]">{user.plan}</p>
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                                <Building2 className="size-3.5 text-blue-500" /> Businesses
                            </p>
                            <p className="text-sm font-bold text-[#0F172A]">{user.businesses}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                                <MapPin className="size-3.5 text-purple-500" /> Locations
                            </p>
                            <p className="text-sm font-bold text-[#0F172A]">{user.locations}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                                <Calendar className="size-3.5 text-amber-500" /> Next Billing
                            </p>
                            <p className="text-sm font-bold text-[#0F172A]">Feb 15, 2026</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                                <Clock className="size-3.5 text-green-500" /> Last Active
                            </p>
                            <p className="text-sm font-bold text-[#0F172A]">{user.lastActive}</p>
                        </div>
                    </div>

                    <div className="h-px bg-gray-100" />

                    {/* Summary Card */}
                    <div className="rounded-xl bg-blue-50/50 p-4 border border-blue-50">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-[10px] font-bold text-blue-600 uppercase">Monthly Contribution (MRR)</p>
                                <p className="text-lg font-black text-[#0F172A] mt-1">{user.mrr}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] font-bold text-gray-400 uppercase">Total Lifetime Value</p>
                                <p className="text-sm font-black text-green-600">$1,240</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-100 bg-[#F8FAFC]">
                    <button
                        onClick={onClose}
                        className="w-full rounded-xl bg-[#0F172A] py-3.5 text-sm font-bold text-white hover:bg-black transition-all shadow-lg shadow-gray-200 cursor-pointer"
                    >
                        Close Details
                    </button>
                </div>
            </div>
        </div>
    );
}
