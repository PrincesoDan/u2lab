import { Lines } from '../components/Lines'
import { Mark, Rich } from '../components/Rich'
import { SectionLabel } from '../components/SectionLabel'
import { useSite } from '../site-context'

/**
 * El sitio original tiene además páginas /u-lab, /u-sync y /u-nina, que no
 * forman parte de esta migración. Mientras no existan, el botón "Ver U-Lab →"
 * se muestra desactivado (clase `off`, igual que en el original) en lugar de
 * apuntar a una ruta que daría 404.
 */
const DEVICE_PAGES_AVAILABLE = false

export function Devices() {
  const { t } = useSite()
  const c = t.devices

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

      {/* ESQUEMA 3+1 */}
      <section className="esquema">
        <div className="wrap">
          <div className="matriz">
            <div className="mname">
              <Mark />
            </div>
            <div className="mrole mono">{c.matrixRole}</div>
          </div>
          <div className="stem" />
          <div className="tres">
            {c.three.map((cell) => (
              <div className="tcell" key={cell.name}>
                <div className="cn">{cell.name}</div>
                <div className="cv mono">{cell.verb}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOS TRES DISPOSITIVOS */}
      <section className="disp" id="dispositivos">
        <div className="wrap">
          <SectionLabel label={c.listLabel} />
          {c.items.map((d) => (
            <div className="d" key={d.name} id={d.name.toLowerCase()}>
              <div className="d-meta">
                <span className="dnum mono">{d.n}</span>
                <div className="dn">{d.name}</div>
                <div className="dv mono">{d.verb}</div>
              </div>
              <div className="d-body">
                <p className="dl">{d.claim}</p>
                {d.paragraphs.map((p, i) => (
                  <p className="dp" key={i}>
                    {p}
                  </p>
                ))}
                <div className="hace">
                  <div className="hl mono">{c.producesLabel}</div>
                  <ul>
                    {d.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  {DEVICE_PAGES_AVAILABLE ? null : (
                    <span className="verlo off mono" aria-hidden="true">
                      {d.link}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CIERRE */}
      <section className="cierre">
        <div className="wrap">
          <div className="tag mono">{c.closing.tag}</div>
          <h2>{c.closing.h2}</h2>
          <p>{c.closing.p}</p>
        </div>
      </section>
    </>
  )
}
