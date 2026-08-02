import { useEffect, useState } from 'react'
import { getScholarshipSolutionContent } from '../api/scholarshipSolutionContentService'
import { defaultScholarshipSolutionContent } from '../content/defaultScholarshipSolutionContent'

export function useScholarshipSolutionContent() {
  const [content, setContent] = useState(defaultScholarshipSolutionContent)

  useEffect(() => {
    let isMounted = true

    async function loadContent() {
      try {
        const response = await getScholarshipSolutionContent()

        if (isMounted) {
          setContent(response)
        }
      } catch (error) {
        console.error('Failed to load scholarship solution content:', error)
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
