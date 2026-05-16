"use client";

import { cn } from "@/lib/utils";

interface SkeletonProps {
    className?: string;
    variant?: "rect" | "circle" | "text";
}

export default function Skeleton({ className, variant = "rect" }: SkeletonProps) {
    return (
        <div
            className={cn(
                "animate-pulse bg-gray-200",
                variant === "circle" && "rounded-full",
                variant === "rect" && "rounded-lg",
                variant === "text" && "rounded-md h-4 w-full",
                className
            )}
        />
    );
}
