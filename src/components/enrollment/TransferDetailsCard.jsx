import { Copy, Landmark, Check, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { bankDetails, supportNotes } from '../../data/enrollment'

function TransferDetailsCard({ copiedField, onCopy, onBack, onNext }) {
  return (
    <aside className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0f0c1b]/90 p-5 text-white shadow-[0_20px_50px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl">
      {/* Background ambient glow inside the card */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#b467ff]/10 blur-2xl" />

      <div className="relative z-10 grid gap-3.5">
        {/* Online Bank Transfer details card */}
        <div className="overflow-hidden rounded-[18px] border border-white/[0.05] bg-gradient-to-br from-[#1b142c] to-[#0c0817] shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
          <div className="flex items-center gap-2 border-b border-white/[0.05] bg-white/[0.02] px-4 py-2.5">
            <Landmark size={15} className="text-[#c595ff] shadow-[0_0_8px_rgba(180,103,255,0.3)]" />
            <p className="[font-family:'Outfit',sans-serif] text-xs.5 font-bold tracking-wide text-white/90">
              Online Bank Transfer
            </p>
          </div>

          <div className="grid gap-1.5 bg-black/10 px-3.5 py-3.5">
            {bankDetails.map((item) => (
              <div
                className="flex items-center justify-between gap-3 rounded-lg border border-white/5 bg-[#171224]/80 px-3 py-2 transition-all duration-300 hover:border-white/10"
                key={item.label}
              >
                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#b467ff]">
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
        </div>

        {/* Notes bulleted list in clean frame */}
        <div className="rounded-[18px] border border-white/[0.04] bg-white/[0.01] px-4 py-3.5">
          <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#b467ff] mb-2.5">
            Important checkout notes
          </p>
          <ul className="list-disc list-inside grid gap-1.5 text-[11.5px] text-white/80 px-0.5">
            {supportNotes.map((note) => (
              <li key={note} className="leading-relaxed">
                <span className="text-white/85">{note}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation button row */}
        <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/[0.06]">
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
            className="btn-primary-site inline-flex h-9 items-center gap-2 rounded-full px-5 text-xs font-bold uppercase tracking-[0.06em] shadow-[0_6px_20px_rgba(31,143,138,0.2)]"
            type="button"
            whileHover={{ y: -1.5, shadow: '0_10px_25px_rgba(31,143,138,0.35)' }}
            whileTap={{ scale: 0.98 }}
          >
            <span>I've Made Payment</span>
            <ArrowRight size={13} className="text-[#d7fffc]" />
          </motion.button>
        </div>
      </div>
    </aside>
  )
}

export default TransferDetailsCard
