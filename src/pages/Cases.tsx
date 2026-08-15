import { Lines } from '../components/Lines'
import { Rich } from '../components/Rich'
import { SectionLabel } from '../components/SectionLabel'
import { useSite } from '../site-context'

/**
 * Reescritura de la antigua página Intervenciones en formato caso: contexto,
 * intervención, resultado. El tercer caso todavía no está reescrito con la
 * plantilla —lleva el texto que ya estaba publicado y su estado a la vista—.
 */
export function Cases() {
  const { t } = useSite()
  const c = t.cases

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

      {/* PLANTILLA */}
      <section className="plantilla" id="plantilla">
        <div className="wrap">
          <SectionLabel label={c.templateLabel} />
          <p className="tintro">{c.templateIntro}</p>
          <div className="pasos">
            {c.templateSteps.map((step) => (
              <div className="paso" key={step.n}>
                <span className="pnum mono">{step.n}</span>
                <div className="pttl">{step.title}</div>
                <p className="pdesc">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOS CASOS */}
      <section className="casos" id="casos">
        <div className="wrap">
          <SectionLabel label={c.casesLabel} />
          <div className="caso-list">
            {c.cases.map((caso) => (
              <div className="caso" key={caso.n}>
                <div className="caso-meta">
                  <span className="op">{caso.n}</span>
                  {caso.subtitle && <span className="dim">{caso.subtitle}</span>}
                  {caso.status && <span className="estado">{caso.status}</span>}
                </div>
                <div className="caso-body">
                  <h3 className="ttl">{caso.title}</h3>
                  <p className="desc">{caso.text}</p>
                  {caso.proved && (
                    <p className="probado">
                      <span className="pl mono">{c.provedLabel}</span> {caso.proved}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
