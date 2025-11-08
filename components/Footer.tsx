/** @format */

"use client";

import React from "react";

export default function Footer() {
    return (
        <footer className="w-full py-6 bg-linear-to-t from-[#0A0F1E] via-[#10192D] to-[#020617] border-t border-gray-800/40">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
                <p className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} RoboTech. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
}
