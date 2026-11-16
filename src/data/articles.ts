import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
// src/data/articles.ts
// Fuente única de metadatos de los artículos del periódico.
// El contenido vive en src/content/articulos/<slug>.md
//
// Para agregar un artículo nuevo, usa el administrador en /admin
// (o crea un .md en src/content/articulos/ copiando uno existente).

export interface Slide {
  src: string;
  alt: string;
}

export type SectionId =
  | 'actualidad'
  | 'eventos'
  | 'cultura'
  | 'deportes'
  | 'religion'
  | 'comunidad'
  | 'ciencia'
  | 'efemerides'
  | 'opinion'
  | 'reportajes'
  | 'editorial';

export interface Article {
  /** URL: /articulo/<slug> (nombre del archivo .md) */
  slug: string;
  /** Sección del periódico (menú y páginas de sección) */
  section: SectionId;
  /** Etiqueta superior del artículo (el "kicker") */
  kicker: string;
  title: string;
  /** Firma tal como se muestra: "Por Carlos Arellano" */
  author: string;
  /** Fecha visible ("21 de septiembre, 2026"). Si falta, se genera desde publishedAt. */
  date: string;
  /** Fecha y hora de publicación (ISO). Ordena la edición: lo más reciente primero. */
  publishedAt: string;
  /** Resumen corto para la portada */
  excerpt: string;
  slides: Slide[];
  /** Pie de foto del carrusel */
  caption: string;
  /** Nota principal de la portada (si hay varias, gana la más reciente) */
  featured?: boolean;
  /** Aparece en la columna de destacados */
  highlight?: boolean;
  /** Video de YouTube opcional al final del artículo */
  video?: { youtube: string; titulo?: string; pie?: string; vertical?: boolean };
  /** Posición en la edición (1 = más reciente). Calculada. */
  order: number;
  /** Cuerpo del artículo (Markdown renderizado) */
  Content: AstroComponentFactory;
}

export const sections: Record<SectionId, { label: string; description: string }> = {
  actualidad: {
    label: 'Actualidad',
    description: 'Noticias y novedades del Colegio Aplicación.',
  },
  eventos: {
    label: 'Eventos',
    description: 'Actos de prosecución, graduaciones y otras ceremonias del colegio.',
  },
  cultura: {
    label: 'Cultura',
    description: 'Talent Show, Gala Cultural y coronación de las soberanas aniversarias.',
  },
  deportes: {
    label: 'Deportes',
    description: 'Jornadas deportivas e integración familiar.',
  },
  religion: {
    label: 'Religión',
    description: 'Misas, celebraciones y tradiciones de fe de la comunidad aplicatense.',
  },
  comunidad: {
    label: 'Comunidad',
    description: 'Solidaridad y trabajo conjunto de la familia Colegio Aplicación.',
  },
  ciencia: {
    label: 'Ciencia y Tecnología',
    description: 'Formación, innovación y actualización profesional en el colegio.',
  },
  efemerides: {
    label: 'Efemérides',
    description: 'Fechas para recordar, mes a mes.',
  },
  opinion: {
    label: 'Opinión',
    description: 'Editorial de la Dirección y voces de la familia aplicatense.',
  },
  reportajes: {
    label: 'Reportajes',
    description: 'Historia, trayectoria e innovación institucional.',
  },
  editorial: {
    label: 'Editorial',
    description: 'Opinión y reflexiones del equipo directivo.',
  },
};

// ───────── Carga de artículos desde src/content/articulos/*.md ─────────
// Cada archivo Markdown es un artículo: los datos van en la cabecera (frontmatter)
// y el cuerpo en Markdown. Se crean y editan desde el administrador /admin.

type MdModule = { frontmatter: Record<string, any>; Content: AstroComponentFactory };
const files = import.meta.glob<MdModule>('../content/articulos/*.md', { eager: true });

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString('es-VE', { day: 'numeric', month: 'long', year: 'numeric' });

function toArticle(path: string, mod: MdModule): Omit<Article, 'order'> {
  const slug = path.split('/').pop()!.replace(/\.md$/, '');
  const fm = mod.frontmatter;
  const required = ['title', 'section', 'publishedAt', 'slides'];
  for (const key of required) {
    if (!fm[key]) throw new Error(`El artículo "${slug}" no tiene el campo obligatorio "${key}".`);
  }
  if (!(fm.section in sections)) throw new Error(`El artículo "${slug}" tiene una sección desconocida: "${fm.section}".`);
  const publishedAt = new Date(fm.publishedAt).toISOString();
  return {
    slug,
    section: fm.section,
    kicker: fm.kicker || sections[fm.section as SectionId].label,
    title: fm.title,
    author: fm.author || 'Redacción Alcamunero',
    date: fm.date || fmtDate(publishedAt),
    publishedAt,
    excerpt: fm.excerpt || '',
    slides: fm.slides,
    caption: fm.caption || '',
    featured: !!fm.featured,
    highlight: !!fm.highlight,
    video: fm.video?.youtube ? fm.video : undefined,
    Content: mod.Content,
  };
}

/** Artículos en el orden de la edición: lo más reciente primero. */
export const articles: Article[] = Object.entries(files)
  .map(([path, mod]) => toArticle(path, mod))
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
  .map((a, i) => ({ ...a, order: i + 1 }));

/** Artículos en el orden de la edición. */
export const sortedArticles = articles;

export function getArticlesBySection(section: SectionId): Article[] {
  return sortedArticles.filter((a) => a.section === section);
}

export function countByAuthor(match: string): number {
  return articles.filter((a) => a.author.includes(match)).length;
}

/** Otros artículos para "Seguir leyendo": misma sección primero, luego el resto. */
export function getRelated(article: Article, limit = 3): Article[] {
  const others = sortedArticles.filter((a) => a.slug !== article.slug);
  const sameSection = others.filter((a) => a.section === article.section);
  const rest = others.filter((a) => a.section !== article.section);
  return [...sameSection, ...rest].slice(0, limit);
}
