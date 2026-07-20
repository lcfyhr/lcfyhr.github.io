'use client'

import { portfolioData } from '@/data/portfolio'

export default function ConnectSection() {
  return (
    <div className="h-full overflow-y-auto px-6 md:px-10 py-10">


      <div className="flex flex-col gap-3 max-w-sm">
        {portfolioData.connect.map((item) => (
          <a
            key={item.name}
            href={item.link || undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group flex items-center justify-between
              p-4 rounded-xl border border-[var(--border)]
              bg-[var(--surface)] backdrop-blur-md
              hover:border-[var(--muted)]
            "
          >
            <div>
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="text-xs text-[var(--muted)] mt-0.5">{item.handle}</p>
            </div>
            {item.link && (
              <span className="text-[var(--muted)] group-hover:text-[var(--fg)] transition-colors">
                →
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  )
}
