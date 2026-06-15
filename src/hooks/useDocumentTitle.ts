import { useEffect } from 'react'

/**
 * Applies a page-specific browser title and restores the portfolio title when
 * the caller unmounts. It has no side effects beyond document metadata.
 */
export const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title
    return () => {
      document.title = 'Jaden | Full-stack Developer'
    }
  }, [title])
}
