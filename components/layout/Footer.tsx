"use client";

import Link from "next/link";
import { 
  Instagram, 
  Twitter, 
  Linkedin, 
  Github, 
  ArrowRight,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-20 pb-10 rounded-t-[3rem] -mt-10 relative z-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-display font-black tracking-tight mb-6 block">
              BRIGHT<span className="text-accent">EDGE.</span>
            </Link>
            <p className="text-gray-400 mb-8 max-w-xs">
              Empowering brands through cutting-edge digital solutions and creative innovation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="#" className="hover:text-accent transition-colors">Digital Strategy</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">UI/UX Design</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Content Creation</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Web Development</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="#" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Our Work</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Stay Updated</h4>
            <p className="text-gray-400 mb-6">Subscribe to our newsletter for insights and updates.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 focus:outline-none focus:border-accent transition-colors"
              />
              <button className="absolute right-2 top-1.5 w-9 h-9 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-all">
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-sm">
          <p>© {currentYear} BrightEdge Agency. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
