import type { Locale } from './i18n'
import { LOCALES } from './i18n'

export const PAGE_KEYS = ['home', 'services', 'cases', 'system', 'thinking'] as const

export type PageKey = (typeof PAGE_KEYS)[number]

/**
 * Slug por idioma. `home` usa slug vacío: la home de cada idioma vive en
 * `/es` y `/en`.
 */
export const SLUGS: Record<Locale, Record<PageKey, string>> = {
  es: {
    home: '',
    services: 'servicios',
    cases: 'casos',
    system: 'sistema',
    thinking: 'pensamiento',
  },
  en: {
    home: '',
    services: 'services',
    cases: 'cases',
    system: 'system',
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

/** Ancla de la sección Equipo, que vive dentro de la home. */
export const TEAM_ANCHOR: Record<Locale, string> = { es: 'equipo', en: 'team' }

/** Ancla de la sección El piloto, que vive dentro de la home. */
export const PILOT_ANCHOR: Record<Locale, string> = { es: 'piloto', en: 'pilot' }

/** Ancla de la pregunta frecuente sobre el nombre, en /servicios. */
export const NAME_ANCHOR = 'nombre'

/**
 * Rutas de la estructura anterior que ya no existen. Se conservan como
 * redirecciones para no romper enlaces publicados; el equivalente en el
 * servidor está en `public/_redirects`.
 */
export const LEGACY_REDIRECTS: Record<string, string> = {
  '/es/que-es': pathFor('es', 'system'),
  '/en/what-it-is': pathFor('en', 'system'),
  '/es/intervenciones': pathFor('es', 'cases'),
  '/en/interventions': pathFor('en', 'cases'),
  '/es/dispositivos': pathFor('es', 'services'),
  '/en/devices': pathFor('en', 'services'),
}
