import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const NivelSecundaria = () => {
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
      titulo: "Bilingue a lo largo de todo el itinerario formativo",
      descripcion: [
        "Desde los 6 años, nuestros alumnos inician su inmersión en español e inglés, a través de una metodología activa, vivencial, contextualizada y significativa, que les brinda las herramientas necesarias para enfrentar los retos y demandas del mundo actual.",
        "Contamos con certificaciones de idiomas reconocidas internacionalmente: Richmond."
      ],
      imagen: "/niveles/secundaria/trilingue.jpg"
    },
    {
      titulo: "Propuesta Deportiva",
      descripcion: [
        "A través de la práctica deportiva buscamos construir el desarrollo de habilidades básicas, destrezas motrices, coordinación y expresión corporal. De igual manera, se busca una mejora en el bienestar, vivencia de valores y desarrollo equilibrado de las emociones.",
        "Para ello contamos con una infraestructura deportiva de primer nivel: coliseo multidisciplinario, piscina temperada, campo de fútbol, lozas deportivas y pista atlética para el desarrollo de diversas disciplinas como el baloncesto, vóleibol, fútbol y atletismo."
      ],
      imagen: "/niveles/secundaria/deportes.jpg"
    },
    {
      titulo: "Propuesta Artística",
      descripcion: [
        "El arte permite a nuestros estudiantes un encuentro consigo mismos, como seres humanos y como agentes creadores de cultura.",
        "Nuestros alumnos se caracterizan por tener una visión holística de la realidad, la cual se enriquece con el aprendizaje de distintos lenguajes, técnicas y disciplinas artísticas."
      ],
      imagen: "/niveles/secundaria/arte.jpg"
    }
  ];

  const beneficios = [
    {
      icono: "🏫",
      titulo: "Aulas Modernas",
      descripcion: "Con material didáctico avanzado"
    },
    {
      icono: "👨‍🏫",
      titulo: "Docentes Calificados",
      descripcion: "Maestros especializados en el sector educativo, por cada nivel"
    },
    {
      icono: "📚",
      titulo: "Biblioteca Virtual",
      descripcion: "Centro de gestión del aprendizaje moderno"
    },
    {
      icono: "⚽",
      titulo: "Actividades Extracurriculares",
      descripcion: "Talleres didácticos, deportivos y artísticos"
    },
    {
      icono: "🧠",
      titulo: "Asesoría Psicológica",
      descripcion: "Psicólogos altamente especializados a disposición de los alumnos"
    },
    {
      icono: "🎨",
      titulo: "Laboratorios de Arte",
      descripcion: "Ambientes equipados para el desarrollo de competencias artísticas"
    },
    {
      icono: "🎵",
      titulo: "Danza y Música",
      descripcion: "Formación musical y expresión corporal dentro de la currícula"
    },
    {
      icono: "🔬",
      titulo: "Laboratorios de Ciencias",
      descripcion: "Espacios equipados para experimentación científica"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* HERO SECTION */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <picture>
            <source 
              srcSet="/niveles/secundaria/hero-mobile.jpg" 
              media="(max-width: 767px)" 
            />
            <img
              src="/niveles/secundaria/hero-desktop.jpg"
              alt="Nivel Secundaria"
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-azul-oscuro/60 via-azul-oscuro/40 to-azul-oscuro/70"></div>
        </div>

        <div className="relative h-full container mx-auto px-6 flex flex-col justify-end pb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/niveles"
              className="inline-block mb-8 text-white hover:text-amarillo-dorado transition-colors duration-300"
            >
              ← Volver a Niveles
            </Link>

            <h1 className="font-anton text-5xl md:text-7xl text-white mb-6">
              Nivel Secundaria
            </h1>

            <div className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 bg-verde-azulado rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                </svg>
              </div>
              <p className="text-lg md:text-xl">
                Propuesta para adolescentes de 12 a 16 años de edad
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN METODOLOGÍA */}
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

              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
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

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-3xl overflow-hidden shadow-xl"
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
                className="rounded-3xl overflow-hidden shadow-xl mt-12"
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

      {/* GALERÍA SWIPER */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-8">
        <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={32}
        slidesPerView={1.1}
        centeredSlides={false}
        loop={true}
        autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      breakpoints={{
        640: { slidesPerView: 1.5 },
        768: { slidesPerView: 2.2 },
        1024: { slidesPerView: 3 },
      }}
      className="relative !pb-16" >
      {galeria.map((imagen, index) => (
        <SwiperSlide key={index}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
          >
            <div className="relative h-[420px] overflow-hidden">
              <img
                src={imagen}
                alt={`Galería ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x500/013055/ffffff?text=Secundaria';
                }}
              />
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
      
    </Swiper>
  </div>
</section>


      {/* CARACTERÍSTICAS (Trilingüe, Deportes, Arte) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {caracteristicas.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.05 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <h3 className="font-anton text-3xl md:text-4xl text-azul-oscuro leading-tight">
                    {item.titulo}
                  </h3>
                  <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                    {item.descripcion.map((parrafo, i) => (
                      <p key={i}>{parrafo}</p>
                    ))}
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="rounded-3xl overflow-hidden shadow-2xl"
                  >
                    <img
                      src={item.imagen}
                      alt={item.titulo}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/880x600/013055/ffffff?text=' + encodeURIComponent(item.titulo);
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="font-anton text-4xl md:text-5xl text-azul-oscuro mb-4">
              ¿Por qué escoger Isaac Newton?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {beneficios.map((beneficio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-2"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {beneficio.icono}
                </div>
                <h4 className="font-anton text-xl text-azul-oscuro mb-3">
                  {beneficio.titulo}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {beneficio.descripcion}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default NivelSecundaria;
