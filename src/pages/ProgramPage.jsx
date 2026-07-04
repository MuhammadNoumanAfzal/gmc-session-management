import { useRef, useState } from 'react'
import PageTransition from '../components/PageTransition'
import SiteFooter from '../components/SiteFooter'
import { enrollmentMeta, pricing } from '../data/enrollment'
import ProgramBackground from '../features/program/ProgramBackground'
import ProgramHeaderCard from '../features/program/ProgramHeaderCard'
import ProgramStepPanels from '../features/program/ProgramStepPanels'
import ProgramStepTracker from '../features/program/ProgramStepTracker'

function ProgramPage() {
  const [copiedField, setCopiedField] = useState('')
  const [fileName, setFileName] = useState('')
  const [currentStep, setCurrentStep] = useState(1)
  const [paymentProofForm, setPaymentProofForm] = useState({
    fullName: '',
    whatsappNumber: '',
    email: '',
    transactionReference: '',
    senderAccountLast4: '',
    amountPaid: pricing.discountedAmountValue,
    notes: '',
    paymentMethod: enrollmentMeta.paymentMethod,
    programId: enrollmentMeta.programId,
    sessionType: enrollmentMeta.sessionType,
  })
  const headerRef = useRef(null)
  const [headerSpotlight, setHeaderSpotlight] = useState({ x: 0, y: 0 })
  const [isHeaderHovered, setIsHeaderHovered] = useState(false)

  const handleHeaderMouseMove = (event) => {
    if (!headerRef.current) {
      return
    }

    const rect = headerRef.current.getBoundingClientRect()
    setHeaderSpotlight({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
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

  const handlePaymentProofFieldChange = (event) => {
    const { name, value } = event.target
    setPaymentProofForm((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handlePaymentProofSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07050e] text-white">
      <ProgramBackground />

      <PageTransition>
        <section className="relative z-10 px-0 py-6 pb-0 sm:py-8 sm:pb-0">
          <div className="mx-auto w-full max-w-[1220px] px-4 sm:px-5">
            <ProgramHeaderCard
              headerRef={headerRef}
              isHeaderHovered={isHeaderHovered}
              onMouseLeave={() => setIsHeaderHovered(false)}
              onMouseMove={handleHeaderMouseMove}
              spotlight={headerSpotlight}
            />

            <ProgramStepTracker currentStep={currentStep} onStepChange={setCurrentStep} />

            <ProgramStepPanels
              copiedField={copiedField}
              currentStep={currentStep}
              fileName={fileName}
              onBackToReview={() => setCurrentStep(1)}
              onCopy={handleCopy}
              onFormFieldChange={handlePaymentProofFieldChange}
              onFileChange={handleFileChange}
              onFormSubmit={handlePaymentProofSubmit}
              onGoToPayment={() => setCurrentStep(2)}
              onGoToProof={() => setCurrentStep(3)}
              paymentProofForm={paymentProofForm}
            />

            <div className="relative left-1/2 mt-7 w-screen -translate-x-1/2">
              <SiteFooter />
            </div>
          </div>
        </section>
      </PageTransition>
    </div>
  )
}

export default ProgramPage
