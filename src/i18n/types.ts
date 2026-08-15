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
    services: string
    cases: string
    system: string
    team: string
    thinking: string
  }
  home: string
  book: string
  bookShort: string
  switchLang: string
  footer: {
    location: string
    /** Enlace del pie a la pregunta frecuente sobre el nombre. */
    nameLink: string
  }
}

/* --- Home ------------------------------------------------------------------
   Ocho bloques, en el orden del documento de contenidos: hero, problema,
   para quién, método, piloto, casos, equipo, cierre. */

export interface HomeContent {
  meta: Meta

  hero: {
    kicker: string
    titleLines: readonly string[]
    sub: string
    /** Las dos líneas de posición heredadas del sitio anterior. */
    positions: readonly RichText[]
    microcopy: string
    /** Rótulo de cada cuadro de la secuencia: ruido → método → señal. */
    frames: readonly [string, string, string]
  }

  problem: {
    h2: string
    body: string
    symptomsLabel: SectionLabel
    symptoms: readonly { title: string; text: string }[]
    close: string
  }

  audience: {
    h2: string
    label: SectionLabel
    tracks: readonly {
      n: string
      title: string
      text: string
      referenceLabel: string
      reference: string
      cta: string
    }[]
  }

  method: {
    h2: string
    sub: string
    label: SectionLabel
    steps: readonly { n: string; title: string; text: string }[]
    bridge: { text: string; link: string }
  }

  pilot: {
    h2: string
    label: SectionLabel
    isNot: { label: string; text: string }
    is: { label: string; text: string }
    deliverablesLabel: string
    deliverables: readonly { title: string; text: string }[]
    risk: { tag: string; text: string }
    foot: { text: string; link: string }
  }

  cases: {
    h2: string
    sub: string
    cards: readonly { n: string; title: string }[]
    cta: string
  }

  team: {
    h2: string
    sub: string
    label: SectionLabel
    members: readonly { name: string; role: string; text: string }[]
  }

  closing: { h2: string; body: string; cta: string }
}

/* --- Servicios -------------------------------------------------------------
   Los cuatro tramos, las reglas del tablero, cómo se organiza el Lab
   (resumen de los antiguos Dispositivos) y las preguntas frecuentes. */

export interface ServicesContent {
  meta: Meta
  kicker: string
  titleLines: readonly string[]
  sub: string
  lead: RichText

  tracksLabel: SectionLabel
  deliverableLabel: string
  durationLabel: string
  tracks: readonly {
    n: string
    name: string
    text: string
    deliverable: string
    duration: string
  }[]
  note: string

  dashboard: {
    label: SectionLabel
    h2: string
    rules: readonly { title: string; text: string }[]
    clarification: string
  }

  organization: {
    label: SectionLabel
    h2: string
    intro: string
    three: readonly { name: string; verb: string; text: string }[]
  }

  faq: {
    label: SectionLabel
    /** `id` ancla la pregunta; la del nombre usa `NAME_ANCHOR`. */
    items: readonly { id: string; q: string; a: string }[]
  }
}

/* --- Casos ---------------------------------------------------------------- */

export interface CasesContent {
  meta: Meta
  kicker: string
  titleLines: readonly string[]
  sub: string
  lead: RichText

  templateLabel: SectionLabel
  templateIntro: string
  templateSteps: readonly { n: string; title: string; text: string }[]

  casesLabel: SectionLabel
  provedLabel: string
  cases: readonly {
    n: string
    title: string
    /** Descriptor corto del caso; se omite donde no hay uno acordado. */
    subtitle?: string
    text: string
    /** La lección metodológica. Ausente en los casos aún sin documentar. */
    proved?: string
    /** Estado, para los casos que todavía no siguen la plantilla completa. */
    status?: string
  }[]
}

/* --- Sistema ---------------------------------------------------------------
   Conserva el Sistema Utopía y absorbe la antigua página «Qué es»: los cinco
   principios, las cinco dimensiones y el lugar de enunciación. */

export interface Dimension {
  n: string
  name: string
  claim: string
  problems: readonly string[]
  contributions: readonly { title: string; text: string }[]
}

export interface SystemContent {
  meta: Meta
  kicker: string
  titleLines: readonly string[]
  sub: string
  /** Encabezado nuevo: infraestructura como resultado, proyecto como vehículo. */
  header: RichText
  lead: RichText
  note: string

  triadLabel: SectionLabel
  triad: readonly { n: string; question: string; name: string; def: string }[]

  methodLabel: SectionLabel
  methodIntro: RichText
  producesLabel: string
  ops: readonly { n: string; name: string; def: string; produces: readonly string[] }[]

  principlesLabel: SectionLabel
  principles: readonly { n: string; title: string; text: string }[]

  dimsLabel: SectionLabel
  problemHead: string
  contributionHead: string
  dims: readonly Dimension[]

  place: { tag: string; h2: string; p: string }

  /** Puente al piloto, al final de la página. */
  bridge: { text: string; link: string }
}

/* --- Pensamiento ---------------------------------------------------------- */

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
  services: ServicesContent
  cases: CasesContent
  system: SystemContent
  thinking: ThinkingContent
}
