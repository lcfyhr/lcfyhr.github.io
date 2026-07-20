'use client'

import { portfolioData } from '@/data/portfolio'
import { useState } from 'react'

export default function ProjectsSection() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <div className="h-full overflow-y-auto px-6 md:px-10 py-10">


      <div className="flex flex-col gap-3 max-w-lg">
        {portfolioData.projects.map((project, i) => (
          <button
            key={project.name}
            onClick={() => setExpanded(expanded === i ? null : i)}
            className={`
              text-left p-4 rounded-xl border border-[var(--border)]
              bg-[var(--surface)] backdrop-blur-md
              hover:border-[var(--muted)]
              ${expanded === i ? 'border-[var(--muted)]' : ''}
            `}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold">{project.name}</h3>
              <span className="text-xs text-[var(--muted)] font-mono">
                {expanded === i ? '−' : '+'}
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-[10px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-md bg-[var(--border)] text-[var(--muted)]"
                >
                  {tool}
                </span>
              ))}
            </div>

            {expanded === i && (
              <p className="text-xs text-[var(--muted)] leading-relaxed mt-3">
                {project.description}
              </p>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
