'use client'

import { usePersona } from '@/lib/PersonaContext'

/* ── Tech Leader — dark glassmorphism ─────────────────────────────────────── */
const TECH_VARS = `
  --t-bg:               #0a0a0f;
  --t-surface:          #12121a;
  --t-card-bg:          rgba(255, 255, 255, 0.05);
  --t-card-border:      rgba(255, 255, 255, 0.10);
  --t-card-shadow:      none;
  --t-card-shadow-hover:0 8px 32px rgba(124, 58, 237, 0.20);
  --t-text-1:           #f1f5f9;
  --t-text-2:           #94a3b8;
  --t-text-3:           #475569;
  --t-accent-1:         #7c3aed;
  --t-accent-2:         #22d3ee;
  --t-orb-1:            rgba(124, 58, 237, 0.15);
  --t-orb-2:            rgba(34, 211, 238, 0.10);
  --t-eyebrow-bg:       rgba(124, 58, 237, 0.05);
  --t-eyebrow-border:   rgba(124, 58, 237, 0.30);
  --t-timeline-line:    rgba(124, 58, 237, 0.30);
  --t-grid-line:        rgba(255, 255, 255, 0.10);
`

/* ── HR Manager — clean light ─────────────────────────────────────────────── */
const HR_VARS = `
  --t-bg:               #f4f6f8;
  --t-surface:          #ffffff;
  --t-card-bg:          #ffffff;
  --t-card-border:      rgba(0, 0, 0, 0.07);
  --t-card-shadow:      4px 4px 10px rgba(0, 0, 0, 0.08), -2px -2px 6px rgba(255, 255, 255, 0.80);
  --t-card-shadow-hover:6px 6px 16px rgba(0, 0, 0, 0.12), -3px -3px 10px rgba(255, 255, 255, 0.90);
  --t-text-1:           #0f172a;
  --t-text-2:           #475569;
  --t-text-3:           #94a3b8;
  --t-accent-1:         #2563eb;
  --t-accent-2:         #0ea5e9;
  --t-orb-1:            rgba(37, 99, 235, 0.06);
  --t-orb-2:            rgba(14, 165, 233, 0.05);
  --t-eyebrow-bg:       rgba(37, 99, 235, 0.06);
  --t-eyebrow-border:   rgba(37, 99, 235, 0.20);
  --t-timeline-line:    rgba(37, 99, 235, 0.20);
  --t-grid-line:        rgba(0, 0, 0, 0.05);
`

/**
 * Injects CSS custom property tokens on :root at runtime via a <style> tag.
 * This bypasses Tailwind v4 / Turbopack compile-time stripping of attribute-
 * selector blocks and static var() resolution.
 */
export default function ThemeVars() {
  const { persona } = usePersona()
  const isHR = persona === 'hr'
  const vars = isHR ? HR_VARS : TECH_VARS

  const bodyBg   = isHR ? '#f4f6f8' : '#0a0a0f'
  const bodyText = isHR ? '#0f172a' : '#f1f5f9'
  const trackBg  = isHR ? '#e8edf2' : '#0a0a0f'
  const thumbBg  = isHR ? '#2563eb' : '#7c3aed'
  const thumbHov = isHR ? '#0ea5e9' : '#a855f7'

  return (
    <style suppressHydrationWarning>{`
      :root { ${vars} }
      body {
        background-color: ${bodyBg};
        color: ${bodyText};
        transition: background-color 0.4s ease, color 0.4s ease;
      }
      ::-webkit-scrollbar-track { background: ${trackBg}; }
      ::-webkit-scrollbar-thumb { background: ${thumbBg}; }
      ::-webkit-scrollbar-thumb:hover { background: ${thumbHov}; }
    `}</style>
  )
}
