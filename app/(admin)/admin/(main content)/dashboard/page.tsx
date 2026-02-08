"use client";

import React from "react";
import {
    Users,
    DollarSign,
    Building2,
    AlertCircle,
    TrendingUp,
    TrendingDown,
    ArrowUpRight,
    ArrowDownRight
} from "lucide-react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
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
    { label: "Total Users", value: "167", icon: Users, change: "+0.2", trend: "up", color: "bg-blue-500" },
    { label: "Monthly Revenue", value: "$51,200", icon: DollarSign, change: "+5%", trend: "up", color: "bg-blue-600" },
    { label: "Active Businesses", value: "234", icon: Building2, change: "+18", trend: "up", color: "bg-amber-700" },
    { label: "Support Tickets", value: "23", icon: AlertCircle, change: "-5%", trend: "down", color: "bg-red-500" },
];

const areaData = [
    { name: "Jul", revenue: 15000 },
    { name: "Aug", revenue: 20000 },
    { name: "Sep", revenue: 25000 },
    { name: "Oct", revenue: 35000 },
    { name: "Nov", revenue: 42000 },
    { name: "Dec", revenue: 48000 },
    { name: "Jan", revenue: 55000 },
];

const pieData = [
    { name: "Starter", value: 45, color: "#3B82F6" },
    { name: "Professional", value: 78, color: "#8B5CF6" },
    { name: "Business", value: 32, color: "#10B981" },
    { name: "Enterprise", value: 12, color: "#F59E0B" },
];

const activities = [
    { id: 1, type: "registration", user: "john.doe@example.com", time: "2 min ago", icon: TrendingUp, iconColor: "text-blue-500" },
    { id: 2, type: "payment", user: "$149.00 - Business Plan", time: "15 min ago", icon: TrendingUp, iconColor: "text-green-500" },
    { id: 3, type: "support", user: "New support ticket #1234 created", time: "1 hour ago", icon: AlertCircle, iconColor: "text-amber-500" },
    { id: 4, type: "upgrade", user: "Subscription upgraded: Starter → Professional", time: "2 hours ago", icon: TrendingUp, iconColor: "text-green-500" },
    { id: 5, type: "failed", user: "Failed payment attempt for user #4521", time: "3 hours ago", icon: AlertCircle, iconColor: "text-red-500" },
];

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-[#0F172A]">Admin Dashboard</h1>
                <p className="text-gray-500">Welcome back! Here's what's happening with your platform.</p>
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
                                <TrendingUp className="size-3 text-green-500" />
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

            {/* Charts Section */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Revenue & User Growth Chart */}
                <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm lg:col-span-2">
                    <h3 className="text-lg font-bold text-[#0F172A]">Revenue & User Growth</h3>
                    <div className="mt-6 h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={areaData}>
                                <defs>
                                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.1} />
                                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 12, fill: '#94A3B8' }}
                                    dy={10}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 12, fill: '#94A3B8' }}
                                />
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="revenue"
                                    stroke="#3B82F6"
                                    strokeWidth={2}
                                    fillOpacity={1}
                                    fill="url(#colorRevenue)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Plan Distribution Chart */}
                <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-[#0F172A]">Plan Distribution</h3>
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
                    <div className="mt-4 grid grid-cols-2 gap-4">
                        {pieData.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                                <div className="size-2 rounded-full" style={{ backgroundColor: item.color }} />
                                <span className="text-xs text-gray-500">{item.name}</span>
                                <span className="ml-auto text-xs font-semibold text-[#0F172A]">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-[#0F172A]">Recent Activity</h3>
                <div className="mt-6 space-y-6">
                    {activities.map((activity) => (
                        <div key={activity.id} className="flex items-start gap-4">
                            <div className={cn("mt-1 flex size-8 items-center justify-center rounded-lg bg-gray-50", activity.iconColor)}>
                                <activity.icon className="size-4" />
                            </div>
                            <div className="flex flex-1 flex-col">
                                <p className="text-sm font-medium text-[#0F172A]">
                                    {activity.type === "registration" && `New user registration: ${activity.user}`}
                                    {activity.type === "payment" && `Payment received: ${activity.user}`}
                                    {activity.type === "support" && activity.user}
                                    {activity.type === "upgrade" && activity.user}
                                    {activity.type === "failed" && activity.user}
                                </p>
                                <span className="text-xs text-gray-400">{activity.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}