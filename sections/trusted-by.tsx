"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const clients = [
  { name: "Atlassian", logo: "/clients/atlassian.svg" },
  { name: "Accenture", logo: "/clients/accenture.svg" },
  { name: "Microsoft", logo: "/clients/microsoft.svg" },
  { name: "Oracle", logo: "/clients/oracle.svg" },
  { name: "OpenAI", logo: "/clients/openai.svg" },
];

// Duplicate for seamless infinite scroll
const marqueeClients = [...clients, ...clients, ...clients, ...clients];

export default function TrustedBy() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-in heading on scroll
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });

      // Fade in each logo card with stagger
      gsap.from(".client-logo-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.08,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="trusted-by"
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background: "#f8fafc",
      }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-[-6rem] mx-auto h-[24rem] w-[24rem] rounded-full blur-3xl md:h-[30rem] md:w-[30rem]"
        style={{
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.14) 0%, rgba(147, 197, 253, 0.12) 34%, rgba(255, 255, 255, 0) 74%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.12) 18%, rgba(255,255,255,0) 42%)",
        }}
      />

      {/* Subtle top divider glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.24) 50%, transparent 100%)",
        }}
      />

      {/* Section heading */}
      <div ref={headingRef} className="text-center mb-16 px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-600/80 font-medium mb-4">
          Trusted Partners
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
          Brands That{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #3b82f6 0%, #60a5fa 50%, #93c5fd 100%)",
            }}
          >
            Trust Us
          </span>
        </h2>
        <p className="mt-4 text-slate-600 max-w-xl mx-auto text-base md:text-lg">
          We&apos;ve partnered with industry leaders to deliver results that
          matter.
        </p>
      </div>

      {/* Infinite marquee */}
      <div className="relative">
        {/* Left fade mask */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16 md:w-40 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, #f8fafc 0%, rgba(248,250,252,0) 100%)",
          }}
        />
        {/* Right fade mask */}
        <div
          className="absolute right-0 top-0 bottom-0 w-16 md:w-40 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(270deg, #f8fafc 0%, rgba(248,250,252,0) 100%)",
          }}
        />

        {/* Marquee track */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex items-center gap-6 sm:gap-8 md:gap-12 animate-marquee"
            style={{
              width: "max-content",
            }}
          >
            {marqueeClients.map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="client-logo-card group relative flex-shrink-0"
              >
                <div
                  className="relative flex items-center justify-center w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-2xl transition-all duration-500 ease-out group-hover:scale-105"
                >
                  {/* Hover glow effect */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(circle at center, rgba(96,165,250,0.1) 0%, transparent 72%)",
                    }}
                  />

                  {/* Logo image */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl overflow-hidden transition-transform duration-500 group-hover:scale-110">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain drop-shadow-lg"
                      sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
                    />
                  </div>

                  {/* Client name tooltip on hover */}
                  <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-bottom-5 sm:group-hover:-bottom-7 whitespace-nowrap">
                    <span className="text-[10px] sm:text-xs text-slate-600 font-medium tracking-wide">
                      {client.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom decorative accent */}
      <div className="mt-16 flex justify-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-blue-500/28" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500/28" />
          <span className="text-xs text-slate-500 uppercase tracking-[0.25em]">
            And more to come
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500/28" />
          <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-blue-500/28" />
        </div>
      </div>
    </section>
  );
}
