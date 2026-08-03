import { apiClient } from '../../../services/apiClient'
import { defaultEnrollmentFlowContent } from '../content/defaultEnrollmentFlowContent'

function normalizeStepItems(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return defaultEnrollmentFlowContent.stepItems
  }

  const normalized = items
    .map((item, index) => ({
      step:
        typeof item?.step === 'number'
          ? item.step
          : defaultEnrollmentFlowContent.stepItems[index]?.step || index + 1,
      label: typeof item?.label === 'string' ? item.label.trim() : '',
    }))
    .filter((item) => item.step && item.label)

  return normalized.length > 0 ? normalized : defaultEnrollmentFlowContent.stepItems
}

function normalizeKeyValueItems(items, fallbackItems) {
  if (!Array.isArray(items) || items.length === 0) {
    return fallbackItems
  }

  const normalized = items
    .map((item) => ({
      label: typeof item?.label === 'string' ? item.label.trim() : '',
      value: typeof item?.value === 'string' ? item.value.trim() : '',
    }))
    .filter((item) => item.label && item.value)

  return normalized.length > 0 ? normalized : fallbackItems
}

function normalizeStringItems(items, fallbackItems) {
  if (!Array.isArray(items) || items.length === 0) {
    return fallbackItems
  }

  const normalized = items.map((item) => (typeof item === 'string' ? item.trim() : '')).filter(Boolean)

  return normalized.length > 0 ? normalized : fallbackItems
}

function normalizeEnrollmentFlowContent(data = {}) {
  return {
    headerBadgeText: data.headerBadgeText || defaultEnrollmentFlowContent.headerBadgeText,
    headerHeadingLine1: data.headerHeadingLine1 || defaultEnrollmentFlowContent.headerHeadingLine1,
    headerHeadingHighlight:
      data.headerHeadingHighlight || defaultEnrollmentFlowContent.headerHeadingHighlight,
    backButtonText: data.backButtonText || defaultEnrollmentFlowContent.backButtonText,
    stepItems: normalizeStepItems(data.stepItems),
    summaryBadgeText: data.summaryBadgeText || defaultEnrollmentFlowContent.summaryBadgeText,
    summaryHeading: data.summaryHeading || defaultEnrollmentFlowContent.summaryHeading,
    summarySubtitle: data.summarySubtitle || defaultEnrollmentFlowContent.summarySubtitle,
    priceLabel: data.priceLabel || defaultEnrollmentFlowContent.priceLabel,
    discountedPrice: data.discountedPrice || defaultEnrollmentFlowContent.discountedPrice,
    discountedAmountValue:
      data.discountedAmountValue || defaultEnrollmentFlowContent.discountedAmountValue,
    originalPrice: data.originalPrice || defaultEnrollmentFlowContent.originalPrice,
    urgencyText: data.urgencyText || defaultEnrollmentFlowContent.urgencyText,
    progressPercentage:
      typeof data.progressPercentage === 'number'
        ? data.progressPercentage
        : defaultEnrollmentFlowContent.progressPercentage,
    includesHeading: data.includesHeading || defaultEnrollmentFlowContent.includesHeading,
    includesItems: normalizeStringItems(
      data.includesItems,
      defaultEnrollmentFlowContent.includesItems,
    ),
    summaryButtonText: data.summaryButtonText || defaultEnrollmentFlowContent.summaryButtonText,
    transferTitle: data.transferTitle || defaultEnrollmentFlowContent.transferTitle,
    bankDetails: normalizeKeyValueItems(data.bankDetails, defaultEnrollmentFlowContent.bankDetails),
    supportNotesHeading:
      data.supportNotesHeading || defaultEnrollmentFlowContent.supportNotesHeading,
    supportNotes: normalizeStringItems(
      data.supportNotes,
      defaultEnrollmentFlowContent.supportNotes,
    ),
    transferBackButtonText:
      data.transferBackButtonText || defaultEnrollmentFlowContent.transferBackButtonText,
    transferButtonText: data.transferButtonText || defaultEnrollmentFlowContent.transferButtonText,
    proofBadgeText: data.proofBadgeText || defaultEnrollmentFlowContent.proofBadgeText,
    proofHeading: data.proofHeading || defaultEnrollmentFlowContent.proofHeading,
    proofWarningText: data.proofWarningText || defaultEnrollmentFlowContent.proofWarningText,
    proofSupportText: data.proofSupportText || defaultEnrollmentFlowContent.proofSupportText,
    proofBackButtonText:
      data.proofBackButtonText || defaultEnrollmentFlowContent.proofBackButtonText,
    proofSubmitButtonText:
      data.proofSubmitButtonText || defaultEnrollmentFlowContent.proofSubmitButtonText,
    metaProgramId: data.metaProgramId || defaultEnrollmentFlowContent.metaProgramId,
    metaSessionType: data.metaSessionType || defaultEnrollmentFlowContent.metaSessionType,
    metaPaymentMethod: data.metaPaymentMethod || defaultEnrollmentFlowContent.metaPaymentMethod,
  }
}

export async function getEnrollmentFlowContent() {
  const response = await apiClient('/api/content/enrollment-flow')

  return normalizeEnrollmentFlowContent(response?.data)
}
