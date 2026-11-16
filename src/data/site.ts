// src/data/site.ts
// Fuente única de datos del sitio institucional (todo lo que NO es el periódico).
//
// ⚠️ Revisar con la institución antes de publicar:
//   - `contact.whatsapp` y `contact.phone` son de ejemplo (no hay número real en el repo).
//   - Misión, visión y valores son una propuesta redactada a partir de los textos
//     del periódico ("Educando para servir", editoriales de la Dirección). Validar.
//   - Horarios y requisitos de admisión: confirmar con Control de Estudios.

export const site = {
  name: 'U.E. Colegio Aplicación',
  legalName: 'Unidad Educativa Fundación Colegio Aplicación',
  motto: 'Educando para servir',
  founded: 1970,
  foundedDate: '5 de noviembre de 1970',
};

/** Años de trayectoria, calculados según la fecha de fundación (5 nov). */
export function yearsOfHistory(today = new Date()): number {
  const f = new Date(site.founded, 10, 5);
  let y = today.getFullYear() - f.getFullYear();
  if (today < new Date(today.getFullYear(), 10, 5)) y -= 1;
  return y;
}

export const contact = {
  // ⚠️ NÚMERO DE EJEMPLO: reemplazar por el WhatsApp real (formato internacional, solo dígitos).
  whatsapp: '584140000000',
  phone: '+58 414-000-0000',
  email: 'fundacioncolegioaplicacion.ue.@gmail.com',
  instagram: 'colegioaplicacionsc',
  address: 'Toico, Palo Gordo, municipio Cárdenas, estado Táchira, Venezuela',
  addressShort: 'Palo Gordo, municipio Cárdenas, Táchira',
  // Google Maps encuentra el plantel con esta búsqueda (Plus Code RR65+75G).
  mapQuery: 'Colegio Aplicación, Toico, Palo Gordo, Táchira',
  plusCode: 'RR65+75G Palo Gordo, Táchira',
  hours: 'Lunes a viernes · 7:00 a. m. – 12:30 p. m.',
};

export function whatsappLink(message = 'Hola, quisiera información sobre el Colegio Aplicación.'): string {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`;
export const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.mapQuery)}`;

// ───────── Navegación ─────────

export interface NavItem {
  id: string;
  label: string;
  href: string;
  /** Ícono de Lucide (https://lucide.dev/icons) */
  icon: string;
  children?: { label: string; href: string; description?: string; icon: string }[];
}

export const nav: NavItem[] = [
  { id: 'inicio', label: 'Inicio', href: '/', icon: 'house' },
  {
    id: 'nosotros',
    label: 'Nosotros',
    href: '/nosotros',
    icon: 'landmark',
    children: [
      { label: 'Misión y visión', href: '/nosotros#mision', description: 'Lo que somos y hacia dónde vamos', icon: 'flag' },
      { label: 'Historia', href: '/nosotros#historia', description: `Desde ${site.founded}, educando para servir`, icon: 'history' },
      { label: 'Valores', href: '/nosotros#valores', description: 'Los principios que nos guían', icon: 'heart-handshake' },
      { label: 'Staff', href: '/nosotros#staff', description: 'Directivos y docentes', icon: 'users-round' },
      { label: 'Instalaciones', href: '/nosotros#instalaciones', description: 'Espacios para aprender', icon: 'school' },
    ],
  },
  {
    id: 'programa',
    label: 'Programa',
    href: '/programa',
    icon: 'graduation-cap',
    children: [
      { label: 'Kinder', href: '/programa/kinder', description: 'Educación Inicial', icon: 'blocks' },
      { label: 'Primaria', href: '/programa/primaria', description: '1.º a 6.º grado', icon: 'book-open' },
      { label: 'Bachillerato', href: '/programa/bachillerato', description: 'Media General, 1.º a 5.º año', icon: 'graduation-cap' },
      { label: 'Metodología', href: '/programa/metodologia', description: 'Cómo aprendemos', icon: 'lightbulb' },
      { label: 'Currículum', href: '/programa/curriculum', description: 'Áreas de formación', icon: 'notebook-pen' },
    ],
  },
  { id: 'admisiones', label: 'Admisiones', href: '/admisiones', icon: 'file-check' },
  { id: 'estudiantes', label: 'Estudiantes', href: '/estudiantes', icon: 'backpack' },
  { id: 'periodico', label: 'Periódico', href: '/periodico', icon: 'newspaper' },
  { id: 'contacto', label: 'Contacto', href: '/contacto', icon: 'map-pin' },
];

// ───────── Nosotros ─────────

export const identity = {
  mission:
    'Formar niños, niñas y jóvenes de manera integral —académica, humana y cristiana— con excelencia pedagógica, pensamiento crítico y sentido de servicio, en corresponsabilidad con la familia y la comunidad.',
  vision:
    'Ser una institución educativa de referencia en el Táchira, reconocida por formar líderes íntegros y agentes de cambio del siglo XXI, capaces de transformar positivamente su entorno.',
};

export const values = [
  { title: 'Fe y servicio', text: 'Valores cristianos que se traducen en compromiso con el prójimo y la comunidad.', icon: 'church' },
  { title: 'Excelencia', text: 'Rigor académico y mejora continua en cada aula y en cada proceso.', icon: 'award' },
  { title: 'Respeto', text: 'Espacios donde cada voz es escuchada y cada diferencia es valorada.', icon: 'users-round' },
  { title: 'Responsabilidad', text: 'Ética, honestidad y cumplimiento en lo que hacemos día a día.', icon: 'shield-check' },
  { title: 'Liderazgo', text: 'Estudiantes, docentes y directivos como agentes de cambio.', icon: 'trophy' },
  { title: 'Pertenencia', text: 'Un segundo hogar construido entre escuela, familia y comunidad.', icon: 'house-heart' },
];

export const timeline = [
  {
    year: '1970',
    icon: 'church',
    image: '/colegio.webp',
    title: 'Fundación',
    text: 'El 5 de noviembre, por iniciativa de monseñor Dr. Alejandro Fernández Feo, obispo de la Diócesis del Táchira, nace el plantel como centro de prácticas pedagógicas.',
  },
  {
    year: 'Raíces',
    icon: 'map-pin',
    image: '/semblanza1.webp',
    title: 'Raíces en Palo Gordo',
    text: 'Consolidado en el municipio Cárdenas, el colegio se convierte en referente formativo para Palo Gordo y la región andina.',
  },
  {
    year: 'Promo 44',
    icon: 'graduation-cap',
    image: '/graduacion3.webp',
    title: 'Educación Inicial, Primaria y Media General',
    text: 'Una comunidad que forma generaciones de profesionales y ciudadanos ejemplares, afiliada a la Asociación Venezolana de Educación Católica (AVEC).',
  },
  {
    year: '2026',
    icon: 'sparkles',
    image: '/cumple.webp',
    title: '56 aniversario y nuevo periódico digital',
    text: 'La Semana Aniversaria reúne a toda la familia aplicatense y nace Alcamunero en formato web.',
  },
];

export interface StaffMember {
  name: string;
  role: string;
  image?: string;
  group: 'Dirección' | 'Coordinación' | 'Docentes';
}

export const staff: StaffMember[] = [
  { name: 'Dr. Lidimo A. Chacón', role: 'Director', image: '/images/staff/lidimo.webp', group: 'Dirección' },
  { name: 'Esp. Niria Colina', role: 'Coordinadora General', image: '/images/staff/niria.webp', group: 'Coordinación' },
  { name: 'Prof. Carlos Arellano', role: 'Docente', image: '/images/staff/carlos.webp', group: 'Docentes' },
  { name: 'Prof. Josefa Molina', role: 'Docente', image: '/semblanza3.webp', group: 'Docentes' },
  { name: 'Prof. Víctor Dieguez', role: 'Docente de Inglés', group: 'Docentes' },
  { name: 'Prof. Rosanna Cifelli', role: 'Docente', group: 'Docentes' },
  { name: 'Prof. Marlon Moreno', role: 'Docente', group: 'Docentes' },
];

export const facilities = [
  { title: 'Cancha techada', text: 'Corazón de la vida escolar: deportes, actos cívicos, serenatas y celebraciones.', image: '/deporte2.webp' },
  { title: 'Aulas de Educación Inicial', text: 'Ambientes coloridos y seguros pensados para el juego y el descubrimiento.', image: '/bienvenida3.webp' },
  { title: 'Salones de clase', text: 'Espacios para Primaria y Media General con ambientación pedagógica.', image: '/prosecucion3.webp' },
  { title: 'Espacios de formación', text: 'Áreas para talleres, formación docente y uso de tecnología.', image: '/formacion2.webp' },
  { title: 'Galería histórica', text: 'Memoria de más de cinco décadas: promociones, hitos y reconocimientos.', image: '/colegio.webp' },
  { title: 'Espacios de fe', text: 'Celebraciones litúrgicas que acompañan el calendario escolar.', image: '/misas1.webp' },
];

// ───────── Programa académico ─────────

export interface Program {
  slug: string;
  label: string;
  title: string;
  tagline: string;
  ages?: string;
  grades?: string;
  image: string;
  imageAlt: string;
  icon: string;
  intro: string;
  highlights: { title: string; text: string; icon?: string }[];
  areas?: string[];
  kind: 'nivel' | 'enfoque';
}

export const programs: Program[] = [
  {
    slug: 'kinder',
    label: 'Kinder',
    title: 'Educación Inicial',
    tagline: 'Aprender jugando, crecer en confianza.',
    ages: '3 a 5 años',
    grades: '1.º, 2.º y 3.er nivel',
    image: '/bienvenida2.webp',
    imageAlt: 'Niños de Educación Inicial con crayones gigantes en la ambientación de bienvenida',
    icon: 'blocks',
    kind: 'nivel',
    intro:
      'Los primeros años son la base de todo. En Educación Inicial acompañamos a cada niño y niña en su desarrollo emocional, social, motor y cognitivo, en un ambiente cálido donde el juego es la principal herramienta de aprendizaje.',
    highlights: [
      { title: 'Aprendizaje por el juego', text: 'Rincones de aprendizaje, música, arte y movimiento.' },
      { title: 'Desarrollo socioemocional', text: 'Autonomía, convivencia y expresión de emociones.' },
      { title: 'Iniciación a la lectoescritura', text: 'Lenguaje oral, conciencia fonológica y pensamiento lógico.' },
      { title: 'Familia presente', text: 'Comunicación cercana con representantes en cada etapa.' },
    ],
    areas: ['Formación personal, social y comunicación', 'Relación con el ambiente', 'Expresión artística y musical', 'Psicomotricidad', 'Formación en valores'],
  },
  {
    slug: 'primaria',
    label: 'Primaria',
    title: 'Educación Primaria',
    tagline: 'Curiosidad, hábitos y bases sólidas.',
    ages: '6 a 11 años',
    grades: '1.º a 6.º grado',
    image: '/prosecucion4.webp',
    imageAlt: 'Estudiantes de Primaria con medallas y diplomas en el acto de prosecución',
    icon: 'book-open',
    kind: 'nivel',
    intro:
      'En Primaria consolidamos la lectura, la escritura y el razonamiento matemático, mientras despertamos la curiosidad científica, el amor por la cultura y los hábitos de estudio que acompañarán a nuestros estudiantes toda la vida.',
    highlights: [
      { title: 'Lectura y escritura', text: 'Comprensión lectora y producción de textos en cada grado.' },
      { title: 'Pensamiento lógico-matemático', text: 'Resolución de problemas aplicada a la vida diaria.' },
      { title: 'Inglés desde temprano', text: 'Contacto progresivo con el idioma a través de canciones y proyectos.' },
      { title: 'Proyectos y efemérides', text: 'Investigación, exposiciones y actos culturales.' },
    ],
    areas: ['Lenguaje, comunicación y cultura', 'Matemática', 'Ciencias naturales y sociedad', 'Ciencias sociales, ciudadanía e identidad', 'Inglés', 'Educación física, deporte y recreación', 'Formación religiosa'],
  },
  {
    slug: 'bachillerato',
    label: 'Bachillerato',
    title: 'Educación Media General',
    tagline: 'Liderazgo, pensamiento crítico y proyecto de vida.',
    ages: '12 a 17 años',
    grades: '1.º a 5.º año',
    image: '/graduacion3.webp',
    imageAlt: 'Graduandos de Media General en el escenario del Teatro de la UNET',
    icon: 'graduation-cap',
    kind: 'nivel',
    intro:
      'En Media General preparamos a los jóvenes para la universidad y para la vida: formación académica exigente, orientación vocacional y espacios para liderar, crear y servir. Al culminar, obtienen el título de Bachiller en Educación Media General.',
    highlights: [
      { title: 'Ciencias y humanidades', text: 'Física, química, biología, historia y ciudadanía con rigor.' },
      { title: 'Orientación vocacional', text: 'Acompañamiento en la construcción del proyecto de vida.' },
      { title: 'Grupos de creación', text: 'Talent Show, deportes, cultura y periodismo estudiantil.' },
      { title: 'Reconocimiento al mérito', text: 'Egresados entre los mejores promedios del estado Táchira.' },
    ],
    areas: ['Castellano', 'Inglés y otras lenguas extranjeras', 'Matemática', 'Física', 'Química', 'Biología', 'Ciencias de la Tierra', 'Geografía, Historia y Ciudadanía', 'Arte y Patrimonio', 'Educación Física', 'Orientación y Convivencia', 'Grupos de Creación, Recreación y Producción'],
  },
  {
    slug: 'metodologia',
    label: 'Metodología',
    title: 'Metodología de aprendizaje',
    tagline: 'El estudiante en el centro, el docente como guía.',
    image: '/semblanza2.webp',
    imageAlt: 'Docente acompañando a un estudiante en una exposición de ciencias',
    icon: 'lightbulb',
    kind: 'enfoque',
    intro:
      'Nuestro modelo pedagógico combina la tradición formativa del colegio con metodologías activas. Buscamos que cada estudiante piense con criterio propio, trabaje en equipo y aplique lo aprendido a su realidad.',
    highlights: [
      { title: 'Aprendizaje basado en proyectos', icon: 'puzzle', text: 'Proyectos de aula e institucionales que integran varias áreas.' },
      { title: 'Pensamiento crítico', icon: 'brain', text: 'Preguntar, investigar, argumentar y decidir con fundamento.' },
      { title: 'Liderazgo transformacional', icon: 'trophy', text: 'Formar agentes de cambio con visión, compromiso e inclusión.' },
      { title: 'Tecnología con propósito', icon: 'laptop', text: 'Herramientas digitales al servicio del aprendizaje, no al revés.' },
      { title: 'Atención a la diversidad', icon: 'hand-heart', text: 'Flexibilidad y empatía ante distintos estilos y ritmos de aprendizaje.' },
      { title: 'Evaluación continua', icon: 'chart-line', text: 'Seguimiento formativo que acompaña el progreso de cada estudiante.' },
      { title: 'Escuela–familia–comunidad', icon: 'house-heart', text: 'Corresponsabilidad: los representantes son parte activa del proceso.' },
      { title: 'Docentes en formación', icon: 'presentation', text: 'Jornadas permanentes de actualización pedagógica y desarrollo emocional.' },
    ],
  },
  {
    slug: 'curriculum',
    label: 'Currículum',
    title: 'Currículum',
    tagline: 'Plan oficial del MPPE, enriquecido con identidad propia.',
    image: '/semblanza1.webp',
    imageAlt: 'Estudiantes con trajes folclóricos junto a una docente',
    icon: 'notebook-pen',
    kind: 'enfoque',
    intro:
      'Seguimos el currículo nacional del Ministerio del Poder Popular para la Educación (MPPE) en todos los niveles, y lo complementamos con formación en valores cristianos, inglés, arte, deporte y proyectos institucionales que definen la identidad aplicatense.',
    highlights: [
      { title: 'Plan oficial', text: 'Programas de estudio del MPPE para Inicial, Primaria y Media General.' },
      { title: 'Formación cristiana', text: 'Educación religiosa y vida sacramental como colegio católico AVEC.' },
      { title: 'Cultura y tradición', text: 'Gala Cultural, efemérides, folclore y patrimonio regional.' },
      { title: 'Deporte e integración', text: 'Jornadas deportivas y recreación con las familias.' },
    ],
  },
];

export const levels = programs.filter((p) => p.kind === 'nivel');
export const approaches = programs.filter((p) => p.kind === 'enfoque');

// ───────── Admisiones ─────────

export const admissionSteps = [
  { title: 'Contáctanos', text: 'Escríbenos por WhatsApp o visítanos para conocer cupos disponibles por nivel.', icon: 'message-circle' },
  { title: 'Visita guiada', text: 'Conoce las instalaciones y conversa con la Coordinación.', icon: 'school' },
  { title: 'Entrega de recaudos', text: 'Consigna la documentación del estudiante y del representante.', icon: 'folder-check' },
  { title: 'Entrevista', text: 'Encuentro con el estudiante y la familia; en algunos niveles, evaluación diagnóstica.', icon: 'notebook-pen' },
  { title: 'Inscripción', text: 'Formalización del cupo y bienvenida a la familia aplicatense.', icon: 'badge-check' },
];

export const requirements = [
  'Partida de nacimiento (original y copia)',
  'Copia de la cédula de identidad del estudiante (si aplica)',
  'Copia de la cédula del representante',
  'Fotos tipo carnet del estudiante y del representante',
  'Constancia de vacunación (Educación Inicial y Primaria)',
  'Boletín o constancia de estudios del año anterior',
  'Certificación de notas y constancia de buena conducta (Media General)',
  'Carta de retiro / SIGE del plantel de procedencia',
];

export const faqs = [
  {
    q: '¿Cuándo abren las inscripciones?',
    a: 'El proceso para estudiantes nuevos suele abrirse en el tercer lapso del año escolar en curso, sujeto a disponibilidad de cupos. Escríbenos para confirmar fechas.',
  },
  {
    q: '¿Qué niveles ofrece el colegio?',
    a: 'Educación Inicial (Kinder), Educación Primaria (1.º a 6.º grado) y Educación Media General (1.º a 5.º año).',
  },
  {
    q: '¿Es un colegio católico?',
    a: 'Sí. Somos una institución privada de inspiración católica, fundada por iniciativa de la Diócesis del Táchira y afiliada a la AVEC.',
  },
  {
    q: '¿Puedo visitar el colegio antes de inscribir?',
    a: 'Por supuesto. Agenda una visita guiada por WhatsApp y te mostraremos nuestras instalaciones.',
  },
  {
    q: '¿Dónde están ubicados?',
    a: `En ${contact.address}.`,
  },
];

// ───────── Estudiantes ─────────

export const studentEvents = [
  { date: '5 nov', title: 'Aniversario de fundación', tag: 'Institucional' },
  { date: 'Dic', title: 'Celebraciones navideñas y cierre del 1.er lapso', tag: 'Lapso' },
  { date: 'Mar', title: 'Cierre del 2.º lapso y entrega de boletines', tag: 'Lapso' },
  { date: 'Jun', title: 'Semana Aniversaria: Talent Show, Gala Cultural y Jornada Deportiva', tag: 'Cultura' },
  { date: 'Jul', title: 'Actos de prosecución y graduación', tag: 'Eventos' },
  { date: 'Sep', title: 'Inicio del año escolar y serenata a Jesús Nazareno', tag: 'Institucional' },
];

export const studentResources = [
  { title: 'Horario de clases', text: 'Consulta tu horario por sección', icon: 'clock', href: null },
  { title: 'Calendario escolar', text: 'Lapsos, feriados y actividades', icon: 'calendar-days', href: '#agenda' },
  { title: 'Normas de convivencia', text: 'Acuerdos para una sana convivencia', icon: 'shield-check', href: null },
  { title: 'Uniforme escolar', text: 'Diario y deportivo, por nivel', icon: 'shirt', href: null },
  { title: 'Lista de útiles', text: 'Materiales por grado y año', icon: 'list-checks', href: null },
  { title: 'Periódico Alcamunero', text: 'Noticias de tu colegio', icon: 'newspaper', href: '/periodico' },
];

export const studentLife = [
  { title: 'Talent Show', text: 'Muestra tu talento en música, baile y artes escénicas.', image: '/cultura1.webp' },
  { title: 'Deportes', text: 'Jornadas deportivas, torneos e integración familiar.', image: '/deporte1.webp' },
  { title: 'Gala Cultural', text: 'Folclore, danza y tradiciones venezolanas.', image: '/cultura4.webp' },
  { title: 'Periodismo escolar', text: 'Escribe, fotografía y cuenta la historia del colegio.', image: '/tec.webp' },
  { title: 'Pastoral', text: 'Misas, serenatas y servicio a la comunidad.', image: '/serenata2.webp' },
  { title: 'Reinado aniversario', text: 'Mini-princesa, princesa y reina de la Semana Aniversaria.', image: '/reinas1.webp' },
];
