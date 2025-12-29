// components/Header.jsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Contact", href: "/contact" }
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/10">
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3 group">
                    <div className="">
                        <img src="fav-i.png"
                            height={20}
                            width={70}
                        />
                    </div>
                    <div>
                        <h1 className="text-2xl text-white font-semibold tracking-wide">
                            NANEXI</h1>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-2">
                    <div className="flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-white font-medium px-3 py-2 relative group transition-all duration-300"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300 origin-center" />
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="ml-8">
                        <Link
                            href="/contact"
                            className="px-6 py-2 bg-white/10 border border-white/30 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5 shadow-lg"
                        >
                            Get Quote
                        </Link>
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-xl border border-white/20 hover:bg-white/10 transition-all duration-300"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-black/95 border-t border-white/10 backdrop-blur-xl animate-in slide-in-from-top-4 duration-300">
                    <nav className="px-6 py-8 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block py-3 px-4 text-gray-300 hover:text-white font-semibold border-l-4 border-transparent hover:border-white transition-all duration-300"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="block w-full py-4 px-6 bg-white/10 border border-white/30 text-white font-semibold text-center rounded-2xl hover:bg-white/20 transition-all duration-300 mt-4"
                            onClick={() => setMobileOpen(false)}
                        >
                            Get Quote
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
