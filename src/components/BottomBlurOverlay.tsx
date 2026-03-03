"use client";

export default function BottomBlurOverlay() {
    return (
        <div
            className="fixed bottom-0 left-0 right-0 h-48 sm:h-64 z-50 pointer-events-none backdrop-blur-md"
            style={{
                maskImage: "linear-gradient(to bottom, transparent 0%, black 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 100%)"
            }}
        />
    );
}
