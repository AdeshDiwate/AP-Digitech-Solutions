"use client";

import { ArrowUpRight } from "lucide-react";

const stats = [
  { value: "25+", label: "Projects Delivered" },
  { value: "7+", label: "Core Service Areas" },
  { value: "100%", label: "Custom-Built Solutions" },
  { value: "24/7", label: "AI & Tech Support" },
];

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#e9eef5_0%,#e3ebf4_18%,#dde7f3_100%)] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-75 [background-size:20px_20px] [background-image:radial-gradient(rgba(71,85,105,0.18)_1px,transparent_1px)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.56)_0%,rgba(233,238,245,0.18)_22%,rgba(221,231,243,0)_42%),radial-gradient(circle_at_top,rgba(191,219,254,0.36),transparent_38%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.24),transparent_46%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.10)_0%,rgba(147,197,253,0.1)_34%,rgba(255,255,255,0)_72%)] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/55 via-white/18 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_24%,rgba(148,163,184,0.08)_100%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2.25rem] border border-white/90 bg-white text-neutral-950 shadow-[0_28px_90px_rgba(37,99,235,0.10),0_20px_44px_rgba(15,23,42,0.10)]">
          <svg
            viewBox="0 0 1200 540"
            className="pointer-events-none absolute inset-0 h-full w-full opacity-45"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <path
              d="M26 78C110 254 186 356 336 390c210 48 409-86 565-211 99-79 171-111 274-15"
              fill="none"
              stroke="#94a3b8"
              strokeDasharray="7 9"
              strokeWidth="1.5"
            />
            <path
              d="m504 373 29-7-16 25"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>

          <div className="grid gap-12 px-6 pb-10 pt-12 sm:px-8 md:px-12 md:pb-12 md:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-16">
            <div className="relative z-10 mx-auto max-w-xl lg:mx-0">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-blue-500 sm:text-sm">
                About Us
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
                We build digital products that make ambitious brands impossible
                to ignore.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-neutral-600 sm:text-lg sm:leading-8">
                At AP Digitech Solutions, we blend product thinking, sharp design, and fast
                engineering to create experiences that feel polished, useful,
                and unmistakably premium.
              </p>
              <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg sm:leading-8">
                From websites to custom software, we help teams move from rough
                ideas to launch-ready systems with clarity, speed, and a strong
                creative point of view.
              </p>
              <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(249,115,22,0.28)] transition hover:bg-orange-400">
                More about
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>

            <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col gap-8 lg:gap-6">
              <div className="relative h-[260px] sm:h-[340px] w-full">
                <div className="absolute left-0 top-0 h-[75%] w-[75%] overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] shadow-[0_24px_55px_rgba(15,23,42,0.18)]">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(223,246,255,0.95)_0%,rgba(141,226,255,0.78)_30%,rgba(8,145,178,0.86)_62%,rgba(7,89,133,1)_100%)]" />
                  <div className="absolute left-0 top-[18%] h-[42%] w-[42%] -skew-x-6 bg-[linear-gradient(180deg,rgba(84,101,117,0.95)_0%,rgba(181,201,214,0.7)_48%,transparent_100%)] [clip-path:polygon(0_0,86%_0,58%_100%,0_100%)]" />
                  <div className="absolute left-[10%] top-[24%] h-[30%] w-[22%] rotate-[8deg] bg-[linear-gradient(180deg,rgba(74,85,104,0.75),rgba(238,242,247,0.08))] [clip-path:polygon(0_0,100%_8%,58%_100%,6%_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 h-[38%] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(9,31,48,0.1)_15%,rgba(9,91,121,0.1)_25%,rgba(255,255,255,0.14)_27%,rgba(255,255,255,0)_30%,rgba(9,91,121,0.85)_34%,rgba(6,78,59,0.8)_100%)]" />
                </div>

                <div className="absolute bottom-[5%] right-0 h-[60%] w-[50%] rotate-[12deg] overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem] border-4 sm:border-8 border-white bg-[linear-gradient(180deg,#d6efff_0%,#f7d6be_30%,#d98d5f_56%,#8a4b2d_100%)] shadow-[0_34px_70px_rgba(15,23,42,0.28)]">
                  <div className="absolute inset-x-0 top-[26%] h-[24%] bg-[linear-gradient(180deg,rgba(250,214,188,0)_0%,rgba(163,92,63,0.45)_100%)] [clip-path:polygon(0_72%,28%_18%,52%_50%,74%_10%,100%_42%,100%_100%,0_100%)]" />
                  <div className="absolute bottom-0 left-0 h-[34%] w-full bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(89,42,23,0.1)_20%,rgba(165,89,52,0.45)_34%,rgba(95,50,28,0.95)_100%)]" />
                </div>

                <div className="absolute bottom-2 left-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-1.5 text-[10px] sm:text-xs font-medium tracking-[0.24em] text-neutral-500 backdrop-blur">
                  STRATEGY TO DELIVERY
                </div>
              </div>

            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-10 border-t border-neutral-200/80 px-6 py-10 sm:px-8 md:px-12 lg:grid-cols-4 lg:px-16">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-950">
                  {stat.value}
                </div>
                <div className="mt-2 text-[10px] sm:text-sm uppercase tracking-wider text-neutral-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
