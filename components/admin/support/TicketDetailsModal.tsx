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
    onUpdateStatus?: (id: string, status: string) => Promise<void>;
}

export default function TicketDetailsModal({ isOpen, onClose, ticket, onUpdateStatus }: TicketDetailsModalProps) {
    const [selectedStatus, setSelectedStatus] = useState("");
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        if (ticket) {
            setSelectedStatus(ticket.status);
        }
    }, [ticket]);

    if (!isOpen || !ticket) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 transition-opacity">
            <div className="relative w-full max-w-lg overflow-visible rounded-2xl bg-white shadow-2xl flex flex-col border border-[#22D3EE]/30">
                {/* Header */}
                <div className="flex items-start justify-between p-6 pb-4 bg-[#F9FCFF] border-b border-[#22D3EE]/20 rounded-t-2xl">
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
                                ticket.priority === "Medium" && "text-[#0891B2] border-[#22D3EE]",
                                ticket.priority === "Low" && "text-gray-600 border-gray-600"
                            )}>
                                {ticket.priority}
                            </span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 font-medium mb-1">Status</p>
                            <span className={cn(
                                "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold border",
                                ticket.status === "Open" && "bg-[#22D3EE]/10 text-[#0891B2] border-[#22D3EE]/20",
                                ticket.status === "In Progress" && "bg-amber-50 text-amber-700 border-amber-200",
                                ticket.status === "Resolved" && "bg-green-50 text-green-700 border-green-200"
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
                            disabled={isSaving}
                            onClick={async () => {
                                if (onUpdateStatus && ticket.supportTicketId) {
                                    setIsSaving(true);
                                    try {
                                        let apiStatus = "OPEN";
                                        if (selectedStatus === "In Progress") apiStatus = "IN_PROGRESS";
                                        else if (selectedStatus === "Resolved") apiStatus = "RESOLVED";

                                        await onUpdateStatus(ticket.supportTicketId, apiStatus);
                                    } catch (err) {
                                        console.error("Failed to update status", err);
                                    } finally {
                                        setIsSaving(false);
                                    }
                                }
                                onClose();
                            }}
                            className="flex-1 rounded-xl bg-[#22D3EE] py-3 text-sm font-bold text-white hover:bg-[#06B6D4] transition-all shadow-md shadow-[#22D3EE]/10 cursor-pointer disabled:opacity-50"
                        >
                            {isSaving ? "Saving..." : "Save Changes"}
                        </button>
                        <button
                            disabled={isSaving}
                            onClick={onClose}
                            className="flex-1 rounded-xl border border-gray-200 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer disabled:opacity-50"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
