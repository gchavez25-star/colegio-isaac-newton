// src/data/noticiasData.js
import { LOCATIONS } from "@/constants/locations";

export const noticiasData = [
   {
  id: 1,
  slug: "ingreso-universidad-nacional-cajamarca-2026",
  titulo: "Estudiantes Newtonianos ingresan a la UNC",
  fecha: "abril 2026",
  tiempoLectura: "3 minutos",
  categorias: ["Logros", "Admisión"],
  imagenPrincipal: "/Comunidad/Publicaciones/Ingreso/Ingreso 2.jpg",
  imagenMiniatura: "/Comunidad/Publicaciones/Ingreso/Ingreso 2.jpg",
  destacado: "Felicitamos a nuestros estudiantes por su ingreso a la Universidad Nacional de Cajamarca, reflejo de su esfuerzo, disciplina y perseverancia.",
  contenido: [
    {
      tipo: "parrafo",
      texto: "Hoy celebramos con orgullo el ingreso de nuestros estudiantes a las diferentes carreras profesionales de la Universidad Nacional de Cajamarca. Este importante logro es el resultado de su dedicación constante, disciplina y compromiso con su formación académica."
    },
    {
      tipo: "parrafo",
      texto: "Como institución educativa, reafirmamos nuestro compromiso de seguir formando líderes con valores, preparados para enfrentar los desafíos del futuro y destacar en el mundo profesional."
    },
    {
      tipo: "parrafo",
      texto: "¡Sigamos construyendo juntos historias de éxito! Ser Newtoniano es un honor."
    }
  ],
  galeria: [
    "/Comunidad/Publicaciones/Ingreso/Ingreso 1.jpg",
    "/Comunidad/Publicaciones/Ingreso/Ingreso 4.jpg",
    "/Comunidad/Publicaciones/Ingreso/Ingreso 3.jpg",
    "/Comunidad/Publicaciones/Ingreso/Ingreso 4.jpg",
    "/Comunidad/Publicaciones/Ingreso/Ingreso 5.jpg"
  ],
  tags: [
    "Admisión2026",
    "PrimariaSecundaria",
    "Neurociencia",
    "DesarrolloSostenible",
    "InteligenciaArtificial",
    "Idiomas"
  ]
  },
  {
    
    id: 2,
    slug: "via-crucis-2026",
    titulo: "Conmemoración del Vía Crucis 2026",
    fecha: "abril 2026",
    tiempoLectura: "2 minutos",
    categorias: ["Alumnos", "Eventos", "Formación en Valores", "Pastoral"],

    imagenPrincipal: "/Comunidad/Publicaciones/Semana Santa/Semana 1.jpg",
    imagenMiniatura: "/Comunidad/Publicaciones/Semana Santa/Semana 1.jpg",

    destacado:
      "Nuestros estudiantes participaron en un emotivo Vía Crucis, fortaleciendo valores como la fe, el amor y la solidaridad.",

    contenido: [
      {
        tipo: "parrafo",
        texto:
          "En el Colegio Privado de Ciencias 'Isaac Newton', conmemoramos esta fecha especial con un emotivo Vía Crucis, donde nuestros estudiantes vivieron una experiencia que va más allá del aprendizaje, conectando con valores como el amor, la fe y la solidaridad."
      },

      {
        tipo: "imagen",
        src: "/Comunidad/Publicaciones/Semana Santa/Semana 2.jpg",
        alt: "Estudiantes participando en el Vía Crucis"
      },

      {
        tipo: "parrafo",
        texto:
          "Cada representación fue una oportunidad para reflexionar, crecer y fortalecer el espíritu, formando jóvenes conscientes y comprometidos con un mundo mejor."
      },

      {
        tipo: "parrafo",
        texto:
          "Porque educar también es enseñar a sentir, creer y actuar con el corazón."
      },

      {
        tipo: "parrafo",
        texto:
          "¡Ser Newtoniano es un Honor!"
      },

      {
        tipo: "imagen",
        src: "/Comunidad/Publicaciones/Semana Santa/Semana 3.jpg",
        alt: "Representación del Vía Crucis en el colegio Isaac Newton"
      }
    
  
    ],
    galeria: [
      "/Comunidad/Publicaciones/Semana Santa/Semana 4.jpg",
      "/Comunidad/Publicaciones/Semana Santa/Semana 5.jpg",
      "/Comunidad/Publicaciones/Semana Santa/Semana 6.jpg",
   
    ]
  },
  {
  id: 3,
  slug: "inicio-ano-escolar-2026",
  titulo: "Inicio del Año Escolar 2026",
  fecha: "05 marzo",
  tiempoLectura: "3 minutos",

  categorias: ["Institucional", "Eventos", "Estudiantes", "Prensa"],

  imagenPrincipal: "/Comunidad/Publicaciones/Inicio/Inicio 1.jpg",
  imagenMiniatura: "/Comunidad/Publicaciones/Inicio/Inicio 1.jpg",

  destacado:
    "Dimos la bienvenida al Año Escolar 2026 con entusiasmo y compromiso, iniciando una nueva etapa llena de aprendizajes, retos y oportunidades para nuestros estudiantes.",

  contenido: [
    {
      tipo: "parrafo",
      texto:
        "El Colegio Privado de Ciencias 'Isaac Newton' dio inicio al Año Escolar 2026 en un ambiente lleno de entusiasmo, alegría y expectativas. Estudiantes, docentes y padres de familia se reunieron para comenzar juntos una nueva etapa académica orientada al crecimiento integral."
    },

    {
      tipo: "imagen",
      src: "/Comunidad/Publicaciones/Inicio/Inicio 2.jpg",
      alt: "Bienvenida a los estudiantes en el inicio del año escolar"
    },

    {
      tipo: "parrafo",
      texto:
        "Durante la ceremonia de apertura se destacó la importancia del compromiso, la responsabilidad y el esfuerzo constante como pilares fundamentales para alcanzar el éxito académico y personal. Nuestros estudiantes iniciaron esta nueva etapa con motivación y energía positiva."
    },

    {
      tipo: "imagen",
      src: "/Comunidad/Publicaciones/Inicio/Inicio 3.jpg",
      alt: "Ceremonia de apertura del año escolar 2026"
    },

    {
      tipo: "parrafo",
      texto:
        "El colegio reafirma su compromiso con la formación integral de sus estudiantes, brindando un entorno seguro, moderno y estimulante, acompañado por docentes altamente capacitados y una propuesta educativa basada en la excelencia académica y los valores institucionales."
    },

    {
      tipo: "video",
      thumbnail: "/Comunidad/Publicaciones/Inicio/Inicio 3.jpg",
      youtubeUrl: "/Instagram/Revivamos juntos este gran momento… ✨Ayer nuestros campus de Cajamarca y Los Baños del Inca volv.mp4",
      texto: "Ver resumen del Inicio del Año Escolar 2026"
    }
  ],

  galeria: [
    "/Comunidad/Publicaciones/Inicio/Inicio 4.jpg",
    "/Comunidad/Publicaciones/Inicio/Inicio 5.jpg",
    "/Comunidad/Publicaciones/Inicio/Inicio 6.jpg",
    "/Comunidad/Publicaciones/Inicio/Inicio 7.jpg",
    "/Comunidad/Publicaciones/Inicio/Inicio 8.jpg",
    "/Comunidad/Publicaciones/Inicio/Inicio 9.jpg"
  ]
  },
 
  {
    
  id: 4,
  slug: "convenio-pmi-norte-peru",
  titulo: "Convenio con PMI Norte Perú fortalece la formación académica",
  fecha: "7 febrero",
  tiempoLectura: "4 minutos",
  categorias: ["Convenios", "Institucional"],
  imagenPrincipal: "/Comunidad/Publicaciones/Convenio/Convenio1.jpg",
  imagenMiniatura: "/Comunidad/Publicaciones/Convenio/Convenio1.jpg",
  destacado: "El Colegio Isaac Newton firma un importante convenio con PMI Norte Perú, fortaleciendo la innovación, el liderazgo y la educación con enfoque global.",
  contenido: [
    {
      tipo: "parrafo",
      texto: "El Colegio Privado de Ciencias Isaac Newton celebró la firma de un importante convenio corporativo con el Project Management Institute (PMI) Norte Perú, estableciendo una alianza estratégica que impulsa la calidad educativa, la innovación y el desarrollo profesional de nuestra comunidad."
    },
    {
      tipo: "imagen",
      src: "/Comunidad/Publicaciones/Convenio/Convenio2.jpg",
      alt: "Firma de convenio con PMI"
    },
    {
      tipo: "parrafo",
      texto: "Gracias a esta alianza, nuestros estudiantes podrán acceder a conocimientos, experiencias y buenas prácticas en gestión de proyectos, fortaleciendo competencias clave como el liderazgo, la planificación estratégica y la innovación con un enfoque global."
    },
    {
      tipo: "imagen",
      src: "/Comunidad/Publicaciones/Convenio/Convenio3.jpg",
      alt: "Representantes del colegio y PMI"
    },
    {
      tipo: "parrafo",
      texto: "Con este tipo de iniciativas, el colegio reafirma su compromiso de construir vínculos con instituciones de prestigio, contribuyendo al crecimiento de la comunidad educativa y preparando a los estudiantes para los desafíos del futuro."
    }
  ],
  galeria: [
    "/Comunidad/Publicaciones/Convenio/Convenio4.jpg",
    "/Comunidad/Publicaciones/Convenio/Convenio5.jpg",
    "/Comunidad/Publicaciones/Convenio/Convenio6.jpg",
    "/Comunidad/Publicaciones/Convenio/Convenio7.jpg"
  ],
  tags: [
    "ConvenioCorporativo",
    "PMINortePeru",
    "AlianzaEstrategica",
    "EducacionQueTransforma",
    "InnovacionEducativa",
    "Cajamarca",
    "LosBañosDelInca"
  ],
  contacto: {
    telefonos: [
      "076 280932 - Cajamarca",
      "932 274 369 - Cajamarca",
      "920 438 721 - Los Baños del Inca"
    ],
    direcciones: [
      LOCATIONS.cajamarca.address,
      LOCATIONS.banos.address
    ]
  }
  },
  {
  id: 5,
  slug: "mejor-colegio-privado-cajamarca",
  titulo: "Isaac Newton reconocido como Mejor Colegio Privado de Cajamarca",
  fecha: "19 enero",
  tiempoLectura: "3 minutos",
  categorias: ["Logros", "Institucional"],
  imagenPrincipal: "/Comunidad/Publicaciones/Newton/Newton1.jpg",
  imagenMiniatura: "/Comunidad/Publicaciones/Newton/Newton1.jpg",
  destacado: "El Colegio Isaac Newton es reconocido como el Mejor Colegio Privado de Cajamarca, destacando por su excelencia académica y compromiso educativo.",
  contenido: [
    {
      tipo: "parrafo",
      texto: "Con gran orgullo, el Colegio Privado de Ciencias Isaac Newton celebra haber sido reconocido como ganador en la nominación al Mejor Colegio Privado de Cajamarca, un logro que reafirma su liderazgo en educación de calidad."
    },
    {
      tipo: "imagen",
      src: "/Comunidad/Publicaciones/Newton/Newton2.jpg",
      alt: "Reconocimiento al mejor colegio"
    },
    {
      tipo: "parrafo",
      texto: "En esta importante categoría participaron 15 colegios privados de la región, siendo nuestra institución distinguida por brindar una verdadera excelencia académica, basada en innovación, disciplina y formación integral."
    },
    {
      tipo: "parrafo",
      texto: "Este reconocimiento es resultado del compromiso conjunto de estudiantes, docentes y familias, quienes día a día contribuyen a consolidar una educación de alto nivel y a formar ciudadanos preparados para el futuro."
    },
    {
      tipo: "parrafo",
      texto: "Ser Newtoniano es un honor."
    }
  ],
  galeria: [
    "/Comunidad/Publicaciones/Newton/Newton3.jpg",
    "/Comunidad/Publicaciones/Newton/Newton4.jpg",
    "/Comunidad/Publicaciones/Newton/Newton5.jpg",
    "/Comunidad/Publicaciones/Newton/Newton6.jpg"
  ],
  tags: [
    "MejorColegio",
    "ExcelenciaAcademica",
    "Cajamarca",
    "LogrosNewtonianos",
    "EducacionDeCalidad"
  ]
  },
  {
  id: 6,
  slug: "clausura-ano-escolar-2025",
  titulo: "Clausura del Año Escolar 2025 en Isaac Newton",
  fecha: "diciembre 2025",
  tiempoLectura: "4 minutos",
  categorias: ["Eventos", "Institucional"],
  imagenPrincipal: "/Comunidad/Publicaciones/Clausura/Clausura1.jpg",
  imagenMiniatura: "/Comunidad/Publicaciones/Clausura/Clausura1.jpg",
  destacado: "El Colegio Isaac Newton celebró la clausura del Año Escolar 2025 con una emotiva ceremonia que destacó los logros académicos, el liderazgo estudiantil y el espíritu de unidad.",
  contenido: [
    {
      tipo: "parrafo",
      texto: "El Colegio Privado de Ciencias Isaac Newton realizó la clausura oficial del Año Escolar 2025 mediante una significativa ceremonia que reunió a estudiantes, docentes, directivos y familias, marcando el cierre de un año lleno de logros académicos y formativos."
    },
    {
      tipo: "imagen",
      src: "/Comunidad/Publicaciones/Clausura/Clausura2.jpg",
      alt: "Ceremonia de clausura escolar"
    },
    {
      tipo: "parrafo",
      texto: "Durante el acto central, se llevó a cabo la juramentación del nuevo Municipio Escolar, fortaleciendo la participación democrática y el liderazgo estudiantil. Asimismo, se realizó el tradicional cambio de escolta, símbolo del relevo del honor, la disciplina y el compromiso entre los estudiantes."
    },
    {
      tipo: "imagen",
      src: "/Comunidad/Publicaciones/Clausura/Clausura3.jpg",
      alt: "Cambio de escolta"
    },
    {
      tipo: "parrafo",
      texto: "La ceremonia se desarrolló en un ambiente festivo y de unidad, destacando la presentación de los estudiantes, quienes interpretaron villancicos navideños, transmitiendo mensajes de paz, esperanza y alegría propios de la temporada."
    },
    {
      tipo: "parrafo",
      texto: "Ser Newtoniano es un honor."
    }
  ],
  galeria: [
    "/Comunidad/Publicaciones/Clausura/Clausura4.jpg",
    "/Comunidad/Publicaciones/Clausura/Clausura5.jpg",
    "/Comunidad/Publicaciones/Clausura/Clausura6.jpg",
    "/Comunidad/Publicaciones/Clausura/Clausura7.jpg",
    "/Comunidad/Publicaciones/Clausura/Clausura8.jpg"
  ],
  tags: [
    "Clausura2025",
    "MunicipioEscolar",
    "CambioDeEscolta",
    "EventosEscolares",
    "Navidad",
    "Cajamarca"
  ]
}
];

// -------------------- HELPERS --------------------

// Obtener noticia por slug
export const getNoticiaBySlug = (slug) => noticiasData.find(n => n.slug.toLowerCase() === slug.toLowerCase());

// Obtener todas las noticias
export const getAllNoticias = () => [...noticiasData];

// Obtener noticias por categoría
export const getNoticiasByCategoria = (categoria) => {
  if (categoria === "Todas") return [...noticiasData];
  return noticiasData.filter(n => n.categorias.includes(categoria));
};

// Obtener noticias relacionadas (mismas categorías, límite 3)
export const getNoticiasRelacionadas = (noticiaActual, limite = 3) => {
  return noticiasData
    .filter(n => n.id !== noticiaActual.id && n.categorias.some(cat => noticiaActual.categorias.includes(cat)))
    .slice(0, limite);
};
