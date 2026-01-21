"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        title: "The Perfect Frame",
        category: "Web Design",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
        link: "#",
    },
    {
        title: "AppFlow Growth",
        category: "Mobile App",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2574&auto=format&fit=crop",
        link: "#",
    },
    {
        title: "Neon Horizon",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2564&auto=format&fit=crop",
        link: "#",
    },
    {
        title: "Future Architect",
        category: "Development",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
        link: "#",
    }
];

export default function Projects() {
    return (
        <section id="work" className="py-20 px-4 lg:px-20 bg-background">
            <div className="flex justify-between items-end mb-16">
                <h2 className="text-4xl lg:text-8xl font-black uppercase text-secondary tracking-tighter">
                    Selected<br />Work
                </h2>
                <Link href="#" className="flex items-center gap-2 text-accent font-medium hover:underline underline-offset-4">
                    View All Projects <ArrowUpRight className="w-4 h-4" />
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <Link key={index} href={project.link} className="group block relative w-full h-[60vh] rounded-3xl overflow-hidden cursor-none_custom">
                        {/* Background Image with Scale on Hover */}
                        <div className="absolute inset-0 w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-110">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <div className="overflow-hidden">
                                <motion.h3
                                    className="text-3xl lg:text-4xl font-bold text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                                >
                                    {project.title}
                                </motion.h3>
                            </div>
                            <div className="overflow-hidden mt-2">
                                <motion.p
                                    className="text-white/80 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75"
                                >
                                    {project.category}
                                </motion.p>
                            </div>
                        </div>

                        {/* Custom Cursor/Badge Element (Optional, sticking to standard Request for now but adding a corner badge) */}
                        <div className="absolute top-6 right-6 bg-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ArrowUpRight className="w-6 h-6 text-black" />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
