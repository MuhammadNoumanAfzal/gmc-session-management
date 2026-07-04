import TiltGalleryCard from './TiltGalleryCard'

function MentorGallery({ leftColumnCards, rightColumnCards }) {
  return (
    <div className="marquee-grid-container relative mx-auto grid h-[520px] max-w-[540px] grid-cols-2 gap-3 overflow-hidden rounded-[28px] border border-white/5 bg-[#0b0811]/40 p-2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)] sm:gap-4">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-12 bg-gradient-to-b from-[#0b0910] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-t from-[#0d0915] to-transparent" />

      <div className="relative flex h-full flex-col overflow-hidden">
        <div className="scroll-up-track flex flex-col gap-3 sm:gap-4" style={{ animation: 'scrollUpMarquee 26s linear infinite' }}>
          {leftColumnCards.map((card, index) => (
            <TiltGalleryCard key={`left-${index}`} card={card} index={index} />
          ))}
        </div>
      </div>

      <div className="relative flex h-full flex-col overflow-hidden">
        <div className="scroll-down-track flex flex-col gap-3 sm:gap-4" style={{ animation: 'scrollDownMarquee 26s linear infinite' }}>
          {rightColumnCards.map((card, index) => (
            <TiltGalleryCard key={`right-${index}`} card={card} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MentorGallery
