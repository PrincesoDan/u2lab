import { createContext, use } from 'react'
import type { Content, Locale } from './i18n'
import { CONTENT, DEFAULT_LOCALE } from './i18n'
import type { PageKey } from './routes'

export interface SiteValue {
  locale: Locale
  page: PageKey
  t: Content
}

export const SiteContext = createContext<SiteValue>({
  locale: DEFAULT_LOCALE,
  page: 'home',
  t: CONTENT[DEFAULT_LOCALE],
})

export function useSite(): SiteValue {
  return use(SiteContext)
}
