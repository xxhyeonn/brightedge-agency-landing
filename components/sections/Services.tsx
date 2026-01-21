"use client";

import { useRef } from "react";
import { 
  Monitor, 
  Smartphone, 
  Zap, 
  Search, 
  Palette, 
  Target,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    title: "Web Development",
    description: "Building fast, responsive, and modern websites using the latest technologies.",
    icon: Monitor,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Mobile Apps",
    description: "Creating intuitive and feature-rich mobile applications for iOS and Android.",
    icon: Smartphone,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Performance",
    description: "Optimizing your digital assets for maximum speed and efficiency.",
    icon: Zap,
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "SEO Strategy",
    description: "Improving your online visibility and search engine rankings.",
    icon: Search,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "UI/UX Design",
    description: "Designing beautiful and user-friendly interfaces for your digital products.",
    icon: Palette,
    color: "bg-pink-50 text-pink-600"
  },
  {
    title: "Digital Marketing",
    description: "Driving growth through data-driven and creative marketing campaigns.",
    icon: Target,
    color: "bg-indigo-50 text-indigo-600"
  }
];

export default function Services() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".service-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section id="services" ref={containerRef} className="py-24 md:py-32 bg-white rounded-[3rem] relative z-10 transition-all duration-500">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-accent font-black uppercase tracking-widest text-sm mb-4 block">Our Expertise</span>
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter leading-none italic uppercase">
              Digital solutions <br /> to grow your <span className="text-gray-300">business.</span>
            </h2>
          </div>
          <Button variant="outline" className="group">
            View All Services <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={18} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx} 
              className="service-card group bg-surface border border-border p-10 rounded-[2.5rem] hover:border-accent hover:shadow-2xl transition-all duration-500"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                {service.description}
              </p>
              <button className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-primary hover:text-accent transition-colors">
                Learn More <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
