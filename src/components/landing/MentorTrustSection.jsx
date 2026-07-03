import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionReveal from '../SectionReveal'

const mentorGalleryCards = [
  {
    image: '/photo.png',
    title: 'Scholarship Strategy',
    copy: 'Shape a stronger plan before you spend months applying.',
  },
  {
    image: '/family2.jpg',
    title: 'Profile Review',
    copy: 'See where your application already stands out and where it needs work.',
  },
  {
    image: '/family3.jpg',
    title: 'University Match',
    copy: 'Focus on programs where your profile and funding goals align better.',
  },
  {
    image: '/family4.png',
    title: 'Admission Success',
    copy: 'Candid moments of students celebrating fully funded admits.',
  },
  {
    image: '/family5.png',
    title: 'Funding Secured',
    copy: 'Join the community of students who got fully-funded guidance.',
  },
  {
    image: '/hero.png',
    title: 'Application Clarity',
    copy: 'Move with cleaner next steps instead of second-guessing every choice.',
  },
]

function TiltCard({ card, index }) {
  const cardRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  // Track normalized cursor coordinates relative to the card (-0.5 to 0.5)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Maps values to 3D rotation angles
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { damping: 20, stiffness: 220 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { damping: 20, stiffness: 220 })
  const scale = useSpring(1, { damping: 18, stiffness: 250 })

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const mouseX = e.clientX - rect.left - rect.width / 2
    const mouseY = e.clientY - rect.top - rect.height / 2
    x.set(mouseX / rect.width)
    y.set(mouseY / rect.height)
    scale.set(1.04)
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    scale.set(1)
    setIsHovered(false)
  }

  return (
    <div className="[perspective:1000px] w-full shrink-0">
      <motion.article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative overflow-hidden rounded-[24px] border-[5px] border-white bg-[#0f0b16] p-0 shadow-[0_12px_28px_rgba(0,0,0,0.35)] transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(180,103,255,0.22)] cursor-pointer"
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: 'preserve-3d',
        }}
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
          {/* Premium dark gradient overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,19,55,0.06)_0%,rgba(10,27,70,0.36)_50%,rgba(8,24,64,0.76)_100%)]" />
          
          {/* Card text metadata */}
          <div 
            className="pointer-events-none absolute inset-x-3 bottom-3 text-left"
            style={{ transform: 'translateZ(18px)' }}
          >
            <p className="[font-family:'Outfit',sans-serif] text-[0.92rem] font-bold text-white leading-tight sm:text-[1.05rem]">
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

function MentorTrustSection() {
  const smoothEase = [0.22, 1, 0.36, 1]

  // Construct left column list (1st, 2nd, 3rd card, duplicated for seamless loop)
  const leftColumnCards = [
    mentorGalleryCards[0],
    mentorGalleryCards[1],
    mentorGalleryCards[2],
    mentorGalleryCards[0],
    mentorGalleryCards[1],
    mentorGalleryCards[2],
  ]

  // Construct right column list (4th, 5th, 6th card, duplicated for seamless loop)
  const rightColumnCards = [
    mentorGalleryCards[3],
    mentorGalleryCards[4],
    mentorGalleryCards[5],
    mentorGalleryCards[3],
    mentorGalleryCards[4],
    mentorGalleryCards[5],
  ]

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#060508_0%,#0b0910_38%,#130d1d_72%,#08070d_100%)] py-8 text-white sm:py-10">
      {/* Styles for vertical marquee scrolling and pause-on-hover */}
      <style>{`
        @keyframes scrollUpMarquee {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDownMarquee {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .marquee-grid-container:hover .scroll-up-track,
        .marquee-grid-container:hover .scroll-down-track {
          animation-play-state: paused !important;
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(180,103,255,0.14),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(126,72,214,0.14),transparent_24%),radial-gradient(circle_at_68%_76%,rgba(84,46,142,0.16),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-[linear-gradient(180deg,rgba(212,191,255,0.1)_0%,rgba(212,191,255,0)_100%)]" />
      <div className="pointer-events-none absolute left-[-6%] top-[18%] h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(180,103,255,0.2)_0%,rgba(180,103,255,0.05)_46%,transparent_72%)] blur-3xl" />
      <div className="pointer-events-none absolute right-[-8%] top-[12%] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(126,72,214,0.18)_0%,rgba(126,72,214,0.05)_44%,transparent_74%)] blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-[1240px] gap-6 px-4 sm:px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* Gallery Vertical Auto-Marquee Grid Column */}
        <SectionReveal className="order-2 lg:order-1">
          <div className="marquee-grid-container relative mx-auto grid max-w-[540px] grid-cols-2 gap-3 sm:gap-4 h-[520px] overflow-hidden rounded-[28px] border border-white/5 bg-[#0b0811]/40 p-2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]">
            {/* Fade overlays on top and bottom of sliding columns */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-12 bg-gradient-to-b from-[#0b0910] to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-t from-[#0d0915] to-transparent" />

            {/* Left Column - Slides UP */}
            <div className="relative h-full overflow-hidden flex flex-col">
              <div 
                className="scroll-up-track flex flex-col gap-3 sm:gap-4"
                style={{ animation: 'scrollUpMarquee 26s linear infinite' }}
              >
                {leftColumnCards.map((card, index) => (
                  <TiltCard key={`left-${index}`} card={card} index={index} />
                ))}
              </div>
            </div>

            {/* Right Column - Slides DOWN */}
            <div className="relative h-full overflow-hidden flex flex-col">
              <div 
                className="scroll-down-track flex flex-col gap-3 sm:gap-4"
                style={{ animation: 'scrollDownMarquee 26s linear infinite' }}
              >
                {rightColumnCards.map((card, index) => (
                  <TiltCard key={`right-${index}`} card={card} index={index} />
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Text Information Column */}
        <SectionReveal className="order-1 lg:order-2 lg:pl-4">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-[#b784ff]/24 bg-[linear-gradient(135deg,rgba(41,25,63,0.9)_0%,rgba(90,53,145,0.72)_100%)] px-3.5 py-1.5 text-xs font-bold text-[#f6ecff] shadow-[0_12px_24px_rgba(72,36,120,0.16)]"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.7, ease: smoothEase }}
          >
            <GraduationCap size={14} />
            Your Scholarship Mentor
          </motion.div>

          <h2 className="mt-3.5 max-w-[620px] [font-family:'Outfit',sans-serif] text-[1.7rem] leading-[1.06] font-bold text-white sm:text-[2.1rem] md:text-[2.6rem]">
            Meet{' '}
            <span className="bg-[linear-gradient(90deg,#f5ecff_0%,#cf9dff_34%,#9b57ff_100%)] bg-clip-text text-transparent">
              GMC Guidance
            </span>
          </h2>

          <p className="mt-3 max-w-[600px] text-[0.94rem] leading-6 text-[#d8d0e4]">
            Strategic mentorship for students who want sharper scholarship decisions, cleaner
            positioning, and a more confident global application path. We work closely with you to dissect your profile, evaluate your funding chances, and optimize every piece of your application.
          </p>

          {/* Detailed description block */}
          <div className="mt-4 max-w-[600px] space-y-3 text-[0.9rem] leading-6 text-white/70">
            <p>
              Our process is built on real strategies, not guesswork. We help you identify weak spots in your SOP, shortlists, and documents early—saving you months of blind applications, expensive mistakes, and frustrating rejections.
            </p>
            <p>
              Whether you are targeting global admits or looking for specific funding paths, GMC provides a clear, step-by-step roadmap. We focus on matching your academic strength to programs where your profile stands a high chance of fully-funded offers.
            </p>
          </div>

          {/* Highlights grid */}
          <div className="mt-4.5 grid max-w-[580px] gap-2.5 sm:grid-cols-3">
            <div className="rounded-[16px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] px-3.5 py-3 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#cfb1ff]">
                Direction
              </p>
              <p className="mt-1.5 text-xs leading-5 text-white/72">Know where to apply and why.</p>
            </div>
            <div className="rounded-[16px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] px-3.5 py-3 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#cfb1ff]">
                Feedback
              </p>
              <p className="mt-1.5 text-xs leading-5 text-white/72">Improve your documents fast.</p>
            </div>
            <div className="rounded-[16px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] px-3.5 py-3 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#cfb1ff]">
                Clarity
              </p>
              <p className="mt-1.5 text-xs leading-5 text-white/72">Move with a cleaner plan.</p>
            </div>
          </div>

          {/* CTA & Subtext */}
          <motion.div
            className="mt-5.5 flex flex-col gap-3.5 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, delay: 0.08, ease: smoothEase }}
          >
            <Link
              className="btn-primary-site min-h-[52px] rounded-[16px] px-6 text-center [font-family:'Outfit',sans-serif] text-sm font-semibold uppercase sm:min-h-[58px]"
              to="/program"
            >
              Book a Consultation <ArrowRight size={16} />
            </Link>
            <p className="max-w-[280px] text-xs leading-5 text-white/50">
              Replace the gallery photos with real student or mentor images anytime.
            </p>
          </motion.div>
        </SectionReveal>
      </div>
    </section>
  )
}

export default MentorTrustSection

