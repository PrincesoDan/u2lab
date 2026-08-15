import { Link } from 'react-router-dom'
import { Lines } from '../components/Lines'
import { Rich } from '../components/Rich'
import { SectionLabel } from '../components/SectionLabel'
import { PILOT_ANCHOR, pathFor } from '../routes'
import { useSite } from '../site-context'

/**
 * Conserva el Sistema Utopía y absorbe la antigua página «Qué es»: los cinco
 * principios, las cinco dimensiones de trabajo y el lugar de enunciación. Es
 * el activo diferenciador ante fundaciones y universidades, y lo que impide
 * que la oferta se lea como "otra consultora con IA".
 */
export function System() {
  const { locale, t } = useSite()
  const c = t.system

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

      {/* ENCABEZADO · INFRAESTRUCTURA, NO INFORME */}
      <section className="encabezado">
        <div className="wrap">
          <p className="head-claim">
            <Rich text={c.header} />
          </p>
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

      {/* TRIADA */}
      <section className="triada" id="triada">
        <div className="wrap">
          <SectionLabel label={c.triadLabel} />
          <div className="tri-list">
            {c.triad.map((row) => (
              <div className="trow" key={row.n}>
                <span className="tn mono">{row.n}</span>
                <div className="tb">
                  <div className="tq mono">{row.question}</div>
                  <div className="tname">{row.name}</div>
                  <p className="tdef">{row.def}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTODO · CINCO OPERACIONES */}
      <section className="metodo" id="metodo">
        <div className="wrap">
          <SectionLabel label={c.methodLabel} />
          <p className="mintro">
            <Rich text={c.methodIntro} />
          </p>
          <div className="op-list">
            {c.ops.map((op) => (
              <div className="op" key={op.n}>
                <span className="on mono">{op.n}</span>
                <div className="ob">
                  <div className="oname">{op.name}</div>
                  <p className="odef">{op.def}</p>
                  <div className="prod">
                    <span className="pl mono">{c.producesLabel}</span>
                    {op.produces.map((p) => (
                      <span className="p mono" key={p}>
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
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

      {/* PUENTE AL PILOTO */}
      <section className="puente-piloto">
        <div className="wrap">
          <p>
            {c.bridge.text}{' '}
            <Link
              className="puente-link mono"
              to={`${pathFor(locale, 'home')}#${PILOT_ANCHOR[locale]}`}
            >
              {c.bridge.link}
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
