import { Play } from 'lucide-react'

function VideoProofCard({ image, subtitle, title }) {
  return (
    <article className="w-[280px] shrink-0 rounded-[26px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_18px_40px_rgba(0,0,0,0.20)] backdrop-blur-md sm:w-[340px]">
      <div className="relative overflow-hidden rounded-[20px]">
        <img className="h-[180px] w-full object-cover sm:h-[210px]" src={image} alt={title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 inline-grid h-11 w-11 place-items-center rounded-full bg-white/14 text-white backdrop-blur-md">
          <Play size={18} fill="currentColor" />
        </div>
        <div className="absolute inset-x-4 bottom-4">
          <p className="[font-family:'Outfit',sans-serif] text-lg font-semibold text-white">{title}</p>
          <p className="text-sm text-white/72">{subtitle}</p>
        </div>
      </div>
    </article>
  )
}

export default VideoProofCard
