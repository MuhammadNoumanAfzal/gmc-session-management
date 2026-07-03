import { motion } from 'framer-motion'
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
    image: '/hero.png',
    title: 'Application Clarity',
    copy: 'Move with cleaner next steps instead of second-guessing every choice.',
  },
]

function MentorTrustSection() {
  const smoothEase = [0.22, 1, 0.36, 1]

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#060508_0%,#0b0910_38%,#130d1d_72%,#08070d_100%)] py-8 text-white sm:py-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(180,103,255,0.16),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(126,72,214,0.16),transparent_24%),radial-gradient(circle_at_68%_76%,rgba(84,46,142,0.18),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(212,191,255,0.12)_0%,rgba(212,191,255,0)_100%)]" />
      <div className="pointer-events-none absolute left-[-6%] top-[18%] h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(180,103,255,0.22)_0%,rgba(180,103,255,0.05)_46%,transparent_72%)] blur-3xl" />
      <div className="pointer-events-none absolute right-[-8%] top-[12%] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(126,72,214,0.2)_0%,rgba(126,72,214,0.05)_44%,transparent_74%)] blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-[1320px] gap-8 px-4 sm:px-5 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
        <SectionReveal className="order-2 lg:order-1">
          <div className="relative mx-auto grid max-w-[620px] grid-cols-2 gap-3 sm:gap-4">
            {mentorGalleryCards.map((card, index) => {
              const floatOffset = index % 2 === 0 ? [-8, 6, -8] : [8, -6, 8]
              const hoverRotate = index % 2 === 0 ? -2.5 : 2.5

              return (
                <motion.article
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0f0b16] p-1 shadow-[0_18px_44px_rgba(10,7,18,0.24)]"
                  key={card.title}
                  animate={{ y: floatOffset }}
                  initial={{ opacity: 0, y: 24 }}
                  transition={{
                    y: { duration: 6.2 + index * 0.45, repeat: Infinity, ease: 'easeInOut' },
                    opacity: { duration: 0.7, delay: index * 0.08, ease: smoothEase },
                  }}
                  viewport={{ once: true, amount: 0.25 }}
                  whileHover={{ y: -10, rotate: hoverRotate, scale: 1.02 }}
                >
                  <div className="relative aspect-[0.76] overflow-hidden rounded-[24px]">
                    <img
                      alt={card.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                      src={card.image}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,19,55,0.16)_0%,rgba(10,27,70,0.52)_54%,rgba(8,24,64,0.82)_100%)]" />
                    <div className="pointer-events-none absolute inset-x-4 bottom-4">
                      <p className="[font-family:'Outfit',sans-serif] text-[1.12rem] font-semibold text-white sm:text-[1.28rem]">
                        {card.title}
                      </p>
                      <div className="mt-1 h-[2px] w-10 rounded-full bg-white/70" />
                      <p className="mt-3 max-w-[16ch] text-sm leading-6 text-white/86">
                        {card.copy}
                      </p>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </SectionReveal>

        <SectionReveal className="order-1 lg:order-2">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-[#b784ff]/24 bg-[linear-gradient(135deg,rgba(41,25,63,0.9)_0%,rgba(90,53,145,0.72)_100%)] px-4 py-2 text-sm font-bold text-[#f6ecff] shadow-[0_18px_34px_rgba(72,36,120,0.2)]"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.75, ease: smoothEase }}
          >
            <GraduationCap size={16} />
            Your Scholarship Mentor
          </motion.div>

          <h2 className="mt-4 max-w-[680px] [font-family:'Outfit',sans-serif] text-[1.9rem] leading-[1.02] font-bold text-white sm:text-[2.45rem] md:text-[3rem]">
            Meet{' '}
            <span className="bg-[linear-gradient(90deg,#f5ecff_0%,#cf9dff_34%,#9b57ff_100%)] bg-clip-text text-transparent">
              GMC Guidance
            </span>
          </h2>

          <p className="mt-4 max-w-[640px] text-[0.98rem] leading-7 text-[#d8d0e4] sm:text-[1.04rem]">
            Strategic mentorship for students who want sharper scholarship decisions, cleaner
            positioning, and a more confident application path.
          </p>

          <div className="mt-5 grid max-w-[620px] gap-3 sm:grid-cols-3">
            <div className="rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.025)_100%)] px-4 py-3.5 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#cfb1ff]">
                Direction
              </p>
              <p className="mt-2 text-sm leading-6 text-white/78">Know where to apply and why.</p>
            </div>
            <div className="rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.025)_100%)] px-4 py-3.5 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#cfb1ff]">
                Feedback
              </p>
              <p className="mt-2 text-sm leading-6 text-white/78">Improve your documents fast.</p>
            </div>
            <div className="rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.025)_100%)] px-4 py-3.5 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#cfb1ff]">
                Clarity
              </p>
              <p className="mt-2 text-sm leading-6 text-white/78">Move with a cleaner plan.</p>
            </div>
          </div>

          <div className="mt-5 max-w-[660px] space-y-4 text-[0.96rem] leading-7 text-white/72 sm:text-[1rem]">
            <p>
              GMC helps you shortlist better universities, sharpen your SOP, and avoid weak
              applications before they cost you time.
            </p>
            <p>
              The goal is simple: less confusion, stronger positioning, and better chances at
              fully funded opportunities.
            </p>
          </div>

          <motion.div
            className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, delay: 0.08, ease: smoothEase }}
          >
            <Link
              className="btn-primary-site min-h-[62px] rounded-[20px] px-6 text-center [font-family:'Outfit',sans-serif] text-sm font-semibold uppercase sm:min-h-[70px] sm:text-base"
              to="/program"
            >
              Book a Consultation <ArrowRight size={18} />
            </Link>
            <p className="max-w-[300px] text-sm leading-6 text-white/56">
              Replace the gallery photos with real student or mentor images anytime.
            </p>
          </motion.div>
        </SectionReveal>
      </div>
    </section>
  )
}

export default MentorTrustSection
