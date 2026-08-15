import { Link } from 'react-router-dom'
import { BookButton } from '../components/BookButton'
import { Lines } from '../components/Lines'
import { Rich } from '../components/Rich'
import { SectionLabel } from '../components/SectionLabel'
import { PILOT_ANCHOR, TEAM_ANCHOR, pathFor } from '../routes'
import { useSite } from '../site-context'

/**
 * Home en ocho bloques: hero, problema, para quién, método, piloto, casos,
 * equipo y cierre. Primero el problema del visitante, después el marco: la
 * capa conceptual vive en /sistema y se enlaza desde el bloque de método.
 */
export function Home() {
  const { locale, t } = useSite()
  const c = t.home
  const casesPath = pathFor(locale, 'cases')
  const servicesPath = pathFor(locale, 'services')

  return (
    <>
      {/* 01 · HERO */}
      <section className="portada">
        <div className="wrap">
          <div className="kicker mono">{c.hero.kicker}</div>
          <h1>
            <Lines lines={c.hero.titleLines} />
          </h1>
          <p className="claim">{c.hero.sub}</p>

          <div className="cta-row">
            <BookButton tone="paper" />
          </div>
          <p className="microcopy mono">{c.hero.microcopy}</p>

          <div className="princ">
            {c.hero.positions.map((p, i) => (
              <p key={i}>
                <Rich text={p} />
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 02 · EL PROBLEMA */}
      <section className="problema" id="problema">
        <div className="wrap">
          <h2>{c.problem.h2}</h2>
          <p className="pbody">{c.problem.body}</p>

          <SectionLabel label={c.problem.symptomsLabel} />
          <div className="sintomas">
            {c.problem.symptoms.map((s) => (
              <div className="sintoma" key={s.title}>
                <div className="sttl">{s.title}</div>
                <p className="sdesc">{s.text}</p>
              </div>
            ))}
          </div>

          <p className="pclose">{c.problem.close}</p>
        </div>
      </section>

      {/* 03 · PARA QUIÉN */}
      <section className="publicos" id="publicos">
        <div className="wrap">
          <h2>{c.audience.h2}</h2>
          <SectionLabel label={c.audience.label} />
          {c.audience.tracks.map((track) => (
            <div className="carril" key={track.n}>
              <span className="cnum mono">{track.n}</span>
              <div className="cbody">
                <div className="cttl">{track.title}</div>
                <p className="cdesc">{track.text}</p>
                <p className="cref mono">
                  <span className="crl">{track.referenceLabel}</span> {track.reference}
                </p>
                <Link className="clink mono" to={casesPath}>
                  {track.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 04 · EL MÉTODO */}
      <section className="metodo-home invert" id="metodo">
        <div className="wrap">
          <h2>{c.method.h2}</h2>
          <p className="msub">{c.method.sub}</p>
          <SectionLabel label={c.method.label} />
          <div className="pasos">
            {c.method.steps.map((step) => (
              <div className="paso" key={step.n}>
                <span className="pnum mono">{step.n}</span>
                <div className="pttl">{step.title}</div>
                <p className="pdesc">{step.text}</p>
              </div>
            ))}
          </div>
          <p className="puente">
            {c.method.bridge.text}{' '}
            <Link className="puente-link mono" to={pathFor(locale, 'system')}>
              {c.method.bridge.link}
            </Link>
          </p>
        </div>
      </section>

      {/* 05 · EL PILOTO */}
      <section className="piloto" id={PILOT_ANCHOR[locale]}>
        <div className="wrap">
          <h2>{c.pilot.h2}</h2>
          <SectionLabel label={c.pilot.label} />

          <div className="piloto-def">
            <div className="pdef">
              <div className="pdl mono">{c.pilot.isNot.label}</div>
              <p>{c.pilot.isNot.text}</p>
            </div>
            <div className="pdef">
              <div className="pdl mono">{c.pilot.is.label}</div>
              <p>{c.pilot.is.text}</p>
            </div>
          </div>

          <div className="entregables">
            <div className="el mono">{c.pilot.deliverablesLabel}</div>
            {c.pilot.deliverables.map((d) => (
              <div className="entregable" key={d.title}>
                <div className="ettl">{d.title}</div>
                <p className="edesc">{d.text}</p>
              </div>
            ))}
          </div>

          <div className="caja">
            <div className="tag mono">{c.pilot.risk.tag}</div>
            <p>{c.pilot.risk.text}</p>
          </div>

          <p className="pfoot">
            {c.pilot.foot.text}{' '}
            <Link className="puente-link mono" to={servicesPath}>
              {c.pilot.foot.link}
            </Link>
          </p>
        </div>
      </section>

      {/* 06 · CASOS */}
      <section className="casos-home" id="casos">
        <div className="wrap">
          <h2>{c.cases.h2}</h2>
          <p className="csub">{c.cases.sub}</p>
          <div className="tarjetas">
            {c.cases.cards.map((card) => (
              <Link className="tarjeta" key={card.n} to={casesPath}>
                <span className="tnum mono">{card.n}</span>
                <div className="tttl">{card.title}</div>
                <span className="tarrow mono">→</span>
              </Link>
            ))}
          </div>
          <Link className="puente-link mono" to={casesPath}>
            {c.cases.cta}
          </Link>
        </div>
      </section>

      {/* 07 · EQUIPO */}
      <section className="equipo" id={TEAM_ANCHOR[locale]}>
        <div className="wrap">
          <h2>{c.team.h2}</h2>
          <p className="qsub">{c.team.sub}</p>
          <SectionLabel label={c.team.label} />
          <div className="personas">
            {c.team.members.map((m) => (
              <div className="persona" key={m.name}>
                <div className="qname">{m.name}</div>
                <div className="qrole mono">{m.role}</div>
                <p className="qdesc">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 · CIERRE */}
      <section className="cierre">
        <div className="wrap">
          <h2>{c.closing.h2}</h2>
          <p>{c.closing.body}</p>
          <div className="cta-row">
            <BookButton tone="paper" label={c.closing.cta} />
          </div>
        </div>
      </section>
    </>
  )
}
