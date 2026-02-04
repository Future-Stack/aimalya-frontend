"use client";

import React, { useState } from "react";
import {
    Building2,
    CreditCard,
    Bell,
    User,
    Puzzle,
    Shield,
    X,
    Lock,
    AlertTriangle,
    Eye,
    EyeOff,
    ChevronDown,
    Trash2,
    Save,
    Plus,
    MapPin,
    Globe,
    Phone,
    Check,
    AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import StylishDropdown from "@/components/ui/StylishDropdown";
import Image from "next/image";

// Types
type Tab = "account" | "business" | "integrations" | "notifications" | "billing";

// ----------------------------------------------------------------------
// MODAL COMPONENTS
// ----------------------------------------------------------------------

const ChangePasswordModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-900">Change Password</h3>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
                        <X className="size-5 text-gray-500" />
                    </button>
                </div>
                <div className="p-6 space-y-4">
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Current Password</label>
                        <div className="relative">
                            <input
                                type={showCurrent ? "text" : "password"}
                                placeholder="••••••••"
                                className="w-full px-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all pr-12"
                            />
                            <button
                                type="button"
                                onClick={() => setShowCurrent(!showCurrent)}
                                className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                {showCurrent ? <EyeOff className="size-4.5" /> : <Eye className="size-4.5" />}
                            </button>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">New Password</label>
                        <div className="relative">
                            <input
                                type={showNew ? "text" : "password"}
                                placeholder="••••••••"
                                className="w-full px-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all pr-12"
                            />
                            <button
                                type="button"
                                onClick={() => setShowNew(!showNew)}
                                className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                {showNew ? <EyeOff className="size-4.5" /> : <Eye className="size-4.5" />}
                            </button>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Confirm New Password</label>
                        <div className="relative">
                            <input
                                type={showConfirm ? "text" : "password"}
                                placeholder="••••••••"
                                className="w-full px-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all pr-12"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirm(!showConfirm)}
                                className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                {showConfirm ? <EyeOff className="size-4.5" /> : <Eye className="size-4.5" />}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-6 bg-gray-50 flex gap-3">
                    <button
                        onClick={onClose}
                        className="cursor-pointer flex-1 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onClose}
                        className="cursor-pointer flex-1 px-4 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
                    >
                        Update Password
                    </button>
                </div>
            </div>
        </div>
    );
};

const DeleteAccountModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const [confirmText, setConfirmText] = useState("");
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="size-10 bg-red-100 rounded-full flex items-center justify-center">
                            <AlertTriangle className="size-5 text-red-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Delete Account</h3>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
                        <X className="size-5 text-gray-500" />
                    </button>
                </div>
                <div className="p-6 space-y-4">
                    <p className="text-sm text-gray-600 leading-relaxed">
                        This action is <span className="font-bold text-red-600">permanent</span> and cannot be undone. All your data, businesses, and reports will be deleted immediately.
                    </p>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Type <span className="font-bold">DELETE</span> to confirm</label>
                        <input
                            type="text"
                            value={confirmText}
                            onChange={(e) => setConfirmText(e.target.value)}
                            placeholder="DELETE"
                            className="w-full px-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-xl focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
                        />
                    </div>
                </div>
                <div className="p-6 bg-red-50 flex gap-3">
                    <button
                        onClick={onClose}
                        className="cursor-pointer flex-1 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        disabled={confirmText !== "DELETE"}
                        onClick={onClose}
                        className="cursor-pointer flex-1 px-4 py-2.5 text-sm font-bold text-white bg-red-600 rounded-xl hover:bg-red-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Delete Permanently
                    </button>
                </div>
            </div>
        </div>
    );
};

const ConfirmSaveModal = ({ isOpen, onClose, onConfirm }: { isOpen: boolean, onClose: () => void, onConfirm: () => void }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
                <div className="p-8 text-center space-y-6">
                    <div className="size-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                        <Save className="size-8 text-blue-600" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900">Save Changes?</h3>
                        <p className="text-sm text-gray-500 mt-2 leading-relaxed">Are you sure you want to save these updates to your settings?</p>
                    </div>
                </div>
                <div className="p-6 bg-gray-50 flex gap-3">
                    <button
                        onClick={onClose}
                        className="cursor-pointer flex-1 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            onConfirm();
                            onClose();
                        }}
                        className="cursor-pointer flex-1 px-4 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

// ----------------------------------------------------------------------
// SUB-COMPONENTS
// ----------------------------------------------------------------------

interface SettingsProps {
    onOpenPassword: () => void;
    onOpenDelete: () => void;
    onOpenSave: (handler: () => void) => void;
}

// 1. Account Settings
const AccountSettings = ({ onOpenPassword, onOpenDelete, onOpenSave }: SettingsProps) => {
    const handleSave = () => {
        console.log("Account settings saved!");
    };

    return (
        <div className="space-y-8 animate-fadeIn">
            <div>
                <h2 className="text-xl font-bold text-gray-900">Account Settings</h2>
                <div className="bg-white p-6 rounded-2xl border border-gray-200 mt-4 space-y-6">
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            defaultValue="xcxxz"
                            className="w-full px-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            defaultValue="czxcc@gmail.com"
                            className="w-full px-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Password</label>
                        <div className="flex gap-3">
                            <input
                                type="password"
                                defaultValue="........"
                                disabled
                                className="w-full px-4 py-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-200 rounded-xl"
                            />
                            <button
                                onClick={onOpenPassword}
                                className="cursor-pointer px-5 py-2.5 text-sm font-bold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors whitespace-nowrap"
                            >
                                Change Password
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-sm font-bold text-red-500 mb-4">Danger Zone</h3>
                <button
                    onClick={onOpenDelete}
                    className="cursor-pointer px-5 py-2.5 text-sm font-bold text-white bg-red-500 rounded-xl hover:bg-red-600 transition-colors shadow-sm"
                >
                    Delete Account
                </button>
            </div>

            <div className="flex justify-end pt-4">
                <button
                    onClick={() => onOpenSave(handleSave)}
                    className="cursor-pointer flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all"
                >
                    <Save className="size-4" />
                    Save Changes
                </button>
            </div>
        </div>
    );
};

// 2. Business Settings
const BusinessSettings = ({ onOpenSave }: Pick<SettingsProps, "onOpenSave">) => {
    const [businessName, setBusinessName] = useState("Softvence Shop");
    const [category, setCategory] = useState("Cafe");
    const [locations, setLocations] = useState(["San Francisco, CA"]);
    const [phone, setPhone] = useState("+1 (555) 123-4567");
    const [website, setWebsite] = useState("https://coffeehaven.com");

    const categories = [
        { label: "Cafe", value: "Cafe" },
        { label: "Restaurant", value: "Restaurant" },
        { label: "Retail", value: "Retail" },
        { label: "Services", value: "Services" },
        { label: "Beauty & Spa", value: "Beauty & Spa" },
        { label: "Health & Medical", value: "Health & Medical" },
        { label: "Other", value: "Other" }
    ];

    const handleAddLocation = () => {
        setLocations([...locations, ""]);
    };

    const handleLocationChange = (index: number, value: string) => {
        const newLocations = [...locations];
        newLocations[index] = value;
        setLocations(newLocations);
    };

    const handleRemoveLocation = (index: number) => {
        if (locations.length > 1) {
            setLocations(locations.filter((_, i) => i !== index));
        }
    };

    const handleSave = () => {
        console.log("Business settings saved:", { businessName, category, locations, phone, website });
    };

    return (
        <div className="space-y-8 animate-fadeIn">
            <div>
                <h2 className="text-xl font-bold text-gray-900">Business Settings</h2>
                <div className="bg-white p-6 rounded-2xl border border-gray-200 mt-4 space-y-6">
                    {/* Business Name */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Business Name</label>
                        <input
                            type="text"
                            value={businessName}
                            onChange={(e) => setBusinessName(e.target.value)}
                            className="w-full px-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                        />
                    </div>

                    {/* Business Category Dropdown */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Business Category</label>
                        <StylishDropdown
                            options={categories}
                            value={category}
                            onChange={(val) => setCategory(val as string)}
                            placeholder="Select Category"
                            icon={<Building2 className="size-4" />}
                        />
                    </div>

                    {/* Locations Section */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-gray-700">Locations</label>
                            <button
                                onClick={handleAddLocation}
                                className="cursor-pointer flex items-center gap-1.5 text-xs font-bold text-white bg-blue-600 px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors"
                            >
                                <Plus className="size-3.5" />
                                Add new
                            </button>
                        </div>
                        <div className="space-y-3">
                            {locations.map((loc, index) => (
                                <div key={index} className="flex gap-2">
                                    <div className="relative flex-1">
                                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                                        <input
                                            type="text"
                                            value={loc}
                                            onChange={(e) => handleLocationChange(index, e.target.value)}
                                            placeholder="Enter address..."
                                            className="w-full pl-11 pr-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                                        />
                                    </div>
                                    {locations.length > 1 && (
                                        <button
                                            onClick={() => handleRemoveLocation(index)}
                                            className="cursor-pointer p-2.5 text-red-500 hover:bg-red-50 rounded-xl transition-colors border border-gray-100 shadow-sm"
                                        >
                                            <Trash2 className="size-5" />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                        />
                    </div>

                    {/* Website */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Website</label>
                        <input
                            type="url"
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                            className="w-full px-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-end pt-4">
                <button
                    onClick={() => onOpenSave(handleSave)}
                    className="cursor-pointer flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all"
                >
                    <Save className="size-4" />
                    Save Changes
                </button>
            </div>
        </div>
    );
};

// 3. Integrations Settings
const IntegrationsSettings = () => {
    return (
        <div className="space-y-6 animate-fadeIn">
            <h2 className="text-xl font-bold text-gray-900">Integrations</h2>

            {/* Google */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                    <div className="size-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                        {/* Placeholder for Google Logo */}
                        <Image src="/google_icon.svg" alt="Google" width={24} height={24} />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-gray-900">Google Business Profile</h3>
                        <p className="text-xs text-gray-500 mt-1">Connected to: Softvence Shop</p>
                        <div className="flex items-center gap-1.5 mt-2">
                            <span className="size-1.5 bg-green-500 rounded-full" />
                            <span className="text-xs font-medium text-green-600">Active</span>
                        </div>

                        {/* <div className="mt-4">
                            <label className="text-xs font-medium text-gray-500">Sync Frequency</label>
                            <div className="mt-1 w-32 h-8 border border-gray-200 rounded-lg bg-gray-50"></div>
                        </div> */}
                    </div>
                </div>
                <button className="cursor-pointer px-4 py-2 text-xs font-medium text-red-600 bg-white border border-gray-200 rounded-lg hover:bg-red-50 transition-colors">
                    Disconnect
                </button>
            </div>

            {/* Yelp */}
            {/* <div className="bg-white p-5 rounded-2xl border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                    <div className="size-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 text-gray-400">
                        <Shield className="size-5" />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-gray-900">Yelp</h3>
                        <p className="text-xs text-gray-500 mt-1">Expand your review analysis to Yelp</p>
                        <p className="text-xs text-gray-400 mt-2 font-medium">Coming soon</p>
                    </div>
                </div>
                <button disabled className="px-4 py-2 text-xs font-medium text-gray-400 bg-gray-50 border border-gray-200 rounded-lg cursor-not-allowed">
                    Connect
                </button>
            </div> */}

            {/* TripAdvisor */}
            {/* <div className="bg-white p-5 rounded-2xl border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                    <div className="size-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 text-gray-400">
                        <Shield className="size-5" />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-gray-900">TripAdvisor</h3>
                        <p className="text-xs text-gray-500 mt-1">Include TripAdvisor reviews in your analysis</p>
                        <p className="text-xs text-gray-400 mt-2 font-medium">Coming soon</p>
                    </div>
                </div>
                <button disabled className="px-4 py-2 text-xs font-medium text-gray-400 bg-gray-50 border border-gray-200 rounded-lg cursor-not-allowed">
                    Connect
                </button>
            </div> */}
        </div>
    );
};

// 4. Notifications Settings
// Helper for notification items
const NotificationItem = ({
    title,
    description,
    isActive,
    onToggle
}: {
    title: string;
    description: string;
    isActive: boolean;
    onToggle: () => void;
}) => (
    <div
        onClick={onToggle}
        className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50/50 transition-colors cursor-pointer flex items-center justify-between"
    >
        <div className="flex-1 pr-4">
            <h4 className="text-sm font-bold text-gray-900">{title}</h4>
            <p className="text-xs text-gray-500 mt-1">{description}</p>
        </div>
        <div className={cn(
            "relative w-11 h-6 transition-colors duration-200 ease-in-out bg-gray-200 rounded-full cursor-pointer",
            isActive ? "bg-blue-600" : "bg-gray-200"
        )}>
            <div className={cn(
                "absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out shadow-sm",
                isActive ? "translate-x-5" : "translate-x-0"
            )} />
        </div>
    </div>
);

const NotificationSettings = ({ onOpenSave }: Pick<SettingsProps, "onOpenSave">) => {
    const [preferences, setPreferences] = useState({
        monthlyReports: true,
        importantAlerts: true,
        weeklySummary: false,
        newReview: true,
        ratingDrop: true,
        reportReady: true,
    });

    const handleToggle = (key: keyof typeof preferences) => {
        setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleSave = () => {
        console.log("Notification preferences saved:", preferences);
    };

    return (
        <div className="space-y-8 animate-fadeIn">
            <div>
                <h2 className="text-xl font-bold text-gray-900">Notification Settings</h2>

                <div className="mt-6">
                    <h3 className="text-sm font-bold text-gray-900 mb-4">Email Notifications</h3>
                    <div className="space-y-3">
                        <NotificationItem
                            title="Monthly Reports"
                            description="Receive monthly business intelligence reports"
                            isActive={preferences.monthlyReports}
                            onToggle={() => handleToggle("monthlyReports")}
                        />
                        <NotificationItem
                            title="Important Alerts"
                            description="Rating drops, negative review spikes"
                            isActive={preferences.importantAlerts}
                            onToggle={() => handleToggle("importantAlerts")}
                        />
                        <NotificationItem
                            title="Weekly Summary"
                            description="Quick overview of the week's performance"
                            isActive={preferences.weeklySummary}
                            onToggle={() => handleToggle("weeklySummary")}
                        />
                    </div>
                </div>

                <div className="mt-8">
                    <h3 className="text-sm font-bold text-gray-900 mb-4">In-App Notifications</h3>
                    <div className="space-y-3">
                        <NotificationItem
                            title="New Negative Review"
                            description="Get notified immediately of 1-2 star reviews"
                            isActive={preferences.newReview}
                            onToggle={() => handleToggle("newReview")}
                        />
                        <NotificationItem
                            title="Rating Drop"
                            description="Alert when your overall rating decreases"
                            isActive={preferences.ratingDrop}
                            onToggle={() => handleToggle("ratingDrop")}
                        />
                        <NotificationItem
                            title="Monthly Report Ready"
                            description="Notify when new monthly report is generated"
                            isActive={preferences.reportReady}
                            onToggle={() => handleToggle("reportReady")}
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-end pt-4">
                <button
                    onClick={() => onOpenSave(handleSave)}
                    className="cursor-pointer flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all"
                >
                    <Save className="size-4" />
                    Save Preferences
                </button>
            </div>
        </div>
    );
};


// 5. Billing Settings
const BillingSettings = () => {
    return (
        <div className="space-y-8 animate-fadeIn">
            <div>
                <h2 className="text-xl font-bold text-gray-900">Billing & Subscription</h2>

                <h3 className="text-sm font-bold text-gray-900 mt-6 mb-3">Current Plan</h3>
                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 relative overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-xl font-bold text-gray-900">Professional</span>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">Up to 5 locations, unlimited reviews</p>
                            <div className="flex items-center gap-3 mt-4">
                                <button className="cursor-pointer px-4 py-2 text-sm font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                                    Upgrade Plan
                                </button>
                                <button className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                    Change Plan
                                </button>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-3xl font-bold text-gray-900">$149</div>
                            <div className="text-xs text-gray-500">per month</div>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h3 className="text-sm font-bold text-gray-900 mb-4">Current Usage</h3>

                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between text-xs font-medium text-gray-600 mb-2">
                                <span>Locations</span>
                                <span>1 / 5</span>
                            </div>
                            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-600 w-1/5 rounded-full" />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between text-xs font-medium text-gray-600 mb-2">
                                <span>Reviews This Month</span>
                                <span>234 / Unlimited</span>
                            </div>
                            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 w-full rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h3 className="text-sm font-bold text-gray-900 mb-4">Payment Method</h3>
                    <div className="p-4 border border-gray-200 rounded-xl flex items-center justify-between bg-white">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-gray-500 border border-gray-300">
                                <CreditCard className="size-4" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-900">•••• •••• •••• 4242</p>
                                <p className="text-xs text-gray-500">Expires 12/2026</p>
                            </div>
                        </div>
                        <button className="cursor-pointer px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
                            Update
                        </button>
                    </div>
                </div>

                <div className="mt-8">
                    <h3 className="text-sm font-bold text-gray-900 mb-4">Billing History</h3>
                    <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100 bg-white">
                        {[
                            { date: "Jan 1, 2026", amount: "$149.00", status: "Paid" },
                            { date: "Dec 1, 2025", amount: "$149.00", status: "Paid" },
                            { date: "Nov 1, 2025", amount: "$149.00", status: "Paid" }
                        ].map((invoice, i) => (
                            <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                <div className="flex items-center gap-3">
                                    <span className="text-sm text-gray-600 font-medium w-24">{invoice.date}</span>
                                    <span className="text-sm font-bold text-gray-900">{invoice.amount}</span>
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 uppercase tracking-wide">
                                        {invoice.status}
                                    </span>
                                </div>
                                <button className="cursor-pointer text-xs font-medium text-blue-600 hover:text-blue-700 hover:underline">
                                    Download
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


// ----------------------------------------------------------------------
// MAIN PAGE
// ----------------------------------------------------------------------

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState<Tab>("account");

    // Modal States
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
    const [onConfirmSave, setOnConfirmSave] = useState<() => void>(() => () => { });

    const handleOpenSaveModal = (handler: () => void) => {
        setOnConfirmSave(() => handler);
        setIsSaveModalOpen(true);
    };

    const tabs = [
        { id: "account", label: "Account", icon: User },
        { id: "business", label: "Business", icon: Building2 },
        { id: "integrations", label: "Integrations", icon: Puzzle },
        { id: "notifications", label: "Notifications", icon: Bell },
        { id: "billing", label: "Billing", icon: CreditCard },
    ];

    const renderContent = () => {
        const commonProps = {
            onOpenSave: handleOpenSaveModal,
        };

        switch (activeTab) {
            case "account":
                return (
                    <AccountSettings
                        {...commonProps}
                        onOpenPassword={() => setIsPasswordModalOpen(true)}
                        onOpenDelete={() => setIsDeleteModalOpen(true)}
                    />
                );
            case "business":
                return <BusinessSettings {...commonProps} />;
            case "integrations":
                return <IntegrationsSettings />;
            case "notifications":
                return <NotificationSettings {...commonProps} />;
            case "billing":
                return <BillingSettings />;
            default:
                return null;
        }
    };

    return (
        <div className="space-y-6 pb-8 relative">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
                <p className="text-sm text-gray-500 mt-1">Manage your account and preferences</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Sidebar */}
                <div className="w-full md:w-64 shrink-0 space-y-1">
                    <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm sticky top-6">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as Tab)}
                                    className={cn(
                                        "cursor-pointer w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 mb-3",
                                        isActive
                                            ? "bg-blue-600 text-white shadow-md shadow-blue-600/20 translate-x-1"
                                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                    )}
                                >
                                    <Icon className="size-4.5" />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 min-w-0 w-full">
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 min-h-[600px]">
                        {renderContent()}
                    </div>
                </div>
            </div>

            {/* Modals - Hoisted to top level for correct centering and blur */}
            <ChangePasswordModal
                isOpen={isPasswordModalOpen}
                onClose={() => setIsPasswordModalOpen(false)}
            />
            <DeleteAccountModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
            />
            <ConfirmSaveModal
                isOpen={isSaveModalOpen}
                onClose={() => setIsSaveModalOpen(false)}
                onConfirm={onConfirmSave}
            />
        </div>
    );
}
