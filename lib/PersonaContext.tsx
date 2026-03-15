'use client'

import { createContext, useContext, useState, useEffect } from 'react'

export type Persona = 'tech' | 'hr'

interface PersonaCtx {
  persona: Persona
  togglePersona: () => void
}

const PersonaContext = createContext<PersonaCtx>({
  persona: 'tech',
  togglePersona: () => {},
})

export function PersonaProvider({ children }: { children: React.ReactNode }) {
  const [persona, setPersona] = useState<Persona>('tech')

  useEffect(() => {
    const stored = localStorage.getItem('portfolio-persona') as Persona | null
    if (stored === 'tech' || stored === 'hr') {
      setPersona(stored)
    }
  }, [])

  const togglePersona = () => {
    const next: Persona = persona === 'tech' ? 'hr' : 'tech'
    setPersona(next)
    localStorage.setItem('portfolio-persona', next)
  }

  return (
    <PersonaContext.Provider value={{ persona, togglePersona }}>
      {children}
    </PersonaContext.Provider>
  )
}

export const usePersona = () => useContext(PersonaContext)
