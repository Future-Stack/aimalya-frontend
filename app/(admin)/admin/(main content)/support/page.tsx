"use client";

import React, { useState, useMemo } from "react";
import {
    Inbox,
    Clock,
    CheckCircle2,
    Timer,
    Search,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Eye
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const stats = [
    { label: "Open Tickets", value: "23", icon: Inbox, color: "text-blue-600" },
    { label: "In Progress", value: "12", icon: Clock, color: "text-amber-600" },
    { label: "Resolved Today", value: "18", icon: CheckCircle2, color: "text-green-600" },
    { label: "Avg Response Time", value: "2.5h", icon: Timer, color: "text-purple-600" },
];

const initialTickets = [
    { id: "TKT-1001", name: "John Doe", email: "john.doe@example.com", subject: "Unable to connect Google Business Pro", priority: "High", status: "In Progress", category: "Integration", updated: "2 hours ago" },
    { id: "TKT-1002", name: "Jane Smith", email: "jane.smith@company.com", subject: "Payment failed for subscription renewal", priority: "Urgent", status: "Open", category: "Billing", updated: "30 min ago" },
    { id: "TKT-1003", name: "Robert Johnson", email: "robert.j@business.com", subject: "Request for report customization", priority: "Medium", status: "Open", category: "Feature Request", updated: "1 day ago" },
    { id: "TKT-1004", name: "Sarah Williams", email: "sarah.w@enterprise.com", subject: "Enterprise plan inquiry", priority: "High", status: "Resolved", category: "Sales", updated: "3 hours ago" },
    { id: "TKT-1005", name: "Michael Brown", email: "michael@test.com", subject: "Login issue", priority: "Low", status: "Resolved", category: "Auth", updated: "5 hours ago" },
    { id: "TKT-1006", name: "Alice Green", email: "alice@example.com", subject: "Invoice request", priority: "Medium", status: "Open", category: "Billing", updated: "6 hours ago" },
];

export default function SupportTickets() {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("All Status");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const filteredTickets = useMemo(() => {
        return initialTickets.filter(ticket => {
            const matchesSearch =
                ticket.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                ticket.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                ticket.subject.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesStatus = statusFilter === "All Status" || ticket.status === statusFilter;

            return matchesSearch && matchesStatus;
        });
    }, [searchTerm, statusFilter]);

    const totalPages = Math.ceil(filteredTickets.length / itemsPerPage);
    const paginatedTickets = filteredTickets.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-[#0F172A]">Support Tickets</h1>
                <p className="text-gray-500">Manage customer support requests</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, idx) => (
                    <div key={idx} className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
                        <div className="flex items-start justify-between">
                            <div className="flex flex-col">
                                <p className="flex items-center gap-2 text-sm font-medium text-gray-500">
                                    <stat.icon className={cn("size-4", stat.color)} />
                                    {stat.label}
                                </p>
                                <p className="mt-2 text-2xl font-bold text-[#0F172A]">{stat.value}</p>
                            </div>
                        </div>
                    </div>
                ))}
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
                        placeholder="Search tickets by ID, name or subject..."
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
                            {["All Status", "Open", "In Progress", "Resolved"].map((status) => (
                                <button
                                    key={status}
                                    onClick={() => {
                                        setStatusFilter(status);
                                        setCurrentPage(1);
                                        setIsDropdownOpen(false);
                                    }}
                                    className="w-full rounded-md px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                                >
                                    {status}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Tickets Table */}
            <div className="overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-[#F8FAFC] text-xs font-semibold uppercase text-gray-500">
                            <tr className="whitespace-nowrap">
                                <th className="px-6 py-4 min-w-[120px]">Ticket ID</th>
                                <th className="px-6 py-4 min-w-[180px]">Customer</th>
                                <th className="px-6 py-4 min-w-[250px]">Subject</th>
                                <th className="px-6 py-4 min-w-[100px]">Priority</th>
                                <th className="px-6 py-4 min-w-[100px]">Status</th>
                                <th className="px-6 py-4 min-w-[120px]">Category</th>
                                <th className="px-6 py-4 min-w-[150px]">Last Update</th>
                                <th className="px-6 py-4 min-w-[80px] text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E2E8F0]">
                            {paginatedTickets.map((tkt) => (
                                <tr key={tkt.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 font-bold text-[#0F172A]">
                                        {tkt.id}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <span className="font-medium text-[#0F172A]">{tkt.name}</span>
                                            <span className="text-xs text-gray-500">{tkt.email}</span>
                                        </div>
                                    </td>
                                    <td className="max-w-[200px] truncate px-6 py-4 text-gray-600">
                                        {tkt.subject}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={cn(
                                            "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase",
                                            tkt.priority === "Urgent" && "bg-red-100 text-red-700",
                                            tkt.priority === "High" && "bg-amber-100 text-amber-700",
                                            tkt.priority === "Medium" && "bg-blue-100 text-blue-700"
                                        )}>
                                            {tkt.priority}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={cn(
                                            "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                                            tkt.status === "Open" && "bg-blue-50 text-blue-700",
                                            tkt.status === "In Progress" && "bg-amber-50 text-amber-700",
                                            tkt.status === "Resolved" && "bg-green-50 text-green-700"
                                        )}>
                                            {tkt.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500">
                                        {tkt.category}
                                    </td>
                                    <td className="px-6 py-4 text-gray-500">
                                        {tkt.updated}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="flex items-center justify-center size-8 ml-auto rounded-lg text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer">
                                            <Eye className="size-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {paginatedTickets.length === 0 && (
                                <tr>
                                    <td colSpan={8} className="px-6 py-12 text-center text-gray-500">
                                        No tickets found matching your criteria.
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
