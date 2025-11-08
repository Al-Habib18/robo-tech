/** @format */

"use client";

import React from "react";

export default function Info() {
    return (
        <section className="w-full py-16 md:py-20 bg-linear-to-b from-[#0B1120] to-[#0E162B]">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-400">
                        Why Choose RoboTech?
                    </h2>
                    <p className="text-gray-400 mt-2 text-sm md:text-base">
                        Pioneering the future with innovative robotics and AI
                        solutions.
                    </p>
                </div>

                {/* Info Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    <div className="bg-white/5 p-6 rounded-2xl border border-gray-700/40 shadow-md backdrop-blur-md hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.15)] transition-all duration-300">
                        <h3 className="text-xl font-semibold text-gray-200 mb-4">
                            Cutting-Edge Technology
                        </h3>
                        <p className="text-gray-400">
                            We leverage the latest advancements in AI and
                            robotics to deliver unparalleled solutions.
                        </p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-2xl border border-gray-700/40 shadow-md backdrop-blur-md hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.15)] transition-all duration-300">
                        <h3 className="text-xl font-semibold text-gray-200 mb-4">
                            Expert Team
                        </h3>
                        <p className="text-gray-400">
                            Our team of experts is dedicated to pushing the
                            boundaries of what&apos;s possible in robotics.
                        </p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-2xl border border-gray-700/40 shadow-md backdrop-blur-md hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.15)] transition-all duration-300">
                        <h3 className="text-xl font-semibold text-gray-200 mb-4">
                            Customer-Centric Approach
                        </h3>
                        <p className="text-gray-400">
                            We prioritize your needs and provide personalized
                            solutions to meet your specific requirements.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
