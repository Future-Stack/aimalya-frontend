"use client";

import React, { useState } from "react";
import {
    Globe,
    Users,
    Smartphone,
    Bell,
    AlertTriangle,
    Save,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export default function SystemSettings() {
    const [settings, setSettings] = useState({
        siteName: "ReviewIQ",
        siteUrl: "https://reviewiq.com",
        supportEmail: "support@reviewiq.com",
        allowSignups: true,
        requireVerification: true,
        trialDuration: 14,
        maxBusinesses: 5,
        maxLocations: 25,
        emailNotifications: true,
        slackWebhook: ""
    });

    const toggleSetting = (key: keyof typeof settings) => {
        setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleInputChange = (key: keyof typeof settings, value: string | number) => {
        setSettings(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div className="space-y-8 pb-12">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-[#0F172A]">System Settings</h1>
                <p className="text-gray-500">Configure platform-wide settings</p>
            </div>

            {/* General Settings */}
            <section className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 border-b border-[#F1F5F9] pb-4">
                    <Globe className="size-5 text-blue-600" />
                    <h3 className="text-lg font-bold text-[#0F172A]">General</h3>
                </div>
                <div className="mt-6 space-y-4">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase">Site Name</label>
                        <input
                            type="text"
                            value={settings.siteName}
                            onChange={(e) => handleInputChange('siteName', e.target.value)}
                            className="w-full rounded-lg border border-[#E2E8F0] bg-white p-2.5 text-sm text-[#0F172A] focus:border-[#3B82F6] focus:outline-none focus:ring-1 focus:ring-[#3B82F6]"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase">Site URL</label>
                        <input
                            type="text"
                            value={settings.siteUrl}
                            onChange={(e) => handleInputChange('siteUrl', e.target.value)}
                            className="w-full rounded-lg border border-[#E2E8F0] bg-white p-2.5 text-sm text-[#0F172A] focus:border-[#3B82F6] focus:outline-none focus:ring-1 focus:ring-[#3B82F6]"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase">Support Email</label>
                        <input
                            type="email"
                            value={settings.supportEmail}
                            onChange={(e) => handleInputChange('supportEmail', e.target.value)}
                            className="w-full rounded-lg border border-[#E2E8F0] bg-white p-2.5 text-sm text-[#0F172A] focus:border-[#3B82F6] focus:outline-none focus:ring-1 focus:ring-[#3B82F6]"
                        />
                    </div>
                </div>
            </section>

            {/* User Management */}
            <section className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 border-b border-[#F1F5F9] pb-4">
                    <Users className="size-5 text-blue-600" />
                    <h3 className="text-lg font-bold text-[#0F172A]">User Management</h3>
                </div>
                <div className="mt-6 space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-bold text-[#0F172A]">Allow New Signups</p>
                            <p className="text-xs text-gray-500">Enable new user registrations</p>
                        </div>
                        <button
                            onClick={() => toggleSetting('allowSignups')}
                            className={cn(
                                "h-6 w-11 rounded-full p-1 transition-colors duration-200 ease-in-out cursor-pointer",
                                settings.allowSignups ? "bg-blue-600" : "bg-gray-200"
                            )}
                        >
                            <div className={cn(
                                "size-4 rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out",
                                settings.allowSignups ? "translate-x-5" : "translate-x-0"
                            )} />
                        </button>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-bold text-[#0F172A]">Require Email Verification</p>
                            <p className="text-xs text-gray-500">Users must verify email before accessing platform</p>
                        </div>
                        <button
                            onClick={() => toggleSetting('requireVerification')}
                            className={cn(
                                "h-6 w-11 rounded-full p-1 transition-colors duration-200 ease-in-out cursor-pointer",
                                settings.requireVerification ? "bg-blue-600" : "bg-gray-200"
                            )}
                        >
                            <div className={cn(
                                "size-4 rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out",
                                settings.requireVerification ? "translate-x-5" : "translate-x-0"
                            )} />
                        </button>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase">Free Trial Duration (Days)</label>
                        <input
                            type="number"
                            value={settings.trialDuration}
                            onChange={(e) => handleInputChange('trialDuration', parseInt(e.target.value))}
                            className="w-full rounded-lg border border-[#E2E8F0] bg-white p-2.5 text-sm text-[#0F172A] focus:border-[#3B82F6] focus:outline-none focus:ring-1 focus:ring-[#3B82F6]"
                        />
                    </div>
                </div>
            </section>

            {/* Platform Limits */}
            <section className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 border-b border-[#F1F5F9] pb-4">
                    <Smartphone className="size-5 text-blue-600" />
                    <h3 className="text-lg font-bold text-[#0F172A]">Platform Limits</h3>
                </div>
                <div className="mt-6 space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-[#0F172A]">Max Businesses Per User</label>
                        <input
                            type="number"
                            value={settings.maxBusinesses}
                            onChange={(e) => handleInputChange('maxBusinesses', parseInt(e.target.value))}
                            className="w-full rounded-lg border border-[#E2E8F0] bg-white p-2.5 text-sm text-[#0F172A] focus:border-[#3B82F6] focus:outline-none focus:ring-1 focus:ring-[#3B82F6]"
                        />
                        <p className="text-[10px] text-gray-400 font-medium">For non-enterprise plans</p>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-[#0F172A]">Max Locations Per Business</label>
                        <input
                            type="number"
                            value={settings.maxLocations}
                            onChange={(e) => handleInputChange('maxLocations', parseInt(e.target.value))}
                            className="w-full rounded-lg border border-[#E2E8F0] bg-white p-2.5 text-sm text-[#0F172A] focus:border-[#3B82F6] focus:outline-none focus:ring-1 focus:ring-[#3B82F6]"
                        />
                        <p className="text-[10px] text-gray-400 font-medium">For non-enterprise plans</p>
                    </div>
                </div>
            </section>

            {/* Notifications */}
            <section className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 border-b border-[#F1F5F9] pb-4">
                    <Bell className="size-5 text-blue-600" />
                    <h3 className="text-lg font-bold text-[#0F172A]">Notifications</h3>
                </div>
                <div className="mt-6 space-y-6">
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-bold text-[#0F172A]">Email Notifications</p>
                                <p className="text-xs text-gray-500">Send automated email notifications</p>
                            </div>
                            <button
                                onClick={() => toggleSetting('emailNotifications')}
                                className={cn(
                                    "h-6 w-11 rounded-full p-1 transition-colors duration-200 ease-in-out cursor-pointer",
                                    settings.emailNotifications ? "bg-blue-600" : "bg-gray-200"
                                )}
                            >
                                <div className={cn(
                                    "size-4 rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out",
                                    settings.emailNotifications ? "translate-x-5" : "translate-x-0"
                                )} />
                            </button>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-400 uppercase">Slack Webhook URL</label>
                            <input
                                type="text"
                                value={settings.slackWebhook}
                                onChange={(e) => handleInputChange('slackWebhook', e.target.value)}
                                placeholder="https://hooks.slack.com/services/..."
                                className="w-full rounded-lg border border-[#E2E8F0] bg-white p-2.5 text-sm text-[#0F172A] focus:border-[#3B82F6] focus:outline-none focus:ring-1 focus:ring-[#3B82F6]"
                            />
                            <p className="text-[10px] text-gray-400 font-medium italic">Receive important alerts in Slack</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Danger Zone */}
            <section className="rounded-xl border border-red-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-red-600">Danger Zone</h3>
                <div className="mt-4 rounded-lg bg-red-50 p-4 border border-red-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-bold text-red-700">Maintenance Mode</p>
                            <p className="text-xs text-red-600 opacity-80">Disable platform access for all users</p>
                        </div>
                        <button className="rounded-lg bg-red-600 px-4 py-2 text-xs font-bold text-white hover:bg-red-700 transition-colors cursor-pointer">
                            Enable
                        </button>
                    </div>
                </div>
            </section>

            {/* Save Button */}
            <div className="flex justify-end">
                <button className="flex items-center gap-2 rounded-lg bg-[#3B82F6] px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-200 hover:bg-blue-600 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
                    <Save className="size-4" />
                    Save All Settings
                </button>
            </div>
        </div>
    );
}
 