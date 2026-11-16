# Colegio Aplicación · sitio web y periódico Alcamunero

Sitio institucional de la U.E. Colegio Aplicación (Palo Gordo, Táchira) y su periódico digital **Alcamunero**, hecho con [Astro](https://astro.build) y Tailwind CSS v4.

## Estado actual: solo el periódico está publicado

El sitio institucional está **oculto al público**: solo existe como vista previa interna en
`/colegio-preview/` (páginas en `src/pages/colegio-preview/`). El periódico no enlaza hacia ella,
las páginas llevan `noindex` y no aparecen en el sitemap.

| Ruta publicada | Contenido |
|---|---|
| `/` | Portada del periódico Alcamunero (`/periodico` redirige aquí) |
| `/articulo/*`, `/seccion/*`, `/directorio` | Periódico |
| `/admin` | Administrador de contenidos del periódico |

### Volver a publicar el sitio institucional

1. Mueve la portada del periódico: `git mv src/pages/index.astro src/pages/periodico.astro`.
2. Mueve las páginas a la raíz: `git mv src/pages/colegio-preview/* src/pages/` y quita el prefijo
   `/colegio-preview` de los enlaces (en esas páginas, `src/layouts/SiteLayout.astro`,
   `src/components/site/` y `src/data/site.ts`). Ajusta las importaciones relativas (un `../` menos).
3. Quita la etiqueta `noindex` de `SiteLayout.astro`, la redirección `/periodico` y el filtro del
   sitemap en `astro.config.mjs`, y vuelve a enlazar el colegio desde `Navbar.astro` y `Footer.astro`.

Páginas institucionales (ocultas): inicio, `/nosotros`, `/programa` (+ kinder, primaria,
bachillerato, metodologia, curriculum), `/admisiones`, `/estudiantes`, `/contacto`.

## Datos que se editan a mano

- `src/data/site.ts`: datos institucionales (WhatsApp, horario, misión, staff, niveles, eventos…).
  **Pendiente:** el número de WhatsApp es de ejemplo.
- `DESIGN.md`: sistema de diseño. `docs/seo/plan-seo.md`: plan SEO.

## Administrador de contenidos (artículos del periódico)

Los artículos son archivos Markdown en `src/content/articulos/`. Se crean y editan desde **`/admin`**
(Sveltia CMS, compatible con Decap CMS). Cada cambio que se guarda crea un commit en la rama `main`
de GitHub y, si el sitio está conectado a un servicio de despliegue, se publica solo.

Para entrar:

1. Ve a `https://<dominio>/admin`.
2. Elige **Sign In Using Access Token** y pega un token de GitHub con permiso de escritura sobre
   este repositorio (GitHub → Settings → Developer settings → Fine-grained tokens →
   *Repository access: alcamunero* → *Contents: Read and write*).
3. Crea un artículo: título, sección, fotos (con su descripción), resumen y texto. Guarda.

Para trabajar sin conexión con GitHub: `npm run dev`, abre `http://localhost:4321/admin` en Chrome o
Edge y elige **Work with Local Repository** (selecciona la carpeta del proyecto).

## Comandos

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera ./dist
```
