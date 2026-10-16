"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/sections/footer";
import { motion } from "framer-motion";
import {
  FiChevronDown,
  FiShare2,
  FiExternalLink,
  FiUser,
  FiCalendar,
  FiCheck
} from "react-icons/fi";
import { Search, Target, Lightbulb, Layers, ShieldCheck } from "lucide-react";

const MAARecipeApp = () => {
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
                UX Case Study
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mt-6 tracking-tight">
                MAA Recipe App
              </h1>
            </div>

            {/* Main Mockup Mockup */}
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
                  src="/portfolio/maa-recipe/hero.png"
                  alt="MAA Recipe App Hero"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-8 pt-4">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">MAA - Recipe App Portfolio</h2>
              <p className="text-slate-500 leading-relaxed text-sm">
                This Figma file contains the final high-fidelity mockups for the MAA Recipe App landing page, fully prepared for development in Dev Mode. All layers are organized using a strict naming convention, and the design utilizes a robust system of design tokens for typography and color consistency. Developers can find detailed annotations for spacing, interaction states for all variants, and direct links to documentation within the components to ensure a high-fidelity translation from design to code.
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
                  <a href="#" className="text-sm text-blue-600 font-medium break-all flex items-center gap-1 hover:underline">
                    https://apdigitechsolutions.in/portfolio/maa-recipe-app-portfolio/ <FiExternalLink />
                  </a>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Client</p>
                  <p className="text-sm text-slate-700 font-medium">Aman Gupta</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Release Date</p>
                  <p className="text-sm text-slate-700 font-medium">12th December 2024</p>
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
            Modern home cooks often find the cooking process stressful rather than enjoyable when following digital recipes. Current platforms rely heavily on manual navigation, forcing users to constantly touch their screens with messy hands to play, rewind, or pause video tutorials. This physical friction disrupts the cooking flow, leads to potential device damage, and causes frustration, ultimately discouraging users from trying new dishes.
          </p>
          <p className="text-slate-800 font-bold">
            The Challenge: <span className="font-medium text-slate-600">How might we create a hands-free, multilingual cooking experience that allows users to focus on the food rather than the interface?</span>
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
            Our mission is to bridge the gap between digital instructions and physical cooking through voice-controlled navigation and personalized, multilingual content.
          </p>
        </div>
        <div className="space-y-4">
          {[
            "Seamless Hands-Free Interaction",
            "Multimodal Content Accessibility",
            "Community & Personalization",
            "Optimized User Retention"
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

      {/* 4. OUR PROCESS - REFINED & CONSISTENT */}
      <section className="py-24 px-6 md:px-10 lg:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-blue-500 sm:text-sm">
            Methodology
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl mb-6">
            Our Design Process
          </h2>
          <p className="max-w-2xl mx-auto text-base leading-relaxed text-neutral-600 sm:text-lg">
            We follow a structured design thinking approach to ensure every decision is backed by user research and creative problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              title: "Empathize",
              desc: "Deep research to understand user needs, pain points, and behaviors through interviews and observation.",
              icon: <Search className="w-5 h-5 text-blue-500" />,
              tasks: ["User Interviews", "Empathy Map", "Pain Points"]
            },
            {
              title: "Define",
              desc: "Synthesizing research to create clear problem statements and project goals for the design phase.",
              icon: <Target className="w-5 h-5 text-blue-500" />,
              tasks: ["Problem Statement", "Value Prop", "Audit"]
            },
            {
              title: "Ideate",
              desc: "Brainstorming and mapping out user flows, information architecture, and rapid sketching of solutions.",
              icon: <Lightbulb className="w-5 h-5 text-blue-500" />,
              tasks: ["User Flow", "IA", "Sketching"]
            },
            {
              title: "Prototype",
              desc: "Developing interactive high-fidelity mockups that simulate the final product experience and flow.",
              icon: <Layers className="w-5 h-5 text-blue-500" />,
              tasks: ["High-Fi Mockups", "Interactive", "Design System"]
            },
            {
              title: "Test",
              desc: "Validating the design with real users to identify improvements and ensure product-market fit.",
              icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
              tasks: ["Usability Study", "Affinity Map", "Research"]
            }
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
              {/* Icon Container */}
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-6 flex-grow">
                {step.desc}
              </p>

              {/* Supporting Labels */}
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
          We designed UCD Canvas to deeply understand the needs, expectations and experiences of users, ensuring that the project progressed with user-centered approach.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 text-left">
          {/* Column 1: Problems */}
          <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm h-full">
            <h3 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">3. Problems</h3>
            <ul className="space-y-3 text-sm text-slate-600 font-light leading-relaxed">
              <li>1. No User Interaction</li>
              <li>2. No option to upload own recipes.</li>
              <li>3. No creation of groups for sharing recipes.</li>
              <li>4. No Video mentors to guide.</li>
              <li>5. No differentiation of recipes based on category.</li>
              <li>6. Language issues.</li>
            </ul>
          </div>

          {/* Column 2: Motives & Fears */}
          <div className="space-y-4 flex flex-col h-full">
            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex-grow">
              <h3 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">4. Motives</h3>
              <ul className="space-y-3 text-sm text-slate-600 font-light leading-relaxed">
                <li>1. To make user friendly application.</li>
                <li>2. Multilingual recipes.</li>
                <li>3. Recipe history in profile.</li>
                <li>4. Personalized recommendations.</li>
              </ul>
            </div>
            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">5. Fears</h3>
              <ul className="space-y-3 text-sm text-slate-600 font-light leading-relaxed">
                <li>1. Promotion barriers</li>
                <li>2. User adaptability</li>
              </ul>
            </div>
          </div>

          {/* Column 3: Business, Users, UVP */}
          <div className="space-y-4 flex flex-col h-full">
            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">1. Business</h3>
              <p className="text-sm text-slate-800 italic font-medium leading-relaxed">
                "Cook With care, Make it here" — Food Recipe application.
              </p>
            </div>
            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex-grow">
              <h3 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">2. Users</h3>
              <ul className="space-y-2 text-sm text-slate-600 font-light leading-relaxed">
                <li>• Housewives</li>
                <li>• Working individuals</li>
                <li>• Cooking enthusiasts</li>
                <li>• Students</li>
                <li>• Health conscious</li>
              </ul>
              <p className="mt-4 text-[10px] font-bold text-slate-400 uppercase">Age: 15-60 years</p>
            </div>
            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">9. Unique Value Prop</h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                Your personal assistance to make dishes of your own choice with ease.
              </p>
            </div>
          </div>

          {/* Column 4: Advantanges & Alternatives */}
          <div className="space-y-4 flex flex-col h-full">
            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex-grow">
              <h3 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">8. Comp. Advantages</h3>
              <ul className="space-y-3 text-sm text-slate-600 font-light leading-relaxed">
                <li>1. Voice Assistance</li>
                <li>2. AI Customization</li>
                <li>3. Multi-language</li>
                <li>4. Group Sharing</li>
                <li>5. Ingredient Selling</li>
                <li>6. Audio/Video/Text</li>
              </ul>
            </div>
            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">7. Alternatives</h3>
              <ul className="space-y-2 text-sm text-slate-600 font-light leading-relaxed">
                <li>• Cook Pad, Better butter</li>
                <li>• Tarla Dalal, Tadka</li>
                <li>• Hebbar's Kitchen</li>
              </ul>
            </div>
          </div>

          {/* Column 5: Solutions */}
          <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm h-full">
            <h3 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">6. Solutions</h3>
            <ul className="space-y-2 text-[13px] text-slate-600 font-light leading-relaxed">
              <li>1. Offline sharing</li>
              <li>2. Regional customization</li>
              <li>3. Ingredient marketplace</li>
              <li>4. User reviews & ratings</li>
              <li>5. Recipe uploads</li>
              <li>6. Multimodal forms</li>
              <li>7. Categorized recipes</li>
              <li>8. Multi-language</li>
              <li>9. Ingredient manager</li>
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
          We designed open-ended questions to deeply understand the needs, expectations and experiences of users, ensuring that the project progressed with user-centered approach.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-800 mb-4">Ice breaking with user</h3>
              <ul className="space-y-2 text-sm text-slate-600 font-light">
                <li>1. What is your name?</li>
                <li>2. Age</li>
                <li>3. Gender</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-800 mb-4">Usage</h3>
              <ul className="space-y-3 text-sm text-slate-600 font-light">
                <li>1. What has been your experience using recipe applications?</li>
                <li>2. How often do you use application?</li>
                <li>3. What do you consider to be the possible advantages of using applications?</li>
                <li>4. Do you like video or images with textual instructions?</li>
              </ul>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-800 mb-4">Introduction</h3>
              <ul className="space-y-3 text-sm text-slate-600 font-light">
                <li>1. What is your Profession?</li>
                <li>2. Do you like cooking?</li>
                <li>3. Do you use recipe application in your mobile?</li>
                <li className="pl-4">If yes, Which Application you use?</li>
                <li className="pl-4">If no, Are you aware of recipe applications?</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-800 mb-4">Aspirations</h3>
              <ul className="space-y-3 text-sm text-slate-600 font-light">
                <li>1. What features would you expect from a recipe application?</li>
                <li>2. While choosing a recipe application which factors are most important to you?</li>
                <li>3. Which is your preferred way of seeing recipe?</li>
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
          We did an online survey using Google Forms to observe any patterns and similarities in what the potential users may want. A total of 51 users responded, which assisted us in framing the problem properly.
        </p>

        <div className="max-w-5xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { src: "/portfolio/maa-recipe/survey/survey-2.png", alt: "Gender Distribution" },
              { src: "/portfolio/maa-recipe/survey/survey-3.png", alt: "User Profession" },
              { src: "/portfolio/maa-recipe/survey/survey-4.png", alt: "Usage Frequency" },
              { src: "/portfolio/maa-recipe/survey/survey-1.png", alt: "App Usage History" },
            ].map((chart, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
              >
                <img
                  src={chart.src}
                  alt={chart.alt}
                  className="w-full h-auto rounded-xl"
                />
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { src: "/portfolio/maa-recipe/survey/survey-5.png", alt: "Problems faced while learning recipes" },
              { src: "/portfolio/maa-recipe/survey/survey-6.png", alt: "Important factors for choosing a recipe" },
              { src: "/portfolio/maa-recipe/survey/survey-7.png", alt: "Preferred way of seeing recipes" },
              { src: "/portfolio/maa-recipe/survey/survey-8.png", alt: "Desired features in recipe app" },
            ].map((chart, i) => (
              <motion.div
                key={i + 4}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
              >
                <img
                  src={chart.src}
                  alt={chart.alt}
                  className="w-full h-auto rounded-xl"
                />
              </motion.div>
            ))}
          </div>
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
          Using data from user research, We created user personas representing different user groups. These personas guide the project in user-centered design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Persona 1: Awantika Sharma */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-3xl border border-slate-100 p-2 shadow-sm overflow-hidden"
          >
            <img
              src="/portfolio/maa-recipe/persona/persona-1.png"
              alt="User Persona: Awantika Sharma"
              className="w-full h-auto rounded-2xl"
            />
          </motion.div>
          {/* Persona 2: Gaurav Rathee */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-3xl border border-slate-100 p-2 shadow-sm overflow-hidden"
          >
            <img
              src="/portfolio/maa-recipe/persona/persona-2.png"
              alt="User Persona: Gaurav Rathee"
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
          Affinity mapping was done to categorise all the features under different sections which will further help in organising the information architecture.
        </p>
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 border border-slate-100 shadow-sm overflow-hidden">
          <img
            src="/portfolio/maa-recipe/affinity-map.png"
            alt="Affinity Map"
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
          We created a flow using Whimsical to illustrate how the user will navigate through the application.
        </p>
        <div className="space-y-12 max-w-4xl mx-auto">
          {[
            { src: "/portfolio/maa-recipe/user-flow/user-flow-1.png", alt: "User Flow: Splash & Sign Up" },
            { src: "/portfolio/maa-recipe/user-flow/user-flow-2.png", alt: "User Flow: Ingredient Search" },
            { src: "/portfolio/maa-recipe/user-flow/user-flow-3.png", alt: "User Flow: Profile & Selling" },
          ].map((flow, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-4 md:p-8 border border-slate-100 shadow-sm overflow-hidden"
            >
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
          We sketched the low fidelity wireframes in invision studio.
        </p>
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 border border-slate-100 shadow-sm overflow-hidden">
          <img
            src="/portfolio/maa-recipe/wireframes.png"
            alt="Low-Fidelity Wireframes"
            className="w-full h-auto rounded-xl"
          />
        </div>

        <h2 className="text-3xl font-bold text-slate-900 mt-32 mb-4">High-Fidelity Wireframes</h2>
        <div className="w-12 h-1 bg-blue-600 mx-auto mb-12 rounded-full" />
        <p className="text-slate-500 mb-16 max-w-2xl mx-auto font-light">
          After making changes in low-fidelity wireframes we moved on to designing this high fidelity wireframes.
        </p>
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 border border-slate-100 shadow-sm overflow-hidden">
          <img
            src="/portfolio/maa-recipe/hi-fi-wireframes.png"
            alt="High-Fidelity Wireframes"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </motion.section>

      {/* 12. MOOD BOARD & STYLE GUIDE */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6 md:px-10 lg:px-20 max-w-7xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Mood Board</h2>
        <div className="w-12 h-1 bg-blue-600 mx-auto mb-12 rounded-full" />
        <p className="text-slate-500 mb-16 max-w-2xl mx-auto font-light">
          Mood board help in deciding the right color pallate for user interface.
        </p>
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 border border-slate-100 shadow-sm overflow-hidden">
          <img
            src="/portfolio/maa-recipe/moodboard.png"
            alt="Mood Board"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </motion.section>

      {/* 13. STYLE GUIDE - REFINED */}
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
            Defining the visual language and core components to ensure design consistency across the platform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-4 md:p-12 border border-slate-100 shadow-sm overflow-hidden">
          <img
            src="/portfolio/maa-recipe/style-guide-full.png"
            alt="MAA Recipe Design System - Style Guide"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </motion.section>

      {/* 14. PROTOTYPE */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-24 px-6 md:px-10 lg:px-20 max-w-7xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Prototype</h2>
        <div className="w-12 h-1 bg-blue-600 mx-auto mb-8 rounded-full" />
        <p className="text-slate-500 mb-20 max-w-2xl mx-auto font-light leading-relaxed">
          Prototypes are detailed representations of the interface, showcasing the final layout, typography, colors and components. They provide realistic view of the user experience, making it easier to validate visual decisions and prepare for development.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
          {[
            { src: "/portfolio/maa-recipe/prototype/prototype-5.png", alt: "Splash Screen" },
            { src: "/portfolio/maa-recipe/prototype/prototype-4.png", alt: "Home Screen" },
            { src: "/portfolio/maa-recipe/prototype/prototype-3.png", alt: "Category/List Screen" },
            { src: "/portfolio/maa-recipe/prototype/prototype-8.png", alt: "Recipe Detail" },
            { src: "/portfolio/maa-recipe/prototype/prototype-7.png", alt: "Assistant Chat" },
            { src: "/portfolio/maa-recipe/prototype/prototype-1.png", alt: "Groups Screen" },
            { src: "/portfolio/maa-recipe/prototype/prototype-6.png", alt: "Create Group" },
            { src: "/portfolio/maa-recipe/prototype/prototype-2.png", alt: "Settings Screen" },
          ].map((screen, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-blue-600/5 rounded-[3rem] blur-2xl group-hover:bg-blue-600/10 transition-colors" />
              <img
                src={screen.src}
                alt={screen.alt}
                className="relative w-full h-auto drop-shadow-2xl rounded-[2.5rem]"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <Footer />
    </main>
  );
};

export default MAARecipeApp;
