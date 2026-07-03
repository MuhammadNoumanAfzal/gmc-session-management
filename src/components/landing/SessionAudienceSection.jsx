import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
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

function TiltAudienceCard({ card, index }) {
  const cardRef = useRef(null)
  const Icon = card.icon
  const [isHovered, setIsHovered] = useState(false)
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 })

  // Normalized cursor positions (-0.5 to 0.5)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Maps coordinates to 3D rotation angles
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [14, -14]), { damping: 20, stiffness: 200 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-14, 14]), { damping: 20, stiffness: 200 })
  const scale = useSpring(1, { damping: 15, stiffness: 250 })

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    
    // Normalized position mapping
    const mouseX = e.clientX - rect.left - rect.width / 2
    const mouseY = e.clientY - rect.top - rect.height / 2
    x.set(mouseX / rect.width)
    y.set(mouseY / rect.height)

    // Spotlight tracking position
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
    
    setIsHovered(true)
    scale.set(1.03)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    scale.set(1)
    setIsHovered(false)
  }

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,#151121_0%,#0c0a13_100%)] p-5.5 shadow-[0_16px_40px_rgba(11,8,18,0.38),inset_0_1px_0_rgba(255,255,255,0.06)] cursor-pointer select-none [perspective:1200px] overflow-hidden"
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Dynamic glow overlay around border */}
      {isHovered && (
        <div 
          className="pointer-events-none absolute -inset-px rounded-[24px] opacity-100 transition-opacity duration-300 z-10" 
          style={{
            border: '1px solid rgba(180, 103, 255, 0.25)',
            background: `radial-gradient(100px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(180, 103, 255, 0.15), transparent 80%)`
          }}
        />
      )}

      {/* Reactive cursor spotlight glow behind text */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(180px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(180, 103, 255, 0.18), transparent 80%)`,
          }}
        />
      )}

      {/* Floating 3D Icon Box */}
      <div 
        className="relative z-10 mb-4 inline-grid h-11 w-11 place-items-center rounded-2xl border border-white/8 bg-[#2d1e45]/80 text-[#d7bbff] shadow-[0_4px_12px_rgba(0,0,0,0.25)]"
        style={{ transform: 'translateZ(25px)' }}
      >
        <Icon size={20} />
      </div>

      {/* Floating 3D Title */}
      <h3 
        className="relative z-10 [font-family:'Outfit',sans-serif] text-base leading-tight font-semibold text-white sm:text-lg"
        style={{ transform: 'translateZ(30px)' }}
      >
        {card.title}
      </h3>

      {/* Floating 3D Description */}
      <p 
        className="relative z-10 mt-2.5 text-xs leading-6 text-white/72 sm:text-sm"
        style={{ transform: 'translateZ(15px)' }}
      >
        {card.description}
      </p>
    </motion.article>
  )
}

function SessionAudienceSection() {
  return (
    <section className="relative bg-[#f8f6fb] py-8 sm:py-10" id="who-its-for">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,#08080b_0%,rgba(8,8,11,0.68)_22%,rgba(248,246,251,0.94)_78%,#f8f6fb_100%)]" />
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-5">
        <SectionReveal className="relative z-10 mb-6 text-center sm:mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#cfa5ff]/40 bg-white px-4 py-1.5 text-[11px] font-semibold text-[#8d41ef] shadow-[0_10px_24px_rgba(180,103,255,0.08)] sm:text-xs">
            <GraduationCap size={14} className="text-[#8c36ff]" />
            For Whom Is This Session For?
          </div>
          <h2 className="mt-3.5 [font-family:'Outfit',sans-serif] text-[1.65rem] font-bold leading-[1.06] text-[#121019] sm:text-[2.1rem] md:text-[2.5rem]">
            Built for students who want
            <span className="block bg-gradient-to-r from-[#cf9eff] to-[#8c36ff] bg-clip-text text-transparent">
              clarity before they apply.
            </span>
          </h2>
          <p className="mx-auto mt-2.5 max-w-[700px] text-sm leading-6 text-[#4a4156]">
            This session is not for casual browsing. It is for students who want smarter decisions,
            stronger documents, and a cleaner scholarship roadmap.
          </p>
        </SectionReveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {audienceCards.map((card, index) => (
            <TiltAudienceCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SessionAudienceSection
