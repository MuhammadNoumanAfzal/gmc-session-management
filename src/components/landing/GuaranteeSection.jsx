import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { BadgeCheck, ShieldCheck, AlertCircle } from 'lucide-react'
import SectionReveal from '../SectionReveal'

const guaranteePoints = [
  'Attend the consultation and follow the guidance seriously.',
  'Apply the profile, shortlist, SOP, and document feedback properly.',
  'Show real implementation if you still feel the session did not deliver value.',
]

function GuaranteeSeal() {
  const sealRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  // Track normalized cursor coordinates relative to the seal (-0.5 to 0.5)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Maps coordinates to 3D rotation angles
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [16, -16]), { damping: 20, stiffness: 200 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-16, 16]), { damping: 20, stiffness: 200 })
  const scale = useSpring(1, { damping: 15, stiffness: 250 })

  const handleMouseMove = (e) => {
    if (!sealRef.current) return
    const rect = sealRef.current.getBoundingClientRect()
    const mouseX = e.clientX - rect.left - rect.width / 2
    const mouseY = e.clientY - rect.top - rect.height / 2
    x.set(mouseX / rect.width)
    y.set(mouseY / rect.height)
    scale.set(1.05)
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    scale.set(1)
    setIsHovered(false)
  }

  return (
    <div className="[perspective:1500px] select-none py-2">
      <motion.div
        ref={sealRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative mx-auto h-[180px] w-[180px] sm:h-[220px] sm:w-[220px] cursor-pointer"
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Background glow shadow ring */}
        <div className="absolute inset-[-10px] rounded-full bg-[radial-gradient(circle,rgba(180,103,255,0.3)_0%,transparent_70%)] blur-xl transition-opacity duration-300" />

        {/* 3D Border & Conic Ring */}
        <div 
          className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#8f43ff,#b467ff,#dba8ff,#8f43ff)] p-[8px] shadow-[0_18px_44px_rgba(140,54,255,0.3)]"
          style={{ transform: 'translateZ(10px)' }}
        >
          <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0d0a15] border border-white/10">
            {/* Inner badge container with 3D layers */}
            <div 
              className="flex h-[88%] w-[88%] flex-col items-center justify-center rounded-full border-[4px] border-[#8f43ff]/80 bg-[radial-gradient(circle_at_top,_rgba(180,103,255,0.16),_transparent_45%),linear-gradient(180deg,#150f24_0%,#090610_100%)] text-center text-white"
              style={{ transform: 'translateZ(15px)', transformStyle: 'preserve-3d' }}
            >
              {/* Floating Shield Icon */}
              <div 
                className="mb-1.5 inline-grid h-8 w-8 place-items-center rounded-full bg-[#8f43ff] text-white shadow-[0_0_12px_rgba(143,67,255,0.5)] sm:h-10 sm:w-10 border border-white/20"
                style={{ transform: 'translateZ(20px)' }}
              >
                <ShieldCheck size={18} className={isHovered ? 'scale-110 transition-transform' : 'animate-pulse'} />
              </div>

              {/* Text label */}
              <p 
                className="[font-family:'Outfit',sans-serif] text-[8px] font-bold uppercase tracking-[0.18em] text-[#d6b4ff] sm:text-[9px]"
                style={{ transform: 'translateZ(10px)' }}
              >
                GMC Guarantee
              </p>

              {/* Huge 3D "100%" */}
              <p 
                className="mt-0.5 [font-family:'Outfit',sans-serif] text-[1.65rem] font-extrabold leading-none text-white sm:text-[2.1rem] bg-gradient-to-b from-white via-[#f0e5ff] to-[#dcbaff] bg-clip-text text-transparent drop-shadow-[0_3px_6px_rgba(0,0,0,0.6)]"
                style={{ transform: 'translateZ(25px)' }}
              >
                100%
              </p>

              {/* Footer text */}
              <p 
                className="mt-1 max-w-[100px] text-[7.5px] font-semibold uppercase leading-[1.3] tracking-[0.12em] text-[#a99bbd] sm:max-w-[120px] sm:text-[8.5px]"
                style={{ transform: 'translateZ(10px)' }}
              >
                Value-Driven Strategy Commitment
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function GuaranteeSection() {
  const smoothEase = [0.22, 1, 0.36, 1]
  const cardRef = useRef(null)

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isCardHovered, setIsCardHovered] = useState(false)

  const handleCardMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <section className="relative bg-[#f8f6fb] py-8 sm:py-10 overflow-hidden" id="money-back">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,#08080b_0%,rgba(8,8,11,0.68)_22%,rgba(248,246,251,0.94)_78%,#f8f6fb_100%)]" />

      <div className="relative mx-auto w-full max-w-[1320px] px-4 sm:px-5">
        <div className="relative z-10 mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#cfa5ff]/40 bg-white/92 px-4 py-1.5 text-[11px] font-semibold text-[#8d41ef] shadow-[0_10px_24px_rgba(180,103,255,0.08)] backdrop-blur-md sm:text-xs">
            <BadgeCheck size={14} className="text-[#8c36ff]" />
            Zero fluff. Real strategy. Clear accountability.
          </div>
        </div>

        {/* Enhanced Card Container with cursor spotlight and Framer Motion SVG borders */}
        <SectionReveal>
          <div
            ref={cardRef}
            onMouseMove={handleCardMouseMove}
            onMouseEnter={() => setIsCardHovered(true)}
            onMouseLeave={() => setIsCardHovered(false)}
            className="relative rounded-[28px] overflow-hidden border border-white/8 bg-[radial-gradient(circle_at_0%_0%,rgba(143,67,255,0.12),transparent_40%),radial-gradient(circle_at_100%_100%,rgba(80,120,255,0.05),transparent_35%),linear-gradient(180deg,#120f19_0%,#09070f_100%)] p-5 text-white shadow-[0_20px_50px_rgba(9,6,15,0.45),0_0_40px_rgba(143,67,255,0.04)] sm:p-7 lg:p-8"
          >
            {/* Interactive Mouse spotlight glow behind text */}
            {isCardHovered && (
              <div
                className="pointer-events-none absolute inset-0 opacity-55 transition-opacity duration-500 z-0"
                style={{
                  background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(180, 103, 255, 0.24), transparent 80%)`,
                }}
              />
            )}

            {/* advanced SVG Neon border laser animation powered by Framer Motion */}
            <svg 
              className="absolute inset-0 h-full w-full pointer-events-none z-10 rounded-[28px]" 
              fill="none"
            >
              {/* Outer stroke outline */}
              <rect
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                rx="27"
                ry="27"
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth="1.5"
              />
              
              {/* Spinning Laser beam path (Faster & Thicker) */}
              <motion.rect
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                rx="27"
                ry="27"
                stroke="url(#laser-gradient)"
                strokeWidth={isCardHovered ? 3.5 : 2}
                strokeDasharray="110 320"
                animate={{
                  strokeDashoffset: [0, -430]
                }}
                transition={{
                  duration: isCardHovered ? 1.8 : 3.6,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Blurred duplicate for intense neon bloom effect */}
              <motion.rect
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                rx="27"
                ry="27"
                stroke="#dba8ff"
                strokeWidth={isCardHovered ? 5.5 : 3.5}
                strokeDasharray="110 320"
                className="blur-[5px] opacity-65"
                animate={{
                  strokeDashoffset: [0, -430]
                }}
                transition={{
                  duration: isCardHovered ? 1.8 : 3.6,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              <defs>
                <linearGradient id="laser-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#b467ff" stopOpacity="0" />
                  <stop offset="25%" stopColor="#b467ff" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#dba8ff" stopOpacity="1" />
                  <stop offset="75%" stopColor="#8f43ff" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#8f43ff" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center relative z-20">
              {/* Left Content column */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#f1e6ff] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#9d4dff] sm:text-xs">
                  <BadgeCheck size={14} />
                  Here&apos;s the Guarantee
                </div>

                <h2 className="mt-3 max-w-[640px] [font-family:'Outfit',sans-serif] text-[1.65rem] font-bold leading-[1.06] text-white sm:text-[2.1rem] md:text-[2.45rem]">
                  Serious guidance.
                  <span className="block bg-gradient-to-r from-[#cf9eff] to-[#8f43ff] bg-clip-text text-transparent">
                    Serious accountability.
                  </span>
                </h2>

                <p className="mt-2.5 max-w-[640px] text-sm leading-6 text-white/72">
                  We don&apos;t believe in empty promises. We believe in honest strategy, practical
                  feedback, and real implementation. If you fully apply the session guidance and
                  still feel it delivered no value, we review your case fairly.
                </p>

                {/* Compact checklist points */}
                <div className="mt-4 grid gap-2.5">
                  {guaranteePoints.map((point, index) => (
                    <motion.div
                      className="flex items-start gap-2.5 rounded-[16px] border border-white/6 bg-white/[0.02] px-3.5 py-3 hover:border-[#b467ff]/24 hover:bg-white/[0.05] hover:shadow-[0_6px_16px_rgba(143,67,255,0.06)] transition-all duration-300 cursor-default"
                      key={point}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.08, ease: smoothEase }}
                    >
                      <div className="mt-0.5 inline-grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#b467ff]/20 text-[#d7beff] border border-[#b467ff]/24 shadow-[0_0_6px_rgba(180,103,255,0.12)]">
                        <ShieldCheck size={13} />
                      </div>
                      <p className="text-sm leading-6 text-white/80">{point}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Compact warning card */}
                <div className="mt-4 rounded-[16px] border border-[#ab6cff]/16 bg-[linear-gradient(135deg,rgba(180,103,255,0.05)_0%,rgba(10,8,18,0.92)_100%)] p-4 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.03)] relative overflow-hidden group">
                  <div className="absolute right-3.5 top-3.5 text-[#cfb1ff]/12 group-hover:text-[#cfb1ff]/24 transition duration-300">
                    <AlertCircle size={22} />
                  </div>
                  
                  <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#cfb1ff] sm:text-xs">
                    Simple Principle
                  </p>
                  <p className="mt-1.5 [font-family:'Outfit',sans-serif] text-base font-bold leading-tight text-white">
                    This only works if you execute.
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/64">
                    That is why implementation matters as much as the advice itself.
                  </p>
                </div>
              </div>

              {/* Right Seal column */}
              <div className="flex justify-center lg:justify-end">
                <GuaranteeSeal />
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

export default GuaranteeSection
