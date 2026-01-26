"use client";

import React, { useState, useRef, useEffect } from "react";
import { X, ChevronDown, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface CreateTicketModalProps {
    isOpen: boolean;
    onClose: () => void;
}

// Custom Dropdown for Modal
function ModalDropdown({
    label,
    options,
    value,
    onChange
}: {
    label: string,
    options: string[],
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
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm text-gray-700 bg-blue-50/30 border border-blue-100 rounded-xl hover:bg-blue-50/50 transition-all"
            >
                <span className={value ? "text-gray-900" : "text-gray-400"}>
                    {value || label}
                </span>
                <ChevronDown className={cn("size-4 text-gray-400 transition-transform", isOpen && "rotate-180")} />
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 mt-1 w-full bg-white rounded-xl border border-gray-100 shadow-xl z-50 py-1 animate-in fade-in zoom-in-95 duration-100 max-h-60 overflow-y-auto">
                    {options.map((option) => (
                        <button
                            key={option}
                            type="button"
                            onClick={() => {
                                onChange(option);
                                setIsOpen(false);
                            }}
                            className={cn(
                                "w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-gray-50",
                                value === option ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700"
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

export default function CreateTicketModal({ isOpen, onClose }: CreateTicketModalProps) {
    const [category, setCategory] = useState("");
    const [priority, setPriority] = useState("");

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl w-full max-w-lg shadow-xl overflow-hidden animate-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="flex items-center justify-between p-6 pb-2">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">Create Support Ticket</h2>
                        <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X className="size-5" />
                    </button>
                </div>

                {/* Form */}
                <div className="p-6 space-y-5">
                    <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-gray-700">Subject</label>
                        <input
                            type="text"
                            placeholder="Enter Issue name"
                            className="w-full px-4 py-3 text-sm bg-blue-50/30 border border-blue-100 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-gray-400"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-gray-700">Category</label>
                        <ModalDropdown
                            label="Feature Request"
                            options={[
                                "General Question",
                                "Integration Issue",
                                "Billing & Payment",
                                "Feature Request",
                                "Technical Problem"
                            ]}
                            value={category}
                            onChange={setCategory}
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-gray-700">Priority</label>
                        <ModalDropdown
                            label="High"
                            options={["High", "Medium", "Low"]}
                            value={priority}
                            onChange={setPriority}
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-gray-700">Description</label>
                        <textarea
                            placeholder="Please provide as much detail as possible..."
                            rows={4}
                            className="w-full px-4 py-3 text-sm bg-blue-50/30 border border-blue-100 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-gray-400 resize-none"
                        />
                    </div>

                    <div className="flex gap-3 pt-2">
                        <button
                            onClick={onClose}
                            className="flex-1 px-4 py-3 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
                        >
                            <Plus className="size-4" />
                            Create Ticket
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
