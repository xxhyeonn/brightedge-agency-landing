"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Play, Star } from "lucide-react";
import gsap from "gsap";
import { motion } from "framer-motion";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title span", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.2
      });

      gsap.from(".hero-image", {
        scale: 1.2,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out"
      });

      gsap.from(".hero-badge", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        ease: "back.out(1.7)"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex flex-col pt-20 lg:pt-32 pb-12 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 bg-surface rounded-full border border-border mb-8">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                  <Image 
                    src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=100&h=100&fit=crop`}
                    alt="Team"
                    width={24}
                    height={24}
                  />
                </div>
              ))}
            </div>
            <span className="text-xs font-bold tracking-tight">TRUSTED BY 500+ COMPANIES</span>
          </div>

          <h1 className="hero-title text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter leading-[0.85] mb-12 uppercase italic">
            <span className="block italic">Creative</span>
            <span className="block text-accent">Digital</span>
            <span className="block">Agency</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <p className="text-xl text-gray-500 max-w-md leading-relaxed">
              We focus on building better brands and digital experiences through strategic design and innovative technology.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="rounded-full gap-2">
                Our Services <ArrowUpRight size={20} />
              </Button>
              <button className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:bg-surface transition-colors">
                <Play size={20} fill="currentColor" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-[-5%] w-[40%] aspect-square hero-image z-0 hidden lg:block">
        <div className="relative w-full h-full rounded-[4rem] overflow-hidden border-[12px] border-white shadow-2xl rotate-6">
          <Image 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop"
            alt="Office"
            fill
            className="object-cover"
          />
        </div>
        
        {/* Floating Card */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-[-10%] bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 z-20"
        >
          <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center text-accent">
            <Star fill="currentColor" />
          </div>
          <div>
            <div className="text-2xl font-black italic line-height-none">4.9/5</div>
            <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">Client Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
