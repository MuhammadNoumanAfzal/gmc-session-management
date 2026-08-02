import { useEffect, useState } from 'react'
import { getFaqContent } from '../api/faqContentService'
import { defaultFaqContent } from '../content/defaultFaqContent'

export function useFaqContent() {
  const [content, setContent] = useState(defaultFaqContent)

  useEffect(() => {
    let isMounted = true

    async function loadContent() {
      try {
        const response = await getFaqContent()

        if (isMounted) {
          setContent(response)
        }
      } catch (error) {
        console.error('Failed to load FAQ content:', error)
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
