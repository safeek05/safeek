import { site } from '../../data/site'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { label: 'GitHub', href: site.github },
  { label: 'LinkedIn', href: site.linkedin },
  { label: 'WhatsApp', href: site.whatsapp },
  { label: 'Email', href: `mailto:${site.email}` },
]

export default function Footer() {
  return (
    <footer className="bg-[#0B0F19] text-white border-t border-gray-900/60 relative overflow-hidden">
      {/* Subtle bottom gradient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[100px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-14">
          {/* Brand & Availability Status */}
          <div className="space-y-4">
            <div>
              <div className="text-xl font-black mb-2.5 tracking-tight">
                {site.name}<span className="text-[#2563EB]">.</span>
              </div>
              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed max-w-xs font-medium">
                Frontend architect & computer science student. Building premium, responsive digital web interfaces.
              </p>
            </div>
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full text-[10px] text-emerald-400 font-bold uppercase tracking-wider select-none">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
              Available for new projects
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-[10px] font-bold text-[#4B5563] uppercase tracking-widest mb-4">Navigation</div>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-[#9CA3AF] hover:text-white hover:translate-x-0.5 transition-all inline-block font-medium focus-visible:outline-none rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Details */}
          <div>
            <div className="text-[10px] font-bold text-[#4B5563] uppercase tracking-widest mb-4">Connect</div>
            <ul className="space-y-2.5">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.label !== 'Email' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-[#9CA3AF] hover:text-[#2563EB] hover:translate-x-0.5 transition-all inline-block font-medium focus-visible:outline-none rounded"
                  >
                    {link.label} <span className="text-[9px] text-[#4B5563]">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 select-none">
          <p className="text-[10px] text-[#4B5563] font-bold uppercase tracking-wider">
            © 2026 {site.name}. All rights reserved.
          </p>
          <p className="text-[10px] text-[#4B5563] font-bold uppercase tracking-wider text-center sm:text-right">
            Designed & Engineered by{' '}
            <span className="text-[#9CA3AF] font-black">{site.name}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
