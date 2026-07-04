import { Quote } from 'lucide-react'

function ReviewProofCard({ image, subtitle, title }) {
  return (
    <article className="w-[250px] shrink-0 rounded-[24px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_18px_40px_rgba(0,0,0,0.20)] backdrop-blur-md sm:w-[300px]">
      <div className="relative overflow-hidden rounded-[18px]">
        <img className="h-[180px] w-full object-cover sm:h-[200px]" src={image} alt={title} />
        <div className="absolute left-3 top-3 inline-grid h-9 w-9 place-items-center rounded-full bg-[#b467ff]/18 text-[#eddcff] backdrop-blur-md">
          <Quote size={16} />
        </div>
      </div>
      <div className="px-1 pt-3">
        <p className="[font-family:'Outfit',sans-serif] text-base font-semibold text-white">{title}</p>
        <p className="mt-1 text-sm leading-6 text-white/65">{subtitle}</p>
      </div>
    </article>
  )
}

export default ReviewProofCard
