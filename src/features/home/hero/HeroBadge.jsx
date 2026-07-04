import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

function HeroBadge({ heroReveal, prefersReducedMotion, smoothEase }) {
  return (
    <motion.div
      className="mb-5 inline-flex w-auto max-w-[min(94vw,860px)] items-center justify-center gap-2 rounded-full border border-[#b467ff3d] bg-[#b467ff17] px-6 py-3 text-center text-[11px] font-bold text-[#efd9ff] sm:px-7 sm:text-[13px]"
      {...heroReveal}
      transition={{ delay: 0.08, duration: 1.05, ease: smoothEase }}
      whileInView={
        prefersReducedMotion
          ? undefined
          : {
              boxShadow: [
                '0 0 0 rgba(180,103,255,0)',
                '0 0 18px rgba(180,103,255,0.12)',
                '0 0 0 rgba(180,103,255,0)',
              ],
            }
      }
      viewport={{ once: true }}
    >
      <Star className="shrink-0 animate-pulse text-[#dba8ff]" size={14} fill="currentColor" />
      <span className="whitespace-normal leading-tight">
        Learn From Students Who Won Fully Funded Scholarships
      </span>
    </motion.div>
  )
}

export default HeroBadge
