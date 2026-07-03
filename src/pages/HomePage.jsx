import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton'
import PageTransition from '../components/PageTransition'
import SiteFooter from '../components/SiteFooter'
import SiteNavbar from '../components/SiteNavbar'
import GuaranteeSection from '../components/landing/GuaranteeSection'
import FaqSection from '../components/landing/FaqSection'
import HeroSection from '../components/landing/HeroSection'
import MediaProofSection from '../components/landing/MediaProofSection'
import MentorTrustSection from '../components/landing/MentorTrustSection'
import SessionAudienceSection from '../components/landing/SessionAudienceSection'
import ScholarshipSolutionSection from '../components/landing/ScholarshipSolutionSection'
import StrategyRibbonSection from '../components/landing/StrategyRibbonSection'

function HomePage() {
  return (
    <div className="relative overflow-hidden" id="top">
      <div className="pointer-events-none fixed inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:86px_86px] [mask-image:radial-gradient(circle_at_center,black_45%,transparent_92%)]" />
      <SiteNavbar />
      <FloatingWhatsAppButton />
      <PageTransition>
        <HeroSection />
        <ScholarshipSolutionSection />
        <StrategyRibbonSection />
        <MentorTrustSection />
        <GuaranteeSection />
        <MediaProofSection />
        <SessionAudienceSection />
        <FaqSection />
        <SiteFooter />
      </PageTransition>
    </div>
  )
}

export default HomePage
