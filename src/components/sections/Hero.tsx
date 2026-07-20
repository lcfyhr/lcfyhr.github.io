'use client'

import { portfolioData } from '@/data/portfolio'

export default function HeroSection() {
  return (
    <div className="flex flex-col justify-center h-full px-6 md:px-10 max-w-2xl">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
        {portfolioData.name}
      </h1>
      <p className="text-[var(--muted)] text-sm leading-relaxed max-w-md">
        Passionate about computer vision, quantitative finance, automation, and machine learning.
      </p>
    </div>
  )
}
