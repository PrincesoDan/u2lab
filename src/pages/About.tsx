import { Rich } from '../components/Rich'
import { SectionLabel } from '../components/SectionLabel'
import { useSite } from '../site-context'

export function About() {
  const { t } = useSite()
  const c = t.about

  return (
    <>
      <section className="hero invert">
        <div className="wrap">
          <div className="kicker mono">{c.kicker}</div>
          <h1>{c.title}</h1>
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

      {/* CINCO PRINCIPIOS */}
      <section className="principios" id="principios">
        <div className="wrap">
          <SectionLabel label={c.principlesLabel} />
          {c.principles.map((p) => (
            <div className="linea" key={p.n}>
              <span className="num mono">{p.n}</span>
              <div className="lbody">
                <span className="ttl">{p.title}</span>
                <p className="pos">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CINCO DIMENSIONES */}
      <section className="dims" id="dimensiones">
        <div className="wrap">
          <SectionLabel label={c.dimsLabel} />
          {c.dims.map((d) => (
            <div className="dim" key={d.n}>
              <div className="dim-head">
                <span className="dnum mono">{d.n}</span>
                <div className="dname">{d.name}</div>
                <p className="dclaim">{d.claim}</p>
              </div>
              <div className="dim-cols">
                <div className="dim-col">
                  <div className="chead mono">{c.problemHead}</div>
                  {d.problems.map((text, i) => (
                    <p className="prob" key={i}>
                      {text}
                    </p>
                  ))}
                </div>
                <div className="dim-col">
                  <div className="chead mono">{c.contributionHead}</div>
                  {d.contributions.map((a) => (
                    <div className="aporte" key={a.title}>
                      <div className="an">{a.title}</div>
                      <p className="ad">{a.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LUGAR DE ENUNCIACIÓN */}
      <section className="direccion">
        <div className="wrap">
          <div className="tag mono">{c.place.tag}</div>
          <h2>{c.place.h2}</h2>
          <p>{c.place.p}</p>
        </div>
      </section>
    </>
  )
}
