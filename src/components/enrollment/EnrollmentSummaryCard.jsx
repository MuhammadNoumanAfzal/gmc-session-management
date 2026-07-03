import { CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react'
import { consultationIncludes, pricing } from '../../data/enrollment'

const proofImages = [
  {
    src: '/family2.jpg',
    alt: 'Family scholarship success moment',
  },
  {
    src: '/family3.jpg',
    alt: 'Student family celebration result',
  },
  {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/College_graduate_students.jpg',
    alt: 'College graduate students crowd',
  },
  {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Graduation_ceremony_with_Azim_Premji.JPG',
    alt: 'Student receiving degree at graduation ceremony',
  },
]

function EnrollmentSummaryCard() {
  return (
    <aside className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(180,103,255,0.22),_transparent_32%),linear-gradient(180deg,_#120f19_0%,_#09090b_100%)] p-4 text-white shadow-[0_24px_56px_rgba(11,7,18,0.28)] sm:p-4.5">
      <div className="absolute right-[-40px] top-[-32px] h-32 w-32 rounded-full bg-[#c487ff]/24 blur-3xl" />
      <div className="absolute bottom-[-24px] left-[-20px] h-28 w-28 rounded-full bg-[#7a3cff]/18 blur-3xl" />

      <div className="relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#c18cff]/35 bg-[#b467ff]/12 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[#eddcff]">
          <Sparkles size={14} />
          GMC Priority Slot
        </div>

        <h2 className="mt-3 [font-family:'Sora',sans-serif] text-[1.55rem] leading-[1.04] font-extrabold sm:text-[1.95rem]">
          Enroll now at the
          <span className="block bg-gradient-to-r from-[#d294ff] via-[#b467ff] to-[#8c36ff] bg-clip-text text-transparent">
            discounted consultation price
          </span>
        </h2>

        <div className="mt-4 rounded-[24px] border border-[#d6a8ff]/28 bg-gradient-to-r from-[#1a1324] via-[#231631] to-[#120f19] px-4 py-4 shadow-[0_18px_34px_rgba(140,54,255,0.14)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#d7bbff]">
            Pay today
          </p>
          <div className="mt-2 flex flex-wrap items-end gap-3">
            <span className="[font-family:'Sora',sans-serif] text-[2.1rem] leading-none font-extrabold text-white sm:text-[2.7rem]">
              {pricing.discountedPrice}
            </span>
            <span className="pb-1 text-sm font-semibold text-white/42 line-through sm:text-base">
              {pricing.originalPrice}
            </span>
          </div>
        </div>

        <p className="mt-3 max-w-[26rem] text-sm leading-5 text-white/72 sm:text-[0.92rem]">
          {pricing.subtitle}
        </p>

        <div className="mt-4 overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04]">
          <div className="bg-[#08080b] px-4 py-3.5">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#cfb1ff]">
              Offer pricing
            </p>
            <div className="mt-2 flex items-end gap-3">
              <span className="text-base font-semibold text-white/42 line-through">
                {pricing.originalPrice}
              </span>
              <span className="[font-family:'Sora',sans-serif] text-[1.65rem] font-extrabold text-white sm:text-[2rem]">
                {pricing.discountedPrice}
              </span>
            </div>
          </div>

          <div className="px-4 py-3.5">
            <div className="mb-2 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.08em] text-[#d7bbff]">
              <span>{pricing.urgencyLabel}</span>
              <span>{pricing.urgencyValue}</span>
            </div>
            <div className="h-3 rounded-full bg-white/8">
              <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-[#d28bff] via-[#b467ff] to-[#8c36ff]" />
            </div>
          </div>
        </div>

        <div className="mt-4 overflow-hidden rounded-[22px] border border-white/10 bg-[#f8f4fc] p-2.5 shadow-[0_14px_36px_rgba(0,0,0,0.12)]">
          <div className="grid grid-cols-2 gap-2 rounded-[16px] bg-[#120f19] p-2">
            {proofImages.map((image) => (
              <div
                className="overflow-hidden rounded-[14px] border border-white/8 bg-[#1a1424]"
                key={image.src}
              >
                <img
                  alt={image.alt}
                  className="h-[120px] w-full object-cover sm:h-[136px]"
                  src={image.src}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-2.5">
          {consultationIncludes.map((item) => (
            <div
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5"
              key={item}
            >
              <div className="mt-0.5 inline-grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#b467ff]/18 text-[#dcbcfe]">
                <CheckCircle2 size={15} />
              </div>
              <p className="text-sm font-medium leading-5 text-white/84">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-[22px] border border-[#d0b0ff]/18 bg-[#120f19] px-3.5 py-3.5">
          <div className="flex items-center gap-3">
            <div className="inline-grid h-9 w-9 place-items-center rounded-2xl bg-[#b467ff]/18 text-[#d8beff]">
              <ShieldCheck size={17} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#cfb1ff]">
                Manual verification
              </p>
              <p className="mt-1 text-sm leading-5 text-white/72">
                Every payment proof is reviewed by the GMC team before confirmation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default EnrollmentSummaryCard
