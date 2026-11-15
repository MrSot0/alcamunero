# Plan SEO — U.E. Colegio Aplicación

Estado: **plan previo a la implementación**. Sin dominio publicado, sin Search Console
ni herramientas de volumen de búsqueda: las familias de consultas de abajo son hipótesis
de intención local, **no** datos de volumen. Validar con Search Console tras el lanzamiento.
Ningún punto de este plan garantiza posiciones.

## 1. Familias de consultas → página dueña (una página por intención)

| Familia de consulta (hipótesis) | Página dueña | Tipo |
|---|---|---|
| "colegio aplicación", "colegio aplicación palo gordo", "u.e. colegio aplicación" | `/` | Marca (prioridad 1) |
| "colegios en palo gordo", "colegios privados en cárdenas táchira", "colegio católico táchira" | `/` + `/nosotros` | Local / categoría (líder a largo plazo) |
| "inscripciones colegio aplicación", "requisitos inscripción colegio táchira", "cupos colegio palo gordo" | `/admisiones` | Transaccional |
| "preescolar / kinder en palo gordo", "educación inicial cárdenas" | `/programa/kinder` | Nivel |
| "primaria colegio privado táchira" | `/programa/primaria` | Nivel |
| "bachillerato / media general palo gordo" | `/programa/bachillerato` | Nivel |
| "historia colegio aplicación", "monseñor alejandro fernández feo colegio" | `/nosotros#historia` | Informativa |
| "teléfono / dirección colegio aplicación" | `/contacto` | Navegacional |
| "alcamunero", "noticias colegio aplicación" | `/periodico` | Marca secundaria |

Regla: ninguna otra página compite por el título de otra. `/estudiantes` es un portal
interno → `noindex` no es necesario, pero no se optimiza para búsqueda.

## 2. Títulos y descripciones (≤ 60 / ≤ 155 caracteres)

| Ruta | `<title>` | meta description |
|---|---|---|
| `/` | Colegio Aplicación · Palo Gordo, Táchira | Colegio católico en Palo Gordo, Cárdenas. Kinder, Primaria y Bachillerato desde 1970. Educando para servir. Conoce admisiones. |
| `/nosotros` | Nosotros: misión, historia y staff · Colegio Aplicación | Fundado en 1970 por la Diócesis del Táchira. Misión, visión, valores, equipo directivo e instalaciones. |
| `/programa` | Programa académico · Colegio Aplicación | Educación Inicial, Primaria y Media General con metodología activa y formación en valores. |
| `/programa/kinder` | Kinder y Educación Inicial en Palo Gordo · Colegio Aplicación | Educación Inicial de 3 a 5 años: aprendizaje por el juego, desarrollo socioemocional y lectoescritura. |
| `/programa/primaria` | Educación Primaria (1.º a 6.º) · Colegio Aplicación | … |
| `/programa/bachillerato` | Bachillerato – Media General · Colegio Aplicación | … |
| `/programa/metodologia` | Metodología de aprendizaje · Colegio Aplicación | … |
| `/programa/curriculum` | Currículum por niveles · Colegio Aplicación | … |
| `/admisiones` | Admisiones e inscripciones · Colegio Aplicación | Pasos, requisitos y preguntas frecuentes para inscribir a tu hijo. Agenda una visita por WhatsApp. |
| `/estudiantes` | Portal de estudiantes · Colegio Aplicación | … |
| `/contacto` | Contacto y ubicación · Colegio Aplicación | Dirección, WhatsApp, correo e Instagram del Colegio Aplicación en Palo Gordo, Táchira. |
| `/periodico` | Alcamunero · Periódico digital del Colegio Aplicación | (se mantiene) |

Un solo `<h1>` por página, coherente con el título.

## 3. Datos estructurados (JSON-LD, solo lo visible en la página)

- `/` y global: `School` (subtipo de `EducationalOrganization`) con `name`, `alternateName`,
  `foundingDate: 1970-11-05`, `address` (Palo Gordo, Cárdenas, Táchira, VE), `telephone`,
  `email`, `logo`, `sameAs: [instagram]`, `parentOrganization` no se declara salvo confirmación.
- `/programa/*`: `BreadcrumbList`. (No usar `Course` salvo que haya oferta de cursos real.)
- `/admisiones`: `FAQPage` solo con las preguntas visibles (no garantiza resultado enriquecido).
- `/articulo/*`: `NewsArticle` con `headline`, `image`, `author`, `datePublished` cuando haya fecha ISO.
- `/contacto`: el mismo `School` con `geo` cuando se tengan coordenadas reales.

## 4. Técnico

- Configurar `site` en `astro.config.mjs` cuando exista dominio → canonical absoluto por página.
- `@astrojs/sitemap` → `sitemap-index.xml`; `public/robots.txt` con la línea `Sitemap:`.
- `lang="es"`, Open Graph + Twitter Card con imagen por página.
- Favicon + `apple-touch-icon` con el logo institucional.
- Imágenes: `alt` descriptivo (ya existe en el periódico), `loading="lazy"` salvo el hero, `width/height` para evitar CLS.
- Animaciones con `transform/opacity` únicamente y respeto a `prefers-reduced-motion` (no dañar Core Web Vitals).
- Los enlaces antiguos `/articulo/*` y `/seccion/*` se conservan (sin redirecciones necesarias).
  La portada del periódico se mueve de `/` a `/periodico`.

## 5. SEO local (fuera del código)

- Crear/reclamar el **Perfil de Empresa en Google** con la misma dirección, teléfono y
  horario que el sitio (NAP idéntico). Categoría: "Escuela privada" / "Colegio".
- Enlazar el sitio desde la bio de Instagram `@colegioaplicacionsc`.
- Pedir reseñas a representantes de forma natural (sin incentivos).

## 6. Pendiente de la institución

1. Dominio definitivo.
2. Número de WhatsApp/teléfono real y horario de atención.
3. Coordenadas exactas del plantel (para el mapa y `geo`).
4. Validar misión, visión y valores redactados.
