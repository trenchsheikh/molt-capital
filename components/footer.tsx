'use client';

import Link from 'next/link';
import { Twitter, Github, Disc, Send } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-background pt-24 pb-12 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">



                {/* Links Section */}
                <div className="grid md:grid-cols-4 gap-12 mb-12 border-t border-white/5 pt-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold text-white mb-4 block tracking-tighter">
                            MoltCapital
                        </Link>
                        <p className="text-neutral-500 text-sm leading-relaxed">
                            The first autonomous open source hedge fund run by Openclaw.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4 text-sm">Product</h4>
                        <ul className="space-y-3 text-sm text-neutral-500">
                            <li><Link href="#features" className="hover:text-primary transition-colors">Features</Link></li>
                            <li><Link href="#tech" className="hover:text-primary transition-colors">Integration</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Changelog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4 text-sm">Resources</h4>
                        <ul className="space-y-3 text-sm text-neutral-500">
                            <li><Link href="#" className="hover:text-primary transition-colors">Documentation</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">API Reference</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Community</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4 text-sm">Connect</h4>
                        <div className="flex space-x-4">
                            <Link href="#" className="bg-neutral-900 border border-white/10 p-2 rounded-lg text-neutral-400 hover:text-white hover:border-white/20 transition-all">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="bg-neutral-900 border border-white/10 p-2 rounded-lg text-neutral-400 hover:text-white hover:border-white/20 transition-all">
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="bg-neutral-900 border border-white/10 p-2 rounded-lg text-neutral-400 hover:text-white hover:border-white/20 transition-all">
                                <Disc className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
                    <p>&copy; {new Date().getFullYear()} Molt Capital. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
