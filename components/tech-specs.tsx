'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const specs = [
    "Apple Silicon (M1/M2/M3) Optimized",
    "Zero-latency Local Execution",
    "Customizable Risk Models",
    "Python & Rust Core Architecture",
    "Dockerized Deployment",
    "REST & WebSocket APIs"
];

export function TechSpecs() {
    return (
        <section id="tech" className="py-24 bg-background relative border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center gap-3 mb-12"
                >
                    <span className="text-primary text-xl font-bold">›</span>
                    <h2 className="text-3xl font-bold text-white tracking-tight">Quick Start</h2>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {/* Terminal Header */}
                    <div className="flex items-center justify-between px-4 py-3 bg-neutral-900 rounded-t-xl border border-white/10">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <div className="text-[10px] text-neutral-500 font-mono">
                            molt-cli — 80x24
                        </div>
                    </div>

                    {/* Terminal Body */}
                    <div className="bg-black/50 backdrop-blur-md border-x border-b border-white/10 rounded-b-xl p-8 font-mono text-sm md:text-base leading-relaxed relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-20">
                            <TerminalIcon className="w-24 h-24 text-white" />
                        </div>

                        <div className="relative z-10 space-y-4">
                            <div className="flex flex-col md:flex-row gap-2 text-neutral-400">
                                <span># Install Molt globally on your machine</span>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-primary">$</span>
                                <span className="text-white">curl -fsSL https://molt.capital/install.sh | sh</span>
                            </div>

                            <div className="h-4" /> {/* Spacer */}

                            <div className="flex flex-col md:flex-row gap-2 text-neutral-400">
                                <span># Initialize a new strategy</span>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-primary">$</span>
                                <span className="text-white">molt init my-first-strategy --template=arbitrage</span>
                            </div>

                            <div className="h-4" /> {/* Spacer */}

                            <div className="flex flex-col md:flex-row gap-2 text-neutral-400">
                                <span># Start the autonomous agent</span>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-primary">$</span>
                                <span className="text-white">molt start --live</span>
                            </div>
                            <div className="text-emerald-500 pt-2 animate-pulse">
                                › Molt Engine v1.0.4 Online. Scanning markets...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function TerminalIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <polyline points="4 17 10 11 4 5"></polyline>
            <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
    )
}
