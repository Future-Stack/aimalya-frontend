"use client";

import React, { useState, useMemo } from "react";
import {
    DollarSign,
    CheckCircle,
    Clock,
    AlertTriangle,
    Search,
    ChevronDown,
    Eye,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const stats = [
    { label: "Total MRR", value: "$580", subValue: "+19.6% from last month", icon: DollarSign, color: "text-green-600" },
    { label: "Active", value: "142", subValue: "85% of total", icon: CheckCircle, color: "text-blue-600" },
    { label: "Trial", value: "18", subValue: "12 converting soon", icon: Clock, color: "text-amber-600" },
    { label: "Past Due", value: "7", subValue: "Needs attention", icon: AlertTriangle, color: "text-red-600" },
];

const revenueData = [
    { name: "Jul", revenue: 12000 },
    { name: "Aug", revenue: 18000 },
    { name: "Sep", revenue: 22000 },
    { name: "Oct", revenue: 26000 },
    { name: "Nov", revenue: 32000 },
    { name: "Dec", revenue: 41000 },
    { name: "Jan", revenue: 52000 },
];

const initialSubscriptions = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", plan: "Professional", status: "Active", amount: "$79", cycle: "monthly", nextBilling: "2026-02-15" },
    { id: 2, name: "Jane Smith", email: "jane.smith@company.com", plan: "Business", status: "Trial", amount: "$149", cycle: "monthly", nextBilling: "2026-01-24" },
    { id: 3, name: "Robert Johnson", email: "robert.j@business.com", plan: "Starter", status: "Active", amount: "$24", cycle: "annual", nextBilling: "2026-11-20" },
    { id: 4, name: "Sarah Williams", email: "sarah.w@enterprise.com", plan: "Enterprise", status: "Active", amount: "$499", cycle: "monthly", nextBilling: "2026-02-05" },
    { id: 5, name: "Emily Davis", email: "emily.d@startup.com", plan: "Professional", status: "Past due", amount: "$79", cycle: "monthly", nextBilling: "2026-01-01" },
    { id: 6, name: "Michael Scott", email: "michael@paper.com", plan: "Starter", status: "Active", amount: "$24", cycle: "monthly", nextBilling: "2026-02-10" },
];

export default function SubscriptionManagement() {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("All Status");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const filteredSubscriptions = useMemo(() => {
        return initialSubscriptions.filter(sub => {
            const matchesSearch =
                sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                sub.email.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesStatus = statusFilter === "All Status" || sub.status === statusFilter;

            return matchesSearch && matchesStatus;
        });
    }, [searchTerm, statusFilter]);

    const totalPages = Math.ceil(filteredSubscriptions.length / itemsPerPage);
    const paginatedSubscriptions = filteredSubscriptions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-[#0F172A]">Subscription Management</h1>
                <p className="text-gray-500">Monitor and manage all platform subscriptions</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, idx) => (
                    <div key={idx} className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500 flex items-center gap-1">
                                    <stat.icon className={cn("size-3", stat.color)} />
                                    {stat.label}
                                </p>
                                <p className={cn("mt-1 text-2xl font-bold", stat.color)}>{stat.value}</p>
                                <p className="mt-1 text-xs text-gray-400">{stat.subValue}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Revenue Chart */}
            <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-[#0F172A]">Monthly Recurring Revenue</h3>
                <div className="mt-6 h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={revenueData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} />
                            <Tooltip />
                            <Line type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={2} dot={{ fill: '#10B981' }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="relative w-full max-w-xl">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Search className="size-4 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="block w-full rounded-lg border border-[#E2E8F0] bg-white py-2.5 pl-10 pr-3 text-sm text-[#0F172A] placeholder-gray-500 focus:border-[#3B82F6] focus:outline-none focus:ring-1 focus:ring-[#3B82F6]"
                        placeholder="Search users by name or email..."
                    />
                </div>

                <div className="relative">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center gap-2 rounded-lg border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                        {statusFilter}
                        <ChevronDown className="size-4 text-gray-500" />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 z-10 mt-2 w-48 rounded-lg border border-[#E2E8F0] bg-white p-1 shadow-lg">
                            {["All Status", "Active", "Trial", "Past due"].map((status) => (
                                <button
                                    key={status}
                                    onClick={() => {
                                        setStatusFilter(status);
                                        setCurrentPage(1);
                                        setIsDropdownOpen(false);
                                    }}
                                    className="w-full rounded-md px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
                                >
                                    {status}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Subscriptions Table */}
            <div className="overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-[#F8FAFC] text-xs font-semibold uppercase text-gray-500">
                            <tr className="whitespace-nowrap">
                                <th className="px-6 py-4 min-w-[200px]">User</th>
                                <th className="px-6 py-4 min-w-[120px]">Plan</th>
                                <th className="px-6 py-4 min-w-[100px]">Status</th>
                                <th className="px-6 py-4 min-w-[100px]">Amount</th>
                                <th className="px-6 py-4 min-w-[120px]">Billing Cycle</th>
                                <th className="px-6 py-4 min-w-[150px]">Next Billing</th>
                                <th className="px-6 py-4 min-w-[80px] text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E2E8F0]">
                            {paginatedSubscriptions.map((sub) => (
                                <tr key={sub.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <span className="font-medium text-[#0F172A]">{sub.name}</span>
                                            <span className="text-xs text-gray-500">{sub.email}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">{sub.plan}</td>
                                    <td className="px-6 py-4">
                                        <span className={cn(
                                            "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                                            sub.status === "Active" && "bg-green-50 text-green-700",
                                            sub.status === "Trial" && "bg-blue-50 text-blue-700",
                                            sub.status === "Past due" && "bg-red-50 text-red-700"
                                        )}>
                                            {sub.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-[#0F172A]">{sub.amount}</td>
                                    <td className="px-6 py-4 text-gray-500">{sub.cycle}</td>
                                    <td className="px-6 py-4 text-gray-500">{sub.nextBilling}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="flex items-center justify-center size-8 ml-auto rounded-lg text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer">
                                            <Eye className="size-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {paginatedSubscriptions.length === 0 && (
                                <tr>
                                    <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                                        No subscriptions found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination */}
            {totalPages >= 1 && (
                <div className="flex items-center justify-center gap-2">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 disabled:opacity-50 transition-colors cursor-pointer disabled:cursor-not-allowed"
                    >
                        <ChevronLeft className="size-5" />
                    </button>
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => setCurrentPage(i + 1)}
                            className={cn(
                                "size-8 rounded-lg text-sm transition-colors cursor-pointer",
                                currentPage === i + 1
                                    ? "bg-blue-50 font-bold text-blue-600 ring-1 ring-blue-100"
                                    : "text-gray-500 hover:bg-gray-100"
                            )}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 disabled:opacity-50 transition-colors cursor-pointer disabled:cursor-not-allowed"
                    >
                        <ChevronRight className="size-5" />
                    </button>
                </div>
            )}
        </div>
    );
}
