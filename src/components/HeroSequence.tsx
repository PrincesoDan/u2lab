import { useEffect, useRef, useState } from 'react'

/**
 * El hero encadena los tres cuadros del mismo paisaje: el completo (ruido), el
 * del cono que se estrecha (método) y el del cielo vacío con una figura
 * (señal). La tesis de la página no se explica: se recorre.
 *
 * El titular y el CTA están visibles desde el primer scroll —quien llega a
 * evaluar un proveedor no debería tener que bajar tres pantallas para saber
 * qué se ofrece—. Lo que cambia detrás es la imagen.
 */
const FRAMES = ['ruido', 'cono', 'senal'] as const

export function HeroSequence({
  frames,
  children,
}: {
  frames: readonly [string, string, string]
  children: React.ReactNode
}) {
  const stage = useRef<HTMLDivElement>(null)
  const layers = useRef<(HTMLDivElement | null)[]>([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      // Sin movimiento: se muestra el último cuadro y se acabó la secuencia.
      layers.current.forEach((l, i) => l && (l.style.opacity = i === 2 ? '1' : '0'))
      setActive(2)
      return
    }

    let raf = 0
    const onScroll = () => {
      raf ||= requestAnimationFrame(() => {
        raf = 0
        const el = stage.current
        if (!el) return
        const { top, height } = el.getBoundingClientRect()
        const travel = height - window.innerHeight
        const p = travel > 0 ? Math.min(Math.max(-top / travel, 0), 1) : 0

        // Dos cruces suaves repartidos en el recorrido: 0→1 y 1→2.
        const pos = p * 2
        layers.current.forEach((l, i) => {
          if (l) l.style.opacity = String(Math.max(0, 1 - Math.abs(pos - i)))
        })
        setActive(Math.round(pos))
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="hero-seq" ref={stage}>
      <div className="hero-stage">
        <div className="hero-frames" aria-hidden="true">
          {FRAMES.map((name, i) => (
            <div
              className="hero-frame"
              key={name}
              ref={(el) => {
                layers.current[i] = el
              }}
              style={{ opacity: i === 0 ? 1 : 0 }}
            >
              <img
                src={`/image/${name}-1600.webp`}
                srcSet={`/image/${name}-800.webp 800w, /image/${name}-1600.webp 1600w`}
                sizes="100vw"
                alt=""
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
          <div className="hero-scrim" />
        </div>

        <div className="hero-content wrap">{children}</div>

        <div className="hero-track mono" aria-hidden="true">
          {frames.map((label, i) => (
            <span className={`htick ${i === active ? 'on' : ''}`} key={label}>
              <i />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
