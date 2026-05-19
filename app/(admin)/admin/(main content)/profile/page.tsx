"use client";

import React, { useState, useEffect } from "react";
import { Camera, Loader2, Save, UserCircle } from "lucide-react";
import { PageHeaderSkeleton, SectionSkeleton } from "@/components/admin/AdminSkeletons";
import toast from "react-hot-toast";
import {
    useGetAdminProfileQuery,
    useUpdateAdminProfileMutation,
} from "@/redux/api/BE/admin/profileApi";

export default function AdminProfile() {
    const { data: profileRes, isLoading } = useGetAdminProfileQuery();
    const [updateProfile, { isLoading: isSaving }] = useUpdateAdminProfileMutation();
    const admin = profileRes?.data;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.split("/api/v1")[0] || "";

    const [name, setName] = useState("");
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState("");

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
            <div>
                <h1 className="text-2xl font-bold text-[#0F172A]">Admin Profile</h1>
                <p className="text-gray-500">Manage your administrative details and account credentials</p>
            </div>

            {/* Profile Section Card */}
            <form onSubmit={handleSave} className="space-y-8">
                <section className="admin-card border border-[#22D3EE]/30 bg-white shadow-none rounded-xl p-6">
                    {/* Header bar */}
                    <div className="flex items-center gap-2 border-b border-[#F1F5F9] pb-4">
                        <UserCircle className="size-5 text-[#0891B2]" />
                        <h3 className="text-lg font-bold text-[#0F172A]">Account Information</h3>
                    </div>

                    <div className="mt-6 flex flex-col md:flex-row gap-8 items-start">
                        {/* Profile Image Column */}
                        <div className="flex flex-col items-center gap-3 shrink-0 mx-auto md:mx-0">
                            <div className="relative group">
                                <div className="size-32 rounded-full overflow-hidden ring-4 ring-[#22D3EE]/10 shadow-inner">
                                    <img
                                        src={previewUrl || defaultAvatar}
                                        alt="Admin Avatar"
                                        className="size-full object-cover"
                                    />
                                </div>
                                <label className="absolute bottom-0 right-0 p-2.5 bg-[#22D3EE] rounded-full text-white shadow-lg cursor-pointer hover:bg-[#06B6D4] transition-colors border-2 border-white">
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
                                    className="w-full rounded-lg border border-[#22D3EE]/30 bg-white p-3 text-sm text-[#0F172A] focus:border-[#22D3EE] focus:outline-none focus:ring-1 focus:ring-[#22D3EE] transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                                <input
                                    type="email"
                                    value={admin?.email || ""}
                                    disabled
                                    className="w-full rounded-lg border border-[#22D3EE]/20 bg-gray-50 p-3 text-sm text-gray-400 cursor-not-allowed outline-none"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Role</label>
                                    <input
                                        type="text"
                                        value={admin?.role || "ADMIN"}
                                        disabled
                                        className="w-full rounded-lg border border-[#22D3EE]/20 bg-gray-50 p-3 text-sm text-gray-400 cursor-not-allowed outline-none uppercase font-semibold tracking-wide"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Member Since</label>
                                    <input
                                        type="text"
                                        value={admin?.createdAt ? new Date(admin.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : ""}
                                        disabled
                                        className="w-full rounded-lg border border-[#22D3EE]/20 bg-gray-50 p-3 text-sm text-gray-400 cursor-not-allowed outline-none"
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
                        className="flex items-center gap-2 rounded-lg bg-[#22D3EE] px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#22D3EE]/20 hover:bg-[#06B6D4] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
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
        </div>
    );
}
