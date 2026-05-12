"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/sections/footer";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Meteors } from "@/components/ui/meteors";

import Link from "next/link";

export default function PortfolioPage() {
  const cards = portfolioData.map((card, index) => (
    <Link 
      key={card.src} 
      href={card.link || "#"} 
      className="block transition-transform hover:scale-[1.02] active:scale-[0.98]"
    >
      <Card card={card} index={index} />
    </Link>
  ));

  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 md:px-10 lg:px-16 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"></div>

        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-500 mb-6">
            Our Work
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8">
            Precision & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">Craftsmanship</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
            A showcase of our most impactful digital solutions, where technical excellence meets creative vision.
          </p>
        </div>
      </section>

      {/* Portfolio Carousel Section */}
      <section className="py-20 bg-slate-50/30">
        <div className="w-full">
          <Carousel items={cards} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <Meteors number={20} />
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/10 blur-3xl -ml-32 -mb-32"></div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 relative z-10">
            Have a project in mind?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto relative z-10">
            Let&apos;s collaborate to turn your ideas into a digital masterpiece.
          </p>
          <a
            href="/#contact"
            className="inline-flex h-14 items-center justify-center rounded-full bg-blue-600 px-10 text-base font-semibold text-white transition-all hover:bg-blue-700 hover:scale-105 shadow-lg shadow-blue-900/20 relative z-10"
          >
            Start Your Journey
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const DummyContent = ({ title, description, image }: { title: string, description: string, image: string }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-10">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {title}
        </span>{" "}
        {description}
      </p>
      <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
        />
      </div>
    </div>
  );
};

const portfolioData = [
  {
    category: "UX Case Study",
    title: "MAA Recipe App",
    src: "/portfolio/maa-recipe/hero.png",
    link: "/Portfolio/MAA-Recipe-App",
    content: (
      <DummyContent
        title="MAA Recipe App"
        description="Designing a seamless and intuitive recipe experience for modern home cooks, focusing on accessibility and minimal friction."
        image="/portfolio/maa-recipe/hero.png"
      />
    ),
  },
  {
    category: "FinTech",
    title: "Global Wealth Management Platform",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    link: "#",
    content: (
      <DummyContent
        title="Global Wealth Platform"
        description="A comprehensive wealth management system designed for institutional investors, featuring real-time data visualization, automated portfolio rebalancing, and complex risk assessment tools."
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=3540&auto=format&fit=crop"
      />
    ),
  },
  {
    category: "E-commerce",
    title: "Artisanal Marketplace Experience",
    src: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=3540&auto=format&fit=crop",
    link: "#",
    content: (
      <DummyContent
        title="Artisanal Marketplace"
        description="A high-end marketplace connecting global artisans with conscious consumers, built with a focus on immersive storytelling, high-performance image delivery, and a seamless multi-currency checkout."
        image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=3540&auto=format&fit=crop"
      />
    ),
  },
  {
    category: "AI & Data",
    title: "Predictive Supply Chain Analytics",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=3540&auto=format&fit=crop",
    link: "#",
    content: (
      <DummyContent
        title="Predictive Analytics Suite"
        description="An enterprise-grade analytics engine that leverages machine learning to forecast supply chain disruptions, optimize inventory levels, and reduce operational costs by up to 25%."
        image="https://images.unsplash.com/photo-1504868584819-f8e90526354a?q=80&w=3540&auto=format&fit=crop"
      />
    ),
  },
  {
    category: "Real Estate",
    title: "Luxury Smart Living Ecosystem",
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=3540&auto=format&fit=crop",
    link: "#",
    content: (
      <DummyContent
        title="Horizon Living App"
        description="A luxury property management app that provides residents with a unified interface for amenities, concierge services, smart home controls, and community engagement."
        image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=3540&auto=format&fit=crop"
      />
    ),
  },
  {
    category: "Healthcare",
    title: "Telemedicine Patient Portal",
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=3540&auto=format&fit=crop",
    link: "#",
    content: (
      <DummyContent
        title="HealthSync Portal"
        description="A secure, HIPAA-compliant patient portal that streamlines appointment scheduling, medical record access, and remote consultations with real-time video integration."
        image="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=3540&auto=format&fit=crop"
      />
    ),
  },
];
