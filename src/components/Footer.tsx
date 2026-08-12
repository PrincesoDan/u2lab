import { Link } from 'react-router-dom'
import { COPYRIGHT_YEAR } from '../config'
import { PAGE_KEYS, pathFor } from '../routes'
import { useSite } from '../site-context'
import { BookButton } from './BookButton'
import { Mark } from './Rich'

/** Pie de las páginas interiores. La home cierra con su propia sección. */
export function Footer() {
  const { locale, page, t } = useSite()

  // El original lista todas las páginas menos aquella en la que se está.
  const links = PAGE_KEYS.filter((key) => key !== page)

  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-mark">
            <Mark />
          </div>
          <div className="foot-nav mono">
            {links.map((key) => (
              <Link key={key} to={pathFor(locale, key)}>
                {key === 'home' ? t.common.home : t.common.nav[key]}
              </Link>
            ))}
          </div>
        </div>

        <BookButton tone="paper" className="foot-book" />

        <div className="foot-rule" />
        <div className="foot-bot mono">
          <span>(U)² Lab © {COPYRIGHT_YEAR}</span>
          <span>{t.common.tagline}</span>
        </div>
      </div>
    </footer>
  )
}
