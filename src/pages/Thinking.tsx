import { Rich } from '../components/Rich'
import { SectionLabel } from '../components/SectionLabel'
import { useSite } from '../site-context'

/**
 * El original enlaza a /tesis (recorrido visual de la tesis), fuera del alcance
 * de esta migración. Mientras no exista, el CTA se muestra desactivado.
 */
const THESIS_PAGE_AVAILABLE = false

export function Thinking() {
  const { t } = useSite()
  const c = t.thinking

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
        </div>
      </section>

      {/* LÍNEAS */}
      <section className="lineas" id="lineas">
        <div className="wrap">
          <SectionLabel label={c.linesLabel} />
          {c.lines.map((line) => (
            <div className="linea" key={line.n} id={`e${line.n}`}>
              <span className="num mono">{line.n}</span>
              <div className="lbody">
                <span className="ttl">{line.title}</span>
                <p className="pos">{line.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BIBLIOTECA DE FUTUROS */}
      <section className="biblio" id="biblioteca">
        <div className="wrap">
          <SectionLabel label={c.libraryLabel} />
          <h2>{c.libraryTitle}</h2>
          <p className="intro-b">{c.libraryIntro}</p>

          {c.axes.map((axis) => (
            <div className="beje-block" key={axis.n}>
              <div className="beje-head">
                <span className="bn mono">{axis.n}</span>
                <div>
                  <div className="bt">{axis.title}</div>
                  <div className="bq mono">{axis.question}</div>
                </div>
              </div>
              <div className="refs">
                {axis.refs.map((ref) => (
                  <div className="ref" key={ref.work}>
                    <div className="rc">
                      {ref.author},{' '}
                      {ref.kind === 'book' ? <em>{ref.work}</em> : <>«{ref.work}»</>}{' '}
                      <span className="yr mono">{ref.year}</span>
                    </div>
                    <div className="rn">{ref.note}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESIS · RECORRIDO */}
      <section className="tesis-band" id="tesis">
        <div className="wrap">
          <div className="tag mono">{c.thesis.tag}</div>
          <h2>{c.thesis.h2}</h2>
          <p>{c.thesis.p}</p>
          {THESIS_PAGE_AVAILABLE ? null : (
            <span className="cta off mono" aria-hidden="true">
              {c.thesis.cta}
            </span>
          )}
        </div>
      </section>
    </>
  )
}
