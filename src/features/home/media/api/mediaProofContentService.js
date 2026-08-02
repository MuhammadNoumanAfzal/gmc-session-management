import { apiClient } from '../../../../services/apiClient'
import { defaultMediaProofContent } from '../content/defaultMediaProofContent'

function normalizeProofItems(items, fallbackItems) {
  if (!Array.isArray(items) || items.length === 0) {
    return fallbackItems
  }

  const normalizedItems = items
    .map((item) => ({
      title: typeof item?.title === 'string' ? item.title.trim() : '',
      subtitle: typeof item?.subtitle === 'string' ? item.subtitle.trim() : '',
      image: typeof item?.image === 'string' ? item.image.trim() : '',
    }))
    .filter((item) => item.title && item.subtitle && item.image)

  return normalizedItems.length > 0 ? normalizedItems : fallbackItems
}

function normalizeMediaProofContent(data = {}) {
  return {
    badgeText: data.badgeText || defaultMediaProofContent.badgeText,
    heading: data.heading || defaultMediaProofContent.heading,
    description: data.description || defaultMediaProofContent.description,
    videoItems: normalizeProofItems(data.videoItems, defaultMediaProofContent.videoItems),
    reviewItems: normalizeProofItems(data.reviewItems, defaultMediaProofContent.reviewItems),
  }
}

export async function getMediaProofContent() {
  const response = await apiClient('/api/content/media-proof')

  return normalizeMediaProofContent(response?.data)
}
