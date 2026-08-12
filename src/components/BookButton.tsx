import { BOOKING_URL } from '../config'
import { useSite } from '../site-context'

type Tone = 'ink' | 'paper'

/**
 * CTA "Agendar una reunión". `tone="paper"` es la variante para las bandas
 * negras (borde y texto blancos).
 */
export function BookButton({
  tone = 'ink',
  className = '',
}: {
  tone?: Tone
  className?: string
}) {
  const { t } = useSite()
  return (
    <a
      className={`book book-${tone} mono ${className}`.trim()}
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="book-long">{t.common.book}</span>
      <span className="book-short">{t.common.bookShort}</span>
    </a>
  )
}
