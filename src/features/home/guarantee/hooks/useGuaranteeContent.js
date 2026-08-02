import { useEffect, useState } from 'react'
import { getGuaranteeContent } from '../api/guaranteeContentService'
import { defaultGuaranteeContent } from '../content/defaultGuaranteeContent'

export function useGuaranteeContent() {
  const [content, setContent] = useState(defaultGuaranteeContent)

  useEffect(() => {
    let isMounted = true

    async function loadContent() {
      try {
        const response = await getGuaranteeContent()

        if (isMounted) {
          setContent(response)
        }
      } catch (error) {
        console.error('Failed to load guarantee content:', error)
      }
    }

    loadContent()

    return () => {
      isMounted = false
    }
  }, [])

  return {
    content,
  }
}
