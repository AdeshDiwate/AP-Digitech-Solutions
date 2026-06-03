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

const WeCareFinservApp = () => {
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
                FinTech Case Study
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mt-6 tracking-tight">
                WeCare Finserv
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
                  src="/portfolio/fintech/hero.png"
                  alt="WeCare Finserv Hero"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-8 pt-4">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">WeCare Finserv — Case Study</h2>
              <p className="text-slate-500 leading-relaxed text-sm">
                A comprehensive FinTech case study by Raveblue — designing and engineering a dual-platform ecosystem featuring a public-facing insurance & loan landing page paired with a powerful internal Admin CRM dashboard. The project covers end-to-end UX research, design system creation, and high-fidelity prototyping for both consumer and administrative experiences.
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
                  <a href="https://raveblue.in/portfolio/Fintech-App" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 font-medium break-all flex items-center gap-1 hover:underline">
                    https://raveblue.in/portfolio/Fintech-App <FiExternalLink />
                  </a>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Client</p>
                  <p className="text-sm text-slate-700 font-medium">WeCare Finserv</p>
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
            The existing operational ecosystem of We Care Finserv suffered from fragmented touchpoints, heavy reliance on manual paperwork for KYC collection, and poor visibility into employee and lead pipelines.
          </p>
          <div className="text-left space-y-4 mb-8">
            <p className="text-slate-600 leading-relaxed font-light">
              <span className="font-bold text-slate-800">For Customers:</span> Discovering insurance and loan options felt overwhelming due to standard, non-interactive financial forms.
            </p>
            <p className="text-slate-600 leading-relaxed font-light">
              <span className="font-bold text-slate-800">For Admins & Relationship Managers:</span> Managing employee performance, manually processing physical customer documents, and monitoring active partner status was inefficient, slow, and prone to administrative bottlenecks.
            </p>
          </div>
          <p className="text-slate-800 font-bold">
            The Challenge: <span className="font-medium text-slate-600">How might we create a seamless, dual-platform ecosystem that simplifies insurance discovery for customers while empowering admins with real-time operational visibility?</span>
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
          <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">Objectives & Goals</h2>
          <p className="text-lg text-slate-500 leading-relaxed font-light">
            Our mission was to bridge the gap between fragmented financial operations and a unified, transparent digital experience — for both the end consumer and the internal administrative team.
          </p>
        </div>
        <div className="space-y-4">
          {[
            "Clear Corporate Statistics & Quick-Inquiry Touchpoints",
            "All-in-One Admin CRM Dashboard",
            "Secure Digital Document Verification",
            "Real-Time Executive Analytics & Metrics",
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
              desc: "Conducted qualitative and quantitative user research via interviews and surveys targeting retail investors and back-office financial workers.",
              icon: <Search className="w-5 h-5 text-blue-500" />,
              tasks: ["User Interviews", "Surveys", "Pain Points"],
            },
            {
              title: "Define",
              desc: "Built personas, affinity maps, and framed core system criteria using the User-Centered Design Canvas.",
              icon: <Target className="w-5 h-5 text-blue-500" />,
              tasks: ["Personas", "Affinity Map", "UCD Canvas"],
            },
            {
              title: "Ideate",
              desc: "Created user flows and information architectures mapped to both consumer front-ends and administrative back-ends.",
              icon: <Lightbulb className="w-5 h-5 text-blue-500" />,
              tasks: ["User Flow", "IA", "Sketching"],
            },
            {
              title: "Prototype",
              desc: "Constructed low-fidelity structural blueprints moving gradually to polished, interactive high-fidelity user interfaces.",
              icon: <Layers className="w-5 h-5 text-blue-500" />,
              tasks: ["Lo-Fi Wireframes", "Hi-Fi Mockups", "Design System"],
            },
            {
              title: "Test",
              desc: "Implemented feedback loops based on operational walk-throughs to optimize administrative speeds.",
              icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
              tasks: ["Usability Study", "Feedback Loops", "Optimization"],
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
          We designed the UCD Canvas to deeply understand the needs, expectations and experiences of all user types — from internal admins to retail consumers — ensuring every design decision was user-centered.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 text-left">
          {/* Column 1: Problems */}
          <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm h-full">
            <h3 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">3. Problems</h3>
            <ul className="space-y-3 text-sm text-slate-600 font-light leading-relaxed">
              <li>1. Relying on scattered emails or messaging apps to gather critical compliance documents like Aadhar and PAN cards.</li>
              <li>2. No single source of truth for tracking active leads, employee conversions, or branch metrics.</li>
              <li>3. Customers face complex financial jargon and intimidating onboarding forms instead of smooth, trust-building entry points.</li>
            </ul>
          </div>

          {/* Column 2: Motives & Fears */}
          <div className="space-y-4 flex flex-col h-full">
            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex-grow">
              <h3 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">4. Motives</h3>
              <ul className="space-y-3 text-sm text-slate-600 font-light leading-relaxed">
                <li>1. Hit monthly performance metrics & reduce administrative busywork.</li>
                <li>2. Manage daily data smoothly without spreadsheet fatigue.</li>
                <li>3. Dependable financial safety nets without complex, confusing paperwork.</li>
              </ul>
            </div>
            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">5. Fears</h3>
              <ul className="space-y-3 text-sm text-slate-600 font-light leading-relaxed">
                <li>1. Data breaches during document collection or compliance errors.</li>
                <li>2. Hidden insurance clauses, leaking sensitive KYC data online, or rigid contracts.</li>
              </ul>
            </div>
          </div>

          {/* Column 3: Business, Users, UVP */}
          <div className="space-y-4 flex flex-col h-full">
            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">1. Business</h3>
              <p className="text-sm text-slate-800 italic font-medium leading-relaxed">
                Gain macro-level performance transparency across all active leads and employees from a centralized command console.
              </p>
            </div>
            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex-grow">
              <h3 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">2. Users</h3>
              <ul className="space-y-2 text-sm text-slate-600 font-light leading-relaxed">
                <li>• Internal Super Admins</li>
                <li>• Relationship Managers & Field Employees</li>
                <li>• Retail Consumers / Customers</li>
              </ul>
            </div>
            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">9. Unique Value Prop</h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                Effortlessly turn web-based product inquiries into approved, compliance-verified financial accounts through a beautifully transparent, lightning-fast administrative command ecosystem.
              </p>
            </div>
          </div>

          {/* Column 4: Advantages & Alternatives */}
          <div className="space-y-4 flex flex-col h-full">
            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex-grow">
              <h3 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">8. Competitive Advantages</h3>
              <ul className="space-y-3 text-sm text-slate-600 font-light leading-relaxed">
                <li>1. Unified design system for internal employee workflow & external customer acquisition.</li>
                <li>2. Tailored layout shortcuts matching actual backend financial workflows.</li>
              </ul>
            </div>
            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">7. Alternatives</h3>
              <ul className="space-y-2 text-sm text-slate-600 font-light leading-relaxed">
                <li>• Excel / Google Sheets pipelines</li>
                <li>• Phone calls / WhatsApp for paperwork</li>
                <li>• Generic off-the-shelf CRMs</li>
              </ul>
            </div>
          </div>

          {/* Column 5: Solutions */}
          <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm h-full">
            <h3 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">6. Solutions</h3>
            <ul className="space-y-2 text-[13px] text-slate-600 font-light leading-relaxed">
              <li>1. Clean, metric-driven public landing page</li>
              <li>2. Powerful secure internal admin panel</li>
              <li>3. Step-by-step document upload tabs</li>
              <li>4. Dedicated fields for front/back IDs</li>
              <li>5. Modular data cards & status pills</li>
              <li>6. Live performance wheels</li>
              <li>7. Lead Pipeline & Approval charts</li>
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
          We designed targeted, open-ended questions to deeply understand the workflows, frustrations, and expectations of both internal admins and retail consumers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-800 mb-4">Admin & RM Workflow</h3>
              <ul className="space-y-3 text-sm text-slate-600 font-light">
                <li>1. Can you walk me through your typical daily workflow from receiving a fresh lead to when a loan or insurance policy is officially issued?</li>
                <li>2. What are the biggest challenges or bottlenecks you face when collecting KYC documents (like Aadhar or PAN cards) from a new client?</li>
                <li>3. How do you currently track your active leads? How often do you feel information gets dropped or delayed?</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-800 mb-4">Consumer Trust & Security</h3>
              <ul className="space-y-3 text-sm text-slate-600 font-light">
                <li>1. What are your biggest pain points when sharing personal information or uploading identity documents on a financial website?</li>
                <li>2. Talk about a time you abandoned a financial application or form. What specific element made you stop?</li>
                <li>3. How do you prefer to hear back from a company after submitting an initial request — phone call or text update?</li>
              </ul>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-800 mb-4">Dashboard & Tools</h3>
              <ul className="space-y-3 text-sm text-slate-600 font-light">
                <li>1. When updating a product detail or checking your monthly conversion performance, what parts of your current software tool frustrate you the most?</li>
                <li>2. If you could instantly automate or eliminate one repetitive task in your dashboard workspace, what would it be?</li>
                <li>3. When looking for a financial service (like Health & Wellness Plans), what is the first thing you look for to decide if a company is trustworthy?</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-800 mb-4">Key Insights</h3>
              <ul className="space-y-3 text-sm text-slate-600 font-light">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" /> Fragmented Document Gathering Kills Velocity</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" /> The Danger of &quot;Form Fatigue&quot;</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" /> Social Proof Accelerates Trust Instantly</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" /> Dynamic Product Control Prevents Outdated Content</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" /> Administrative Operators Crave &quot;At-a-Glance&quot; Urgency</li>
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
          We conducted an online survey to observe patterns and similarities in what potential users — both internal administrators and retail consumers — expect from a modern FinTech platform.
        </p>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
          >
            <img
              src="/portfolio/fintech/survey/survey-1.png"
              alt="User Survey Results"
              className="w-full h-auto rounded-xl"
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
          Using data from user research, we created personas representing two key user groups — the internal Relationship Manager and the external Retail Consumer — to guide every design decision.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Persona 1: Shivshankar Kodachi */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-3xl border border-slate-100 p-2 shadow-sm overflow-hidden"
          >
            <img
              src="/portfolio/fintech/persona/persona-1.png"
              alt="User Persona: Shivshankar Kodachi — Relationship Manager"
              className="w-full h-auto rounded-2xl"
            />
          </motion.div>
          {/* Persona 2: Ananya Sharma */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-3xl border border-slate-100 p-2 shadow-sm overflow-hidden"
          >
            <img
              src="/portfolio/fintech/persona/persona-2.png"
              alt="User Persona: Ananya Sharma — Retail Consumer"
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
          Affinity mapping was done to categorise all research findings and feature requests under different themes — from trust-building and document handling to navigation patterns and analytics — which further helped in organising the information architecture.
        </p>
        <div className="max-w-4xl mx-auto">
          <img
            src="/portfolio/fintech/affinity-map.png"
            alt="Affinity Map"
            className="w-full h-auto"
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
          We created detailed user flows to illustrate how different users — customers, relationship managers, and super admins — navigate through the platform.
        </p>
        <div className="space-y-12 max-w-4xl mx-auto">
          {[
            { src: "/portfolio/fintech/user-flow/user-flow-1.png", alt: "User Flow: External Customer Lead Funnel" },
            { src: "/portfolio/fintech/user-flow/user-flow-2.png", alt: "User Flow: Lead Verification & Digital KYC Processing" },
            { src: "/portfolio/fintech/user-flow/user-flow-3.png", alt: "User Flow: Internal Admin — Live Product Catalog Management" },
          ].map((flow, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-4 md:p-8 border border-slate-100 shadow-sm overflow-hidden"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500 mb-4">{flow.alt.replace("User Flow: ", "")}</p>
              <img
                src={flow.src}
                alt={flow.alt}
                className="w-full h-auto"
              />
            </motion.div>
          ))}
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
          We sketched low-fidelity wireframes covering all key screens — from the Admin Dashboard and Employee Management to the public-facing Landing Page and Lead Edit Modal.
        </p>
        <div className="space-y-12 max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm overflow-hidden">
            <img
              src="/portfolio/fintech/wireframes/wireframe-1.png"
              alt="Low-Fidelity Wireframe — Product List"
              className="w-full h-auto rounded-xl"
            />
          </div>
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm overflow-hidden">
            <img
              src="/portfolio/fintech/wireframes/wireframe-2.png"
              alt="Low-Fidelity Wireframes — Employees, Landing Page, Dashboard, Leads"
              className="w-full h-auto rounded-xl"
            />
          </div>
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
            The We Care Finserv Design System — defining the visual language, color palette, typography, iconography, UI components, and layout principles to ensure consistency across the platform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-4 md:p-12 border border-slate-100 shadow-sm overflow-hidden">
          <img
            src="/portfolio/fintech/style-guide.png"
            alt="WeCare Finserv Design System — Style Guide"
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
          High-fidelity prototypes showcasing the final Admin CRM Dashboard and the public-facing landing page — both on desktop and mobile. These provide a realistic view of the user experience, making it easier to validate visual decisions and prepare for development.
        </p>

        {/* Desktop Prototype */}
        <div className="max-w-6xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500 mb-8">Desktop Experience</p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-4 md:p-8 border border-slate-100 shadow-sm overflow-hidden"
          >
            <img
              src="/portfolio/fintech/prototype/prototype-desktop.png"
              alt="Desktop Prototype — Dashboard, Employees, Landing Page, Product List, Leads"
              className="w-full h-auto rounded-2xl"
            />
          </motion.div>
        </div>

        {/* Mobile Prototype */}
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500 mb-8">Mobile Experience</p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-4 md:p-8 border border-slate-100 shadow-sm overflow-hidden"
          >
            <img
              src="/portfolio/fintech/prototype/prototype-mobile.png"
              alt="Mobile Prototype — Savings Plan, Customer Stories, Insurance Menu"
              className="w-full h-auto rounded-2xl"
            />
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
};

export default WeCareFinservApp;
