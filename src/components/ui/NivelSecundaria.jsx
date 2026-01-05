import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { BookOpen, CheckCircle, ChevronRight, User, GraduationCap, Microscope, Palette, Dumbbell } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

// =====================================================
// 1. DATOS (Separados del componente)
// =====================================================

const galeria = [
  "/niveles/secundaria/galeria-1.jpg",
  "/niveles/secundaria/galeria-2.jpg",
  "/niveles/secundaria/galeria-3.jpg",
  "/niveles/secundaria/galeria-4.jpg",
  "/niveles/secundaria/galeria-5.jpg",
  "/niveles/secundaria/galeria-6.jpg",
  "/niveles/secundaria/galeria-7.jpg",
  "/niveles/secundaria/galeria-8.jpg",
  "/niveles/secundaria/galeria-9.jpg"
];

const caracteristicas = [
  {
    titulo: "Programa Bilingüe y Certificaciones Internacionales",
    descripcion: [
      "Desde los 6 años, nuestros alumnos inician su inmersión en español e inglés, a través de una metodología activa, vivencial, contextualizada y significativa.",
      "Contamos con certificaciones de idiomas reconocidas internacionalmente (Richmond) que validan el nivel de nuestros egresados."
    ],
    imagen: "/niveles/secundaria/trilingue.jpg"
  },
  {
    titulo: "Propuesta Deportiva de Alto Nivel",
    descripcion: [
      "Fomentamos el desarrollo de habilidades básicas, destrezas motrices y la vivencia de valores a través del deporte.",
      "Contamos con infraestructura de primer nivel: coliseo multidisciplinario, piscina temperada, campo de fútbol y lozas deportivas."
    ],
    imagen: "/niveles/secundaria/deportes.jpg"
  },
  {
    titulo: "Formación Artística y Expresión Cultural",
    descripcion: [
      "El arte permite a nuestros estudiantes un encuentro consigo mismos y como agentes creadores de cultura.",
      "Nuestros alumnos desarrollan una visión holística de la realidad, enriquecida con el aprendizaje de distintos lenguajes, técnicas y disciplinas artísticas."
    ],
    imagen: "/niveles/secundaria/arte.jpg"
  }
];

const beneficios = [
  { icono: "GraduationCap", titulo: "Pre-Universitario", descripcion: "Preparación intensiva para el ingreso a las mejores universidades." },
  { icono: "Microscope", titulo: "Laboratorios Avanzados", descripcion: "Espacios equipados para experimentación científica y tecnológica." },
  { icono: "BookOpen", titulo: "Biblioteca Virtual", descripcion: "Centro de gestión del aprendizaje moderno y acceso a recursos digitales." },
  { icono: "Dumbbell", titulo: "Infraestructura Deportiva", descripcion: "Coliseo, piscina y campos para el desarrollo de diversas disciplinas." },
  { icono: "User", titulo: "Asesoría Psicológica", descripcion: "Psicólogos especializados a disposición de los alumnos y familias." },
  { icono: "Palette", titulo: "Talleres de Arte", descripcion: "Formación en música, danza y artes plásticas dentro de la currícula." },
  { icono: "Zap", titulo: "Metodología Activa", descripcion: "Proyectos de investigación, pensamiento crítico y liderazgo." },
  { icono: "Shield", titulo: "Entorno Seguro", descripcion: "Ambientes supervisados y protocolos de seguridad." }
];

const areasCurriculares = [
  "Matemática", "Comunicación", "Ciencia y Tecnología", "Ciencias Sociales",
  "Educación para el Trabajo", "Idioma Extranjero (Inglés)", "Arte y Cultura", "Educación Física",
  "Tutoría y Orientación"
];

const horarioData = [
  { etiqueta: "INGRESO", hora: "7:00 a.m. – 7:20 a.m." },
  { etiqueta: "CLASE", hora: "7:30 a.m." },
  { etiqueta: "SALIDA", hora: "1:50 p.m." }, 
];

// =====================================================
// 2. SUBCOMPONENTES REUTILIZABLES (Adaptados de Primaria)
// =====================================================

// Componente para el Horario Académico (diseño de franjas sólidas)
const HorarioAcademico = () => (
  <div className="py-10">
    <h3 className="font-anton text-center text-4xl md:text-5xl mb-8 leading-none">
      <span className="text-amarillo-dorado block">HORARIO</span>
      <span className="text-azul-oscuro block">ACADÉMICO</span>
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
      {horarioData.map((item, index) => (
        <div key={index} className="rounded-lg overflow-hidden shadow-xl">
          <div className="bg-verde-azulado py-2 text-center">
            <p className="text-white font-anton text-lg uppercase">
              {item.etiqueta}
            </p>
          </div>
          <div className="bg-azul-oscuro py-3 text-center">
            <p className="text-amarillo-dorado font-anton text-xl">
              {item.hora}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Componente para los Beneficios (Cards)
const BeneficioCard = ({ icono, titulo, descripcion }) => {
  const Icon = { GraduationCap, Microscope, BookOpen, Dumbbell, User, Palette, Zap: CheckCircle, Shield: CheckCircle }[icono] || CheckCircle;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-amarillo-dorado flex flex-col items-center text-center"
    >
      <div className="p-3 mb-4 rounded-full bg-verde-azulado/10 text-verde-azulado">
        <Icon className="w-8 h-8" />
      </div>
      <h4 className="font-bold text-xl text-azul-oscuro mb-2">{titulo}</h4>
      <p className="text-gray-600 text-sm">{descripcion}</p>
    </motion.div>
  );
};

// =====================================================
// 3. COMPONENTE PRINCIPAL NivelSecundaria
// =====================================================

const NivelSecundaria = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* HERO SECTION */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <picture>
            <source srcSet="/niveles/secundaria/hero-mobile.jpg" media="(max-width: 767px)" />
            <img
              src="/niveles/secundaria/hero-desktop.jpg"
              alt="Nivel Secundaria"
              className="w-full h-full object-cover"
            />
          </picture>
          {/* Overlay más sutil y profesional */}
          <div className="absolute inset-0 bg-azul-oscuro/60 backdrop-brightness-75"></div>
        </div>

        <div className="relative h-full container mx-auto px-6 flex flex-col justify-end pb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/niveles"
              className="inline-block mb-4 text-white/80 hover:text-amarillo-dorado transition-colors duration-300 text-sm font-semibold"
            >
              ← Volver a Niveles
            </Link>

            <h1 className="font-anton text-5xl md:text-7xl text-white mb-4 leading-tight">
              Nivel Secundaria
            </h1>

            <div className="flex items-center gap-3 text-white">
              <GraduationCap className="w-6 h-6 text-amarillo-dorado" />
              <p className="text-lg md:text-xl font-light">
                Propuesta para adolescentes de 12 a 16 años de edad
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* METODOLOGÍA Y TEXTO INTRODUCTORIO */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            
            <div className="space-y-6">
              <h2 className="font-anton text-4xl md:text-5xl text-azul-oscuro leading-tight">
                Formación Integral y Pensamiento Crítico
              </h2>

              <div className="space-y-4 text-gray-700 text-lg leading-relaxed border-l-4 border-verde-azulado pl-4">
                <p>
                  En la educación secundaria, promovemos el desarrollo del <strong>pensamiento crítico</strong> y la capacidad de análisis, preparando a nuestros estudiantes para enfrentar los desafíos del mundo contemporáneo con una sólida base académica y valores éticos.
                </p>
                <p>
                  Nuestra propuesta educativa integra el <strong>desarrollo de competencias</strong> científicas, humanísticas y tecnológicas, fomentando la investigación, el trabajo colaborativo y el liderazgo responsable.
                </p>
              </div>

              <Link
                to="/contacto"
                className="inline-block mt-6 bg-verde-azulado text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-verde-azulado/90 transition-all shadow-lg hover:shadow-xl"
              >
                Solicita más información
              </Link>
            </div>

            {/* IMÁGENES CON DISEÑO MÁS PROFESIONAL */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-3xl overflow-hidden shadow-2xl aspect-square"
              >
                <img
                  src="/niveles/secundaria/metodologia-1.jpg"
                  alt="Secundaria 1"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="rounded-3xl overflow-hidden shadow-2xl aspect-square mt-12"
              >
                <img
                  src="/niveles/secundaria/metodologia-2.jpg"
                  alt="Secundaria 2"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* CARACTERÍSTICAS DESTACADAS (Sección de Cards con Imagen) */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="font-anton text-4xl text-azul-oscuro text-center mb-12">
            Ejes de la Formación Secundaria
          </h2>
          
          <div className="space-y-16">
            {caracteristicas.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* IMAGEN */}
                <div className={`rounded-3xl overflow-hidden shadow-2xl aspect-video ${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                  <img
                    src={item.imagen}
                    alt={item.titulo}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* CONTENIDO */}
                <div className={index % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <h3 className="font-anton text-3xl text-verde-azulado mb-4">
                    {item.titulo}
                  </h3>
                  <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                    {item.descripcion.map((p, i) => (
                      <p key={i} className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-amarillo-dorado flex-shrink-0 mt-1" />
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ÁREAS CURRICULARES Y HORARIO */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          >
            
            {/* ÁREAS CURRICULARES */}
            <div className="space-y-8">
              <h2 className="font-anton text-4xl md:text-5xl text-azul-oscuro">
                Áreas Curriculares
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed border-l-4 border-amarillo-dorado pl-4">
                Nuestra currícula está diseñada para la excelencia académica y la preparación pre-universitaria, fomentando el liderazgo y la autonomía.
              </p>
              
              <ul className="grid grid-cols-2 gap-4 text-gray-700">
                {areasCurriculares.map((area, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-xl shadow-sm font-semibold hover:bg-verde-azulado/10 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-verde-azulado flex-shrink-0" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            {/* HORARIO ACADÉMICO */}
            <div className="pt-10 lg:pt-0">
              <HorarioAcademico />
            </div>

          </motion.div>
        </div>
      </section>

      {/* BENEFICIOS (Cards) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="font-anton text-4xl text-azul-oscuro text-center mb-12">
            Beneficios de Estudiar en Secundaria
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {beneficios.map((beneficio, index) => (
              <BeneficioCard key={index} {...beneficio} />
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-anton text-4xl text-azul-oscuro text-center mb-12">
            Nuestras Instalaciones
          </h2>
          
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="rounded-3xl shadow-2xl"
          >
            {galeria.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="h-96 overflow-hidden">
                  <img 
                    src={img} 
                    alt={`Galería Secundaria ${index + 1}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

    </div>
  );
};

export default NivelSecundaria;
