import { Link } from 'react-router-dom'
import { TEAM_ANCHOR, pathFor } from '../routes'
import { useSite } from '../site-context'
import { BookButton } from './BookButton'
import { LangSwitch } from './LangSwitch'
import { Mark } from './Rich'

/**
 * Navegación principal: Servicios · Casos · Sistema · Equipo. Pensamiento
 * queda en el pie —cinco puertas conceptuales arriba era demasiado para quien
 * llega a evaluar un proveedor—. Equipo no es una página: es la sección de la
 * home, así que va como ancla.
 */
const NAV_PAGES = ['services', 'cases', 'system'] as const

export function Header() {
  const { locale, page, t } = useSite()
  const home = pathFor(locale, 'home')

  return (
    <header>
      <div className="wrap bar">
        <Link className="brand" to={home}>
          <Mark />
        </Link>

        <nav className="nav mono">
          {NAV_PAGES.map((key) => (
            <Link
              key={key}
              to={pathFor(locale, key)}
              aria-current={page === key ? 'page' : undefined}
            >
              {t.common.nav[key]}
            </Link>
          ))}
          <Link to={`${home}#${TEAM_ANCHOR[locale]}`}>{t.common.nav.team}</Link>
        </nav>

        <div className="bar-right">
          <LangSwitch />
          <BookButton />
        </div>
      </div>
    </header>
  )
}
