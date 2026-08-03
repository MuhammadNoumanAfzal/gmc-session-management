const LOCAL_FALLBACK_API_BASE_URL = 'http://127.0.0.1:8000'

function normalizeUrl(value) {
  return value ? value.replace(/\/$/, '') : ''
}

function isBrowserLocalHost() {
  if (typeof window === 'undefined') {
    return false
  }

  return ['localhost', '127.0.0.1'].includes(window.location.hostname)
}

const configuredApiBaseUrl = normalizeUrl(import.meta.env.VITE_API_BASE_URL)

export const API_BASE_URL = configuredApiBaseUrl || (isBrowserLocalHost() ? LOCAL_FALLBACK_API_BASE_URL : '')

export const PAYMENT_PROOF_ENDPOINT = normalizeUrl(import.meta.env.VITE_PAYMENT_PROOF_ENDPOINT) || (
  API_BASE_URL ? `${API_BASE_URL}/api/payment-proofs` : ''
)
