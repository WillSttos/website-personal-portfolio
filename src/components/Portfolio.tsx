"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CATEGORIES = ["All", "Web", "Design", "Motion"];

const PROJECTS = [
    {
        id: 1,
        title: "Fintech Dashboard",
        category: "Web",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600",
    },
    {
        id: 2,
        title: "Neon Brand Identity",
        category: "Design",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800&h=600",
    },
    {
        id: 3,
        title: "Quantum Product Reel",
        category: "Motion",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800&h=600",
    },
    {
        id: 4,
        title: "E-Commerce Experience",
        category: "Web",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600",
    }
];

export default function Portfolio() {
    const [activeTab, setActiveTab] = useState("All");

    const filteredProjects = PROJECTS.filter((p) =>
        activeTab === "All" ? true : p.category === activeTab
    );

    return (
        <section className="px-4 py-24 md:py-32 max-w-7xl mx-auto w-full" id="portfolio">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                        className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-4 block"
                    >
                        Selected Work
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
                        className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1]"
                    >
                        Featured Projects
                    </motion.h2>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-2 p-1 bg-white/5 border border-white/10 rounded-full w-fit hide-scrollbar relative z-10">
                    {CATEGORIES.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${activeTab === tab ? "text-black" : "text-gray-400 hover:text-white"
                                }`}
                        >
                            {activeTab === tab && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-white rounded-full z-[-1]"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                            className="group relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

                            {/* Image Transition (Grayscale to Color) */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105"
                                style={{ backgroundImage: `url(${project.image})` }}
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 z-20">
                                <div className="flex items-end justify-between transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                                    <div>
                                        <span className="text-white/60 text-sm mb-2 font-medium tracking-wide uppercase block">
                                            {project.category}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 rotate-[-45deg] group-hover:rotate-0 transition-all duration-500 delay-100 ease-out">
                                        <ArrowUpRight className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
