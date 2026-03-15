import { Github, Linkedin } from 'lucide-react'
import { PROFILE } from '@/lib/constants'

export default function Footer() {
  return (
    <footer
      className="border-t py-8"
      style={{ backgroundColor: 'var(--t-surface)', borderColor: 'var(--t-card-border)' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-body text-sm" style={{ color: 'var(--t-text-3)' }}>
          © {new Date().getFullYear()} James Jiang. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors duration-200 hover:opacity-60"
            style={{ color: 'var(--t-text-3)' }}
          >
            <Github size={18} />
          </a>
          <a
            href={PROFILE.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors duration-200 hover:opacity-60"
            style={{ color: 'var(--t-text-3)' }}
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
