"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaXTwitter, FaInstagram, FaGithub, FaFacebook, FaYoutube } from "react-icons/fa6";

export default function ComingSoon() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center"
      >
        {/* Logo (Visual only) */}
        <div className="flex justify-center mb-4">
          <Image
            src="/logos.png"
            alt="NANEXI Software Development Company Logo"
            width={420}
            height={80}
            priority
          />
        </div>

        {/* H1 — SEO Heading */}
        <h1 className="sr-only">
          NANEXI — Where Data Meets Intelligence
        </h1>

        {/* Tagline */}
        <h2 className="text-lg md:text-xl text-gray-300">
          Where Data Meets Intelligence 🤖
        </h2>

        {/* Divider */}
        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* Secondary Heading */}
        <h3 className="mt-10 text-2xl md:text-3xl font-light tracking-wide">
          We’re Building Something Powerful
        </h3>

        {/* SEO Content */}
        <p className="mt-4 text-gray-400 leading-relaxed">
          NANEXI is a next-generation software development company specializing in
          intelligent systems, scalable web applications, and future-ready
          digital solutions for global businesses.
          <br /><br />
          Our platform is currently under development as we prepare a premium
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
        {/* Social Media */}
        <div className="mt-12 flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/company/nanexi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="NANEXI LinkedIn"
            className="text-gray-400 hover:text-white transition text-xl"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://x.com/nanexi_tech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="NANEXI Twitter"
            className="text-gray-400 hover:text-white transition text-xl"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://www.instagram.com/nanexi.tech/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="NANEXI Instagram"
            className="text-gray-400 hover:text-white transition text-xl"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/nanexi.tech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="NANEXI Facebook"
            className="text-gray-400 hover:text-white transition text-xl"
          >
            <FaFacebook />
          </a>

          <a
            href="https://github.com/NANEXI"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="NANEXI GitHub"
            className="text-gray-400 hover:text-white transition text-xl"
          >
            <FaGithub />
          </a>

          <a href="https://www.youtube.com/@Nanexi-Tech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="NANEXI YouTube"
            className="text-gray-400 hover:text-white transition text-xl">
            <FaYoutube />
          </a>
        </div>

        {/* Footer */}
        <p className="mt-16 text-sm text-gray-500">
          © {new Date().getFullYear()} NANEXI. All rights reserved.
        </p>
      </motion.div>
    </main >
  );
}