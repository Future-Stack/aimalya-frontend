"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import {
    Search,
    Star,
    MessageSquare,
    Reply,
    AlertCircle,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Calendar,
    ThumbsUp,
    ThumbsDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import ReviewDetailsModal from "@/components/user/review/ReviewDetailsModal";

// Mock Data
const reviewsData = [
    {
        id: 1,
        user: "Pepper Potts",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        rating: 4.5,
        date: "05/01/26",
        content: "Absolutely love this place! The coffee is amazing and the staff is so friendly. The atmosphere is perfect for working on my laptop. Will definitely come back!",
        tags: ["Quality", "Service", "Atmosphere", "Satisfaction"],
        status: "Replied",
        sentiment: "positive",
    },
    {
        id: 2,
        user: "John Doe",
        avatar: "", // No avatar usage
        initials: "J",
        color: "bg-blue-100 text-blue-600",
        rating: 4.5,
        date: "05/01/26",
        content: "Absolutely love this place! The coffee is amazing and the staff is so friendly. The atmosphere is perfect for working on my laptop. Will definitely come back!",
        tags: ["Quality", "Service", "Atmosphere", "Satisfaction"],
        status: "No response",
        sentiment: "positive",
    },
    {
        id: 3,
        user: "John Doe",
        avatar: "",
        initials: "J",
        color: "bg-blue-100 text-blue-600",
        rating: 3.0,
        date: "05/01/26",
        content: "The coffee was okay but the waiting time was too long. Hope you improve this.",
        tags: ["Service", "Wait time"],
        status: "No response",
        sentiment: "negative",
    },
    {
        id: 4,
        user: "John Doe",
        avatar: "",
        initials: "J",
        color: "bg-blue-100 text-blue-600",
        rating: 5.0,
        date: "05/01/26",
        content: "Best place in town! Highly recommended.",
        tags: ["Quality", "Satisfaction"],
        status: "No response",
        sentiment: "positive",
    },
    {
        id: 5,
        user: "Alice Smith",
        avatar: "",
        initials: "A",
        color: "bg-purple-100 text-purple-600",
        rating: 2.0,
        date: "04/01/26",
        content: "Not what I expected. The place was messy.",
        tags: ["Cleanliness"],
        status: "No response",
        sentiment: "negative",
    },
    {
        id: 6,
        user: "Bob Brown",
        avatar: "",
        initials: "B",
        color: "bg-green-100 text-green-600",
        rating: 4.0,
        date: "03/01/26",
        content: "Good experience overall.",
        tags: ["Service"],
        status: "Replied",
        sentiment: "positive",
    },
    {
        id: 7,
        user: "Charlie Day",
        avatar: "",
        initials: "C",
        color: "bg-orange-100 text-orange-600",
        rating: 4.5,
        date: "02/01/26",
        content: "Loved the muffins!",
        tags: ["Food"],
        status: "No response",
        sentiment: "positive",
    },
];

const stats = [
    { label: "Total Reviews", value: "200", sub: "Total Reviews", icon: MessageSquare, color: "bg-blue-50 text-blue-600" },
    { label: "Replied To", value: "20", sub: "20% response rate", icon: Reply, color: "bg-blue-50 text-blue-600" },
    { label: "No Response", value: "180", sub: "Needs attention", icon: AlertCircle, color: "bg-blue-50 text-blue-600", alert: true },
    { label: "Avg. Rating", value: "4.1", sub: "Stars", icon: Star, color: "bg-blue-50 text-blue-600", stars: true },
];

const ITEMS_PER_PAGE = 5;

// Custom Dropdown Component
function CustomDropdown({
    label,
    options,
    value,
    onChange
}: {
    label: string,
    options: { label: string, value: string }[],
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

    const selectedLabel = options.find(opt => opt.value === value)?.label || label;

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 min-w-[140px] transition-all"
            >
                <span>{selectedLabel}</span>
                <ChevronDown className={cn("size-4 text-gray-400 transition-transform", isOpen && "rotate-180")} />
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 mt-1 w-full bg-white rounded-lg border border-gray-100 shadow-lg z-20 py-1 animate-in fade-in zoom-in-95 duration-100 overflow-hidden">
                    {options.map((option) => (
                        <button
                            key={option.value}
                            onClick={() => {
                                onChange(option.value);
                                setIsOpen(false);
                            }}
                            className={cn(
                                "w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-gray-50",
                                value === option.value ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700"
                            )}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function ReviewPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedRating, setSelectedRating] = useState("all");
    const [selectedSentiment, setSelectedSentiment] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedReview, setSelectedReview] = useState<any>(null);

    // Derived Data
    const filteredReviews = useMemo(() => {
        return reviewsData.filter(review => {
            const matchesSearch =
                review.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                review.user.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesRating = selectedRating === "all" || Math.floor(review.rating).toString() === selectedRating;

            // Using "Natural" to map to Neutral/Mixed if we had it, or just exact match
            const matchesSentiment =
                selectedSentiment === "all" ||
                (selectedSentiment === "natural" && review.sentiment === "neutral") ||
                review.sentiment === selectedSentiment;

            return matchesSearch && matchesRating && matchesSentiment;
        });
    }, [searchTerm, selectedRating, selectedSentiment]);

    const totalPages = Math.ceil(filteredReviews.length / ITEMS_PER_PAGE);

    const currentReviews = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredReviews.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [filteredReviews, currentPage]);

    // Reset pagination when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, selectedRating, selectedSentiment]);

    const handleCardClick = (review: any) => {
        setSelectedReview(review);
        setIsModalOpen(true);
    };

    return (
        <div className="space-y-6 pb-8">
            {/* Header */}
            <div>
                <h1 className="text-lg font-bold text-gray-900">Reviews Analysis</h1>
                <p className="text-gray-500 text-sm">Analyze and explore all your customer reviews</p>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, i) => (
                    <div key={i} className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-semibold text-gray-700">{stat.label}</p>
                                <h3 className={cn(
                                    "text-2xl font-bold mt-2",
                                    stat.alert ? "text-red-500" : "text-gray-900"
                                )}>{stat.value}</h3>
                            </div>
                            <div className={cn("p-2 rounded-lg", stat.color)}>
                                <stat.icon className="size-5" />
                            </div>
                        </div>
                        <div className="mt-4">
                            {stat.stars ? (
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4].map((_, i) => <Star key={i} className="size-4 fill-amber-400 text-amber-400" />)}
                                    <Star className="size-4 fill-amber-400 text-amber-400 opacity-50" />
                                </div>
                            ) : (
                                <p className={cn("text-xs font-medium", stat.alert ? "text-red-500" : "text-gray-500")}>
                                    {stat.sub}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 bg-white p-2 rounded-xl border border-gray-100 shadow-sm">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="search review"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="h-10 w-full bg-blue-50/50 rounded-lg pl-10 pr-4 text-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 border-transparent border outline-none transition-all placeholder:text-gray-400"
                    />
                </div>
                <div className="flex flex-wrap gap-2">
                    <CustomDropdown
                        label="All ratings"
                        value={selectedRating}
                        onChange={setSelectedRating}
                        options={[
                            { label: "All ratings", value: "all" },
                            { label: "5 stars", value: "5" },
                            { label: "4 stars", value: "4" },
                            { label: "3 stars", value: "3" },
                            { label: "2 stars", value: "2" },
                            { label: "1 stars", value: "1" },
                        ]}
                    />
                    <CustomDropdown
                        label="All Sentiments"
                        value={selectedSentiment}
                        onChange={setSelectedSentiment}
                        options={[
                            { label: "All Sentiments", value: "all" },
                            { label: "Positive", value: "positive" },
                            { label: "Natural", value: "natural" }, // "Natural" as per image
                            { label: "Negative", value: "negative" },
                        ]}
                    />
                </div>
            </div>

            {/* Review List */}
            <div className="space-y-4 min-h-[400px]">
                {currentReviews.length > 0 ? (
                    currentReviews.map((review) => (
                        <div
                            key={review.id}
                            onClick={() => handleCardClick(review)}
                            className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group active:scale-[0.99]"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                                <div className="flex gap-3">
                                    {review.avatar ? (
                                        <img src={review.avatar} alt={review.user} className="size-10 sm:size-12 rounded-full object-cover shrink-0" />
                                    ) : (
                                        <div className={cn("size-10 sm:size-12 rounded-full flex items-center justify-center text-sm font-bold shrink-0", review.color)}>
                                            {review.initials}
                                        </div>
                                    )}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors truncate">{review.user}</h3>
                                                <div className="flex items-center gap-0.5 shrink-0">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={cn(
                                                                "size-3.5",
                                                                i < Math.floor(review.rating) ? "fill-amber-400 text-amber-400" :
                                                                    (i === Math.floor(review.rating) && review.rating % 1 !== 0) ? "fill-amber-400 text-amber-400 opacity-50" : "text-gray-200"
                                                            )}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="flex items-center text-xs text-gray-400">
                                                <Calendar className="size-3 mr-1" />
                                                {review.date}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 sm:justify-end">
                                    <span className={cn(
                                        "px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-medium flex items-center gap-1.5",
                                        review.sentiment === "positive" ? "bg-green-50 text-green-600 border border-green-100" : "bg-red-50 text-red-600 border border-red-100"
                                    )}>
                                        {review.sentiment === "positive" ? <ThumbsUp className="size-3" /> : <ThumbsDown className="size-3" />}
                                        <span className="capitalize">{review.sentiment}</span>
                                    </span>
                                    <span className={cn(
                                        "px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-medium flex items-center gap-1.5",
                                        review.status === "Replied" ? "bg-amber-50 text-amber-600 border border-amber-100" : "bg-orange-50 text-orange-600 border border-orange-100"
                                    )}>
                                        {review.status === "Replied" ? <CheckCircleIcon className="size-3" /> : <AlertCircle className="size-3" />}
                                        {review.status}
                                    </span>
                                </div>
                            </div>

                            <p className="mt-4 text-[13px] sm:text-sm text-gray-600 leading-relaxed font-medium line-clamp-3 sm:line-clamp-none">
                                {review.content}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {review.tags.map((tag: string, i: number) => (
                                    <span key={i} className={cn(
                                        "px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors",
                                        tag === "Quality" ? "bg-blue-50 text-blue-600 hover:bg-blue-100" :
                                            tag === "Service" ? "bg-indigo-50 text-indigo-600 hover:bg-indigo-100" :
                                                tag === "Atmosphere" ? "bg-cyan-50 text-cyan-600 hover:bg-cyan-100" :
                                                    "bg-purple-50 text-purple-600 hover:bg-purple-100"
                                    )}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-gray-100 border-dashed">
                        <MessageSquare className="size-10 text-gray-300 mb-2" />
                        <p className="text-gray-500 font-medium">No reviews found matching your filters.</p>
                        <button
                            onClick={() => {
                                setSearchTerm("");
                                setSelectedRating("all");
                                setSelectedSentiment("all");
                            }}
                            className="mt-4 text-blue-600 text-sm hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-8">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="flex items-center px-3 py-2 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ChevronLeft className="size-3 mr-1" />
                        Previous
                    </button>

                    {[...Array(totalPages)].map((_, i) => {
                        const page = i + 1;
                        return (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={cn(
                                    "size-8 rounded-lg text-xs font-medium transition-all",
                                    currentPage === page
                                        ? "bg-blue-100 text-blue-600"
                                        : "text-gray-500 hover:bg-gray-100"
                                )}
                            >
                                {page}
                            </button>
                        );
                    })}

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

            {/* Modal */}
            <ReviewDetailsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                review={selectedReview}
            />
        </div>
    );
}

// Simple internal icon for visual consistency in status
function CheckCircleIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="m9 11 3 3L22 4" />
        </svg>
    )
}
