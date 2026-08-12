import type { Locale } from './i18n'
import { LOCALES } from './i18n'

export const PAGE_KEYS = [
  'home',
  'about',
  'system',
  'interventions',
  'devices',
  'thinking',
] as const

export type PageKey = (typeof PAGE_KEYS)[number]

/**
 * Slug por idioma. `home` usa slug vacío: la home de cada idioma vive en
 * `/es` y `/en`.
 */
export const SLUGS: Record<Locale, Record<PageKey, string>> = {
  es: {
    home: '',
    about: 'que-es',
    system: 'sistema',
    interventions: 'intervenciones',
    devices: 'dispositivos',
    thinking: 'pensamiento',
  },
  en: {
    home: '',
    about: 'what-it-is',
    system: 'system',
    interventions: 'interventions',
    devices: 'devices',
    thinking: 'thinking',
  },
}

export function pathFor(locale: Locale, page: PageKey): string {
  const slug = SLUGS[locale][page]
  return slug ? `/${locale}/${slug}` : `/${locale}`
}

/** Todas las combinaciones idioma × página, para generar las rutas. */
export const ALL_ROUTES = LOCALES.flatMap((locale) =>
  PAGE_KEYS.map((page) => ({ locale, page, path: pathFor(locale, page) })),
)
