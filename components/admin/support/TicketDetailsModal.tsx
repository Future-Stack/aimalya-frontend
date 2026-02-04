"use client";

import React, { useState, useEffect } from "react";
import { X, ChevronDown } from "lucide-react";
import StylishDropdown from "@/components/ui/StylishDropdown";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface TicketDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    ticket: any;
}

export default function TicketDetailsModal({ isOpen, onClose, ticket }: TicketDetailsModalProps) {
    const [selectedStatus, setSelectedStatus] = useState("");

    useEffect(() => {
        if (ticket) {
            setSelectedStatus(ticket.status);
        }
    }, [ticket]);

    if (!isOpen || !ticket) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 transition-opacity">
            <div className="relative w-full max-w-lg overflow-visible rounded-2xl bg-white shadow-2xl flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between p-6 pb-4">
                    <div>
                        <h2 className="text-2xl font-bold text-[#0F172A]">{ticket.id}</h2>
                        <p className="text-gray-500 mt-1">{ticket.subject}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                        <X className="size-6" />
                    </button>
                </div>

                <div className="h-px w-full bg-gray-100" />

                {/* Content */}
                <div className="p-6 space-y-8">
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <p className="text-sm text-gray-400 font-medium mb-1">Customer</p>
                            <p className="text-base font-bold text-[#0F172A]">{ticket.name}</p>
                            <p className="text-sm text-gray-500">{ticket.email}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 font-medium mb-1">Category</p>
                            <p className="text-base font-bold text-[#0F172A]">{ticket.category}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 font-medium mb-1">Priority</p>
                            <span className={cn(
                                "text-sm border-l-2 pl-2 font-medium",
                                ticket.priority === "Urgent" && "text-red-600 border-red-600",
                                ticket.priority === "High" && "text-orange-600 border-orange-600",
                                ticket.priority === "Medium" && "text-blue-600 border-blue-600",
                                ticket.priority === "Low" && "text-gray-600 border-gray-600"
                            )}>
                                {ticket.priority}
                            </span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 font-medium mb-1">Status</p>
                            <span className={cn(
                                "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
                                ticket.status === "Open" && "bg-blue-50 text-blue-700",
                                ticket.status === "In Progress" && "bg-amber-50 text-amber-700",
                                ticket.status === "Resolved" && "bg-green-50 text-green-700"
                            )}>
                                {ticket.status}
                            </span>
                        </div>
                    </div>

                    {/* Update Status */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-600">Update Status</label>
                        <StylishDropdown
                            value={selectedStatus}
                            onChange={(val) => setSelectedStatus(val as string)}
                            options={[
                                { label: "Open", value: "Open" },
                                { label: "In Progress", value: "In Progress" },
                                { label: "Resolved", value: "Resolved" }
                            ]}
                            selectedColor="#22D3EE"
                            selectedBgColor="#ecf9fb"
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4 pt-2">
                        <button
                            onClick={() => {
                                // Logic to save status
                                onClose();
                            }}
                            className="flex-1 rounded-xl bg-cyan-600 py-3 text-sm font-bold text-white hover:bg-cyan-700 transition-colors shadow-sm cursor-pointer"
                        >
                            Save Changes
                        </button>
                        <button
                            onClick={onClose}
                            className="flex-1 rounded-xl border border-gray-200 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
