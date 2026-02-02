"use client";

import React from "react";
import { Search, Bell } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-30 flex py-4 h-20 w-full items-center justify-between border-b border-[#E2E8F0] bg-white/80 backdrop-blur-md px-4 md:px-6 lg:px-8 transition-all">
            <div className="flex items-center gap-4">
                {/* Search bar visible on most screens */}
                <div className="flex relative items-center">
                    <div className="absolute left-3 text-gray-400 pointer-events-none">
                        <Search className="size-4" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="h-11 w-48 sm:w-64 md:w-80 rounded-xl bg-gray-50 border border-gray-100 pl-10 pr-4 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
                    />
                </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
                {/* Notifications */}
                {/* <button className="relative flex items-center justify-center size-10 rounded-xl text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-all cursor-pointer">
                    <Bell className="size-5" />
                    <span className="absolute right-2 top-2 size-2.5 rounded-full border-2 border-white bg-red-500 ring-4 ring-transparent animate-pulse" />
                </button> */}

                {/* Profile Section */}
                <div className="flex items-center gap-3 ml-2 pl-4 border-l border-gray-100 h-10">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-semibold text-gray-900 leading-none">John Doe</p>
                        <p className="text-[11px] text-gray-400 mt-1 font-medium">Administrator</p>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Profile"
                        className="size-10 rounded-full object-cover ring-2 ring-gray-100"
                    />
                </div>
            </div>
        </nav>
    );
}
