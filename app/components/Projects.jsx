'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '../../data/projects'

const categoryColors = {
  'Web Development': 'bg-blue-50/60 text-[#2563EB] border border-blue-100/60',
  'Client Project': 'bg-emerald-50/60 text-emerald-700 border border-emerald-100/60',
  'Landing Page': 'bg-orange-50/60 text-orange-700 border border-orange-100/60',
  'Web App': 'bg-purple-50/60 text-purple-700 border border-purple-100/60',
}

const techColors = {
  'Next.js': 'bg-[#F9FAFB] text-[#374151] border border-[#E5E7EB]',
  'React': 'bg-[#F0F9FF] text-[#0369A1] border border-[#BAE6FD]',
  'Tailwind CSS': 'bg-[#F0FDFA] text-[#0F766E] border border-[#99F6E4]',
  'JavaScript': 'bg-[#FEFCE8] text-[#854D0E] border border-[#FEF08A]',
  'CSS Modules': 'bg-[#F0F9FF] text-[#0369A1] border border-[#BAE6FD]',
  'CSS': 'bg-[#F0F9FF] text-[#0369A1] border border-[#BAE6FD]',
  'HTML': 'bg-[#FFF7ED] text-[#C2410C] border border-[#FED7AA]',
  'Framer Motion': 'bg-[#FAF5FF] text-[#9333EA] border border-[#DDD6FE]',
}

function ProjectMockup({ projectId }) {
  // Render high-fidelity CSS visuals for projects
  switch (projectId) {
    case 1: // Personal Portfolio
      return (
        <div className="w-full h-full bg-[#0F172A] p-4 flex flex-col justify-between font-mono text-[9px] text-slate-400 select-none">
          <div className="flex justify-between items-center pb-2 border-b border-slate-800">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse" />
              <span className="text-slate-300 font-bold">safeek.dev</span>
            </div>
            <div className="flex gap-2 text-[8px] text-slate-500">
              <span>Home</span>
              <span>Work</span>
              <span>Contact</span>
            </div>
          </div>
          <div className="flex-1 py-4 flex flex-col justify-center items-center gap-2">
            <div className="w-2/3 h-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded" />
            <div className="w-1/2 h-1.5 bg-slate-800 rounded" />
            <div className="flex gap-1.5 mt-1">
              <div className="w-10 h-3 bg-blue-600 rounded-sm" />
              <div className="w-10 h-3 bg-slate-800 rounded-sm" />
            </div>
          </div>
          <div className="text-[7px] text-slate-500 text-right">Portfolio Mockup</div>
        </div>
      )
    case 2: // Restaurant Website
      return (
        <div className="w-full h-full bg-orange-50/40 p-4 flex flex-col justify-between select-none">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-black tracking-tight text-orange-900">RESTAURANT PAGE</span>
            <span className="text-[9px] bg-orange-100 text-orange-800 font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
              ⭐ 4.9
            </span>
          </div>
          <div className="bg-white border border-orange-100 p-4 rounded-xl shadow-sm max-w-[200px] mx-auto mt-2 space-y-3">
            <div className="w-full h-12 bg-gradient-to-tr from-amber-100 to-orange-100 rounded-lg flex items-center justify-center text-xl">
              🍕
            </div>
            <div className="w-16 h-2 bg-orange-950 rounded" />
            <div className="flex justify-between items-center gap-2">
              <span className="text-[8px] text-orange-700 font-bold">$14.99</span>
              <span className="text-[7px] bg-orange-600 text-white font-bold px-2 py-0.5 rounded">Order</span>
            </div>
          </div>
          <div className="text-[7px] text-orange-800/60 font-semibold text-right">Interactive Client Mockup</div>
        </div>
      )
    case 3: // Gym Landing Page
      return (
        <div className="w-full h-full bg-emerald-50/40 p-4 flex flex-col justify-between select-none">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-black tracking-tight text-emerald-950">GYM PAGE</span>
            <span className="text-[8px] text-emerald-600 font-bold border border-emerald-200/50 bg-white px-2 py-0.5 rounded-full">
              JOIN
            </span>
          </div>
          <div className="bg-white border border-emerald-100 p-3 rounded-xl shadow-sm max-w-[200px] mx-auto mt-2 space-y-2">
            <div className="flex items-baseline gap-1">
              <span className="text-sm font-extrabold text-emerald-900">$29</span>
              <span className="text-[8px] text-emerald-700">/month</span>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[8px] text-emerald-800">
                <span className="text-emerald-500">✓</span> Free Coaching
              </div>
              <div className="flex items-center gap-1.5 text-[8px] text-emerald-800">
                <span className="text-emerald-500">✓</span> 24/7 Gym Access
              </div>
            </div>
            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="w-[75%] h-full bg-emerald-500 rounded-full" />
            </div>
          </div>
          <div className="text-[7px] text-emerald-800/60 font-semibold text-right">Fitness Tier UI Mockup</div>
        </div>
      )
    case 4: // Expense Tracker
      return (
        <div className="w-full h-full bg-[#0F172A] p-4 flex flex-col justify-between font-mono text-[9px] text-slate-400 select-none">
          <div className="flex justify-between items-center">
            <span className="text-slate-300 font-bold">AGENCY WEB</span>
            <span className="text-[8px] text-purple-400 font-bold">+$1,240</span>
          </div>
          
          {/* Mock Bar Chart */}
          <div className="flex items-end justify-center gap-2 h-14 pt-2 border-b border-slate-800">
            <div className="w-3 bg-purple-500/30 rounded-t-sm h-6" />
            <div className="w-3 bg-purple-500/50 rounded-t-sm h-9" />
            <div className="w-3 bg-purple-500 rounded-t-sm h-12" />
            <div className="w-3 bg-indigo-500 rounded-t-sm h-8" />
          </div>
          
          <div className="flex justify-between items-center text-[7px] pt-1">
            <span>Expenses</span>
            <span className="text-slate-500">Total: $2,490</span>
          </div>
        </div>
      )
    default:
      return null
  }
}

function ProjectCard({ project, index }) {
  const hasDemo = Boolean(project.demo)

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white border border-gray-200/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 group h-full flex flex-col"
    >
      {/* Mockup Top Header */}
      <div className="h-44 sm:h-48 border-b border-gray-100 overflow-hidden relative">
        <div className="w-full h-full group-hover:scale-105 transition-transform duration-500">
          <ProjectMockup projectId={project.id} />
        </div>
        
        {/* Hover overlay shadow line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-4">
          <h3 className="font-extrabold text-[#111827] text-base leading-snug group-hover:text-[#2563EB] transition-colors">{project.title}</h3>
          <span className={`text-[9px] font-bold px-2.5 py-0.5 rounded-full flex-shrink-0 ${categoryColors[project.category] || 'bg-[#F3F4F6] text-[#374151]'}`}>
            {project.category}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed mb-6 flex-1 font-medium">{project.description}</p>

        {/* Tech stack */}
        <div className="mb-6">
          <p className="text-[9px] font-bold text-[#9CA3AF] uppercase tracking-wider mb-2.5">Technologies Used</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span key={t} className={`text-[9px] font-bold px-2 py-1 rounded-lg ${techColors[t] || 'bg-[#F3F4F6] text-[#374151] border border-[#E5E7EB]'}`}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto pt-2 border-t border-gray-100">
          <a
            href={hasDemo ? project.demo : '#'}
            target="_blank"
            className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-bold py-3 bg-[#2563EB] text-white rounded-xl hover:bg-[#1D4ED8] transition-all hover:shadow-lg hover:shadow-blue-500/10 active:scale-98 focus-visible:outline-none"
            aria-label={`View live demo of ${project.title}`}
          >
            Live Demo
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-bold py-3 bg-white text-[#374151] border border-[#E5E7EB] rounded-xl hover:border-gray-400 hover:text-black transition-all active:scale-98 focus-visible:outline-none"
            aria-label={`View ${project.title} on GitHub`}
          >
            GitHub
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-20 sm:py-28 bg-white" ref={ref} aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <span className="text-xs font-semibold text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full border border-blue-100/50 uppercase tracking-widest block mb-4 w-max">Projects</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 id="projects-heading" className="text-3xl sm:text-4xl font-extrabold text-[#111827] leading-tight">
              Selected client & personal work
            </h2>
            <p className="text-[#6B7280] text-sm max-w-sm leading-relaxed font-medium">
              Real projects built from scratch — optimized for high performance, accessibility, and clean interface designs.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="h-full"
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
