'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const focusAreas = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
      </svg>
    ),
    title: 'BE Computer Science',
    desc: 'Studying algorithms, systems, and software engineering — building a strong technical foundation.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'BS Data Science',
    desc: 'Pursuing Data Science & Applications — Python, statistics, and analytical problem-solving.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Frontend Development',
    desc: 'Passionate about building fast, accessible interfaces with React, Next.js, and Tailwind CSS.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Problem Solving',
    desc: 'I break down complex requirements into clear steps — from debugging code to delivering client projects on time.',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-20 sm:py-28 bg-white relative overflow-hidden" ref={ref} aria-labelledby="about-heading">
      {/* Decorative background circle */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl opacity-60 pointer-events-none" aria-hidden="true" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="text-xs font-semibold text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full border border-blue-100/50 uppercase tracking-widest inline-block">About Me</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Description Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <h2 id="about-heading" className="text-3xl sm:text-4xl font-extrabold text-[#111827] leading-tight">
              A developer who learns fast
              <br />
              and delivers with care
            </h2>
            <p className="text-[#6B7280] text-base sm:text-lg leading-relaxed">
              I'm Safeek — a Computer Science student with a genuine interest in frontend development. I enjoy turning ideas into working websites, whether that's a portfolio, a landing page, or a full web application.
            </p>
            <p className="text-[#6B7280] text-sm leading-relaxed border-l-2 border-blue-600 pl-4 py-1.5 bg-gray-50/50 rounded-r-xl">
              Currently pursuing a BE in Computer Science & Engineering and a BS in Data Science and Applications, I bring both analytical thinking and hands-on coding experience to every project. I'm available for freelance work and internship opportunities.
            </p>
          </motion.div>

          {/* Right Bento Box Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-4"
          >
            {/* Bento Card 1: CS Degree */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-[#FAFAFA] border border-gray-200/60 rounded-2xl p-5 hover:border-[#BFDBFE] hover:shadow-md transition-all flex flex-col justify-between min-h-[180px] card-premium-glow"
            >
              <div>
                <div className="w-10 h-10 bg-blue-50 text-[#2563EB] border border-blue-100/30 rounded-xl flex items-center justify-center mb-4">
                  {focusAreas[0].icon}
                </div>
                <h3 className="text-sm font-bold text-[#111827] mb-1.5">{focusAreas[0].title}</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed font-medium">{focusAreas[0].desc}</p>
              </div>
            </motion.div>

            {/* Bento Card 2: DS Degree */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-[#FAFAFA] border border-gray-200/60 rounded-2xl p-5 hover:border-[#BFDBFE] hover:shadow-md transition-all flex flex-col justify-between min-h-[180px] card-premium-glow"
            >
              <div>
                <div className="w-10 h-10 bg-indigo-50 text-[#6366F1] border border-indigo-100/30 rounded-xl flex items-center justify-center mb-4">
                  {focusAreas[1].icon}
                </div>
                <h3 className="text-sm font-bold text-[#111827] mb-1.5">{focusAreas[1].title}</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed font-medium">{focusAreas[1].desc}</p>
              </div>
            </motion.div>

            {/* Bento Card 3: Frontend Dev (Spans 2 columns, has visual components) */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="sm:col-span-2 bg-[#FAFAFA] border border-gray-200/60 rounded-2xl p-5 hover:border-[#BFDBFE] hover:shadow-md transition-all flex flex-col sm:flex-row justify-between gap-5 card-premium-glow"
            >
              <div className="flex-1 space-y-2">
                <div className="w-10 h-10 bg-emerald-50 text-[#10B981] border border-emerald-100/30 rounded-xl flex items-center justify-center">
                  {focusAreas[2].icon}
                </div>
                <h3 className="text-sm font-bold text-[#111827] pt-1">{focusAreas[2].title}</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed font-medium max-w-sm">{focusAreas[2].desc}</p>
              </div>

              {/* Visual Mock Components */}
              <div className="flex flex-col justify-center gap-2 bg-white border border-gray-200/60 p-4 rounded-xl shadow-sm sm:w-[220px] select-none" aria-hidden="true">
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-16 h-2 bg-gray-100 rounded" />
                  <span className="w-8 h-3.5 bg-blue-100 text-[8px] text-blue-600 font-bold px-1 rounded flex items-center justify-center">v14.2</span>
                </div>
                <div className="space-y-1.5 pt-1.5">
                  <div className="flex gap-1">
                    <span className="w-16 h-4 bg-blue-600 text-white text-[8px] font-bold rounded flex items-center justify-center">Active Button</span>
                    <span className="w-16 h-4 bg-gray-50 border border-gray-200 text-[8px] text-gray-500 font-medium rounded flex items-center justify-center hover:bg-gray-100">Hover Me</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="w-[85%] h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bento Card 4: Problem Solving (Spans 2 columns, has visual components) */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="sm:col-span-2 bg-[#FAFAFA] border border-gray-200/60 rounded-2xl p-5 hover:border-[#BFDBFE] hover:shadow-md transition-all flex flex-col sm:flex-row justify-between gap-5 card-premium-glow"
            >
              <div className="flex-1 space-y-2">
                <div className="w-10 h-10 bg-amber-50 text-[#D97706] border border-amber-100/30 rounded-xl flex items-center justify-center">
                  {focusAreas[3].icon}
                </div>
                <h3 className="text-sm font-bold text-[#111827] pt-1">{focusAreas[3].title}</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed font-medium max-w-sm">{focusAreas[3].desc}</p>
              </div>

              {/* Visual Mock Code Flow */}
              <div className="flex flex-col justify-center gap-1.5 bg-[#0F172A] border border-slate-800 p-4 rounded-xl shadow-sm sm:w-[220px] font-mono text-[9px] text-slate-300 select-none" aria-hidden="true">
                <div>
                  <span className="text-blue-400">const</span> solveProblem = () =&gt; {"{"}
                </div>
                <div className="pl-3 text-slate-500">{"// 1. Divide and conquer"}</div>
                <div className="pl-3">
                  <span className="text-pink-400">const</span> steps = parse(req);
                </div>
                <div className="pl-3 text-emerald-400">
                  <span className="text-pink-400">return</span> steps.reduce(execute);
                </div>
                <div>{"};"}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
