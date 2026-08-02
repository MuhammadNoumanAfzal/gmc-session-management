import { apiClient } from '../../../../services/apiClient'
import { defaultScholarshipSolutionContent } from '../content/defaultScholarshipSolutionContent'

function normalizeFeaturePills(featurePills) {
  if (!Array.isArray(featurePills) || featurePills.length === 0) {
    return defaultScholarshipSolutionContent.featurePills
  }

  const normalizedPills = featurePills
    .map((pill) => (typeof pill === 'string' ? pill.trim() : ''))
    .filter(Boolean)

  return normalizedPills.length > 0 ? normalizedPills : defaultScholarshipSolutionContent.featurePills
}

function normalizeWorkflowCards(workflowCards) {
  if (!Array.isArray(workflowCards) || workflowCards.length === 0) {
    return defaultScholarshipSolutionContent.workflowCards
  }

  const normalizedCards = workflowCards
    .map((card) => ({
      iconKey:
        typeof card?.iconKey === 'string'
          ? card.iconKey.trim()
          : typeof card?.icon_key === 'string'
            ? card.icon_key.trim()
            : '',
      title: typeof card?.title === 'string' ? card.title.trim() : '',
      description: typeof card?.description === 'string' ? card.description.trim() : '',
      details: typeof card?.details === 'string' ? card.details.trim() : '',
    }))
    .filter((card) => card.iconKey && card.title && card.description && card.details)

  return normalizedCards.length > 0 ? normalizedCards : defaultScholarshipSolutionContent.workflowCards
}

function normalizeScholarshipSolutionContent(data = {}) {
  return {
    badgeText: data.badgeText || defaultScholarshipSolutionContent.badgeText,
    heading: data.heading || defaultScholarshipSolutionContent.heading,
    featurePills: normalizeFeaturePills(data.featurePills),
    workflowCards: normalizeWorkflowCards(data.workflowCards),
    ctaLabel: data.ctaLabel || defaultScholarshipSolutionContent.ctaLabel,
    ctaUrl: data.ctaUrl || defaultScholarshipSolutionContent.ctaUrl,
  }
}

export async function getScholarshipSolutionContent() {
  const response = await apiClient('/api/content/scholarship-solution')

  return normalizeScholarshipSolutionContent(response?.data)
}
