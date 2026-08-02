import { apiClient } from '../../../../services/apiClient'
import { defaultStrategyRibbonContent } from '../content/defaultStrategyRibbonContent'

function normalizeRibbonItems(items, fallbackItems) {
  if (!Array.isArray(items) || items.length === 0) {
    return fallbackItems
  }

  const normalizedItems = items
    .map((item) => (typeof item === 'string' ? item.trim() : ''))
    .filter(Boolean)

  return normalizedItems.length > 0 ? normalizedItems : fallbackItems
}

function normalizeStrategyRibbonContent(data = {}) {
  return {
    frontRibbonItems: normalizeRibbonItems(
      data.frontRibbonItems,
      defaultStrategyRibbonContent.frontRibbonItems,
    ),
    backRibbonItems: normalizeRibbonItems(
      data.backRibbonItems,
      defaultStrategyRibbonContent.backRibbonItems,
    ),
  }
}

export async function getStrategyRibbonContent() {
  const response = await apiClient('/api/content/strategy-ribbon')

  return normalizeStrategyRibbonContent(response?.data)
}
