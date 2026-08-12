import { Link } from 'react-router-dom'
import { BookButton } from '../components/BookButton'
import { Lines } from '../components/Lines'
import { Rich } from '../components/Rich'
import { CONTACT_EMAIL, COPYRIGHT_YEAR } from '../config'
import { pathFor } from '../routes'
import { useSite } from '../site-context'

export function Home() {
  const { locale, t } = useSite()
  const c = t.home

  return (
    <>
      {/* PORTADA · DECLARACIÓN */}
      <section className="portada">
        <div className="wrap">
          <div className="kicker mono">{c.kicker}</div>
          <h1>
            <Lines lines={c.titleLines} />
          </h1>
          <p className="claim">{c.claim}</p>
          <div className="princ">
            {c.principles.map((p, i) => (
              <p key={i}>
                <Rich text={p} />
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ÍNDICE */}
      <section className="indice">
        <div className="wrap">
          {c.index.map((entry) => (
            <Link className="entrada" key={entry.page} to={pathFor(locale, entry.page)}>
              <span className="en mono">{entry.n}</span>
              <div className="ebody">
                <div className="ettl">{entry.title}</div>
                <p className="edesc">{entry.desc}</p>
              </div>
              <span className="earrow mono">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CIERRE · CONTACTO */}
      <section className="cierre">
        <div className="wrap">
          <h2>{c.closing.h2}</h2>
          <p>{c.closing.p}</p>
          <a className="mailto" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          <div className="cta-row">
            <BookButton tone="paper" />
            <a className="door mono" href={`mailto:${CONTACT_EMAIL}`}>
              {t.common.talk}
            </a>
          </div>
          <div className="foot-rule" />
          <div className="foot-bot mono">
            <span>(U)² Lab © {COPYRIGHT_YEAR}</span>
            <span>{t.common.tagline}</span>
          </div>
        </div>
      </section>
    </>
  )
}
