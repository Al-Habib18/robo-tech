/** @format */
"use client";

import React from "react";
import { Zap } from "lucide-react";
import ProductCard from "./ProductCard";

const products = [
    {
        title: "AI ASSISTANT ROBOT X-9000",
        image: "./products/robot.jpeg",
        reviews: 1243,
        rating: 5,
        price: "2799.99",
        oldPrice: "3299.99",
    },
    {
        title: "NEURAL IMPLANT CHIP V3",
        image: "./products/robot.jpeg",
        reviews: 892,
        rating: 5,
        price: "4999.99",
        oldPrice: "5999.99",
    },
    {
        title: "QUANTUM PROCESSOR CORE",
        image: "./products/robot.jpeg",
        reviews: 567,
        rating: 4,
        price: "8499.99",
    },
    {
        title: "HOLOGRAPHIC DISPLAY 8K",
        image: "./products/robot.jpeg",
        reviews: 1567,
        rating: 4,
        price: "1899.99",
        oldPrice: "2499.99",
    },
    {
        title: "AI ASSISTANT ROBOT X-9000",
        image: "./products/robot.jpeg",
        reviews: 1243,
        rating: 5,
        price: "2799.99",
        oldPrice: "3299.99",
    },
    {
        title: "NEURAL IMPLANT CHIP V3",
        image: "./products/robot.jpeg",
        reviews: 892,
        rating: 5,
        price: "4999.99",
        oldPrice: "5999.99",
    },
    {
        title: "QUANTUM PROCESSOR CORE",
        image: "./products/robot.jpeg",
        reviews: 567,
        rating: 4,
        price: "8499.99",
    },
    {
        title: "HOLOGRAPHIC DISPLAY 8K",
        image: "./products/robot.jpeg",
        reviews: 1567,
        rating: 4,
        price: "1899.99",
        oldPrice: "2499.99",
    },
];

export default function FeaturedProducts() {
    return (
        <section className="w-full bg-[#0A0F1E] py-20 border-t border-gray-800/40">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                {/* Header */}
                <div className="flex items-center gap-3 mb-10">
                    <Zap className="text-cyan-400" size={24} />
                    <h2 className="text-3xl font-extrabold text-white">
                        FEATURED TECH
                    </h2>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((p, i) => (
                        <ProductCard key={i} {...p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
