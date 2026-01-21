"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { label: "Projects Completed", value: "250", suffix: "+" },
  { label: "Happy Clients", value: "120", suffix: "+" },
  { label: "Experience Years", value: "12", suffix: "+" },
  { label: "Design Awards", value: "35", suffix: "" }
];

export default function Stats() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const numbers = gsap.utils.toArray(".stat-number");
    
    numbers.forEach((num: any) => {
      const val = parseInt(num.innerText);
      gsap.from(num, {
        scrollTrigger: {
          trigger: num,
          start: "top 90%",
        },
        innerHTML: 0,
        duration: 2,
        snap: { innerHTML: 1 },
        ease: "power2.out"
      });
    });
  }, { scope: containerRef });

  return (
    <section id="stats" ref={containerRef} className="py-24 bg-primary text-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center md:text-left">
              <div className="text-5xl md:text-7xl font-display font-black tracking-tighter italic mb-4 flex items-center justify-center md:justify-start">
                <span className="stat-number">{stat.value}</span>
                <span className="text-accent">{stat.suffix}</span>
              </div>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
