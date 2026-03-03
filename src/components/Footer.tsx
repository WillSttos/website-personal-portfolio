"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative w-full px-4 md:px-10 pb-10 pt-32 overflow-hidden" id="contact">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                    className="relative w-full bento-card rounded-3xl p-12 md:p-24 text-center overflow-hidden flex flex-col items-center justify-center min-h-[400px]"
                >
                    {/* Bottom massive glow */}
                    <div className="absolute -bottom-[150px] left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-white/[0.15] blur-[100px] rounded-[100%]" />

                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 z-10 glow-text">
                        Let&apos;s build something <br /> amazing together.
                    </h2>

                    <button className="z-10 group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95">
                        <span className="relative z-10">Start a Project</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                </motion.div>

                <div className="w-full flex flex-col md:flex-row justify-between items-center mt-12 text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Williams Junior. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
                        <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
                        <Link href="#" className="hover:text-white transition-colors">Dribbble</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
