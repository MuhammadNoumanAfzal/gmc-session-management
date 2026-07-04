function ScholarshipWorkflowCard({ card, index, total }) {
  const Icon = card.icon

  return (
    <article className="scholarship-slider-card h-[270px] w-[250px] shrink-0 cursor-pointer [perspective:1400px] sm:h-[300px] sm:w-[280px]">
      <div className="scholarship-slider-card-inner relative h-full w-full">
        <div className="scholarship-slider-card-face scholarship-slider-card-front relative overflow-hidden rounded-[26px] border border-white/8 bg-[linear-gradient(180deg,#120d1c_0%,#09070f_100%)] p-5 shadow-[0_20px_44px_rgba(6,4,12,0.42),inset_0_1px_0_rgba(255,255,255,0.06)]">
          <div className="scholarship-card-border-motion" />
          <div className="pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(180,103,255,0.38)_0%,rgba(180,103,255,0.14)_42%,transparent_74%)] blur-2xl" />
          <div className="pointer-events-none absolute -bottom-12 -right-8 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(140,54,255,0.26)_0%,rgba(140,54,255,0.08)_46%,transparent_76%)] blur-2xl" />
          <div className="relative z-[1] mb-4 inline-grid h-12 w-12 place-items-center rounded-2xl border border-white/8 bg-[#2a1f3f] text-[#d4b8ff]">
            <Icon size={20} />
          </div>
          <p className="relative z-[1] mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#bfa6df]">
            Step {((index % total) + 1).toString().padStart(2, '0')}
          </p>
          <h3 className="relative z-[1] [font-family:'Outfit',sans-serif] text-[1.35rem] font-semibold leading-[1.05] text-white">
            {card.title}
          </h3>
          <p className="relative z-[1] mt-3 text-sm leading-6 text-[#d9d2e6]/78">{card.description}</p>
        </div>

        <div className="scholarship-slider-card-face scholarship-slider-card-back relative overflow-hidden rounded-[26px] border border-[#3c2d57] bg-[linear-gradient(145deg,#171123_0%,#0d0a14_58%,#1f1630_100%)] p-5 text-white shadow-[0_20px_44px_rgba(10,6,18,0.45)]">
          <div className="scholarship-card-border-motion" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(180,103,255,0.36)_0%,rgba(180,103,255,0.12)_44%,transparent_74%)] blur-2xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(140,54,255,0.24)_0%,rgba(140,54,255,0.08)_46%,transparent_76%)] blur-2xl" />
          <div className="relative z-[1] mb-4 inline-grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-[#302247] text-[#e1ccff]">
            <Icon size={20} />
          </div>
          <p className="relative z-[1] mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#d3bdf1]">
            More insight
          </p>
          <h3 className="relative z-[1] [font-family:'Outfit',sans-serif] text-[1.2rem] font-semibold leading-[1.08]">
            {card.title}
          </h3>
          <p className="relative z-[1] mt-3 text-sm leading-6 text-[#ebe5f4]/86">{card.details}</p>
        </div>
      </div>
    </article>
  )
}

export default ScholarshipWorkflowCard
