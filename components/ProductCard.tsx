/** @format */
"use client";

import React from "react";
import { Star } from "lucide-react";

type ProductCardProps = {
    title: string;
    image: string;
    reviews: number;
    rating: number;
    price: string;
    oldPrice?: string;
    buttonText?: string;
};

export default function ProductCard({
    title,
    image,
    reviews,
    rating,
    price,
    oldPrice,
    buttonText = "DEPLOY NOW",
}: ProductCardProps) {
    return (
        <div className="bg-[#0D1324] rounded-2xl p-5 border border-gray-800 hover:border-cyan-500/40 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.03]">
            {/* Image */}
            <div className="w-full h-56 rounded-xl overflow-hidden mb-4">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-white mb-2 uppercase tracking-wide">
                {title}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                        key={i}
                        size={16}
                        className={
                            i < rating
                                ? "text-cyan-400 fill-cyan-400"
                                : "text-gray-600"
                        }
                    />
                ))}
                <span className="text-sm text-gray-400 ml-2">
                    ({reviews} reviews)
                </span>
            </div>

            {/* Price */}
            <div className="mb-4">
                <span className="text-cyan-400 text-2xl font-bold mr-2">
                    ${price}
                </span>
                {oldPrice && (
                    <span className="text-gray-500 line-through">
                        ${oldPrice}
                    </span>
                )}
            </div>

            {/* Button */}
            <button className="w-full py-3 rounded-lg bg-cyan-400 text-[#0B1120] font-bold text-sm hover:bg-cyan-300 transition-all">
                {buttonText}
            </button>
        </div>
    );
}
