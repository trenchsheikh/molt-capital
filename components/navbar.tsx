'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl rounded-full border border-white/5 bg-black/30 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
        >
            <div className="flex items-center justify-between px-8 py-3">
                <Link href="/" className="text-xl font-bold text-white flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Molt
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    <Link href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">
                        Features
                    </Link>
                    <Link href="#tech" className="text-sm text-gray-400 hover:text-white transition-colors">
                        Technology
                    </Link>
                    <Link href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">
                        About
                    </Link>
                    <Link href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                        Contact
                    </Link>
                </div>

                <div className="flex items-center space-x-4">
                    <Button variant="ghost" className="hidden sm:inline-flex text-gray-400 hover:text-white hover:bg-white/10">
                        Sign In
                    </Button>
                    <Button className="bg-white text-black hover:bg-gray-200 transaction-colors">
                        Get Started
                    </Button>
                </div>
            </div>
        </motion.nav>
    );
}
