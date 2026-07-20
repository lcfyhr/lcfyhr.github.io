'use client'

import { useRef, useEffect } from 'react'

interface Props {
  darkMode: boolean
}

const CHARS = '·∙.:░▒▓╬╠╣┼┃━▲◆●◈⬡⏣@#'

interface Ripple {
  x: number
  y: number
  birth: number
}

interface Hotspot {
  col: number
  row: number
  phase: number
  speed: number
}

export default function AsciiBackground({ darkMode }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef<number>(0)
  const darkRef = useRef(darkMode)
  const ripplesRef = useRef<Ripple[]>([])
  const timeRef = useRef<number>(0)

  darkRef.current = darkMode

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    let w = window.innerWidth
    let h = window.innerHeight
    canvas.width = w
    canvas.height = h

    const fontSize = 14
    const cols = Math.floor(w / (fontSize * 0.6))
    const rows = Math.floor(h / fontSize)

    const cells = Array.from({ length: cols * rows }, () => ({
      phase: Math.random() * Math.PI * 2,
      speed: 0.2 + Math.random() * 0.4,
      charOffset: Math.floor(Math.random() * CHARS.length),
    }))

    // Create blinking hotspots - clusters of cells that pulse brightly
    const hotspots: Hotspot[] = []
    const numHotspots = 5 + Math.floor(Math.random() * 4)
    for (let i = 0; i < numHotspots; i++) {
      hotspots.push({
        col: Math.floor(Math.random() * cols),
        row: Math.floor(Math.random() * rows),
        phase: Math.random() * Math.PI * 2,
        speed: 0.8 + Math.random() * 1.2,
      })
    }

    let time = timeRef.current
    const rippleSpeed = 300
    const rippleWidth = 80
    const rippleLife = 2.5

    const draw = () => {
      time += 0.016
      timeRef.current = time
      const dark = darkRef.current
      const ripples = ripplesRef.current

      ctx.fillStyle = dark ? '#0a0a0a' : '#fafafa'
      ctx.fillRect(0, 0, w, h)

      ctx.font = `${fontSize}px "JetBrains Mono", monospace`
      ctx.textBaseline = 'top'

      const cellW = w / cols
      const cellH = h / rows

      // Remove dead ripples
      ripplesRef.current = ripples.filter(r => (time - r.birth) < rippleLife)

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const idx = row * cols + col
          const cell = cells[idx]

          const cx = col * cellW + cellW / 2
          const cy = row * cellH + cellH / 2

          // Calculate ripple influence
          let proximity = 0
          for (const ripple of ripplesRef.current) {
            const age = time - ripple.birth
            const rippleRadius = age * rippleSpeed
            const dx = cx - ripple.x
            const dy = cy - ripple.y
            const dist = Math.sqrt(dx * dx + dy * dy)

            const distFromRing = Math.abs(dist - rippleRadius)
            if (distFromRing < rippleWidth) {
              const ringStrength = 1 - distFromRing / rippleWidth
              const ageFade = 1 - age / rippleLife
              proximity = Math.max(proximity, ringStrength * ageFade)
            }
          }

          // Calculate hotspot influence - pulsing glow near hotspots
          let hotspotGlow = 0
          for (const hs of hotspots) {
            const dc = Math.abs(col - hs.col)
            const dr = Math.abs(row - hs.row)
            const dist = Math.sqrt(dc * dc + dr * dr)
            const radius = 4
            if (dist < radius) {
              const pulse = (Math.sin(time * hs.speed + hs.phase) + 1) / 2
              // Sharp blink: only glow when pulse is high
              const blink = Math.pow(pulse, 3)
              const falloff = 1 - dist / radius
              hotspotGlow = Math.max(hotspotGlow, blink * falloff)
            }
          }

          // Base wave
          const wave = Math.sin(time * cell.speed + cell.phase + col * 0.05 + row * 0.03)
          const baseIntensity = (wave + 1) / 2

          const intensity = Math.min(1, baseIntensity + proximity * 0.8 + hotspotGlow * 0.6)

          if (intensity < 0.55 && proximity === 0 && hotspotGlow < 0.1) continue

          let alpha: number
          if (proximity > 0) {
            alpha = Math.min(0.9, proximity * 0.8 + (intensity - 0.3) * 0.2)
          } else if (hotspotGlow > 0.1) {
            alpha = Math.min(0.85, hotspotGlow * 0.8 + (intensity - 0.3) * 0.15)
          } else {
            alpha = (intensity - 0.55) / 0.45 * 0.35
          }

          if (alpha <= 0) continue

          const charIdx = proximity > 0.3
            ? Math.min(CHARS.length - 1, Math.floor(proximity * CHARS.length))
            : hotspotGlow > 0.3
              ? Math.min(CHARS.length - 1, Math.floor(hotspotGlow * CHARS.length * 0.7))
              : Math.floor(time * cell.speed * 0.5 + cell.charOffset) % CHARS.length
          const char = CHARS[charIdx]

          if (dark) {
            const glow = Math.max(proximity, hotspotGlow * 0.7)
            const r = 140 + glow * 80
            const g = 180 + glow * 40
            const b = 255
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`
          } else {
            const glow = Math.max(proximity, hotspotGlow * 0.7)
            const r = 40 - glow * 20
            const g = 60 - glow * 20
            const b = 120 + glow * 60
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`
          }

          ctx.fillText(char, col * cellW, row * cellH)
        }
      }

      frameRef.current = requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w
      canvas.height = h
    }

    const handleClick = (e: MouseEvent) => {
      // Don't trigger ripple if clicking on interactive UI elements
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"], nav, [data-interactive]')) return
      ripplesRef.current.push({ x: e.clientX, y: e.clientY, birth: timeRef.current })
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('click', handleClick)

    return () => {
      cancelAnimationFrame(frameRef.current)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ pointerEvents: 'none' }}
    />
  )
}
