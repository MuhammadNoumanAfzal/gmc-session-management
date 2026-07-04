import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionReveal from '../../components/SectionReveal'

function ProgramHeaderCard({
  headerRef,
  isHeaderHovered,
  onMouseLeave,
  onMouseMove,
  spotlight,
}) {
  return (
    <SectionReveal>
      <div
        ref={headerRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="relative overflow-hidden rounded-[24px] border border-white/8 bg-[#100c1a]/95 px-5 py-4.5 text-white shadow-[0_24px_68px_rgba(8,8,11,0.45)] sm:px-6"
      >
        {isHeaderHovered && (
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-40 transition-opacity duration-300"
            style={{
              background: `radial-gradient(320px circle at ${spotlight.x}px ${spotlight.y}px, rgba(180, 103, 255, 0.16), transparent 80%)`,
            }}
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/[0.01] to-[#b467ff]/[0.02]" />

        <div className="relative z-10 flex flex-col gap-4.5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#b467ff] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#b467ff]" />
              </span>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#d0b3ff] [font-family:'Outfit',sans-serif]">
                GMC Scholarship Consultancy
              </p>
            </div>
            <h1 className="mt-1.5 [font-family:'Outfit',sans-serif] text-[1.4rem] font-bold leading-[1.08] text-white sm:text-[1.8rem] lg:text-[2.05rem]">
              Complete your booking with a{' '}
              <span className="bg-gradient-to-r from-white via-[#d6a8ff] to-[#a352ff] bg-clip-text text-transparent">
                clean, verified payment.
              </span>
            </h1>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="shrink-0 self-start sm:self-auto">
            <Link
              className="group inline-flex h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 text-xs font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-[#b467ff]/30 hover:bg-[#b467ff]/20 hover:shadow-[0_0_15px_rgba(180,103,255,0.2)]"
              to="/"
            >
              <ArrowLeft size={14} className="text-white/70 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:text-white" />
              <span>Back to landing page</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </SectionReveal>
  )
}

export default ProgramHeaderCard
