"use client";

import React, { useState, useEffect } from "react";
import { Camera, Loader2, Save, UserCircle, Plus, X } from "lucide-react";
import { PageHeaderSkeleton, SectionSkeleton } from "@/components/admin/AdminSkeletons";
import toast from "react-hot-toast";
import {
    useGetAdminProfileQuery,
    useUpdateAdminProfileMutation,
    useRegisterAdminMutation,
} from "@/redux/api/BE/admin/profileApi";

export default function AdminProfile() {
    const { data: profileRes, isLoading } = useGetAdminProfileQuery();
    const [updateProfile, { isLoading: isSaving }] = useUpdateAdminProfileMutation();
    const admin = profileRes?.data;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.split("/api/v1")[0] || "";

    const [name, setName] = useState("");
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState("");

    const [isAddAdminModalOpen, setIsAddAdminModalOpen] = useState(false);
    const [newAdminData, setNewAdminData] = useState({ name: "", email: "", password: "", role: "ADMIN" });
    const [registerAdmin, { isLoading: isRegistering }] = useRegisterAdminMutation();

    // Populate form fields once data loads
    useEffect(() => {
        if (admin) {
            setName(admin.name || "");
            setPreviewUrl(admin.profileImage ? `${baseUrl}${admin.profileImage}` : "");
        }
    }, [admin, baseUrl]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setImageFile(file);
        setPreviewUrl(URL.createObjectURL(file));
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) {
            toast.error("Name cannot be empty");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        if (imageFile) {
            formData.append("image", imageFile);
        }

        try {
            await updateProfile(formData).unwrap();
            toast.success("Profile saved successfully!");
            setImageFile(null); // Clear selected file state
        } catch (err: any) {
            toast.error(err?.data?.message || "Failed to save profile. Please try again.");
            console.error("Failed to save admin profile:", err);
        }
    };

    const handleRegisterAdmin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await registerAdmin(newAdminData).unwrap();
            toast.success("ADMIN account created successfully.");
            setIsAddAdminModalOpen(false);
            setNewAdminData({ name: "", email: "", password: "", role: "ADMIN" });
        } catch (err: any) {
            toast.error(err?.data?.message || "Failed to create admin. Please try again.");
            console.error("Failed to create admin:", err);
        }
    };

    if (isLoading) {
        return (
            <div className="space-y-8 pb-12">
                <PageHeaderSkeleton />
                <div className="space-y-8">
                    <SectionSkeleton rows={3} />
                </div>
            </div>
        );
    }

    const defaultAvatar = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

    return (
        <div className="space-y-8 pb-12">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-[#0F172A]">Admin Profile</h1>
                    <p className="text-gray-500">Manage your administrative details and account credentials</p>
                </div>
                <button 
                    onClick={() => setIsAddAdminModalOpen(true)}
                    className="flex items-center gap-2 rounded-lg bg-[var(--primary-brand)] px-4 py-2 text-sm font-bold text-white shadow-md shadow-[var(--primary-brand)]/20 hover:bg-[#06B6D4] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                    <Plus className="size-4" />
                    Add new admin
                </button>
            </div>

            {/* Profile Section Card */}
            <form onSubmit={handleSave} className="space-y-8">
                <section className="admin-card border border-[var(--primary-brand)]/30 bg-white shadow-none rounded-xl p-6">
                    {/* Header bar */}
                    <div className="flex items-center gap-2 border-b border-[#F1F5F9] pb-4">
                        <UserCircle className="size-5 text-[#0891B2]" />
                        <h3 className="text-lg font-bold text-[#0F172A]">Account Information</h3>
                    </div>

                    <div className="mt-6 flex flex-col md:flex-row gap-8 items-start">
                        {/* Profile Image Column */}
                        <div className="flex flex-col items-center gap-3 shrink-0 mx-auto md:mx-0">
                            <div className="relative group">
                                <div className="size-32 rounded-full overflow-hidden ring-4 ring-[var(--primary-brand)]/10 shadow-inner">
                                    <img
                                        src={previewUrl || defaultAvatar}
                                        alt="Admin Avatar"
                                        className="size-full object-cover"
                                    />
                                </div>
                                <label className="absolute bottom-0 right-0 p-2.5 bg-[var(--primary-brand)] rounded-full text-white shadow-lg cursor-pointer hover:bg-[#06B6D4] transition-colors border-2 border-white">
                                    <Camera className="size-4.5" />
                                    <input
                                        type="file"
                                        className="hidden"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        disabled={isSaving}
                                    />
                                </label>
                            </div>
                            <div className="text-center">
                                <h4 className="text-sm font-bold text-[#0F172A]">Avatar Photo</h4>
                                <p className="text-xs text-gray-400 mt-0.5">JPG, JPEG or PNG</p>
                            </div>
                        </div>

                        {/* Input Fields Column */}
                        <div className="flex-1 w-full space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Full Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full rounded-lg border border-[var(--primary-brand)]/30 bg-white p-3 text-sm text-[#0F172A] focus:border-[var(--primary-brand)] focus:outline-none focus:ring-1 focus:ring-[var(--primary-brand)] transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                                <input
                                    type="email"
                                    value={admin?.email || ""}
                                    disabled
                                    className="w-full rounded-lg border border-[var(--primary-brand)]/20 bg-gray-50 p-3 text-sm text-gray-400 cursor-not-allowed outline-none"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Role</label>
                                    <input
                                        type="text"
                                        value={admin?.role || "ADMIN"}
                                        disabled
                                        className="w-full rounded-lg border border-[var(--primary-brand)]/20 bg-gray-50 p-3 text-sm text-gray-400 cursor-not-allowed outline-none uppercase font-semibold tracking-wide"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Member Since</label>
                                    <input
                                        type="text"
                                        value={admin?.createdAt ? new Date(admin.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : ""}
                                        disabled
                                        className="w-full rounded-lg border border-[var(--primary-brand)]/20 bg-gray-50 p-3 text-sm text-gray-400 cursor-not-allowed outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Save Changes Action */}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={isSaving}
                        className="flex items-center gap-2 rounded-lg bg-[var(--primary-brand)] px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-[var(--primary-brand)]/20 hover:bg-[#06B6D4] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                    >
                        {isSaving ? (
                            <Loader2 className="size-4 animate-spin" />
                        ) : (
                            <>
                                <Save className="size-4" />
                                Save Changes
                            </>
                        )}
                    </button>
                </div>
            </form>

            {/* Add Admin Modal */}
            {isAddAdminModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl relative">
                        <button
                            onClick={() => setIsAddAdminModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
                        >
                            <X className="size-5" />
                        </button>
                        <h2 className="text-xl font-bold text-[#0F172A] mb-6">Add New Admin</h2>
                        
                        <form onSubmit={handleRegisterAdmin} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Name</label>
                                <input
                                    type="text"
                                    required
                                    value={newAdminData.name}
                                    onChange={(e) => setNewAdminData({ ...newAdminData, name: e.target.value })}
                                    className="w-full rounded-lg border border-[var(--primary-brand)]/30 bg-white p-3 text-sm text-[#0F172A] focus:border-[var(--primary-brand)] focus:outline-none focus:ring-1 focus:ring-[var(--primary-brand)] transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={newAdminData.email}
                                    onChange={(e) => setNewAdminData({ ...newAdminData, email: e.target.value })}
                                    className="w-full rounded-lg border border-[var(--primary-brand)]/30 bg-white p-3 text-sm text-[#0F172A] focus:border-[var(--primary-brand)] focus:outline-none focus:ring-1 focus:ring-[var(--primary-brand)] transition-all"
                                    placeholder="abc@gmail.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Password</label>
                                <input
                                    type="password"
                                    required
                                    value={newAdminData.password}
                                    onChange={(e) => setNewAdminData({ ...newAdminData, password: e.target.value })}
                                    className="w-full rounded-lg border border-[var(--primary-brand)]/30 bg-white p-3 text-sm text-[#0F172A] focus:border-[var(--primary-brand)] focus:outline-none focus:ring-1 focus:ring-[var(--primary-brand)] transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                            
                            <div className="pt-4 flex justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={() => setIsAddAdminModalOpen(false)}
                                    className="px-4 py-2 rounded-lg text-sm font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isRegistering}
                                    className="flex items-center gap-2 rounded-lg bg-[var(--primary-brand)] px-4 py-2 text-sm font-bold text-white shadow-md shadow-[var(--primary-brand)]/20 hover:bg-[#06B6D4] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                                >
                                    {isRegistering ? (
                                        <Loader2 className="size-4 animate-spin" />
                                    ) : (
                                        "Create Admin"
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
