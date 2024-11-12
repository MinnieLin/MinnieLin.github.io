'use client'
import { useState, useEffect } from 'react'
import { useAnalyticsEvent } from '../hooks/useAnalytics'
import { useDarkMode } from '../hooks/useDarkMode'
import { Moon20, Sun20 } from './icons'

export function ThemeToggle({ className }: { className?: string }) {
  const [isDark, setIsDark] = useDarkMode()
  const { trackCustomEvent } = useAnalyticsEvent()
  const [mounted, setMounted] = useState(false)

  // Wait until mounted on client
  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <div className={className} /> // Placeholder with same dimensions
  }

  return (
    <button
      aria-label={isDark ? 'Activate Light Mode' : 'Activate Dark Mode'}
      title={isDark ? 'Activate Light Mode' : 'Activate Dark Mode'}
      onClick={() => {
        setIsDark(!isDark)
        trackCustomEvent({ eventName: 'toggle-theme' })
      }}
      className={className}
    >
      {isDark ? <Moon20 /> : <Sun20 />}
    </button>
  )
}
