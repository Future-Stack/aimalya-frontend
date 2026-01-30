export default function Settings() {
    return (
        <div className="flex items-center justify-center h-screen">
            <h1 className="text-2xl font-bold text-gray-500">Settings coming soon...</h1>
        </div>
    )
}

// "use client";

// import React, { useState } from "react";
// import {
//     Building2,
//     CreditCard,
//     Bell,
//     User,
//     Puzzle,
//     Trash2,
//     Save,
//     Check,
//     AlertCircle,
//     Plus,
//     Globe,
//     Phone,
//     MapPin,
//     Shield
// } from "lucide-react";
// import { cn } from "@/lib/utils";

// // Types
// type Tab = "account" | "business" | "integrations" | "notifications" | "billing";

// // ----------------------------------------------------------------------
// // SUB-COMPONENTS
// // ----------------------------------------------------------------------

// // 1. Account Settings
// const AccountSettings = () => {
//     return (
//         <div className="space-y-8 animate-fadeIn">
//             <div>
//                 <h2 className="text-xl font-bold text-gray-900">Account Settings</h2>
//                 <div className="bg-white p-6 rounded-2xl border border-gray-200 mt-4 space-y-6">
//                     <div className="space-y-1">
//                         <label className="text-sm font-medium text-gray-700">Full Name</label>
//                         <input
//                             type="text"
//                             defaultValue="xcxxz"
//                             className="w-full px-4 py-2 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
//                         />
//                     </div>
//                     <div className="space-y-1">
//                         <label className="text-sm font-medium text-gray-700">Email Address</label>
//                         <input
//                             type="email"
//                             defaultValue="czxcc@gmail.com"
//                             className="w-full px-4 py-2 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
//                         />
//                     </div>
//                     <div className="space-y-1">
//                         <label className="text-sm font-medium text-gray-700">Password</label>
//                         <div className="flex gap-3">
//                             <input
//                                 type="password"
//                                 defaultValue="........"
//                                 disabled
//                                 className="w-full px-4 py-2 text-sm text-gray-900 bg-gray-50 border border-gray-200 rounded-lg"
//                             />
//                             <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
//                                 Change Password
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div>
//                 <h3 className="text-sm font-medium text-red-500 mb-4">Danger Zone</h3>
//                 <button className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors">
//                     Delete Account
//                 </button>
//             </div>

//             <div className="flex justify-end pt-4">
//                 <button className="flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-sm transition-all">
//                     <Save className="size-4" />
//                     Save Changes
//                 </button>
//             </div>
//         </div>
//     );
// };

// // 2. Business Settings
// const BusinessSettings = () => {
//     return (
//         <div className="space-y-8 animate-fadeIn">
//             <div>
//                 <h2 className="text-xl font-bold text-gray-900">Business Settings</h2>
//                 <div className="bg-white p-6 rounded-2xl border border-gray-200 mt-4 space-y-6">
//                     <div className="space-y-1">
//                         <label className="text-sm font-medium text-gray-700">Business Name</label>
//                         <input
//                             type="text"
//                             defaultValue="sasss"
//                             className="w-full px-4 py-2 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
//                         />
//                     </div>
//                     <div className="space-y-1">
//                         <label className="text-sm font-medium text-gray-700">Business Category</label>
//                         <input
//                             type="text"
//                             placeholder="e.g. Cafe, Restaurant"
//                             className="w-full px-4 py-2 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
//                         />
//                     </div>
//                     <div className="space-y-1">
//                         <div className="flex items-center justify-between mb-1">
//                             <label className="text-sm font-medium text-gray-700">Location</label>
//                             <button className="flex items-center gap-1.5 text-xs font-semibold text-white bg-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors">
//                                 <Plus className="size-3.5" />
//                                 Add new
//                             </button>
//                         </div>
//                         <div className="w-full px-4 py-3 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg flex items-center gap-2">
//                             <MapPin className="size-4 text-gray-400" />
//                             San Francisco, CA
//                         </div>
//                     </div>
//                     <div className="space-y-1">
//                         <label className="text-sm font-medium text-gray-700">Phone Number</label>
//                         <input
//                             type="tel"
//                             defaultValue="+1 (555) 123-4567"
//                             className="w-full px-4 py-2 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
//                         />
//                     </div>
//                     <div className="space-y-1">
//                         <label className="text-sm font-medium text-gray-700">Website</label>
//                         <input
//                             type="url"
//                             defaultValue="https://coffeehaven.com"
//                             className="w-full px-4 py-2 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
//                         />
//                     </div>
//                 </div>
//             </div>

//             <div className="flex justify-end pt-4">
//                 <button className="flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-sm transition-all">
//                     <Save className="size-4" />
//                     Save Changes
//                 </button>
//             </div>
//         </div>
//     );
// };

// // 3. Integrations Settings
// const IntegrationsSettings = () => {
//     return (
//         <div className="space-y-6 animate-fadeIn">
//             <h2 className="text-xl font-bold text-gray-900">Integrations</h2>

//             {/* Google */}
//             <div className="bg-white p-5 rounded-2xl border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
//                 <div className="flex items-start gap-4">
//                     <div className="size-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
//                         {/* Placeholder for Google Logo */}
//                         <span className="font-bold text-gray-600">G</span>
//                     </div>
//                     <div>
//                         <h3 className="text-sm font-bold text-gray-900">Google Business Profile</h3>
//                         <p className="text-xs text-gray-500 mt-1">Connected to: Softvence Shop</p>
//                         <div className="flex items-center gap-1.5 mt-2">
//                             <span className="size-1.5 bg-green-500 rounded-full" />
//                             <span className="text-xs font-medium text-green-600">Active</span>
//                         </div>

//                         <div className="mt-4">
//                             <label className="text-xs font-medium text-gray-500">Sync Frequency</label>
//                             <div className="mt-1 w-32 h-8 border border-gray-200 rounded-lg bg-gray-50"></div>
//                         </div>
//                     </div>
//                 </div>
//                 <button className="px-4 py-2 text-xs font-medium text-red-600 bg-white border border-gray-200 rounded-lg hover:bg-red-50 transition-colors">
//                     Disconnect
//                 </button>
//             </div>

//             {/* Yelp */}
//             <div className="bg-white p-5 rounded-2xl border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
//                 <div className="flex items-start gap-4">
//                     <div className="size-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 text-gray-400">
//                         <Shield className="size-5" />
//                     </div>
//                     <div>
//                         <h3 className="text-sm font-bold text-gray-900">Yelp</h3>
//                         <p className="text-xs text-gray-500 mt-1">Expand your review analysis to Yelp</p>
//                         <p className="text-xs text-gray-400 mt-2 font-medium">Coming soon</p>
//                     </div>
//                 </div>
//                 <button disabled className="px-4 py-2 text-xs font-medium text-gray-400 bg-gray-50 border border-gray-200 rounded-lg cursor-not-allowed">
//                     Connect
//                 </button>
//             </div>

//             {/* TripAdvisor */}
//             <div className="bg-white p-5 rounded-2xl border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
//                 <div className="flex items-start gap-4">
//                     <div className="size-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 text-gray-400">
//                         <Shield className="size-5" />
//                     </div>
//                     <div>
//                         <h3 className="text-sm font-bold text-gray-900">TripAdvisor</h3>
//                         <p className="text-xs text-gray-500 mt-1">Include TripAdvisor reviews in your analysis</p>
//                         <p className="text-xs text-gray-400 mt-2 font-medium">Coming soon</p>
//                     </div>
//                 </div>
//                 <button disabled className="px-4 py-2 text-xs font-medium text-gray-400 bg-gray-50 border border-gray-200 rounded-lg cursor-not-allowed">
//                     Connect
//                 </button>
//             </div>
//         </div>
//     );
// };

// // 4. Notifications Settings
// // Helper for notification items
// const NotificationItem = ({ title, description }: { title: string, description: string }) => (
//     <div className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50/50 transition-colors cursor-pointer">
//         <h4 className="text-sm font-bold text-gray-900">{title}</h4>
//         <p className="text-xs text-gray-500 mt-1">{description}</p>
//     </div>
// );

// const NotificationSettings = () => {
//     return (
//         <div className="space-y-8 animate-fadeIn">
//             <div>
//                 <h2 className="text-xl font-bold text-gray-900">Notification Settings</h2>

//                 <div className="mt-6">
//                     <h3 className="text-sm font-bold text-gray-900 mb-4">Email Notifications</h3>
//                     <div className="space-y-3">
//                         <NotificationItem title="Monthly Reports" description="Receive monthly business intelligence reports" />
//                         <NotificationItem title="Important Alerts" description="Rating drops, negative review spikes" />
//                         <NotificationItem title="Weekly Summary" description="Quick overview of the week's performance" />
//                     </div>
//                 </div>

//                 <div className="mt-8">
//                     <h3 className="text-sm font-bold text-gray-900 mb-4">In-App Notifications</h3>
//                     <div className="space-y-3">
//                         <NotificationItem title="New Negative Review" description="Get notified immediately of 1-2 star reviews" />
//                         <NotificationItem title="Rating Drop" description="Alert when your overall rating decreases" />
//                         <NotificationItem title="Monthly Report Ready" description="Notify when new monthly report is generated" />
//                     </div>
//                 </div>
//             </div>
//             <div className="flex justify-end pt-4">
//                 <button className="flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-sm transition-all">
//                     <Save className="size-4" />
//                     Save Preferences
//                 </button>
//             </div>
//         </div>
//     );
// };


// // 5. Billing Settings
// const BillingSettings = () => {
//     return (
//         <div className="space-y-8 animate-fadeIn">
//             <div>
//                 <h2 className="text-xl font-bold text-gray-900">Billing & Subscription</h2>

//                 <h3 className="text-sm font-bold text-gray-900 mt-6 mb-3">Current Plan</h3>
//                 <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 relative overflow-hidden">
//                     <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//                         <div>
//                             <div className="flex items-baseline gap-2">
//                                 <span className="text-xl font-bold text-gray-900">Professional</span>
//                             </div>
//                             <p className="text-sm text-gray-500 mt-1">Up to 5 locations, unlimited reviews</p>
//                             <div className="flex items-center gap-3 mt-4">
//                                 <button className="px-4 py-2 text-sm font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
//                                     Upgrade Plan
//                                 </button>
//                                 <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
//                                     Change Plan
//                                 </button>
//                             </div>
//                         </div>
//                         <div className="text-right">
//                             <div className="text-3xl font-bold text-gray-900">$149</div>
//                             <div className="text-xs text-gray-500">per month</div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="mt-8">
//                     <h3 className="text-sm font-bold text-gray-900 mb-4">Current Usage</h3>

//                     <div className="space-y-6">
//                         <div>
//                             <div className="flex justify-between text-xs font-medium text-gray-600 mb-2">
//                                 <span>Locations</span>
//                                 <span>1 / 5</span>
//                             </div>
//                             <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
//                                 <div className="h-full bg-blue-600 w-1/5 rounded-full" />
//                             </div>
//                         </div>

//                         <div>
//                             <div className="flex justify-between text-xs font-medium text-gray-600 mb-2">
//                                 <span>Reviews This Month</span>
//                                 <span>234 / Unlimited</span>
//                             </div>
//                             <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
//                                 <div className="h-full bg-green-500 w-full rounded-full" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="mt-8">
//                     <h3 className="text-sm font-bold text-gray-900 mb-4">Payment Method</h3>
//                     <div className="p-4 border border-gray-200 rounded-xl flex items-center justify-between bg-white">
//                         <div className="flex items-center gap-4">
//                             <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-gray-500 border border-gray-300">
//                                 <CreditCard className="size-4" />
//                             </div>
//                             <div>
//                                 <p className="text-sm font-bold text-gray-900">•••• •••• •••• 4242</p>
//                                 <p className="text-xs text-gray-500">Expires 12/2026</p>
//                             </div>
//                         </div>
//                         <button className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
//                             Update
//                         </button>
//                     </div>
//                 </div>

//                 <div className="mt-8">
//                     <h3 className="text-sm font-bold text-gray-900 mb-4">Billing History</h3>
//                     <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100 bg-white">
//                         {[
//                             { date: "Jan 1, 2026", amount: "$149.00", status: "Paid" },
//                             { date: "Dec 1, 2025", amount: "$149.00", status: "Paid" },
//                             { date: "Nov 1, 2025", amount: "$149.00", status: "Paid" }
//                         ].map((invoice, i) => (
//                             <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
//                                 <div className="flex items-center gap-3">
//                                     <span className="text-sm text-gray-600 font-medium w-24">{invoice.date}</span>
//                                     <span className="text-sm font-bold text-gray-900">{invoice.amount}</span>
//                                     <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 uppercase tracking-wide">
//                                         {invoice.status}
//                                     </span>
//                                 </div>
//                                 <button className="text-xs font-medium text-blue-600 hover:text-blue-700 hover:underline">
//                                     Download
//                                 </button>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };


// // ----------------------------------------------------------------------
// // MAIN PAGE
// // ----------------------------------------------------------------------

// export default function SettingsPage() {
//     const [activeTab, setActiveTab] = useState<Tab>("account");

//     const tabs = [
//         { id: "account", label: "Account", icon: User },
//         { id: "business", label: "Business", icon: Building2 },
//         { id: "integrations", label: "Integrations", icon: Puzzle },
//         { id: "notifications", label: "Notifications", icon: Bell },
//         { id: "billing", label: "Billing", icon: CreditCard },
//     ];

//     const renderContent = () => {
//         switch (activeTab) {
//             case "account": return <AccountSettings />;
//             case "business": return <BusinessSettings />;
//             case "integrations": return <IntegrationsSettings />;
//             case "notifications": return <NotificationSettings />;
//             case "billing": return <BillingSettings />;
//             default: return <AccountSettings />;
//         }
//     };

//     return (
//         <div className="space-y-6 pb-8">
//             <div className="mb-8">
//                 <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
//                 <p className="text-sm text-gray-500 mt-1">Manage your account and preferences</p>
//             </div>

//             <div className="flex flex-col md:flex-row gap-8 items-start">
//                 {/* Sidebar */}
//                 <div className="w-full md:w-64 shrink-0 space-y-1">
//                     <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm sticky top-6">
//                         {tabs.map((tab) => {
//                             const Icon = tab.icon;
//                             const isActive = activeTab === tab.id;
//                             return (
//                                 <button
//                                     key={tab.id}
//                                     onClick={() => setActiveTab(tab.id as Tab)}
//                                     className={cn(
//                                         "w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 mb-3",
//                                         isActive
//                                             ? "bg-blue-600 text-white shadow-md shadow-blue-600/20 translate-x-1"
//                                             : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
//                                     )}
//                                 >
//                                     <Icon className="size-4.5" />
//                                     {tab.label}
//                                 </button>
//                             );
//                         })}
//                     </div>
//                 </div>

//                 {/* Content Area */}
//                 <div className="flex-1 min-w-0 w-full">
//                     <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 min-h-[600px]">
//                         {renderContent()}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
