import { useEffect, useState } from 'react'
import { getEnrollmentFlowContent } from '../api/enrollmentFlowContentService'
import { defaultEnrollmentFlowContent } from '../content/defaultEnrollmentFlowContent'

export function useEnrollmentFlowContent() {
  const [content, setContent] = useState(defaultEnrollmentFlowContent)

  useEffect(() => {
    let isMounted = true

    async function loadContent() {
      try {
        const response = await getEnrollmentFlowContent()

        if (isMounted) {
          setContent(response)
        }
      } catch (error) {
        console.error('Failed to load enrollment flow content:', error)
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
