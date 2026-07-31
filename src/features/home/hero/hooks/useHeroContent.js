import { useEffect, useState } from 'react'
import { getHeroContent } from '../api/heroContentService'
import { defaultHeroContent } from '../content/defaultHeroContent'

export function useHeroContent() {
  const [heroContent, setHeroContent] = useState(defaultHeroContent)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    async function loadHeroContent() {
      try {
        const content = await getHeroContent()

        if (isMounted) {
          setHeroContent(content)
        }
      } catch (error) {
        console.error('Failed to load hero content:', error)
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    loadHeroContent()

    return () => {
      isMounted = false
    }
  }, [])

  return {
    heroContent,
    isLoading,
  }
}
