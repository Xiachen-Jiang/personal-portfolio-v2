import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CaseStudyPage from '@/components/case-studies/CaseStudyPage'
import { getAllCaseStudySlugs, getCaseStudy } from '@/lib/constants'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) return { title: 'Case Study Not Found' }
  return {
    title: `${study.title} — James Jiang`,
    description: study.description,
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()
  return <CaseStudyPage study={study} />
}
