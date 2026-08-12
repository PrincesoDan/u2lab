import type { Content } from './types'
import { es } from './es'
import { en } from './en'

export const LOCALES = ['es', 'en'] as const
export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'es'

export const CONTENT: Record<Locale, Content> = { es, en }

export function isLocale(value: string | undefined): value is Locale {
  return value === 'es' || value === 'en'
}

export type { Content }
