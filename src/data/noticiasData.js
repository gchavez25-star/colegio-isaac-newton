// src/data/noticiasData.js

export const noticiasData = [
  {
    id: 1,
    slug: "Municipio",
    titulo: "Juramentacion de Municipio Escolar",
    fecha: "04 Diciembre",
    tiempoLectura: "2 minutos",
    categorias: ["Alumnos", "Artículos", "Eventos", "Prensa"],
    imagenPrincipal: "/Noticias/Municipio.png",
    imagenMiniatura: "/Noticias/Municipio.png",
    destacado: "Inauguramos nuestro nuevo Centro de Gestión del Aprendizaje, un espacio moderno equipado con tecnología de última generación para potenciar el desarrollo académico de nuestros estudiantes.",
    contenido: [
      {
        tipo: "parrafo",
        texto: "Con gran orgullo presentamos nuestro nuevo Centro de Gestión del Aprendizaje, un proyecto que representa nuestro compromiso con la educación de excelencia. Este moderno espacio cuenta con áreas de lectura, zonas de trabajo colaborativo, laboratorios digitales y recursos multimedia de última generación."
      },
      {
        tipo: "imagen",
        src: "/Noticias/Municipio.png",
        alt: "Interior del centro de aprendizaje"
      },
      {
        tipo: "parrafo",
        texto: "El centro fue diseñado pensando en las necesidades del estudiante del siglo XXI, ofreciendo espacios flexibles que promueven tanto el estudio individual como el trabajo en equipo. Contamos con más de 10,000 títulos físicos y acceso a bibliotecas digitales internacionales."
      },
      {
        tipo: "imagen",
        src: "/Noticias/Municipio.png",
        alt: "Zona de lectura"
      }
    ],
    galeria: [
      "/noticias/centro-aprendizaje/galeria-1.jpg",
      "/noticias/centro-aprendizaje/galeria-2.jpg",
      "/noticias/centro-aprendizaje/galeria-3.jpg",
      "/noticias/centro-aprendizaje/galeria-4.jpg",
      "/noticias/centro-aprendizaje/galeria-5.jpg",
      "/noticias/centro-aprendizaje/galeria-6.jpg"
    ]
  },
  {
    id: 2,
    slug: "newton-mun-2024",
    titulo: "NewtonMUN 2024",
    fecha: "23 junio",
    tiempoLectura: "4 minutos",
    categorias: ["Alumni", "Artículos", "Eventos", "Prensa"],
    imagenPrincipal: "/noticias/newton-mun/hero.jpg",
    imagenMiniatura: "/noticias/newton-mun/miniatura.jpg",
    destacado: "Nuestros estudiantes participaron en el Modelo de Naciones Unidas 2024, demostrando habilidades de liderazgo, negociación y pensamiento crítico en debates sobre temas globales.",
    contenido: [
      {
        tipo: "parrafo",
        texto: "El NewtonMUN 2024 reunió a más de 200 estudiantes de diferentes colegios para debatir sobre los desafíos más importantes que enfrenta la humanidad. Durante tres días intensos, nuestros delegados representaron a diversos países en comités especializados."
      },
      {
        tipo: "imagen",
        src: "/noticias/newton-mun/imagen-1.jpg",
        alt: "Estudiantes en debate"
      },
      {
        tipo: "parrafo",
        texto: "Los temas abordados incluyeron cambio climático, derechos humanos, seguridad internacional y desarrollo sostenible. Nuestros estudiantes destacaron por su preparación, oratoria y capacidad de negociación, obteniendo múltiples reconocimientos."
      },
      {
        tipo: "video",
        thumbnail: "/noticias/newton-mun/video-thumb.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=ejemplo",
        texto: "Ver resumen completo del evento en YouTube"
      }
    ],
    galeria: [
      "/noticias/newton-mun/galeria-1.jpg",
      "/noticias/newton-mun/galeria-2.jpg",
      "/noticias/newton-mun/galeria-3.jpg",
      "/noticias/newton-mun/galeria-4.jpg"
    ]
  },
  {
    id: 3,
    slug: "feria-ciencias-2024",
    titulo: "Feria de Ciencias Isaac Newton 2024",
    fecha: "20 noviembre",
    tiempoLectura: "6 minutos",
    categorias: ["Eventos", "Artículos"],
    imagenPrincipal: "/noticias/feria-ciencias/hero.jpg",
    imagenMiniatura: "/noticias/feria-ciencias/miniatura.jpg",
    destacado: "La Feria de Ciencias 2024 mostró los proyectos de investigación más innovadores de nuestros estudiantes, desde robótica hasta biotecnología, demostrando el espíritu científico newtoniano.",
    contenido: [
      {
        tipo: "parrafo",
        texto: "Más de 50 proyectos científicos fueron presentados en nuestra tradicional Feria de Ciencias, abarcando disciplinas como física, química, biología, matemáticas y tecnología. Cada proyecto fue el resultado de meses de investigación y experimentación."
      },
      {
        tipo: "imagen",
        src: "/noticias/feria-ciencias/imagen-1.jpg",
        alt: "Proyecto de robótica"
      },
      {
        tipo: "parrafo",
        texto: "Los proyectos ganadores incluyeron un sistema de purificación de agua usando energía solar, un brazo robótico controlado por señales cerebrales, y un estudio sobre microplásticos en ecosistemas locales. El jurado estuvo conformado por científicos de universidades nacionales e internacionales."
      },
      {
        tipo: "imagen",
        src: "/noticias/feria-ciencias/imagen-2.jpg",
        alt: "Estudiantes presentando proyecto"
      }
    ],
    galeria: [
      "/noticias/feria-ciencias/galeria-1.jpg",
      "/noticias/feria-ciencias/galeria-2.jpg",
      "/noticias/feria-ciencias/galeria-3.jpg",
      "/noticias/feria-ciencias/galeria-4.jpg",
      "/noticias/feria-ciencias/galeria-5.jpg"
    ]
  },
  {
    id: 4,
    slug: "graduacion-2024",
    titulo: "Ceremonia de Graduación 2024",
    fecha: "15 diciembre",
    tiempoLectura: "4 minutos",
    categorias: ["Eventos", "Alumnos"],
    imagenPrincipal: "/noticias/graduacion/hero.jpg",
    imagenMiniatura: "/noticias/graduacion/miniatura.jpg",
    destacado: "Celebramos con orgullo la graduación de la promoción 2024, jóvenes preparados para enfrentar los desafíos del futuro con los valores y conocimientos adquiridos en Isaac Newton.",
    contenido: [
      {
        tipo: "parrafo",
        texto: "En una emotiva ceremonia, despedimos a la promoción 2024, conformada por 85 estudiantes que culminaron exitosamente su educación secundaria. Durante cinco años, estos jóvenes han demostrado excelencia académica, liderazgo y compromiso con los valores institucionales."
      },
      {
        tipo: "imagen",
        src: "/noticias/graduacion/imagen-1.jpg",
        alt: "Graduados lanzando birretes"
      },
      {
        tipo: "parrafo",
        texto: "El 95% de nuestros graduados ha sido aceptado en universidades de prestigio nacional e internacional. Varios obtuvieron becas completas en instituciones como la Universidad Nacional Mayor de San Marcos, PUCP, y universidades en España y Estados Unidos."
      },
      {
        tipo: "video",
        thumbnail: "/noticias/graduacion/video-thumb.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=ejemplo",
        texto: "Ver ceremonia completa en YouTube"
      }
    ],
    galeria: [
      "/noticias/graduacion/galeria-1.jpg",
      "/noticias/graduacion/galeria-2.jpg",
      "/noticias/graduacion/galeria-3.jpg",
      "/noticias/graduacion/galeria-4.jpg",
      "/noticias/graduacion/galeria-5.jpg",
      "/noticias/graduacion/galeria-6.jpg"
    ]
  },
  {
    id: 5,
    slug: "festival-cultural-2024",
    titulo: "Festival Cultural Newtoniano 2024",
    fecha: "10 octubre",
    tiempoLectura: "5 minutos",
    categorias: ["Eventos", "Artículos"],
    imagenPrincipal: "/noticias/festival-cultural/hero.jpg",
    imagenMiniatura: "/noticias/festival-cultural/miniatura.jpg",
    destacado: "El Festival Cultural reunió música, danza, teatro y arte de diferentes culturas del mundo, celebrando la diversidad y el talento artístico de nuestra comunidad educativa.",
    contenido: [
      {
        tipo: "parrafo",
        texto: "Nuestro Festival Cultural anual se convirtió en una celebración de la diversidad, con presentaciones que abarcaron desde danzas folclóricas peruanas hasta música clásica europea, pasando por teatro contemporáneo y exposiciones de arte visual."
      },
      {
        tipo: "imagen",
        src: "/noticias/festival-cultural/imagen-1.jpg",
        alt: "Presentación de danza"
      },
      {
        tipo: "parrafo",
        texto: "Más de 300 estudiantes participaron en las diferentes presentaciones, demostrando meses de preparación y dedicación. El evento contó con la presencia de artistas invitados que compartieron talleres y masterclasses con nuestros estudiantes."
      },
      {
        tipo: "imagen",
        src: "/noticias/festival-cultural/imagen-2.jpg",
        alt: "Orquesta estudiantil"
      }
    ],
    galeria: [
      "/noticias/festival-cultural/galeria-1.jpg",
      "/noticias/festival-cultural/galeria-2.jpg",
      "/noticias/festival-cultural/galeria-3.jpg",
      "/noticias/festival-cultural/galeria-4.jpg"
    ]
  },
  {
    id: 6,
    slug: "olimpiadas-deportivas-2024",
    titulo: "Olimpiadas Deportivas Isaac Newton 2024",
    fecha: "5 septiembre",
    tiempoLectura: "4 minutos",
    categorias: ["Eventos", "Alumni"],
    imagenPrincipal: "/noticias/olimpiadas/hero.jpg",
    imagenMiniatura: "/noticias/olimpiadas/miniatura.jpg",
    destacado: "Las Olimpiadas Deportivas 2024 fueron un éxito rotundo, con la participación de todos los niveles en competencias de atletismo, natación, fútbol, vóley y básquet.",
    contenido: [
      {
        tipo: "parrafo",
        texto: "Durante una semana completa, nuestras instalaciones deportivas fueron el escenario de emocionantes competencias donde estudiantes de todos los niveles demostraron sus habilidades atléticas, trabajo en equipo y espíritu deportivo."
      },
      {
        tipo: "imagen",
        src: "/noticias/olimpiadas/imagen-1.jpg",
        alt: "Competencia de atletismo"
      },
      {
        tipo: "parrafo",
        texto: "Las olimpiadas no solo fueron una competencia deportiva, sino también una celebración de valores como el respeto, la perseverancia y el fair play. Cada estudiante dio lo mejor de sí, creando momentos memorables y fortaleciendo los lazos de amistad."
      },
      {
        tipo: "video",
        thumbnail: "/noticias/olimpiadas/video-thumb.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=ejemplo",
        texto: "Ver mejores momentos en YouTube"
      }
    ],
    galeria: [
      "/noticias/olimpiadas/galeria-1.jpg",
      "/noticias/olimpiadas/galeria-2.jpg",
      "/noticias/olimpiadas/galeria-3.jpg",
      "/noticias/olimpiadas/galeria-4.jpg",
      "/noticias/olimpiadas/galeria-5.jpg"
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
