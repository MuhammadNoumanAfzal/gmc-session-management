import { apiClient } from '../../../../services/apiClient'
import { defaultHeroContent } from '../content/defaultHeroContent'

function normalizeTitleMessages(titleMessages) {
  if (!Array.isArray(titleMessages) || titleMessages.length === 0) {
    return defaultHeroContent.titleMessages
  }

  const normalizedMessages = titleMessages
    .map((message) => ({
      line1: typeof message?.line1 === 'string' ? message.line1.trim() : '',
      line2: typeof message?.line2 === 'string' ? message.line2.trim() : '',
    }))
    .filter((message) => message.line1 && message.line2)

  return normalizedMessages.length > 0 ? normalizedMessages : defaultHeroContent.titleMessages
}

function normalizePositiveInteger(value, fallbackValue) {
  const parsedValue = Number(value)

  if (!Number.isInteger(parsedValue) || parsedValue < 1) {
    return fallbackValue
  }

  return parsedValue
}

function normalizeHeroContent(data = {}) {
  return {
    announcementText: data.announcementText || defaultHeroContent.announcementText,
    badgeText: data.badgeText || defaultHeroContent.badgeText,
    titleMessages: normalizeTitleMessages(data.titleMessages),
    heroImageUrl: data.heroImageUrl || defaultHeroContent.heroImageUrl,
    heroImageAlt: data.heroImageAlt || defaultHeroContent.heroImageAlt,
    ctaEyebrow: data.ctaEyebrow || defaultHeroContent.ctaEyebrow,
    ctaLabel: data.ctaLabel || defaultHeroContent.ctaLabel,
    ctaUrl: data.ctaUrl || defaultHeroContent.ctaUrl,
    trustTitle: data.trustTitle || defaultHeroContent.trustTitle,
    trustDescription: data.trustDescription || defaultHeroContent.trustDescription,
    trustAvatarCount: normalizePositiveInteger(data.trustAvatarCount, defaultHeroContent.trustAvatarCount),
  }
}

export async function getHeroContent() {
  const response = await apiClient('/api/content/hero')

  return normalizeHeroContent(response?.data)
}
