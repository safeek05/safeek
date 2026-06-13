'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function useCounter(target, duration = 1500, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])

  return count
}

const stats = [
  {
    value: 4,
    suffix: '',
    label: 'Projects Built',
    description: 'Websites and apps built from concept to deployment',
  },
  {
    value: 24,
    suffix: 'hr',
    label: 'Response Time',
    description: 'Typical reply time for project and internship inquiries',
  },
  {
    value: 10,
    suffix: '+',
    label: 'Technologies',
    description: 'Frontend, programming, and workflow tools in my stack',
  },
  {
    value: 2,
    suffix: '',
    label: 'Degrees Pursuing',
    description: 'BE Computer Science & BS Data Science',
  },
]

function StatCard({ value, suffix, label, description, inView }) {
  const count = useCounter(value, 1400, inView)

  return (
    <div className="text-center p-6 bg-white border border-gray-200/50 rounded-2xl shadow-sm card-premium-glow flex flex-col justify-center h-full relative overflow-hidden group">
      {/* Subtle hover background glow */}
      <div className="absolute -inset-10 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-[#111827] tracking-tight mb-2 tabular-nums relative z-10 text-gradient">
        {count}{suffix}
      </div>
      <div className="text-xs sm:text-sm font-bold text-[#111827] mb-1.5 relative z-10 uppercase tracking-wide">{label}</div>
      <div className="text-[11px] sm:text-xs text-[#6B7280] leading-relaxed max-w-[200px] mx-auto relative z-10 font-medium">{description}</div>
    </div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 bg-[#FAFAFA] border-y border-gray-200/40 relative overflow-hidden" ref={ref} aria-label="Portfolio highlights">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[150px] bg-blue-300/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="h-full"
            >
              <StatCard {...stat} inView={isInView} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
