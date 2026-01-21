"use client";

import { useRef } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

const PLANS = [
  {
    name: "Starter",
    price: "499",
    description: "Perfect for small businesses starting their digital journey.",
    features: ["UI/UX Audit", "5 Page Website", "Basic SEO", "Mobile Optimized"],
    recommended: false
  },
  {
    name: "Growth",
    price: "999",
    description: "Ideal for growing brands needing advanced solutions.",
    features: ["Custom Web App", "Full Branding", "Content Strategy", "Advanced SEO", "Analytics Dashboard"],
    recommended: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Dedicated resources for large-scale digital projects.",
    features: ["Dedicated Team", "Multilingual Support", "24/7 Priority Support", "E-commerce Integration", "Security Audit"],
    recommended: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <span className="text-accent font-black uppercase tracking-widest text-sm mb-4 block">Fair Pricing</span>
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter leading-none italic uppercase">
            Start your project <br /> <span className="text-gray-300">today.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PLANS.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative p-10 rounded-[2.5rem] border ${
                plan.recommended 
                  ? 'border-accent bg-accent/5 ring-4 ring-accent/10 shadow-2xl' 
                  : 'border-border bg-surface'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black italic">{plan.price === 'Custom' ? '' : '$'}</span>
                <span className="text-6xl font-black italic">{plan.price}</span>
                <span className="text-gray-400 font-bold">{plan.price === 'Custom' ? '' : '/mo'}</span>
              </div>
              <p className="text-gray-500 mb-8 text-sm leading-relaxed">
                {plan.description}
              </p>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.recommended ? 'accent' : 'outline'} 
                className="w-full"
              >
                {plan.price === 'Custom' ? 'Contact Us' : 'Get Started'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
