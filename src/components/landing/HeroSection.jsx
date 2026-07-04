import { useEffect, useRef, useState } from 'react'
import { useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import HeroAnnouncementBar from '../../features/home/hero/HeroAnnouncementBar'
import HeroBackground from '../../features/home/hero/HeroBackground'
import HeroBadge from '../../features/home/hero/HeroBadge'
import HeroCtaBlock from '../../features/home/hero/HeroCtaBlock'
import HeroTitleCard from '../../features/home/hero/HeroTitleCard'
import HeroVisualShowcase from '../../features/home/hero/HeroVisualShowcase'
import { smoothEase, titleMessages } from '../../features/home/hero/constants'

function HeroSection() {
  const prefersReducedMotion = useReducedMotion()
  const [activeTitleIndex, setActiveTitleIndex] = useState(0)
  const heroRef = useRef(null)
  const [titleSpotlight, setTitleSpotlight] = useState({ x: 0, y: 0 })
  const [isTitleHovered, setIsTitleHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { damping: 28, stiffness: 150 })
  const springY = useSpring(mouseY, { damping: 28, stiffness: 150 })

  const handleHeroMouseMove = (event) => {
    if (prefersReducedMotion) {
      return
    }

    const { clientX, clientY } = event
    const width = window.innerWidth
    const height = window.innerHeight
    mouseX.set((clientX - width / 2) / 24)
    mouseY.set((clientY - height / 2) / 24)

    if (!heroRef.current) {
      return
    }

    const rect = heroRef.current.getBoundingClientRect()
    setTitleSpotlight({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    })
  }

  const heroReveal = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 26, filter: 'blur(8px)' },
        animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
      }

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveTitleIndex((currentIndex) =>
        currentIndex === titleMessages.length - 1 ? 0 : currentIndex + 1,
      )
    }, 6500)

    return () => window.clearInterval(intervalId)
  }, [prefersReducedMotion])

  return (
    <section
      ref={heroRef}
      onMouseMove={handleHeroMouseMove}
      className="relative overflow-hidden px-0 pt-28 pb-20 select-none md:pt-22 md:pb-14"
    >
      <HeroBackground prefersReducedMotion={prefersReducedMotion} springX={springX} springY={springY} />
      <HeroAnnouncementBar />

      <div className="relative z-10 mx-auto mt-3 w-full max-w-[1320px] px-4 sm:mt-4 sm:px-5">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-[1240px] text-center">
            <HeroBadge
              heroReveal={heroReveal}
              prefersReducedMotion={prefersReducedMotion}
              smoothEase={smoothEase}
            />
            <HeroTitleCard
              activeTitle={titleMessages[activeTitleIndex]}
              activeTitleIndex={activeTitleIndex}
              isTitleHovered={isTitleHovered}
              onMouseEnter={() => setIsTitleHovered(true)}
              onMouseLeave={() => setIsTitleHovered(false)}
              prefersReducedMotion={prefersReducedMotion}
              smoothEase={smoothEase}
              spotlight={titleSpotlight}
            />
          </div>

          <div className="z-10 mt-9 w-full" id="student-results">
            <HeroVisualShowcase
              prefersReducedMotion={prefersReducedMotion}
              smoothEase={smoothEase}
              springX={springX}
              springY={springY}
            />
            <HeroCtaBlock prefersReducedMotion={prefersReducedMotion} smoothEase={smoothEase} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
