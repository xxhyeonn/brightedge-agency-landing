"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    title: "EcoSmart Mobile",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop",
    size: "large"
  },
  {
    title: "Nova Dashboard",
    category: "Software",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    size: "small"
  },
  {
    title: "Zest Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2670&auto=format&fit=crop",
    size: "small"
  }
];

export default function Projects() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".project-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out"
    });
  }, { scope: containerRef });

  return (
    <section id="projects" ref={containerRef} className="py-24 md:py-32 bg-surface rounded-[3rem] -mt-10 relative z-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-accent font-black uppercase tracking-widest text-sm mb-4 block">Case Studies</span>
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter leading-none italic uppercase">
              Projects we're <br /> <span className="text-gray-400">proud of.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div 
              key={idx} 
              className={`project-card group relative overflow-hidden rounded-[3rem] ${
                project.size === 'large' ? 'md:col-span-2 aspect-[16/9]' : 'aspect-square'
              }`}
            >
              <Image 
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-10 left-10 text-white z-10 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-xs font-black uppercase tracking-widest bg-accent px-3 py-1 rounded-full mb-4 inline-block">
                  {project.category}
                </span>
                <h3 className="text-3xl md:text-5xl font-display font-black italic uppercase tracking-tighter">
                  {project.title}
                </h3>
              </div>

              <button className="absolute top-10 right-10 w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary scale-0 group-hover:scale-100 transition-transform duration-500">
                <ArrowUpRight size={32} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
