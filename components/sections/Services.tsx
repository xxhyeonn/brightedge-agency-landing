"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import React, { useState } from "react";

const services = [
    {
        id: "01",
        title: "BRANDING",
        subTitle: "Brain Storm",
        image: "/images/branding-preview.jpeg",
        description: "We craft impactful brand stories that connect with your audience and build long-term trust. Through strategic thinking and visual storytelling, your brand gains clarity, consistency, and character.",
        features: [
            ["Visual Content Strategy", "Competitive Analysis", "Key Messaging"],
            ["Research & Testing", "UI & UX Strategy", "Content Strategy"]
        ]
    },
    {
        id: "02",
        title: "WEB DESIGN",
        subTitle: "UI / UX",
        image: "/images/web-design-preview.jpg",
        description: "Our design approach blends creativity with functionality. Every layout, interaction, and element is thoughtfully created to deliver seamless user experiences that reflect your brand identity.",
        features: [
            ["Responsive Layout Design", "Wireframing & Prototyping", "Design Systems & Guidelines"],
            ["Accessibility Compliance", "Motion & Interaction Design", "Conversion-Focused Layouts"]
        ]
    },
    {
        id: "03",
        title: "DEVELOPMENT",
        subTitle: "Coding",
        image: "/images/dev-preview.jpg",
        description: "From static sites to full CMS solutions, we develop high-performance, scalable websites tailored to your business needs—ensuring fast loading speeds, security, and flexibility.",
        features: [
            ["Framer & Webflow Development", "SEO-Friendly Structure", "CMS & Dynamic Content"],
            ["Custom Code Extensions", "Performance Optimization", "API Integrations"]
        ]
    },
    {
        id: "04",
        title: "MARKETING",
        subTitle: "Integrations",
        image: "/images/marketing-preview.jpg",
        description: "Beyond design, we help you grow. Our marketing strategies combine data, creativity, and automation to increase your visibility, drive leads, and boost engagement.",
        features: [
            ["Email Marketing Campaigns", "Social Media Scheduling", "SEO Strategy & Implementation"],
            ["Analytics Setup & Reporting", "Ad Campaign Support", "CRM & Marketing Automation"]
        ]
    },
];

export default function Services() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 20, stiffness: 120 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    const toggleService = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section id="services" className="relative py-20 lg:py-32 px-6 lg:px-20 bg-white overflow-hidden" onMouseMove={handleMouseMove}>
            <div className="flex flex-col gap-2 mb-12 lg:mb-20">
                <span className="text-[#FF5733] font-semibold text-xs lg:text-sm tracking-[0.2em] uppercase">
                    {"{ Our Services }"}
                </span>
                <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tighter text-[#1a1a1a] leading-tight">
                    EXPLORE WHAT WE CAN DO FOR YOU
                </h2>
            </div>

            <div className="flex flex-col border-t border-gray-100">
                {services.map((service, index) => {
                    const isExpanded = expandedIndex === index;
                    const isHovered = hoveredIndex === index;

                    return (
                        <div key={service.id} className="border-b border-gray-100">
                            {/* 상단 헤더 영역 */}
                            <div
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onClick={() => toggleService(index)}
                                className="group py-6 lg:py-8 cursor-pointer flex items-center justify-between"
                            >
                                <div className="flex items-start gap-3 lg:gap-6">
                                    <span className={`text-sm lg:text-base font-bold mt-1 lg:mt-2 transition-colors duration-300 ${isExpanded || isHovered ? 'text-[#FF5733]' : 'text-[#1a1a1a]'}`}>
                                        {service.id}
                                    </span>
                                    <div className="flex items-baseline gap-3 lg:gap-5">
                                        <h3 className={`text-4xl lg:text-7xl font-extrabold uppercase leading-none tracking-tighter transition-colors duration-300 ${isExpanded || isHovered ? 'text-[#FF5733]' : 'text-[#1a1a1a]'}`}>
                                            {service.title}
                                        </h3>
                                        <span className="text-xs lg:text-sm text-gray-400 font-medium tracking-normal">
                                            {service.subTitle}
                                        </span>
                                    </div>
                                </div>

                                <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 ${isExpanded ? 'bg-transparent text-gray-400' : isHovered ? 'bg-[#1a1a1a] text-white border-transparent' : 'text-[#1a1a1a]'}`}>
                                    {isExpanded ? <X className="w-5 h-5 lg:w-6 lg:h-6 stroke-[1.2px]" /> : <Plus className="w-5 h-5 lg:w-6 lg:h-6 stroke-[1.2px]" />}
                                </div>
                            </div>

                            {/* 확장 영역 (상세 내용) */}
                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-12 grid lg:grid-cols-12 gap-10">
                                            {/* 왼쪽 설명 */}
                                            <div className="lg:col-span-4 lg:pr-10">
                                                <p className="text-sm lg:text-base text-gray-600 leading-relaxed font-light">
                                                    {service.description}
                                                </p>
                                            </div>

                                            {/* 오른쪽 세부 기능 리스트 */}
                                            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                                                {service.features.map((column, colIdx) => (
                                                    <ul key={colIdx} className="flex flex-col gap-3">
                                                        {column.map((feature, fIdx) => (
                                                            <li key={fIdx} className="flex items-center gap-3 text-sm lg:text-base text-gray-800 font-medium">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                                                                {feature}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>

            {/* 마우스 트래킹 이미지 (펼쳐지지 않았을 때만 노출 권장) */}
            <motion.div style={{ position: "absolute", left: x, top: y, translateX: "-50%", translateY: "-50%", pointerEvents: "none" }} className="z-50 hidden lg:block">
                {services.map((service, index) => (
                    <motion.div
                        key={`img-${service.id}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: hoveredIndex === index && expandedIndex === null ? 1 : 0,
                            scale: hoveredIndex === index && expandedIndex === null ? 1 : 0.8,
                            rotate: hoveredIndex === index ? 5 : -5
                        }}
                        transition={{ duration: 0.4 }}
                        className="absolute w-[280px] h-[180px] overflow-hidden rounded-lg shadow-xl"
                    >
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
