import { useEffect, useState } from 'react'
import { getMentorTrustContent } from '../api/mentorTrustContentService'
import { defaultMentorTrustContent } from '../content/defaultMentorTrustContent'

export function useMentorTrustContent() {
  const [content, setContent] = useState(defaultMentorTrustContent)

  useEffect(() => {
    let isMounted = true

    async function loadContent() {
      try {
        const response = await getMentorTrustContent()

        if (isMounted) {
          setContent(response)
        }
      } catch (error) {
        console.error('Failed to load mentor trust content:', error)
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
