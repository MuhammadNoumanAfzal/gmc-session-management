import { motion, useTransform } from 'framer-motion'

function HeroBackground({ prefersReducedMotion, springX, springY }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <div className="absolute inset-x-0 top-0 h-full bg-[linear-gradient(180deg,#050507_0%,#090611_32%,#080510_70%,#050505_100%)]" />

      <motion.div
        className="absolute -top-24 left-[-8%] h-[340px] w-[340px] rounded-full bg-[#8c36ff]/18 blur-3xl"
        style={{ x: springX, y: springY }}
        animate={prefersReducedMotion ? undefined : { scale: [1, 1.08, 1] }}
        transition={{ duration: 10.2, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute top-[12%] right-[-6%] h-[300px] w-[300px] rounded-full bg-[#b467ff]/14 blur-3xl"
        style={{
          x: useTransform(springX, (value) => value * -1.2),
          y: useTransform(springY, (value) => value * -1.2),
        }}
        animate={prefersReducedMotion ? undefined : { scale: [1.02, 0.95, 1.02] }}
        transition={{ duration: 11.4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute bottom-[12%] left-[12%] h-[220px] w-[220px] rounded-full bg-[#6c2cff]/10 blur-3xl"
        style={{
          x: useTransform(springX, (value) => value * 0.8),
          y: useTransform(springY, (value) => value * 0.8),
        }}
        animate={prefersReducedMotion ? undefined : { opacity: [0.55, 0.82, 0.55] }}
        transition={{ duration: 9.6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        aria-hidden="true"
        className="absolute -top-24 left-[14%] h-[240px] w-px bg-[linear-gradient(180deg,rgba(212,178,255,0)_0%,rgba(212,178,255,0.75)_45%,rgba(212,178,255,0)_100%)] blur-[1px]"
        animate={prefersReducedMotion ? undefined : { y: [-80, 520], opacity: [0, 0.9, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'linear', delay: 0.2 }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -top-32 left-[48%] h-[300px] w-px bg-[linear-gradient(180deg,rgba(180,103,255,0)_0%,rgba(180,103,255,0.8)_50%,rgba(180,103,255,0)_100%)] blur-[1px]"
        animate={prefersReducedMotion ? undefined : { y: [-120, 560], opacity: [0, 1, 0] }}
        transition={{ duration: 7.2, repeat: Infinity, ease: 'linear', delay: 1.1 }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -top-20 right-[18%] h-[220px] w-px bg-[linear-gradient(180deg,rgba(223,198,255,0)_0%,rgba(223,198,255,0.72)_42%,rgba(223,198,255,0)_100%)] blur-[1px]"
        animate={prefersReducedMotion ? undefined : { y: [-60, 500], opacity: [0, 0.85, 0] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: 'linear', delay: 0.7 }}
      />
    </div>
  )
}

export default HeroBackground
