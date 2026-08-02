import { apiClient } from '../../../../services/apiClient'
import { defaultFaqContent } from '../content/defaultFaqContent'

function normalizeFaqItems(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return defaultFaqContent.faqItems
  }

  const normalizedItems = items
    .map((item) => ({
      question: typeof item?.question === 'string' ? item.question.trim() : '',
      answer: typeof item?.answer === 'string' ? item.answer.trim() : '',
    }))
    .filter((item) => item.question && item.answer)

  return normalizedItems.length > 0 ? normalizedItems : defaultFaqContent.faqItems
}

function normalizeFaqContent(data = {}) {
  return {
    badgeText: data.badgeText || defaultFaqContent.badgeText,
    headingLine1: data.headingLine1 || defaultFaqContent.headingLine1,
    headingLine2: data.headingLine2 || defaultFaqContent.headingLine2,
    description: data.description || defaultFaqContent.description,
    faqItems: normalizeFaqItems(data.faqItems),
  }
}

export async function getFaqContent() {
  const response = await apiClient('/api/content/faq')

  return normalizeFaqContent(response?.data)
}
