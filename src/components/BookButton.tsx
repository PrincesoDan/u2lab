import { BOOKING_URL } from '../config'
import { useSite } from '../site-context'

type Tone = 'ink' | 'paper'

/**
 * El único CTA del sitio: lleva a la agenda. `tone="paper"` es la variante
 * para las bandas negras (borde y texto blancos). `label` reemplaza el texto
 * por defecto donde el bloque pide otra formulación.
 */
export function BookButton({
  tone = 'ink',
  className = '',
  label,
}: {
  tone?: Tone
  className?: string
  label?: string
}) {
  const { t } = useSite()
  return (
    <a
      className={`book book-${tone} mono ${className}`.trim()}
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label ? (
        label
      ) : (
        <>
          <span className="book-long">{t.common.book}</span>
          <span className="book-short">{t.common.bookShort}</span>
        </>
      )}
    </a>
  )
}
