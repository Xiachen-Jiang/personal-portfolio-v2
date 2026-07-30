import { Github, Linkedin } from 'lucide-react'
import { PROFILE } from '@/lib/constants'

export default function Footer() {
  return (
    <footer
      className="border-t-[3px] py-8"
      style={{ backgroundColor: 'var(--nb-bg)', borderColor: 'var(--nb-ink)' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-body text-sm font-semibold" style={{ color: 'var(--nb-ink)' }}>
          © {new Date().getFullYear()} James Jiang.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 border-[3px] transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px]"
            style={{
              color: 'var(--nb-ink)',
              borderColor: 'var(--nb-ink)',
              backgroundColor: 'var(--nb-paper)',
              borderRadius: '1.2rem',
              boxShadow: '3px 3px 0 0 var(--nb-ink)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = 'none')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '3px 3px 0 0 var(--nb-ink)')}
          >
            <Github size={18} />
          </a>
          <a
            href={PROFILE.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 border-[3px] transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px]"
            style={{
              color: 'var(--nb-ink)',
              borderColor: 'var(--nb-ink)',
              backgroundColor: 'var(--nb-paper)',
              borderRadius: '1.2rem',
              boxShadow: '3px 3px 0 0 var(--nb-ink)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = 'none')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '3px 3px 0 0 var(--nb-ink)')}
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
