import { apiClient } from '../../../../services/apiClient'
import { defaultSessionAudienceContent } from '../content/defaultSessionAudienceContent'

const allowedIcons = new Set(['graduation-cap', 'search-check', 'file-text', 'compass'])

function normalizeAudienceCards(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return defaultSessionAudienceContent.audienceCards
  }

  const normalizedItems = items
    .map((item, index) => ({
      iconKey:
        typeof item?.iconKey === 'string' && allowedIcons.has(item.iconKey.trim())
          ? item.iconKey.trim()
          : defaultSessionAudienceContent.audienceCards[index]?.iconKey || 'graduation-cap',
      title: typeof item?.title === 'string' ? item.title.trim() : '',
      description: typeof item?.description === 'string' ? item.description.trim() : '',
    }))
    .filter((item) => item.title && item.description)

  return normalizedItems.length > 0 ? normalizedItems : defaultSessionAudienceContent.audienceCards
}

function normalizeSessionAudienceContent(data = {}) {
  return {
    badgeText: data.badgeText || defaultSessionAudienceContent.badgeText,
    headingLine1: data.headingLine1 || defaultSessionAudienceContent.headingLine1,
    headingLine2: data.headingLine2 || defaultSessionAudienceContent.headingLine2,
    description: data.description || defaultSessionAudienceContent.description,
    audienceCards: normalizeAudienceCards(data.audienceCards),
  }
}

export async function getSessionAudienceContent() {
  const response = await apiClient('/api/content/session-audience')

  return normalizeSessionAudienceContent(response?.data)
}
