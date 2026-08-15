import { useEffect, useRef, useState } from 'react'

/**
 * El hero es el paisaje en movimiento: el mismo cuadro de las ilustraciones,
 * animado en loop detrás del titular. El recorrido de la tesis —ruido, método,
 * señal— lo marca el scroll sobre el rótulo, no un cambio de imagen.
 *
 * El titular y el CTA están visibles desde el primer scroll —quien llega a
 * evaluar un proveedor no debería tener que bajar tres pantallas para saber
 * qué se ofrece—. Lo que avanza detrás es el video.
 */
export function HeroSequence({
  frames,
  children,
}: {
  frames: readonly [string, string, string]
  children: React.ReactNode
}) {
  const stage = useRef<HTMLDivElement>(null)
  const video = useRef<HTMLVideoElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      // Sin movimiento: el video se congela en su primer cuadro y el rótulo
      // se queda en el final del recorrido.
      video.current?.pause()
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

        // El recorrido reparte los tres rótulos: 0→1 y 1→2.
        setActive(Math.round(p * 2))
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
        <div className="hero-content wrap">
          <div className="hero-copy">{children}</div>

          {/* El video va a su tamaño, junto al texto y no debajo: la fuente son
              720×816 y a pantalla completa se ampliaba hasta verse blanda.
              `muted` y `playsInline` son lo que permite el autoplay en móvil;
              el archivo no tiene pista de audio, así que no silencian nada. */}
          <figure className="hero-figure" aria-hidden="true">
            <video
              className="hero-video"
              ref={video}
              src="/utopialab.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </figure>
        </div>

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
