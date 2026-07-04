import SectionReveal from '../../../components/SectionReveal'
import ScholarshipWorkflowCard from './ScholarshipWorkflowCard'

function ScholarshipWorkflowSlider({ sliderCards, workflowCardCount }) {
  return (
    <SectionReveal className="mt-4">
      <div className="scholarship-slider relative overflow-hidden py-1">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-12 bg-[linear-gradient(90deg,#f3eef9_0%,rgba(243,238,249,0)_100%)] sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-12 bg-[linear-gradient(270deg,#f1ebf8_0%,rgba(241,235,248,0)_100%)] sm:w-20" />
        <div className="scholarship-slider-track flex w-max gap-4">
          {sliderCards.map((card, index) => (
            <ScholarshipWorkflowCard
              key={`${card.title}-${index}`}
              card={card}
              index={index}
              total={workflowCardCount}
            />
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}

export default ScholarshipWorkflowSlider
