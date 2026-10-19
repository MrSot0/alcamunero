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
  | 'eventos'
  | 'cultura'
  | 'deportes'
  | 'religion'
  | 'comunidad'
  | 'ciencia'
  | 'efemerides'
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
};

export const articles: Article[] = [
  // ───────── Septiembre 2026 · nuevo año escolar ─────────
  {
    slug: 'bienvenida-nuevo-anio-escolar',
    component: 'BienvenidaAnioEscolar',
    section: 'actualidad',
    kicker: 'Inicio del año escolar',
    title: 'U.E. Colegio Aplicación dio la bienvenida a sus estudiantes en el inicio del nuevo año escolar',
    author: 'Por Carlos Arellano',
    date: '21 de septiembre, 2026',
    excerpt:
      'Con entusiasmo y alegría, el colegio recibió a sus estudiantes de Educación Inicial y Primaria en el inicio oficial de un nuevo año escolar.',
    slides: [
      { src: '/bienvenida1.webp', alt: 'Estudiantes y una docente con un cartel de “Bienvenidos” en el primer día de clases' },
      { src: '/bienvenida2.webp', alt: 'Estudiantes posando con crayones gigantes en la ambientación de bienvenida' },
      { src: '/bienvenida3.webp', alt: 'Estudiantes y docentes en un salón durante la jornada de inicio de clases' },
      { src: '/bienvenida4.webp', alt: 'Ambientación con globos y crayones para el inicio del nuevo año escolar' },
    ],
    caption: 'Estudiantes y personal del colegio durante la jornada de bienvenida al nuevo año escolar.',
    featured: true,
    order: 2,
  },
  {
    slug: 'efemerides-septiembre',
    component: 'EfemeridesSeptiembre',
    section: 'efemerides',
    kicker: 'Efemérides del mes',
    title: 'Efemérides del mes de septiembre',
    author: 'Por Rosanna Cifelli',
    date: 'Septiembre, 2026',
    excerpt:
      'Tres fechas para recordar: la Mujer Indígena, la preservación de la capa de ozono y el natalicio de Miguel de Cervantes.',
    slides: [
      { src: '/efemerides1.webp', alt: 'Mujer indígena con tocado de plumas' },
      { src: '/efemerides2.webp', alt: 'Ilustración de la Tierra y la radiación solar sobre la capa de ozono' },
      { src: '/efemerides3.webp', alt: 'Retrato ilustrado de Miguel de Cervantes escribiendo' },
    ],
    caption: 'Ilustraciones de las efemérides de septiembre.',
    order: 21,
  },
  {
    slug: 'formacion-pedagogica-docentes',
    component: 'FormacionDocente',
    section: 'ciencia',
    kicker: 'Formación docente',
    title: 'Docentes del Colegio Aplicación participaron en jornadas de formación pedagógica y desarrollo emocional',
    author: 'Por Carlos Arellano',
    date: 'Septiembre, 2026',
    excerpt:
      'Un ciclo de capacitación con las ponencias “Teorías del Aprendizaje” y “Planificación y Evaluación”, y un taller de control de emociones.',
    slides: [
      { src: '/formacion1.webp', alt: 'Docentes atendiendo una ponencia en el salón' },
      { src: '/formacion2.webp', alt: 'Docentes en una sesión de formación con computadoras' },
      { src: '/formacion3.webp', alt: 'Ponente y docentes durante la jornada de capacitación' },
    ],
    caption: 'Docentes durante las jornadas de formación pedagógica y desarrollo emocional.',
    order: 3,
  },
  {
    slug: 'serenata-jesus-nazareno',
    component: 'SerenataJesusNazareno',
    section: 'religion',
    kicker: 'Religión y tradición',
    title: 'El Colegio Aplicación rindió homenaje a Jesús Nazareno con una emotiva serenata de fe y tradición',
    author: 'Por Marlon Moreno',
    date: '12 de septiembre, 2026',
    excerpt:
      'La cancha del colegio se vistió de fiesta para la tradicional serenata en honor al Santo Patrono.',
    slides: [
      { src: '/serenata1.webp', alt: 'Altar con la imagen de Jesús Nazareno en la cancha del colegio' },
      { src: '/serenata2.webp', alt: 'Familias reunidas en la cancha durante la serenata' },
    ],
    caption: 'La comunidad reunida en la cancha del colegio durante la serenata en honor a Jesús Nazareno.',
    order: 4,
  },
  // ───────── Cierre del año escolar 2025-2026 ─────────
  {
    slug: 'reconocimiento-frank-sanchez',
    component: 'ReconocimientoFrankSanchez',
    section: 'actualidad',
    kicker: 'Orgullo aplicatense',
    title: 'Estudiante egresado del Colegio Aplicación fue reconocido entre los ocho mejores promedios del estado Táchira por el MPPE',
    author: 'Por Niria Colina',
    date: '2026',
    excerpt:
      'El exalumno Frank Sánchez recibió un reconocimiento honorífico del MPPE por situarse entre los ocho mejores promedios del estado.',
    slides: [
      { src: '/frank1.webp', alt: 'Felicitación al egresado Frank Sánchez, entre los ocho mejores promedios del estado Táchira' },
    ],
    caption: 'Felicitación del Colegio Aplicación al egresado Frank Antony Sánchez Ramírez.',
    highlight: true,
    order: 5,
  },
  {
    slug: 'graduacion-media-general-unet',
    component: 'GraduacionUNET',
    section: 'eventos',
    kicker: 'Especial graduación',
    title: 'El Teatro de la UNET se viste de gala para celebrar la graduación de la Promoción de Media General',
    author: 'Por Niria Colina',
    date: '2026',
    excerpt:
      'La nueva promoción de Bachilleres en Educación Media General recibió sus títulos en una solemne ceremonia con reconocimiento al mérito académico.',
    slides: [
      { src: '/graduacion3.webp', alt: 'Mesa directiva y graduandos en el escenario del teatro' },
      { src: '/graduacion1.webp', alt: 'Graduandos junto a su ambientación “Promo 44”' },
      { src: '/graduacion2.webp', alt: 'Entrega de un diploma a una graduanda durante el acto' },
    ],
    caption: 'Directivos, docentes y graduandos durante el acto de graduación.',
    highlight: true,
    order: 6,
  },
  {
    slug: 'actos-prosecucion-inicial-primaria',
    component: 'ActosProsecucion',
    section: 'eventos',
    kicker: 'Eventos institucionales',
    title: 'El Colegio Aplicación celebró los Actos de Prosecución de Educación Inicial y Primaria en un emotivo ambiente institucional',
    author: 'Redacción Alcamunero',
    date: '30 de julio, 2026',
    excerpt:
      'El colegio celebró el cierre del ciclo escolar con los actos de prosecución de Educación Inicial y Primaria.',
    slides: [
      { src: '/prosecucion1.webp', alt: 'Directivos y docentes junto a la ambientación de los actos de prosecución' },
      { src: '/prosecucion2.webp', alt: 'Estudiantes de Inicial con sus recuerdos de prosecución' },
      { src: '/prosecucion3.webp', alt: 'Promovidos con birretes durante el acto en el salón' },
      { src: '/prosecucion4.webp', alt: 'Estudiantes de Primaria con medallas y diplomas durante el acto' },
    ],
    caption: 'Estudiantes, docentes y directivos durante los actos de prosecución de Educación Inicial y Primaria.',
    highlight: true,
    order: 7,
  },
  {
    slug: 'misas-culminacion-anio-escolar',
    component: 'MisasCulminacionAnio',
    section: 'religion',
    kicker: 'Religión y comunidad',
    title: 'La comunidad del Colegio Aplicación celebró la culminación del año escolar con dos solemnes Misas de Acción de Gracias',
    author: 'Por Niria Colina',
    date: 'Julio, 2026',
    excerpt:
      'Dos Eucaristías en julio bendijeron la culminación de las etapas de Inicial, 6to Grado y Media General, con el acompañamiento del Padre Geico.',
    slides: [
      { src: '/misas1.webp', alt: 'Directivos y docentes en una de las misas de acción de gracias' },
      { src: '/misas2.webp', alt: 'Promovidos de Educación Inicial junto a docentes tras la celebración' },
    ],
    caption: 'Directivos, docentes y promovidos tras las misas de acción de gracias por el cierre del año escolar.',
    order: 8,
  },
  {
    slug: 'centro-de-acopio-terremoto',
    component: 'CentroAcopioTerremoto',
    section: 'comunidad',
    kicker: 'Comunidad y solidaridad',
    title: 'El Colegio Aplicación sirvió como centro de acopio para apoyar a los damnificados del reciente terremoto',
    author: 'Por Rosanna Cifelli',
    date: '27 y 28 de junio, 2026',
    excerpt:
      'Los días 27 y 28 de junio, la institución abrió sus puertas como centro de acopio para apoyar a las familias afectadas por el sismo del 24 de junio.',
    slides: [
      { src: '/acopio1.webp', alt: 'Voluntarios clasificando donaciones durante la jornada de acopio' },
      { src: '/acopio2.webp', alt: 'Voluntario cargando una caja con donaciones' },
    ],
    caption: 'Voluntarios y personal del colegio durante la recepción y clasificación de donaciones.',
    order: 9,
  },
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
    order: 10,
  },
  {
    slug: 'misa-accion-de-gracias',
    component: 'MisaAccionDeGracias',
    section: 'religion',
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
    order: 11,
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
    order: 12,
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
    order: 13,
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
    order: 14,
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
    order: 15,
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
    order: 16,
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
    order: 17,
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
    order: 18,
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
    order: 19,
  },
  {
    slug: 'semblanza-josefa-molina',
    component: 'SemblanzaJosefaMolina',
    section: 'reportajes',
    kicker: 'Semblanza',
    title: 'La vocación de transformar: La Profesora Josefa Molina y el arte de enseñar a editar la vida',
    author: 'Por Niria Colina',
    date: 'Octubre, 2026',
    excerpt:
      'Para la Profesora Josefa Molina, educar es un compromiso social con propósito y sensibilidad humana, capaz de moldear realidades y reconstruir el tejido comunitario.',
    slides: [
      { src: '/semblanza1.webp', alt: 'Grupo de estudiantes con trajes folclóricos amarillos y rojos junto a una docente' },
      { src: '/semblanza2.webp', alt: 'Docente acompañando a un estudiante en una exposición de ciencias naturales' },
      { src: '/semblanza3.webp', alt: 'Dos docentes durante una actividad escolar' },
      { src: '/semblanza4.webp', alt: 'Docente con globos de cumpleaños en un salón de clases' },
    ],
    caption: 'Momentos de la labor docente de la Profesora Josefa Molina.',
    order: 20,
  },
{
    slug: 'el-liderazgo-transformacional-educativo',
    component: 'EditorialLiderazgo',
    section: 'reportajes',
    kicker: 'Editorial',
    title: 'El liderazgo transformacional en la U.E. Colegio Aplicación',
    author: 'Dr. Lidimo A. Chacón, Director',
    date: '15 de Octubre, 2026',
    excerpt:
      'El liderazgo transformacional se erige como una competencia fundamental para enfrentar los retos del futuro y transformar la realidad escolar.',
    slides: [
      { src: '/liderazgo1.webp', alt: 'Estudiantes y docentes en la U.E. Colegio Aplicación' },
    ],
    caption: 'La transformación educativa y el liderazgo institucional en el Colegio Aplicación.',
    featured: true,
    order: 1,

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
