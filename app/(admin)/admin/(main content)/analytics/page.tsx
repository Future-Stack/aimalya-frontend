"use client";

import React from "react";
import {
    Users,
    TrendingUp,
    Building2,
    BarChart3,
    ArrowUpRight,
    TrendingDown
} from "lucide-react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell
} from "recharts";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const stats = [
    { label: "Total Users", value: "167", icon: Users, change: "+14", trend: "up", color: "bg-blue-500" },
    { label: "Total MRR", value: "$51.2k", icon: TrendingUp, change: "+5%", trend: "up", color: "bg-blue-600" },
    { label: "Active Businesses", value: "234", icon: Building2, change: "+07", trend: "up", color: "bg-amber-700" },
    { label: "Churn Rate", value: "2.8%", icon: TrendingDown, change: "-5%", trend: "down", color: "bg-red-500" },
];

const areaData = [
    { name: "Jul", users: 45 },
    { name: "Aug", users: 65 },
    { name: "Sep", users: 75 },
    { name: "Oct", users: 95 },
    { name: "Nov", users: 120 },
    { name: "Dec", users: 140 },
    { name: "Jan", users: 167 },
];

const barData = [
    { name: "Jul", processed: 3500 },
    { name: "Aug", processed: 4200 },
    { name: "Sep", processed: 5500 },
    { name: "Oct", processed: 7000 },
    { name: "Nov", processed: 8500 },
    { name: "Dec", processed: 10500 },
    { name: "Jan", processed: 13000 },
];

const pieData = [
    { name: "Restaurant", value: 45, color: "#3B82F6" },
    { name: "Retail", value: 32, color: "#8B5CF6" },
    { name: "Service", value: 28, color: "#10B981" },
    { name: "Healthcare", value: 18, color: "#F59E0B" },
    { name: "Hotel", value: 12, color: "#EF4444" },
];

const funnelData = [
    { label: "Signups", value: 250, percent: "100%", color: "bg-blue-600" },
    { label: "Completed Onboarding", value: 225, percent: "90%", color: "bg-purple-600" },
    { label: "Started Trial", value: 198, percent: "79%", color: "bg-green-600" },
    { label: "Converted to Paid", value: 167, percent: "67%", color: "bg-amber-600" },
];

export default function AnalyticsDashboard() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-[#0F172A]">Analytics Dashboard</h1>
                <p className="text-gray-500">Platform performance and insights</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, idx) => (
                    <div key={idx} className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                                <p className="mt-1 text-2xl font-bold text-[#0F172A]">{stat.value}</p>
                            </div>
                            <div className={cn("rounded-lg p-2 text-white", stat.color)}>
                                <stat.icon className="size-5" />
                            </div>
                        </div>
                        <div className="mt-4 flex items-center gap-1">
                            {stat.trend === "up" ? (
                                <ArrowUpRight className="size-3 text-green-500" />
                            ) : (
                                <TrendingDown className="size-3 text-red-500" />
                            )}
                            <span className={cn("text-xs font-semibold", stat.trend === "up" ? "text-green-500" : "text-red-500")}>
                                {stat.change}
                            </span>
                            <span className="text-xs text-gray-400">vs last month</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Charts */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* User Growth Chart */}
                <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-[#0F172A]">User Growth & Churn</h3>
                    <div className="mt-6 h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={areaData}>
                                <defs>
                                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.1} />
                                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} />
                                <Tooltip />
                                <Area type="monotone" dataKey="users" stroke="#3B82F6" strokeWidth={2} fillOpacity={1} fill="url(#colorUsers)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Reviews Processed Chart */}
                <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-[#0F172A]">Reviews Processed</h3>
                    <div className="mt-6 h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={barData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} />
                                <Tooltip />
                                <Bar dataKey="processed" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Business Categories Pie Chart */}
                <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-[#0F172A]">Business Categories</h3>
                    <div className="mt-6 flex h-[250px] items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="mt-4 space-y-2">
                        {pieData.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                                <div className="size-2 rounded-full" style={{ backgroundColor: item.color }} />
                                <span className="text-xs text-gray-500">{item.name}</span>
                                <span className="ml-auto text-xs font-semibold text-[#0F172A]">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Conversion Funnel */}
                <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm lg:col-span-2">
                    <h3 className="text-lg font-bold text-[#0F172A]">Conversion Funnel</h3>
                    <div className="mt-6 space-y-6">
                        {funnelData.map((item, idx) => (
                            <div key={idx} className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">{item.label}</span>
                                    <span className="font-semibold text-[#0F172A]">
                                        {item.value} <span className="ml-1 text-xs text-gray-400">({item.percent})</span>
                                    </span>
                                </div>
                                <div className="h-2 w-full rounded-full bg-gray-100">
                                    <div
                                        className={cn("h-full rounded-full", item.color)}
                                        style={{ width: item.percent }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 rounded-lg bg-blue-50 p-4">
                        <p className="text-xs font-medium text-blue-600">Overall Conversion Rate</p>
                        <p className="mt-1 text-xl font-bold text-blue-700">67%</p>
                        <p className="text-[10px] text-blue-500">167 out of 250 signups converted</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
