import { apiClient } from '../../../../services/apiClient'
import { defaultMentorTrustContent } from '../content/defaultMentorTrustContent'

function normalizeStringArray(items, fallbackItems) {
  if (!Array.isArray(items) || items.length === 0) {
    return fallbackItems
  }

  const normalizedItems = items
    .map((item) => (typeof item === 'string' ? item.trim() : ''))
    .filter(Boolean)

  return normalizedItems.length > 0 ? normalizedItems : fallbackItems
}

function normalizeHighlights(highlights) {
  if (!Array.isArray(highlights) || highlights.length === 0) {
    return defaultMentorTrustContent.highlights
  }

  const normalizedHighlights = highlights
    .map((highlight) => ({
      label: typeof highlight?.label === 'string' ? highlight.label.trim() : '',
      text: typeof highlight?.text === 'string' ? highlight.text.trim() : '',
    }))
    .filter((highlight) => highlight.label && highlight.text)

  return normalizedHighlights.length > 0 ? normalizedHighlights : defaultMentorTrustContent.highlights
}

function normalizeGalleryCards(galleryCards) {
  if (!Array.isArray(galleryCards) || galleryCards.length === 0) {
    return defaultMentorTrustContent.galleryCards
  }

  const normalizedCards = galleryCards
    .map((card) => ({
      image: typeof card?.image === 'string' ? card.image.trim() : '',
      title: typeof card?.title === 'string' ? card.title.trim() : '',
      copy: typeof card?.copy === 'string' ? card.copy.trim() : '',
    }))
    .filter((card) => card.image && card.title && card.copy)

  return normalizedCards.length > 0 ? normalizedCards : defaultMentorTrustContent.galleryCards
}

function normalizeMentorTrustContent(data = {}) {
  return {
    badgeText: data.badgeText || defaultMentorTrustContent.badgeText,
    headingPrefix: data.headingPrefix || defaultMentorTrustContent.headingPrefix,
    headingAccent: data.headingAccent || defaultMentorTrustContent.headingAccent,
    introParagraph: data.introParagraph || defaultMentorTrustContent.introParagraph,
    bodyParagraphs: normalizeStringArray(data.bodyParagraphs, defaultMentorTrustContent.bodyParagraphs),
    highlights: normalizeHighlights(data.highlights),
    ctaLabel: data.ctaLabel || defaultMentorTrustContent.ctaLabel,
    ctaUrl: data.ctaUrl || defaultMentorTrustContent.ctaUrl,
    ctaNote: data.ctaNote || defaultMentorTrustContent.ctaNote,
    galleryCards: normalizeGalleryCards(data.galleryCards),
  }
}

export async function getMentorTrustContent() {
  const response = await apiClient('/api/content/mentor-trust')

  return normalizeMentorTrustContent(response?.data)
}
