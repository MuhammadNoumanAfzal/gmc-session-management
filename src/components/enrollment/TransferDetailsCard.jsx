import { Copy, Landmark, Check, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { bankDetails, supportNotes } from '../../data/enrollment'

function TransferDetailsCard({ copiedField, onCopy, onBack, onNext }) {
  return (
    <div className="grid gap-3">
      {/* Online Bank Transfer details card */}
      <div className="overflow-hidden rounded-[22px] border border-white/8 bg-[#100c1a]/95 text-white shadow-[0_20px_50px_rgba(11,7,18,0.25)]">
        <div className="flex items-center gap-2 bg-gradient-to-r from-[#171224] to-[#0c0817] px-4 py-2.5 border-b border-white/5">
          <Landmark size={15} className="text-[#b467ff] shadow-[0_0_8px_rgba(180,103,255,0.3)]" />
          <p className="[font-family:'Outfit',sans-serif] text-xs.5 font-bold tracking-wide">
            Online Bank Transfer
          </p>
        </div>

        <div className="grid gap-1.5 bg-[#120f21] px-3.5 py-3 border-b border-white/5">
          {bankDetails.map((item) => (
            <div
              className="flex items-center justify-between gap-3 rounded-lg border border-white/5 bg-[#171224]/80 px-3 py-2 transition-all duration-300 hover:border-white/10"
              key={item.label}
            >
              <div>
                <p className="text-[8.5px] font-bold uppercase tracking-[0.1em] text-[#b467ff]">
                  {item.label}
                </p>
                <p className="mt-0.5 [font-family:'Outfit',sans-serif] text-[0.85rem] font-semibold text-white tracking-wide">
                  {item.value}
                </p>
              </div>
              <button
                className={`inline-flex items-center gap-1 h-6 rounded-full border px-2.5 text-[9px] font-bold uppercase tracking-[0.06em] transition-all duration-300 ${
                  copiedField === item.label 
                    ? 'bg-[#12a150]/20 border-[#12a150]/40 text-[#54eb90]' 
                    : 'bg-white/[0.04] border-white/10 text-white/90 hover:bg-white/10 hover:text-white'
                }`}
                onClick={() => onCopy(item.label, item.value)}
                type="button"
              >
                {copiedField === item.label ? <Check size={10} /> : <Copy size={10} />}
                {copiedField === item.label ? 'Copied' : 'Copy'}
              </button>
            </div>
          ))}
        </div>

        <div className="px-4 py-2 bg-[#120f21] text-[10.5px] text-white/60">
          Transfer Rs. 4,900, copy fields as needed, then proceed.
        </div>
      </div>

      {/* Important Notes Card in Bullet list to save massive vertical space */}
      <div className="rounded-[22px] border border-white/8 bg-[#100c1a]/95 px-4 py-3 text-white shadow-[0_20px_50px_rgba(11,7,18,0.25)]">
        <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#b467ff] mb-2">
          Important notes
        </p>
        <ul className="list-disc list-inside grid gap-1 text-[11px] text-white/90 px-1">
          {supportNotes.map((note) => (
            <li key={note} className="leading-tight">
              <span className="text-white/80">{note}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Navigation button row */}
      <div className="flex items-center justify-between gap-3 pt-2 border-t border-white/5">
        <motion.button
          onClick={onBack}
          className="btn-secondary-site h-8.5 rounded-full px-4.5 text-[11px] font-bold uppercase tracking-[0.06em] border-white/10 bg-white/[0.03] text-white hover:bg-white/10"
          type="button"
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
        >
          Back
        </motion.button>
        <motion.button
          onClick={onNext}
          className="btn-primary-site inline-flex h-9 items-center gap-1.5 rounded-full px-5 text-xs font-bold uppercase tracking-[0.06em] shadow-[0_6px_16px_rgba(31,143,138,0.15)]"
          type="button"
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>I've Paid</span>
          <ArrowRight size={13} className="text-[#d7fffc]" />
        </motion.button>
      </div>
    </div>
  )
}

export default TransferDetailsCard
