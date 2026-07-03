import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { HelpCircle, Minus, Plus } from 'lucide-react'
import { useState, useRef } from 'react'
import SectionReveal from '../SectionReveal'

const faqs = [
  {
    question: 'Who is this consultation best for?',
    answer:
      'It is best for students who want clearer scholarship direction, better university shortlisting, stronger SOP guidance, and honest feedback before applying.',
  },
  {
    question: 'Will you help me choose the university & scholarship?',
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
  const cardRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 })

  // Normalized cursor coordinates (-0.5 to 0.5)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Maps coordinates to 3D rotation angles
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { damping: 25, stiffness: 220 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { damping: 25, stiffness: 220 })
  const scale = useSpring(1, { damping: 15, stiffness: 250 })

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    
    const mouseX = e.clientX - rect.left - rect.width / 2
    const mouseY = e.clientY - rect.top - rect.height / 2
    x.set(mouseX / rect.width)
    y.set(mouseY / rect.height)

    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })

    setIsHovered(true)
    scale.set(1.015)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    scale.set(1)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-[22px] overflow-hidden border transition-colors duration-300 select-none [perspective:1000px] ${
        isOpen ? 'border-[#b467ff]/40 bg-[#161125]' : 'border-white/8 bg-[#100c19]'
      }`}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Reactive cursor spotlight glow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(150px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(180, 103, 255, 0.16), transparent 80%)`,
          }}
        />
      )}

      {/* active border neon glow */}
      {isOpen && (
        <div className="absolute inset-0 pointer-events-none border border-[#b467ff]/30 rounded-[22px] shadow-[inset_0_1px_1px_rgba(180,103,255,0.15),0_0_15px_rgba(180,103,255,0.06)]" />
      )}

      <button
        className="relative z-10 flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none"
        onClick={onToggle}
        type="button"
        style={{ transform: 'translateZ(20px)' }}
      >
        <span className="[font-family:'Outfit',sans-serif] text-[0.98rem] font-semibold text-white sm:text-[1.05rem]">
          {question}
        </span>
        <motion.span 
          className={`inline-grid h-9 w-9 shrink-0 place-items-center rounded-full text-white transition-colors ${
            isOpen ? 'bg-[#b467ff] shadow-[0_0_12px_rgba(180,103,255,0.5)] text-white' : 'bg-[#b467ff]/14 text-[#d7bbff]'
          }`}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {isOpen ? <Minus size={15} /> : <Plus size={15} />}
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            animate={{ height: 'auto', opacity: 1 }}
            className="relative z-10 overflow-hidden"
            exit={{ height: 0, opacity: 0 }}
            initial={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div 
              className="px-5 pb-4 text-xs.5 leading-6 text-white/70 sm:text-sm sm:leading-7"
              style={{ transform: 'translateZ(10px)' }}
            >
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="relative overflow-hidden bg-[#08080b] py-8 sm:py-10" id="faq">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(180,103,255,0.12),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(100,160,255,0.06),_transparent_24%)]" />
      <div className="relative mx-auto w-full max-w-[1320px] px-4 sm:px-5">
        <SectionReveal className="mb-6 text-center sm:mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#b467ff]/30 bg-[#b467ff]/10 px-4 py-1.5 text-[11px] font-semibold text-[#d9beff] shadow-[0_10px_24px_rgba(180,103,255,0.08)] sm:text-xs">
            <HelpCircle size={14} className="text-[#c1a0ff]" />
            Frequently Asked Questions
          </div>
          <h2 className="mt-3.5 [font-family:'Outfit',sans-serif] text-[1.65rem] font-bold leading-[1.06] text-white sm:text-[2.1rem] md:text-[2.5rem]">
            Common questions before
            <span className="block bg-gradient-to-r from-[#cf9eff] to-[#8c36ff] bg-clip-text text-transparent">
              booking your consultation.
            </span>
          </h2>
          <p className="mx-auto mt-2.5 max-w-[700px] text-sm leading-6 text-white/68">
            Short, direct answers so students know exactly what this session helps with and what
            it does not promise.
          </p>
        </SectionReveal>

        {/* Space-saving 2-column layout for FAQs */}
        <div className="mx-auto grid max-w-[1180px] gap-4 md:grid-cols-2 lg:gap-5">
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
