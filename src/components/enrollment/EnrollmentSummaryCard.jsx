import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { consultationIncludes, pricing } from '../../data/enrollment'

function EnrollmentSummaryCard({ onNext }) {
  return (
    <aside className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0f0c1b]/90 p-5 text-white shadow-[0_20px_50px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl">
      {/* Background ambient glow inside the card */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#b467ff]/10 blur-2xl" />
      
      <div className="relative z-10">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-[#b467ff]/30 bg-[#b467ff]/8 px-2.5 py-1 text-[9.5px] font-bold uppercase tracking-[0.1em] text-[#d7bbff]">
          <Sparkles size={11} className="animate-pulse text-[#b467ff]" />
          {pricing.badge}
        </div>

        <h1 className="mt-2.5 [font-family:'Outfit',sans-serif] text-[1.4rem] leading-[1.05] font-extrabold text-white tracking-tight">
          Get enrolled now.
        </h1>
        <p className="mt-1 text-xs text-white/70">
          {pricing.subtitle}
        </p>

        {/* Premium Pricing block with glowing border */}
        <div className="mt-4 overflow-hidden rounded-[16px] border border-white/[0.05] bg-gradient-to-br from-[#1b142c] to-[#0c0817] p-3.5 text-white shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#d7bbff]/85">
                Discounted Slot Price
              </p>
              <div className="mt-0.5 flex items-baseline gap-2">
                <span className="[font-family:'Outfit',sans-serif] text-[1.75rem] font-black tracking-tight bg-gradient-to-r from-white via-white to-[#c595ff] bg-clip-text text-transparent">
                  {pricing.discountedPrice}
                </span>
                <span className="text-[11px] font-semibold text-white/30 line-through">
                  {pricing.originalPrice}
                </span>
              </div>
            </div>
            <div className="sm:text-right">
              <span className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#ff8e9a] bg-[#ff5d6c]/10 border border-[#ff5d6c]/20 px-2 py-0.5 rounded-full">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ff5d6c] animate-ping" />
                {pricing.urgencyValue} Filled
              </span>
            </div>
          </div>
          <div className="mt-2.5">
            <div className="h-1 rounded-full bg-white/5 overflow-hidden">
              <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-[#b467ff] to-white" />
            </div>
          </div>
        </div>

        {/* What is included */}
        <div className="mt-4">
          <h3 className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#b467ff] mb-2">
            What is included in the session
          </h3>
          <div className="grid gap-1.5">
            {consultationIncludes.map((item) => (
              <div
                className="flex items-center gap-2 rounded-xl border border-white/[0.03] bg-white/[0.02] px-3.5 py-2.5 transition-all duration-300 hover:bg-white/[0.04] hover:border-white/[0.06]"
                key={item}
              >
                <div className="inline-grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-[#b467ff]/12 text-[#d7bbff]">
                  <CheckCircle2 size={12} />
                </div>
                <p className="text-xs font-medium text-white/90 leading-tight">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button Row */}
        <div className="mt-4.5 flex justify-end border-t border-white/[0.06] pt-3.5">
          <motion.button
            onClick={onNext}
            className="btn-primary-site inline-flex h-9 items-center gap-2 rounded-full px-5 text-xs font-bold uppercase tracking-[0.06em] shadow-[0_6px_20px_rgba(31,143,138,0.2)]"
            type="button"
            whileHover={{ y: -1.5, shadow: '0_10px_25px_rgba(31,143,138,0.35)' }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Continue to Payment</span>
            <ArrowRight size={13} className="text-[#d7fffc]" />
          </motion.button>
        </div>
      </div>
    </aside>
  )
}

export default EnrollmentSummaryCard
