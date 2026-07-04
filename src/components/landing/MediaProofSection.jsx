import ContinuousTrack from '../../features/home/media/ContinuousTrack'
import ReviewProofCard from '../../features/home/media/ReviewProofCard'
import VideoProofCard from '../../features/home/media/VideoProofCard'
import { reviewItems, videoItems } from '../../features/home/media/mediaProofData'
import SectionReveal from '../SectionReveal'

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
              <VideoProofCard key={`${item.title}-${index}`} {...item} />
            ))}
          </ContinuousTrack>

          <ContinuousTrack duration={26} direction="left">
            {loopedReviews.map((item, index) => (
              <ReviewProofCard key={`${item.title}-${index}`} {...item} />
            ))}
          </ContinuousTrack>
        </div>
      </div>
    </section>
  )
}

export default MediaProofSection
