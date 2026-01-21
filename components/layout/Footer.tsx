import Link from "next/link";
import { ArrowUpRight, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/Button";

const footerLinks = [
    {
        title: "Company",
        links: ["About", "Work", "Services", "Pricing", "Contact"]
    },
    {
        title: "Resources",
        links: ["Blog", "Case Studies", "Resources", "Help Center"]
    },
    {
        title: "Legal",
        links: ["Privacy Policy", "Terms of Service", "Cookie Policy"]
    }
];

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-20 pb-10 px-4 lg:px-20 border-t border-white/10">
            <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
                {/* Brand & Newsletter */}
                <div className="flex flex-col gap-8 max-w-md">
                    <Link href="/" className="text-3xl font-bold tracking-tighter">
                        BRIGHTEDGE
                    </Link>
                    <p className="text-gray-400">
                        A digital agency crafting experiences that merge art, technology, and strategy.
                    </p>

                    <div className="flex flex-col gap-4">
                        <span className="text-sm font-bold uppercase tracking-widest text-gray-500">Subscribe for updates</span>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-zinc-900 border border-zinc-800 rounded-full px-6 py-3 w-full focus:outline-none focus:border-accent transition-colors"
                            />
                            <Button className="rounded-full bg-accent hover:bg-accent/90">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
                    {footerLinks.map((group) => (
                        <div key={group.title} className="flex flex-col gap-4">
                            <h4 className="font-bold">{group.title}</h4>
                            <ul className="flex flex-col gap-2">
                                {group.links.map((link) => (
                                    <li key={link}>
                                        <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-zinc-800 gap-4">
                <p className="text-sm text-zinc-500">
                    © 2025 BrightEdge Agency. All rights reserved.
                </p>

                <div className="flex gap-6">
                    <Link href="#" className="text-zinc-500 hover:text-white transition-colors"><Twitter size={20} /></Link>
                    <Link href="#" className="text-zinc-500 hover:text-white transition-colors"><Instagram size={20} /></Link>
                    <Link href="#" className="text-zinc-500 hover:text-white transition-colors"><Linkedin size={20} /></Link>
                    <Link href="#" className="text-zinc-500 hover:text-white transition-colors"><Github size={20} /></Link>
                </div>
            </div>
        </footer>
    );
}
