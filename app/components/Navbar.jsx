'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useActiveSection } from '../hooks/useActiveSection'

const navLinks = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const activeSection = useActiveSection()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, cubicBezier: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? 'bg-white/75 backdrop-blur-md shadow-sm border-b border-gray-200/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          className="text-[#111827] font-bold text-xl tracking-tight hover:text-[#2563EB] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]/40 focus-visible:ring-offset-2 rounded-md"
        >
          Safeek<span className="text-[#2563EB]">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1.5" aria-label="Main navigation">
          <div className="flex items-center gap-1 bg-[#FAFAFA]/50 border border-gray-200/30 rounded-full p-1.5 backdrop-blur-sm mr-4">
            {navLinks.map((link, idx) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative text-xs font-medium px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]/40 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'text-[#2563EB] font-semibold'
                      : 'text-[#4B5563] hover:text-[#111827]'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="navActive"
                      className="absolute inset-0 bg-[#EFF6FF] rounded-full z-0 border border-blue-100/50"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {hoveredIndex === idx && !isActive && (
                    <motion.span
                      className="absolute inset-0 bg-[#F3F4F6] rounded-full z-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </div>
          <a
            href="#contact"
            className="text-xs bg-[#2563EB] text-white px-5 py-2.5 rounded-full font-semibold hover:bg-[#1D4ED8] transition-all hover:shadow-lg hover:shadow-blue-500/10 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]/40"
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-xl bg-gray-50 border border-gray-100 hover:bg-[#F3F4F6] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]/40"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <div className="w-5 h-5 flex flex-col justify-between items-end relative">
            <span className={`w-5 h-0.5 bg-[#111827] rounded-full transition-all duration-300 origin-right ${menuOpen ? '-rotate-45 translate-y-[2px] -translate-x-[2px]' : ''}`} />
            <span className={`w-4 h-0.5 bg-[#111827] rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 w-0' : ''}`} />
            <span className={`w-5 h-0.5 bg-[#111827] rounded-full transition-all duration-300 origin-right ${menuOpen ? 'rotate-45 -translate-y-[2px] -translate-x-[2px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-b border-gray-100/80 overflow-hidden shadow-lg"
          >
            <nav className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-3.5" aria-label="Mobile navigation">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.id
                return (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`relative px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]/40 ${
                      isActive
                        ? 'text-[#2563EB] font-semibold'
                        : 'text-[#4B5563] hover:text-[#111827] border-b border-gray-50'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        className="absolute inset-0 bg-[#EFF6FF] rounded-lg z-0 border border-blue-100/50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </motion.a>
                )
              })}
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-xs bg-[#2563EB] text-white px-4 py-3 rounded-xl font-bold text-center hover:bg-[#1D4ED8] transition-all active:scale-95 focus-visible:outline-none"
              >
                Get in Touch
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
