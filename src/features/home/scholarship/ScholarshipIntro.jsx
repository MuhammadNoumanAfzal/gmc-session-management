import { Sparkles } from 'lucide-react'
import SectionReveal from '../../../components/SectionReveal'

function ScholarshipIntro() {
  return (
    <SectionReveal className="mx-auto max-w-[720px] text-center">
      <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#cfa5ff] bg-white px-3 py-1.5 text-[11px] font-semibold text-[#8d41ef] shadow-[0_10px_24px_rgba(180,103,255,0.08)] sm:text-xs">
        <Sparkles size={16} />
        A smarter path for ambitious scholarship applicants
      </p>
      <h2 className="mx-auto max-w-[980px] [font-family:'Outfit',sans-serif] text-[1.35rem] font-bold leading-[1.08] text-[#0d0b12] sm:text-[1.75rem] md:text-[2.05rem]">
        <span className="bg-gradient-to-r from-[#1b1722] to-[#8c36ff] bg-clip-text text-transparent">
          Stop guessing and build a winning scholarship plan around your profile.
        </span>
      </h2>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5 text-[11px] font-semibold text-[#5d526c] sm:text-xs">
        <span className="rounded-full border border-[#e7ddf4] bg-white px-3 py-1.5">Clear direction</span>
        <span className="rounded-full border border-[#e7ddf4] bg-white px-3 py-1.5">Honest profile feedback</span>
        <span className="rounded-full border border-[#e7ddf4] bg-white px-3 py-1.5">Stronger scholarship applications</span>
      </div>
    </SectionReveal>
  )
}

export default ScholarshipIntro
