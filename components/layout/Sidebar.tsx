"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Home, 
  Briefcase, 
  Layers, 
  BarChart3, 
  MessageSquare,
  Menu,
  X,
  Plus
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { icon: Home, label: "Home", href: "#" },
  { icon: Layers, label: "Services", href: "#services" },
  { icon: Briefcase, label: "Projects", href: "#projects" },
  { icon: BarChart3, label: "Stats", href: "#stats" },
  { icon: MessageSquare, label: "Contact", href: "#contact" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-[80px] bg-background border-r border-border hidden lg:flex flex-col items-center py-10 z-50">
        <Link href="/" className="mb-20">
          <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white font-black text-xl italic">
            B
          </div>
        </Link>

        <nav className="flex-grow flex flex-col gap-8">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.label}
              href={item.href}
              onClick={() => setActiveItem(item.label)}
              className={cn(
                "group relative p-3 rounded-2xl transition-all duration-300",
                activeItem === item.label ? "bg-accent text-white" : "text-gray-400 hover:text-primary"
              )}
            >
              <item.icon size={24} />
              
              {/* Tooltip */}
              <div className="absolute left-[calc(100%+20px)] top-1/2 -translate-y-1/2 px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none whitespace-nowrap">
                {item.label}
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 border-8 border-transparent border-r-primary" />
              </div>
            </Link>
          ))}
        </nav>

        <div className="mt-auto">
          <button className="w-12 h-12 rounded-full border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400 hover:border-accent hover:text-accent transition-all duration-300">
            <Plus size={20} />
          </button>
        </div>
      </aside>

      {/* Mobile Header/Nav */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-border h-16 flex lg:hidden items-center justify-between px-6 z-50">
        <Link href="/" className="text-xl font-display font-black tracking-tighter">
          BRIGHT<span className="text-accent">EDGE.</span>
        </Link>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-primary"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-40 lg:hidden flex flex-col pt-24 px-8"
          >
            <nav className="flex flex-col gap-6">
              {NAV_ITEMS.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link 
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 text-2xl font-bold text-primary"
                  >
                    <div className="w-12 h-12 bg-surface rounded-2xl flex items-center justify-center">
                      <item.icon size={24} className="text-accent" />
                    </div>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto mb-20">
              <p className="text-gray-400 text-sm mb-6">Connect with us</p>
              <div className="flex gap-4">
                {["Instagram", "Twitter", "LinkedIn"].map((social) => (
                  <Link key={social} href="#" className="font-bold text-primary underline decoration-accent decoration-2 underline-offset-4">
                    {social}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
