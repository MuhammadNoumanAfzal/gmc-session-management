import { motion } from 'framer-motion'
import { Compass, FileText, GraduationCap, SearchCheck } from 'lucide-react'
import SectionReveal from '../SectionReveal'

const audienceCards = [
  {
    icon: GraduationCap,
    title: 'Students planning funded admissions',
    description: 'Ideal for applicants who want clearer direction before starting scholarship applications.',
  },
  {
    icon: SearchCheck,
    title: 'Students confused about where to apply',
    description: 'Best for those struggling with university shortlisting, fit, and scholarship targeting.',
  },
  {
    icon: FileText,
    title: 'Students needing SOP and document guidance',
    description: 'Helpful if your documents feel weak, generic, or not aligned with your goals.',
  },
  {
    icon: Compass,
    title: 'Students who want a roadmap, not random advice',
    description: 'Perfect for serious applicants who want practical feedback and step-by-step clarity.',
  },
]

function SessionAudienceSection() {
  return (
    <section className="relative bg-[#f8f6fb] py-10 sm:py-14" id="who-its-for">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,#08080b_0%,rgba(8,8,11,0.68)_22%,rgba(248,246,251,0.94)_78%,#f8f6fb_100%)]" />
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-5">
        <SectionReveal className="relative z-10 mb-8 text-center sm:mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#cfa5ff] bg-white px-4 py-2 text-[11px] font-semibold text-[#8d41ef] shadow-[0_10px_24px_rgba(180,103,255,0.08)] sm:text-xs">
            <GraduationCap size={14} />
            For Whom Is This Session For?
          </div>
          <h2 className="mt-4 [font-family:'Outfit',sans-serif] text-[1.9rem] font-bold leading-[1.06] text-[#121019] sm:text-[2.5rem]">
            Built for students who want
            <span className="block bg-gradient-to-r from-[#b467ff] to-[#8f43ff] bg-clip-text text-transparent">
              clarity before they apply.
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-[700px] text-sm leading-7 text-[#4a4156] sm:text-[15px]">
            This session is not for casual browsing. It is for students who want smarter decisions,
            stronger documents, and a cleaner scholarship roadmap.
          </p>
        </SectionReveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {audienceCards.map((card, index) => {
            const Icon = card.icon

            return (
              <motion.article
                className="rounded-[24px] border border-white/10 bg-[#120f19] p-5 shadow-[0_18px_40px_rgba(29,18,45,0.16)]"
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
              >
                <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-2xl bg-[#b467ff]/16 text-[#d7bbff]">
                  <Icon size={22} />
                </div>
                <h3 className="[font-family:'Outfit',sans-serif] text-lg font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/68">{card.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SessionAudienceSection
