# (U)² Lab

Sitio de [u2lab.cl](https://u2lab.cl/) migrado a **Vite + React + TypeScript**, bilingüe (español / inglés) y con un CTA de agendamiento de reuniones.

## Desarrollo

Requiere Node 20+ (hay un `.nvmrc` con 24).

```bash
nvm use
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + build a dist/
npm run preview  # sirve dist/
```

## Configuración

Todo lo configurable vive en [`src/config.ts`](src/config.ts):

| Constante        | Para qué                                                       |
| ---------------- | -------------------------------------------------------------- |
| `BOOKING_URL`    | Destino del CTA "Agendar una reunión" (Calendly / Cal.com)      |
| `CONTACT_EMAIL`  | Correo de contacto de las secciones de cierre                   |
| `COPYRIGHT_YEAR` | Año del pie de página                                           |

> **Pendiente:** `BOOKING_URL` tiene un placeholder. Hay que reemplazarlo por el link real de agenda.

## Idiomas

Cada idioma tiene su propia URL, con español por defecto:

| Página        | Español              | English             |
| ------------- | -------------------- | ------------------- |
| Home          | `/es`                | `/en`               |
| Qué es        | `/es/que-es`         | `/en/what-it-is`    |
| Sistema       | `/es/sistema`        | `/en/system`        |
| Intervenciones| `/es/intervenciones` | `/en/interventions` |
| Dispositivos  | `/es/dispositivos`   | `/en/devices`       |
| Pensamiento   | `/es/pensamiento`    | `/en/thinking`      |

`/` redirige a `/en` si el navegador está en inglés y a `/es` en cualquier otro caso
(ver `detectLocale` en [`src/App.tsx`](src/App.tsx)).

El selector ES/EN del header mantiene la página y el ancla actuales.

### Editar textos

Todo el contenido está en dos archivos, uno por idioma:

- [`src/i18n/es.ts`](src/i18n/es.ts)
- [`src/i18n/en.ts`](src/i18n/en.ts)

Ambos implementan la interfaz `Content` de [`src/i18n/types.ts`](src/i18n/types.ts), así que
si se agrega un texto en uno y falta en el otro, **el build falla**. No hay strings sueltos
en los componentes.

Los slugs de cada idioma se definen en [`src/routes.ts`](src/routes.ts).

## Estructura

```
src/
  config.ts          Booking URL, email, año
  routes.ts          Páginas, slugs por idioma, helper pathFor()
  App.tsx            Router, marco de página, redirecciones
  site-context.ts    Contexto con { locale, page, t }
  useDocumentMeta.ts <title>, description, <html lang>, canonical y hreflang
  styles.css         Hoja única migrada de los <style> del original
  i18n/              types.ts + es.ts + en.ts
  components/        Header, Footer, LangSwitch, BookButton, Rich, Lines, SectionLabel
  pages/             Home, About, System, Interventions, Devices, Thinking
```

### Tipografía

Se define en dos variables al inicio de [`src/styles.css`](src/styles.css):

- `--font-sans` — **Helvetica**, como stack de sistema (`Helvetica Neue` → `Helvetica`
  → `Arial` → `Liberation Sans`). Helvetica es de licencia propietaria, así que no se
  puede servir como webfont; donde no esté instalada cae en Arial, que comparte métricas.
- `--font-mono` — JetBrains Mono, lo único que se descarga (Google Fonts, en `index.html`).

Nota: Helvetica y Arial solo traen 400 y 700, así que los pesos 600 y 800 del diseño
original se renderizan ambos como bold salvo en macOS, donde Helvetica Neue tiene la
escala completa. La jerarquía se sostiene igual porque esos niveles se distinguen
también por tamaño.

### Estilos

`styles.css` conserva las reglas del original. Las clases que en el sitio original
significaban cosas distintas en cada archivo (`.cierre`, `.intro .lead`, `.op`, `.dim`)
van aisladas bajo `.page-<key>`, que `App.tsx` pone en el contenedor de cada página.

## Deploy

Es una SPA: el servidor debe devolver `index.html` para cualquier ruta, o los enlaces
directos (`/es/que-es`) darán 404.

- **Netlify / Cloudflare Pages:** ya está el archivo [`public/_redirects`](public/_redirects).
- **Vercel:** agregar `vercel.json` con
  `{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }`.
- **nginx:** `try_files $uri $uri/ /index.html;`

## Fuera de alcance

El sitio original tiene además `/u-lab`, `/u-sync`, `/u-nina` y `/tesis`. No están
migradas. Los botones que apuntaban a ellas se muestran desactivados; los flags
`DEVICE_PAGES_AVAILABLE` ([`src/pages/Devices.tsx`](src/pages/Devices.tsx)) y
`THESIS_PAGE_AVAILABLE` ([`src/pages/Thinking.tsx`](src/pages/Thinking.tsx)) marcan
dónde reactivarlos.

En la Biblioteca de futuros los títulos de las obras se mantienen tal como aparecen en
el original (edición citada por el Lab) en ambos idiomas; solo se traduce la glosa de
cada referencia.
