import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ScholarshipIntro from '../../features/home/scholarship/ScholarshipIntro'
import { workflowCards } from '../../features/home/scholarship/scholarshipData'
import ScholarshipWorkflowSlider from '../../features/home/scholarship/ScholarshipWorkflowSlider'
import SectionReveal from '../SectionReveal'

function ScholarshipSolutionSection() {
  const sliderCards = [...workflowCards, ...workflowCards]

  return (
    <section
      className="relative mt-0 overflow-hidden bg-[linear-gradient(180deg,#f7f3fb_0%,#f3eef9_52%,#efe8f8_100%)] py-6 text-[#09090b] sm:py-8 lg:min-h-screen lg:py-2"
      id="why-session-matters"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-5 bg-gradient-to-b from-[#0b0910] to-transparent sm:h-6" />
      <div className="pointer-events-none absolute inset-y-0 left-[-10%] w-[28%] bg-[radial-gradient(circle_at_center,rgba(180,103,255,0.16)_0%,rgba(180,103,255,0.06)_42%,transparent_76%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-y-0 right-[-8%] w-[30%] bg-[radial-gradient(circle_at_center,rgba(143,67,255,0.14)_0%,rgba(143,67,255,0.05)_40%,transparent_76%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-[24%] top-[10%] h-[220px] bg-[radial-gradient(circle,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.35)_38%,transparent_78%)] blur-3xl" />
      <div className="relative mx-auto flex w-full max-w-[1320px] items-center px-4 sm:px-5 lg:min-h-screen">
        <div className="w-full">
          <ScholarshipIntro />
          <ScholarshipWorkflowSlider
            sliderCards={sliderCards}
            workflowCardCount={workflowCards.length}
          />

          <SectionReveal className="mt-4 flex justify-center lg:mt-3">
            <Link
              className="btn-primary-site min-h-[62px] w-full max-w-[620px] rounded-[24px] px-5 text-center [font-family:'Outfit',sans-serif] text-base font-semibold uppercase sm:min-h-[72px] sm:text-[1.05rem]"
              to="/program"
            >
              Book Your Consultation <ArrowRight size={18} />
            </Link>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}

export default ScholarshipSolutionSection
