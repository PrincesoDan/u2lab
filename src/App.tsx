import { useEffect } from 'react'
import type { ComponentType } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import type { Locale } from './i18n'
import { CONTENT, DEFAULT_LOCALE } from './i18n'
import { About } from './pages/About'
import { Devices } from './pages/Devices'
import { Home } from './pages/Home'
import { Interventions } from './pages/Interventions'
import { System } from './pages/System'
import { Thinking } from './pages/Thinking'
import type { PageKey } from './routes'
import { ALL_ROUTES, pathFor } from './routes'
import { SiteContext } from './site-context'
import { useDocumentMeta } from './useDocumentMeta'

const PAGES: Record<PageKey, ComponentType> = {
  home: Home,
  about: About,
  system: System,
  interventions: Interventions,
  devices: Devices,
  thinking: Thinking,
}

/** Idioma inicial para `/`: inglés si el navegador lo pide, español si no. */
function detectLocale(): Locale {
  const preferred = typeof navigator === 'undefined' ? '' : navigator.language
  return preferred.toLowerCase().startsWith('en') ? 'en' : DEFAULT_LOCALE
}

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function SiteFrame({ locale, page }: { locale: Locale; page: PageKey }) {
  const t = CONTENT[locale]
  const Page = PAGES[page]

  useDocumentMeta(locale, page, t[page].meta)

  return (
    <SiteContext.Provider value={{ locale, page, t }}>
      <div className={`site page-${page}`}>
        <Header />
        <Page />
        {page !== 'home' && <Footer />}
      </div>
    </SiteContext.Provider>
  )
}

/** Las rutas sin router, para poder montarlas en cualquier Router. */
export function AppRoutes() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Navigate to={pathFor(detectLocale(), 'home')} replace />} />
        {ALL_ROUTES.map(({ locale, page, path }) => (
          <Route key={path} path={path} element={<SiteFrame locale={locale} page={page} />} />
        ))}
        <Route path="*" element={<Navigate to={pathFor(detectLocale(), 'home')} replace />} />
      </Routes>
    </>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
