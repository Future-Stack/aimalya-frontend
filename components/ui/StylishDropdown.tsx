"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface DropdownOption {
    label: string;
    value: string;
    icon?: React.ReactNode;
}

interface StylishDropdownProps {
    options: DropdownOption[];
    value: string | string[];
    onChange: (value: string | string[]) => void;
    placeholder?: string;
    icon?: React.ReactNode;
    className?: string;
    multiSelect?: boolean;
}

const StylishDropdown = ({
    options,
    value,
    onChange,
    placeholder = "Select option",
    icon,
    className,
    multiSelect = false
}: StylishDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const isSelected = (val: string) => {
        if (Array.isArray(value)) {
            return value.includes(val);
        }
        return value === val;
    };

    const getSelectedLabels = () => {
        if (Array.isArray(value)) {
            if (value.length === 0) return placeholder;
            return value.map(val => options.find(opt => opt.value === val)?.label).filter(Boolean).join(", ");
        }
        const selected = options.find((opt) => opt.value === value);
        return selected ? selected.label : placeholder;
    };

    const handleSelect = (optionValue: string) => {
        if (multiSelect) {
            const currentValues = Array.isArray(value) ? value : [];
            const newValues = currentValues.includes(optionValue)
                ? currentValues.filter(v => v !== optionValue)
                : [...currentValues, optionValue];
            onChange(newValues);
        } else {
            onChange(optionValue);
            setIsOpen(false);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className={cn("relative w-full", className)} ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "w-full min-h-[48px] h-auto py-2 bg-blue-50/50 border border-transparent focus:bg-white focus:border-[#0066FF] rounded-xl px-4 flex items-center justify-between transition-all outline-none group",
                    isOpen && "bg-white border-[#0066FF] shadow-sm"
                )}
            >
                <div className="flex items-center gap-3 overflow-hidden">
                    {icon && <div className="text-zinc-400 group-focus:text-[#0066FF] shrink-0">{icon}</div>}
                    <span className={cn(
                        "text-[14px] leading-tight text-left",
                        (Array.isArray(value) ? value.length > 0 : value) ? "text-[#1A1A1A] font-medium" : "text-zinc-400"
                    )}>
                        {getSelectedLabels()}
                    </span>
                </div>
                <ChevronDown
                    className={cn(
                        "text-zinc-400 transition-transform duration-200 shrink-0 ml-2",
                        isOpen && "rotate-180 text-[#0066FF]"
                    )}
                    size={18}
                />
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-zinc-100 rounded-xl shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="max-h-60 overflow-y-auto custom-scrollbar p-1">
                        {options.length > 0 ? (
                            options.map((option) => {
                                const active = isSelected(option.value);
                                return (
                                    <button
                                        key={option.value}
                                        type="button"
                                        onClick={() => handleSelect(option.value)}
                                        className={cn(
                                            "w-full px-4 py-2.5 rounded-lg flex items-center gap-3 transition-colors text-left",
                                            active
                                                ? "bg-blue-50 text-[#0066FF] font-medium"
                                                : "text-zinc-600 hover:bg-zinc-50 hover:text-[#0066FF]"
                                        )}
                                    >
                                        {multiSelect && (
                                            <div className={cn(
                                                "w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors",
                                                active ? "bg-[#0066FF] border-[#0066FF]" : "border-zinc-300 bg-white"
                                            )}>
                                                {active && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                                            </div>
                                        )}
                                        {option.icon && <div className="shrink-0">{option.icon}</div>}
                                        <span className="text-[14px]">{option.label}</span>
                                    </button>
                                );
                            })
                        ) : (
                            <div className="px-4 py-3 text-[14px] text-zinc-400 text-center">
                                No options available
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default StylishDropdown;
