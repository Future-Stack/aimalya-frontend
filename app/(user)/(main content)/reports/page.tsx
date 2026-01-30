export default function Reports() {
    return (
        <div className="flex items-center justify-center h-screen">
            <h1 className="text-2xl font-bold text-gray-500">Reports coming soon...</h1>
        </div>
    )
}

// "use client";

// import React from "react";
// import {
//     FileText,
//     Calendar,
//     Download,
//     TrendingUp,
//     TrendingDown,
//     AlertCircle,
//     CheckCircle2,
//     Settings,
// } from "lucide-react";
// import {
//     BarChart,
//     Bar,
//     LineChart,
//     Line,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     ResponsiveContainer,
// } from "recharts";
// import { cn } from "@/lib/utils";

// // Mock Data
// const volumeData = [
//     { week: "Week 1", volume: 65 },
//     { week: "Week 2", volume: 80 },
//     { week: "Week 3", volume: 75 },
//     { week: "Week 4", volume: 90 },
// ];

// const ratingData = [
//     { week: "Week 1", rating: 4.5 },
//     { week: "Week 2", rating: 4.6 },
//     { week: "Week 3", rating: 4.7 },
//     { week: "Week 4", rating: 4.6 },
// ];

// const complaints = [
//     { label: "Slow service", count: "23 mentions" },
//     { label: "Limited parking", count: "18 mentions" },
//     { label: "Noise level", count: "12 mentions" },
// ];

// const praises = [
//     { label: "Quality coffee", count: "145 mentions" },
//     { label: "Friendly staff", count: "132 mentions" },
//     { label: "Cozy atmosphere", count: "98 mentions" },
// ];

// const recommendations = [
//     {
//         title: "1. Optimize Staff Scheduling During Peak Hours",
//         description: "Implement time-slot based staffing to reduce wait times during 11am-1pm and 5pm-7pm periods. Estimated improvement: +12% satisfaction.",
//     },
//     {
//         title: "2. Launch Customer Loyalty Program",
//         description: "Address price perception concerns by introducing rewards for repeat customers. Estimated improvement: +7% satisfaction.",
//     },
// ];

// const actionPlan = [
//     "Hire 2 additional staff members for peak hours",
//     "Implement mobile pre-ordering system",
//     "Launch loyalty program by end of month",
//     "Improve review response rate to 80%+",
//     "Partner with nearby parking facilities",
// ];

// const reportsList = [
//     { name: "January 2026 Monthly Report", generated: "December 2025", active: true },
//     { name: "December 2025 Monthly", generated: "November 2025", active: false },
//     { name: "Q4 2025 Quarterly Report", generated: "Oct-Dec 2025", active: false },
//     { name: "February 2026 Monthly Report", generated: "January 2026", active: false },
// ];

// export default function ReportsPage() {
//     return (
//         <div className="flex flex-col lg:flex-row gap-8 pb-12">
//             {/* Sidebar List */}
//             <div className="w-full lg:w-80 space-y-8 flex-shrink-0">
//                 <div className="space-y-4">
//                     <h3 className="font-bold text-gray-900 px-1">All Reports</h3>
//                     <div className="space-y-3">
//                         {reportsList.map((report, i) => (
//                             <div
//                                 key={i}
//                                 className={cn(
//                                     "p-4 rounded-xl border transition-all cursor-pointer group",
//                                     report.active
//                                         ? "bg-blue-50 border-blue-200 shadow-sm"
//                                         : "bg-white border-gray-100 hover:border-gray-200 hover:shadow-sm"
//                                 )}
//                             >
//                                 <div className="flex items-start gap-3">
//                                     <FileText className={cn(
//                                         "size-5",
//                                         report.active ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600"
//                                     )} />
//                                     <div>
//                                         <h4 className={cn(
//                                             "text-sm font-semibold",
//                                             report.active ? "text-blue-900" : "text-gray-700"
//                                         )}>{report.name}</h4>
//                                         <div className="flex items-center gap-2 mt-1.5">
//                                             <span className={cn(
//                                                 "text-[10px] px-1.5 py-0.5 rounded font-medium",
//                                                 report.active ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-600"
//                                             )}>Generated</span>
//                                             <span className="text-[10px] text-gray-400">{report.generated}</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="space-y-4">
//                     <h3 className="font-bold text-gray-900 px-1">Auto-Schedule</h3>
//                     <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm space-y-4">
//                         <div className="flex items-center justify-between">
//                             <div className="flex items-center gap-2">
//                                 <Calendar className="size-4 text-gray-400" />
//                                 <span className="text-sm font-medium text-gray-700">Monthly Report</span>
//                             </div>
//                             <div className="flex items-center gap-2">
//                                 <span className="text-[10px] text-gray-400">1st of month</span>
//                                 <div className="w-9 h-5 bg-blue-600 rounded-full relative cursor-pointer">
//                                     <div className="absolute right-1 top-1 size-3 bg-white rounded-full shadow-sm" />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="flex items-center justify-between">
//                             <div className="flex items-center gap-2">
//                                 <Settings className="size-4 text-gray-400" />
//                                 <span className="text-sm font-medium text-gray-700">Email Delivery</span>
//                             </div>
//                             <div className="w-9 h-5 bg-blue-600 rounded-full relative cursor-pointer">
//                                 <div className="absolute right-1 top-1 size-3 bg-white rounded-full shadow-sm" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className="flex-1 min-w-0">
//                 <div className="flex items-center justify-between mb-8">
//                     <div>
//                         <h1 className="text-2xl font-bold text-gray-900">Monthly Reports</h1>
//                         <p className="text-sm text-gray-500 mt-1">Generated business intelligence reports</p>
//                     </div>
//                     <div className="flex gap-3">
//                         <button className="flex items-center gap-2 px-4 py-2 bg-white border border-blue-200 text-blue-600 text-sm font-semibold rounded-lg hover:bg-blue-50 transition-colors">
//                             <Download className="size-4" />
//                             PDF
//                         </button>
//                         <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
//                             <Download className="size-4" />
//                             Excel
//                         </button>
//                     </div>
//                 </div>

//                 <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8 space-y-8">
//                     {/* Report Header */}
//                     <div>
//                         <h2 className="text-xl font-bold text-gray-900">January 2026 Monthly Report</h2>
//                         <p className="text-sm text-gray-500 mt-1">Period: December 2025</p>

//                         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
//                             {[
//                                 { label: "Avg. Rating", value: "4.6", trend: "+0.2 vs prev", color: "text-green-600" },
//                                 { label: "Reviews", value: "234", trend: "+18 vs prev", color: "text-green-600" },
//                                 { label: "Satisfaction", value: "87%", trend: "+5% vs prev", color: "text-green-600" },
//                                 { label: "Response Rate", value: "68%", trend: "-5% vs prev", color: "text-red-500" },
//                             ].map((stat, i) => (
//                                 <div key={i} className="p-4 bg-gray-50 rounded-xl">
//                                     <p className="text-xs font-medium text-gray-500">{stat.label}</p>
//                                     <h4 className="text-xl font-bold text-gray-900 mt-1">{stat.value}</h4>
//                                     <p className={cn("text-[10px] font-bold mt-1", stat.color)}>{stat.trend}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Executive Summary */}
//                     <div>
//                         <h3 className="font-bold text-gray-900 mb-3">1. Executive Summary</h3>
//                         <div className="bg-blue-50/50 p-4 rounded-xl text-sm text-blue-900 leading-relaxed border border-blue-100">
//                             December 2025 showed strong performance with a 87% customer satisfaction score, up 5% from the previous month. Total review volume increased by 8% to 234 reviews. The overall rating improved to 4.6, driven primarily by improvements in service quality and product offerings. Key areas requiring attention include response rate optimization and peak hour service speed.
//                         </div>
//                     </div>

//                     {/* Charts */}
//                     <div>
//                         <h3 className="font-bold text-gray-900 mb-4">2. Review Volume & Rating Trends</h3>
//                         <div className="grid md:grid-cols-2 gap-8">
//                             <div className="h-48 w-full">
//                                 <p className="text-xs text-gray-500 mb-2">Review Volume by Week</p>
//                                 <ResponsiveContainer width="100%" height="100%">
//                                     <BarChart data={volumeData}>
//                                         <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
//                                         <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
//                                         <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
//                                         <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />
//                                         <Bar dataKey="volume" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
//                                     </BarChart>
//                                 </ResponsiveContainer>
//                             </div>
//                             <div className="h-48 w-full">
//                                 <p className="text-xs text-gray-500 mb-2">Rating Trend</p>
//                                 <ResponsiveContainer width="100%" height="100%">
//                                     <LineChart data={ratingData}>
//                                         <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
//                                         <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
//                                         <YAxis domain={[4, 5]} axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
//                                         <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />
//                                         <Line type="monotone" dataKey="rating" stroke="#3b82f6" strokeWidth={2} dot={{ fill: '#3b82f6', r: 3 }} />
//                                     </LineChart>
//                                 </ResponsiveContainer>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Sentiment Breakdown */}
//                     <div>
//                         <h3 className="font-bold text-gray-900 mb-3">3. Sentiment Breakdown</h3>
//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                             <div className="p-4 bg-green-50 rounded-xl">
//                                 <p className="text-xs font-bold text-green-700">Positive</p>
//                                 <p className="text-2xl font-bold text-green-900 mt-1">80%</p>
//                                 <p className="text-[10px] text-green-600 mt-1">188 reviews</p>
//                             </div>
//                             <div className="p-4 bg-gray-50 rounded-xl">
//                                 <p className="text-xs font-bold text-gray-600">Neutral</p>
//                                 <p className="text-2xl font-bold text-gray-800 mt-1">15%</p>
//                                 <p className="text-[10px] text-gray-500 mt-1">35 reviews</p>
//                             </div>
//                             <div className="p-4 bg-red-50 rounded-xl">
//                                 <p className="text-xs font-bold text-red-700">Negative</p>
//                                 <p className="text-2xl font-bold text-red-900 mt-1">5%</p>
//                                 <p className="text-[10px] text-red-600 mt-1">11 reviews</p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Lists */}
//                     <div className="space-y-6">
//                         <div>
//                             <h3 className="font-bold text-gray-900 mb-3">4. Top Complaints</h3>
//                             <div className="space-y-2">
//                                 {complaints.map((item, i) => (
//                                     <div key={i} className="flex justify-between p-3 bg-red-50/50 rounded-lg text-sm">
//                                         <span className="font-semibold text-gray-800">{item.label}</span>
//                                         <span className="text-gray-500">{item.count}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                         <div>
//                             <h3 className="font-bold text-gray-900 mb-3">5. Top Praises</h3>
//                             <div className="space-y-2">
//                                 {praises.map((item, i) => (
//                                     <div key={i} className="flex justify-between p-3 bg-green-50/50 rounded-lg text-sm">
//                                         <span className="font-semibold text-gray-800">{item.label}</span>
//                                         <span className="text-gray-500">{item.count}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>

//                     {/* AI Recommendations */}
//                     <div>
//                         <h3 className="font-bold text-gray-900 mb-3">6. AI Recommendations</h3>
//                         <div className="space-y-3">
//                             {recommendations.map((rec, i) => (
//                                 <div key={i} className="p-4 bg-blue-50/50 border border-blue-100 rounded-xl">
//                                     <h4 className="text-sm font-bold text-blue-900">{rec.title}</h4>
//                                     <p className="text-xs text-blue-800/80 mt-1 leading-relaxed">{rec.description}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Action Plan */}
//                     <div>
//                         <h3 className="font-bold text-gray-900 mb-3">7. Recommended Action Plan</h3>
//                         <div className="space-y-2">
//                             {actionPlan.map((step, i) => (
//                                 <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
//                                     <div className="flex items-center justify-center size-5 rounded-full bg-blue-600 text-white text-xs font-bold flex-shrink-0">
//                                         {i + 1}
//                                     </div>
//                                     <span className="text-sm text-gray-700 font-medium">{step}</span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// }
