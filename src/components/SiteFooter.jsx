import { motion } from 'framer-motion'
import { ArrowUpRight, MessageCircle, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerLinks = [
  { href: '#reviews', label: 'Results' },
  { href: '#money-back', label: 'Guarantee' },
  { href: '#faq', label: 'FAQs' },
]

function SiteFooter({ compact = false }) {
  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-[#08080b] text-white">
      {/* Animated subtle glow blobs */}
      <motion.div
        className="absolute -top-24 left-1/4 h-[180px] w-[180px] rounded-full bg-[#8c36ff]/14 blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.8, 0.5],
          x: [-15, 15, -15],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(180,103,255,0.1),_transparent_30%),linear-gradient(180deg,_rgba(255,255,255,0.015)_0%,_rgba(255,255,255,0)_100%)] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-[1320px] px-4 py-6 sm:px-5 sm:py-8">
        <div className={`grid gap-6 ${compact ? 'lg:grid-cols-[1.2fr_0.8fr]' : 'lg:grid-cols-[1.1fr_0.6fr_0.6fr]'}`}>
          
          {/* Main Logo & Description Column */}
          <div className="max-w-[32rem]">
            <motion.div 
              className="inline-flex items-center gap-2.5 cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <span className="relative h-7 w-7">
                <span className="absolute inset-0 rotate-45 skew-x-[-16deg] border-b-2 border-l-2 border-white/70" />
                <span className="absolute inset-[7px] rotate-45 skew-x-[-16deg] border-b-2 border-l-2 border-[#b467ff]" />
              </span>
              <span className="grid leading-none">
                <strong className="[font-family:'Outfit',sans-serif] text-[1.1rem] font-bold text-white tracking-wide">
                  GMC
                </strong>
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-[#d8beff]">
                  Scholarship Consultancy
                </span>
              </span>
            </motion.div>

            {/* Smaller description text (massive H2 removed to make section compact) */}
            <p className="mt-3.5 text-xs leading-5.5 text-white/60 sm:text-sm sm:leading-6">
              Clear strategy for students chasing fully funded admissions. GMC helps students choose better universities, improve scholarship positioning, and build a cleaner roadmap.
            </p>

            <div className="mt-4.5 flex flex-wrap gap-2.5">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  className="btn-primary-site h-10 rounded-full px-4 text-xs font-semibold uppercase tracking-[0.04em] shadow-[0_8px_20px_rgba(31,143,138,0.18)]"
                  to="/program"
                >
                  Book Consultation
                  <ArrowUpRight size={14} />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <a
                  className="btn-secondary-site h-10 rounded-full px-4 text-xs font-bold"
                  href="https://wa.me/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <MessageCircle size={14} />
                  WhatsApp Support
                </a>
              </motion.div>
            </div>
          </div>

          {/* Links Column */}
          {!compact ? (
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#cfb1ff]">
                Explore
              </p>
              <div className="mt-3 grid gap-2">
                {footerLinks.map((link) => (
                  <motion.a
                    className="text-xs font-semibold text-white/64 transition-colors hover:text-[#d6b4ff] w-max"
                    href={link.href}
                    key={link.label}
                    whileHover={{ x: 2 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>
          ) : null}

          {/* Contact Column */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#cfb1ff]">
              Contact
            </p>
            <div className="mt-3 grid gap-2.5">
              <a
                className="btn-secondary-site justify-start gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold text-white/80"
                href="https://wa.me/"
                rel="noreferrer"
                target="_blank"
              >
                <MessageCircle size={14} className="text-[#b467ff]" />
                WhatsApp booking support
              </a>
              <div className="inline-flex items-center gap-2.5 rounded-xl border border-white/6 bg-white/[0.02] px-3 py-2 text-xs font-semibold text-white/70">
                <Phone size={14} className="text-[#b467ff]" />
                Active booking hours response
              </div>
              <motion.a
                className="text-xs font-semibold text-white/50 transition-colors hover:text-white w-max mt-1"
                href="#top"
                whileHover={{ y: -2 }}
              >
                Back to top
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="mt-6 flex flex-col gap-2 border-t border-white/6 pt-4 text-[11px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 GMC Scholarship Consultancy. All rights reserved.</p>
          <p>Designed for focused scholarship applicants who want strategy, not guesswork.</p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
