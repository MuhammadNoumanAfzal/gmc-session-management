import { motion } from 'framer-motion'
import { Play, Quote } from 'lucide-react'
import reviewProofImage from '../../assets/review-proof-placeholder.svg'
import videoProofImage from '../../assets/video-proof-placeholder.svg'
import SectionReveal from '../SectionReveal'

const videoItems = [
  {
    title: 'Student Success Call',
    subtitle: 'Scholarship roadmap breakdown',
    image: videoProofImage,
  },
  {
    title: 'Consultation Clip',
    subtitle: 'Profile review session',
    image: videoProofImage,
  },
  {
    title: 'Application Strategy',
    subtitle: 'Shortlisting and planning',
    image: videoProofImage,
  },
  {
    title: 'Winning SOP Feedback',
    subtitle: 'Live document guidance',
    image: videoProofImage,
  },
]

const reviewItems = [
  {
    title: 'Family success moment',
    subtitle: 'A real proof image from GMC student results',
    image: '/family2.jpg',
  },
  {
    title: 'Scholarship celebration',
    subtitle: 'Another trust-building family result photo',
    image: '/family3.jpg',
  },
  {
    title: 'Consultation feedback',
    subtitle: 'Helped organize the full process',
    image: reviewProofImage,
  },
  {
    title: 'Application support review',
    subtitle: 'More confidence before deadlines',
    image: reviewProofImage,
  },
]

function ContinuousTrack({ children, duration = 22, direction = 'left' }) {
  const animationX = direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%']

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max gap-5"
        animate={{ x: animationX }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
        style={{ willChange: 'transform' }}
      >
        {children}
      </motion.div>
    </div>
  )
}

function MediaProofSection() {
  const loopedVideos = [...videoItems, ...videoItems]
  const loopedReviews = [...reviewItems, ...reviewItems]

  return (
    <section className="relative overflow-hidden bg-[#07070c] py-12 text-white sm:py-16" id="reviews">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(180,103,255,0.12),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(80,130,255,0.06),_transparent_24%)]" />
      <div className="relative mx-auto w-full max-w-[1320px] px-4 sm:px-5">
        <SectionReveal className="mb-8 text-center sm:mb-10">
          <p className="mb-3 inline-flex rounded-full border border-[#b467ff]/25 bg-[#b467ff]/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#d9beff] sm:text-xs">
            Real Proof
          </p>
          <h2 className="[font-family:'Outfit',sans-serif] text-[1.9rem] font-bold leading-[1.06] text-white sm:text-[2.5rem]">
            Real conversations. Real feedback.
          </h2>
          <p className="mx-auto mt-3 max-w-[680px] text-sm leading-7 text-white/68 sm:text-[15px]">
            Use this area for student call clips and review screenshots so visitors see trust
            signals without needing long paragraphs.
          </p>
        </SectionReveal>

        <div className="space-y-5">
          <ContinuousTrack duration={24} direction="right">
            {loopedVideos.map((item, index) => (
              <article
                className="w-[280px] shrink-0 rounded-[26px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_18px_40px_rgba(0,0,0,0.20)] backdrop-blur-md sm:w-[340px]"
                key={`${item.title}-${index}`}
              >
                <div className="relative overflow-hidden rounded-[20px]">
                  <img
                    className="h-[180px] w-full object-cover sm:h-[210px]"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 inline-grid h-11 w-11 place-items-center rounded-full bg-white/14 text-white backdrop-blur-md">
                    <Play size={18} fill="currentColor" />
                  </div>
                  <div className="absolute inset-x-4 bottom-4">
                    <p className="[font-family:'Outfit',sans-serif] text-lg font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="text-sm text-white/72">{item.subtitle}</p>
                  </div>
                </div>
              </article>
            ))}
          </ContinuousTrack>

          <ContinuousTrack duration={26} direction="left">
            {loopedReviews.map((item, index) => (
              <article
                className="w-[250px] shrink-0 rounded-[24px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_18px_40px_rgba(0,0,0,0.20)] backdrop-blur-md sm:w-[300px]"
                key={`${item.title}-${index}`}
              >
                <div className="relative overflow-hidden rounded-[18px]">
                  <img
                    className="h-[180px] w-full object-cover sm:h-[200px]"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="absolute left-3 top-3 inline-grid h-9 w-9 place-items-center rounded-full bg-[#b467ff]/18 text-[#eddcff] backdrop-blur-md">
                    <Quote size={16} />
                  </div>
                </div>
                <div className="px-1 pt-3">
                  <p className="[font-family:'Outfit',sans-serif] text-base font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white/65">{item.subtitle}</p>
                </div>
              </article>
            ))}
          </ContinuousTrack>
        </div>
      </div>
    </section>
  )
}

export default MediaProofSection
