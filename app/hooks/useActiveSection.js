import { useState, useEffect } from 'react'

export const SECTIONS = ['home', 'about', 'projects', 'skills', 'contact']

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          if (id && SECTIONS.includes(id)) {
            setActiveSection(id)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    SECTIONS.forEach((section) => {
      const element = document.getElementById(section)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      SECTIONS.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

  return activeSection
}
