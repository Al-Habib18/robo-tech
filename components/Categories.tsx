/** @format */

"use client";

import React from "react";
import { Bot, Cpu, Zap, Brain,CircuitBoard, MonitorSmartphone } from "lucide-react";

const categoriesData = [
    { icon: <Brain className="size-6 text-cyan-400" />, title: "AI Systems" },
    {
        icon: <Bot className="size-6 text-pink-400" />,
        title: "Humanoid Robots",
    },
    { icon: <Cpu className="size-6 text-purple-400" />, title: "Quantum Tech" },
    { icon: <Zap className="size-6 text-yellow-400" />, title: "Cyborg Parts" },
    { icon: <CircuitBoard className="size-6 text-green-400" />, title: "Neural Chips" },
    {
        icon: <MonitorSmartphone className="size-6 text-blue-400" />,
        title: "Holo-Devices",
    },
];

export default function Categories() {
    return (
        <section className="relative w-full py-16 md:py-20 border-t border-gray-800/40 bg-gradient-to-b from-[#0B1120] to-[#0E162B]">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-400">
                        Explore Categories
                    </h2>
                    <p className="text-gray-400 mt-2 text-sm md:text-base">
                        Step into the future of robotics and advanced
                        intelligence.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
                    {categoriesData.map((category, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-5 sm:p-6 bg-white/5 rounded-2xl border border-gray-700/40 shadow-md backdrop-blur-md hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.15)] transition-all duration-300"
                        >
                            <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-xl bg-gray-900/50 border border-gray-700/50">
                                {category.icon}
                            </div>
                            <h3 className="text-sm sm:text-base font-semibold text-gray-200">
                                {category.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
