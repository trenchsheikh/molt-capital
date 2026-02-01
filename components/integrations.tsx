'use client';

import { motion } from 'framer-motion';

const integrations = [
    { name: "Hyperliquid", color: "bg-green-500 text-green-500" },
    { name: "Polymarket", color: "bg-blue-500 text-blue-500" },
    { name: "Meteora", color: "bg-purple-500 text-purple-500" },
    { name: "Pancakeswap", color: "bg-cyan-500 text-cyan-500" },
    { name: "Binance", color: "bg-yellow-400 text-yellow-400" },
    { name: "Ethereum", color: "bg-indigo-500 text-indigo-500" },
    { name: "Solana", color: "bg-emerald-400 text-emerald-400" },
    { name: "Binance Smart Chain", color: "bg-amber-400 text-amber-400" },
    { name: "Kalshi", color: "bg-lime-400 text-lime-400" },
    { name: "Uniswap", color: "bg-pink-500 text-pink-500" },
];

export function Integrations() {
    return (
        <section className="py-24 bg-background border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center gap-3 mb-12"
                >
                    <span className="text-primary text-xl font-bold">›</span>
                    <h2 className="text-3xl font-bold text-white tracking-tight">Integrations</h2>
                </motion.div>

                <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
                    {integrations.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative"
                        >
                            <div className={`absolute inset-0 ${item.color.split(' ')[0]} blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                            <div className="relative flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-neutral-900/50 hover:bg-neutral-800 hover:border-white/20 transition-all cursor-default">
                                <div className={`w-2 h-2 rounded-full ${item.color} shadow-[0_0_8px_currentColor]`} />
                                <span className="text-neutral-300 font-medium text-sm group-hover:text-white transition-colors">{item.name}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
