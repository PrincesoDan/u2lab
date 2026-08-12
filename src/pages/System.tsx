import { BookButton } from '../components/BookButton'
import { Lines } from '../components/Lines'
import { Rich } from '../components/Rich'
import { SectionLabel } from '../components/SectionLabel'
import { CONTACT_EMAIL } from '../config'
import { useSite } from '../site-context'

export function System() {
  const { t } = useSite()
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

      {/* INVITACIÓN */}
      <section className="invita" id="trabajar">
        <div className="wrap">
          <h2>{c.invite.h2}</h2>
          <p>{c.invite.p}</p>
          <a className="mailto-inline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          <div className="cta-row">
            <BookButton />
            <a className="door mono" href={`mailto:${CONTACT_EMAIL}`}>
              {t.common.talk}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
