import { motion } from 'framer-motion'

const frontRibbonItems = [
  'GMC Scholarship Strategy',
  'Application Clarity',
  'Admissions Growth',
  'Profile Strength',
]

const backRibbonItems = [
  'Scholarship Positioning',
  'SOP Direction',
  'Trust Building',
  'Application Strategy',
]

function RibbonRow({
  items,
  duration,
  itemClassName = '',
  symbolClassName = '',
  direction = 'left',
}) {
  const repeated = [...items, ...items]
  const animationX = direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%']

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max items-center"
        animate={{ x: animationX }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
        style={{ willChange: 'transform' }}
      >
        {repeated.map((item, index) => (
          <div
            className={`flex items-center gap-5 px-6 py-3 [font-family:'Sora',sans-serif] text-sm font-extrabold uppercase tracking-[0.08em] sm:px-8 sm:text-[1.7rem] ${itemClassName}`}
            key={`${item}-${index}`}
          >
            <span>{item}</span>
            <span className={symbolClassName}>✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

function StrategyRibbonSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8f6fb_0%,#120f19_48%,#08080b_100%)] py-6 sm:py-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(180,103,255,0.16),_transparent_34%),linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(139,57,255,0.06)_100%)]" />

      <div className="relative mx-auto flex min-h-[120px] max-w-[1440px] items-center justify-center">
        <div className="pointer-events-none absolute left-1/2 top-[calc(50%+42px)] z-0 w-[150%] -translate-x-1/2 -translate-y-14 rotate-[3.8deg] opacity-100">
          <div className="border-y border-[#c995ff]/10 bg-[linear-gradient(90deg,rgba(19,14,28,0.82)_0%,rgba(42,29,59,0.78)_50%,rgba(19,14,28,0.82)_100%)] py-1.5 shadow-[0_10px_26px_rgba(10,7,18,0.18)]">
            <RibbonRow
              items={backRibbonItems}
              duration={26}
              direction="right"
              itemClassName="text-[#eedcff]/26"
              symbolClassName="text-[#d8b7ff]/18"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[154%] -translate-x-1/2 -translate-y-1/2 rotate-[-6deg] shadow-[0_22px_54px_rgba(140,54,255,0.30)]">
          <div className="bg-[linear-gradient(90deg,#8f43ff_0%,#bb72ff_28%,#e2adff_50%,#b467ff_72%,#9348ff_100%)] py-2">
            <RibbonRow
              items={frontRibbonItems}
              duration={18}
              direction="left"
              itemClassName="text-white"
              symbolClassName="text-[#fff4ff]/90"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default StrategyRibbonSection
