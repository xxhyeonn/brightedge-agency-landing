"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Strategy",
    description: "We define your goals and map out the path to success with thorough research."
  },
  {
    number: "02",
    title: "Design",
    description: "Our creative team builds intuitive and visually stunning interfaces for your users."
  },
  {
    number: "03",
    title: "Develop",
    description: "We turn designs into reality using high-performance and scalable technologies."
  },
  {
    number: "04",
    title: "Launch",
    description: "Your product goes live with our rigorous testing and deployment protocols."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {STEPS.map((step, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center md:items-start md:text-left">
              <div className="text-6xl md:text-8xl font-display font-black tracking-tighter text-gray-100 group-hover:text-accent/20 transition-colors duration-500 mb-6 italic leading-none">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
