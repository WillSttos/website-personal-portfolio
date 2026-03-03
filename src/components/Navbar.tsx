"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.header
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-difference"
        >
            <Link href="/" className="text-xl font-bold tracking-tighter text-white">
                W.
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                <Link href="#services" className="hover:text-white transition-colors">Services</Link>
                <Link href="#portfolio" className="hover:text-white transition-colors">Work</Link>
                <Link href="#process" className="hover:text-white transition-colors">Process</Link>
                <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
            </nav>

            <button className="text-sm font-medium border border-white/20 rounded-full px-6 py-2 hover:bg-white hover:text-black transition-colors">
                Let&apos;s Talk
            </button>
        </motion.header>
    );
}
