import { useRef, useState } from 'react'
import Swal from 'sweetalert2'
import PageTransition from '../components/PageTransition'
import SiteFooter from '../components/SiteFooter'
import { enrollmentMeta, pricing } from '../data/enrollment'
import ProgramBackground from '../features/program/ProgramBackground'
import ProgramHeaderCard from '../features/program/ProgramHeaderCard'
import ProgramStepPanels from '../features/program/ProgramStepPanels'
import ProgramStepTracker from '../features/program/ProgramStepTracker'

function ProgramPage() {
  const paymentProofEndpoint =
    import.meta.env.VITE_PAYMENT_PROOF_ENDPOINT ?? 'http://127.0.0.1:8000/api/payment-proofs'
  const [copiedField, setCopiedField] = useState('')
  const [fileName, setFileName] = useState('')
  const [paymentProofFile, setPaymentProofFile] = useState(null)
  const [currentStep, setCurrentStep] = useState(1)
  const [submitState, setSubmitState] = useState({
    isSubmitting: false,
    isSuccess: false,
    message: '',
    submissionId: '',
    fieldErrors: {},
  })
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
    setPaymentProofFile(nextFile ?? null)
    setFileName(nextFile ? nextFile.name : '')
    setSubmitState((current) => ({
      ...current,
      message: '',
      isSuccess: false,
      fieldErrors: {
        ...current.fieldErrors,
        paymentProof: undefined,
      },
    }))
  }

  const handlePaymentProofFieldChange = (event) => {
    const { name, value } = event.target
    setPaymentProofForm((current) => ({
      ...current,
      [name]: value,
    }))
    setSubmitState((current) => ({
      ...current,
      message: '',
      isSuccess: false,
      fieldErrors: {
        ...current.fieldErrors,
        [name]: undefined,
      },
    }))
  }

  const handlePaymentProofSubmit = async (event) => {
    event.preventDefault()

    const fieldErrors = {}
    const cleanedWhatsappNumber = paymentProofForm.whatsappNumber.replace(/\D/g, '')
    const senderLast4 = paymentProofForm.senderAccountLast4.trim()

    if (!paymentProofForm.fullName.trim()) {
      fieldErrors.fullName = ['Full name is required.']
    }

    if (!paymentProofForm.email.trim()) {
      fieldErrors.email = ['Email is required.']
    }

    if (!cleanedWhatsappNumber || cleanedWhatsappNumber.length < 10 || cleanedWhatsappNumber.length > 20) {
      fieldErrors.whatsappNumber = ['WhatsApp number must contain 10 to 20 digits.']
    }

    if (!paymentProofForm.transactionReference.trim()) {
      fieldErrors.transactionReference = ['Transaction reference is required.']
    }

    if (senderLast4 && !/^\d{4}$/.test(senderLast4)) {
      fieldErrors.senderAccountLast4 = ['Sender account last 4 digits must be exactly 4 digits.']
    }

    if (!/^\d+(\.\d+)?$/.test(String(paymentProofForm.amountPaid).trim())) {
      fieldErrors.amountPaid = ['Amount paid must be numeric.']
    }

    if (!paymentProofFile) {
      fieldErrors.paymentProof = ['Payment proof file is required.']
    } else {
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png']
      if (!allowedTypes.includes(paymentProofFile.type)) {
        fieldErrors.paymentProof = ['Payment proof must be a PDF, JPG, JPEG, or PNG file.']
      }
      if (paymentProofFile.size > 10 * 1024 * 1024) {
        fieldErrors.paymentProof = ['Payment proof file size must not exceed 10MB.']
      }
    }

    if (Object.keys(fieldErrors).length > 0) {
      setSubmitState({
        isSubmitting: false,
        isSuccess: false,
        message: '',
        submissionId: '',
        fieldErrors,
      })
      await Swal.fire({
        title: 'Check your form',
        text: 'Please fix the highlighted fields and try again.',
        icon: 'warning',
        confirmButtonText: 'Okay',
        background: '#120f21',
        color: '#ffffff',
        confirmButtonColor: '#8c36ff',
      })
      return
    }

    const formData = new FormData()
    formData.append('fullName', paymentProofForm.fullName.trim())
    formData.append('whatsappNumber', cleanedWhatsappNumber)
    formData.append('email', paymentProofForm.email.trim())
    formData.append('transactionReference', paymentProofForm.transactionReference.trim())
    formData.append('senderAccountLast4', senderLast4)
    formData.append('amountPaid', String(paymentProofForm.amountPaid).trim())
    formData.append('notes', paymentProofForm.notes.trim())
    formData.append('paymentMethod', paymentProofForm.paymentMethod)
    formData.append('programId', paymentProofForm.programId)
    formData.append('sessionType', paymentProofForm.sessionType)
    formData.append('paymentProof', paymentProofFile)

    setSubmitState({
      isSubmitting: true,
      isSuccess: false,
      message: '',
      submissionId: '',
      fieldErrors: {},
    })

    try {
      const response = await fetch(paymentProofEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      const data = await response.json()

      if (!response.ok || data.success === false) {
        setSubmitState({
          isSubmitting: false,
          isSuccess: false,
          message: '',
          submissionId: '',
          fieldErrors: data.errors || {},
        })
        await Swal.fire({
          title: 'Submission failed',
          text: data.message || 'Unable to submit payment proof right now.',
          icon: 'error',
          confirmButtonText: 'Close',
          background: '#120f21',
          color: '#ffffff',
          confirmButtonColor: '#8c36ff',
        })
        return
      }

      setSubmitState({
        isSubmitting: false,
        isSuccess: true,
        message: '',
        submissionId: data.submissionId || '',
        fieldErrors: {},
      })
      await Swal.fire({
        title: 'Proof submitted',
        text: data.message || 'Payment proof submitted successfully.',
        icon: 'success',
        confirmButtonText: 'Great',
        background: '#120f21',
        color: '#ffffff',
        confirmButtonColor: '#8c36ff',
        footer: data.submissionId ? `Submission ID: ${data.submissionId}` : '',
      })
    } catch {
      setSubmitState({
        isSubmitting: false,
        isSuccess: false,
        message: '',
        submissionId: '',
        fieldErrors: {},
      })
      await Swal.fire({
        title: 'Server not reachable',
        text: 'Could not connect to the payment verification server. Make sure Laravel is running on http://127.0.0.1:8000.',
        icon: 'error',
        confirmButtonText: 'Close',
        background: '#120f21',
        color: '#ffffff',
        confirmButtonColor: '#8c36ff',
      })
    }
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
              submitState={submitState}
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
