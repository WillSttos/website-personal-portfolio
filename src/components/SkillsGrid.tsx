"use client";

import { motion } from "framer-motion";
import {
    Figma,
    MonitorPlay,
    Triangle,
    Hexagon,
    Layers,
    Cpu,
    MonitorSmartphone,
    Globe
} from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

const ICONS = [
    { icon: <Figma className="w-6 h-6" />, delay: 0 },
    { icon: <MonitorPlay className="w-6 h-6" />, delay: 0.2 },
    { icon: <Triangle className="w-6 h-6" />, delay: 0.4 },
    { icon: <Hexagon className="w-6 h-6" />, delay: 0.1 },
    { icon: <Layers className="w-6 h-6" />, delay: 0.3 },
    { icon: <Cpu className="w-6 h-6" />, delay: 0.5 },
    { icon: <MonitorSmartphone className="w-6 h-6" />, delay: 0.2 },
    { icon: <Globe className="w-6 h-6" />, delay: 0.4 },
];

export default function SkillsGrid() {
    const { t } = useI18n();

    return (
        <section className="relative px-4 py-24 md:py-32 max-w-7xl mx-auto overflow-hidden" id="process">


            <div className="mb-20 text-center relative z-10">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                    className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-4 block"
                >
                    {t.skills.label}
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
                    className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                >
                    {t.skills.title}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
                    className="text-gray-400 max-w-lg mx-auto"
                >
                    {t.skills.subtitle}
                </motion.p>
            </div>

            <div className="relative w-full max-w-3xl mx-auto aspect-square md:aspect-[2/1] flex items-center justify-center">
                <div className="relative w-64 h-64 md:w-96 md:h-96 rotate-45 flex items-center justify-center">
                    {ICONS.map((item, i) => {
                        const row = Math.floor(i / 3);
                        const col = i % 3;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: item.delay, ease: [0.25, 1, 0.5, 1] }}
                                className="absolute"
                                style={{
                                    top: `${(row * 33) + 10}%`,
                                    left: `${(col * 33) + 10}%`,
                                }}
                            >
                                <motion.div
                                    animate={{ y: [-10, 10, -10] }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: item.delay,
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                    className="group w-16 h-16 md:w-20 md:h-20 bg-[#111] border border-white/10 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)_inset] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)_inset,0_0_40px_rgba(255,255,255,0.2)] hover:border-white/40 hover:bg-white/10 transition-all duration-300 -rotate-45 relative z-20 cursor-pointer pointer-events-auto"
                                >
                                    <div className="text-gray-300 group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-300">
                                        {item.icon}
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none" style={{
                backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to top, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                transform: 'perspective(500px) rotateX(60deg) translateY(100px) scale(2)',
                transformOrigin: 'bottom center',
                maskImage: 'linear-gradient(to top, black 20%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to top, black 20%, transparent 100%)'
            }} />
        </section>
    );
}
