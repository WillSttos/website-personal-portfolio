"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

const Beams = dynamic(() => import("@/components/Beams"), { ssr: false });

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 overflow-hidden" id="home">
            {/* Beams Background */}
            <div className="absolute inset-0 z-0">
                <Beams
                    beamWidth={2.5}
                    beamHeight={23}
                    beamNumber={16}
                    lightColor="#ffffff"
                    speed={4}
                    noiseIntensity={0.75}
                    scale={0.15}
                    rotation={145}
                />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center justify-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                    className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]"
                >
                    Transforming Ideas into Digital Experiences.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8, ease: [0.25, 1, 0.5, 1] }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
                >
                    Elevating brands through premium Web Design, Graphic Design, and Motion Design.
                </motion.p>

                {/* Call to action */}
                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.5, delay: 1, ease: [0.25, 1, 0.5, 1] }}
                    className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium overflow-hidden isolated"
                >
                    <span className="relative z-10">Explore My Work</span>
                    <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />

                    {/* Inner hover glow */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity z-0"
                    />
                </motion.button>
            </div>

            {/* Scroll indicator line */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
            >
                <span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
            </motion.div>
        </section>
    );
}
