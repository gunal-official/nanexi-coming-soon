"use client"

import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center"
      >
        {/* Logo / Brand */}
        <h1 className="text-4xl md:text-6xl font-semibold tracking-widest">
          NANEXI
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Where Data Meets Intelligence 🤖
        </p>

        {/* Divider */}
        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* Coming Soon Text */}
        <h2 className="mt-10 text-2xl md:text-3xl font-light tracking-wide">
          We’re Building Something Powerful
        </h2>

        <p className="mt-4 text-gray-400 leading-relaxed">
          NANEXI is a next-generation software development company focused on
          intelligent systems, scalable technology, and future-ready solutions.
          
          <br /><br />
          Our platform is currently under development. We’re preparing an
          experience where precision meets innovation.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:contact@nanexi.com"
            className="px-8 py-3 rounded-2xl bg-white text-black font-medium hover:bg-gray-200 transition"
          >
            Contact Us
          </a>

          <span className="px-8 py-3 rounded-2xl border border-white/30 text-gray-300">
            Coming Soon
          </span>
        </div>

        {/* Footer */}
        <p className="mt-16 text-sm text-gray-500">
          © {new Date().getFullYear()} NANEXI. All rights reserved.
        </p>
      </motion.div>
    </main>
  );
}
