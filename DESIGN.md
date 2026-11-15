# DESIGN.md — U.E. Colegio Aplicación

Sitio institucional + periódico Alcamunero. Una sola familia visual: el periódico
es la versión "editorial" y el sitio institucional la versión "abierta y cálida"
del mismo sistema. La sección **Estudiantes** usa el mismo sistema con forma de app móvil.

Dirección: **azul marino institucional, serif con autoridad, fotos reales de la comunidad,
movimiento suave**. Sensación: confiable, cercano, orgulloso de su historia.
Nada de degradados morados, glassmorphism por todos lados ni texto con degradado.

---

## 1. Color

Se conserva la paleta del periódico. Un primario, un acento, neutros.

| Token            | Valor     | Rol |
|------------------|-----------|-----|
| `navy-950`       | `#172554` | Fondos oscuros: header, hero, footer, bloques de énfasis |
| `navy-900`       | `#1e3a8a` | Superficies oscuras secundarias, hover sobre navy-950 |
| `brand`          | `#2B54A8` | **Primario**: botones, enlaces, íconos activos sobre fondo claro |
| `brand-hover`    | `#3b65ba` | Hover del primario |
| `cyan-400`       | `#22d3ee` | **Acento** sobre fondo oscuro: kickers, subrayados, indicadores |
| `cyan-300`       | `#67e8f9` | Texto de acento sobre navy (contraste 11:1) |
| `cyan-700`       | `#0e7490` | Acento cuando va sobre fondo claro (contraste 5.4:1) |
| `paper`          | `#f9fafb` | Fondo general (gray-50) |
| `ink`            | `#111827` | Texto principal (gray-900) |
| `ink-muted`      | `#4b5563` | Texto secundario (gray-600, 7:1 sobre paper) |
| `line`           | `#e5e7eb` | Bordes y divisores |
| `whatsapp`       | `#25D366` | Solo la burbuja de WhatsApp |
| `success/warn/error` | `#059669` / `#d97706` / `#dc2626` | Formularios y estados |

Reglas: el cyan nunca va como texto sobre blanco (usar `cyan-700`). Máximo un bloque
navy a pantalla completa por cada dos secciones claras para mantener ritmo.

## 2. Tipografía

- **Display**: Georgia (serif del periódico) → títulos, cifras, citas. Peso 700.
- **Texto/UI**: system-ui → cuerpo, botones, navegación. 400 / 600 / 700.
- **Kicker**: system-ui 11–12px, 700, MAYÚSCULAS, tracking 0.2em, cyan.

| Paso    | Tamaño (móvil → escritorio) | Interlineado | Uso |
|---------|-----------------------------|--------------|-----|
| display | 40 → 72px                   | 1.05         | Hero de la landing |
| h1      | 32 → 48px                   | 1.1          | Título de página |
| h2      | 26 → 36px                   | 1.15         | Título de sección |
| h3      | 20 → 22px                   | 1.3          | Tarjetas |
| body-lg | 18px                        | 1.6          | Introducciones |
| body    | 16px                        | 1.6          | Texto general (máx. 68 caracteres por línea) |
| small   | 14px                        | 1.5          | Metadatos, pies |
| micro   | 11–12px                     | 1.4          | Kickers, etiquetas |

## 3. Espaciado y retícula

- Escala base 4px (Tailwind por defecto).
- Ancho de contenido: `max-w-7xl` (1280px), gutter 16px móvil / 24px tablet / 32px escritorio.
- Separación entre secciones: 64px móvil, 96–112px escritorio.
- Retícula: 12 columnas en escritorio; composiciones asimétricas (7/5, 8/4), no todo centrado.

## 4. Forma y profundidad

| Token        | Valor | Uso |
|--------------|-------|-----|
| `radius-sm`  | 8px   | Inputs, chips |
| `radius-md`  | 16px  | Tarjetas del sitio |
| `radius-lg`  | 28px  | Tarjetas de la app de estudiantes, hojas inferiores, fotos destacadas |
| `pill`       | 9999px| Botones, pestañas, badges |
| `shadow-card`| `0 1px 2px rgb(15 23 42/.06), 0 8px 24px -12px rgb(15 23 42/.18)` | Tarjetas en reposo |
| `shadow-lift`| `0 20px 40px -16px rgb(23 37 84/.35)` | Hover y elementos flotantes |

El periódico mantiene sus esquinas rectas (lenguaje editorial). El sitio institucional
suaviza con `radius-md`; la app de estudiantes llega a `radius-lg`.

## 5. Componentes

- **Botón primario**: pill, `brand`, texto blanco 600, 48px alto. Hover `brand-hover` + leve elevación. Focus: anillo 3px cyan-400.
- **Botón secundario**: pill, borde 1.5px (blanco sobre navy / `brand` sobre claro), fondo transparente.
- **Botón quieto**: texto con flecha → que se desplaza 4px en hover.
- **Enlace**: `brand`, subrayado con offset 4px en hover.
- **Tarjeta de nivel**: foto arriba con esquinas 16px, chip de edades, título serif, flecha.
- **Header**: igual al periódico (navy-950, logos a los lados en escritorio); menú con desplegables.
  En móvil: barra superior compacta + **barra de pestañas inferior** + hoja "Más" (mismo patrón que el periódico).
- **Footer**: navy-950, 4 columnas, igual estructura que el periódico.
- **Burbuja WhatsApp**: círculo 56px `#25D366`, sombra lift, pulso suave cada 4s, etiqueta "¿Hablamos?" en escritorio. En móvil se ubica sobre la barra de pestañas.
- **App de Estudiantes**: barra de saludo, accesos rápidos en cuadrícula 3×2 (íconos en cuadros redondeados 20px), "historias" circulares horizontales, tarjetas de feed, control segmentado sticky (Inicio · Agenda · Recursos · Vida).

## 6. Imágenes e íconos

- **Fotos reales** del colegio (las del periódico). Nunca stock genérico.
  Sobre navy: degradado `navy-950 → transparente` para legibilidad.
- Fotos de baja resolución: usarlas en tamaños medianos o con overlay; no a pantalla completa sin tratamiento.
- **Íconos**: línea 1.8px, 24×24, estilo Heroicons outline (el mismo del periódico). Sin emojis.

## 7. Movimiento

Todo animado con propósito, todo desactivable con `prefers-reduced-motion`.

| Patrón | Detalle |
|--------|---------|
| Entrada por scroll | Fade + subir 24px, 600ms `cubic-bezier(.22,1,.36,1)`, escalonado 80ms entre hijos |
| Hero | Zoom lento de la foto (Ken Burns 1.0 → 1.08, 20s) + título que aparece por líneas |
| Cifras | Contadores que suben (56 años, 3 niveles, 1970) al entrar en pantalla |
| Galería | Carrusel/marquee de fotos de la comunidad, se detiene en hover |
| Staff | Burbujas flotantes (patrón ya usado en el Directorio) |
| Línea de tiempo | La línea se "dibuja" al hacer scroll |
| Tarjetas | Hover: elevación + zoom 1.04 de la foto (300ms) |
| App Estudiantes | Presionar = escala 0.97; cambio de pestaña con deslizamiento; hoja inferior con resorte |
| Entre páginas | View Transitions nativas (fundido 250ms) |
| WhatsApp | Pulso de halo cada 4s |
