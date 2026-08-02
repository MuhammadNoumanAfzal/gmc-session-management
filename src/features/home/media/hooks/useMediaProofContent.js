import { useEffect, useState } from 'react'
import { getMediaProofContent } from '../api/mediaProofContentService'
import { defaultMediaProofContent } from '../content/defaultMediaProofContent'

export function useMediaProofContent() {
  const [content, setContent] = useState(defaultMediaProofContent)

  useEffect(() => {
    let isMounted = true

    async function loadContent() {
      try {
        const response = await getMediaProofContent()

        if (isMounted) {
          setContent(response)
        }
      } catch (error) {
        console.error('Failed to load media proof content:', error)
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
