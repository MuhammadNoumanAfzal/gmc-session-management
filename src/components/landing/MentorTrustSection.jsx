import { motion } from 'framer-motion'
import { ArrowRight, GraduationCap, Sparkles, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionReveal from '../SectionReveal'

function MentorTrustSection() {
  const smoothEase = [0.22, 1, 0.36, 1]

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#060508_0%,#0b0910_38%,#130d1d_72%,#08070d_100%)] py-12 text-white sm:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(180,103,255,0.16),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(126,72,214,0.16),transparent_24%),radial-gradient(circle_at_68%_76%,rgba(84,46,142,0.18),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(212,191,255,0.12)_0%,rgba(212,191,255,0)_100%)]" />
      <div className="pointer-events-none absolute left-[-6%] top-[18%] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(180,103,255,0.22)_0%,rgba(180,103,255,0.05)_46%,transparent_72%)] blur-3xl" />
      <div className="pointer-events-none absolute right-[-8%] top-[12%] h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(126,72,214,0.2)_0%,rgba(126,72,214,0.05)_44%,transparent_74%)] blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-[1320px] gap-8 px-4 sm:px-5 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <SectionReveal className="order-1">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-[#b784ff]/24 bg-[linear-gradient(135deg,rgba(41,25,63,0.9)_0%,rgba(90,53,145,0.72)_100%)] px-4 py-2 text-sm font-bold text-[#f6ecff] shadow-[0_18px_34px_rgba(72,36,120,0.2)]"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.75, ease: smoothEase }}
          >
            <GraduationCap size={16} />
            Your Scholarship Mentor
          </motion.div>

          <h2 className="mt-5 max-w-[760px] [font-family:'Outfit',sans-serif] text-[2rem] leading-[1.02] font-bold text-white sm:text-[2.6rem] md:text-[3.35rem]">
            Meet{' '}
            <span className="bg-[linear-gradient(90deg,#f5ecff_0%,#cf9dff_34%,#9b57ff_100%)] bg-clip-text text-transparent">
              GMC Guidance
            </span>
          </h2>

          <p className="mt-4 max-w-[720px] text-[1rem] leading-7 text-[#d8d0e4] sm:text-[1.08rem]">
            Strategic mentorship for students who want sharper scholarship decisions, cleaner
            positioning, and a more confident application path.
          </p>

          <div className="mt-6 max-w-[760px] space-y-5 text-[0.98rem] leading-7 text-white/74 sm:text-[1.05rem]">
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

          <div className="mt-7 grid gap-3 sm:max-w-[620px] sm:grid-cols-3">
            <motion.div
              className="rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.025)_100%)] px-4 py-4 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, delay: 0.04, ease: smoothEase }}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#cfb1ff]">
                Direction
              </p>
              <p className="mt-2 text-sm leading-6 text-white/78">Know where to apply and why.</p>
            </motion.div>
            <motion.div
              className="rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.025)_100%)] px-4 py-4 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, delay: 0.11, ease: smoothEase }}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#cfb1ff]">
                Feedback
              </p>
              <p className="mt-2 text-sm leading-6 text-white/78">
                Improve your profile and documents.
              </p>
            </motion.div>
            <motion.div
              className="rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.025)_100%)] px-4 py-4 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, delay: 0.18, ease: smoothEase }}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#cfb1ff]">
                Clarity
              </p>
              <p className="mt-2 text-sm leading-6 text-white/78">
                Move forward with a cleaner plan.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, delay: 0.08, ease: smoothEase }}
          >
            <Link
              className="btn-primary-site min-h-[68px] rounded-[22px] px-6 text-center [font-family:'Outfit',sans-serif] text-sm font-semibold uppercase sm:min-h-[78px] sm:text-base"
              to="/program"
            >
              Book a Consultation <ArrowRight size={18} />
            </Link>
            <p className="max-w-[320px] text-sm leading-6 text-white/56">
              Swap this with your real founder or mentor image whenever you are ready.
            </p>
          </motion.div>
        </SectionReveal>

        <SectionReveal className="order-2">
          <div className="relative mx-auto max-w-[540px]">
            <motion.div
              className="pointer-events-none absolute -left-6 top-8 h-[84%] w-[90%] rounded-[34px] border border-[#b784ff]/14 bg-[linear-gradient(180deg,rgba(180,103,255,0.16)_0%,rgba(180,103,255,0.03)_100%)]"
              animate={{ y: [0, -10, 0], rotate: [-2, 0, -2] }}
              transition={{ duration: 7.8, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
              className="absolute right-[-6px] top-[-16px] rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(26,18,38,0.96)_0%,rgba(60,37,95,0.84)_100%)] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[#e3cfff] shadow-[0_14px_28px_rgba(38,18,66,0.22)]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.85, delay: 0.18, ease: smoothEase }}
            >
              Trusted Guidance
            </motion.div>

            <motion.div
              className="absolute -left-4 top-[18%] z-[2] rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,rgba(22,16,32,0.94)_0%,rgba(43,29,63,0.88)_100%)] px-4 py-3 text-[#f5ebff] shadow-[0_18px_34px_rgba(28,14,49,0.24)] backdrop-blur-md"
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{ y: [0, -8, 0] }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.22, ease: smoothEase }}
            >
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[#cfb1ff]">
                <Sparkles size={14} />
                Mentor Insight
              </div>
              <p className="mt-2 text-sm font-semibold leading-5">Profile-first strategy, not guesswork.</p>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-[30px] border border-[#b47cff]/34 bg-[linear-gradient(180deg,#f3e8d8_0%,#2a1a3b_18%,#110c18_100%)] p-2 shadow-[0_26px_70px_rgba(20,10,36,0.34)]"
              initial={{ opacity: 0, y: 28, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: smoothEase }}
            >
              <div className="pointer-events-none absolute inset-x-[16%] top-0 h-24 bg-[radial-gradient(circle,rgba(226,193,255,0.42)_0%,rgba(226,193,255,0.12)_38%,transparent_72%)] blur-2xl" />
              <div className="pointer-events-none absolute -left-8 top-[14%] h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(180,103,255,0.18)_0%,rgba(180,103,255,0.06)_42%,transparent_72%)] blur-3xl" />
              <div className="pointer-events-none absolute -right-10 bottom-[8%] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(126,72,214,0.18)_0%,rgba(126,72,214,0.05)_44%,transparent_74%)] blur-3xl" />

              <div className="overflow-hidden rounded-[24px]">
                <motion.img
                  className="h-full w-full object-cover"
                  src="/photo.png"
                  alt="GMC scholarship mentor portrait"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-5 left-5 max-w-[230px] rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(17,12,26,0.94)_0%,rgba(31,21,46,0.9)_100%)] px-4 py-4 backdrop-blur-md shadow-[0_18px_34px_rgba(18,9,31,0.28)]"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ y: [0, -7, 0] }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.9, delay: 0.22, ease: smoothEase }}
            >
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[#cfb1ff]">
                <Target size={14} />
                Student-first support
              </div>
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
