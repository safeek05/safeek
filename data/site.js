export const site = {
  name: 'Safeek',
  url: 'https://safeek.dev',
  email: 'safeek.dev@email.com',
  github: 'https://github.com/safeek05',
  githubHandle: 'safeek05',
  linkedin: 'https://linkedin.com/in/safeekm',
  linkedinHandle: 'safeekm',
  whatsapp: 'https://wa.me/6381668812',
  whatsappDisplay: '+91 63816 68812',
  responseTime: 'Within 24 hours',
}

export const formspreeEndpoint =
  process.env.NEXT_PUBLIC_FORMSPREE_ID
    ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
    : null
