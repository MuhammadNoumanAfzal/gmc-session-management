import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

function TiltGalleryCard({ card, index }) {
  const cardRef = useRef(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { damping: 20, stiffness: 220 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { damping: 20, stiffness: 220 })
  const scale = useSpring(1, { damping: 18, stiffness: 250 })

  const handleMouseMove = (event) => {
    if (!cardRef.current) {
      return
    }

    const rect = cardRef.current.getBoundingClientRect()
    const mouseX = event.clientX - rect.left - rect.width / 2
    const mouseY = event.clientY - rect.top - rect.height / 2
    x.set(mouseX / rect.width)
    y.set(mouseY / rect.height)
    scale.set(1.04)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    scale.set(1)
  }

  return (
    <div className="w-full shrink-0 [perspective:1000px]">
      <motion.article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative cursor-pointer overflow-hidden rounded-[24px] border-[5px] border-white bg-[#0f0b16] p-0 shadow-[0_12px_28px_rgba(0,0,0,0.35)] transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(180,103,255,0.22)]"
        style={{ rotateX, rotateY, scale, transformStyle: 'preserve-3d' }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, delay: index * 0.08 }}
      >
        <div className="relative aspect-square overflow-hidden rounded-[18px]">
          <img
            alt={card.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            src={card.image}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,19,55,0.06)_0%,rgba(10,27,70,0.36)_50%,rgba(8,24,64,0.76)_100%)]" />

          <div
            className="pointer-events-none absolute inset-x-3 bottom-3 text-left"
            style={{ transform: 'translateZ(18px)' }}
          >
            <p className="[font-family:'Outfit',sans-serif] text-[0.92rem] font-bold leading-tight text-white sm:text-[1.05rem]">
              {card.title}
            </p>
            <div className="mt-1 h-[1.5px] w-6 rounded-full bg-white/70" />
            <p className="mt-1.5 max-w-[16ch] text-[0.74rem] leading-normal text-white/84 sm:text-[0.78rem]">
              {card.copy}
            </p>
          </div>
        </div>
      </motion.article>
    </div>
  )
}

export default TiltGalleryCard
