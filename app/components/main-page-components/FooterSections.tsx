//Footer sections
import { FaLinkedinIn, FaYoutube, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-[#23272f] text-white overflow-hidden min-h-[420px] flex flex-col justify-end">
      {/* Top Navigation */}
      <div className="max-w-7xl mx-auto px-8 pt-12 pb-8 flex flex-wrap items-center justify-between gap-8 border-b border-white/10">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold tracking-widest text-[#5b7f8b] drop-shadow-lg">
            NANEXI
          </span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap items-center gap-8 text-base text-white/80 font-medium">
          <a href="/about" className="hover:text-[#5b7f8b] transition-colors">About Us</a>
          <a href="/contact-us" className="hover:text-[#5b7f8b] transition-colors">Contact Us</a>
          <a href="/privacy-policy" className="hover:text-[#5b7f8b] transition-colors">Privacy Policy</a>
          <a href="/refund-policy" className="hover:text-[#5b7f8b] transition-colors">Refund Policy</a>
          <a href="/terms-and-conditions" 
            className="hover:text-[#5b7f8b] transition-colors">Terms and Conditions</a>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <p className="text-base text-white/70 font-light">
          © 2025 Heizen. All Rights Reserved
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-6 text-white/80">
          <a href="#" className="hover:text-[#5b7f8b] transition-colors">
            <FaLinkedinIn size={22} />
          </a>
          <a href="#" className="hover:text-[#5b7f8b] transition-colors">
            <FaYoutube size={22} />
          </a>
          <a href="#" className="hover:text-[#5b7f8b] transition-colors">
            <FaInstagram size={22} />
          </a>
          <a href="#" className="hover:text-[#5b7f8b] transition-colors">
            <FaXTwitter size={22} />
          </a>
        </div>
      </div>

      {/* Background Text */}
      <div className="absolute inset-x-0 -bottom-10 text-center pointer-events-none select-none">
        <h1 className="text-[160px] md:text-[260px] font-extrabold tracking-widest text-[#5b7f8b]/30 leading-none">
          NANEXI
        </h1>
      </div>
    </footer>
  );
}
