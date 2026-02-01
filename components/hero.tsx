'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Terminal } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-background pt-20 pb-20">
            {/* Background Stars/Dots */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900/50 via-background to-background" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

            <div className="container px-6 relative z-10 flex flex-col items-center text-center">

                {/* Top Icon - Small Lobster */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-40 h-40 mb-8"
                >
                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                    <Image
                        src="/lobster (2).png"
                        alt="Molt Capital Icon"
                        fill
                        className="object-contain drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                        priority
                    />
                </motion.div>

                {/* Main Heading - Gradient */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-4"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-neutral-500">
                        MoltCapital
                    </span>
                </motion.h1>

                {/* Subtitle - Red */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-primary font-bold tracking-[0.2em] text-sm md:text-base uppercase mb-8"
                >
                    The Open Source AI that actually trades.
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
                >
                    The world's first open-source autonomous hedge fund. Executes complex arbitrage strategies, manages your risk, and grows your portfolio.
                    All from your Mac Mini, with complete data sovereignty.
                </motion.p>

                {/* Bottom Pill Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <Button
                        size="lg"
                        className="h-14 px-8 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.4)] transition-all flex items-center gap-3 group backdrop-blur-sm"
                    >
                        <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-[0_0_10px_rgba(37,99,235,0.4)]">
                            New
                        </span>
                        <span className="font-semibold text-neutral-200 group-hover:text-white transition-colors">
                            Introducing Molt Capital
                        </span>
                        <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                    </Button>
                </motion.div>

            </div>
        </section>
    );
}
