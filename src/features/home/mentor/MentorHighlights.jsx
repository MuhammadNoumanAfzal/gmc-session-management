function MentorHighlights() {
  return (
    <div className="mt-4.5 grid max-w-[580px] gap-2.5 sm:grid-cols-3">
      <div className="rounded-[16px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] px-3.5 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md">
        <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#cfb1ff]">Direction</p>
        <p className="mt-1.5 text-xs leading-5 text-white/72">Know where to apply and why.</p>
      </div>
      <div className="rounded-[16px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] px-3.5 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md">
        <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#cfb1ff]">Feedback</p>
        <p className="mt-1.5 text-xs leading-5 text-white/72">Improve your documents fast.</p>
      </div>
      <div className="rounded-[16px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] px-3.5 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md">
        <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#cfb1ff]">Clarity</p>
        <p className="mt-1.5 text-xs leading-5 text-white/72">Move with a cleaner plan.</p>
      </div>
    </div>
  )
}

export default MentorHighlights
