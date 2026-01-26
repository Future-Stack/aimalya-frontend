"use client";

import React from "react";
import { Star, ThumbsUp, MessageSquare, Reply, TrendingUp, TrendingDown, AlertCircle, CheckCircle } from "lucide-react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

// Mock Data for Charts
const sentimentData = [
    { month: "Jan", positive: 65, neutral: 25, negative: 10 },
    { month: "Feb", positive: 68, neutral: 20, negative: 12 },
    { month: "Mar", positive: 75, neutral: 18, negative: 7 },
    { month: "Apr", positive: 82, neutral: 12, negative: 6 },
    { month: "May", positive: 85, neutral: 10, negative: 5 },
];

const performanceData = [
    { label: "Service", value: 4.5, change: "+0.3" },
    { label: "Quality", value: 4.7, change: "+0.1" },
    { label: "Atmosphere", value: 4.3, change: "-0.1" },
    { label: "Value", value: 4.2, change: "+0.2" },
    { label: "Cleanliness", value: 4.6, change: "+0.4" },
];

const keyIssues = [
    { label: "Slow service during peak hours", mentions: 23, trend: "up", change: "15%", severity: "High" },
    { label: "Limited parking", mentions: 18, trend: "down", change: "5%", severity: "Medium" },
    { label: "Noise level", mentions: 12, trend: "up", change: "2%", severity: "Low" },
    { label: "Price concerns", mentions: 8, trend: "down", change: "3%", severity: "Medium" },
];

const keyStrengths = [
    { label: "Friendly staff", mentions: 145, trend: "up" },
    { label: "Quality coffee", mentions: 132, trend: "up" },
    { label: "Cozy atmosphere", mentions: 98, trend: "down" },
    { label: "Great location", mentions: 76, trend: "up" },
];

export default function DashboardPage() {
    return (
        <div className="space-y-6 pb-8">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome back, Rogers</h1>
                <p className="text-gray-500">Softvence Shop - Overview Dashboard</p>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {/* Overall Rating */}
                <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Overall Rating</p>
                            <h3 className="text-3xl font-bold text-gray-900 mt-2">4.6</h3>
                        </div>
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                            <Star className="size-5 fill-blue-600" />
                        </div>
                    </div>
                    <div className="flex items-center mt-4 text-xs font-medium text-green-600">
                        <TrendingUp className="size-3 mr-1" />
                        <span>+0.2</span>
                        <span className="text-gray-400 ml-1">vs last month</span>
                    </div>
                </div>

                {/* Satisfaction Index */}
                <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Satisfaction Index</p>
                            <h3 className="text-3xl font-bold text-gray-900 mt-2">87%</h3>
                        </div>
                        <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                            <ThumbsUp className="size-5" />
                        </div>
                    </div>
                    <div className="flex items-center mt-4 text-xs font-medium text-green-600">
                        <TrendingUp className="size-3 mr-1" />
                        <span>+5%</span>
                        <span className="text-gray-400 ml-1">vs last month</span>
                    </div>
                </div>

                {/* Review Volume */}
                <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Review Volume</p>
                            <h3 className="text-3xl font-bold text-gray-900 mt-2">234</h3>
                        </div>
                        <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                            <MessageSquare className="size-5" />
                        </div>
                    </div>
                    <div className="flex items-center mt-4 text-xs font-medium text-green-600">
                        <TrendingUp className="size-3 mr-1" />
                        <span>+18</span>
                        <span className="text-gray-400 ml-1">vs last month</span>
                    </div>
                </div>

                {/* Response Rate */}
                <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Response Rate</p>
                            <h3 className="text-3xl font-bold text-gray-900 mt-2">68%</h3>
                        </div>
                        <div className="p-2 bg-rose-50 text-rose-600 rounded-lg">
                            <Reply className="size-5" />
                        </div>
                    </div>
                    <div className="flex items-center mt-4 text-xs font-medium text-red-500">
                        <TrendingDown className="size-3 mr-1" />
                        <span>-5%</span>
                        <span className="text-gray-400 ml-1">vs last month</span>
                    </div>
                </div>
            </div>

            {/* Sentiment Trend Chart */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Sentiment Trend</h3>

                    {/* Floating Legend / Stats Mockup similar to image */}
                    <div className="hidden sm:flex items-center gap-4 bg-white border border-gray-100 px-3 py-2 rounded-lg shadow-sm text-xs">
                        <div className="font-semibold text-gray-700">Mar</div>
                        <div className="text-red-500">Negative: 10%</div>
                        <div className="text-gray-500">Neutral: 22%</div>
                        <div className="text-blue-500">Positive: 68%</div>
                    </div>
                </div>

                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={sentimentData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                            <XAxis
                                dataKey="month"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#94A3B8', fontSize: 12 }}
                                dy={10}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#94A3B8', fontSize: 12 }}
                            />
                            <Tooltip
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            />
                            <Line
                                type="monotone"
                                dataKey="positive"
                                stroke="#10B981"
                                strokeWidth={2}
                                dot={{ fill: '#10B981', r: 4, strokeWidth: 2, stroke: '#fff' }}
                                activeDot={{ r: 6 }}
                            />
                            <Line
                                type="monotone"
                                dataKey="neutral"
                                stroke="#94A3B8"
                                strokeWidth={2}
                                dot={{ fill: '#94A3B8', r: 4, strokeWidth: 2, stroke: '#fff' }}
                            />
                            <Line
                                type="monotone"
                                dataKey="negative"
                                stroke="#EF4444"
                                strokeWidth={2}
                                dot={{ fill: '#EF4444', r: 4, strokeWidth: 2, stroke: '#fff' }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Performance by Criteria */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Performance by Criteria</h3>
                <div className="space-y-6">
                    {performanceData.map((item) => (
                        <div key={item.label} className="grid grid-cols-[100px_1fr_60px_60px] gap-4 items-center text-sm">
                            <span className="font-medium text-gray-700">{item.label}</span>
                            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-blue-600 rounded-full"
                                    style={{ width: `${(item.value / 5) * 100}%` }}
                                />
                            </div>
                            <span className="font-bold text-gray-900 text-right">{item.value}</span>
                            <span className={cn(
                                "text-xs text-right font-medium",
                                item.change.startsWith('+') ? "text-green-500" : "text-red-500"
                            )}>{item.change}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Key Issues */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-6">
                        <AlertCircle className="size-5 text-red-500" />
                        <h3 className="text-lg font-semibold text-gray-900">Key Issues</h3>
                    </div>
                    <div className="space-y-4">
                        {keyIssues.map((issue, i) => (
                            <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">{issue.label}</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-xs text-gray-500">{issue.mentions} mentions</span>
                                        <span className={cn(
                                            "text-[10px] px-2 py-0.5 rounded-full font-medium",
                                            issue.severity === 'High' ? "bg-red-100 text-red-600" :
                                                issue.severity === 'Medium' ? "bg-amber-100 text-amber-600" :
                                                    "bg-gray-200 text-gray-600"
                                        )}>
                                            {issue.severity}
                                        </span>
                                    </div>
                                </div>
                                <div className={cn(
                                    "flex items-center text-xs font-medium",
                                    issue.trend === 'up' ? "text-red-500" : "text-green-500"
                                )}>
                                    {issue.trend === 'up' ? <TrendingUp className="size-3 mr-1" /> : <TrendingDown className="size-3 mr-1" />}
                                    {issue.change}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Key Strengths */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-6">
                        <CheckCircle className="size-5 text-green-500" />
                        <h3 className="text-lg font-semibold text-gray-900">Key Strengths</h3>
                    </div>
                    <div className="space-y-4">
                        {keyStrengths.map((strength, i) => (
                            <div key={i} className="flex items-center justify-between p-3 bg-green-50/50 rounded-xl hover:bg-green-50 transition-colors">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">{strength.label}</p>
                                    <p className="text-xs text-gray-500 mt-1">{strength.mentions} mentions</p>
                                </div>
                                <div className={cn(
                                    "flex items-center text-xs font-medium",
                                    strength.trend === 'up' ? "text-green-600" : "text-red-500"
                                )}>
                                    <TrendingUp className="size-3 mr-1" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function cn(...inputs: (string | undefined | null | false)[]) {
    return inputs.filter(Boolean).join(" ");
}
