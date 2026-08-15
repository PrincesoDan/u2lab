# Utopía Lab

Sitio de Utopía Lab: **Vite + React + TypeScript**, bilingüe (español / inglés), con la
agenda de Cal.com como único destino de conversión.

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

| Constante        | Para qué                                                        |
| ---------------- | --------------------------------------------------------------- |
| `BOOKING_URL`    | Destino de todos los CTA (Cal.com)                                |
| `BRAND`          | El logotipo, tal como se escribe en header, pie y textos          |
| `SITE_DOMAIN`    | Dominio canónico que aparece en el pie                            |
| `COPYRIGHT_YEAR` | Año del pie de página                                             |

No hay correo de contacto publicado: la agenda es la única puerta de entrada.

## Idiomas

Cada idioma tiene su propia URL, con español por defecto:

| Página      | Español          | English         |
| ----------- | ---------------- | --------------- |
| Home        | `/es`            | `/en`           |
| Servicios   | `/es/servicios`  | `/en/services`  |
| Casos       | `/es/casos`      | `/en/cases`     |
| Sistema     | `/es/sistema`    | `/en/system`    |
| Pensamiento | `/es/pensamiento`| `/en/thinking`  |

`/` redirige a `/en` si el navegador está en inglés y a `/es` en cualquier otro caso
(ver `detectLocale` en [`src/App.tsx`](src/App.tsx)).

El selector ES/EN del header mantiene la página y el ancla actuales.

**Equipo** no es una página: es la sección `#equipo` / `#team` de la home, y así se
enlaza desde la navegación.

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
  config.ts          Booking URL, marca, dominio, año
  routes.ts          Páginas, slugs por idioma, anclas y redirecciones heredadas
  App.tsx            Router, marco de página, redirecciones
  site-context.ts    Contexto con { locale, page, t }
  useDocumentMeta.ts <title>, description, <html lang>, canonical y hreflang
  styles.css         Hoja única
  i18n/              types.ts + es.ts + en.ts
  components/        Header, Footer, LangSwitch, BookButton, Rich, Lines, SectionLabel
  pages/             Home, Services, Cases, System, Thinking
```

### La home

Ocho bloques, en este orden: hero, problema, para quién, método, piloto, casos, equipo y
cierre. Primero el problema del visitante y después el marco conceptual —que vive completo
en `/sistema` y se enlaza desde el bloque de método.

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

Las clases que significan cosas distintas según la página van aisladas bajo
`.page-<key>`, que `App.tsx` pone en el contenedor de cada página.

## Deploy

Es una SPA: el servidor debe devolver `index.html` para cualquier ruta, o los enlaces
directos (`/es/servicios`) darán 404.

- **Netlify / Cloudflare Pages:** ya está el archivo [`public/_redirects`](public/_redirects).
- **Vercel:** agregar `vercel.json` con
  `{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }`.
- **nginx:** `try_files $uri $uri/ /index.html;`

### Redirecciones de la estructura anterior

`public/_redirects` manda los slugs viejos a los nuevos con 301 (`/es/que-es` →
`/es/sistema`, `/es/intervenciones` → `/es/casos`, `/es/dispositivos` → `/es/servicios`, y
sus equivalentes en inglés). `LEGACY_REDIRECTS` en `src/routes.ts` hace lo mismo dentro de
la SPA, para los hosts que no leen ese archivo.

**Pendiente de infraestructura:** el plan de contenidos también pide que el dominio
anterior `u2lab.cl` siga vivo al menos doce meses redirigiendo a `utopialab.cl`, con su
home apuntando a `/sistema`. Eso es una regla del host antiguo, no de esta aplicación: si
se pusiera aquí, la home nueva quedaría inalcanzable.

## Deuda de contenido

1. **Un caso corporativo o gremial documentado.** El tercer carril de «Para quién»
   (empresas y gremios) se apoya hoy en el caso de formación/IA, que es sectorial y no
   corporativo.
2. **El caso 03 con la plantilla completa.** «El futuro de la formación ante la
   inteligencia artificial» todavía lleva el texto que ya estaba publicado en
   Intervenciones, marcado como `En documentación`, en vez de los cuatro pasos —contexto,
   intervención, resultado, qué se probó—. Hay un `TODO` en ambos archivos de contenido.
3. **Fotos reales del equipo.** El bloque de equipo va sin fotos. Cuando lleguen, el
   hueco está marcado con un `TODO` sobre `.persona .qname` en `styles.css`. Nada de stock.
