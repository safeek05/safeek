'use client'

import { motion } from 'framer-motion'
import { site } from '../../data/site'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

const containerVariants = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 flex items-center bg-[#FAFAFA] overflow-hidden bg-grid-pattern"
      aria-labelledby="hero-heading"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl opacity-60 pointer-events-none animate-pulse-glow" aria-hidden="true" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-indigo-400/10 rounded-full blur-3xl opacity-50 pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="lg:col-span-7 space-y-6 sm:space-y-8"
        >
          {/* Status Badges */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5">
            <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold text-[#2563EB] bg-[#EFF6FF] px-3.5 py-1.5 rounded-full border border-blue-200/50 shadow-sm tracking-wide uppercase">
              <span className="w-2 h-2 bg-[#2563EB] rounded-full animate-ping" aria-hidden="true" />
              Open for Freelance
            </span>
          </motion.div>

          {/* Typography */}
          <div className="space-y-4">
            <motion.h1
              id="hero-heading"
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-[56px] font-black text-[#111827] leading-[1.12] tracking-tight"
            >
              Building Premium
              <br />
              Websites & Web Apps
              <br />
              <span className="text-gradient">Frontend & CS Student</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[#6B7280] text-base sm:text-lg leading-relaxed max-w-xl"
            >
              I build fast, production-grade interfaces for clients while pursuing double degrees in Computer Science and Data Science. Focused on pixel-perfect layouts, responsive design, and converting visitors into clients.
            </motion.p>
          </div>

          {/* Action CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3.5">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white text-sm font-semibold rounded-xl hover:bg-[#1D4ED8] transition-all hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]/40 focus-visible:ring-offset-2"
            >
              See My Work
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#111827] text-sm font-semibold rounded-xl border border-gray-200 hover:border-gray-400 hover:bg-gray-50/50 transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]/40 focus-visible:ring-offset-2"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Quick Metrics */}
          <motion.div
            variants={fadeUp}
            className="pt-6 sm:pt-8 border-t border-gray-200/60 grid grid-cols-3 gap-4 sm:gap-8 max-w-md"
          >
            {[
              { value: '4', label: 'Projects Built' },
              { value: '24hr', label: 'Response Time' },
              { value: '2', label: 'Degrees' },
            ].map(({ value, label }) => (
              <div key={label} className="space-y-0.5">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">{value}</div>
                <div className="text-[11px] sm:text-xs font-semibold text-[#6B7280] uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right - IDE Code terminal mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end w-full min-w-0"
        >
          <div className="w-full max-w-[480px] animate-float relative">
            {/* Visual accent glow behind terminal */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-2xl blur-lg opacity-10" aria-hidden="true" />
            
            {/* Terminal Window Container */}
            <div className="relative bg-[#0F172A] rounded-2xl shadow-2xl border border-slate-800 overflow-hidden font-mono text-left">
              {/* Window Header */}
              <div className="bg-[#1E293B] px-4 py-3 flex items-center justify-between border-b border-slate-800/80">
                <div className="flex gap-2" aria-hidden="true">
                  <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
                  <span className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                  <span className="w-3 h-3 rounded-full bg-[#10B981]" />
                </div>
                <span className="text-[11px] text-slate-400 font-semibold select-none flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  DeveloperProfile.tsx
                </span>
                <span className="w-12" />
              </div>

              {/* IDE Tabs */}
              <div className="flex bg-[#131E35] text-xs text-slate-400 border-b border-slate-800/60 select-none">
                <div className="bg-[#0F172A] text-slate-200 border-r border-slate-800/80 px-4 py-2.5 flex items-center gap-2 font-medium">
                  <span className="text-[#38BDF8]">⚛</span> DeveloperProfile.tsx
                </div>
                <div className="border-r border-slate-800/40 px-4 py-2.5 flex items-center gap-2 hover:bg-[#1E293B]/40 hover:text-slate-200 cursor-pointer transition-colors">
                  <span className="text-yellow-500">JS</span> skills.js
                </div>
                <div className="px-4 py-2.5 flex items-center gap-2 hover:bg-[#1E293B]/40 hover:text-slate-200 cursor-pointer transition-colors">
                  <span className="text-sky-400">#</span> globals.css
                </div>
              </div>

              {/* Code Area */}
              <div className="p-5 text-[11px] sm:text-xs leading-relaxed text-slate-300 overflow-x-auto min-h-[300px]">
                <div className="text-slate-500 select-none mb-1">{"// 1. Core Profile Details"}</div>
                <div>
                  <span className="text-pink-400 font-semibold">const</span> <span className="text-blue-400">developer</span> = {"{"}
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span> <span className="text-emerald-400">'{site.name}'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">role:</span> <span className="text-emerald-400">'Frontend Architect'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">academicCredentials:</span> {"["}
                </div>
                <div className="pl-8">
                  <span className="text-emerald-400">'B.E. Computer Science'</span>,
                </div>
                <div className="pl-8">
                  <span className="text-emerald-400">'B.S. Data Science'</span>
                </div>
                <div className="pl-4">{"],"}</div>
                <div className="pl-4">
                  <span className="text-slate-400">techStack:</span> {"["}
                </div>
                <div className="pl-8 text-sky-400 font-medium">
                  'React', 'Next.js', 'TailwindCSS', 'TypeScript', 'Node'
                </div>
                <div className="pl-4">{"],"}</div>
                <div className="pl-4">
                  <span className="text-slate-400">status:</span> <span className="text-emerald-400">'Available for freelance & contract'</span>
                </div>
                <div>{"};"}</div>

                <div className="text-slate-500 select-none mt-4 mb-1">{"// 2. Client Value Delivery"}</div>
                <div>
                  <span className="text-pink-400 font-semibold">function</span> <span className="text-yellow-400">buildWebsite</span>(<span className="text-orange-400">specs</span>) {"{"}
                </div>
                <div className="pl-4 text-slate-400">
                  <span className="text-pink-400">return</span> specs
                </div>
                <div className="pl-8 text-slate-400">
                  .filter(<span className="text-orange-400">req</span> =&gt; req.isHighPerformance)
                </div>
                <div className="pl-8 text-slate-400">
                  .map(<span className="text-orange-400">ui</span> =&gt; ui.convertVisitorsToClients())
                </div>
                <div>{"}"}</div>
                
                {/* Simulated typing cursor */}
                <div className="mt-2 text-slate-500">
                  <span>$</span> <span className="text-slate-200">npm run dev</span>
                  <span className="inline-block w-1.5 h-3 bg-blue-500 ml-1.5 animate-pulse" />
                </div>
              </div>

              {/* Status bar */}
              <div className="px-4 py-2 bg-[#1E293B] border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between select-none">
                <div className="flex items-center gap-3">
                  <span className="text-blue-400 font-bold">● UTF-8</span>
                  <span>TypeScript React</span>
                </div>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                  Live Server Active
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
