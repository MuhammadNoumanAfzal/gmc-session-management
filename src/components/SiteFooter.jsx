import { motion } from 'framer-motion'
import { ArrowUpRight, MessageCircle, Phone, Globe, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerLinks = [
  { href: '#reviews', label: 'Consultancy Results' },
  { href: '#money-back', label: 'Money-Back Guarantee' },
  { href: '#faq', label: 'Frequently Asked Questions' },
]

function SiteFooter({ compact = false }) {
  if (compact) {
    return (
      <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#07050e]/60 text-white backdrop-blur-md">
        {/* Glowing background highlight lines */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#b467ff]/25 to-transparent" />
        
        <div className="relative mx-auto w-full max-w-[1220px] px-4 py-8 text-center sm:px-5">
          <div className="flex flex-col items-center justify-center gap-4">
            {/* Logo */}
            <motion.div 
              className="inline-flex items-center gap-2.5 cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <span className="relative h-7 w-7">
                <span className="absolute inset-0 rotate-45 skew-x-[-16deg] border-b-2 border-l-2 border-white/70" />
                <span className="absolute inset-[7px] rotate-45 skew-x-[-16deg] border-b-2 border-l-2 border-[#b467ff]" />
              </span>
              <span className="grid text-left leading-none">
                <strong className="[font-family:'Outfit',sans-serif] text-[1.1rem] font-black text-white tracking-tight">
                  GMC
                </strong>
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#d8beff]">
                  Scholarship Consultancy
                </span>
              </span>
            </motion.div>

            {/* Subtext */}
            <p className="max-w-[480px] text-xs leading-relaxed text-white/60">
              Clear strategy for students chasing fully funded admissions. GMC helps students choose better universities, improve scholarship positioning, and build a cleaner roadmap.
            </p>

            {/* Quick Contact & Info */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-1 text-xs text-white/80">
              <a
                className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 transition hover:bg-white/10 hover:border-[#b467ff]/30"
                href="https://wa.me/"
                rel="noreferrer"
                target="_blank"
              >
                <MessageCircle size={13} className="text-[#b467ff]" />
                <span>WhatsApp Booking Support</span>
              </a>
              <div className="flex items-center gap-1.5 rounded-full border border-white/5 bg-white/[0.01] px-3.5 py-1.5 text-white/60">
                <Phone size={13} className="text-[#b467ff]" />
                <span>Active Booking Hours response</span>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="mt-8 flex flex-col gap-2.5 border-t border-white/[0.06] pt-5 text-[10.5px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 GMC Scholarship Consultancy. All rights reserved.</p>
            <p>Designed for focused scholarship applicants who want strategy, not guesswork.</p>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#07050e] text-white">
      {/* Dynamic ambient blur blobs for background depth */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-[-100px] left-[15%] h-[260px] w-[260px] rounded-full bg-[#8c36ff]/8 blur-[100px]" />
        <div className="absolute bottom-[-120px] right-[10%] h-[240px] w-[240px] rounded-full bg-[#b467ff]/6 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1340px] px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_0.8fr]">
          
          {/* Main Brand Column */}
          <div className="flex flex-col items-start gap-4">
            <motion.div 
              className="inline-flex items-center gap-2.5 cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <span className="relative h-8 w-8">
                <span className="absolute inset-0 rotate-45 skew-x-[-16deg] border-b-2 border-l-2 border-white/80" />
                <span className="absolute inset-[8px] rotate-45 skew-x-[-16deg] border-b-2 border-l-2 border-[#b467ff]" />
              </span>
              <span className="grid leading-none">
                <strong className="[font-family:'Outfit',sans-serif] text-[1.2rem] font-extrabold text-white tracking-tight">
                  GMC
                </strong>
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#d8beff]">
                  Scholarship Consultancy
                </span>
              </span>
            </motion.div>

            <p className="max-w-[420px] text-xs.5 leading-6 text-white/70">
              GMC equips ambitious students with the strategic positioning and direct guidance needed to secure fully funded international admissions. We build roadmap clarity, remove guesswork, and unlock elite academic opportunities globally.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  className="btn-primary-site h-10 rounded-full px-5 text-xs font-bold uppercase tracking-[0.06em] shadow-[0_8px_20px_rgba(31,143,138,0.2)]"
                  to="/program"
                >
                  Book Strategy Session
                  <ArrowUpRight size={14} className="text-[#d7fffc]" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <a
                  className="btn-secondary-site h-10 rounded-full px-4 text-xs font-bold border-white/10 bg-white/[0.03] text-white/90 hover:bg-white/10 hover:border-[#b467ff]/30 hover:text-white"
                  href="https://wa.me/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <MessageCircle size={14} className="text-[#c595ff]" />
                  Chat on WhatsApp
                </a>
              </motion.div>
            </div>
          </div>

          {/* Links Column */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#cfb1ff]">
                Explore Sections
              </p>
              <div className="h-[2px] w-8 bg-gradient-to-r from-[#b467ff] to-transparent mt-1.5" />
            </div>
            
            <div className="grid gap-3">
              {footerLinks.map((link) => (
                <motion.a
                  className="group flex items-center gap-2 text-xs.5 font-medium text-white/60 transition-colors hover:text-[#d6b4ff] w-max"
                  href={link.href}
                  key={link.label}
                  whileHover={{ x: 3 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#b467ff]/0 transition-all duration-300 group-hover:bg-[#b467ff] group-hover:shadow-[0_0_8px_rgba(180,103,255,0.8)]" />
                  <span>{link.label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Column with premium glass box design */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#cfb1ff]">
                Contact & Support
              </p>
              <div className="h-[2px] w-8 bg-gradient-to-r from-[#b467ff] to-transparent mt-1.5" />
            </div>

            <div className="grid gap-3 rounded-[22px] border border-white/[0.06] bg-[#100c1a]/85 p-4 shadow-[0_12px_24px_rgba(0,0,0,0.15)]">
              <a
                className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] px-3.5 py-2.5 text-xs font-semibold text-white/80 hover:bg-white/5 transition-all"
                href="https://wa.me/"
                rel="noreferrer"
                target="_blank"
              >
                <MessageCircle size={14.5} className="text-[#b467ff]" />
                <div className="grid text-left">
                  <span className="text-white">WhatsApp Support</span>
                  <span className="text-[9.5px] text-white/40">Direct response line</span>
                </div>
              </a>

              <div className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.01] px-3.5 py-2.5 text-xs font-semibold text-white/70">
                <Phone size={14.5} className="text-[#b467ff]" />
                <div className="grid text-left">
                  <span className="text-white/80">Active Hours</span>
                  <span className="text-[9.5px] text-white/40">Prompt booking response</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.01] px-3.5 py-2.5 text-xs font-semibold text-white/70">
                <Globe size={14.5} className="text-[#b467ff]" />
                <div className="grid text-left">
                  <span className="text-white/80">Worldwide Admissions</span>
                  <span className="text-[9.5px] text-white/40">Secure remote processing</span>
                </div>
              </div>
            </div>

            <motion.a
              className="text-xs font-bold text-white/50 transition-colors hover:text-white w-max mt-1 inline-flex items-center gap-1"
              href="#top"
              whileHover={{ y: -2 }}
            >
              <span>Back to top</span>
              <ArrowUpRight size={13} className="text-white/30" />
            </motion.a>
          </div>
        </div>

        {/* Divider with horizontal gradient glow */}
        <div className="mt-10 relative">
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="pt-6 flex flex-col gap-3.5 text-[11px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 GMC Scholarship Consultancy. All rights reserved.</p>
            <div className="flex items-center gap-1.5 text-white/30">
              <ShieldCheck size={13.5} className="text-[#b467ff]" />
              <p>Designed for focused scholarship applicants who want strategy, not guesswork.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
