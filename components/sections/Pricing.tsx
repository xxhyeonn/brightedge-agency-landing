"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Starter",
        price: { monthly: 2900, yearly: 29000 },
        description: "Perfect for small businesses starting their journey.",
        features: ["Brand Analysis", "3 Social Media Templates", "Basic Support", "Monthly Report"],
    },
    {
        name: "Growth",
        price: { monthly: 5900, yearly: 59000 },
        description: "Accelerate your presence with comprehensive strategies.",
        features: ["Full Brand Identity", "10 Social Media Templates", "Priority Support", "Weekly Strategy Calls", "Competitor Analysis"],
        recommended: true,
    },
    {
        name: "Enterprise",
        price: { monthly: 9900, yearly: 99000 },
        description: "Full-scale agency partnership for market leaders.",
        features: ["Custom Design System", "Unlimited Revisions", "24/7 Dedicated Manager", "Daily Optimization", "Custom Development"],
    }
];

export default function Pricing() {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

    return (
        <section id="pricing" className="py-24 px-4 lg:px-20 bg-gray-50">
            <div className="flex flex-col items-center mb-16 text-center">
                <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-secondary tracking-tighter">Simple Pricing</h2>
                <p className="text-secondary/60 max-w-lg mb-10">Choose the plan that fits your ambition. Transparent pricing with no hidden fees.</p>

                {/* Toggle Wrapper */}
                <div className="flex items-center gap-4 bg-white p-2 rounded-full shadow-sm border border-gray-100">
                    <button
                        onClick={() => setBillingCycle("monthly")}
                        className={cn(
                            "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                            billingCycle === "monthly" ? "bg-secondary text-white shadow-md" : "text-secondary/60 hover:text-secondary"
                        )}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setBillingCycle("yearly")}
                        className={cn(
                            "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative",
                            billingCycle === "yearly" ? "bg-secondary text-white shadow-md" : "text-secondary/60 hover:text-secondary"
                        )}
                    >
                        Yearly <span className="absolute -top-3 -right-3 bg-accent text-white text-[10px] px-2 py-0.5 rounded-full font-bold">SAVE 20%</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {plans.map((plan, index) => (
                    <div
                        key={plan.name}
                        className={cn(
                            "relative bg-white rounded-3xl p-8 border hover:shadow-2xl transition-all duration-500",
                            plan.recommended ? "border-accent/20 shadow-xl scale-105 z-10" : "border-gray-100 shadow-sm"
                        )}
                    >
                        {plan.recommended && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
                                Recommended
                            </div>
                        )}

                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                        <p className="text-secondary/50 text-sm mb-6 min-h-[40px]">{plan.description}</p>

                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-4xl font-black tracking-tight">
                                ${billingCycle === 'monthly' ? plan.price.monthly : Math.round(plan.price.yearly / 12)}
                            </span>
                            <span className="text-secondary/40 text-sm">/mo</span>
                        </div>

                        <ul className="flex flex-col gap-4 mb-8">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-3 text-sm text-secondary/80">
                                    <div className="mt-1 bg-green-100 p-0.5 rounded-full">
                                        <Check className="w-3 h-3 text-green-600" />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <Button
                            className={cn(
                                "w-full",
                                plan.recommended ? "bg-accent hover:bg-accent/90" : "bg-black hover:bg-black/90"
                            )}
                        >
                            Get Started
                        </Button>
                    </div>
                ))}
            </div>
        </section>
    );
}
