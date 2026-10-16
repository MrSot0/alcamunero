// src/data/articles.ts
// Fuente única de metadatos de los artículos del periódico.
// El cuerpo de cada artículo vive en src/components/articles/<component>.astro
//
// Para agregar un artículo nuevo:
//   1. Crea el componente en src/components/articles/ con el texto.
//   2. Agrega su entrada en el arreglo `articles` de abajo.
//   3. Listo: aparece solo en el index, en su sección y en /articulo/<slug>.

export interface Slide {
  src: string;
  alt: string;
}

export type SectionId =
  | 'actualidad'
  | 'cultura'
  | 'deportes'
  | 'opinion'
  | 'reportajes';

export interface Article {
  /** URL: /articulo/<slug> */
  slug: string;
  /** Nombre del archivo en src/components/articles/ (sin .astro) */
  component: string;
  /** Sección del periódico (menú y páginas de sección) */
  section: SectionId;
  /** Etiqueta superior del artículo (el "kicker") */
  kicker: string;
  title: string;
  /** Firma tal como se muestra: "Por Carlos Arellano" */
  author: string;
  date: string;
  /** Resumen corto para el index */
  excerpt: string;
  slides: Slide[];
  /** Pie de foto del carrusel */
  caption: string;
  /** Portada principal del index (solo uno) */
  featured?: boolean;
  /** Aparece en la columna de destacados del index */
  highlight?: boolean;
  /** Orden de la edición (1 = primero) */
  order: number;
}

export const sections: Record<SectionId, { label: string; description: string }> = {
  actualidad: {
    label: 'Actualidad',
    description: 'Lo que pasó en la Semana Aniversaria del Colegio Aplicación.',
  },
  cultura: {
    label: 'Cultura',
    description: 'Talent Show, Gala Cultural y coronación de las soberanas aniversarias.',
  },
  deportes: {
    label: 'Deportes',
    description: 'Jornadas deportivas e integración familiar.',
  },
  opinion: {
    label: 'Opinión',
    description: 'Editorial de la Dirección y voces de la familia aplicatense.',
  },
  reportajes: {
    label: 'Reportajes',
    description: 'Historia, trayectoria e innovación institucional.',
  },
};

export const articles: Article[] = [
  {
    slug: 'aniversario',
    component: 'Aniversario',
    section: 'actualidad',
    kicker: 'Especial Aniversario',
    title: 'La Unidad Educativa Fundación Colegio Aplicación celebró con orgullo su 56 aniversario',
    author: 'Redacción Alcamunero',
    date: 'Del 15 al 19 de junio, 2026',
    excerpt:
      'Con una programación especial, la institución rindió homenaje a su historia, reconoció a su equipo de trabajo y reafirmó su compromiso con la comunidad.',
    slides: [
      { src: '/img1.webp', alt: 'Fotografía institucional - 56 Aniversario Colegio Aplicación' },
    ],
    caption:
      'Autoridades, docentes y estudiantes reunidos en la conmemoración de los 56 años de trayectoria educativa ininterrumpida de la institución en Cárdenas. Credit: Prensa Alcamunero',
    featured: true,
    order: 1,
  },
  {
    slug: 'misa-accion-de-gracias',
    component: 'MisaAccionDeGracias',
    section: 'actualidad',
    kicker: 'Religión y Comunidad',
    title: 'Inicia Semana Aniversaria Colegio Aplicación con Misa de Acción de Gracias',
    author: 'Por Carlos Arellano',
    date: '15 de junio, 2026',
    excerpt:
      'La ceremonia litúrgica en la cancha techada marcó el punto de partida espiritual de una semana de actividades culturales, deportivas y recreativas.',
    slides: [
      { src: '/religion.webp', alt: 'Fotografía: Misa de Acción de Gracias - Padre Geico' },
    ],
    caption:
      'El Padre Yeico durante la ceremonia litúrgica central realizada en la cancha techada de la institución como apertura espiritual de los festejos aniversarios. Credit: Prensa Alcamunero',
    order: 2,
  },
  {
    slug: 'cumpleanos-institucional',
    component: 'CumpleanosInstitucional',
    section: 'actualidad',
    kicker: 'Actualidad Institucional',
    title: '¡Cumpleaños feliz y homenaje a la trayectoria institucional!',
    author: 'Por Niria Colina',
    date: '15 de junio, 2026',
    excerpt:
      'El personal docente, administrativo y obrero se reunió alrededor del pastel para celebrar el 56.º aniversario junto a educadores de larga trayectoria.',
    slides: [
      { src: '/cumple.webp', alt: 'Fotografía: Canto de Cumpleaños y Pasteles Aniversarios' },
      { src: '/img2.webp', alt: 'Otra toma del mismo evento (foto pendiente)' },
    ],
    caption:
      'El personal docente, administrativo y obrero congregado alrededor del pastel para celebrar el 56.º aniversario junto a educadores de larga trayectoria.',
    order: 3,
  },
  {
    slug: 'talent-show-gala-cultural',
    component: 'TalentShowGalaCultural',
    section: 'cultura',
    kicker: 'Cultura y Tradición',
    title: '1er Encuentro de Talent Show y Gala Cultural',
    author: 'Por Niria Colina',
    date: 'Junio, 2026',
    excerpt:
      'Estudiantes de todos los niveles demostraron su talento en canto, danza y ejecución instrumental, y rindieron homenaje a la riqueza folclórica.',
    slides: [
      { src: '/cultura1.webp', alt: 'Fotografía: 1.er Talent Show Estudiantil y Gala Cultural' },
      { src: '/cultura2.webp', alt: 'Otra toma del mismo evento (foto pendiente)' },
      { src: '/cultura3.webp', alt: 'Vista adicional de la actividad (foto pendiente)' },
      { src: '/cultura4.webp', alt: 'Vista adicional de la actividad (foto pendiente)' },
      { src: '/cultura5.webp', alt: 'Vista adicional de la actividad (foto pendiente)' },
      { src: '/cultura6.webp', alt: 'Vista adicional de la actividad (foto pendiente)' },
    ],
    caption:
      'Estudiantes demostrando su talento artístico y muestras folclóricas durante las actividades centrales de la Semana Aniversaria. Credit: Prensa Alcamunero',
    highlight: true,
    order: 4,
  },
  {
    slug: 'coronacion-soberanas',
    component: 'CoronacionSoberanas',
    section: 'cultura',
    kicker: 'Certamen y Soberanas',
    title: 'Gala de elección y coronación de la Mini Princesa, Princesa y Reina Aniversaria',
    author: 'Por Niria Colina',
    date: 'Junio, 2026',
    excerpt:
      'Las candidatas de los distintos niveles desfilaron con trajes temáticos y de gala ante un jurado calificador de alto nivel.',
    slides: [
      { src: '/reinas0.webp', alt: 'Fotografía: Coronación de Soberanas Aniversarias' },
      { src: '/reinas1.webp', alt: 'Fotografía: Coronación de Soberanas Aniversarias' },
      { src: '/reinas2.webp', alt: 'Otra toma del mismo evento (foto pendiente)' },
      { src: '/profe.webp', alt: 'Vista adicional de la actividad (foto pendiente)' },
      { src: '/profe2.webp', alt: 'Vista adicional de la actividad (foto pendiente)' },
      { src: '/equipo2.webp', alt: 'Vista adicional de la actividad (foto pendiente)' },
    ],
    caption:
      'Momento de la coronación oficial de las soberanas con la conducción del subdirector Douglas Medina y la profesora Jenifer Velandia. Credit: Prensa Alcamunero',
    highlight: true,
    order: 5,
  },
  {
    slug: 'jornada-deportiva',
    component: 'JornadaDeportiva',
    section: 'deportes',
    kicker: 'Deportes e Integración',
    title: 'Pasión, deporte y familia presentes en la Semana Aniversaria',
    author: 'Por Carlos Arellano',
    date: '18 de junio, 2026',
    excerpt:
      'Padres, representantes, docentes y estudiantes compartieron torneos relámpago y juegos tradicionales en la jornada especial por el Día del Padre.',
    slides: [
      { src: '/deporte1.webp', alt: 'Fotografía: Jornada Deportiva y Homenaje al Día del Padre' },
      { src: '/deporte2.webp', alt: 'Otra toma del mismo evento (foto pendiente)' },
      { src: '/deporte3.webp', alt: 'Vista adicional de la actividad (foto pendiente)' },
    ],
    caption:
      'Padres, representantes y estudiantes compartiendo en los torneos relámpago de futbolit y voleibol durante la jornada especial. Credit: Prensa Alcamunero',
    highlight: true,
    order: 6,
  },
  {
    slug: 'educando-para-servir',
    component: 'EducandoParaServir',
    section: 'reportajes',
    kicker: 'Reportaje Especial',
    title: '56 años al servicio de la formación de generaciones: “Educando para servir”',
    author: 'Por Niria Colina',
    date: 'Junio, 2026',
    excerpt:
      'Desde su inauguración el 5 de noviembre de 1970, el plantel se consolidó como referente formativo para Palo Gordo y la región andina.',
    slides: [
      { src: '/colegio.webp', alt: 'Fotografía: Instalaciones y Trayectoria Institucional' },
    ],
    caption:
      'Fachada e instalaciones principales de la Unidad Educativa Fundación Colegio Aplicación en Cárdenas. Credit: Archivo Fotográfico Alcamunero',
    order: 7,
  },
  {
    slug: 'editorial-legado',
    component: 'EditorialLegado',
    section: 'opinion',
    kicker: 'Editorial',
    title: 'Más de cinco décadas de legado y formación integral',
    author: 'Por la Dirección',
    date: 'Junio, 2026',
    excerpt:
      'Al cierre de la Semana Aniversaria, el director Lidimo Chacón reflexiona sobre el sentido de pertenencia que sostiene a la institución.',
    slides: [{ src: '/equipo.webp', alt: 'Fotografía: Cuerpo Directivo y Docente' }],
    caption:
      'El equipo directivo liderado por el Dr. Lidimo Chacón junto al cuerpo docente que impulsa la excelencia educativa en la institución. Credit: Prensa Alcamunero',
    order: 8,
  },
  {
    slug: 'voces-aplicatenses',
    component: 'VocesAplicatenses',
    section: 'opinion',
    kicker: 'Tribuna de Opinión',
    title: 'Voces y testimonios de la familia aplicatense',
    author: 'Por Carlos Arellano',
    date: 'Junio, 2026',
    excerpt:
      'Padres, representantes y miembros del comité organizador comparten sus impresiones sobre los festejos por los 56 años de la institución.',
    slides: [
      { src: '/opinion.webp', alt: 'Fotografía: Comunidad y Representantes' },
      { src: '/opinion2.webp', alt: 'Fotografía: Comunidad y Representantes' },
    ],
    caption:
      'Padres, representantes y miembros del comité organizador compartiendo impresiones durante las festividades. Credit: Prensa Alcamunero',
    order: 9,
  },
  {
    slug: 'nuevo-formato-digital',
    component: 'NuevoFormatoDigital',
    section: 'reportajes',
    kicker: 'Innovación y Desarrollo Digital',
    title: 'Alcamunero periódico institucional, un nuevo formato digital',
    author: 'Por Jesús M. Soto C.',
    date: 'Junio, 2026',
    excerpt:
      'Nace el nuevo formato web del periódico, pensado para documentar y difundir los eventos y logros de la comunidad educativa.',
    slides: [{ src: '/tec.webp', alt: 'Interfaz del nuevo periódico digital Alcamunero' }],
    caption:
      'Visualización de la plataforma web moderna desarrollada para la cobertura interactiva del 56 aniversario. Credit: Prensa Alcamunero',
    order: 10,
  },
  {
    slug: 'semblanza-josefa-molina',
    component: 'SemblanzaJosefaMolina',
    section: 'reportajes',
    kicker: 'Semblanza',
    title: 'La vocación de transformar: La Profesora Josefa Molina y el arte de enseñar a editar la vida',
    author: 'Por Niria Colina',
    date: 'Junio, 2026',
    excerpt:
      'Para la Profesora Josefa Molina, educar es un compromiso social con propósito y sensibilidad humana, capaz de moldear realidades y reconstruir el tejido comunitario.',
    slides: [
      { src: '/semblanza1.webp', alt: 'Grupo de estudiantes con trajes folclóricos amarillos y rojos junto a una docente' },
      { src: '/semblanza2.webp', alt: 'Docente acompañando a un estudiante en una exposición de ciencias naturales' },
      { src: '/semblanza3.webp', alt: 'Dos docentes durante una actividad escolar' },
      { src: '/semblanza4.webp', alt: 'Docente con globos de cumpleaños en un salón de clases' },
    ],
    caption: 'Momentos de la labor docente de la Profesora Josefa Molina.',
    order: 11,
  },
];

/** Artículos en el orden de la edición. */
export const sortedArticles = [...articles].sort((a, b) => a.order - b.order);

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
