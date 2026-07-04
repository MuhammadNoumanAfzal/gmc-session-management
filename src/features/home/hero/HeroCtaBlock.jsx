import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function HeroCtaBlock({ prefersReducedMotion, smoothEase }) {
  return (
    <motion.div
      className="mt-[18px] flex flex-col items-center gap-[18px]"
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.95, ease: smoothEase }}
    >
      <motion.div
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 14 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.55 }}
        animate={prefersReducedMotion ? undefined : { y: [0, -2, 0] }}
        transition={{
          opacity: { duration: 0.45, ease: smoothEase },
          y: { duration: 0.45, ease: smoothEase },
          default: { duration: 6.8, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="w-full max-w-[740px]"
      >
        <Link
          className="btn-primary-site min-h-[76px] w-full justify-between rounded-[24px] px-5 py-4 text-left shadow-[0_20px_50px_rgba(31,143,138,0.22)] transition-all duration-300 hover:shadow-[0_22px_60px_rgba(59,197,188,0.48)] sm:min-h-[88px] sm:px-6"
          to="/program"
        >
          <span className="relative flex min-w-0 flex-col pr-4">
            <span className="mb-1 text-[0.68rem] font-bold uppercase tracking-[0.26em] text-[#d9fffb] sm:text-[0.72rem]">
              Start Here
            </span>
            <span className="[font-family:'Outfit',sans-serif] text-[1.05rem] font-semibold uppercase leading-[1.05] tracking-[0.02em] text-white sm:text-[1.4rem] md:text-[1.72rem]">
              Book Consultation Session
            </span>
          </span>
          <span className="relative ml-3 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/24 bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-sm transition duration-300 group-hover:scale-105 group-hover:bg-white/16 sm:h-14 sm:w-14">
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" size={24} />
          </span>
        </Link>
      </motion.div>

      <motion.div
        className="flex items-center justify-center gap-3 max-md:flex-col"
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 14 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.55 }}
        transition={{ duration: 0.9, ease: smoothEase }}
      >
        <div className="flex items-center" aria-hidden="true">
          <span className="ml-0 h-11 w-11 rounded-full border-2 border-[#0b0910] bg-gradient-to-br from-[#b467ffe6] to-[#55a0ffb3]" />
          <span className="-ml-2.5 h-11 w-11 rounded-full border-2 border-[#0b0910] bg-gradient-to-br from-[#b467ffe6] to-[#55a0ffb3]" />
          <span className="-ml-2.5 h-11 w-11 rounded-full border-2 border-[#0b0910] bg-gradient-to-br from-[#b467ffe6] to-[#55a0ffb3]" />
          <span className="-ml-2.5 h-11 w-11 rounded-full border-2 border-[#0b0910] bg-gradient-to-br from-[#b467ffe6] to-[#55a0ffb3]" />
        </div>
        <div className="text-left max-md:text-center">
          <strong className="mb-1 block [font-family:'Outfit',sans-serif] text-[0.96rem] font-semibold text-white">
            Trusted by scholarship-focused students
          </strong>
          <span className="text-[0.92rem] leading-[1.5] text-[#c9c2d1]">
            Profile guidance, document review, and a smarter admission roadmap.
          </span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default HeroCtaBlock
