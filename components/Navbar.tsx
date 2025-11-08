/** @format */

"use client";

import React, { useState } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-[#0B1120]/90 backdrop-blur-md border-b border-cyan-400 text-white">
            <div className="container max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl  font-extrabold tracking-wider text-cyan-400">
                    ROBO <span className="text-purple-900">TECH </span>
                </div>

                {/* Search Bar (Desktop Only) */}
                <div className="hidden md:flex items-center bg-white/10 rounded-xl px-3 py-2 w-full max-w-md border border-gray-700/40 focus-within:border-cyan-400 transition-all">
                    <Search className="text-gray-400 mr-2" size={18} />
                    <input
                        type="text"
                        placeholder="Search for tech, AI bots, or processors..."
                        className="w-full bg-transparent text-sm text-gray-200 placeholder-gray-400 focus:outline-none"
                    />
                    <button className="px-3 py-1.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-500 hover:to-cyan-400 transition-all">
                        Search
                    </button>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:block items-center gap-8 text-sm font-semibold">
                    <div className="text-center cursor-pointer group">
                        <span className="text-gray-300 block">Access</span>
                        <span className="text-white group-hover:text-cyan-400 group-hover:underline transition">
                            Neural Link
                        </span>
                    </div>
                    <div className="text-center cursor-pointer group">
                        <span className="text-gray-300 block">Track</span>
                        <span className="text-white group-hover:text-cyan-400 group-hover:underline transition">
                            Shipments
                        </span>
                    </div>
                </div>

                {/* Cart Button */}
                <div className="hidden md:flex items-center">
                    <button className="relative flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 transition-all">
                        <ShoppingCart size={18} className="text-cyan-400" />
                        <span>Cart</span>
                        <span className="absolute -top-1 -right-1 bg-cyan-500 text-white text-[10px] font-bold rounded-full px-1.5 py-0.5">
                            0
                        </span>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-cyan-400"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden border-t pt-2 border-cyan-500/10 px-6 pb-4 space-y-4 bg-[#0B1120]/95">
                    {/* Search */}
                    <div className="flex items-center gap-4 justify-between">
                        <div className="flex items-center bg-white/10 rounded-xl px-3 py-2 w-full border border-gray-700/40 focus-within:border-cyan-400 transition-all">
                            <Search className="text-gray-400 mr-2" size={18} />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full bg-transparent text-sm text-gray-200 placeholder-gray-400 focus:outline-none"
                            />
                            <button className="px-3 py-1.5 rounded-lg text-sm font-semibold bg-linear-to-r from-cyan-500 to-blue-600 hover:from-blue-500 hover:to-cyan-400 transition-all">
                                Go
                            </button>
                        </div>

                        {/* Cart */}
                        <div className="flex justify-center">
                            <button className="relative flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 transition-all">
                                <ShoppingCart
                                    size={18}
                                    className="text-cyan-400"
                                />
                                <span>Cart</span>
                                <span className="absolute -top-1 -right-1 bg-cyan-500 text-white text-[10px] font-bold rounded-full px-1.5 py-0.5">
                                    3
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
