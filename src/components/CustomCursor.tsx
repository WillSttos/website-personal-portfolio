"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    // Smooth out the motion
    const cursorX = useSpring(0, { stiffness: 300, damping: 30, mass: 0.5 });
    const cursorY = useSpring(0, { stiffness: 300, damping: 30, mass: 0.5 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", updateMousePosition);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [cursorX, cursorY, isVisible]);

    if (typeof window === "undefined") return null;

    return (
        <>
            <motion.div
                className="pointer-events-none fixed top-0 left-0 z-50 w-6 h-6 rounded-full border border-white/30 mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    opacity: isVisible ? 1 : 0,
                }}
            />
            <motion.div
                className="pointer-events-none fixed top-0 left-0 z-0 w-[400px] h-[400px] rounded-full bg-white/5 blur-[100px] mix-blend-screen"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{ type: "tween", ease: "linear", duration: 0.1 }}
            />
        </>
    );
}
