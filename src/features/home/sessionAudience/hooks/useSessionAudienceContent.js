import { useEffect, useState } from 'react'
import { getSessionAudienceContent } from '../api/sessionAudienceContentService'
import { defaultSessionAudienceContent } from '../content/defaultSessionAudienceContent'

export function useSessionAudienceContent() {
  const [content, setContent] = useState(defaultSessionAudienceContent)

  useEffect(() => {
    let isMounted = true

    async function loadContent() {
      try {
        const response = await getSessionAudienceContent()

        if (isMounted) {
          setContent(response)
        }
      } catch (error) {
        console.error('Failed to load session audience content:', error)
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
