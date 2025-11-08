/** @format */

"use client";

import React from "react";
import { Cpu, ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden text-white">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1E] via-[#10192D] to-[#020617]" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200')] bg-cover bg-center opacity-10 blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Hero Content */}
            <div className="relative z-10 px-6 md:px-8 py-24 max-w-7xl mx-auto">
                <div className="flex flex-col items-start">
                    <div className="flex items-center gap-3 mb-4 text-cyan-400">
                        <Cpu className="text-3xl" />
                        <span className="text-sm uppercase tracking-widest font-semibold">
                            Next-Gen Technology
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Welcome to the <br /> Robotic Future
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
                        Experience cutting-edge AI-powered robots, quantum
                        processors, and advanced automation systems. The future
                        starts with innovation.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="px-8 py-4 rounded-xl text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-500 hover:to-cyan-400 transition-all shadow-lg shadow-cyan-500/30">
                            <div className="flex items-center gap-2">
                                <span>Explore Tech</span>
                                <ArrowRight className="size-5" />
                            </div>
                        </button>
                        <button className="px-8 py-4 rounded-xl text-lg font-semibold border border-gray-500/50 backdrop-blur-md hover:bg-white/10 transition-all">
                            View Catalog
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
