"use client";

import React from "react";
import { X, CreditCard, Calendar, User, Mail, Shield, CheckCircle2 } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface SubscriptionDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    subscription: any;
}

export default function SubscriptionDetailsModal({ isOpen, onClose, subscription }: SubscriptionDetailsModalProps) {
    if (!isOpen || !subscription) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 transition-opacity">
            <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between p-6 bg-[#F8FAFC]">
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center">
                            <Shield className="size-6 text-blue-600" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-[#0F172A]">{subscription.plan} Plan</h2>
                            <p className="text-sm text-gray-500">Subscription details for user</p>
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
                    {/* User Info */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                                <User className="size-3" /> Customer
                            </p>
                            <p className="text-sm font-bold text-[#0F172A]">{subscription.name}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                                <Mail className="size-3" /> Email
                            </p>
                            <p className="text-sm font-medium text-gray-600 truncate">{subscription.email}</p>
                        </div>
                    </div>

                    <div className="h-px bg-gray-100" />

                    {/* Subscription Info */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                                <CreditCard className="size-3" /> Amount
                            </p>
                            <p className="text-lg font-black text-[#0F172A]">{subscription.amount}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                                <Calendar className="size-3" /> Billing Cycle
                            </p>
                            <p className="text-sm font-bold text-[#0F172A] capitalize">{subscription.cycle}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Status</p>
                            <span className={cn(
                                "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold",
                                subscription.status === "Active" && "bg-green-50 text-green-700",
                                subscription.status === "Trial" && "bg-blue-50 text-blue-700",
                                subscription.status === "Past due" && "bg-red-50 text-red-700"
                            )}>
                                {subscription.status}
                            </span>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                                <Calendar className="size-3" /> Next Billing
                            </p>
                            <p className="text-sm font-bold text-[#0F172A]">{subscription.nextBilling}</p>
                        </div>
                    </div>

                    {/* Features/Highlights */}
                    <div className="rounded-xl border border-blue-50 bg-blue-50/30 p-4">
                        <h4 className="text-xs font-bold text-[#0F172A] uppercase mb-3 flex items-center gap-2">
                            <CheckCircle2 className="size-3.5 text-blue-600" /> Plan Features
                        </h4>
                        <ul className="grid grid-cols-1 gap-2">
                            {["Full Analytics Dashboard", "Unlimited Business Locations", "Priority Support 24/7", "Custom Brand Reports"].map((feature, i) => (
                                <li key={i} className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                                    <div className="size-1 rounded-full bg-blue-600" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Footer */}
                {/* <div className="p-6 border-t border-gray-100 flex gap-4 bg-gray-50/50">
                    <button
                        onClick={onClose}
                        className="flex-1 rounded-xl border border-gray-200 bg-white py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
                    >
                        Close Details
                    </button>
                    <button className="flex-1 rounded-xl bg-blue-600 py-3 text-sm font-bold text-white hover:bg-blue-700 transition-colors shadow-sm shadow-blue-100">
                        Manage Plan
                    </button>
                </div> */}
            </div>
        </div>
    );
}
