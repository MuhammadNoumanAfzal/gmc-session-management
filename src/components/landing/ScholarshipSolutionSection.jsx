import { motion } from 'framer-motion'
import {
  ArrowRight,
  BookOpenCheck,
  BrainCircuit,
  CalendarClock,
  FileCheck2,
  GraduationCap,
  Handshake,
  MessageSquareText,
  Sparkles,
  Target,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionReveal from '../SectionReveal'

const workflowCards = [
  {
    icon: GraduationCap,
    title: 'University Match',
    description: 'Shortlist smarter with universities that match your funding chances.',
    details:
      'We help you avoid random applications and focus on programs where your profile, budget, and scholarship potential align.',
  },
  {
    icon: MessageSquareText,
    title: 'SOP Storyline',
    description: 'Tell your story clearly so your application reads with purpose.',
    details:
      'Shape your motivation, achievements, and career direction into an SOP structure that feels sharper and more convincing.',
  },
  {
    icon: FileCheck2,
    title: 'Document Review',
    description: 'Catch weak spots early before they turn into expensive mistakes.',
    details:
      'We flag missing proof, weak framing, and presentation gaps across the documents that matter most for scholarship review.',
  },
  {
    icon: Target,
    title: 'Deadline Roadmap',
    description: 'Know the next move with a cleaner timeline and fewer blind spots.',
    details:
      'Get a more realistic application order so you know what to prepare first, what to improve next, and when to submit.',
  },
  {
    icon: BrainCircuit,
    title: 'Profile Strategy',
    description: 'Strengthen your positioning before you start sending applications.',
    details:
      'We identify what makes your profile competitive and what needs improvement so your effort goes into the right upgrades.',
  },
  {
    icon: CalendarClock,
    title: 'Application Timing',
    description: 'Move with better timing instead of rushing near deadlines.',
    details:
      'Plan your scholarship journey around document readiness, exam timing, shortlist quality, and realistic submission windows.',
  },
  {
    icon: BookOpenCheck,
    title: 'Scholarship Fit',
    description: 'Focus on opportunities that make sense for your academic direction.',
    details:
      'We help filter out mismatched programs and highlight scholarship routes where your background has a stronger case.',
  },
  {
    icon: Handshake,
    title: 'Consultation Clarity',
    description: 'Leave the session knowing exactly what to do next.',
    details:
      'You walk away with clearer priorities, fewer distractions, and a more confident plan for applications and funding.',
  },
]

function ScholarshipSolutionSection() {
  const sliderCards = [...workflowCards, ...workflowCards]

  return (
    <section
      className="relative mt-6 overflow-hidden bg-[linear-gradient(180deg,#f7f3fb_0%,#f3eef9_52%,#efe8f8_100%)] py-10 text-[#09090b] sm:mt-8 sm:py-12 lg:min-h-screen lg:py-8"
      id="why-session-matters"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#0b0910] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-[-10%] w-[28%] bg-[radial-gradient(circle_at_center,rgba(180,103,255,0.16)_0%,rgba(180,103,255,0.06)_42%,transparent_76%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-y-0 right-[-8%] w-[30%] bg-[radial-gradient(circle_at_center,rgba(143,67,255,0.14)_0%,rgba(143,67,255,0.05)_40%,transparent_76%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-[24%] top-[10%] h-[220px] bg-[radial-gradient(circle,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.35)_38%,transparent_78%)] blur-3xl" />
      <div className="relative mx-auto flex w-full max-w-[1320px] items-center px-4 sm:px-5 lg:min-h-screen">
        <div className="w-full">
        <SectionReveal className="mx-auto max-w-[720px] text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#cfa5ff] bg-white px-3 py-1.5 text-[11px] font-semibold text-[#8d41ef] shadow-[0_10px_24px_rgba(180,103,255,0.08)] sm:text-xs">
            <Sparkles size={16} />
            A smarter path for ambitious scholarship applicants
          </p>
          <h2 className="mx-auto max-w-[980px] [font-family:'Outfit',sans-serif] text-[1.35rem] leading-[1.08] font-bold text-[#0d0b12] sm:text-[1.75rem] md:text-[2.05rem]">
            <span className="bg-gradient-to-r from-[#1b1722] to-[#8c36ff] bg-clip-text text-transparent">
              Stop guessing and build a winning scholarship plan around your profile.
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

        <SectionReveal className="mt-6">
          <div className="scholarship-slider relative overflow-hidden py-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-12 bg-[linear-gradient(90deg,#f3eef9_0%,rgba(243,238,249,0)_100%)] sm:w-20" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-12 bg-[linear-gradient(270deg,#f1ebf8_0%,rgba(241,235,248,0)_100%)] sm:w-20" />
              <div className="scholarship-slider-track flex w-max gap-4">
                {sliderCards.map((card, index) => {
                  const Icon = card.icon

                  return (
                    <article
                      className="scholarship-slider-card h-[250px] w-[250px] shrink-0 [perspective:1400px] sm:h-[270px] sm:w-[280px]"
                      key={`${card.title}-${index}`}
                    >
                      <div className="scholarship-slider-card-inner relative h-full w-full">
                        <div className="scholarship-slider-card-face scholarship-slider-card-front rounded-[26px] bg-[linear-gradient(180deg,#37204f_0%,#261736_100%)] p-5 shadow-[0_18px_36px_rgba(28,13,48,0.22),inset_0_1px_0_rgba(255,255,255,0.05)]">
                          <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-2xl bg-[#b467ff]/16 text-[#dfc1ff]">
                            <Icon size={20} />
                          </div>
                          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#d4b6ff]">
                            Step {((index % workflowCards.length) + 1).toString().padStart(2, '0')}
                          </p>
                          <h3 className="[font-family:'Outfit',sans-serif] text-[1.35rem] leading-[1.05] font-semibold text-white">
                            {card.title}
                          </h3>
                          <p className="mt-3 text-sm leading-6 text-white/72">
                            {card.description}
                          </p>
                        </div>

                        <div className="scholarship-slider-card-face scholarship-slider-card-back rounded-[26px] bg-[linear-gradient(145deg,#6f35c7_0%,#4b2490_50%,#341761_100%)] p-5 text-white shadow-[0_18px_36px_rgba(44,16,82,0.24)]">
                          <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-[#f1deff]">
                            <Icon size={20} />
                          </div>
                          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#f1deff]">
                            More insight
                          </p>
                          <h3 className="[font-family:'Outfit',sans-serif] text-[1.2rem] leading-[1.08] font-semibold">
                            {card.title}
                          </h3>
                          <p className="mt-3 text-sm leading-6 text-white/84">
                            {card.details}
                          </p>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
          </div>
        </SectionReveal>

        <SectionReveal className="mt-4 flex justify-center lg:mt-3">
          <Link
            className="btn-primary-site min-h-[62px] w-full max-w-[620px] rounded-[24px] px-5 text-center [font-family:'Outfit',sans-serif] text-base font-semibold uppercase sm:min-h-[72px] sm:text-[1.05rem]"
            to="/program"
          >
            Book Your Consultation <ArrowRight size={18} />
          </Link>
        </SectionReveal>
        </div>
      </div>
    </section>
  )
}

export default ScholarshipSolutionSection
