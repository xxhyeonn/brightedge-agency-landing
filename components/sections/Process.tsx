"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const steps = [
    { title: "Discovery", description: "We immerse ourselves in your brand to understand your goals and audience." },
    { title: "Strategy", description: "Developing a roadmap that aligns with your business objectives." },
    { title: "Design", description: "Crafting visual systems that are both beautiful and functional." },
    { title: "Development", description: "Bringing the design to life with clean, performant code." },
    { title: "Launch", description: "Ensuring a smooth deployment and post-launch support." },
];

export default function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    return (
        <section ref={containerRef} className="py-24 px-4 lg:px-20 bg-background overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-16">
                {/* Left Static Header */}
                <div className="lg:sticky lg:top-32 h-fit">
                    <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-6 text-secondary">
                        Our<br />Process
                    </h2>
                    <p className="text-lg text-secondary/60 max-w-sm">
                        A proven methodology that guarantees results. We guide you through every step of the digital transformation.
                    </p>
                </div>

                {/* Right Timeline */}
                <div className="relative">
                    {/* The Vertical Line Background */}
                    <div className="absolute left-6 top-2 bottom-2 w-[2px] bg-gray-100" />

                    {/* The Fill Line */}
                    <motion.div
                        className="absolute left-6 top-2 w-[2px] bg-accent origin-top"
                        style={{ height: "100%", scaleY: scrollYProgress }}
                    />

                    <div className="flex flex-col gap-24 py-10">
                        {steps.map((step, index) => (
                            <StepCard key={index} step={step} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function StepCard({ step, index }: { step: { title: string, description: string }, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-20% 0px -20% 0px" }}
            className="flex items-start gap-8 relative pl-16 group"
        >
            {/* Dot on the line */}
            <div className={cn(
                "absolute left-[21px] top-1.5 w-4 h-4 rounded-full border-2 border-white transition-colors duration-500 z-10",
                "bg-gray-200 group-hover:bg-accent group-hover:scale-125"
            )} />

            <div>
                <span className="text-sm font-bold text-accent mb-2 block tracking-widest">0{index + 1}</span>
                <h3 className="text-2xl font-bold mb-2 group-hover:translate-x-2 transition-transform">{step.title}</h3>
                <p className="text-secondary/60">{step.description}</p>
            </div>
        </motion.div>
    );
}
