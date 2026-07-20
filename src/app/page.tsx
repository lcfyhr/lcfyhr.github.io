'use client'

import { useState, useCallback } from 'react'
import AsciiBackground from '@/components/AsciiBackground'
import ThemeToggle from '@/components/ThemeToggle'
import Nav from '@/components/Nav'
import HeroSection from '@/components/sections/Hero'
import ProjectsSection from '@/components/sections/Projects'
import ConnectSection from '@/components/sections/Connect'

const sections = ['hero', 'projects', 'connect'] as const
type Section = typeof sections[number]

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)
  const [activeSection, setActiveSection] = useState<Section>('hero')

  const toggleTheme = useCallback(() => {
    setDarkMode(prev => {
      const next = !prev
      document.documentElement.classList.toggle('dark', next)
      return next
    })
  }, [])

  return (
    <main className="relative w-screen h-screen overflow-hidden">
      <AsciiBackground darkMode={darkMode} />

      <div className="relative z-10 w-full h-full flex flex-col">
        <Nav active={activeSection} onChange={(s) => setActiveSection(s as Section)} />
        <ThemeToggle darkMode={darkMode} onToggle={toggleTheme} />

        <div className="flex-1 overflow-hidden">
          <div className={`w-full h-full ${activeSection === 'hero' ? '' : 'hidden'}`}>
            <HeroSection />
          </div>
          <div className={`w-full h-full ${activeSection === 'projects' ? '' : 'hidden'}`}>
            <ProjectsSection />
          </div>
          <div className={`w-full h-full ${activeSection === 'connect' ? '' : 'hidden'}`}>
            <ConnectSection />
          </div>
        </div>
      </div>
    </main>
  )
}
