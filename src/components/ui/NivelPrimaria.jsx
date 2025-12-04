import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const NivelPrimaria = () => {

  const galeria = [
    "/niveles/primaria/galeria-1.jpg",
    "/niveles/primaria/galeria-2.jpg",
    "/niveles/primaria/galeria-3.jpg",
    "/niveles/primaria/galeria-4.jpg",
    "/niveles/primaria/galeria-5.jpg",
    "/niveles/primaria/galeria-6.jpg",
  ];

  const caracteristicas = [
    {
      titulo: "Aprendizaje Activo e Integral",
      descripcion: [
        "Acompañamos a cada estudiante en su desarrollo personal, académico, social y emocional.",
        "Nuestra pedagogía fomenta el juego, la curiosidad, la exploración y el pensamiento crítico desde edades tempranas."
      ],
      imagen: "/niveles/primaria/aprendizaje.jpg"
    },
    {
      titulo: "Inglés desde Primer Grado",
      descripcion: [
        "Nuestros alumnos adquieren el idioma inglés a través de experiencias significativas, canciones, lectura y actividades interactivas.",
        "Contamos con certificaciones internacionales y docentes especializados."
      ],
      imagen: "/niveles/primaria/ingles.jpg"
    },
    {
      titulo: "Actividades Artísticas y Deportivas",
      descripcion: [
        "El desarrollo motriz, artístico y emocional forma parte esencial del proceso educativo.",
        "Los estudiantes participan en talleres de música, dibujo, danza, psicomotricidad y deportes que fortalecen habilidades sociales."
      ],
      imagen: "/niveles/primaria/actividades.jpg"
    }
  ];

  const beneficios = [
    { icono: "🎒", titulo: "Materiales Didácticos", descripcion: "Aprendizaje vivencial y significativo" },
    { icono: "📘", titulo: "Plan Lector", descripcion: "Motivación por la lectura y comprensión" },
    { icono: "🧩", titulo: "Metodología Activa", descripcion: "Aprender haciendo, descubriendo e investigando" },
    { icono: "🎨", titulo: "Arte y Creatividad", descripcion: "Talleres de música, danza y dibujo" },
    { icono: "⚽", titulo: "Deporte y Movimiento", descripcion: "Psicomotricidad, juegos y vida saludable" },
    { icono: "🧠", titulo: "Apoyo Emocional", descripcion: "Acompañamiento psicopedagógico" },
    { icono: "👩‍🏫", titulo: "Docentes Especializados", descripcion: "Formación continua y vocación educativa" },
    { icono: "🌱", titulo: "Entorno Seguro", descripcion: "Ambientes amplios, limpios y supervisados" }
  ];

  return (
    <div className="min-h-screen pt-10 relative overflow-hidden">
       {/* FONDO DECORATIVO */}
      <div className="absolute inset-0 -z-10 bg-white">
        <div className="absolute top-0 left-0 w-full h-[1400px] bg-gradient-to-br from-[#e6f3ff] to-transparent skew-y-3" />
        <div className="absolute bottom-0 right-0 w-full h-[1400px] bg-gradient-to-tl from-[#fff4c2] to-transparent -skew-y-3" />
      </div>

      {/* HERO SECTION */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <picture>
            <source srcSet="/niveles/primaria/hero-mobile.jpg" media="(max-width: 767px)" />
            <img
              src="/niveles/primaria/hero-desktop.jpg"
              alt="Nivel Primaria"
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
              Nivel Primaria
            </h1>

            <div className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 bg-verde-azulado rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                </svg>
              </div>
              <p className="text-lg md:text-xl">
                Propuesta educativa para niños de 6 a 11 años de edad
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* METODOLOGÍA */}
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
                Educación en valores y descubrimiento
              </h2>

              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  En primaria se consolidan aprendizajes básicos y se desarrollan habilidades sociales, comunicativas y emocionales.
                </p>
                <p>
                  Promovemos la autonomía, la curiosidad y el respeto a través de actividades creativas, trabajo en equipo y proyectos interdisciplinarios.
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
                  src="/niveles/primaria/metodologia-1.jpg"
                  alt="Primaria 1"
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
                  src="/niveles/primaria/metodologia-2.jpg"
                  alt="Primaria 2"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={32}
          slidesPerView={1.1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
          }}
          className="relative !pb-16"
        >
          {galeria.map((imagen, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="relative h-[380px] overflow-hidden">
                  <img
                    src={imagen}
                    alt={`Galería ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x500/013055/ffffff?text=Primaria";
                    }}
                  />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev !text-gray-800 !w-10 !h-10 !bg-white !rounded-full !shadow-md hover:!bg-amarillo-dorado"></div>
          <div className="swiper-button-next !text-gray-800 !w-10 !h-10 !bg-white !rounded-full !shadow-md hover:!bg-amarillo-dorado"></div>
        </Swiper>
      </div>
    </section>

      {/* CARACTERÍSTICAS */}
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
                    {item.descripcion.map((p, i) => (
                      <p key={i}>{p}</p>
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

export default NivelPrimaria;
