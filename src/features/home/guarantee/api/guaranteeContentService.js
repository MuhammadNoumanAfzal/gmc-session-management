import { apiClient } from '../../../../services/apiClient'
import { defaultGuaranteeContent } from '../content/defaultGuaranteeContent'

function normalizeStringArray(items, fallbackItems) {
  if (!Array.isArray(items) || items.length === 0) {
    return fallbackItems
  }

  const normalizedItems = items
    .map((item) => (typeof item === 'string' ? item.trim() : ''))
    .filter(Boolean)

  return normalizedItems.length > 0 ? normalizedItems : fallbackItems
}

function normalizeGuaranteeContent(data = {}) {
  return {
    topBadgeText: data.topBadgeText || defaultGuaranteeContent.topBadgeText,
    sectionBadgeText: data.sectionBadgeText || defaultGuaranteeContent.sectionBadgeText,
    headingLine1: data.headingLine1 || defaultGuaranteeContent.headingLine1,
    headingLine2: data.headingLine2 || defaultGuaranteeContent.headingLine2,
    description: data.description || defaultGuaranteeContent.description,
    guaranteePoints: normalizeStringArray(data.guaranteePoints, defaultGuaranteeContent.guaranteePoints),
    principleLabel: data.principleLabel || defaultGuaranteeContent.principleLabel,
    principleTitle: data.principleTitle || defaultGuaranteeContent.principleTitle,
    principleDescription: data.principleDescription || defaultGuaranteeContent.principleDescription,
    sealBadgeText: data.sealBadgeText || defaultGuaranteeContent.sealBadgeText,
    sealValueText: data.sealValueText || defaultGuaranteeContent.sealValueText,
    sealFooterText: data.sealFooterText || defaultGuaranteeContent.sealFooterText,
  }
}

export async function getGuaranteeContent() {
  const response = await apiClient('/api/content/guarantee')

  return normalizeGuaranteeContent(response?.data)
}
