'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { site, formspreeEndpoint } from '../../data/site'

const contactLinks = [
  {
    platform: 'Email',
    handle: site.email,
    href: `mailto:${site.email}`,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    platform: 'LinkedIn',
    handle: site.linkedinHandle,
    href: site.linkedin,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    platform: 'GitHub',
    handle: site.githubHandle,
    href: site.github,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    platform: 'WhatsApp',
    handle: site.whatsappDisplay,
    href: site.whatsapp,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')

    if (!formspreeEndpoint) {
      setStatus('error')
      setErrorMessage('Contact form is not configured. Please email me directly.')
      return
    }

    setStatus('submitting')

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setStatus('sent')
        e.target.reset()
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        const data = await response.json().catch(() => ({}))
        setStatus('error')
        setErrorMessage(data.error || 'Something went wrong. Please try again or email me directly.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Network error. Please check your connection or email me directly.')
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAFAFA] relative overflow-hidden" ref={ref} aria-labelledby="contact-heading">
      {/* Decorative background blur */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-300/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <span className="text-xs font-semibold text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full border border-blue-100/50 uppercase tracking-widest block mb-4 w-max">Contact</span>
          <h2 id="contact-heading" className="text-3xl sm:text-4xl font-extrabold text-[#111827] leading-tight mb-4">
            Let's build something exceptional
          </h2>
          <p className="text-[#6B7280] max-w-lg leading-relaxed text-sm sm:text-base font-medium">
            Need a high-performing website, a freelance developer, or an engineering intern? Drop me a message — I reply {site.responseTime.toLowerCase()}.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <div className="space-y-4">
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.platform}
                  href={link.href}
                  target={link.platform !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 bg-white border border-gray-200/50 rounded-2xl p-4.5 hover:border-[#BFDBFE] hover:shadow-md transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]/30 card-premium-glow"
                  aria-label={`Contact via ${link.platform}: ${link.handle}`}
                >
                  <div className="w-11 h-11 bg-blue-50 text-[#2563EB] border border-blue-100/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    {link.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-wider mb-0.5">{link.platform}</div>
                    <div className="text-sm font-extrabold text-[#111827] truncate group-hover:text-[#2563EB] transition-colors">{link.handle}</div>
                  </div>
                  <svg className="w-4 h-4 text-[#D1D5DB] ml-auto flex-shrink-0 group-hover:text-[#2563EB] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              ))}
            </div>
            
            {/* Freelancer Trust disclaimer */}
            <div className="p-5 bg-blue-50/40 border border-blue-100/30 rounded-2xl space-y-2 select-none" aria-hidden="true">
              <span className="text-[10px] font-bold text-[#2563EB] uppercase tracking-widest">Client Guarantee</span>
              <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                Every project I deliver includes clean responsive HTML/CSS structures, SEO optimizations, custom animations, and 30 days of post-launch technical support.
              </p>
            </div>
          </motion.div>

          {/* Right: form or victory state */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white border border-gray-200/60 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col relative overflow-hidden card-premium-glow">
              <AnimatePresence mode="wait">
                {status === 'sent' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center space-y-5 py-8"
                  >
                    {/* Animated Check circle */}
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 border border-emerald-100/50 rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <motion.path
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl font-extrabold text-[#111827]">Message Sent Successfully!</h3>
                      <p className="text-sm text-[#6B7280] leading-relaxed max-w-sm mx-auto font-medium">
                        Thank you for reaching out. I've received your inquiry and will review details immediately. Expect a reply {site.responseTime.toLowerCase()}.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="px-6 py-2.5 bg-gray-50 border border-gray-200 text-xs font-bold text-gray-700 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    noValidate
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                    aria-label="Contact form"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="contact-name" className="block text-xs font-bold text-[#374151]">
                          Name
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="Your name"
                          className="w-full px-4 py-3 text-xs sm:text-sm text-[#111827] bg-[#FAFAFA]/70 border border-gray-200/80 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-[#2563EB] focus:bg-white placeholder-gray-400 transition-all font-semibold"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="contact-email" className="block text-xs font-bold text-[#374151]">
                          Email
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="you@company.com"
                          className="w-full px-4 py-3 text-xs sm:text-sm text-[#111827] bg-[#FAFAFA]/70 border border-gray-200/80 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-[#2563EB] focus:bg-white placeholder-gray-400 transition-all font-semibold"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-subject" className="block text-xs font-bold text-[#374151]">
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        required
                        placeholder="Project inquiry, internship, contract..."
                        className="w-full px-4 py-3 text-xs sm:text-sm text-[#111827] bg-[#FAFAFA]/70 border border-gray-200/80 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-[#2563EB] focus:bg-white placeholder-gray-400 transition-all font-semibold"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-message" className="block text-xs font-bold text-[#374151]">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={4}
                        placeholder="Describe your project requirements, goals, timeline, or internship profile details..."
                        className="w-full px-4 py-3 text-xs sm:text-sm text-[#111827] bg-[#FAFAFA]/70 border border-gray-200/80 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-[#2563EB] focus:bg-white placeholder-gray-400 transition-all resize-none font-semibold leading-relaxed"
                      />
                    </div>

                    {status === 'error' && (
                      <div className="text-xs text-[#DC2626] bg-[#FEF2F2] border border-[#FECACA] rounded-xl px-4 py-3 flex items-center gap-2" role="alert">
                        <span className="font-extrabold select-none">!</span>
                        <p className="font-semibold">{errorMessage}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-3.5 bg-[#2563EB] text-white text-xs font-bold rounded-xl hover:bg-[#1D4ED8] transition-all hover:shadow-lg hover:shadow-blue-500/10 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none flex items-center justify-center gap-2"
                    >
                      {status === 'submitting' ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending Inquiry...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
