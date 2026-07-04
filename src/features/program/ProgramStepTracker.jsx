import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { programSteps } from './constants'

function ProgramStepTracker({ currentStep, onStepChange }) {
  return (
    <div className="mt-4 mx-auto max-w-[580px] rounded-[22px] border border-white/[0.06] bg-[#0d0919]/60 px-5 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.2)] backdrop-blur-md">
      <div className="relative flex items-center justify-between">
        <div className="absolute left-0 top-[15px] z-0 h-[3px] w-full -translate-y-1/2 rounded-full bg-white/10" />
        <motion.div
          className="absolute left-0 top-[15px] z-0 h-[3px] rounded-full bg-gradient-to-r from-[#b467ff] to-[#8c36ff]"
          initial={{ width: '0%' }}
          animate={{ width: currentStep === 1 ? '0%' : currentStep === 2 ? '50%' : '100%' }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
        />

        {programSteps.map((item) => (
          <button
            key={item.step}
            onClick={() => {
              if (item.step < currentStep) {
                onStepChange(item.step)
              }
            }}
            disabled={item.step >= currentStep}
            className="relative z-10 flex flex-col items-center gap-1.5 focus:outline-none"
          >
            <motion.div
              className={`inline-grid h-7.5 w-7.5 place-items-center rounded-full border text-xs font-bold transition-all duration-300 ${
                currentStep > item.step
                  ? 'border-[#8c36ff] bg-[#8c36ff] text-white'
                  : currentStep === item.step
                    ? 'border-[#b467ff] bg-[#120f21] text-[#e0c3ff] shadow-[0_0_15px_rgba(180,103,255,0.45)]'
                    : 'border-white/10 bg-[#08050e] text-white/30'
              }`}
              animate={{ scale: currentStep === item.step ? 1.15 : 1 }}
            >
              {currentStep > item.step ? <Check size={14} /> : item.step}
            </motion.div>
            <span
              className={`text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 ${
                currentStep >= item.step ? 'text-[#e2c7ff]' : 'text-white/30'
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProgramStepTracker
