import { Lines } from '../components/Lines'
import { Rich } from '../components/Rich'
import { SectionLabel } from '../components/SectionLabel'
import { useSite } from '../site-context'

export function Interventions() {
  const { t } = useSite()
  const c = t.interventions

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
          <p className="note mono">{c.note}</p>
        </div>
      </section>

      {/* CASOS */}
      <section className="casos" id="casos">
        <div className="wrap">
          <SectionLabel label={c.casesLabel} />
          <div className="caso-list">
            {c.cases.map((caso) => (
              <div className="caso" key={caso.title}>
                <div className="caso-meta">
                  <span className="op">{caso.op}</span>
                  <span className="dim">{caso.dim}</span>
                  <span className="estado">{caso.status}</span>
                </div>
                <div className="caso-body">
                  <h3 className="ttl">{caso.title}</h3>
                  <p className="desc">{caso.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CIERRE / RANGO */}
      <section className="cierre">
        <div className="wrap">
          <p>
            <Rich text={c.closing} />
          </p>
        </div>
      </section>
    </>
  )
}
