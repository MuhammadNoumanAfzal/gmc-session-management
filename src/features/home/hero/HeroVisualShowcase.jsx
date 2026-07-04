import { motion, useTransform } from 'framer-motion'

function HeroVisualShowcase({ prefersReducedMotion, smoothEase, springX, springY }) {
  return (
    <div className="relative mx-auto max-w-[1020px] px-2 pt-10 sm:px-5">
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-[12%] top-12 h-[58%] rounded-full bg-[radial-gradient(circle,_rgba(180,103,255,0.22)_0%,_rgba(180,103,255,0.08)_34%,_transparent_72%)] blur-3xl"
        style={{
          x: useTransform(springX, (value) => value * -0.5),
          y: useTransform(springY, (value) => value * -0.5),
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                opacity: [0.52, 0.76, 0.52],
                scale: [0.98, 1.02, 0.98],
              }
        }
        transition={{ duration: 10.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="relative mx-auto max-w-[980px] isolate"
        style={{
          x: useTransform(springX, (value) => value * 0.4),
          y: useTransform(springY, (value) => value * 0.4),
        }}
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 32, scale: 0.975 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.34, duration: 1.15, ease: smoothEase }}
      >
        <div className="pointer-events-none absolute inset-x-[6%] top-[8%] bottom-[10%] rounded-[42px] bg-[radial-gradient(circle_at_50%_30%,rgba(180,103,255,0.28)_0%,rgba(132,54,255,0.16)_38%,rgba(13,8,22,0.78)_100%)] blur-xl" />
        <div className="pointer-events-none absolute inset-x-[12%] bottom-[4%] h-[22%] rounded-full bg-[radial-gradient(circle,_rgba(180,103,255,0.32)_0%,rgba(180,103,255,0.12)_42%,transparent_78%)] blur-3xl" />

        <motion.img
          className="relative z-[1] w-full object-cover mix-blend-screen"
          src="/hero.png"
          alt="GMC student scholarship winners group"
          animate={prefersReducedMotion ? undefined : { scale: [1, 1.008, 1], y: [0, -2, 0] }}
          transition={{ duration: 11.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  )
}

export default HeroVisualShowcase
