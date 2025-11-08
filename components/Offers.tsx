/** @format */
"use client";

import React from "react";
import { Cpu, Bot, Zap, ArrowRight, LucideIcon } from "lucide-react";

type OfferColor = "primary" | "secondary" | "accent";

interface Offer {
    title: string;
    discount: string;
    description: string;
    color: OfferColor;
    icon: LucideIcon;
}

const colorMap: Record<OfferColor, string> = {
    primary: "#00FFFF",
    secondary: "#A855F7",
    accent: "#FFB400",
};

const offers: Offer[] = [
    {
        title: "Mega Tech Sale",
        discount: "50% OFF",
        description: "AI Systems & Robots",
        color: "primary",
        icon: Bot,
    },
    {
        title: "Quantum Deal",
        discount: "UP TO 70%",
        description: "Neural Processors",
        color: "secondary",
        icon: Cpu,
    },
    {
        title: "Cyber Flash",
        discount: "BUY 2 GET 1",
        description: "Cyborg Parts",
        color: "accent",
        icon: Zap,
    },
];

export default function Offers() {
    return (
        <section className="relative w-full py-16 md:py-20 border-t border-gray-800/40 bg-gradient-to-b from-[#0B1120] to-[#0E162B]">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
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
                    {offers.map((offer, i) => {
                        const Icon = offer.icon;
                        const color = colorMap[offer.color];

                        return (
                            <div
                                key={i}
                                className="relative group overflow-hidden rounded-2xl border border-gray-700/40 bg-white/5 backdrop-blur-xl p-6 sm:p-8 transition-all hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]"
                            >
                                {/* Background Icon (optional aesthetic) */}
                                {/* <div className="absolute -top-6 -right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Icon color={color} size={80} />
                </div> */}

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div
                                            className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl transition-all"
                                            style={{
                                                backgroundColor: `${color}20`,
                                            }}
                                        >
                                            <Icon color={color} size={26} />
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
                                        className="mb-3 text-3xl sm:text-4xl font-extrabold drop-shadow-sm"
                                        style={{ color }}
                                    >
                                        {offer.discount}
                                    </h4>

                                    <button className="flex items-center gap-2 text-sm md:text-base font-bold uppercase tracking-wider text-gray-300 transition-colors hover:text-white">
                                        <span>Shop Now</span>
                                        <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
