'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillCategories } from '../../data/skills'

function getSkillIcon(name) {
  switch (name) {
    case 'HTML & CSS':
      return (
        <svg className="w-4.5 h-4.5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    case 'Tailwind CSS':
      return (
        <svg className="w-4.5 h-4.5 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3v18M3 12h18M12 3l9 9-9 9-9-9 9-9z" />
        </svg>
      )
    case 'JavaScript':
      return (
        <svg className="w-4.5 h-4.5 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3h18v18H3V3zm14.5 12c0-1.2-.8-2-2-2-1 0-1.5.5-1.8 1l-.2-.8h-1V18h1v-2.2c0-.5.2-.8.7-.8.5 0 .8.3.8.8V18h1v-3z" />
        </svg>
      )
    case 'React':
      return (
        <svg className="w-4.5 h-4.5 text-sky-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      )
    case 'Next.js':
      return (
        <svg className="w-4.5 h-4.5 text-[#111827]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v12M8 10h8" />
        </svg>
      )
    case 'Python':
      return (
        <svg className="w-4.5 h-4.5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3.5-3.5h-7v-1h7v1zm0-3h-7V9h7v1z" />
        </svg>
      )
    case 'Data Structures':
    case 'Algorithms':
      return (
        <svg className="w-4.5 h-4.5 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="15" y1="3" x2="15" y2="21" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="3" y1="15" x2="21" y2="15" />
        </svg>
      )
    case 'Git & GitHub':
      return (
        <svg className="w-4.5 h-4.5 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      )
    case 'VS Code':
      return (
        <svg className="w-4.5 h-4.5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      )
    case 'Figma':
      return (
        <svg className="w-4.5 h-4.5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
          <path d="M12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8Z" />
        </svg>
      )
    case 'Responsive Design':
      return (
        <svg className="w-4.5 h-4.5 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      )
    default:
      return (
        <svg className="w-4.5 h-4.5 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11" />
        </svg>
      )
  }
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-20 sm:py-28 bg-[#FAFAFA] relative overflow-hidden" ref={ref} aria-labelledby="skills-heading">
      {/* Background decoration */}
      <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-indigo-50/40 rounded-full blur-3xl opacity-60 pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <span className="text-xs font-semibold text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full border border-blue-100/50 uppercase tracking-widest block mb-4 w-max">Skills</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 id="skills-heading" className="text-3xl sm:text-4xl font-extrabold text-[#111827] leading-tight">
              Tools & Technologies
            </h2>
            <p className="text-[#6B7280] text-sm max-w-sm leading-relaxed font-medium">
              Technologies grouped by engineering application — no inflated bars, just my day-to-day stack.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-gray-200/50 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 card-premium-glow flex flex-col"
            >
              <h3 className="text-base font-extrabold text-[#111827] mb-2">{category.name}</h3>
              <p className="text-xs text-[#6B7280] leading-relaxed mb-6 font-medium">{category.description}</p>

              <ul className="space-y-2.5 mt-auto" role="list">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-3.5 text-xs text-[#374151] bg-[#FAFAFA] border border-gray-100/70 rounded-xl px-4 py-3 hover:bg-white hover:border-[#BFDBFE] hover:shadow-sm hover:text-black transition-all font-semibold"
                  >
                    <div className="w-7 h-7 bg-white border border-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      {getSkillIcon(skill.name)}
                    </div>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
