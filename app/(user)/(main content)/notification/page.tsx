"use client";

import React, { useState } from "react";
import {
    CheckCheck,
    X,
    AlertTriangle,
    FileText,
    Info,
    TrendingUp,
    TrendingDown,
    Clock,
    Star
} from "lucide-react";
import { cn } from "@/lib/utils";

// Mock Data
const initialNotifications = [
    {
        id: 1,
        type: "alert", // critical
        title: "Rating Drop Detected",
        message: "Your overall rating decreased from 4.6 to 4.5 in the last 24 hours due to 2 new 2-star reviews.",
        time: "2 hours ago",
        unread: true,
        category: "Alerts"
    },
    {
        id: 2,
        type: "alert",
        title: "New Negative Review",
        message: "You received a 1-star review mentioning \"rude staff\" and \"cold coffee\". Immediate response recommended.",
        time: "5 hours ago",
        unread: true,
        category: "Alerts"
    },
    {
        id: 3,
        type: "report",
        title: "Monthly Report Ready",
        message: "Your January 2026 monthly business intelligence report has been generated and is ready to download.",
        time: "1 day ago",
        unread: true,
        category: "Reports"
    },
    {
        id: 4,
        type: "info",
        title: "Competitor Update",
        message: "Bean & Brew's rating increased to 4.8. They've received 45 new reviews this week.",
        time: "1 day ago",
        unread: false,
        category: "Info"
    },
    {
        id: 5,
        type: "warning",
        title: "Response Rate Alert",
        message: "Your response rate dropped to 68%. You have 15 unanswered reviews from the past week.",
        time: "2 days ago",
        unread: false,
        category: "Alerts"
    },
    {
        id: 6,
        type: "success",
        title: "New Positive Trend",
        message: "Mentions of \"quality coffee\" increased by 23% this month. Great job!",
        time: "3 days ago",
        unread: false,
        category: "Info"
    },
    {
        id: 7,
        type: "report",
        title: "Weekly Summary Available",
        message: "Your weekly performance summary is ready. 52 new reviews analyzed.",
        time: "5 days ago",
        unread: false,
        category: "Reports"
    },
    {
        id: 8,
        type: "alert",
        title: "Peak Hour Issue Detected",
        message: "AI detected increasing complaints about service speed during 11am-1pm. 18 mentions in past week.",
        time: "1 week ago",
        unread: false,
        category: "Alerts"
    }
];

const categories = ["All", "Alerts", "Reports", "Info", "Unread"];

export default function NotificationPage() {
    const [notifications, setNotifications] = useState(initialNotifications);
    const [activeTab, setActiveTab] = useState("All");

    const unreadCount = notifications.filter(n => n.unread).length;

    // Filter Logic
    const filteredNotifications = notifications.filter(n => {
        if (activeTab === "All") return true;
        if (activeTab === "Unread") return n.unread;
        return n.category === activeTab;
    });

    // Actions
    const markAllRead = () => {
        setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
    };

    const clearAll = () => {
        setNotifications([]);
    };

    const markAsRead = (id: number) => {
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, unread: false } : n));
    };

    const removeNotification = (id: number) => {
        setNotifications(prev => prev.filter(n => n.id !== id));
    };

    // Helper to get icon and styles based on type
    const getNotificationStyle = (type: string) => {
        switch (type) {
            case "alert":
                return {
                    bg: "bg-red-50/50",
                    border: "border-red-100",
                    iconRaw: AlertTriangle,
                    iconColor: "text-red-500",
                    btn: "bg-red-600 hover:bg-red-700"
                };
            case "report":
                return {
                    bg: "bg-blue-50/50",
                    border: "border-blue-100",
                    iconRaw: FileText,
                    iconColor: "text-blue-500",
                    btn: "bg-blue-600 hover:bg-blue-700"
                };
            case "warning":
                return {
                    bg: "bg-orange-50/50",
                    border: "border-orange-100",
                    iconRaw: TrendingDown,
                    iconColor: "text-orange-500",
                    btn: "bg-blue-600 hover:bg-blue-700" // Standard btn
                };
            case "success":
                return {
                    bg: "bg-white",
                    border: "border-gray-100",
                    iconRaw: Star, // Or TrendingUp
                    iconColor: "text-green-500",
                    btn: "bg-blue-600 hover:bg-blue-700"
                };
            case "info":
                return {
                    bg: "bg-white",
                    border: "border-gray-100",
                    iconRaw: Info, // or Star if competitor update
                    iconColor: "text-green-500", // As per image green star
                    btn: "bg-blue-600 hover:bg-blue-700"
                };
            default:
                return {
                    bg: "bg-white",
                    border: "border-gray-100",
                    iconRaw: Info,
                    iconColor: "text-gray-500",
                    btn: "bg-blue-600 hover:bg-blue-700"
                };
        }
    };

    return (
        <div className="space-y-6 pb-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
                    <p className="text-sm text-gray-500 mt-1">You have {unreadCount} unread notifications</p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={markAllRead}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        <CheckCheck className="size-4" />
                        Mark All Read
                    </button>
                    <button
                        onClick={clearAll}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        <X className="size-4" />
                        Clear All
                    </button>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveTab(cat)}
                        className={cn(
                            "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                            activeTab === cat
                                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                                : "bg-white text-gray-600 hover:bg-gray-50 border border-transparent hover:border-gray-200"
                        )}
                    >
                        {cat === "Unread" ? `Unread (${unreadCount})` : cat}
                    </button>
                ))}
            </div>

            {/* Notification List */}
            <div className="space-y-3">
                {filteredNotifications.length > 0 ? (
                    filteredNotifications.map((notification) => {
                        const style = getNotificationStyle(notification.type);
                        const Icon = style.iconRaw; // Assuming simple conditional logic for icons above is enough for mock

                        return (
                            <div
                                key={notification.id}
                                className={cn(
                                    "relative p-5 rounded-2xl border transition-all hover:shadow-sm group",
                                    style.bg,
                                    style.border
                                )}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={cn("mt-0.5 shrink-0", style.iconColor)}>
                                        <Icon className="size-5" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="text-sm font-bold text-gray-900">{notification.title}</h3>
                                            {notification.unread && (
                                                <span className="size-2 rounded-full bg-blue-600 animate-pulse" />
                                            )}
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed max-w-4xl">
                                            {notification.message}
                                        </p>
                                        <div className="flex items-center gap-2 mt-3">
                                            <Clock className="size-3.5 text-gray-400" />
                                            <span className="text-xs text-gray-400 font-medium">{notification.time}</span>
                                        </div>
                                    </div>

                                    {/* Actions - Visible on hover or always on desktop? Design shows buttons. */}
                                    <div className="flex items-center gap-3 shrink-0 self-end md:self-center mt-4 md:mt-0 ml-auto md:ml-0">
                                        {/* "View Details" or "View Report" button */}
                                        <button className={cn(
                                            "px-4 py-1.5 text-xs font-semibold text-white rounded-lg transition-colors shadow-sm",
                                            style.btn
                                        )}>
                                            {notification.type === 'report' ? 'View Report' : 'View Details'}
                                        </button>

                                        {notification.unread && (
                                            <button
                                                onClick={() => markAsRead(notification.id)}
                                                className="hidden sm:block px-3 py-1.5 text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                                            >
                                                Mark as Read
                                            </button>
                                        )}

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                removeNotification(notification.id);
                                            }}
                                            className="text-gray-400 hover:text-gray-600 p-1"
                                        >
                                            <X className="size-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-gray-100 border-dashed">
                        <div className="p-4 bg-gray-50 rounded-full mb-4">
                            <CheckCheck className="size-8 text-gray-400" />
                        </div>
                        <p className="text-gray-500 font-medium">No notifications found.</p>
                        <button
                            onClick={() => setActiveTab("All")}
                            className="mt-2 text-blue-600 text-sm hover:underline"
                        >
                            View all notifications
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
