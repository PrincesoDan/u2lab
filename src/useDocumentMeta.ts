import { useEffect } from 'react'
import type { Locale } from './i18n'
import { LOCALES } from './i18n'
import type { PageKey } from './routes'
import { pathFor } from './routes'
import type { Meta } from './i18n/types'

function upsertMeta(name: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`
  let el = document.head.querySelector<HTMLLinkElement>(selector)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    if (hreflang) el.setAttribute('hreflang', hreflang)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Mantiene `<title>`, la descripción, `<html lang>` y los `hreflang`
 * sincronizados con la ruta actual.
 */
export function useDocumentMeta(locale: Locale, page: PageKey, meta: Meta) {
  useEffect(() => {
    document.title = meta.title
    upsertMeta('description', meta.description)
    document.documentElement.lang = locale

    const origin = window.location.origin
    upsertLink('canonical', origin + pathFor(locale, page))
    for (const code of LOCALES) {
      upsertLink('alternate', origin + pathFor(code, page), code)
    }
    upsertLink('alternate', origin + pathFor('es', page), 'x-default')
  }, [locale, page, meta.title, meta.description])
}
