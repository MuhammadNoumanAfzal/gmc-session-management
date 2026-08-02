import { useEffect, useState } from 'react'
import { getStrategyRibbonContent } from '../api/strategyRibbonContentService'
import { defaultStrategyRibbonContent } from '../content/defaultStrategyRibbonContent'

export function useStrategyRibbonContent() {
  const [content, setContent] = useState(defaultStrategyRibbonContent)

  useEffect(() => {
    let isMounted = true

    async function loadContent() {
      try {
        const response = await getStrategyRibbonContent()

        if (isMounted) {
          setContent(response)
        }
      } catch (error) {
        console.error('Failed to load strategy ribbon content:', error)
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
