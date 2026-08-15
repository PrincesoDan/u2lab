import { BOOKING_URL } from '../config'
import { useSite } from '../site-context'

type Tone = 'sol' | 'tinta' | 'papel'

/**
 * El único CTA del sitio: lleva a la agenda. Píldora con insignia de flecha.
 * El texto va siempre en tinta sobre el naranja —el naranja con texto claro no
 * pasa contraste, y este botón se mira al sol en el celular—.
 */
export function BookButton({
  tone = 'sol',
  className = '',
  label,
  badge = true,
}: {
  tone?: Tone
  className?: string
  label?: string
  badge?: boolean
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
      {badge && (
        <span className="book-badge" aria-hidden="true">
          →
        </span>
      )}
    </a>
  )
}
