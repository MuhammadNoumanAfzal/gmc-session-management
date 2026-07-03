import { Menu, MessageCircle } from 'lucide-react'
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

  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-[#08080b]/78 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-4 py-3 sm:px-5">
        <a className="inline-flex items-center gap-3" href="#top">
          <span className="relative h-7 w-7">
            <span className="absolute inset-0 rotate-45 skew-x-[-16deg] border-b-2 border-l-2 border-white/70" />
            <span className="absolute inset-[7px] rotate-45 skew-x-[-16deg] border-b-2 border-l-2 border-[#b467ff]" />
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
              className="text-sm font-semibold text-white/72 transition hover:text-white"
              href={link.href}
              key={link.label}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-none bg-gradient-to-r from-[#bb72ff] to-[#9a4df8] px-5 [font-family:'Outfit',sans-serif] text-sm font-semibold uppercase text-white shadow-[0_14px_30px_rgba(140,54,255,0.22)] transition hover:-translate-y-0.5"
            to="/program"
          >
            <MessageCircle size={16} />
            Book Consultation Session
          </Link>
        </div>

        <button
          aria-label="Toggle navigation"
          className="inline-grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <Menu size={18} />
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/8 bg-[#0d0b13] px-4 py-4 md:hidden">
          <div className="mx-auto grid w-full max-w-[1320px] gap-3 sm:px-1">
            {navLinks.map((link) => (
              <a
                className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white/84"
                href={link.href}
                key={link.label}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link
              className="mt-1 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-none bg-gradient-to-r from-[#bb72ff] to-[#9a4df8] px-5 [font-family:'Outfit',sans-serif] text-sm font-semibold uppercase text-white"
              onClick={() => setOpen(false)}
              to="/program"
            >
              <MessageCircle size={16} />
              Book Consultation Session
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default SiteNavbar
