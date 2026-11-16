# Colegio Aplicación · sitio web y periódico Alcamunero

Sitio institucional de la U.E. Colegio Aplicación (Palo Gordo, Táchira) y su periódico digital **Alcamunero**, hecho con [Astro](https://astro.build) y Tailwind CSS v4.

## Páginas

| Ruta | Contenido |
|---|---|
| `/` | Inicio: resumen de todas las secciones |
| `/nosotros` | Misión, visión, valores, historia, staff, instalaciones |
| `/programa`, `/programa/[kinder\|primaria\|bachillerato\|metodologia\|curriculum]` | Programa académico |
| `/admisiones` | Pasos, requisitos, preguntas frecuentes, solicitud por WhatsApp |
| `/estudiantes` | Portal de estudiantes con estética de app |
| `/contacto` | Mapa, datos de contacto y formulario por WhatsApp |
| `/periodico`, `/articulo/*`, `/seccion/*`, `/directorio` | Periódico Alcamunero |
| `/admin` | Administrador de contenidos del periódico |

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
