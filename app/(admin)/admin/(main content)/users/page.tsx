"use client";

import React, { useState, useMemo } from "react";
import {
  Users,
  DollarSign,
  Clock,
  AlertCircle,
  Search,
  ChevronDown,
  Eye,
  Trash2,
  TrendingUp,
  TrendingDown,
  ChevronLeft,
  ChevronRight,
  Mail,
  Building2,
  Calendar,
  Ban,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import UserDetailsModal from "../../../../../components/admin/users/UserDetailsModal";
import SuspensionModal from "../../../../../components/admin/users/SuspensionModal";
import DeleteUserModal from "../../../../../components/admin/users/DeleteUserModal";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Custom scrollbar refinement for premium feel
const scrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    height: 6px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #E2E8F0;
    border-radius: 10px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #CBD5E1;
  }
`;

const stats = [
  {
    label: "Total Users",
    value: "167",
    icon: Users,
    change: "+14",
    trend: "up",
    color: "bg-blue-500",
  },
  {
    label: "Active User",
    value: "125",
    icon: DollarSign,
    change: "+5%",
    trend: "up",
    color: "bg-blue-600",
  },
  {
    label: "Trial User",
    value: "23",
    icon: Clock,
    change: "+07",
    trend: "up",
    color: "bg-amber-700",
  },
  {
    label: "Suspended User",
    value: "09",
    icon: AlertCircle,
    change: "-5%",
    trend: "down",
    color: "bg-red-500",
  },
];

const initialUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    status: "Active",
    plan: "Professional",
    businesses: "2 businesses",
    locations: "5 locations",
    mrr: "$79/mo",
    lastActive: "2 hours ago",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@company.com",
    status: "Trial",
    plan: "Business",
    businesses: "3 businesses",
    locations: "8 locations",
    mrr: "$149/mo",
    lastActive: "1 day ago",
  },
  {
    id: 3,
    name: "Robert Johnson",
    email: "robert.j@business.com",
    status: "Active",
    plan: "Starter",
    businesses: "1 businesses",
    locations: "1 locations",
    mrr: "$29/mo",
    lastActive: "5 hours ago",
  },
  {
    id: 4,
    name: "Sarah Williams",
    email: "sarah.w@enterprise.com",
    status: "Active",
    plan: "Enterprise",
    businesses: "5 businesses",
    locations: "25 locations",
    mrr: "$499/mo",
    lastActive: "30 min ago",
  },
  {
    id: 5,
    name: "Michael Brown",
    email: "michael.b@startup.com",
    status: "Suspended",
    plan: "Professional",
    businesses: "1 businesses",
    locations: "2 locations",
    mrr: "$0/mo",
    lastActive: "2 weeks ago",
  },
  {
    id: 6,
    name: "Alice Green",
    email: "alice@example.com",
    status: "Active",
    plan: "Starter",
    businesses: "1 businesses",
    locations: "1 locations",
    mrr: "$29/mo",
    lastActive: "1 hour ago",
  },
  {
    id: 7,
    name: "Steve White",
    email: "steve@test.com",
    status: "Active",
    plan: "Professional",
    businesses: "2 businesses",
    locations: "4 locations",
    mrr: "$79/mo",
    lastActive: "3 hours ago",
  },
];

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isSuspensionModalOpen, setIsSuspensionModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleViewDetails = (user: any) => {
    setSelectedUser(user);
    setIsDetailsModalOpen(true);
  };

  const handleOpenSuspension = (user: any) => {
    setSelectedUser(user);
    setIsSuspensionModalOpen(true);
  };

  const handleOpenDelete = (user: any) => {
    setSelectedUser(user);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmSuspension = () => {
    console.log("Suspending user:", selectedUser.id);
    // Add logic here to update user status
  };

  const handleConfirmDelete = () => {
    console.log("Deleting user:", selectedUser.id);
    // Add logic here to remove user
  };

  const filteredUsers = useMemo(() => {
    return initialUsers.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "All Status" || user.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="space-y-6 md:space-y-8 pb-10">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-[#0F172A]">User Management</h1>
        <p className="text-gray-500 text-sm">
          Manage all platform users and their subscriptions
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </p>
                <p className="mt-1 text-2xl font-bold text-[#0F172A]">
                  {stat.value}
                </p>
              </div>
              <div
                className={cn(
                  "rounded-xl p-2.5 text-white shadow-lg shadow-current/10",
                  stat.color,
                )}
              >
                <stat.icon className="size-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5">
              <div
                className={cn(
                  "flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[10px] font-bold",
                  stat.trend === "up"
                    ? "bg-green-50 text-green-600"
                    : "bg-red-50 text-red-600",
                )}
              >
                {stat.trend === "up" ? (
                  <TrendingUp className="size-3" />
                ) : (
                  <TrendingDown className="size-3" />
                )}
                {stat.change}
              </div>
              <span className="text-[10px] text-gray-400 font-medium">
                vs last month
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border border-[#E2E8F0] p-3 rounded-xl bg-white">
        <div className="relative w-full max-w-8xl">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
            <Search className="size-4 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="block h-11 w-full rounded-xl border border-[#E2E8F0] bg-white pl-10 pr-4 text-sm text-[#0F172A] placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all shadow-sm"
            placeholder="Search users by name or email..."
          />
        </div>

        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex h-11 w-full items-center justify-between gap-2 rounded-xl border border-[#E2E8F0] bg-white px-4 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all cursor-pointer shadow-sm md:w-auto min-w-[140px]"
          >
            <span className="flex items-center gap-2">
              {/* <span className="size-2 rounded-full bg-blue-500" /> */}
              {statusFilter}
            </span>
            <ChevronDown
              className={cn(
                "size-4 text-gray-400 transition-transform",
                isDropdownOpen && "rotate-180",
              )}
            />
          </button>

          {isDropdownOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsDropdownOpen(false)}
              />
              <div className="absolute right-0 z-20 mt-2 w-full origin-top-right rounded-xl border border-[#E2E8F0] bg-white p-1.5 shadow-xl md:w-48 animate-in fade-in zoom-in duration-200">
                {["All Status", "Active", "Trial", "Suspended"].map(
                  (status) => (
                    <button
                      key={status}
                      onClick={() => {
                        setStatusFilter(status);
                        setCurrentPage(1);
                        setIsDropdownOpen(false);
                      }}
                      className={cn(
                        "w-full rounded-lg px-3 py-2 gap-2 my-0.5 flex items-center text-left text-sm font-medium transition-all cursor-pointer",
                        statusFilter === status
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                      )}
                    >
                      {status}
                    </button>
                  ),
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Mobile & Tablet Card View (Visible below lg screens) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:hidden">
        {paginatedUsers.map((user) => (
          <div
            key={user.id}
            className="rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-sm space-y-4 hover:border-blue-200 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 uppercase font-bold text-blue-600">
                  {user.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#0F172A]">
                    {user.name}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Mail className="size-3" /> {user.email}
                  </span>
                </div>
              </div>
              <span
                className={cn(
                  "rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider",
                  user.status === "Active" && "bg-green-50 text-green-700",
                  user.status === "Trial" && "bg-blue-50 text-blue-700",
                  user.status === "Suspended" && "bg-red-50 text-red-700",
                )}
              >
                {user.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 py-3 border-y border-gray-50">
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Plan
                </p>
                <p className="text-sm font-semibold text-gray-700">
                  {user.plan}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Revenue
                </p>
                <p className="text-sm font-bold text-green-600">{user.mrr}</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-500 bg-gray-50/50 rounded-lg p-3">
              <div className="flex items-center gap-1.5">
                <Building2 className="size-3.5 text-blue-500" />
                <span className="font-medium">{user.businesses}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="size-3.5 text-amber-500" />
                <span>{user.lastActive}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={() => handleViewDetails(user)}
                className="flex-1 flex items-center justify-center gap-2 h-10 rounded-lg bg-blue-50 text-blue-600 font-bold text-xs hover:bg-blue-600 hover:text-white transition-all cursor-pointer"
              >
                <Eye className="size-4" /> View
              </button>
              <button
                onClick={() => handleOpenSuspension(user)}
                className="flex items-center justify-center size-10 rounded-lg bg-amber-50 text-amber-600 hover:bg-amber-600 hover:text-white transition-all cursor-pointer"
              >
                <Ban className="size-4" />
              </button>
              <button
                onClick={() => handleOpenDelete(user)}
                className="flex items-center justify-center size-10 rounded-lg bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all cursor-pointer"
              >
                <Trash2 className="size-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table View (Visible from lg screens up) */}
      <div className="hidden xl:block overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
        <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full table-auto text-left text-sm">
            <thead className="bg-[#F8FAFC] text-[11px] font-bold uppercase tracking-wider text-gray-400">
              <tr>
                <th className="px-5 py-5 whitespace-nowrap">User Profile</th>
                <th className="px-5 py-5 whitespace-nowrap">Status</th>
                <th className="px-5 py-5 whitespace-nowrap">Subscription</th>
                <th className="px-5 py-5 whitespace-nowrap">Assets</th>
                <th className="px-5 py-5 whitespace-nowrap">MRR</th>
                <th className="px-5 py-5 whitespace-nowrap">Activity</th>
                <th className="px-5 py-5 text-right whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0]">
              {paginatedUsers.map((user) => (
                <tr
                  key={user.id}
                  className="group hover:bg-blue-50/30 transition-all"
                >
                  <td className="px-5 py-5">
                    <div className="flex items-center gap-4 min-w-[220px]">
                      <div className="relative flex-shrink-0">
                        <img
                          src={`https://ui-avatars.com/api/?name=${user.name}&background=6366f1&color=fff&bold=true`}
                          alt={user.name}
                          className="size-10 rounded-full object-cover ring-2 ring-transparent group-hover:ring-blue-100 transition-all"
                        />
                        <div
                          className={cn(
                            "absolute -bottom-1 -right-1 size-3 rounded-full border-2 border-white",
                            user.status === "Active" ? "bg-green-500" : "bg-gray-400"
                          )}
                        />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-bold text-[#0F172A] truncate">
                          {user.name}
                        </span>
                        <span className="text-xs text-gray-500 truncate">
                          {user.email}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-5 whitespace-nowrap">
                    {/* Status badge – same as before */}
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider",
                        user.status === "Active" && "bg-green-50 text-green-700",
                        user.status === "Trial" && "bg-blue-50 text-blue-700",
                        user.status === "Suspended" && "bg-red-50 text-red-700"
                      )}
                    >
                      <span
                        className={cn(
                          "size-1.5 rounded-full",
                          user.status === "Active" && "bg-green-500",
                          user.status === "Trial" && "bg-blue-500",
                          user.status === "Suspended" && "bg-red-500"
                        )}
                      />
                      {user.status}
                    </span>
                  </td>

                  <td className="px-5 py-5 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="text-[#0F172A] font-bold text-sm tracking-tight">
                        {user.plan}
                      </span>
                      <span className="text-[10px] text-gray-400 font-medium">
                        Billed Monthly
                      </span>
                    </div>
                  </td>

                  <td className="px-5 py-5">
                    <div className="flex items-center gap-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                          <Building2 className="size-3.5 text-blue-500" />
                          <span className="text-[#0F172A] font-bold text-sm">
                            {user.businesses.split(" ")[0]}
                          </span>
                        </div>
                        <span className="text-[10px] text-gray-400 lowercase">
                          {user.locations}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-5 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="font-black text-[#0F172A] text-sm">
                        {user.mrr}
                      </span>
                      <span className="text-[10px] text-green-500 font-bold uppercase">
                        LTV: $1,240
                      </span>
                    </div>
                  </td>

                  <td className="px-5 py-5 whitespace-nowrap">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Clock className="size-3.5" />
                      <span className="text-xs font-medium">
                        {user.lastActive}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2.5 transition-all">
                      <button
                        onClick={() => handleViewDetails(user)}
                        className="flex items-center justify-center size-9 rounded-xl text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white transition-all cursor-pointer shadow-sm"
                      >
                        <Eye className="size-4" />
                      </button>
                      <button
                        onClick={() => handleOpenSuspension(user)}
                        className="flex items-center justify-center size-9 rounded-xl text-amber-600 bg-amber-50 hover:bg-amber-600 hover:text-white transition-all cursor-pointer shadow-sm"
                      >
                        <Ban className="size-4" />
                      </button>
                      <button
                        onClick={() => handleOpenDelete(user)}
                        className="flex items-center justify-center size-9 rounded-xl text-red-600 bg-red-50 hover:bg-red-600 hover:text-white transition-all cursor-pointer shadow-sm"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {paginatedUsers.length === 0 && (
        <div className="py-20 flex flex-col items-center justify-center bg-white rounded-2xl border border-dashed border-gray-300">
          <div className="size-16 rounded-full bg-gray-50 flex items-center justify-center mb-4">
            <Search className="size-8 text-gray-300" />
          </div>
          <p className="text-gray-500 font-bold">No results found</p>
          <p className="text-gray-400 text-sm">
            Try adjusting your search or filters
          </p>
        </div>
      )}

      {/* Pagination */}
      <div className="flex flex-col items-center justify-center gap-4 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-500 font-medium text-center order-2">
          Showing{" "}
          <span className="text-[#0F172A] font-bold">
            {(currentPage - 1) * itemsPerPage + 1}
          </span>{" "}
          to{" "}
          <span className="text-[#0F172A] font-bold">
            {Math.min(currentPage * itemsPerPage, filteredUsers.length)}
          </span>{" "}
          of{" "}
          <span className="text-[#0F172A] font-bold">
            {filteredUsers.length}
          </span>{" "}
          users
        </p>

        {totalPages >= 1 && (
          <div className="flex items-center justify-center gap-1.5 order-1">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="flex items-center justify-center size-9 rounded-xl text-gray-400 hover:bg-gray-50 hover:text-gray-900 disabled:opacity-50 transition-all cursor-pointer shadow-sm disabled:cursor-not-allowed"
            >
              <ChevronLeft className="size-5" />
            </button>

            <div className="flex items-center gap-1.5">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={cn(
                    "size-9 rounded-xl text-xs font-black transition-all cursor-pointer shadow-sm",
                    currentPage === i + 1
                      ? "bg-blue-50 font-bold text-blue-600 ring-1 ring-blue-100"
                      : "text-gray-500 hover:bg-gray-100"
                  )}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className="flex items-center justify-center size-9 rounded-xl text-gray-400 hover:bg-gray-50 hover:text-gray-900 disabled:opacity-50 transition-all cursor-pointer shadow-sm disabled:cursor-not-allowed"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        )}
      </div>

      <UserDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        user={selectedUser}
      />

      <SuspensionModal
        isOpen={isSuspensionModalOpen}
        onClose={() => setIsSuspensionModalOpen(false)}
        onConfirm={handleConfirmSuspension}
        user={selectedUser}
      />

      <DeleteUserModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        user={selectedUser}
      />
    </div>
  );
}