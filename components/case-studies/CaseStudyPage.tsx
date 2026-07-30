import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { CaseStudy, ContentBlock } from '@/lib/constants'

const ACCENT = 'var(--nb-yellow)'

function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'heading':
            return (
              <h2
                key={i}
                className="w-fit border-[3px] px-3 py-1 font-display font-extrabold text-lg -rotate-1"
                style={{
                  borderColor: 'var(--nb-ink)',
                  backgroundColor: ACCENT,
                  color: 'var(--nb-ink)',
                  boxShadow: '4px 4px 0 0 var(--nb-ink)',
                }}
              >
                {block.text}
              </h2>
            )
          case 'paragraph':
            return (
              <p
                key={i}
                className="font-body text-base leading-relaxed"
                style={{ color: 'var(--nb-ink)' }}
              >
                {block.text}
              </p>
            )
          case 'list':
            return (
              <ul key={i} className="space-y-2 pl-1">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 font-body text-base leading-relaxed"
                    style={{ color: 'var(--nb-ink)' }}
                  >
                    <span className="shrink-0 mt-1 font-bold" style={{ color: 'var(--nb-blue)' }}>
                      ▹
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            )
          case 'image':
            return (
              <figure key={i} className="my-2">
                <div
                  className="relative w-full aspect-video overflow-hidden border-[3px]"
                  style={{
                    borderColor: 'var(--nb-ink)',
                    boxShadow: '6px 6px 0 0 var(--nb-ink)',
                    backgroundColor: 'var(--nb-paper)',
                  }}
                >
                  <Image
                    src={block.src}
                    alt={block.alt}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                {block.caption && (
                  <figcaption
                    className="mt-3 font-body text-sm"
                    style={{ color: 'var(--nb-muted)' }}
                  >
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            )
          default:
            return null
        }
      })}
    </div>
  )
}

export default function CaseStudyPage({ study }: { study: CaseStudy }) {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--nb-bg)' }}>
      <header
        className="border-b-[3px] sticky top-0 z-40"
        style={{ backgroundColor: 'var(--nb-bg)', borderColor: 'var(--nb-ink)' }}
      >
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-2 font-body text-sm font-bold transition-opacity hover:opacity-70"
            style={{ color: 'var(--nb-ink)' }}
          >
            <ArrowLeft size={16} />
            Back to Case Studies
          </Link>
          <span className="font-display font-extrabold text-sm" style={{ color: 'var(--nb-ink)' }}>
            {'<Jiang />'}
          </span>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <h1
          className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-4"
          style={{ color: 'var(--nb-ink)' }}
        >
          {study.title}
        </h1>

        <div
          className="relative w-full overflow-hidden border-[3px] mb-12"
          style={{
            borderColor: 'var(--nb-ink)',
            boxShadow: '8px 8px 0 0 var(--nb-ink)',
            backgroundColor: 'var(--nb-paper)',
          }}
        >
          <Image
            src={study.thumbnail}
            alt={study.title}
            width={1200}
            height={800}
            className="w-full h-auto block"
            priority
            unoptimized
          />
        </div>

        <ContentBlocks blocks={study.content} />
      </article>
    </main>
  )
}
