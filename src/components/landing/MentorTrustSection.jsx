import { motion } from 'framer-motion'
import { ArrowRight, GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'
import MentorGallery from '../../features/home/mentor/MentorGallery'
import MentorHighlights from '../../features/home/mentor/MentorHighlights'
import { mentorGalleryCards } from '../../features/home/mentor/mentorData'
import SectionReveal from '../SectionReveal'

function MentorTrustSection() {
  const smoothEase = [0.22, 1, 0.36, 1]
  const leftColumnCards = [
    mentorGalleryCards[0],
    mentorGalleryCards[1],
    mentorGalleryCards[2],
    mentorGalleryCards[0],
    mentorGalleryCards[1],
    mentorGalleryCards[2],
  ]
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
        <SectionReveal className="order-2 lg:order-1">
          <MentorGallery leftColumnCards={leftColumnCards} rightColumnCards={rightColumnCards} />
        </SectionReveal>

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

          <h2 className="mt-3.5 max-w-[620px] [font-family:'Outfit',sans-serif] text-[1.7rem] font-bold leading-[1.06] text-white sm:text-[2.1rem] md:text-[2.6rem]">
            Meet{' '}
            <span className="bg-[linear-gradient(90deg,#f5ecff_0%,#cf9dff_34%,#9b57ff_100%)] bg-clip-text text-transparent">
              GMC Guidance
            </span>
          </h2>

          <p className="mt-3 max-w-[600px] text-[0.94rem] leading-6 text-[#d8d0e4]">
            Strategic mentorship for students who want sharper scholarship decisions, cleaner
            positioning, and a more confident global application path. We work closely with you to
            dissect your profile, evaluate your funding chances, and optimize every piece of your
            application.
          </p>

          <div className="mt-4 max-w-[600px] space-y-3 text-[0.9rem] leading-6 text-white/70">
            <p>
              Our process is built on real strategies, not guesswork. We help you identify weak
              spots in your SOP, shortlists, and documents early, saving you months of blind
              applications, expensive mistakes, and frustrating rejections.
            </p>
            <p>
              Whether you are targeting global admits or looking for specific funding paths, GMC
              provides a clear, step-by-step roadmap. We focus on matching your academic strength
              to programs where your profile stands a high chance of fully-funded offers.
            </p>
          </div>

          <MentorHighlights />

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
