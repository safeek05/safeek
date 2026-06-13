'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { journey } from '../../data/journey'

const typeConfig = {
  learning: {
    color: 'bg-blue-50/60 border-blue-100 text-[#2563EB]',
    dot: 'bg-[#2563EB] ring-blue-100/50',
    label: 'Learning',
  },
  project: {
    color: 'bg-emerald-50/60 border-emerald-100 text-emerald-700',
    dot: 'bg-emerald-500 ring-emerald-100/50',
    label: 'Project',
  },
  milestone: {
    color: 'bg-orange-50/60 border-orange-100 text-orange-700',
    dot: 'bg-orange-500 ring-orange-100/50',
    label: 'Milestone',
  },
}

export default function Journey() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="journey" className="py-20 sm:py-28 bg-white relative overflow-hidden" ref={ref} aria-labelledby="journey-heading">
      {/* Decorative background glow */}
      <div className="absolute top-10 right-[-10%] w-96 h-96 bg-blue-50/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 sm:mb-16"
        >
          <span className="text-xs font-semibold text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full border border-blue-100/50 uppercase tracking-widest block mb-4 w-max">Timeline</span>
          <h2 id="journey-heading" className="text-3xl sm:text-4xl font-extrabold text-[#111827] leading-tight">
            Projects & Learning Journey
          </h2>
        </motion.div>

        <div className="relative max-w-2xl">
          {/* Vertical line with gradient */}
          <motion.div
            className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#2563EB] via-indigo-400 to-[#FAFAFA]"
            initial={{ scaleY: 0, originY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          />

          <div className="space-y-8">
            {journey.map((item, i) => {
              const config = typeConfig[item.type]
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="relative flex gap-6 pl-8 group"
                >
                  {/* Dot with double ring animation trigger */}
                  <div className={`absolute left-0 top-1.5 w-[24px] h-[24px] rounded-full border-2 border-white ring-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${config.dot}`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-[#FAFAFA] border border-gray-200/50 rounded-2xl p-5 sm:p-6 hover:border-[#BFDBFE] hover:shadow-md hover:bg-white transition-all duration-300 card-premium-glow">
                    <div className="flex items-center justify-between gap-4 mb-2.5">
                      <span className="text-xs font-black text-[#111827] tracking-wider">{item.year}</span>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${config.color}`}>
                        {config.label}
                      </span>
                    </div>
                    <h3 className="font-extrabold text-[#111827] text-sm sm:text-base mb-2 group-hover:text-[#2563EB] transition-colors">{item.title}</h3>
                    <p className="text-xs text-[#6B7280] leading-relaxed font-medium">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
