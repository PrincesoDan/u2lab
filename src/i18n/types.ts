/**
 * Forma del contenido del sitio. Cada locale debe implementar `Content`
 * completo, así que TypeScript avisa si una traducción queda a medias.
 */

/** Fragmento de texto enriquecido: string plano o `{ b }` para <b>. */
export type Frag = string | { b: string }
export type RichText = readonly Frag[]

export interface Meta {
  title: string
  description: string
}

/** Los dos extremos de la barra `.section-label`. */
export type SectionLabel = readonly [left: string, right: string]

export interface Common {
  langName: string
  nav: {
    about: string
    system: string
    interventions: string
    devices: string
    thinking: string
  }
  home: string
  backHome: string
  book: string
  bookShort: string
  talk: string
  tagline: string
  switchLang: string
}

export interface HomeContent {
  meta: Meta
  kicker: string
  titleLines: readonly string[]
  claim: string
  principles: readonly RichText[]
  index: readonly {
    n: string
    page: 'about' | 'system' | 'interventions' | 'devices' | 'thinking'
    title: string
    desc: string
  }[]
  closing: { h2: string; p: string }
}

export interface Dimension {
  n: string
  name: string
  claim: string
  problems: readonly string[]
  contributions: readonly { title: string; text: string }[]
}

export interface AboutContent {
  meta: Meta
  kicker: string
  title: string
  sub: string
  lead: RichText
  note: string
  principlesLabel: SectionLabel
  principles: readonly { n: string; title: string; text: string }[]
  dimsLabel: SectionLabel
  problemHead: string
  contributionHead: string
  dims: readonly Dimension[]
  place: { tag: string; h2: string; p: string }
}

export interface SystemContent {
  meta: Meta
  kicker: string
  titleLines: readonly string[]
  sub: string
  lead: RichText
  note: string
  triadLabel: SectionLabel
  triad: readonly { n: string; question: string; name: string; def: string }[]
  methodLabel: SectionLabel
  methodIntro: RichText
  producesLabel: string
  ops: readonly { n: string; name: string; def: string; produces: readonly string[] }[]
  invite: { h2: string; p: string }
}

export interface InterventionsContent {
  meta: Meta
  kicker: string
  titleLines: readonly string[]
  sub: string
  lead: RichText
  note: string
  casesLabel: SectionLabel
  cases: readonly {
    op: string
    dim: string
    status: string
    title: string
    desc: string
  }[]
  closing: RichText
}

export interface DevicesContent {
  meta: Meta
  kicker: string
  titleLines: readonly string[]
  sub: string
  lead: RichText
  note: string
  matrixRole: string
  three: readonly { name: string; verb: string }[]
  listLabel: SectionLabel
  producesLabel: string
  items: readonly {
    n: string
    name: string
    verb: string
    claim: string
    paragraphs: readonly string[]
    bullets: readonly string[]
    link: string
  }[]
  closing: { tag: string; h2: string; p: string }
}

export interface Reference {
  author: string
  work: string
  /** `book` va en cursiva; `article` va entre comillas angulares. */
  kind: 'book' | 'article'
  year: string
  note: string
}

export interface ThinkingContent {
  meta: Meta
  kicker: string
  title: string
  sub: string
  lead: RichText
  linesLabel: SectionLabel
  lines: readonly { n: string; title: string; text: string }[]
  libraryLabel: SectionLabel
  libraryTitle: string
  libraryIntro: string
  axes: readonly {
    n: string
    title: string
    question: string
    refs: readonly Reference[]
  }[]
  thesis: { tag: string; h2: string; p: string; cta: string }
}

export interface Content {
  common: Common
  home: HomeContent
  about: AboutContent
  system: SystemContent
  interventions: InterventionsContent
  devices: DevicesContent
  thinking: ThinkingContent
}
