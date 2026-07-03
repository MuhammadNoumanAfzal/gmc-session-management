import { Copy, Landmark, ShieldCheck, Check, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { bankDetails, supportNotes } from '../../data/enrollment'

function TransferDetailsCard({ copiedField, onCopy, onBack, onNext }) {
  return (
    <div className="grid gap-3.5">
      {/* Online Bank Transfer details card */}
      <div className="overflow-hidden rounded-[26px] border border-white/8 bg-[#100c1a]/95 text-white shadow-[0_24px_56px_rgba(11,7,18,0.3)]">
        <div className="flex items-center gap-2 bg-gradient-to-r from-[#171224] to-[#0c0817] px-4.5 py-3 border-b border-white/5">
          <Landmark size={16} className="text-[#b467ff] shadow-[0_0_10px_rgba(180,103,255,0.3)]" />
          <p className="[font-family:'Outfit',sans-serif] text-sm.5 font-bold tracking-wide">
            Online Bank Transfer
          </p>
        </div>

        <div className="grid gap-2 bg-[#120f21] px-4 py-4 border-b border-white/5">
          {bankDetails.map((item) => (
            <div
              className="flex flex-col gap-1.5 rounded-xl border border-white/5 bg-[#171224]/80 px-3.5 py-3 sm:flex-row sm:items-center sm:justify-between transition-all duration-300 hover:border-white/10"
              key={item.label}
            >
              <div>
                <p className="text-[9.5px] font-bold uppercase tracking-[0.1em] text-[#b467ff]">
                  {item.label}
                </p>
                <p className="mt-0.5 [font-family:'Outfit',sans-serif] text-[0.92rem] font-semibold text-white tracking-wide">
                  {item.value}
                </p>
              </div>
              <button
                className={`inline-flex items-center gap-1.5 h-8 rounded-full border px-3 text-[10px] font-bold uppercase tracking-[0.06em] transition-all duration-300 ${
                  copiedField === item.label 
                    ? 'bg-[#12a150]/20 border-[#12a150]/40 text-[#54eb90]' 
                    : 'bg-white/[0.04] border-white/10 text-white/90 hover:bg-white/10 hover:text-white'
                }`}
                onClick={() => onCopy(item.label, item.value)}
                type="button"
              >
                {copiedField === item.label ? <Check size={11} /> : <Copy size={11} />}
                {copiedField === item.label ? 'Copied' : 'Copy'}
              </button>
            </div>
          ))}
        </div>

        {/* Info label steps header */}
        <div className="px-4.5 py-3 bg-[#120f21] text-xs text-white/60">
          Pay the discounted amount of Rs. 4,900 to the account above, copy the details as needed, then proceed.
        </div>
      </div>

      {/* Important Notes Card */}
      <div className="rounded-[26px] border border-white/8 bg-[#100c1a]/95 px-4.5 py-4 text-white shadow-[0_24px_56px_rgba(11,7,18,0.3)]">
        <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#b467ff]">
          Important notes
        </p>
        <div className="mt-2.5 grid gap-2">
          {supportNotes.map((note) => (
            <div 
              className="rounded-xl border border-white/5 bg-[#171224]/80 px-3.5 py-2.5 transition-all duration-300 hover:border-white/10" 
              key={note}
            >
              <p className="text-[12px] leading-5 text-white">{note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Manual verification disclaimer card */}
      <div className="rounded-[22px] border border-white/5 bg-[#120f21]/70 px-4.5 py-3">
        <div className="flex items-center gap-3">
          <div className="inline-grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#b467ff]/12 text-[#d8beff] border border-[#b467ff]/10">
            <ShieldCheck size={16} />
          </div>
          <div>
            <p className="text-[9.5px] font-bold uppercase tracking-[0.08em] text-[#cfb1ff]">
              Manual verification
            </p>
            <p className="mt-0.5 text-xs text-white/95">
              Payment proof is reviewed manually before session confirmation.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation button row */}
      <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/5 mt-1">
        <motion.button
          onClick={onBack}
          className="btn-secondary-site h-10 rounded-full px-5 text-xs font-bold uppercase tracking-[0.06em] border-white/10 bg-white/[0.03] text-white hover:bg-white/10"
          type="button"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Back
        </motion.button>
        <motion.button
          onClick={onNext}
          className="btn-primary-site inline-flex h-10 items-center gap-2 rounded-full px-6 text-xs font-bold uppercase tracking-[0.06em] shadow-[0_8px_20px_rgba(31,143,138,0.18)]"
          type="button"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>I've Made the Payment</span>
          <ArrowRight size={14} className="text-[#d7fffc]" />
        </motion.button>
      </div>
    </div>
  )
}

export default TransferDetailsCard
