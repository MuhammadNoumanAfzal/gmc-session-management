import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { consultationIncludes, paymentSteps, pricing } from '../../data/enrollment'

function EnrollmentSummaryCard({ onNext }) {
  return (
    <aside className="rounded-[26px] border border-white/8 bg-[#100c1a]/95 p-5 text-white shadow-[0_24px_56px_rgba(11,7,18,0.3)] sm:p-5.5">
      <div className="inline-flex items-center gap-2 rounded-full border border-[#b467ff]/30 bg-[#b467ff]/10 px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.08em] text-[#d7bbff]">
        <Sparkles size={13} className="text-[#c595ff]" />
        {pricing.badge}
      </div>

      <h1 className="mt-3.5 [font-family:'Outfit',sans-serif] text-[1.55rem] leading-[1.05] font-extrabold text-white sm:text-[1.8rem]">
        Get enrolled now.
      </h1>
      <p className="mt-2.5 text-xs.5 leading-5.5 text-white/90">
        {pricing.subtitle}
      </p>

      {/* Pricing block */}
      <div className="mt-4.5 overflow-hidden rounded-[20px] border border-[#b467ff]/35 bg-[linear-gradient(135deg,#171121_0%,#0e0a15_100%)] text-white shadow-[inset_0_1px_1px_rgba(180,103,255,0.15)]">
        <div className="flex flex-col gap-2.5 px-4.5 py-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#d7bbff]">
              Discounted Slot Price
            </p>
            <div className="mt-1 flex flex-wrap items-end gap-2.5">
              <span className="[font-family:'Outfit',sans-serif] text-[1.85rem] leading-none font-extrabold text-white">
                {pricing.discountedPrice}
              </span>
              <span className="pb-0.5 text-xs.5 font-semibold text-white/40 line-through">
                {pricing.originalPrice}
              </span>
            </div>
          </div>
          <div className="sm:text-right">
            <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#d7bbff]">
              {pricing.urgencyLabel}
            </p>
            <p className="text-sm.5 font-extrabold text-white mt-0.5">{pricing.urgencyValue} Filled</p>
          </div>
        </div>
        <div className="px-4.5 pb-4">
          <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
            <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-[#b467ff] to-white" />
          </div>
        </div>
      </div>

      {/* What is included */}
      <div className="mt-4.5">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#b467ff] mb-2.5">
          What is included in the session
        </h3>
        <div className="grid gap-2">
          {consultationIncludes.map((item) => (
            <div
              className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-[#171224]/50 px-3.5 py-2.5"
              key={item}
            >
              <div className="inline-grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#b467ff]/12 text-[#d7bbff]">
                <CheckCircle2 size={12.5} />
              </div>
              <p className="text-[12.5px] font-semibold leading-5 text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Action Button Row */}
      <div className="mt-6 flex justify-end border-t border-white/5 pt-4">
        <motion.button
          onClick={onNext}
          className="btn-primary-site inline-flex h-10 items-center gap-2 rounded-full px-6 text-xs font-bold uppercase tracking-[0.06em] shadow-[0_8px_20px_rgba(31,143,138,0.18)]"
          type="button"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Continue to Payment</span>
          <ArrowRight size={14} className="text-[#d7fffc]" />
        </motion.button>
      </div>
    </aside>
  )
}

export default EnrollmentSummaryCard
