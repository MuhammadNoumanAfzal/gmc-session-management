import { AlertTriangle, ArrowRight, UploadCloud, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

function ProofUploadCard({ fileName, onFileChange, onBack }) {
  return (
    <section
      className="rounded-[26px] border border-white/8 bg-[#100c1a]/95 p-4.5 text-white shadow-[0_24px_56px_rgba(11,7,18,0.3)] sm:p-5"
      id="payment-proof-form"
    >
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.08em] text-[#d8beff]">
        <UploadCloud size={13} className="text-[#c595ff]" />
        Upload Payment Proof
      </div>

      <h2 className="[font-family:'Outfit',sans-serif] text-[1.25rem] leading-[1.08] font-bold text-white sm:text-[1.5rem]">
        Submit your screenshot for manual verification.
      </h2>

      {/* Warning banner in dark style */}
      <div className="mt-4.5 rounded-[18px] border border-[#ff5d6c]/20 bg-[#ff5d6c]/8 px-3.5 py-3">
        <div className="flex items-start gap-3">
          <div className="inline-grid h-7 w-7 shrink-0 place-items-center rounded-xl bg-[#ff5d6c]/12 text-[#ff808d] mt-0.5">
            <AlertTriangle size={15} />
          </div>
          <p className="text-xs.5 leading-5 text-[#ffccd1] font-semibold">
            Do not upload a fake or unrelated screenshot. GMC reviews payments manually before a
            session is confirmed.
          </p>
        </div>
      </div>

      <form className="mt-4 grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#b467ff]">
              Full Name
            </span>
            <input
              className="h-10 rounded-2xl border border-white/10 bg-[#171224] px-4 text-sm font-medium text-white outline-none transition focus:border-[#b467ff] focus:ring-1 focus:ring-[#b467ff]/30 placeholder-white/20"
              placeholder="Enter your full name"
              type="text"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#b467ff]">
              WhatsApp Number
            </span>
            <input
              className="h-10 rounded-2xl border border-white/10 bg-[#171224] px-4 text-sm font-medium text-white outline-none transition focus:border-[#b467ff] focus:ring-1 focus:ring-[#b467ff]/30 placeholder-white/20"
              placeholder="Enter active WhatsApp number"
              type="tel"
            />
          </label>
        </div>

        <label className="grid gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#b467ff]">
            Email Address
          </span>
          <input
            className="h-10 rounded-2xl border border-white/10 bg-[#171224] px-4 text-sm font-medium text-white outline-none transition focus:border-[#b467ff] focus:ring-1 focus:ring-[#b467ff]/30 placeholder-white/20"
            placeholder="Enter your email address"
            type="email"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#b467ff]">
            Upload Screenshot
          </span>
          <div className="rounded-[22px] border border-dashed border-white/15 bg-[#120f21] p-2.5">
            <label className="flex min-h-[130px] cursor-pointer flex-col items-center justify-center rounded-[18px] border border-white/5 bg-[#171224]/80 px-4 py-4.5 text-center transition hover:border-[#b467ff]">
              <div className="inline-grid h-9 w-9 place-items-center rounded-full bg-[#b467ff]/12 text-[#d8beff]">
                <UploadCloud size={18} />
              </div>
              <p className="mt-2.5 text-sm font-semibold text-white">
                {fileName || 'Upload screenshot file here'}
              </p>
              <p className="mt-1 text-xs text-white/40">PDF, JPG, JPEG, or PNG</p>
              <input
                className="sr-only"
                onChange={onFileChange}
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
              />
            </label>
          </div>
        </label>

        <div className="flex flex-col gap-3.5 pt-1.5 sm:flex-row sm:items-center sm:justify-between border-t border-white/5 mt-1">
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-white transition-colors"
          >
            <MessageCircle size={14} className="text-[#c595ff]" />
            <span>Need help? Chat with WhatsApp Support</span>
          </a>
          <div className="flex flex-wrap gap-2.5">
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
              className="btn-primary-site h-10 rounded-full px-5 text-xs font-extrabold uppercase tracking-[0.04em] shadow-[0_8px_20px_rgba(31,143,138,0.18)]"
              type="button"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit Proof
              <ArrowRight size={14} />
            </motion.button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default ProofUploadCard
