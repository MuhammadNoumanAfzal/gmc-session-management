import { ArrowLeft } from 'lucide-react'
import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import EnrollmentSummaryCard from '../components/enrollment/EnrollmentSummaryCard'
import ProofUploadCard from '../components/enrollment/ProofUploadCard'
import TransferDetailsCard from '../components/enrollment/TransferDetailsCard'
import PageTransition from '../components/PageTransition'
import SectionReveal from '../components/SectionReveal'
import SiteFooter from '../components/SiteFooter'

function ProgramPage() {
  const [copiedField, setCopiedField] = useState('')
  const [fileName, setFileName] = useState('')
  const [currentStep, setCurrentStep] = useState(1) // 1: Review, 2: Transfer, 3: Verify
  
  const headerRef = useRef(null)
  const [headerSpotlight, setHeaderSpotlight] = useState({ x: 0, y: 0 })
  const [isHeaderHovered, setIsHeaderHovered] = useState(false)

  const handleHeaderMouseMove = (e) => {
    if (!headerRef.current) return
    const rect = headerRef.current.getBoundingClientRect()
    setHeaderSpotlight({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
    setIsHeaderHovered(true)
  }

  const handleCopy = async (label, value) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopiedField(label)
      window.setTimeout(() => setCopiedField(''), 1800)
    } catch {
      setCopiedField('')
    }
  }

  const handleFileChange = (event) => {
    const nextFile = event.target.files?.[0]
    setFileName(nextFile ? nextFile.name : '')
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07050e] text-white">
      {/* Signature glow blobs */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-x-0 top-0 h-[360px] bg-[radial-gradient(circle_at_top,_rgba(180,103,255,0.2),_transparent_45%)]" />
        <div className="absolute top-[20%] left-[-10%] h-[300px] w-[300px] rounded-full bg-[#8c36ff]/10 blur-3xl" />
        <div className="absolute bottom-[30%] right-[-10%] h-[320px] w-[320px] rounded-full bg-[#b467ff]/8 blur-3xl" />
      </div>

      <PageTransition>
        <section className="relative z-10 px-0 py-6 pb-0 sm:py-8 sm:pb-0">
          <div className="mx-auto w-full max-w-[1220px] px-4 sm:px-5">
            
            {/* Header section card */}
            <SectionReveal>
              <div 
                ref={headerRef}
                onMouseMove={handleHeaderMouseMove}
                onMouseLeave={() => setIsHeaderHovered(false)}
                className="relative overflow-hidden rounded-[24px] border border-white/8 bg-[#100c1a]/95 px-5 py-4.5 text-white shadow-[0_24px_68px_rgba(8,8,11,0.45)] sm:px-6"
              >
                {/* Interactive cursor spotlight glow */}
                {isHeaderHovered && (
                  <div
                    className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-300 z-0"
                    style={{
                      background: `radial-gradient(320px circle at ${headerSpotlight.x}px ${headerSpotlight.y}px, rgba(180, 103, 255, 0.16), transparent 80%)`,
                    }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-white/[0.01] to-[#b467ff]/[0.02] pointer-events-none" />

                <div className="relative z-10 flex flex-col gap-4.5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-col">
                    <div className="inline-flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b467ff] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#b467ff]"></span>
                      </span>
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#d0b3ff] [font-family:'Outfit',sans-serif]">
                        GMC Scholarship Consultancy
                      </p>
                    </div>
                    <h1 className="mt-1.5 [font-family:'Outfit',sans-serif] text-[1.4rem] leading-[1.08] font-bold text-white sm:text-[1.8rem] lg:text-[2.05rem]">
                      Complete your booking with a{' '}
                      <span className="bg-gradient-to-r from-white via-[#d6a8ff] to-[#a352ff] bg-clip-text text-transparent">
                        clean, verified payment.
                      </span>
                    </h1>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="self-start sm:self-auto shrink-0">
                    <Link
                      className="group inline-flex items-center gap-2 h-10 rounded-full px-5 text-xs font-bold text-white border border-white/10 bg-white/[0.03] hover:bg-[#b467ff]/20 hover:border-[#b467ff]/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-[0_0_15px_rgba(180,103,255,0.2)]"
                      to="/"
                    >
                      <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-0.5 text-white/70 group-hover:text-white" />
                      <span>Back to landing page</span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </SectionReveal>

            {/* Step Progress Tracker bar */}
            <div className="mt-4 mx-auto max-w-[580px] px-4">
              <div className="relative flex items-center justify-between">
                {/* Connecting track line */}
                <div className="absolute left-0 top-[14px] h-[3px] w-full -translate-y-1/2 bg-white/10 z-0 rounded-full" />
                <motion.div 
                  className="absolute left-0 top-[14px] h-[3px] bg-gradient-to-r from-[#b467ff] to-[#8c36ff] z-0 rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: currentStep === 1 ? '0%' : currentStep === 2 ? '50%' : '100%' }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                />

                {/* Steps markers */}
                {[
                  { step: 1, label: 'Review Slot' },
                  { step: 2, label: 'Bank Transfer' },
                  { step: 3, label: 'Verify Proof' }
                ].map((item) => (
                  <button
                    key={item.step}
                    onClick={() => {
                      if (item.step < currentStep) setCurrentStep(item.step)
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
                      animate={{
                        scale: currentStep === item.step ? 1.15 : 1
                      }}
                    >
                      {currentStep > item.step ? '✓' : item.step}
                    </motion.div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 ${
                      currentStep >= item.step ? 'text-[#e2c7ff]' : 'text-white/30'
                    }`}>
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step Content Card Container (uncluttered single progressive layout) */}
            <div className="mt-4 mx-auto max-w-[580px] px-2 min-h-[380px]">
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.24, ease: 'easeInOut' }}
                  >
                    <EnrollmentSummaryCard onNext={() => setCurrentStep(2)} />
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.24, ease: 'easeInOut' }}
                  >
                    <TransferDetailsCard 
                      copiedField={copiedField} 
                      onCopy={handleCopy} 
                      onBack={() => setCurrentStep(1)} 
                      onNext={() => setCurrentStep(3)} 
                    />
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.24, ease: 'easeInOut' }}
                  >
                    <ProofUploadCard 
                      fileName={fileName} 
                      onFileChange={handleFileChange} 
                      onBack={() => setCurrentStep(2)} 
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Compact footer overlay */}
            <div className="relative left-1/2 mt-7 w-screen -translate-x-1/2">
              <SiteFooter compact />
            </div>
          </div>
        </section>
      </PageTransition>
    </div>
  )
}

export default ProgramPage
