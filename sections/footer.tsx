"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, ArrowRight, Mail } from "lucide-react";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import WorldMap from "@/components/ui/world-map";
import { toast } from "sonner";

const companyLinks = [
  { label: "Home", href: "/#home", external: false },
  { label: "About Us", href: "/#about", external: false },
  { label: "Services", href: "/#services", external: false },
  { label: "Portfolio", href: "/Portfolio", external: false },
];

const resourcesLinks = [
  { label: "Blog", href: "/Blog", external: false },
  { label: "Contact Us", href: "/#contact", external: false },
  { label: "Address", href: "https://www.google.com/maps/search/?api=1&query=Gera's+Imperium+Rise+Hinjewadi+Phase+II+Pune+411057", external: true },
];

const mapDots = [
  {
    start: { lat: 64.2008, lng: -149.4937 },
    end: { lat: 34.0522, lng: -118.2437 },
  },
  {
    start: { lat: 64.2008, lng: -149.4937 },
    end: { lat: -15.7975, lng: -47.8919 },
  },
  {
    start: { lat: -15.7975, lng: -47.8919 },
    end: { lat: 38.7223, lng: -9.1393 },
  },
  {
    start: { lat: 51.5074, lng: -0.1278 },
    end: { lat: 28.6139, lng: 77.209 },
  },
  {
    start: { lat: 28.6139, lng: 77.209 },
    end: { lat: 43.1332, lng: 131.9113 },
  },
  {
    start: { lat: 28.6139, lng: 77.209 },
    end: { lat: -1.2921, lng: 36.8219 },
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const watermarkRef = useRef<HTMLDivElement>(null);
  const watermarkTextRef = useRef<HTMLHeadingElement>(null);

  // Auto-scale the watermark text to perfectly fill its container width
  useEffect(() => {
    const container = watermarkRef.current;
    const text = watermarkTextRef.current;
    if (!container || !text) return;

    const fit = () => {
      // Reset to a known baseline first
      text.style.fontSize = "100px";
      const scale = container.clientWidth / text.scrollWidth;
      text.style.fontSize = `${100 * scale}px`;
    };

    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(container);
    return () => ro.disconnect();
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Thank you! You've been subscribed to our newsletter.");
    setEmail("");
  };

  return (
    <footer id="footer" className="relative w-full overflow-visible bg-transparent">
      <div className="bg-[#0c0c14]">
        {/* ── Footer content (upper portion) ── */}
        <div className="px-6 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
            {/* 4-column grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 pt-14 pb-4">
              {/* Brand column */}
              <div className="col-span-2 sm:col-span-1 space-y-4">
                <h2 className="text-xl font-bold tracking-wide text-white">
                  AP Digitech <span className="text-blue-500">Solutions</span>
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed max-w-[280px]">
                  We craft custom software, websites, and digital strategies that move the needle.
                </p>
              </div>

              {/* Company column */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-white tracking-wide">Company</h3>
                <ul className="space-y-3">
                  {companyLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                        {link.external && (
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources column */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-white tracking-wide">Resources</h3>
                <ul className="space-y-3">
                  {resourcesLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                        {link.external && (
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter column */}
              <div className="col-span-2 sm:col-span-1 space-y-4">
                <h3 className="text-sm font-semibold text-white tracking-wide">Newsletter</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Receive product updates news, exclusive discounts and early access.
                </p>
                <form onSubmit={handleSubscribe} className="relative flex items-center max-w-sm sm:max-w-none">
                  <Mail className="absolute left-3.5 w-4 h-4 text-gray-500" />
                  <input
                    type="email"
                    placeholder="Enter your email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-14 py-3 bg-white/[0.06] border border-white/[0.1] rounded-full text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all duration-200"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 w-9 h-9 flex items-center justify-center bg-blue-500 hover:bg-blue-400 rounded-full transition-colors duration-200"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* ── World Map (lower portion, clearly visible) ── */}
        <div className="relative w-full px-4 md:px-16 lg:px-24 pt-4 overflow-hidden sm:overflow-visible">
          {/* Top fade so map blends from the content above */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#0c0c14] to-transparent z-10 pointer-events-none" />

          <div className="max-w-5xl mx-auto opacity-40 sm:opacity-60">
            <WorldMap dots={mapDots} lineColor="#3b82f6" />
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0c0c14] to-transparent z-10 pointer-events-none" />
        </div>

        {/* ── Bottom bar ── */}
        <div className="relative z-10 px-6 md:px-16 lg:px-24 pb-10 sm:pb-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-between gap-6 pt-4 sm:flex-row sm:gap-4">
              <p className="text-[10px] sm:text-xs text-gray-500 text-center sm:text-left order-2 sm:order-1">
                © {new Date().getFullYear()} AP Digitech Solutions · All rights reserved
              </p>

              <div className="flex items-center gap-3 order-1 sm:order-2">
                <span className="text-[9px] sm:text-[10px] font-medium uppercase tracking-widest text-slate-500 mr-1">Follow us on</span>
                {[
                  { Icon: FaFacebookF, label: "Facebook", href: "#" },
                  { Icon: FaXTwitter, label: "Twitter/X", href: "#" },
                  { Icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/company/apdigitechsolutions/" },
                  { Icon: FaInstagram, label: "Instagram", href: "#" },
                ].map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full text-slate-400 transition-all duration-300 hover:text-blue-400 hover:bg-blue-400/10"
                  >
                    {/* Soft Glow Effect */}
                    <div className="absolute inset-0 rounded-full bg-blue-400/0 opacity-0 blur-xl transition-all duration-300 group-hover:bg-blue-400/20 group-hover:opacity-100" />

                    <Icon className="relative z-10 h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* ── Giant watermark text (bottom-left) ── */}
        <div
          ref={watermarkRef}
          className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden z-20"
        >
          <h2
            ref={watermarkTextRef}
            className="font-black leading-none tracking-tight text-white/[0.06] -mb-[1vw] whitespace-nowrap block"
          >
            AP Digitech Solutions
          </h2>
        </div>
      </div>
    </footer>
  );
}
