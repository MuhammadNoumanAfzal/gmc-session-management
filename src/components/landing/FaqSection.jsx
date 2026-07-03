import { AnimatePresence, motion } from 'framer-motion'
import { HelpCircle, Minus, Plus } from 'lucide-react'
import { useState } from 'react'
import SectionReveal from '../SectionReveal'

const faqs = [
  {
    question: 'Who is this consultation best for?',
    answer:
      'It is best for students who want clearer scholarship direction, better university shortlisting, stronger SOP guidance, and honest feedback before applying.',
  },
  {
    question: 'Will you help me choose the right universities and scholarships?',
    answer:
      'Yes. The session is designed to help you think more strategically about scholarship fit, university options, and where your profile has the best chance.',
  },
  {
    question: 'Do you review SOPs and supporting documents too?',
    answer:
      'Yes. We can discuss how to improve your SOP, documents, and overall presentation so your application feels stronger and more intentional.',
  },
  {
    question: 'Is this only for students with strong profiles?',
    answer:
      'No. It is also helpful for students starting from zero who need a roadmap, realistic expectations, and a better understanding of how to move forward.',
  },
  {
    question: 'Will this guarantee a scholarship?',
    answer:
      'No one can honestly guarantee that. What this session does offer is clearer strategy, fewer weak decisions, and better preparation for funded admissions.',
  },
  {
    question: 'What happens after the consultation?',
    answer:
      'You leave with more clarity on next steps, profile direction, application priorities, and what needs improvement before you start applying seriously.',
  },
]

function FaqItem({ answer, isOpen, onToggle, question }) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-white/[0.04] shadow-[0_14px_30px_rgba(0,0,0,0.14)]">
      <button
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        onClick={onToggle}
        type="button"
      >
        <span className="[font-family:'Outfit',sans-serif] text-[1rem] font-semibold text-white sm:text-[1.05rem]">
          {question}
        </span>
        <span className="inline-grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#b467ff]/14 text-[#d7bbff]">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            animate={{ height: 'auto', opacity: 1 }}
            className="overflow-hidden"
            exit={{ height: 0, opacity: 0 }}
            initial={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-5 pb-5 text-sm leading-7 text-white/70 sm:text-[15px]">
              {answer}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="relative overflow-hidden bg-[#08080b] py-12 sm:py-16" id="faq">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(180,103,255,0.12),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(100,160,255,0.06),_transparent_24%)]" />
      <div className="relative mx-auto w-full max-w-[1320px] px-4 sm:px-5">
        <SectionReveal className="mb-8 text-center sm:mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#b467ff]/30 bg-[#b467ff]/10 px-4 py-2 text-[11px] font-semibold text-[#d9beff] shadow-[0_10px_24px_rgba(180,103,255,0.08)] sm:text-xs">
            <HelpCircle size={14} />
            Frequently Asked Questions
          </div>
          <h2 className="mt-4 [font-family:'Outfit',sans-serif] text-[1.9rem] font-bold leading-[1.06] text-white sm:text-[2.5rem]">
            Common questions before
            <span className="block bg-gradient-to-r from-[#b467ff] to-[#8f43ff] bg-clip-text text-transparent">
              booking your consultation.
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-[700px] text-sm leading-7 text-white/68 sm:text-[15px]">
            Short, direct answers so students know exactly what this session helps with and what
            it does not promise.
          </p>
        </SectionReveal>

        <div className="mx-auto grid max-w-[980px] gap-4">
          {faqs.map((faq, index) => (
            <FaqItem
              answer={faq.answer}
              isOpen={openIndex === index}
              key={faq.question}
              onToggle={() => setOpenIndex((current) => (current === index ? -1 : index))}
              question={faq.question}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
