import { motion } from 'framer-motion'
import { ArrowRight, GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionReveal from '../SectionReveal'

function MentorTrustSection() {
  const smoothEase = [0.22, 1, 0.36, 1]

  return (
    <section className="relative overflow-hidden bg-[#08080b] py-10 text-white sm:py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(180,103,255,0.12),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(100,160,255,0.08),_transparent_24%)]" />
      <div className="relative mx-auto grid w-full max-w-[1320px] gap-6 px-4 sm:px-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <SectionReveal className="order-1">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d984ff] to-[#b35ef6] px-4 py-2 text-sm font-bold text-white shadow-[0_14px_30px_rgba(179,94,246,0.18)]">
            <GraduationCap size={16} />
            Your Scholarship Mentor
          </div>

          <h2 className="mt-4 [font-family:'Outfit',sans-serif] text-[2rem] leading-[1.05] font-bold text-white sm:text-[2.6rem] md:text-[3.35rem]">
            Meet <span className="bg-gradient-to-r from-[#b467ff] to-[#d07dff] bg-clip-text text-transparent">GMC Guidance</span>
          </h2>

          <div className="mt-5 max-w-[760px] space-y-5 text-[0.98rem] leading-7 text-white/78 sm:text-[1.05rem]">
            <p>
              GMC is built for students who want more than random advice. You get clear direction,
              stronger scholarship positioning, and honest feedback before you invest months into
              applications.
            </p>

            <p>
              We help you shortlist the right universities, improve your SOP and documents, and
              move with a cleaner submission strategy so every application feels more intentional.
            </p>

            <p>
              The goal is simple: less confusion, fewer weak applications, and a better shot at
              fully funded opportunities.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:max-w-[560px] sm:grid-cols-3">
            <div className="rounded-[20px] border border-white/10 bg-white/[0.04] px-3.5 py-3.5 backdrop-blur-md">
              <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#cfb1ff]">
                Direction
              </p>
              <p className="mt-2 text-sm leading-6 text-white/75">Know where to apply and why.</p>
            </div>
            <div className="rounded-[20px] border border-white/10 bg-white/[0.04] px-3.5 py-3.5 backdrop-blur-md">
              <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#cfb1ff]">
                Feedback
              </p>
              <p className="mt-2 text-sm leading-6 text-white/75">Improve your profile and documents.</p>
            </div>
            <div className="rounded-[20px] border border-white/10 bg-white/[0.04] px-3.5 py-3.5 backdrop-blur-md">
              <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#cfb1ff]">
                Clarity
              </p>
              <p className="mt-2 text-sm leading-6 text-white/75">Move forward with a cleaner plan.</p>
            </div>
          </div>

          <motion.div
            className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, delay: 0.08, ease: smoothEase }}
          >
            <Link
              className="inline-flex min-h-[68px] items-center justify-center gap-3 rounded-none bg-gradient-to-r from-[#bb72ff] to-[#9a4df8] px-6 text-center [font-family:'Outfit',sans-serif] text-sm font-semibold uppercase text-white shadow-[0_18px_40px_rgba(140,54,255,0.25)] transition hover:-translate-y-0.5 sm:min-h-[78px] sm:text-base"
              to="/program"
            >
              Book a Consultation <ArrowRight size={18} />
            </Link>
            <p className="max-w-[320px] text-sm leading-6 text-white/58">
              Replace the left image with your real mentor or founder photo later.
            </p>
          </motion.div>
        </SectionReveal>

        <SectionReveal className="order-2">
          <div className="relative mx-auto max-w-[500px]">
            <div className="absolute left-[-14px] top-8 h-[82%] w-[92%] rounded-[30px] border border-white/8 bg-[#b467ff]/10 blur-[1px]" />
            <motion.div
              className="absolute right-[-10px] top-[-12px] rounded-full border border-white/10 bg-[#15121c] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[#d4b6ff]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.85, delay: 0.18, ease: smoothEase }}
            >
              Trusted Guidance
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-[28px] border border-[#c56fff]/70 bg-[linear-gradient(180deg,#f5ead8_0%,#1b161f_100%)] p-2 shadow-[0_24px_60px_rgba(117,63,173,0.18)]"
              initial={{ opacity: 0, y: 28, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: smoothEase }}
            >
              <div className="overflow-hidden rounded-[22px]">
                <img
                  className="h-full w-full object-cover"
                  src="/photo.png"
                  alt="GMC scholarship mentor portrait"
                />
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-4 left-4 max-w-[220px] rounded-[22px] border border-white/10 bg-[#120f19]/92 px-3.5 py-3.5 backdrop-blur-md"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.9, delay: 0.22, ease: smoothEase }}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#cfb1ff]">
                Student-first support
              </p>
              <p className="mt-2 [font-family:'Outfit',sans-serif] text-lg font-semibold leading-tight text-white">
                Honest advice before costly mistakes.
              </p>
            </motion.div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

export default MentorTrustSection
