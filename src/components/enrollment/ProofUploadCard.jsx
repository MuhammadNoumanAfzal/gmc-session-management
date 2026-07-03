import { AlertTriangle, ArrowRight, UploadCloud, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

function ProofUploadCard({ fileName, onFileChange, onBack }) {
  return (
    <section
      className="rounded-[22px] border border-white/8 bg-[#100c1a]/95 p-4 text-white shadow-[0_20px_50px_rgba(11,7,18,0.25)]"
      id="payment-proof-form"
    >
      <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#d8beff]">
        <UploadCloud size={12} className="text-[#c595ff]" />
        Upload Payment Proof
      </div>

      <h2 className="[font-family:'Outfit',sans-serif] text-[1.15rem] leading-[1.08] font-bold text-white">
        Submit your screenshot for manual verification.
      </h2>

      {/* Warning banner in compact dark style */}
      <div className="mt-3 rounded-[12px] border border-[#ff5d6c]/20 bg-[#ff5d6c]/8 px-3 py-2">
        <div className="flex items-start gap-2.5">
          <div className="inline-grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-[#ff5d6c]/12 text-[#ff808d] mt-0.5">
            <AlertTriangle size={13} />
          </div>
          <p className="text-[11px] leading-4 text-[#ffccd1] font-semibold">
            Do not upload a fake screenshot. GMC reviews payments manually before confirming.
          </p>
        </div>
      </div>

      <form className="mt-3.5 grid gap-3">
        <div className="grid gap-3 md:grid-cols-2">
          <label className="grid gap-1.5">
            <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#b467ff]">
              Full Name
            </span>
            <input
              className="h-9 rounded-xl border border-white/10 bg-[#171224] px-3.5 text-xs.5 font-medium text-white outline-none transition focus:border-[#b467ff]"
              placeholder="Enter your full name"
              type="text"
            />
          </label>

          <label className="grid gap-1.5">
            <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#b467ff]">
              WhatsApp Number
            </span>
            <input
              className="h-9 rounded-xl border border-white/10 bg-[#171224] px-3.5 text-xs.5 font-medium text-white outline-none transition focus:border-[#b467ff]"
              placeholder="Enter active WhatsApp number"
              type="tel"
            />
          </label>
        </div>

        <label className="grid gap-1.5">
          <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#b467ff]">
            Email Address
          </span>
          <input
            className="h-9 rounded-xl border border-white/10 bg-[#171224] px-3.5 text-xs.5 font-medium text-white outline-none transition focus:border-[#b467ff]"
            placeholder="Enter your email address"
            type="email"
          />
        </label>

        <label className="grid gap-1.5">
          <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#b467ff]">
            Upload Screenshot
          </span>
          <div className="rounded-[18px] border border-dashed border-white/15 bg-[#120f21] p-2">
            <label className="flex min-h-[90px] cursor-pointer flex-col items-center justify-center rounded-[14px] border border-white/5 bg-[#171224]/80 px-4 py-3 text-center transition hover:border-[#b467ff]">
              <div className="inline-grid h-7 w-7 place-items-center rounded-full bg-[#b467ff]/12 text-[#d8beff]">
                <UploadCloud size={15} />
              </div>
              <p className="mt-1.5 text-xs font-semibold text-white">
                {fileName || 'Upload payment screenshot here'}
              </p>
              <p className="text-[10px] text-white/40">PDF, JPG, JPEG, or PNG</p>
              <input
                className="sr-only"
                onChange={onFileChange}
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
              />
            </label>
          </div>
        </label>

        <div className="flex flex-col gap-3 pt-2 border-t border-white/5 mt-1 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] text-white/80 hover:text-white transition-colors"
          >
            <MessageCircle size={13} className="text-[#c595ff]" />
            <span>Chat with WhatsApp Support</span>
          </a>
          <div className="flex flex-wrap gap-2">
            <motion.button
              onClick={onBack}
              className="btn-secondary-site h-8.5 rounded-full px-4 text-xs font-bold uppercase tracking-[0.06em] border-white/10 bg-white/[0.03] text-white hover:bg-white/10"
              type="button"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Back
            </motion.button>
            
            <motion.button
              className="btn-primary-site h-8.5 rounded-full px-5 text-xs font-extrabold uppercase tracking-[0.04em] shadow-[0_6px_16px_rgba(31,143,138,0.15)]"
              type="button"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit Proof
              <ArrowRight size={13} />
            </motion.button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default ProofUploadCard
