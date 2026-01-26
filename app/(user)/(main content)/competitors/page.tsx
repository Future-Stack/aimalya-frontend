"use client";

import React from "react";
import { Plus, Zap, AlertCircle, CheckCircle } from "lucide-react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    Legend
} from "recharts";
import { cn } from "@/lib/utils";

// Mock Data
const competitors = [
    { name: "Coffee Haven", rating: 4.6, reviews: 234, sentiment: "87%", response: "68%", isBusiness: true },
    { name: "Bean & Brew", rating: 4.7, reviews: 312, sentiment: "89%", response: "85%", color: "text-green-600" },
    { name: "The Daily Grind", rating: 4.4, reviews: 189, sentiment: "78%", response: "45%", color: "text-amber-600" },
    { name: "Espresso Corner", rating: 4.3, reviews: 156, sentiment: "75%", response: "60%", color: "text-purple-600" },
];

const performanceComparisonData = [
    { name: "Rating", "Coffee Haven": 92, "Bean & Brew": 94, "The Daily Grind": 88, "Espresso Corner": 86 },
    { name: "Volume", "Coffee Haven": 75, "Bean & Brew": 100, "The Daily Grind": 60, "Espresso Corner": 50 },
    { name: "Sentiment", "Coffee Haven": 87, "Bean & Brew": 89, "The Daily Grind": 78, "Espresso Corner": 75 },
    { name: "Response Rate", "Coffee Haven": 68, "Bean & Brew": 85, "The Daily Grind": 45, "Espresso Corner": 60 },
];

const radarData = [
    { subject: "Service", A: 120, B: 110, C: 130, D: 100, fullMark: 150 },
    { subject: "Quality", A: 98, B: 130, C: 100, D: 90, fullMark: 150 },
    { subject: "Atmosphere", A: 86, B: 130, C: 90, D: 85, fullMark: 150 },
    { subject: "Value", A: 99, B: 100, C: 85, D: 90, fullMark: 150 },
    { subject: "Location", A: 85, B: 90, C: 80, D: 85, fullMark: 150 },
];

const criteria = [
    { label: "Service Quality", score: 4.5, competitorAvg: 4.3, leader: "Bean & Brew (4.7)" },
    { label: "Product Quality", score: 4.7, competitorAvg: 4.4, leader: "You" },
    { label: "Atmosphere", score: 4.3, competitorAvg: 4.5, leader: "Bean & Brew (4.8)" },
    { label: "Value for Money", score: 4.2, competitorAvg: 4.1, leader: "The Daily Grind (4.6)" },
    { label: "Cleanliness", score: 4.6, competitorAvg: 4.4, leader: "You" },
];

const advantages = [
    {
        title: "Coffee Quality",
        desc: "You lead in coffee quality ratings with 4.7 vs competitor average of 4.3",
        action: "Strength: Highlight this in marketing materials"
    },
    {
        title: "Staff Friendliness",
        desc: "145 mentions vs competitor average of 98 mentions",
        action: "Strength: Continue staff training program"
    },
    {
        title: "Cleanliness",
        desc: "Top-rated for cleanliness at 4.6 vs 4.4 average",
        action: "Strength: Feature this in review responses"
    },
];

const whereCompetitorsExcel = [
    {
        title: "Service Speed",
        desc: "Bean & Brew averages 3-minute wait times vs your 8-minute wait average during peak hours",
        action: "Opportunity: Implement their express lane system"
    },
    {
        title: "Response Rate",
        desc: "Bean & Brew has 85% response rate vs your 68%",
        action: "Opportunity: Dedicate staff time for review responses"
    },
    {
        title: "Modern Atmosphere",
        desc: "Competitors mention updated decor 40% more frequently",
        action: "Opportunity: Refresh interior design elements"
    },
];

const strategicRecs = [
    {
        title: "Focus on Service Speed",
        desc: "Closing the service speed gap could increase your rating to 4.8 and capture market share from Bean & Brew"
    },
    {
        title: "Leverage Quality Advantage",
        desc: "Your superior coffee quality is a differentiator - emphasize this in marketing to justify value"
    },
    {
        title: "Improve Response Rate",
        desc: "Matching Bean & Brew's 85% response rate could improve sentiment score by 5-8%"
    },
    {
        title: "Price Positioning",
        desc: "Consider loyalty program to compete with The Daily Grind's value perception"
    },
];

export default function CompetitorsPage() {
    return (
        <div className="space-y-8 pb-12">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Competitor Analysis</h1>
                    <p className="text-sm text-gray-500 mt-1">Benchmark your performance against competitors</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                    <Plus className="size-4" />
                    Add Competitor
                </button>
            </div>

            {/* Competitor Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {competitors.map((comp, i) => (
                    <div
                        key={i}
                        className={cn(
                            "p-5 rounded-2xl border shadow-sm",
                            comp.isBusiness ? "bg-blue-50/50 border-blue-200" : "bg-white border-gray-100"
                        )}
                    >
                        {comp.isBusiness && (
                            <div className="mb-2">
                                <span className="text-[10px] font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full uppercase">Your Business</span>
                            </div>
                        )}
                        <h3 className="font-bold text-gray-900 mb-4">{comp.name}</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                                <span className="text-gray-500 flex items-center gap-1"><span className="text-amber-400">★</span> Rating</span>
                                <span className="font-bold text-gray-900">{comp.rating}</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="text-gray-500">Reviews</span>
                                <span className="font-bold text-gray-900">{comp.reviews}</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="text-gray-500">Sentiment</span>
                                <span className="font-bold text-gray-900">{comp.sentiment}</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="text-gray-500">Response</span>
                                <span className="font-bold text-gray-900">{comp.response}</span>
                            </div>
                        </div>
                        <button className="w-full mt-4 py-2 text-xs font-medium text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                            Show on Google
                        </button>
                    </div>
                ))}
            </div>

            {/* Performance Comparison Bar Chart */}
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-6">Performance Comparison</h3>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={performanceComparisonData} barSize={40}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                            <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }} />
                            <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '10px' }} />
                            <Bar dataKey="Coffee Haven" fill="#3b82f6" name="Coffee Haven (You)" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="Bean & Brew" fill="#10b981" name="Bean & Brew" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="The Daily Grind" fill="#f59e0b" name="The Daily Grind" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="Espresso Corner" fill="#8b5cf6" name="Espresso Corner" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Category Radar Chart */}
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-6">Category Performance Radar</h3>
                <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                            <PolarGrid stroke="#e5e7eb" />
                            <PolarAngleAxis dataKey="subject" tick={{ fill: '#6b7280', fontSize: 11, fontWeight: 500 }} />
                            <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />

                            <Radar name="Coffee Haven" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.1} />
                            <Radar name="Bean & Brew" dataKey="B" stroke="#10b981" fill="#10b981" fillOpacity={0.1} />
                            <Radar name="The Daily Grind" dataKey="C" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.1} />
                            <Radar name="Espresso Corner" dataKey="D" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.1} />

                            <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '10px' }} />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Criteria Comparison Progress Bars */}
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-8">
                <h3 className="font-bold text-gray-900">Criteria Comparison</h3>
                <div className="space-y-6">
                    {criteria.map((c, i) => (
                        <div key={i} className="space-y-2">
                            <div className="flex justify-between text-xs font-semibold text-gray-700">
                                <span>{c.label}</span>
                                <span className="text-gray-400 font-normal">Leader: {c.leader}</span>
                            </div>
                            <div className="relative h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                {/* Competitor Avg Marker (Approx) */}
                                <div className="absolute top-0 bottom-0 bg-gray-400 w-full" style={{ width: `${(c.competitorAvg / 5) * 100}%` }} />
                                {/* Your Score */}
                                <div className="absolute top-0 bottom-0 bg-blue-600 z-10 rounded-full" style={{ width: `${(c.score / 5) * 100}%` }} />
                            </div>
                            <div className="flex justify-between text-[10px] font-medium">
                                <span className="text-blue-600">Your Score: {c.score}</span>
                                <span className="text-gray-500">Competitor Avg: {c.competitorAvg}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Excel & Advantages Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Where Competitors Excel */}
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-6">
                        <AlertCircle className="size-5 text-orange-500" />
                        <h3 className="font-bold text-gray-900">Where Competitors Excel</h3>
                    </div>
                    <div className="space-y-4">
                        {whereCompetitorsExcel.map((item, i) => (
                            <div key={i} className="p-4 bg-orange-50/50 rounded-xl border border-orange-100/50">
                                <h4 className="text-sm font-bold text-orange-900">{item.title}</h4>
                                <p className="text-xs text-gray-600 mt-1 mb-2 leading-relaxed">{item.desc}</p>
                                <span className="text-[10px] font-medium text-orange-600">{item.action}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Your Competitive Advantages */}
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-6">
                        <Zap className="size-5 text-green-500" />
                        <h3 className="font-bold text-gray-900">Your Competitive Advantages</h3>
                    </div>
                    <div className="space-y-4">
                        {advantages.map((item, i) => (
                            <div key={i} className="p-4 bg-green-50/50 rounded-xl border border-green-100/50">
                                <h4 className="text-sm font-bold text-green-900">{item.title}</h4>
                                <p className="text-xs text-gray-600 mt-1 mb-2 leading-relaxed">{item.desc}</p>
                                <span className="text-[10px] font-medium text-green-600">{item.action}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Strategic Recommendations - Purple Section */}
            <div className="bg-[#9333EA] p-6 md:p-8 rounded-3xl text-white">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-white/20 rounded-lg">
                        <Zap className="size-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Strategic Recommendations</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {strategicRecs.map((rec, i) => (
                        <div key={i} className="p-5 bg-white rounded-xl text-gray-900">
                            <h4 className="font-bold text-sm mb-2">{rec.title}</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">{rec.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
