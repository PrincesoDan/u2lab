import { Link, useLocation } from 'react-router-dom'
import { LOCALES } from '../i18n'
import { pathFor } from '../routes'
import { useSite } from '../site-context'

/** Selector ES / EN que mantiene la página actual y el ancla. */
export function LangSwitch() {
  const { locale, page, t } = useSite()
  const { hash } = useLocation()

  return (
    <div className="lang mono" role="group" aria-label={t.common.switchLang}>
      {LOCALES.map((code, i) => (
        <span key={code}>
          {i > 0 && <span className="lang-sep" aria-hidden="true">/</span>}
          {code === locale ? (
            <span className="lang-on" aria-current="true">
              {code.toUpperCase()}
            </span>
          ) : (
            <Link to={pathFor(code, page) + hash} hrefLang={code}>
              {code.toUpperCase()}
            </Link>
          )}
        </span>
      ))}
    </div>
  )
}
