'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Activity, ShieldCheck, Globe } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-8 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-colors group"
    >
        <div className="mb-6">
            <Icon className="w-8 h-8 text-primary/80 group-hover:text-primary transition-colors" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-neutral-400 text-sm leading-relaxed">
            {description}
        </p>
    </motion.div>
);

export function Features() {
    return (
        <section id="features" className="py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center gap-3 mb-16"
                >
                    <span className="text-primary text-xl font-bold">›</span>
                    <h2 className="text-3xl font-bold text-white tracking-tight">What It Does</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={Activity}
                        title="Runs on Your Machine"
                        description="Mac, Windows, or Linux. Molt runs locally on your hardware, ensuring zero latency and complete privacy for your trading strategies."
                    />
                    <FeatureCard
                        icon={Globe}
                        title="Universal Connectivity"
                        description="Connects to Binance, Coinbase, Kraken, and Bybit simultaneously. Unified API for execution across all major liquidity venues."
                    />
                    <FeatureCard
                        icon={ShieldCheck}
                        title="Persistent Memory"
                        description="Local vault stores your historical trade data and strategy performance. Your alpha stays on your machine, never in the cloud."
                    />
                    <FeatureCard
                        icon={ShieldCheck}
                        title="Risk Guard"
                        description="Automated risk management layer that sits between your strategy and the exchange. Hard limits on drawdown and exposure."
                    />
                    <FeatureCard
                        icon={Activity}
                        title="Full System Access"
                        description="Direct access to system resources. execute shell commands, run Python scripts, and integrate with local databases."
                    />
                    <FeatureCard
                        icon={Globe}
                        title="Community Plugins"
                        description="Extend functionality with community-built strategy templates and indicators. Write your own in Python or Rust."
                    />
                </div>
            </div>
        </section>
    );
}
