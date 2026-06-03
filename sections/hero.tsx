"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Kill any previous timeline (handles React 18 strict-mode double-mount)
    tlRef.current?.kill();

    // Reset elements to visible before starting animation
    gsap.set(".hero-heading, .hero-subtext, .hero-btn", {
      clearProps: "all",
    });

    const tl = gsap.timeline();
    tlRef.current = tl;

    tl.fromTo(
      ".hero-heading",
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
      .fromTo(
        ".hero-subtext",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        ".hero-btn",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.5"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#eef4ff] to-[#e0ecff] px-6 pb-16 pt-28 md:pb-20 md:pt-32 lg:px-12"
    >
      {/* Subtle dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12] [background-size:20px_20px] [background-image:radial-gradient(rgba(100,116,139,0.22)_0.8px,transparent_0.8px)]"
        aria-hidden="true"
      />

      {/* Top glow */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-[28rem] w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.18)_0%,rgba(191,219,254,0.12)_40%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      {/* Soft top fade */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/60 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <BackgroundBeamsWithCollision
          className="min-h-[calc(100vh-12rem)] h-auto bg-transparent from-transparent to-transparent dark:from-transparent dark:to-transparent"
          collisionSurfaceClassName="h-px bg-transparent"
          collisionSurfaceStyle={{ boxShadow: "none" }}
        >
          <div className="flex max-w-4xl flex-col items-center text-center">
            <h1 className="hero-heading text-[2.5rem] leading-[1.1] font-semibold tracking-[-0.04em] text-[#0f172a] sm:text-5xl md:text-6xl md:leading-[1.05] lg:text-7xl xl:text-8xl [text-wrap:balance]">
              We Don&apos;t Just Build, <br className="hidden sm:block" /> We{" "}
              <PointerHighlight
                rectangleClassName="rounded-md border-blue-300/70"
                pointerClassName="text-blue-500"
                containerClassName="inline-block"
              >
                <span className="bg-gradient-to-r from-[#2563eb] via-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">
                  Dominate
                </span>
              </PointerHighlight>
            </h1>

            <p className="hero-subtext mt-8 max-w-2xl text-base leading-relaxed text-[#64748b] sm:text-lg md:text-xl lg:text-2xl lg:leading-9">
              We craft custom software, websites, and digital strategies that
              move the needle.
            </p>

            <Link
              href="/#contact"
              className="hero-btn group mt-10 inline-flex items-center gap-3 rounded-full bg-[#2563eb] py-3 pl-8 pr-4 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(37,99,235,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#1d4ed8] hover:shadow-[0_18px_36px_rgba(37,99,235,0.22)] md:py-3.5 md:pl-10 md:pr-5 md:text-lg"
            >
              <span>Get Started</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-[#2563eb] group-hover:translate-x-0.5 md:h-9 md:w-9">
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 md:h-5 md:w-5" />
              </span>
            </Link>
          </div>
        </BackgroundBeamsWithCollision>
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#f8fafc] to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
