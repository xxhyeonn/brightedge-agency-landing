"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const logos = [
    "Airbnb", "Google", "Nike", "Spotify", "Amazon", "Netflix", "Tesla", "Adobe"
];

function Counter({ from, to }: { from: number; to: number }) {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true });

    useEffect(() => {
        if (!inView) return;

        const node = nodeRef.current;

        // Simple custom counter animation
        const duration = 2000; // ms
        const start = performance.now();

        const animate = (time: number) => {
            const elapsed = time - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quart
            const ease = 1 - Math.pow(1 - progress, 4);

            const value = Math.floor(from + (to - from) * ease);

            if (node) node.textContent = value.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [inView, from, to]);

    return <span ref={nodeRef} className="tabular-nums">{from}</span>;
}

export default function Stats() {
    return (
        <section className="py-20 bg-black text-white overflow-hidden">
            {/* Logos Marquee */}
            <div className="mb-20">
                <p className="text-center text-sm font-medium text-gray-500 mb-8 uppercase tracking-widest">
                    Trusted by Industry Leaders
                </p>
                <div className="flex overflow-hidden relative">
                    <div className="flex animate-marquee whitespace-nowrap gap-16 min-w-full">
                        {[...logos, ...logos, ...logos].map((logo, i) => (
                            <span key={`${logo}-${i}`} className="text-3xl font-bold opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                                {logo}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Stats Counters */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 px-4 lg:px-20 border-t border-white/10 pt-16">
                <div className="flex flex-col gap-2">
                    <span className="text-5xl lg:text-7xl font-bold text-accent">
                        <Counter from={0} to={85} />%
                    </span>
                    <span className="text-gray-400 text-sm">Growth Rate</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-5xl lg:text-7xl font-bold text-white">
                        <Counter from={0} to={120} />+
                    </span>
                    <span className="text-gray-400 text-sm">Projects Completed</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-5xl lg:text-7xl font-bold text-accent">
                        <Counter from={0} to={15} />
                    </span>
                    <span className="text-gray-400 text-sm">Awards Won</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-5xl lg:text-7xl font-bold text-white">
                        <Counter from={0} to={5} />.0
                    </span>
                    <span className="text-gray-400 text-sm">Client Rating</span>
                </div>
            </div>
        </section>
    );
}
