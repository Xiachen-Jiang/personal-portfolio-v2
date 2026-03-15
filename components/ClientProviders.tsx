'use client'

import { PersonaProvider } from '@/lib/PersonaContext'

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return <PersonaProvider>{children}</PersonaProvider>
}
