import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import EnrollmentSummaryCard from '../components/enrollment/EnrollmentSummaryCard'
import ProofUploadCard from '../components/enrollment/ProofUploadCard'
import TransferDetailsCard from '../components/enrollment/TransferDetailsCard'
import PageTransition from '../components/PageTransition'
import SectionReveal from '../components/SectionReveal'
import SiteFooter from '../components/SiteFooter'

function ProgramPage() {
  const [copiedField, setCopiedField] = useState('')
  const [fileName, setFileName] = useState('')

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
    <div className="relative min-h-screen overflow-hidden bg-[#f6f2fb] text-[#0d0b12]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[320px] bg-[radial-gradient(circle_at_top,_rgba(180,103,255,0.26),_transparent_42%),linear-gradient(180deg,_#0b0910_0%,_#120d18_24%,_rgba(246,242,251,0)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-[220px] h-[180px] bg-gradient-to-b from-[#d6b4ff1a] to-transparent" />
      <PageTransition>
        <section className="px-0 py-5 pb-0 sm:py-6 sm:pb-0">
          <div className="mx-auto w-full max-w-[1140px] px-4 sm:px-5">
            <SectionReveal className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#08080b] px-4.5 py-4.5 text-white shadow-[0_24px_68px_rgba(8,8,11,0.3)] sm:px-5 sm:py-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(180,103,255,0.18),_transparent_25%),radial-gradient(circle_at_bottom_left,_rgba(100,160,255,0.08),_transparent_24%)]" />
              <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#cfb1ff]">
                    GMC Scholarship Consultancy
                  </p>
                  <h1 className="mt-2 max-w-[19ch] [font-family:'Outfit',sans-serif] text-[1.45rem] leading-[1.06] font-bold text-white sm:text-[1.95rem] lg:text-[2.2rem]">
                    Complete your consultation booking with a clean, verified payment flow.
                  </h1>
                </div>
                <Link
                  className="inline-flex h-10 items-center justify-center gap-2 self-start rounded-full border border-white/12 bg-white/[0.04] px-4 text-[13px] font-bold text-white transition hover:border-[#b467ff]/50 hover:bg-white/[0.06]"
                  to="/"
                >
                  <ArrowLeft size={18} />
                  Back to landing page
                </Link>
              </div>
            </SectionReveal>

            <div className="mt-4 grid items-start gap-4 lg:grid-cols-[1.02fr_0.98fr]">
              <div className="grid gap-4">
                <SectionReveal>
                  <TransferDetailsCard copiedField={copiedField} onCopy={handleCopy} />
                </SectionReveal>
              </div>

              <SectionReveal className="lg:sticky lg:top-20">
                <EnrollmentSummaryCard />
              </SectionReveal>
            </div>

            <SectionReveal className="mt-4">
              <ProofUploadCard fileName={fileName} onFileChange={handleFileChange} />
            </SectionReveal>

            <div className="relative left-1/2 mt-6 w-screen -translate-x-1/2">
              <SiteFooter compact />
            </div>
          </div>
        </section>
      </PageTransition>
    </div>
  )
}

export default ProgramPage
