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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(180,103,255,0.14),_transparent_26%),linear-gradient(180deg,_rgba(255,255,255,0.02)_0%,_rgba(255,255,255,0)_100%)]" />
      <div className="relative mx-auto w-full max-w-[1320px] px-4 py-10 sm:px-5 sm:py-12">
        <div className={`grid gap-8 ${compact ? 'lg:grid-cols-[1.1fr_0.9fr]' : 'lg:grid-cols-[1fr_0.7fr_0.7fr]'}`}>
          <div className="max-w-[34rem]">
            <div className="inline-flex items-center gap-3">
              <span className="relative h-8 w-8">
                <span className="absolute inset-0 rotate-45 skew-x-[-16deg] border-b-2 border-l-2 border-white/70" />
                <span className="absolute inset-[8px] rotate-45 skew-x-[-16deg] border-b-2 border-l-2 border-[#b467ff]" />
              </span>
              <span className="grid leading-none">
                <strong className="[font-family:'Outfit',sans-serif] text-[1.2rem] font-bold text-white">
                  GMC
                </strong>
                <span className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#d8beff]">
                  Scholarship Consultancy
                </span>
              </span>
            </div>

            <h2 className="mt-5 [font-family:'Outfit',sans-serif] text-[1.65rem] leading-[1.1] font-bold text-white sm:text-[2.15rem]">
              Clear strategy for students chasing
              <span className="block bg-gradient-to-r from-[#d28fff] via-[#b467ff] to-[#8c36ff] bg-clip-text text-transparent">
                fully funded admissions.
              </span>
            </h2>

            <p className="mt-4 max-w-[32rem] text-sm leading-7 text-white/64 sm:text-[0.98rem]">
              GMC helps students choose better universities, improve scholarship positioning,
              strengthen SOPs, and move with a cleaner application roadmap.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                className="btn-primary-site h-12 rounded-full px-5 text-sm font-semibold uppercase tracking-[0.04em]"
                to="/program"
              >
                Book Consultation
                <ArrowUpRight size={16} />
              </Link>
              <a
                className="btn-secondary-site h-12 rounded-full px-5 text-sm font-bold"
                href="https://wa.me/"
                rel="noreferrer"
                target="_blank"
              >
                <MessageCircle size={16} />
                WhatsApp Support
              </a>
            </div>
          </div>

          {!compact ? (
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#cfb1ff]">
                Explore
              </p>
              <div className="mt-4 grid gap-3">
                {footerLinks.map((link) => (
                  <a
                    className="text-sm font-semibold text-white/70 transition hover:text-white"
                    href={link.href}
                    key={link.label}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ) : null}

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#cfb1ff]">
              Contact
            </p>
            <div className="mt-4 grid gap-3">
              <a
                className="btn-secondary-site justify-start gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-white/82"
                href="https://wa.me/"
                rel="noreferrer"
                target="_blank"
              >
                <MessageCircle size={16} className="text-[#b467ff]" />
                WhatsApp booking support
              </a>
              <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white/82">
                <Phone size={16} className="text-[#b467ff]" />
                Response during active booking hours
              </div>
              <a
                className="text-sm font-semibold text-white/60 transition hover:text-white"
                href="#top"
              >
                Back to top
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/8 pt-5 text-xs text-white/48 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 GMC Scholarship Consultancy. All rights reserved.</p>
          <p>Designed for focused scholarship applicants who want strategy, not guesswork.</p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
