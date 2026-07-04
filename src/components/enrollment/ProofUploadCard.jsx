import { AlertTriangle, ArrowRight, UploadCloud, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { enrollmentMeta, pricing } from '../../data/enrollment'

const inputClassName =
  'h-9.5 rounded-xl border border-white/10 bg-[#171224] px-3.5 text-xs.5 font-medium text-white outline-none transition focus:border-[#b467ff] focus:ring-1 focus:ring-[#b467ff]/20 placeholder-white/20'

function FieldLabel({ children }) {
  return (
    <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#b467ff]">
      {children}
    </span>
  )
}

function ProofUploadCard({ fileName, formData, onBack, onFieldChange, onFileChange, onSubmit }) {
  return (
    <section
      className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0f0c1b]/90 p-5 text-white shadow-[0_20px_50px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl"
      id="payment-proof-form"
    >
      {/* Background ambient glow inside the card */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#b467ff]/10 blur-2xl" />

      <div className="relative z-10">
        <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#d8beff]">
          <UploadCloud size={12} className="text-[#c595ff]" />
          Upload Payment Proof
        </div>

        <h2 className="[font-family:'Outfit',sans-serif] text-[1.2rem] leading-[1.08] font-bold text-white tracking-tight">
          Submit screenshot for manual verification.
        </h2>

        {/* Warning banner in dark red style */}
        <div className="mt-3.5 rounded-[14px] border border-[#ff5d6c]/20 bg-[#ff5d6c]/8 px-3.5 py-2.5">
          <div className="flex items-start gap-2.5">
            <div className="inline-grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-[#ff5d6c]/12 text-[#ff808d] mt-0.5">
              <AlertTriangle size={13} />
            </div>
            <p className="text-[11px] leading-4 text-[#ffccd1] font-semibold">
              Do not upload a fake screenshot. GMC reviews payments manually before confirming booking.
            </p>
          </div>
        </div>

        <form className="mt-4 grid gap-3.5" onSubmit={onSubmit}>
          <div className="grid gap-3 rounded-[18px] border border-white/[0.05] bg-[#120f21]/85 p-3.5 sm:grid-cols-3">
            <div>
              <FieldLabel>Session Type</FieldLabel>
              <p className="mt-1 text-xs font-semibold text-white/90">{enrollmentMeta.sessionType}</p>
            </div>
            <div>
              <FieldLabel>Payment Method</FieldLabel>
              <p className="mt-1 text-xs font-semibold uppercase text-white/90">
                {enrollmentMeta.paymentMethod.replace('_', ' ')}
              </p>
            </div>
            <div>
              <FieldLabel>Amount Due</FieldLabel>
              <p className="mt-1 text-xs font-semibold text-white/90">{pricing.discountedPrice}</p>
            </div>
          </div>

          <div className="grid gap-3.5 md:grid-cols-2">
            <label className="grid gap-1.5">
              <FieldLabel>Full Name</FieldLabel>
              <input
                className={inputClassName}
                name="fullName"
                onChange={onFieldChange}
                placeholder="Enter your full name"
                type="text"
                value={formData.fullName}
                required
              />
            </label>

            <label className="grid gap-1.5">
              <FieldLabel>WhatsApp Number</FieldLabel>
              <input
                className={inputClassName}
                name="whatsappNumber"
                onChange={onFieldChange}
                placeholder="Enter active WhatsApp number"
                type="tel"
                value={formData.whatsappNumber}
                required
              />
            </label>
          </div>

          <div className="grid gap-3.5 md:grid-cols-2">
            <label className="grid gap-1.5">
              <FieldLabel>Email Address</FieldLabel>
              <input
                className={inputClassName}
                name="email"
                onChange={onFieldChange}
                placeholder="Enter your email address"
                type="email"
                value={formData.email}
                required
              />
            </label>

            <label className="grid gap-1.5">
              <FieldLabel>Transaction Reference</FieldLabel>
              <input
                className={inputClassName}
                name="transactionReference"
                onChange={onFieldChange}
                placeholder="Bank reference, receipt ID, or transaction ID"
                type="text"
                value={formData.transactionReference}
                required
              />
            </label>
          </div>

          <div className="grid gap-3.5 md:grid-cols-2">
            <label className="grid gap-1.5">
              <FieldLabel>Sender Account Last 4 Digits</FieldLabel>
              <input
                className={inputClassName}
                inputMode="numeric"
                maxLength={4}
                name="senderAccountLast4"
                onChange={onFieldChange}
                placeholder="Example: 4821"
                type="text"
                value={formData.senderAccountLast4}
              />
            </label>

            <label className="grid gap-1.5">
              <FieldLabel>Amount Paid</FieldLabel>
              <input
                className={`${inputClassName} text-white/70`}
                name="amountPaid"
                onChange={onFieldChange}
                type="text"
                value={formData.amountPaid}
                readOnly
              />
            </label>
          </div>

          <input name="paymentMethod" type="hidden" value={formData.paymentMethod} />
          <input name="programId" type="hidden" value={formData.programId} />
          <input name="sessionType" type="hidden" value={formData.sessionType} />

          <label className="grid gap-1.5">
            <FieldLabel>Upload Screenshot</FieldLabel>
            <div className="rounded-[18px] border border-dashed border-white/15 bg-[#120f21] p-1.5">
              <label className="flex min-h-[90px] cursor-pointer flex-col items-center justify-center rounded-[14px] border border-white/5 bg-[#171224]/80 px-4 py-3.5 text-center transition hover:border-[#b467ff]/40">
                <div className="inline-grid h-7 w-7 place-items-center rounded-full bg-[#b467ff]/12 text-[#d8beff] hover:scale-105 transition-transform duration-300">
                  <UploadCloud size={15} />
                </div>
                <p className="mt-2 text-xs font-semibold text-white">
                  {fileName || 'Upload payment screenshot here'}
                </p>
                <p className="text-[9.5px] text-white/40">PDF, JPG, JPEG, or PNG</p>
                <input
                  className="sr-only"
                  onChange={onFileChange}
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  required
                />
              </label>
            </div>
          </label>

          <label className="grid gap-1.5">
            <FieldLabel>Notes For Verification</FieldLabel>
            <textarea
              className="min-h-[92px] rounded-xl border border-white/10 bg-[#171224] px-3.5 py-3 text-xs.5 font-medium text-white outline-none transition placeholder-white/20 focus:border-[#b467ff] focus:ring-1 focus:ring-[#b467ff]/20"
              name="notes"
              onChange={onFieldChange}
              placeholder="Optional: mention sender name, bank app used, or anything helpful for manual verification."
              value={formData.notes}
            />
          </label>

          <div className="flex flex-col gap-3.5 pt-3 border-t border-white/[0.06] mt-1 sm:flex-row sm:items-center sm:justify-between">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] text-white/80 hover:text-white transition-colors"
            >
              <MessageCircle size={13.5} className="text-[#c595ff]" />
              <span>Chat with WhatsApp Support</span>
            </a>
            <div className="flex flex-wrap gap-2.5">
              <motion.button
                onClick={onBack}
                className="btn-secondary-site h-8.5 rounded-full px-4.5 text-xs font-bold uppercase tracking-[0.06em] border-white/10 bg-white/[0.03] text-white hover:bg-white/10"
                type="button"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Back
              </motion.button>
              
              <motion.button
                className="btn-primary-site inline-flex h-8.5 items-center gap-1.5 rounded-full px-5 text-xs font-bold uppercase tracking-[0.06em] shadow-[0_6px_20px_rgba(31,143,138,0.2)]"
                type="submit"
                whileHover={{ y: -1.5, shadow: '0_10px_25px_rgba(31,143,138,0.35)' }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Proof
                <ArrowRight size={13} />
              </motion.button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ProofUploadCard
