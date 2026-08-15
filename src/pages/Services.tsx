import { Lines } from '../components/Lines'
import { Rich } from '../components/Rich'
import { SectionLabel } from '../components/SectionLabel'
import { useSite } from '../site-context'

/**
 * Los cuatro tramos ocupan el cuerpo. Los dispositivos —U-Lab, U-Sync,
 * U-NinA— bajan al pie como "cómo nos organizamos": es información útil para
 * quien ya decidió trabajar con nosotros, no para quien está evaluando.
 */
export function Services() {
  const { t } = useSite()
  const c = t.services

  return (
    <>
      <section className="hero invert">
        <div className="wrap">
          <div className="kicker mono">{c.kicker}</div>
          <h1>
            <Lines lines={c.titleLines} />
          </h1>
          <p className="sub">{c.sub}</p>
        </div>
      </section>

      <section className="intro">
        <div className="wrap">
          <p className="lead">
            <Rich text={c.lead} />
          </p>
        </div>
      </section>

      {/* LOS CUATRO TRAMOS */}
      <section className="tramos" id="tramos">
        <div className="wrap">
          <SectionLabel label={c.tracksLabel} />
          {c.tracks.map((track) => (
            <div className="tramo" key={track.n}>
              <div className="tramo-meta">
                <span className="rnum mono">{track.n}</span>
                <div className="rname">{track.name}</div>
              </div>
              <div className="tramo-body">
                <p className="rdesc">{track.text}</p>
                <dl className="ficha mono">
                  <dt>{c.deliverableLabel}</dt>
                  <dd>{track.deliverable}</dd>
                  <dt>{c.durationLabel}</dt>
                  <dd>{track.duration}</dd>
                </dl>
              </div>
            </div>
          ))}
          <p className="nota mono">{c.note}</p>
        </div>
      </section>

      {/* EL TABLERO */}
      <section className="tablero invert" id="tablero">
        <div className="wrap">
          <SectionLabel label={c.dashboard.label} />
          <h2>{c.dashboard.h2}</h2>
          <div className="reglas">
            {c.dashboard.rules.map((rule) => (
              <div className="regla" key={rule.title}>
                <div className="gttl">{rule.title}</div>
                <p className="gdesc">{rule.text}</p>
              </div>
            ))}
          </div>
          <p className="aclaracion mono">{c.dashboard.clarification}</p>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section className="faq" id="faq">
        <div className="wrap">
          <SectionLabel label={c.faq.label} />
          {c.faq.items.map((item) => (
            <div className="pregunta" key={item.id} id={item.id}>
              <h3 className="q">{item.q}</h3>
              <p className="a">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CÓMO NOS ORGANIZAMOS */}
      <section className="organiza" id="organizacion">
        <div className="wrap">
          <SectionLabel label={c.organization.label} />
          <h2>{c.organization.h2}</h2>
          <p className="ointro">{c.organization.intro}</p>
          <div className="dispositivos">
            {c.organization.three.map((d) => (
              <div className="dispositivo" key={d.name} id={d.name.toLowerCase()}>
                <div className="vn">{d.name}</div>
                <div className="vv mono">{d.verb}</div>
                <p className="vdesc">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
