import { AnimatePresence, motion } from 'framer-motion'

function HeroTitleCard({
  activeTitle,
  activeTitleIndex,
  isTitleHovered,
  onMouseEnter,
  onMouseLeave,
  prefersReducedMotion,
  smoothEase,
  spotlight,
}) {
  return (
    <motion.div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="relative mx-auto mb-5 w-full max-w-[1240px] overflow-hidden rounded-[20px] p-px shadow-[0_24px_80px_rgba(0,0,0,0.36)]"
      initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.985, y: 16 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
      transition={{
        opacity: { delay: 0.18, duration: 1.15, ease: smoothEase },
        scale: { delay: 0.18, duration: 1.15, ease: smoothEase },
        y: { delay: 0.18, duration: 1.15, ease: smoothEase },
      }}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] [background:conic-gradient(from_0deg,_rgba(148,63,255,0.15),_rgba(208,170,255,1),_rgba(111,29,255,0.22),_rgba(208,170,255,0.95),_rgba(148,63,255,0.15))]"
        animate={prefersReducedMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative rounded-[20px] bg-[linear-gradient(180deg,rgba(10,10,14,0.98)_0%,rgba(12,9,18,0.96)_100%)] px-4 py-8 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)] sm:px-6 md:px-8">
        {isTitleHovered && (
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-40 transition-opacity duration-300"
            style={{
              background: `radial-gradient(350px circle at ${spotlight.x}px ${spotlight.y}px, rgba(180, 103, 255, 0.16), transparent 80%)`,
            }}
          />
        )}

        <h1 className="relative z-10 [font-family:'Outfit',sans-serif] text-[1.9rem] font-bold leading-[1.04] text-white sm:text-[2.3rem] md:text-[2.8rem] lg:text-[3.2rem] xl:text-[3.55rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTitleIndex}
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18, filter: 'blur(8px)' }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -18, filter: 'blur(8px)' }}
              transition={{ duration: 0.65, ease: smoothEase }}
            >
              <motion.span
                className="block whitespace-normal sm:whitespace-nowrap"
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                        textShadow: [
                          '0 0 0 rgba(255,255,255,0)',
                          '0 0 18px rgba(255,255,255,0.06)',
                          '0 0 0 rgba(255,255,255,0)',
                        ],
                      }
                }
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                {activeTitle.line1}
              </motion.span>
              <span className="block bg-gradient-to-r from-[#deb8ff] via-[#b467ff] to-[#8d42ff] bg-clip-text text-transparent">
                {activeTitle.line2}
              </span>
            </motion.div>
          </AnimatePresence>
        </h1>
      </div>
    </motion.div>
  )
}

export default HeroTitleCard
