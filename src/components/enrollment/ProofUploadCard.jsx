import { AlertTriangle, ArrowRight, MessageCircleMore, UploadCloud } from 'lucide-react'

function ProofUploadCard({ fileName, onFileChange }) {
  return (
    <section
      className="rounded-[26px] border border-[#e6d8fb] bg-white p-4 text-[#0d0b12] shadow-[0_20px_56px_rgba(40,18,72,0.07)] sm:p-4.5"
      id="payment-proof-form"
    >
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#0f0c15] px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[#d8beff]">
        <UploadCloud size={14} />
        Upload Payment Proof
      </div>

      <h2 className="[font-family:'Sora',sans-serif] text-[1.35rem] leading-[1.08] font-extrabold text-[#111016] sm:text-[1.7rem]">
        Submit your screenshot for manual verification.
      </h2>

      <div className="mt-4 rounded-[22px] border border-[#f1d6d9] bg-[#fff7f8] px-3.5 py-3.5">
        <div className="flex items-start gap-3">
          <div className="inline-grid h-8 w-8 shrink-0 place-items-center rounded-2xl bg-[#ff5d6c]/12 text-[#e04456]">
            <AlertTriangle size={16} />
          </div>
          <p className="text-sm leading-5 text-[#5a4450]">
            Do not upload a fake or unrelated screenshot. GMC reviews payments manually before a
            session is confirmed.
          </p>
        </div>
      </div>

      <form className="mt-4 grid gap-3.5">
        <div className="grid gap-3.5 md:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#7c32e6]">
              Full Name
            </span>
            <input
              className="h-10 rounded-2xl border border-[#e8ddf8] bg-[#fbf8ff] px-4 text-sm font-medium text-[#17131e] outline-none transition focus:border-[#b467ff]"
              placeholder="Enter your full name"
              type="text"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#7c32e6]">
              WhatsApp Number
            </span>
            <input
              className="h-10 rounded-2xl border border-[#e8ddf8] bg-[#fbf8ff] px-4 text-sm font-medium text-[#17131e] outline-none transition focus:border-[#b467ff]"
              placeholder="Enter active WhatsApp number"
              type="tel"
            />
          </label>
        </div>

        <label className="grid gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#7c32e6]">
            Email Address
          </span>
          <input
            className="h-10 rounded-2xl border border-[#e8ddf8] bg-[#fbf8ff] px-4 text-sm font-medium text-[#17131e] outline-none transition focus:border-[#b467ff]"
            placeholder="Enter your email address"
            type="email"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#7c32e6]">
            Upload Screenshot
          </span>
          <div className="rounded-[22px] border border-dashed border-[#d6bbfb] bg-[#fbf8ff] p-3">
            <label className="flex min-h-[140px] cursor-pointer flex-col items-center justify-center rounded-[18px] border border-[#ebdefc] bg-white px-4 py-5 text-center transition hover:border-[#b467ff]">
              <div className="inline-grid h-10 w-10 place-items-center rounded-full bg-[#b467ff]/12 text-[#8d41ef]">
                <UploadCloud size={20} />
              </div>
              <p className="mt-3 text-[15px] font-semibold text-[#18131f]">
                {fileName || 'Upload screenshot file here'}
              </p>
              <p className="mt-1 text-xs text-[#686176]">PDF, JPG, JPEG, or PNG</p>
              <input
                className="sr-only"
                onChange={onFileChange}
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
              />
            </label>
          </div>
        </label>

        <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-5 text-[#5f586d]">
            Need help after payment? Share your proof on WhatsApp support as backup.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-[#d6bbfb] bg-white px-4 text-sm font-bold text-[#7c32e6] transition hover:border-[#b467ff] hover:text-[#5d20c5]"
              href="https://wa.me/"
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircleMore size={16} />
              WhatsApp Support
            </a>
            <button
              className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#cb84ff] via-[#b467ff] to-[#8c36ff] px-5 text-sm font-extrabold uppercase tracking-[0.04em] text-white shadow-[0_14px_28px_rgba(140,54,255,0.18)] transition hover:-translate-y-0.5"
              type="button"
            >
              Submit Proof
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default ProofUploadCard
