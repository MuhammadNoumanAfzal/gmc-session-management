import { motion } from 'framer-motion'
import { BadgeCheck, ShieldCheck } from 'lucide-react'
import SectionReveal from '../SectionReveal'

const guaranteePoints = [
  'Attend the consultation and follow the guidance seriously.',
  'Apply the profile, shortlist, SOP, and document feedback properly.',
  'Show real implementation if you still feel the session did not deliver value.',
]

function GuaranteeSeal() {
  return (
    <motion.div
      className="relative mx-auto h-[210px] w-[210px] sm:h-[260px] sm:w-[260px]"
      animate={{ rotate: [0, 2, 0, -2, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#8f43ff,#b467ff,#dba8ff,#8f43ff)] p-[12px] shadow-[0_24px_60px_rgba(180,103,255,0.24)]">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
          <div className="flex h-[82%] w-[82%] flex-col items-center justify-center rounded-full border-[10px] border-[#8f43ff] bg-[radial-gradient(circle_at_top,_rgba(180,103,255,0.14),_transparent_42%),linear-gradient(180deg,#ffffff_0%,#f7f2fd_100%)] text-center">
            <div className="mb-2 inline-grid h-10 w-10 place-items-center rounded-full bg-[#8f43ff] text-white sm:h-12 sm:w-12">
              <ShieldCheck size={22} />
            </div>
            <p className="[font-family:'Sora',sans-serif] text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#6f35cf] sm:text-[10px]">
              GMC Guarantee
            </p>
            <p className="mt-1.5 [font-family:'Sora',sans-serif] text-[1.9rem] font-extrabold leading-none text-[#121019] sm:text-[2.3rem]">
              100%
            </p>
            <p className="mt-2 max-w-[118px] text-[9px] font-semibold uppercase leading-[1.45] tracking-[0.12em] text-[#5b5268] sm:max-w-[132px] sm:text-[10px]">
              Value-driven strategy commitment
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function GuaranteeSection() {
  return (
    <section className="relative bg-[#f8f6fb] py-8 sm:py-10" id="money-back">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,#08080b_0%,rgba(8,8,11,0.68)_22%,rgba(248,246,251,0.94)_78%,#f8f6fb_100%)]" />

      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-5">
        <div className="relative z-10 mb-6 flex justify-center sm:mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#cfa5ff] bg-white/92 px-4 py-2 text-[11px] font-semibold text-[#8d41ef] shadow-[0_10px_24px_rgba(180,103,255,0.08)] backdrop-blur-md sm:text-xs">
            <BadgeCheck size={14} />
            Zero fluff. Real strategy. Clear accountability.
          </div>
        </div>

        <SectionReveal className="rounded-[28px] border border-white/10 bg-[#120f19] p-5 text-white shadow-[0_18px_50px_rgba(29,18,45,0.18)] sm:p-6 lg:p-7">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#f1e6ff] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#9d4dff] sm:text-xs">
                <BadgeCheck size={15} />
                Here&apos;s the Guarantee
              </div>

              <h2 className="mt-4 max-w-[640px] [font-family:'Outfit',sans-serif] text-[1.7rem] font-bold leading-[1.06] text-white sm:text-[2.2rem]">
                Serious guidance.
                <span className="block bg-gradient-to-r from-[#b467ff] to-[#8f43ff] bg-clip-text text-transparent">
                  Serious accountability.
                </span>
              </h2>

              <p className="mt-3 max-w-[640px] text-sm leading-6 text-white/72 sm:text-[15px]">
                We don&apos;t believe in empty promises. We believe in honest strategy, practical
                feedback, and real implementation. If you fully apply the session guidance and
                still feel it delivered no value, we review your case fairly.
              </p>

              <div className="mt-5 grid gap-3">
                {guaranteePoints.map((point) => (
                  <div
                    className="flex items-start gap-3 rounded-[20px] border border-white/10 bg-white/[0.04] px-3.5 py-3.5"
                    key={point}
                  >
                    <div className="mt-1 inline-grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#b467ff] text-white">
                      <ShieldCheck size={14} />
                    </div>
                    <p className="text-sm leading-6 text-white/84 sm:text-[15px]">{point}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[22px] border border-white/10 bg-[#0d0b13] px-4 py-4 text-white">
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#cfb1ff] sm:text-xs">
                  Simple Principle
                </p>
                <p className="mt-2 [font-family:'Outfit',sans-serif] text-lg font-semibold leading-tight sm:text-xl">
                  This only works if you execute.
                </p>
                <p className="mt-1.5 text-sm leading-5 text-white/72">
                  That is why implementation matters as much as the advice itself.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <GuaranteeSeal />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

export default GuaranteeSection
