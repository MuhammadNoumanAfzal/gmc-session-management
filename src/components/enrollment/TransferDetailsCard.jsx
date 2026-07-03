import { ArrowDownRight, Copy, Landmark, Sparkles } from 'lucide-react'
import { bankDetails, paymentSteps, pricing, supportNotes } from '../../data/enrollment'

function TransferDetailsCard({ copiedField, onCopy }) {
  return (
    <section className="rounded-[26px] border border-[#e6d8fb] bg-white p-4 text-[#0d0b12] shadow-[0_20px_56px_rgba(40,18,72,0.07)] sm:p-4.5">
      <div className="inline-flex items-center gap-2 rounded-full border border-[#d6bbfb] bg-[#f5ecff] px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[#8c36ff]">
        <Sparkles size={14} />
        {pricing.badge}
      </div>

      <h1 className="mt-3 max-w-[13ch] [font-family:'Sora',sans-serif] text-[1.7rem] leading-[1.02] font-extrabold text-[#0d0b12] sm:text-[2.2rem]">
        Get enrolled now.
      </h1>

      <div className="mt-4 overflow-hidden rounded-[24px] border border-[#ddbffd] bg-[linear-gradient(135deg,#17111f_0%,#28173a_48%,#8c36ff_100%)] text-white shadow-[0_18px_34px_rgba(140,54,255,0.13)]">
        <div className="flex flex-col gap-2.5 px-4 py-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#e6d6ff]">
              Confirm your slot at
            </p>
            <div className="mt-2 flex flex-wrap items-end gap-3">
              <span className="[font-family:'Sora',sans-serif] text-[2rem] leading-none font-extrabold sm:text-[2.5rem]">
                {pricing.discountedPrice}
              </span>
              <span className="pb-1 text-sm font-semibold text-white/55 line-through sm:text-base">
                {pricing.originalPrice}
              </span>
            </div>
          </div>
          <p className="max-w-[14rem] text-[13px] leading-5 text-white/78">
            Pay the discounted amount first, then upload the screenshot below.
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <a
          className="btn-primary-site h-10 rounded-full px-4 text-[12px] font-extrabold uppercase tracking-[0.04em]"
          href="#payment-proof-form"
        >
          Go to payment form
          <ArrowDownRight size={16} />
        </a>
      </div>

      <p className="mt-3 max-w-[38rem] text-[0.92rem] leading-6 text-[#5f586d]">
        {pricing.title}
      </p>

      <div className="mt-5 grid gap-2.5">
        {paymentSteps.map((step, index) => (
          <div
            className="flex items-start gap-3 rounded-2xl border border-[#eee5fa] bg-[#fbf8ff] px-3.5 py-2.5"
            key={step}
          >
            <div className="inline-grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-r from-[#c986ff] to-[#9f53f9] text-xs font-extrabold text-white">
              {index + 1}
            </div>
            <p className="text-sm font-medium leading-5 text-[#1b1626]">{step}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 overflow-hidden rounded-[24px] border border-[#e7d7fb]">
        <div className="flex items-center gap-2 bg-[#0d0b12] px-4 py-3 text-white">
          <Landmark size={18} className="text-[#c68bff]" />
          <p className="[font-family:'Sora',sans-serif] text-base font-bold">Online Bank Transfer</p>
        </div>

        <div className="grid gap-2.5 bg-white px-4 py-4">
          {bankDetails.map((item) => (
            <div
              className="flex flex-col gap-2 rounded-2xl border border-[#efe7fb] bg-[#faf7ff] px-3.5 py-2.5 sm:flex-row sm:items-center sm:justify-between"
              key={item.label}
            >
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#8c36ff]">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-[#18131f] sm:text-[0.9rem]">
                  {item.value}
                </p>
              </div>
              <button
                className="btn-secondary-light h-9 self-start rounded-full px-3.5 text-[11px] font-bold uppercase tracking-[0.06em]"
                onClick={() => onCopy(item.label, item.value)}
                type="button"
              >
                <Copy size={14} />
                {copiedField === item.label ? 'Copied' : 'Copy'}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 rounded-[24px] border border-[#eadcfb] bg-[#fbf8ff] px-4 py-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#8c36ff]">
          Important notes
        </p>
        <div className="mt-3 grid gap-2.5">
          {supportNotes.map((note) => (
            <div className="rounded-2xl border border-[#efe7fb] bg-white px-3.5 py-2.5" key={note}>
              <p className="text-sm leading-5 text-[#4d4660]">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TransferDetailsCard
