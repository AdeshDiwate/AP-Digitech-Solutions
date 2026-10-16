"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/sections/footer";
import { motion } from "framer-motion";
import {
  FiChevronDown,
  FiShare2,
  FiExternalLink,
} from "react-icons/fi";
import { Search, Target, Lightbulb, Layers, ShieldCheck } from "lucide-react";

const ShreeCoconutApp = () => {
  return (
    <main className="bg-white text-slate-800 min-h-screen font-sans">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-20 px-6 md:px-10 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left/Center Column */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] bg-slate-100 px-3 py-1 rounded-full">
                E-Commerce Case Study
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mt-6 tracking-tight">
                Shree Coconut App
              </h1>
            </div>

            {/* Main Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/3] w-full bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-xl"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-[calc(100%+20px)]"
              >
                <img
                  src="/portfolio/shree-coconut/hero.jpg"
                  alt="Shree Coconut App Hero Mockup"
                  className="w-full h-full object-cover object-right"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-8 pt-4">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Shree Coconut — Case Study</h2>
              <p className="text-slate-500 leading-relaxed text-sm">
                Shree Coconut is a targeted Android application built to streamline a hyper-local supply chain. By offering an intuitive, minimal, and highly visual ordering experience, the app allows users to purchase fresh coconuts, tender coconut water, and coconut-based products — directly connecting local vendors with everyday consumers.
              </p>
            </div>

            <div className="h-px bg-slate-100 w-full" />

            <div className="space-y-6">
              <button className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">
                <FiShare2 /> Share
              </button>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Project URL</p>
                  <a href="https://apdigitechsolutions.in/Portfolio/Shree-Coconut-App" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 font-medium break-all flex items-center gap-1 hover:underline">
                    https://apdigitechsolutions.in/Portfolio/Shree-Coconut-App <FiExternalLink />
                  </a>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Client</p>
                  <p className="text-sm text-slate-700 font-medium">Shree Coconut</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Platform</p>
                  <p className="text-sm text-slate-700 font-medium">Android Application</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Release Date</p>
                  <p className="text-sm text-slate-700 font-medium">2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM STATEMENT */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 px-6 md:px-10 lg:px-20 max-w-5xl mx-auto"
      >
        <div className="border-4 border-sky-300 p-12 text-center rounded-xl bg-white shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Problem Statement</h2>
          <p className="text-slate-600 leading-relaxed mb-8 font-light text-lg">
            The traditional method of buying fresh coconuts in India relies entirely on street vendors, local mandis, and informal distribution networks — creating supply chain inefficiencies, inconsistent product quality, and no reliable ordering mechanism for consumers. Existing digital grocery platforms treat coconuts as commodities within massive catalogs, making hyper-local vendor discovery nearly impossible.
          </p>
          <div className="text-left space-y-4 mb-8">
            <p className="text-slate-600 leading-relaxed font-light">
              <span className="font-bold text-slate-800">For Consumers:</span> There is no dedicated, trustworthy digital platform to browse, compare, and order fresh coconut products from local vendors with guaranteed freshness and on-time delivery.
            </p>
            <p className="text-slate-600 leading-relaxed font-light">
              <span className="font-bold text-slate-800">For Vendors:</span> Local coconut sellers have no digital storefront to reach a wider audience, manage orders efficiently, or build a loyal customer base beyond walk-in traffic.
            </p>
          </div>
          <p className="text-slate-800 font-bold">
            The Challenge: <span className="font-medium text-slate-600">How might we design a dedicated, intuitive, and visual-first mobile ordering experience that empowers local coconut vendors while giving consumers a seamless, trustworthy way to order fresh coconut products?</span>
          </p>
        </div>
      </motion.section>

      {/* 3. OBJECTIVES & GOALS */}
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 px-6 md:px-10 lg:px-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        <div>
          <div className="w-16 h-1 bg-blue-600 mb-8 rounded-full" />
          <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">Objectives &amp; Goals</h2>
          <p className="text-lg text-slate-500 leading-relaxed font-light">
            Our mission was to bridge the gap between hyper-local coconut vendors and everyday consumers through a minimal, visual-first mobile experience — making fresh product discovery and ordering effortless, trustworthy, and fast.
          </p>
        </div>
        <div className="space-y-4">
          {[
            "Intuitive Hyper-local Ordering Experience",
            "Visual-First Product Browsing",
            "Streamlined Vendor–Consumer Connection",
            "Minimal Friction Checkout Flow",
          ].map((goal, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 10 }}
              className="group border border-slate-100 rounded-full px-8 py-4 flex justify-between items-center hover:bg-slate-50 transition-all cursor-pointer shadow-sm hover:shadow-md"
            >
              <span className="font-bold text-slate-800">{goal}</span>
              <FiChevronDown className="text-slate-400 group-hover:text-blue-600 transition-colors" />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 4. OUR PROCESS */}
      <section className="py-24 px-6 md:px-10 lg:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-blue-500 sm:text-sm">
            Methodology
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl mb-6">
            Our Design Process
          </h2>
          <p className="max-w-2xl mx-auto text-base leading-relaxed text-neutral-600 sm:text-lg">
            A structured User-Centered Design (UCD) methodology following the five stages of the Design Thinking framework.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              title: "Empathize",
              desc: "Conducted in-depth qualitative research through interviews with local vendors, consumers, and juice stall owners to uncover pain points in the coconut supply chain.",
              icon: <Search className="w-5 h-5 text-blue-500" />,
              tasks: ["User Interviews", "Observation", "Pain Points"],
            },
            {
              title: "Define",
              desc: "Synthesized research into clear personas, affinity maps, and a UCD canvas to frame the core problem and define project goals.",
              icon: <Target className="w-5 h-5 text-blue-500" />,
              tasks: ["Personas", "Affinity Map", "UCD Canvas"],
            },
            {
              title: "Ideate",
              desc: "Explored user flows, information architecture, and sketch concepts — mapping out both consumer ordering and vendor management experiences.",
              icon: <Lightbulb className="w-5 h-5 text-blue-500" />,
              tasks: ["User Flow", "IA", "Sketching"],
            },
            {
              title: "Prototype",
              desc: "Built low-fidelity wireframes progressing to a polished, high-fidelity Android prototype with a cohesive green-forward design system.",
              icon: <Layers className="w-5 h-5 text-blue-500" />,
              tasks: ["Lo-Fi Wireframes", "Hi-Fi Mockups", "Design System"],
            },
            {
              title: "Test",
              desc: "Validated design decisions through usability walkthroughs with target users, iterating on navigation, product discovery, and checkout flows.",
              icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
              tasks: ["Usability Study", "Feedback Loops", "Iteration"],
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-neutral-100 rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-6 flex-grow">
                {step.desc}
              </p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                {step.tasks.map((task, j) => (
                  <span key={j} className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {task}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. USER CENTERED DESIGN CANVAS */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6 md:px-10 lg:px-20 max-w-7xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-4">User Centered Design Canvas</h2>
        <div className="w-12 h-1 bg-blue-600 mx-auto mb-12 rounded-full" />
        <p className="text-slate-500 mb-12 max-w-2xl mx-auto font-light">
          We designed the UCD Canvas to deeply understand the needs, expectations, and experiences of all user types — from local vendors to everyday consumers — ensuring every design decision was grounded in real user insights.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 text-left">
          {/* Column 1: Problems */}
          <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm h-full">
            <h3 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">3. Problems</h3>
            <ul className="space-y-3 text-sm text-slate-600 font-light leading-relaxed">
              <li>1. No dedicated digital platform for fresh coconut ordering.</li>
              <li>2. Inconsistent product quality and pricing at street vendors.</li>
              <li>3. Vendors lack digital tools to manage orders and reach new customers.</li>
              <li>4. No real-time delivery tracking for perishable orders.</li>
              <li>5. No product variety or filter options in existing grocery apps.</li>
            </ul>
          </div>

          {/* Column 2: Motives & Fears */}
          <div className="space-y-4 flex flex-col h-full">
            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex-grow">
              <h3 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">4. Motives</h3>
              <ul className="space-y-3 text-sm text-slate-600 font-light leading-relaxed">
                <li>1. Convenient doorstep delivery of fresh products.</li>
                <li>2. Reliable freshness guarantee for every order.</li>
                <li>3. Digital storefront for vendors to grow their business.</li>
                <li>4. Transparent, fair pricing with no middlemen.</li>
              </ul>
            </div>
            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">5. Fears</h3>
              <ul className="space-y-3 text-sm text-slate-600 font-light leading-relaxed">
                <li>1. Receiving stale or poor quality products.</li>
                <li>2. Payment failures or insecure transactions.</li>
                <li>3. Late or missed deliveries.</li>
              </ul>
            </div>
          </div>

          {/* Column 3: Business, Users, UVP */}
          <div className="space-y-4 flex flex-col h-full">
            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">1. Business</h3>
              <p className="text-sm text-slate-800 italic font-medium leading-relaxed">
                &quot;Fresh Coconuts, Delivered to Your Door&quot; — a hyper-local ordering ecosystem connecting coconut vendors with consumers.
              </p>
            </div>
            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex-grow">
              <h3 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">2. Users</h3>
              <ul className="space-y-2 text-sm text-slate-600 font-light leading-relaxed">
                <li>• Home consumers</li>
                <li>• Restaurants &amp; cafes</li>
                <li>• Juice stall owners</li>
                <li>• Health-conscious individuals</li>
                <li>• Local coconut vendors</li>
              </ul>
            </div>
            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">9. Unique Value Prop</h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                Your daily dose of freshness — order farm-fresh coconuts from trusted local vendors, delivered to your door in minutes.
              </p>
            </div>
          </div>

          {/* Column 4: Advantages & Alternatives */}
          <div className="space-y-4 flex flex-col h-full">
            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex-grow">
              <h3 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">8. Comp. Advantages</h3>
              <ul className="space-y-3 text-sm text-slate-600 font-light leading-relaxed">
                <li>1. Hyper-local vendor focus</li>
                <li>2. Visual product catalog</li>
                <li>3. Freshness guarantee</li>
                <li>4. Real-time order tracking</li>
                <li>5. Direct vendor-consumer connection</li>
              </ul>
            </div>
            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">7. Alternatives</h3>
              <ul className="space-y-2 text-sm text-slate-600 font-light leading-relaxed">
                <li>• Street vendors &amp; local mandis</li>
                <li>• BigBasket, Blinkit</li>
                <li>• Generic grocery apps</li>
              </ul>
            </div>
          </div>

          {/* Column 5: Solutions */}
          <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm h-full">
            <h3 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">6. Solutions</h3>
            <ul className="space-y-2 text-[13px] text-slate-600 font-light leading-relaxed">
              <li>1. Dedicated visual product catalog</li>
              <li>2. One-tap ordering flow</li>
              <li>3. Real-time delivery tracking</li>
              <li>4. Vendor ratings &amp; reviews</li>
              <li>5. Multiple payment options</li>
              <li>6. Freshness badge system</li>
              <li>7. Order history &amp; reorder</li>
              <li>8. Vendor dashboard &amp; analytics</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* 6. USER INTERVIEWS */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 px-6 md:px-10 lg:px-20 max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">User Interviews</h2>
        <div className="w-12 h-1 bg-blue-600 mx-auto mb-12 rounded-full" />
        <p className="text-slate-500 mb-16 text-center max-w-2xl mx-auto font-light">
          We designed open-ended, empathy-driven questions to deeply understand the daily habits, frustrations, and expectations of both consumers and local vendors within the coconut supply chain.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-800 mb-4">Consumer Habits</h3>
              <ul className="space-y-3 text-sm text-slate-600 font-light">
                <li>1. How often do you buy fresh coconuts or coconut water in a week?</li>
                <li>2. Where do you currently purchase coconut products — street vendors, supermarkets, or online?</li>
                <li>3. What is your biggest frustration when buying coconuts from a street vendor?</li>
                <li>4. Have you ever abandoned a purchase due to quality concerns? Walk us through that experience.</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-800 mb-4">Trust &amp; Quality</h3>
              <ul className="space-y-3 text-sm text-slate-600 font-light">
                <li>1. What visual or physical cues do you look for to judge a coconut&apos;s freshness?</li>
                <li>2. Would you trust an app-based vendor rating system for such a perishable product?</li>
                <li>3. What would make you choose a digital ordering platform over your regular street vendor?</li>
              </ul>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-800 mb-4">Vendor Workflow</h3>
              <ul className="space-y-3 text-sm text-slate-600 font-light">
                <li>1. How do you currently manage your daily orders and inventory?</li>
                <li>2. What are the biggest challenges you face in reaching new customers beyond your regular footfall?</li>
                <li>3. If you could automate one part of your daily operations, what would it be?</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-800 mb-4">Key Insights</h3>
              <ul className="space-y-3 text-sm text-slate-600 font-light">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" /> Freshness Visibility Drives Purchase Confidence</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" /> Vendors Struggle with Order Volume Management</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" /> One-Tap Reordering is a High-Demand Feature</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" /> Delivery Reliability is the Top Trust Factor</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" /> Visual Product Imagery Reduces Decision Friction</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 7. SURVEY RESULTS */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6 md:px-10 lg:px-20 max-w-7xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Survey Results</h2>
        <div className="w-12 h-1 bg-blue-600 mx-auto mb-12 rounded-full" />
        <p className="text-slate-500 mb-16 max-w-2xl mx-auto font-light">
          We conducted an online survey to understand consumer preferences, ordering habits, and feature expectations for a hyper-local coconut ordering application.
        </p>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-4 md:p-8 rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
          >
            <img
              src="/portfolio/shree-coconut/survey/user-survey.jpg"
              alt="User Survey Results for Shree Coconut App"
              className="w-full h-auto rounded-xl md:rounded-2xl"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* 8. USER PERSONA */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 px-6 md:px-10 lg:px-20 max-w-7xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">User Persona</h2>
        <div className="w-12 h-1 bg-blue-600 mx-auto mb-12 rounded-full" />
        <p className="text-slate-500 mb-16 text-center max-w-2xl mx-auto font-light">
          Using data from user research, we created personas representing two key user groups — the everyday consumer and the local vendor — to guide every design decision throughout the project.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Persona 1: Priya Sharma */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-3xl border border-slate-100 p-2 shadow-sm overflow-hidden"
          >
            <img
              src="/portfolio/shree-coconut/persona/Persona-1.jpg"
              alt="User Persona: Priya Sharma — Graphic Designer, 26 y.o., Wakad, Pune"
              className="w-full h-auto rounded-2xl"
            />
          </motion.div>
          {/* Persona 2: Akash Kadam */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-3xl border border-slate-100 p-2 shadow-sm overflow-hidden"
          >
            <img
              src="/portfolio/shree-coconut/persona/Persona-2.jpg"
              alt="User Persona: Akash Kadam — Engineering Student, 21 y.o., Katraj"
              className="w-full h-auto rounded-2xl"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* 9. AFFINITY MAP */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6 md:px-10 lg:px-20 max-w-7xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Affinity Map</h2>
        <div className="w-12 h-1 bg-blue-600 mx-auto mb-12 rounded-full" />
        <p className="text-slate-500 mb-16 max-w-2xl mx-auto font-light">
          Affinity mapping was used to categorise all research findings under key themes — from freshness perception and delivery trust to vendor management and product discovery — which informed the information architecture of the app.
        </p>
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 border border-slate-100 shadow-sm overflow-hidden">
          <img
            src="/portfolio/shree-coconut/affinity-map.jpg"
            alt="Affinity Map — Product Quality, Pricing & Costs, Delivery Logistics, App Experience"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </motion.section>

      {/* 10. USER FLOW */}
      <motion.section
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="py-20 px-6 md:px-10 lg:px-20 max-w-7xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-4">User Flow</h2>
        <div className="w-12 h-1 bg-blue-600 mx-auto mb-12 rounded-full" />
        <p className="text-slate-500 mb-16 max-w-2xl mx-auto font-light">
          We created detailed user flows to illustrate how different users — consumers and vendors — navigate through the application, from onboarding to order completion and delivery.
        </p>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-4 md:p-8 border border-slate-100 shadow-sm overflow-hidden"
          >
            <img
              src="/portfolio/shree-coconut/user-flow/userflow.jpg"
              alt="User Flow for Shree Coconut App"
              className="w-full h-auto rounded-xl"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* 11. WIREFRAMES */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 px-6 md:px-10 lg:px-20 max-w-7xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Low-Fidelity Wireframes</h2>
        <div className="w-12 h-1 bg-blue-600 mx-auto mb-12 rounded-full" />
        <p className="text-slate-500 mb-16 max-w-2xl mx-auto font-light">
          We sketched low-fidelity wireframes covering all key screens — from the Home screen and Product Listing to the Order Tracking flow and Vendor Dashboard — before moving into high-fidelity design.
        </p>
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 border border-slate-100 shadow-sm overflow-hidden">
          <img
            src="/portfolio/shree-coconut/wireframes/low-fidelity.jpg"
            alt="Low-Fidelity Wireframes for Shree Coconut App"
            className="w-full h-auto rounded-xl"
          />
        </div>

        <h2 className="text-3xl font-bold text-slate-900 mt-32 mb-4">High-Fidelity Wireframes</h2>
        <div className="w-12 h-1 bg-blue-600 mx-auto mb-12 rounded-full" />
        <p className="text-slate-500 mb-16 max-w-2xl mx-auto font-light">
          After validating the low-fidelity layouts, we refined and elevated the designs into polished, high-fidelity wireframes ready for prototyping.
        </p>
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 border border-slate-100 shadow-sm overflow-hidden">
          <img
            src="/portfolio/shree-coconut/wireframes/high-fidelity.jpg"
            alt="High-Fidelity Wireframes for Shree Coconut App"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </motion.section>

      {/* 12. STYLE GUIDE */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-24 px-6 md:px-10 lg:px-20 max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Style Guide</h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 mb-8 rounded-full" />
          <p className="max-w-2xl mx-auto text-base text-neutral-600">
            The Shree Coconut Design System — defining the visual language, color palette, typography, iconography, and UI components to ensure a consistent, fresh, and trustworthy brand experience across the app.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-4 md:p-12 border border-slate-100 shadow-sm overflow-hidden">
          <img
            src="/portfolio/shree-coconut/style-guide.jpg"
            alt="Style Guide for Shree Coconut App"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </motion.section>

      {/* 13. PROTOTYPE */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-24 px-6 md:px-10 lg:px-20 max-w-7xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Prototype</h2>
        <div className="w-12 h-1 bg-blue-600 mx-auto mb-8 rounded-full" />
        <p className="text-slate-500 mb-20 max-w-2xl mx-auto font-light leading-relaxed">
          High-fidelity mobile prototypes showcasing the final Android screens — from the splash and onboarding flow to product browsing, order tracking, and the vendor dashboard. These provide a realistic view of the end-to-end user experience.
        </p>

        <div className="max-w-5xl mx-auto px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-4 md:p-8 border border-slate-100 shadow-sm overflow-hidden"
          >
            <img
              src="/portfolio/shree-coconut/prototype/prototype.jpg"
              alt="High-Fidelity Mobile Prototypes for Shree Coconut App"
              className="w-full h-auto rounded-xl md:rounded-2xl"
            />
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
};

export default ShreeCoconutApp;
