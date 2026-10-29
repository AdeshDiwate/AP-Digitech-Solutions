"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ArrowRight, Plus } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-heading",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1 }
      )
        .fromTo(
          ".hero-subtext",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ".hero-btn",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 },
          "-=0.4"
        )
        .fromTo(
          ".hero-card",
          { opacity: 0, y: 35, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.75, stagger: 0.15, ease: "back.out(1.2)" },
          "-=0.3"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#f8fafc] flex flex-col justify-end"
    >
      {/* ── Background image with priority preloading ─────────────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Healthcare and patient care"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Clean white & frosted overlays for a bright, premium medical tone */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.88) 45%, rgba(255,255,255,0.52) 80%, rgba(255,255,255,0.25) 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-80"
          style={{
            background:
              "linear-gradient(to top, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.6) 50%, transparent 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 top-0 h-40"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.88) 0%, transparent 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* ── Content container ────────────────────────────────────── */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between px-6 pb-12 pt-32 sm:px-8 sm:pb-16 md:px-12 lg:px-16 lg:pb-20">
        {/* Top spacer so navbar floats comfortably */}
        <div className="h-6 sm:h-10" />

        {/* Main layout row: headline/CTA on left, cards on right */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          {/* ── Left column: headline + copy + buttons ─────────── */}
          <div className="max-w-2xl lg:max-w-[58%]">
            <h1 className="hero-heading text-[2.75rem] font-bold leading-[1.06] tracking-[-0.035em] text-[#0f172a] sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[5.1rem]">
              Strategy, Technology & Marketing <br />
              That Drive Results
            </h1>

            <p className="hero-subtext mt-6 max-w-xl text-sm leading-relaxed text-[#475569] sm:text-base md:text-lg">
              From patient-acquisition campaigns to custom websites, portals and hospital software, we help clinics, hospitals and health-tech companies grow faster and operate smarter.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5 sm:gap-6">
              <Link
                href="/#contact"
                className="hero-btn group inline-flex items-center gap-3 rounded-full bg-[#0f172a] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-slate-900/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/80 md:text-base"
              >
                Book A Strategy Call
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#0f172a] transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>

              <Link
                href="/Portfolio"
                className="hero-btn inline-flex items-center gap-1.5 border-b-2 border-slate-300 pb-0.5 text-sm font-semibold text-slate-800 transition-all duration-300 hover:border-slate-900 hover:text-[#0f172a] focus-visible:outline-none md:text-base"
              >
                View Case Studies
              </Link>
            </div>
          </div>

          {/* ── Right column: floating metric & badge cards ──────── */}
          <div className="flex flex-wrap items-stretch gap-4 sm:flex-nowrap sm:gap-5 lg:items-end">
            {/* Card 1 — Trusted Rate */}
            <div className="hero-card group relative flex min-w-[155px] flex-1 flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/95 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08),0_4px_12px_rgba(15,23,42,0.04)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_25px_60px_rgba(15,23,42,0.15)] sm:w-48 sm:flex-initial">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Trusted Rate
                </p>
                <p className="mt-2 text-4xl font-extrabold tracking-tight text-[#0f172a] sm:text-5xl">
                  98%
                </p>
              </div>
              <p className="mt-4 text-xs font-medium leading-snug text-slate-600">
                Growth Opportunity<br />Identified
              </p>
            </div>

            {/* Card 2 — Category tags & growth indicator */}
            <div className="hero-card group relative flex min-w-[155px] flex-1 flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/95 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08),0_4px_12px_rgba(15,23,42,0.04)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_25px_60px_rgba(15,23,42,0.15)] sm:w-48 sm:flex-initial">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#0f172a]">Healthcare</span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0f172a] text-white">
                  <Plus className="h-3 w-3" />
                </span>
              </div>

              <div className="my-3 flex items-center gap-2">
                <span className="text-sm font-semibold text-slate-400">+</span>
                <span className="rounded-full bg-[#c9f241] px-3 py-1 text-xs font-bold text-[#0f172a] shadow-sm">
                  Growth
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#0f172a]">Conversion</span>
                <span className="text-sm font-semibold text-slate-400">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


