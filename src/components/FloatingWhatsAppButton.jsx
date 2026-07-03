import { MessageCircle, Phone } from 'lucide-react'

function FloatingWhatsAppButton() {
  return (
    <a
      aria-label="Contact on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-15 w-15 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_rgba(37,211,102,0.35)] transition hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(37,211,102,0.42)] sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
      href="https://wa.me/"
      rel="noreferrer"
      target="_blank"
      title="WhatsApp"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/25" />
      <span className="relative inline-grid h-11 w-11 place-items-center rounded-full bg-[#1ebe5d] sm:h-12 sm:w-12">
        <MessageCircle size={20} strokeWidth={2.4} />
        <Phone className="absolute" size={10} strokeWidth={2.6} />
      </span>
    </a>
  )
}

export default FloatingWhatsAppButton
