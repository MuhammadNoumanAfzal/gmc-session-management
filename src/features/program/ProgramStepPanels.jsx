import { AnimatePresence, motion } from 'framer-motion'
import EnrollmentSummaryCard from '../../components/enrollment/EnrollmentSummaryCard'
import ProofUploadCard from '../../components/enrollment/ProofUploadCard'
import TransferDetailsCard from '../../components/enrollment/TransferDetailsCard'

function StepPanel({ children, panelKey }) {
  return (
    <motion.div
      key={panelKey}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.24, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

function ProgramStepPanels({
  copiedField,
  currentStep,
  fileName,
  onBackToReview,
  onCopy,
  onFormFieldChange,
  onFileChange,
  onFormSubmit,
  onGoToPayment,
  onGoToProof,
  paymentProofForm,
  submitState,
}) {
  return (
    <div className="mt-4 mx-auto min-h-[380px] max-w-[580px] px-2">
      <AnimatePresence mode="wait">
        {currentStep === 1 && (
          <StepPanel panelKey="step-1">
            <EnrollmentSummaryCard onNext={onGoToPayment} />
          </StepPanel>
        )}

        {currentStep === 2 && (
          <StepPanel panelKey="step-2">
            <TransferDetailsCard
              copiedField={copiedField}
              onCopy={onCopy}
              onBack={onBackToReview}
              onNext={onGoToProof}
            />
          </StepPanel>
        )}

        {currentStep === 3 && (
          <StepPanel panelKey="step-3">
            <ProofUploadCard
              fileName={fileName}
              formData={paymentProofForm}
              onBack={onGoToPayment}
              onFieldChange={onFormFieldChange}
              onFileChange={onFileChange}
              onSubmit={onFormSubmit}
              submitState={submitState}
            />
          </StepPanel>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProgramStepPanels
