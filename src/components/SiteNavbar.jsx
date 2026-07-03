import { ArrowUpRight, Menu } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { href: '#why-session-matters', label: 'Why This Matters' },
  { href: '#who-its-for', label: "Who It's For" },
  { href: '#reviews', label: 'Reviews' },
  { href: '#money-back', label: 'Guarantee' },
  { href: '#faq', label: 'FAQs' },
]

function SiteNavbar() {
  const [open, setOpen] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-4">
      <motion.div
        className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[24px] border border-white/10 bg-transparent shadow-none backdrop-blur-0"
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: -16 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-[-12%] top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(210,171,255,0.95),rgba(128,48,255,0.7),transparent)]"
          animate={prefersReducedMotion ? undefined : { x: ['-12%', '12%', '-12%'] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: 'linear' }}
        />
        <div className="relative mx-auto flex w-full items-center justify-between px-4 py-3 sm:px-5">
        <a className="inline-flex items-center gap-3" href="#top">
          <span className="relative grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <motion.span
              className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle,rgba(180,103,255,0.22)_0%,transparent_68%)]"
              animate={prefersReducedMotion ? undefined : { scale: [0.96, 1.08, 0.96], opacity: [0.55, 0.9, 0.55] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="relative h-7 w-7">
              <span className="absolute inset-0 rotate-45 skew-x-[-16deg] border-b-2 border-l-2 border-white/70" />
              <span className="absolute inset-[7px] rotate-45 skew-x-[-16deg] border-b-2 border-l-2 border-[#b467ff]" />
            </span>
          </span>
          <span className="grid leading-none">
            <strong className="[font-family:'Outfit',sans-serif] text-[1.15rem] font-bold text-white sm:text-[1.3rem]">
              GMC
            </strong>
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.1em] text-[#d8beff] sm:text-[0.75rem]">
              Scholarship Consultancy
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              className="group relative py-2 text-sm font-semibold text-white/72 transition hover:text-white"
              href={link.href}
              key={link.label}
            >
              {link.label}
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[#b467ff] via-[#f0ddff] to-[#8c36ff] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <motion.div
            animate={prefersReducedMotion ? undefined : { y: [0, -2, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
          >
          <Link
            className="btn-primary-site min-h-[48px] rounded-[18px] px-5 [font-family:'Outfit',sans-serif] text-sm font-semibold uppercase tracking-[0.03em]"
            to="/program"
          >
            <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/18 bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]">
              <ArrowUpRight size={15} />
            </span>
            <span className="relative">Book Consultation Session</span>
          </Link>
          </motion.div>
        </div>

        <button
          aria-label="Toggle navigation"
          className="inline-grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] md:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <Menu size={18} />
        </button>
      </div>
      </motion.div>

      {open ? (
        <motion.div
          className="mx-auto mt-2 max-w-[1320px] rounded-[24px] border border-white/10 bg-[#0d0b13]/96 px-4 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl md:hidden"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mx-auto grid w-full max-w-[1320px] gap-3 sm:px-1">
            {navLinks.map((link) => (
              <a
                className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white/84 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:border-[#b467ff40] hover:bg-[#b467ff12]"
                href={link.href}
                key={link.label}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link
              className="btn-primary-site mt-1 min-h-[50px] rounded-[18px] px-5 [font-family:'Outfit',sans-serif] text-sm font-semibold uppercase tracking-[0.03em]"
              onClick={() => setOpen(false)}
              to="/program"
            >
              <ArrowUpRight size={16} />
              Book Consultation Session
            </Link>
          </div>
        </motion.div>
      ) : null}
    </header>
  )
}

export default SiteNavbar
