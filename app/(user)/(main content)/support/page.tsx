"use client";

import React, { useState, useRef, useEffect } from "react";
import { Search, Plus, Mail, Phone, ChevronDown, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import CreateTicketModal from "@/components/user/support/CreateTicketModal";

// Mock Data
const existingTickets = [
    {
        id: "TKT-1001",
        title: "Unable to connect Google Business Profile",
        category: "Integration",
        status: "In Progress",
        priority: "High",
        date: "2026-01-18 10:30",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        id: "TKT-1002",
        title: "Unable to connect Google Business Profile",
        category: "Integration",
        status: "In Progress",
        priority: "Medium",
        date: "2026-01-18 10:30",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        id: "TKT-1003",
        title: "Unable to connect Google Business Profile",
        category: "Integration",
        status: "In Progress",
        priority: "Low", // No badge shown in image for low/normal or just omitted? Assuming none or creating style
        date: "2026-01-18 10:30",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        id: "TKT-1004",
        title: "Feature Request: Dark Mode",
        category: "General",
        status: "Open",
        priority: "Low",
        date: "2026-01-17 14:20",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        id: "TKT-1005",
        title: "Billing issue",
        category: "Billing",
        status: "Resolved",
        priority: "High",
        date: "2026-01-10 09:00",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        id: "TKT-1006",
        title: "Another Ticket",
        category: "General",
        status: "Open",
        priority: "Medium",
        date: "2026-01-09 11:00",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
];

const ITEMS_PER_PAGE = 3;

function StatusDropdown({
    value,
    onChange
}: {
    value: string,
    onChange: (val: string) => void
}) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between px-3 py-2.5 text-sm bg-white border border-gray-100 rounded-lg min-w-[140px] hover:bg-gray-50 transition-all text-gray-500"
            >
                <span>{value || "Status"}</span>
                <ChevronDown className={cn("size-4 transition-transform", isOpen && "rotate-180")} />
            </button>

            {isOpen && (
                <div className="absolute top-full right-0 mt-1 w-full bg-white rounded-lg border border-gray-100 shadow-lg z-20 py-1 animate-in fade-in zoom-in-95 duration-100">
                    {["All", "Open", "In Progress", "Resolved"].map((option) => (
                        <button
                            key={option}
                            onClick={() => {
                                onChange(option === "All" ? "" : option);
                                setIsOpen(false);
                            }}
                            className={cn(
                                "w-full text-left px-4 py-2 text-sm transition-colors hover:bg-gray-50",
                                (value === option || (value === "" && option === "All")) ? "text-blue-600 font-medium" : "text-gray-700"
                            )}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function SupportPage() {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Derived Data
    const filteredTickets = existingTickets.filter(ticket => {
        const matchesSearch = ticket.title.toLowerCase().includes(search.toLowerCase()) || ticket.id.toLowerCase().includes(search.toLowerCase());
        const matchesStatus = statusFilter ? ticket.status === statusFilter : true;
        return matchesSearch && matchesStatus;
    });

    const totalPages = Math.ceil(filteredTickets.length / ITEMS_PER_PAGE);
    const currentTickets = filteredTickets.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    // Reset pagination
    useEffect(() => {
        setCurrentPage(1);
    }, [search, statusFilter]);

    // Stats
    const total = existingTickets.length;
    const open = existingTickets.filter(t => t.status === "Open").length;
    const inProgress = existingTickets.filter(t => t.status === "In Progress").length;
    const resolved = existingTickets.filter(t => t.status === "Resolved").length;

    return (
        <div className="flex flex-col xl:flex-row gap-8 pb-12">
            <div className="flex-1 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Support Center</h1>
                        <p className="text-sm text-gray-500 mt-1">Get help with your ReviewIQ account</p>
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                    >
                        <Plus className="size-4" />
                        New Ticket
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                        <p className="font-semibold text-gray-900 text-sm">Total Tickets</p>
                        <h2 className="text-2xl font-bold text-gray-900 mt-3">{total}</h2>
                    </div>
                    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                        <p className="font-semibold text-gray-900 text-sm">Open</p>
                        <h2 className="text-2xl font-bold text-blue-600 mt-3">{open}</h2>
                    </div>
                    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                        <p className="font-semibold text-gray-900 text-sm">In Progress</p>
                        <h2 className="text-2xl font-bold text-amber-500 mt-3">{inProgress}</h2>
                    </div>
                    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                        <p className="font-semibold text-gray-900 text-sm">Resolved</p>
                        <h2 className="text-2xl font-bold text-green-500 mt-3">{resolved}</h2>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-4 bg-white p-2 rounded-xl border border-gray-100 shadow-sm">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="search review"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="h-10 w-full bg-blue-50/50 rounded-lg pl-10 pr-4 text-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 border-transparent border outline-none transition-all placeholder:text-gray-400"
                        />
                    </div>
                    <StatusDropdown value={statusFilter} onChange={setStatusFilter} />
                </div>

                {/* Tickets List */}
                <div className="space-y-4 min-h-[400px]">
                    {currentTickets.length > 0 ? (
                        currentTickets.map((ticket) => (
                            <div key={ticket.id} className="bg-blue-50/20 p-6 rounded-2xl border border-blue-100 hover:border-blue-200 transition-colors">
                                <div className="flex items-start gap-4">
                                    <img src={ticket.avatar} alt="User" className="size-10 rounded-full object-cover" />
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-wrap items-center gap-2 mb-2">
                                            <span className="text-xs font-semibold text-gray-500">{ticket.id}</span>

                                            <span className={cn(
                                                "px-2.5 py-0.5 rounded-md text-[10px] font-bold",
                                                ticket.status === "In Progress" ? "bg-amber-100 text-amber-600" :
                                                    ticket.status === "Open" ? "bg-blue-100 text-blue-600" :
                                                        "bg-green-100 text-green-600"
                                            )}>
                                                {ticket.status}
                                            </span>

                                            {ticket.priority === 'High' && (
                                                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-red-100 text-red-600">
                                                    High
                                                </span>
                                            )}
                                            {ticket.priority === 'Medium' && (
                                                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-blue-100 text-blue-600">
                                                    Medium
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-base font-bold text-gray-900 truncate pr-4">{ticket.title}</h3>
                                        <p className="text-xs text-gray-500 mt-1">{ticket.category}</p>
                                        <p className="text-xs text-gray-400 mt-4">Created {ticket.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-gray-100 border-dashed">
                            <p className="text-gray-500 font-medium">No tickets found.</p>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 pt-4">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="flex items-center px-3 py-2 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <ChevronLeft className="size-3 mr-1" />
                            Previous
                        </button>

                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => setCurrentPage(i + 1)}
                                className={cn(
                                    "size-8 rounded-lg text-xs font-medium transition-all",
                                    currentPage === i + 1
                                        ? "bg-blue-100 text-blue-600"
                                        : "text-gray-500 hover:bg-gray-100"
                                )}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="flex items-center px-3 py-2 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Next
                            <ChevronRight className="size-3 ml-1" />
                        </button>
                    </div>
                )}
            </div>

            {/* Right Sidebar */}
            <div className="w-full xl:w-[360px] flex-shrink-0">
                <div className="bg-blue-100/50 rounded-3xl p-6 md:p-8 space-y-8 sticky top-24 border border-blue-200">
                    <div className="flex flex-col items-center text-center">
                        <div className="relative size-48 mb-6">
                            {/* Abstract Illustration Placeholder using generic shapes/emojis for now as I can't generate an actual SVG illustration effortlessly without bloating code */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                {/* <img src="https://illustrations.popsy.co/blue/customer-support.svg" alt="Support" className="size-full object-contain" /> */}
                                {/* Using a placeholder div to represent the image area visually */}
                                <div className="size-40 bg-white rounded-full flex items-center justify-center shadow-lg relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100" />
                                    <h3 className="relative text-4xl">🎧</h3>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Get help with your ReviewIQ account</h3>
                    </div>

                    <div className="bg-white/50 rounded-2xl p-4 md:p-6 backdrop-blur-sm space-y-6">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-gray-900 font-bold">
                                <Mail className="size-5" />
                                <h3>Email Support</h3>
                            </div>
                            <p className="text-xs text-gray-500">Reach out to our team directly</p>
                            <a href="mailto:support@reviewiq.com" className="block text-green-600 font-medium hover:underline">support@reviewiq.com</a>
                        </div>

                        <div className="h-px bg-gray-200" />

                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-gray-900 font-bold">
                                <Phone className="size-5" />
                                <h3>Phone Support</h3>
                            </div>
                            <p className="text-xs text-gray-500">Available for Business & Enterprise plans</p>
                            <a href="tel:+18001436156" className="block text-blue-600 font-medium hover:underline">+1 (800)1436156</a>
                        </div>
                    </div>
                </div>
            </div>

            <CreateTicketModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
