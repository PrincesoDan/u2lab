import { Link } from 'react-router-dom'
import { pathFor } from '../routes'
import { useSite } from '../site-context'
import { BookButton } from './BookButton'
import { LangSwitch } from './LangSwitch'
import { Mark } from './Rich'

export function Header() {
  const { locale, page, t } = useSite()
  const home = pathFor(locale, 'home')

  return (
    <header>
      <div className="wrap bar">
        <Link className="brand" to={home}>
          <Mark />
        </Link>

        <div className="bar-right">
          {page === 'home' ? (
            <nav className="nav mono">
              <Link to={pathFor(locale, 'about')}>{t.common.nav.about}</Link>
              <Link to={pathFor(locale, 'system')}>{t.common.nav.system}</Link>
              <Link to={pathFor(locale, 'interventions')}>{t.common.nav.interventions}</Link>
              <Link to={pathFor(locale, 'devices')}>{t.common.nav.devices}</Link>
              <Link to={pathFor(locale, 'thinking')}>{t.common.nav.thinking}</Link>
            </nav>
          ) : (
            <Link className="back mono" to={home}>
              {t.common.backHome}
            </Link>
          )}
          <LangSwitch />
          <BookButton />
        </div>
      </div>
    </header>
  )
}
