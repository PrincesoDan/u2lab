import { Link } from 'react-router-dom'
import { COPYRIGHT_YEAR, SITE_DOMAIN } from '../config'
import { NAME_ANCHOR, pathFor } from '../routes'
import { useSite } from '../site-context'
import { BookButton } from './BookButton'
import { Mark } from './Rich'

/**
 * Pensamiento vive aquí y no en la navegación principal: ante una fundación o
 * una universidad suma credibilidad, pero ante una empresa lee como proyecto
 * académico. En el pie sigue disponible sin condicionar la primera lectura.
 */
export function Footer() {
  const { locale, page, t } = useSite()

  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-mark">
            <Mark />
          </div>
          <div className="foot-nav mono">
            <Link to={pathFor(locale, 'system')} aria-current={page === 'system' ? 'page' : undefined}>
              {t.common.nav.system}
            </Link>
            <Link
              to={pathFor(locale, 'thinking')}
              aria-current={page === 'thinking' ? 'page' : undefined}
            >
              {t.common.nav.thinking}
            </Link>
            <Link to={`${pathFor(locale, 'services')}#${NAME_ANCHOR}`}>
              {t.common.footer.nameLink}
            </Link>
          </div>
        </div>

        {/* En la home el bloque de cierre ya lleva el CTA: no se repite aquí. */}
        {page !== 'home' && <BookButton tone="papel" className="foot-book" />}

        <div className="foot-rule" />
        <div className="foot-bot mono">
          <span>
            <Mark /> © {COPYRIGHT_YEAR}
          </span>
          <span>
            {t.common.footer.location} · {SITE_DOMAIN}
          </span>
        </div>
      </div>
    </footer>
  )
}
