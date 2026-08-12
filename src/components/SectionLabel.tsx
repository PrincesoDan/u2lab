import type { SectionLabel as Label } from '../i18n/types'

/** La barra mono con un texto a cada extremo. */
export function SectionLabel({ label }: { label: Label }) {
  return (
    <div className="section-label mono">
      <span>{label[0]}</span>
      <span>{label[1]}</span>
    </div>
  )
}
