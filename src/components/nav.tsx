'use client'

interface Props {
  active: string
  onChange: (section: string) => void
}

export default function Nav({ active, onChange }: Props) {
  const links = [
    { id: 'hero', label: 'Me' },
    { id: 'projects', label: 'Projects' },
    { id: 'connect', label: 'Contact' },
  ]

  return (
    <nav className="w-full px-6 md:px-10 pt-6 pb-4">
      <div className="flex items-baseline gap-6">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => onChange(link.id)}
            className={`
              text-sm tracking-tight transition-colors duration-150
              ${active === link.id ? 'text-[var(--fg)] font-bold' : 'text-[var(--muted)] hover:text-[var(--fg)] font-medium'}
            `}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
