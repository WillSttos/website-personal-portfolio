"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const FAQ_DATA = [
    {
        question: "What is your typical design process?",
        answer: "I start by understanding your brand's core values and target audience. From there, I move to wireframing, high-fidelity UI design in Figma, and finally, motion-rich frontend development using React and Tailwind.",
    },
    {
        question: "Do you develop the websites you design?",
        answer: "Yes, I specialize in design engineering. I don't just create static prototypes; I bring them to life using Next.js, Framer Motion, and GSAP ensuring perfect 1:1 implementation.",
    },
    {
        question: "What timeline should I expect for a full website?",
        answer: "A standard premium landing page takes about 2-3 weeks from concept to deployment. Multi-page portfolios or eCommerce experiences can take 4-8 weeks depending on the complexity of 3D elements and animations.",
    },
    {
        question: "Can we integrate a CMS later?",
        answer: "Absolutely. I build modular frontends (like this one on Next.js) which can easily be connected to headless CMS platforms like Sanity, Strapi, or Contentful whenever you're ready to scale.",
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="px-4 py-24 md:py-32 max-w-3xl mx-auto w-full" id="faq">
            <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight glow-text block">
                    FAQ
                </h2>
            </div>

            <div className="space-y-2">
                {FAQ_DATA.map((faq, i) => (
                    <div key={i} className="border-b border-white/10 overflow-hidden">
                        <button
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            className="w-full flex items-center justify-between py-6 text-left hover:text-white group transition-colors"
                        >
                            <span className={`text-lg font-medium transition-colors ${openIndex === i ? "text-white" : "text-gray-400 group-hover:text-gray-200"}`}>
                                {faq.question}
                            </span>
                            <motion.div
                                animate={{ rotate: openIndex === i ? 45 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-gray-500 group-hover:text-white shrink-0"
                            >
                                <Plus className="w-5 h-5" />
                            </motion.div>
                        </button>

                        <AnimatePresence>
                            {openIndex === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0, filter: "blur(10px)" }}
                                    animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
                                    exit={{ height: 0, opacity: 0, filter: "blur(10px)" }}
                                    transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                                >
                                    <p className="pb-6 text-gray-400 leading-relaxed pr-8">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}
