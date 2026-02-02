'use client';

import { motion } from 'framer-motion';

const integrations = [
    { name: "Hyperliquid", color: "bg-green-500 text-green-500" },
    { name: "Polymarket", color: "bg-blue-500 text-blue-500" },
    { name: "Pancakeswap", color: "bg-cyan-500 text-cyan-500" },
    { name: "Meteora", color: "bg-purple-500 text-purple-500" },
];

export function Integrations() {
    return (
        <section className="py-24 bg-background border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center gap-3 mb-12"
                >
                    <div className="flex items-center gap-3">
                        <span className="text-primary text-xl font-bold">›</span>
                        <h2 className="text-3xl font-bold text-white tracking-tight">Integrations</h2>
                    </div>
                    <p className="text-neutral-400 max-w-2xl">
                        currently supports hyperliquid, polymarket, pancakeswap, and meteora
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
                    {integrations.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className={`absolute inset-0 ${item.color.split(' ')[0]} blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                            <div className="relative flex items-center gap-4 px-8 py-4 rounded-full border border-white/10 bg-neutral-900/50 hover:bg-neutral-800 hover:border-white/20 transition-all cursor-default">
                                <div className={`w-2.5 h-2.5 rounded-full ${item.color} shadow-[0_0_10px_currentColor]`} />
                                <span className="text-neutral-200 font-semibold text-base group-hover:text-white transition-colors">{item.name}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
