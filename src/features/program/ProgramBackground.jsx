function ProgramBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <div className="absolute inset-x-0 top-0 h-[360px] bg-[radial-gradient(circle_at_top,_rgba(180,103,255,0.2),_transparent_45%)]" />
      <div className="absolute top-[20%] left-[-10%] h-[300px] w-[300px] rounded-full bg-[#8c36ff]/10 blur-3xl" />
      <div className="absolute right-[-10%] bottom-[30%] h-[320px] w-[320px] rounded-full bg-[#b467ff]/8 blur-3xl" />
    </div>
  )
}

export default ProgramBackground
