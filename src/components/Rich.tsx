import { Fragment } from 'react'
import type { RichText } from '../i18n/types'

/** Renderiza un RichText: strings planos y `{ b }` como <b>. */
export function Rich({ text }: { text: RichText }) {
  return (
    <>
      {text.map((frag, i) =>
        typeof frag === 'string' ? (
          <Fragment key={i}>{frag}</Fragment>
        ) : (
          <b key={i}>{frag.b}</b>
        ),
      )}
    </>
  )
}

/** La marca `(U)² LAB` con el superíndice tipográfico del original. */
export function Mark() {
  return (
    <>
      (U)
      <sup className="sq">2</sup> LAB
    </>
  )
}
