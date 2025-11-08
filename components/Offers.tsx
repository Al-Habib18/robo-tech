/** @format */

"use client";

import React from "react";
import { Cpu, Bot, Zap, ArrowRight } from "lucide-react";

type Offer = {
    title: string;
    discount: string;
    description: string;
    color: "primary" | "secondary" | "accent";
    icon: React.ReactElement;
};

export default function Offers() {
    const offers: Offer[] = [
        {
            title: "Mega Tech Sale",
            discount: "50% OFF",
            description: "AI Systems & Robots",
            color: "primary",
            icon: <Bot size={28} />,
        },
        {
            title: "Quantum Deal",
            discount: "UP TO 70%",
            description: "Neural Processors",
            color: "secondary",
            icon: <Cpu size={28} />,
        },
        {
            title: "Cyber Flash",
            discount: "BUY 2 GET 1",
            description: "Cyborg Parts",
            color: "accent",
            icon: <Zap size={28} />,
        },
    ];

    const colorMap: Record<Offer["color"], string> = {
        primary: "#00FFFF",
        secondary: "#A855F7",
        accent: "#FFB400",
    };

    return (
        <section className="relative w-full py-16 md:py-20 border-t border-gray-800/40 bg-gradient-to-b from-[#0B1120] to-[#0E162B]">
            <div className="container w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-400">
                        Exclusive Offers
                    </h2>
                    <p className="text-gray-400 mt-2 text-sm md:text-base">
                        Grab the best deals on futuristic tech — limited time
                        only.
                    </p>
                </div>

                {/* Offer Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {offers.map((offer, i) => (
                        <div
                            key={i}
                            className="relative p-6 sm:p-8 rounded-2xl border border-gray-700/40 bg-white/5 backdrop-blur-xl hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] transition-all overflow-hidden group"
                        >
                            {/* Background Icon */}
                            <div className="absolute -top-6 -right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                                {React.cloneElement(offer.icon, {
                                    size: 120,
                                    color: colorMap[offer.color],
                                })}
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-all"
                                        style={{
                                            backgroundColor: `${
                                                colorMap[offer.color]
                                            }20`,
                                        }}
                                    >
                                        {React.cloneElement(offer.icon, {
                                            color: colorMap[offer.color],
                                            size: 26,
                                        })}
                                    </div>
                                    <div>
                                        <h3 className="font-bold uppercase text-sm md:text-base tracking-widest">
                                            {offer.title}
                                        </h3>
                                        <p className="text-xs md:text-sm text-gray-400">
                                            {offer.description}
                                        </p>
                                    </div>
                                </div>

                                <h4
                                    className="text-3xl sm:text-4xl font-extrabold mb-3 drop-shadow-sm"
                                    style={{ color: colorMap[offer.color] }}
                                >
                                    {offer.discount}
                                </h4>

                                <button className="text-sm md:text-base font-bold uppercase tracking-wider text-gray-300 hover:text-white flex items-center gap-2 transition-colors">
                                    <span>Shop Now</span>
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
