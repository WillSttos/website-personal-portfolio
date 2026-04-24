"use client";

import { motion } from "framer-motion";
import { Monitor, PenTool, Video, Aperture } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

const ICONS = [
    <Video className="w-6 h-6" key="video" />,
    <PenTool className="w-6 h-6" key="pen" />,
    <Monitor className="w-6 h-6" key="monitor" />,
    <Aperture className="w-6 h-6" key="aperture" />,
];

const CLASS_NAMES = [
    "md:col-span-2 md:row-span-2",
    "md:col-span-1 md:row-span-1",
    "md:col-span-1 md:row-span-1",
    "md:col-span-2 md:row-span-1",
];

export default function ServicesBento() {
    const { t } = useI18n();

    const services = t.services.items.map((item, i) => ({
        ...item,
        icon: ICONS[i],
        className: CLASS_NAMES[i],
    }));

    return (
        <section className="relative px-4 py-24 md:py-32 max-w-7xl mx-auto" id="services">
            <div className="mb-16 text-center">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                    className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-4 block"
                >
                    {t.services.label}
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
                    className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                >
                    {t.services.title}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
                    className="text-gray-400 max-w-2xl mx-auto"
                >
                    {t.services.subtitle}
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
                {services.map((service, i) => (
                    <BentoCard key={i} {...service} index={i} />
                ))}
            </div>
        </section>
    );
}

function BentoCard({ title, description, icon, className, index }: {
    title: string;
    description: string;
    icon: React.ReactNode;
    className: string;
    index: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
            className={`group relative p-[1px] rounded-2xl overflow-hidden ${className}`}
            style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 100%)"
            }}
        >
            <div className="relative w-full h-full rounded-[15px] overflow-hidden flex flex-col justify-between p-8 z-10"
                style={{
                    background: "linear-gradient(45deg, rgba(255, 255, 255, 0.08) 0%, rgba(20, 20, 20, 0.6) 40%, rgba(10, 10, 10, 0.4) 100%)",
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                }}>

                <motion.div
                    className="absolute w-[5px] h-[5px] bg-white rounded-full z-20 shadow-[0_0_10px_#ffffff]"
                    animate={{
                        top: ["10%", "10%", "90%", "90%", "10%"],
                        left: ["90%", "10%", "10%", "90%", "90%"]
                    }}
                    transition={{ duration: 6, ease: "linear", repeat: Infinity }}
                    style={{ x: "-50%", y: "-50%" }}
                />



                <div className="absolute w-full h-[1px] top-[10%] left-0 bg-gradient-to-r from-[#888888] to-[#1d1f1f]" />
                <div className="absolute w-full h-[1px] bottom-[10%] left-0 bg-[#2c2c2c]" />
                <div className="absolute w-[1px] h-full top-0 left-[10%] bg-gradient-to-b from-[#747474] to-[#222424]" />
                <div className="absolute w-[1px] h-full top-0 right-[10%] bg-[#2c2c2c]" />

                <div className="absolute inset-[10%] pt-6 pl-4 md:pt-8 md:pl-6 flex flex-col items-start z-30 pointer-events-none">
                    <motion.div
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/15 bg-[#111111] flex items-center justify-center text-gray-300 mb-4 group-hover:-translate-y-1 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                        style={{
                            boxShadow: "inset 0 2px 6px rgba(0,0,0,0.8), inset 0 -1px 3px rgba(255,255,255,0.08), 0 0 12px rgba(255,255,255,0.06), 0 1px 2px rgba(0,0,0,0.6)"
                        }}
                    >
                        {icon}
                    </motion.div>

                    <h3 className="text-3xl md:text-4xl font-black mb-3 tracking-tighter transition-colors duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                        style={{
                            background: "linear-gradient(45deg, #111111 4%, #ffffff, #000000)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            color: "transparent"
                        }}
                    >{title}</h3>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-medium pr-4 md:pr-8">{description}</p>
                </div>
            </div>
        </motion.div>
    );
}
