"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X as XIcon, Instagram, Facebook, ArrowUpRight, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const CustomBehance = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M7.78 12c.57 0 1.05.07 1.45.21.39.14.7.35.91.64.22.28.33.64.33 1.07 0 .58-.23 1.07-.69 1.45-.46.39-1.12.58-1.99.58H3.8V12h3.98zm.05-4.48c.7 0 1.25.26 1.63.78.38.52.57 1.22.57 2.11 0 .86-.19 1.54-.57 2.05-.38.51-.93.76-1.66.76H3.8V7.52h4.03zm10.74 8.78c-.76.7-1.74 1.05-2.92 1.05-1.17 0-2.12-.33-2.85-.98-.74-.66-1.11-1.6-1.11-2.82 0-1.25.37-2.21 1.1-2.9.73-.68 1.68-1.02 2.85-1.02 1.16 0 2.1.33 2.83.98.73.65 1.1 1.59 1.1 2.82h-5.91c.02.66.24 1.16.65 1.51.41.35.94.52 1.6.52.88 0 1.57-.34 2.06-1.01l1.6 1.85zM15.65 11c-.42.34-.64.81-.66 1.42h3.84c-.02-.63-.23-1.11-.64-1.45-.41-.34-.95-.51-1.61-.51-.64 0-1.18.18-1.6.54zM14 5.5h5v1.5h-5V5.5z" />
    </svg>
);

const CustomX = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} height="1em" width="1em">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const LogoIcon = () => (
    <div className="flex flex-col gap-[2px]">
        <div className="flex gap-[2px]">
            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
        </div>
        <div className="flex gap-[2px]">
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
        </div>
        <div className="flex gap-[2px]">
            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
        </div>
    </div>
);

const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#work" },
    { label: "Blogs", href: "#" },
    { label: "Pricing", href: "#pricing" },
];

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Desktop Sidebar (Sticky Left) */}
            <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-[80px] flex-col justify-between items-center py-10 bg-[#262626] text-white z-50">
                {/* Top: Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-12 h-12 bg-white rounded-full flex flex-col justify-center items-center gap-1.5 hover:scale-110 transition-transform duration-300 shadow-lg cursor-pointer text-black z-50 relative"
                >
                    {isOpen ? (
                        <XIcon className="w-6 h-6" />
                    ) : (
                        <>
                            <div className="w-5 h-[1.5px] bg-black" />
                            <div className="w-5 h-[1.5px] bg-black" />
                        </>
                    )}
                </button>

                {/* Middle: Brand */}
                <div className="flex flex-col items-center gap-16">
                    <Link href="/" className="rotate-[-90deg] text-lg font-bold tracking-widest uppercase whitespace-nowrap">
                        BrightEdge
                    </Link>
                    <div className="rotate-[-90deg]">
                        <LogoIcon />
                    </div>
                </div>

                {/* Bottom: Socials */}
                <div className="flex flex-col gap-6 items-center pb-4">
                    <Link href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></Link>
                    <Link href="#" className="hover:text-accent transition-colors"><CustomX className="text-xl" /></Link>
                    <Link href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></Link>
                    <Link href="#" className="hover:text-accent transition-colors"><CustomBehance className="text-xl" /></Link>
                </div>
            </aside>

            {/* Expanded Menu Overlay (Desktop) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "tween", duration: 0.4, ease: "circOut" }}
                        className="fixed left-[80px] top-0 h-screen w-[400px] bg-white z-40 hidden lg:flex flex-col border-r border-gray-100 shadow-2xl"
                    >
                        {/* Main Links */}
                        <div className="flex-1 flex flex-col pt-32">
                            {menuItems.map((item, index) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="group relative flex items-center justify-between px-10 py-6 border-b border-gray-100/50 hover:bg-[#F24E1E] transition-colors duration-300"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-[#A52A2A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <span className="text-xl font-light text-black group-hover:text-white transition-colors duration-300">
                                            {item.label}
                                        </span>
                                    </div>
                                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 text-white transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                                </Link>
                            ))}
                        </div>

                        {/* Bottom Contact */}
                        <div className="p-10 border-t border-gray-100">
                            <Link
                                href="#contact"
                                className="flex items-center gap-2 group"
                                onClick={() => setIsOpen(false)}
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                <span className="text-lg text-black group-hover:text-accent transition-colors">Contact</span>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Top Navbar */}
            <nav className="lg:hidden fixed top-0 w-full flex justify-between items-center px-6 py-4 z-50 bg-[#262626]/90 backdrop-blur-md border-b border-white/10 text-white">
                <Link href="/" className="font-bold tracking-tighter text-xl">
                    BRIGHTEDGE
                </Link>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <XIcon /> : <Menu />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 top-16 bg-[#262626] text-white z-40 p-8 lg:hidden"
                    >
                        <div className="flex flex-col gap-6 text-2xl font-bold">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-2 border-b border-white/10"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
