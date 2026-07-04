import { Clock3 } from 'lucide-react'

function HeroAnnouncementBar() {
  return (
    <div className="flex items-center justify-center gap-2 bg-[#f7f3fb] px-4 py-3 text-center text-sm font-semibold text-[#090909] sm:text-base md:text-lg">
      <Clock3 className="text-[#b467ff]" size={18} />
      <span>Limited scholarship strategy slots open this week. Book early.</span>
    </div>
  )
}

export default HeroAnnouncementBar
