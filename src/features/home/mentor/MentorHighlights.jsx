function MentorHighlights({ highlights }) {
  return (
    <div className="mt-4.5 grid max-w-[580px] gap-2.5 sm:grid-cols-3">
      {highlights.map((highlight) => (
        <div
          key={highlight.label}
          className="rounded-[16px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] px-3.5 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#cfb1ff]">{highlight.label}</p>
          <p className="mt-1.5 text-xs leading-5 text-white/72">{highlight.text}</p>
        </div>
      ))}
    </div>
  )
}

export default MentorHighlights
