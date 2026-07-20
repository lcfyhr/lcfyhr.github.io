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

export default function AsciiBackground({ darkMode }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef<number>(0)
  const darkRef = useRef(darkMode)
  const ripplesRef = useRef<Ripple[]>([])

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

    let time = 0
    const rippleSpeed = 300 // px per second
    const rippleWidth = 80 // thickness of the ring
    const rippleLife = 2.5 // seconds

    const draw = () => {
      time += 0.016
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

            // Ring shape: strong at the edge, fading inside
            const distFromRing = Math.abs(dist - rippleRadius)
            if (distFromRing < rippleWidth) {
              const ringStrength = 1 - distFromRing / rippleWidth
              const ageFade = 1 - age / rippleLife
              proximity = Math.max(proximity, ringStrength * ageFade)
            }
          }

          // Base wave
          const wave = Math.sin(time * cell.speed + cell.phase + col * 0.05 + row * 0.03)
          const baseIntensity = (wave + 1) / 2

          const intensity = Math.min(1, baseIntensity + proximity * 0.8)

          if (intensity < 0.55 && proximity === 0) continue

          const alpha = proximity > 0
            ? Math.min(0.9, proximity * 0.8 + (intensity - 0.3) * 0.2)
            : (intensity - 0.55) / 0.45 * 0.35

          if (alpha <= 0) continue

          const charIdx = proximity > 0.3
            ? Math.min(CHARS.length - 1, Math.floor(proximity * CHARS.length))
            : Math.floor(time * cell.speed * 0.5 + cell.charOffset) % CHARS.length
          const char = CHARS[charIdx]

          if (dark) {
            const r = 140 + proximity * 80
            const g = 180 + proximity * 40
            const b = 255
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`
          } else {
            const r = 40 - proximity * 20
            const g = 60 - proximity * 20
            const b = 120 + proximity * 60
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
      ripplesRef.current.push({ x: e.clientX, y: e.clientY, birth: time })
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
