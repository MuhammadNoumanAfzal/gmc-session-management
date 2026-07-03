import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCheck,
  FileCheck2,
  GraduationCap,
  MessageSquareText,
  Sparkles,
  Target,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionReveal from '../SectionReveal'

const blueprintPoints = [
  'Match your profile with the right scholarships',
  'Build a smarter university shortlist',
  'Strengthen SOPs and core documents',
]

const supportModes = [
  'Strong profile, weak strategy',
  'Starting from zero, need a roadmap',
]

const workflowCards = [
  {
    icon: GraduationCap,
    title: 'University Match',
    description: 'Shortlist smarter.',
  },
  {
    icon: MessageSquareText,
    title: 'SOP Storyline',
    description: 'Tell your story clearly.',
  },
  {
    icon: FileCheck2,
    title: 'Document Review',
    description: 'Catch gaps early.',
  },
  {
    icon: Target,
    title: 'Deadline Roadmap',
    description: 'Know the next move.',
  },
]

function ScholarshipSolutionSection() {
  return (
    <section
      className="relative mt-6 bg-[#f8f6fb] py-12 text-[#09090b] sm:mt-8 sm:py-14"
      id="why-session-matters"
    >
      <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#0b0910] to-transparent" />
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-5">
        <SectionReveal className="mx-auto max-w-[720px] text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#cfa5ff] bg-white px-3 py-1.5 text-[11px] font-semibold text-[#8d41ef] shadow-[0_10px_24px_rgba(180,103,255,0.08)] sm:text-xs">
            <Sparkles size={16} />
            A smarter path for ambitious scholarship applicants
          </p>
          <h2 className="mx-auto max-w-[760px] [font-family:'Outfit',sans-serif] text-[1.75rem] leading-[1.05] font-bold text-[#0d0b12] sm:text-[2.35rem] md:text-[2.9rem]">
            Stop guessing your scholarship path.
            <span className="block bg-gradient-to-r from-[#b467ff] to-[#8c36ff] bg-clip-text text-transparent">
              Get a winning plan built around your profile.
            </span>
          </h2>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5 text-[11px] font-semibold text-[#5d526c] sm:text-xs">
            <span className="rounded-full border border-[#e7ddf4] bg-white px-3 py-1.5">
              Clear direction
            </span>
            <span className="rounded-full border border-[#e7ddf4] bg-white px-3 py-1.5">
              Honest profile feedback
            </span>
            <span className="rounded-full border border-[#e7ddf4] bg-white px-3 py-1.5">
              Stronger scholarship applications
            </span>
          </div>
        </SectionReveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-2 lg:items-stretch">
          <SectionReveal className="flex h-full flex-col rounded-[28px] border border-white/10 bg-[#120f19] p-5 shadow-[0_16px_50px_rgba(29,18,45,0.18)] sm:p-6">
            <div className="mb-4 inline-flex rounded-full bg-[#b467ff]/14 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#d8beff] sm:text-xs">
              What You Need
            </div>
            <h3 className="[font-family:'Outfit',sans-serif] text-[1.45rem] leading-[1.1] font-semibold text-white sm:text-[1.9rem]">
              A focused scholarship plan with expert feedback.
            </h3>

            <div className="mt-5 grid gap-3">
              {blueprintPoints.map((point) => (
                <div
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-3.5 py-3"
                  key={point}
                >
                  <div className="mt-0.5 inline-grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#15c466] text-white">
                    <CheckCheck size={14} />
                  </div>
                  <p className="text-sm font-medium leading-5 text-white/84 sm:text-[15px]">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-[22px] border border-white/10 bg-[#0d0b13] p-4 text-white sm:p-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#cfb1ff] sm:text-xs">
                Best for
              </p>
              <div className="mt-3 grid gap-2.5">
                {supportModes.map((item) => (
                  <div
                    className="rounded-2xl border border-white/10 bg-white/5 px-3.5 py-3 text-sm leading-5 text-white/90"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <Link
                className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-[#d7bbff] transition hover:text-white sm:text-sm"
                to="/program"
              >
                See the process <ArrowRight size={16} />
              </Link>
            </div>

          </SectionReveal>

          <SectionReveal className="relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(180,103,255,0.16),_transparent_28%),linear-gradient(180deg,_#120f19_0%,_#0d0b13_100%)] p-5 shadow-[0_16px_50px_rgba(29,18,45,0.18)] sm:p-6">
            <div className="absolute right-[-30px] top-[-20px] h-32 w-32 rounded-full bg-[#c792ff]/30 blur-3xl" />
            <div className="absolute bottom-0 left-[-20px] h-28 w-28 rounded-full bg-[#8ec5ff]/15 blur-3xl" />

            <div className="mb-5 flex flex-wrap items-center gap-2">
              <div className="rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-white sm:text-xs">
                Process View
              </div>
              <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold text-[#d4b6ff] sm:text-xs">
                Scholarship workflow
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {workflowCards.map((card, index) => {
                const Icon = card.icon

                return (
                  <motion.article
                    key={card.title}
                    className="relative rounded-[24px] border border-white/10 bg-white/[0.05] p-4 shadow-[0_14px_30px_rgba(27,16,45,0.16)] backdrop-blur-md"
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.08 * index,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ y: -6 }}
                  >
                    <div className="mb-3 inline-grid h-10 w-10 place-items-center rounded-2xl bg-[#b467ff]/14 text-[#d7bbff]">
                      <Icon size={18} />
                    </div>
                    <h4 className="[font-family:'Outfit',sans-serif] text-lg font-semibold text-white">
                      {card.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-5 text-white/68">
                      {card.description}
                    </p>
                  </motion.article>
                )
              })}

              <motion.div
                className="rounded-[24px] border border-[#dbc5f7] bg-[#16111f] px-5 py-5 text-white shadow-[0_16px_34px_rgba(20,10,34,0.14)] md:col-span-2"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#d4b6ff] sm:text-xs">
                  Why GMC
                </p>
                <p className="mt-2 [font-family:'Outfit',sans-serif] text-xl font-semibold leading-tight sm:text-2xl">
                  Strategy first. Confidence throughout.
                </p>
              </motion.div>
            </div>
          </SectionReveal>
        </div>

        <SectionReveal className="mt-5 flex justify-center">
          <Link
            className="btn-primary-site min-h-[70px] w-full max-w-[620px] rounded-[24px] px-5 text-center [font-family:'Outfit',sans-serif] text-base font-semibold uppercase sm:min-h-[82px] sm:text-[1.15rem]"
            to="/program"
          >
            Book Your Consultation <ArrowRight size={18} />
          </Link>
        </SectionReveal>
      </div>
    </section>
  )
}

export default ScholarshipSolutionSection
