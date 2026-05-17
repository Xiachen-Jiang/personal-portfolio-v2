'use client'

import { useEffect, useState } from 'react'
import { Eye } from 'lucide-react'

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    const recorded = sessionStorage.getItem('view_recorded')

    if (recorded) {
      fetch('/api/views')
        .then((res) => res.json())
        .then((data) => setCount(data.count))
        .catch(() => {})
    } else {
      fetch('/api/views', { method: 'POST' })
        .then((res) => res.json())
        .then((data) => {
          setCount(data.count)
          sessionStorage.setItem('view_recorded', '1')
        })
        .catch(() => {})
    }
  }, [])

  if (count === null) return null

  return (
    <div
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 px-3 py-2 rounded-full border backdrop-blur-md text-xs font-body transition-opacity duration-500"
      style={{
        backgroundColor: 'var(--t-card-bg)',
        borderColor: 'var(--t-card-border)',
        color: 'var(--t-text-3)',
      }}
    >
      <Eye size={14} style={{ color: 'var(--t-accent-1)' }} />
      <span>{count.toLocaleString()} views</span>
    </div>
  )
}
