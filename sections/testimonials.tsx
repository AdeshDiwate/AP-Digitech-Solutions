"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const testimonials = [
  {
    name: "Gururaja Kulkarni",
    role: "Client",
    quote:
      "Raveblue is far more than a service provider; they are a growth powerhouse. They took our vision and engineered a custom software solution that didn't just function it dominated our market. Their speed and precision are unmatched.",
    accent: "from-slate-100 to-white",
    initials: "GK",
    featured: false,
  },
  {
    name: "Mahadev Kadam",
    role: "Client",
    quote:
      "The team at Raveblue doesn't play it safe, and that's exactly what we needed. They helped bring our brand online, blending stellar tech with modern design to deliver real-world ROI we never thought possible.",
    accent: "from-blue-50 via-white to-slate-50",
    initials: "MK",
    featured: true,
  },
  {
    name: "Alex Carter",
    role: "Client",
    quote:
      "Raveblue brought clarity, structure, and technical excellence to a project that initially felt overwhelming. Their team delivered a scalable solution tailored to our needs, helping us streamline operations, improve efficiency, and focus on growth with confidence.",
    accent: "from-slate-100 to-white",
    initials: "AC",
    featured: false,
  },
];

const stars = Array.from({ length: 5 });

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 1024;
      const cards = gsap.utils.toArray<HTMLElement>(".testimonial-card");
      const featuredCard = document.querySelector<HTMLElement>(
        ".testimonial-card--featured"
      );
      const sideCards = cards.filter((card) => card !== featuredCard);

      gsap.from(".testimonials-copy", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 28,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.12,
      });

      if (!featuredCard || sideCards.length === 0) {
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: isMobile ? "top 85%" : "top 72%",
          toggleActions: "play none none none",
        },
      });

      if (isMobile) {
        tl.from(cards, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
        });
      } else {
        tl.from(featuredCard, {
          opacity: 0,
          x: 100,
          scale: 0.95,
          duration: 0.9,
          ease: "power3.out",
        })
          .from(
            sideCards[0],
            {
              opacity: 0,
              x: -100,
              duration: 0.75,
              ease: "power3.out",
            },
            "-=0.4"
          )
          .from(
            sideCards[1],
            {
              opacity: 0,
              x: 100,
              duration: 0.75,
              ease: "power3.out",
            },
            "<"
          );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="overflow-hidden bg-white px-6 py-16 text-slate-950 md:px-10 md:py-18 lg:px-16"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.7fr)] lg:items-start">
          <div className="testimonials-copy space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-500">
              Testimonials
            </p>
            <div className="max-w-3xl">
              <h2 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                Trusted by Teams
                <span className="mt-1 block text-sky-400">Across the Globe</span>
              </h2>
            </div>
          </div>

          <p className="testimonials-copy max-w-sm pt-1 text-base leading-7 text-slate-500 md:text-lg">
            Stories from teams who improved delivery speed, reduced busywork,
            and gained a more dependable digital foundation.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.6fr_0.8fr]">
          {testimonials.map((testimonial, idx) => (
            <article
              key={`${testimonial.name}-${idx}`}
              className={[
                "testimonial-card relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-100 bg-gradient-to-br px-7 py-7 shadow-[0_20px_50px_rgba(15,23,42,0.08)] will-change-transform",
                testimonial.accent,
                testimonial.featured
                  ? "testimonial-card--featured lg:min-h-[320px] lg:px-10 lg:py-8"
                  : "opacity-90 lg:mt-4",
              ].join(" ")}
            >
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent opacity-80" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent opacity-80" />

              <div className="relative z-10">
                <div className="mb-6 flex gap-1.5 text-xl text-amber-400">
                  {stars.map((_, index) => (
                    <span key={index}>&#9733;</span>
                  ))}
                </div>

                <p
                  className={
                    testimonial.featured
                      ? "max-w-2xl text-xl font-medium leading-9 tracking-tight text-slate-900 md:text-2xl"
                      : "text-lg font-medium leading-8 tracking-tight text-slate-900 md:text-xl"
                  }
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              <div className="relative z-10 mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-200 via-sky-100 to-white text-sm font-semibold text-sky-700 shadow-inner">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-base font-medium text-slate-900 md:text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-500 md:text-base">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
