import { useState, useEffect } from 'react'

export function useVisibleSections(sectionIds: string[], defaultSection?: string) {
  const [visibleSections, setVisibleSections] = useState<string[]>(
    defaultSection ? [defaultSection] : []
  )

  useEffect(() => {
    const handleScroll = () => {
      const visible: string[] = []

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          const viewportHeight = window.innerHeight
          const isInView = rect.top < viewportHeight - 100 && rect.bottom > 120

          if (isInView) {
            visible.push(sectionId)
          }
        }
      }

      setVisibleSections(visible.length > 0 ? visible : defaultSection ? [defaultSection] : [])
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, defaultSection])

  return visibleSections
}
