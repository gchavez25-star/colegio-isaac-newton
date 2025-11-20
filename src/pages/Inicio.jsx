import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Play, Microscope, Music, Palette, Trophy, ChevronRight } from 'lucide-react';
import HeroSlider from '../components/ui/HeroSlider';
import AccesosRapidos from '../components/ui/AccesosRapidos';
import AliadosSlider from "../components/ui/AliadosSlider";

const Inicio = () => {
  const talleres = [
    {
      titulo: 'Robótica',
      descripcion: 'Aprende programación y construcción de robots',
      icono: <Microscope size={40} />,
      imagen: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop'
    },
    {
      titulo: 'Música',
      descripcion: 'Desarrolla tu talento musical con instrumentos diversos',
      icono: <Music size={40} />,
      imagen: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop'
    },
    {
      titulo: 'Arte y Pintura',
      descripcion: 'Expresa tu creatividad a través del arte visual',
      icono: <Palette size={40} />,
      imagen: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop'
    },
    {
      titulo: 'Deportes',
      descripcion: 'Practica fútbol, vóley, básquet y más disciplinas',
      icono: <Trophy size={40} />,
      imagen: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section - Diseño de referencia */}
      {/* Nuevo Hero Slider */}
      <HeroSlider />
      {/* Accesos Rápidos */}
      <AccesosRapidos />
      {/* Propuesta Pedagógica */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-anton text-4xl md:text-5xl text-azul-oscuro mb-4">
              Nuestra Propuesta Pedagógica
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Desarrollar un modelo educativo basado en competencias, integrando tecnología, 
              metodologías activas y neurociencia para fortalecer un aprendizaje real y aplicable. Promueve el pensamiento crítico, 
              la autonomía y el trabajo colaborativo. Su objetivo es formar estudiantes capaces de responder a las demandas actuales con responsabilidad y solvencia.
            </p>
          </motion.div>
        </div>
        </section>

        {/* Espacios de Aprendizaje - Versión Premium con Fondo Animado */}
        <section className="relative py-24 overflow-hidden">

          {/* Fondo animado */}
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#013055_0%,#007a75_50%,#00a69c_100%)] animate-bgMove opacity-90"></div>

          {/* Brillo izquierdo */}
          <div className="absolute -left-20 top-1/2 w-60 h-60 bg-cyan-300/20 blur-3xl rounded-full animate-pulseSlow"></div>

          {/* Brillo derecho */}
          <div className="absolute -right-20 top-1/3 w-72 h-72 bg-yellow-300/20 blur-3xl rounded-full animate-pulseSlow delay-300"></div>


          <div className="container relative mx-auto px-4">

            {/* Título */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-anton text-4xl md:text-5xl text-white drop-shadow-lg mb-4">
                Espacios de Aprendizaje
              </h2>

              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Ambientes diseñados para potenciar la creatividad, el aprendizaje activo,
                la tecnología y el uso de metodologías innovadoras en todos los niveles.
              </p>
            </motion.div>

            {/* GRID MODERNO */}
            <div
              className="
                grid
                grid-cols-2
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-5
                gap-8
              "
            >
              {[
                { titulo: "Aula Virtual", icono: "/Virtual.png" },
                { titulo: "Aulas Equipadas", icono: "/Aula.png" },
                { titulo: "Cafetín", icono:"/Cafetin.png" },
                { titulo: "Laboratorio Ciencias y Cómputo", icono: "/Laboratorio.png" },
                { titulo: "Áreas de recreación", icono: "/Juegos.png" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.08,
                    rotateX: 10,
                    rotateY: 10,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.45)",
                  }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="
                    relative 
                    rounded-2xl 
                    overflow-hidden 
                    bg-white/10 
                    backdrop-blur-xl 
                    border border-white/20 
                    shadow-xl 
                    p-4
                  "
                >

                  {/* Línea de acento animada */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ffcd00] to-transparent animate-slideLine"></div>

                  {/* Título */}
                  <div className="text-center mb-4">
                    <h3 className="font-anton text-white text-base sm:text-lg tracking-wide">
                      {item.titulo}
                    </h3>
                  </div>

                  {/* Icono */}
                  <div className="flex items-center justify-center h-32 sm:h-40 relative">
                    <motion.img
                      src={item.icono}
                      alt={item.titulo}
                      initial={{ scale: 0.9 }}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ duration: 0.35 }}
                      className="
                        w-20 h-20 sm:w-24 sm:h-24 
                        invert brightness-0 
                        drop-shadow-xl
                      "
                    />

                    {/* Halo animado del ícono */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.6, scale: 1.4 }}
                      className="
                        absolute 
                        w-20 h-20 sm:w-24 sm:h-24 
                        rounded-full 
                        bg-[#00f2ff]/30 
                        blur-xl 
                        animate-pulseHalo
                      "
                    />
                  </div>

                </motion.div>
              ))}
            </div>

          </div>

        </section>

      {/* Nuestros Campus */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-anton text-4xl md:text-5xl text-azul-oscuro mb-6">
                Nuestros Campus
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Contamos con dos modernos campus ubicados estratégicamente en Cajamarca y Baños del Inca, 
                equipados con laboratorios de última generación, áreas deportivas y espacios diseñados para potenciar el aprendizaje.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/campus"
                  className="inline-flex items-center gap-2 bg-verde-azulado text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
                >
                  Ver campus
                  <ChevronRight />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop"
                alt="Campus"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Talleres Extracurriculares */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-anton text-4xl md:text-5xl text-azul-oscuro mb-4">
              Talleres Extracurriculares
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complementa tu formación académica con nuestros talleres especializados
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {talleres.map((taller, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={taller.imagen}
                    alt={taller.titulo}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-verde-azulado mb-3">
                    {taller.icono}
                  </div>
                  <h3 className="font-anton text-xl text-azul-oscuro mb-2">
                    {taller.titulo}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {taller.descripcion}
                  </p>
                  <button className="text-verde-azulado font-semibold hover:text-azul-oscuro transition-colors">
                    Más información →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Universitarios */}
      <section className="py-20 bg-azul-oscuro text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-anton text-5xl md:text-5xl mb-4">
              Partners Estratégicos 
            </h2>
            <p className="text-lg max-w-5xl mx-auto">
              Más del 85% de nuestros egresados ingresan a las mejores universidades del país
            </p>
          </motion.div>
            <div>
            {/* Otros bloques */}
               <AliadosSlider />
            {/* Otros bloques */}
            {/* Galería Instagram con fondo animado */}
{/* === GALERÍA SOCIAL – ESTILO MOSAICO === */}
<section className="relative py-20 overflow-hidden">

  {/* Top: Título + Instagram */}
  <div className="container mx-auto px-6 mb-12">
    <div className="flex flex-col items-center space-y-3">

      <h2 className="font-anton text-4xl md:text-5xl text-white drop-shadow-lg">
        Galería Social
      </h2>

      {/* Subtítulo */}
      <p className="text-white/80 text-lg text-center">
        Momentos destacados del colegio compartidos en nuestras redes.
      </p>

      {/* Línea Instagram */}
      <a
        href="https://www.instagram.com/colegio_isaac_newton/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 mt-3 text-white hover:text-[#fccc00] transition text-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.5h8.5A3.75 3.75 0 0120 7.25v9.5A3.75 3.75 0 0116.25 20h-8.5A3.75 3.75 0 014 16.75v-9.5A3.75 3.75 0 017.75 3.5zm10 1a1 1 0 100 2 1 1 0 000-2zM12 7.25A4.75 4.75 0 1012 16.75a4.75 4.75 0 000-9.5zm0 1.5a3.25 3.25 0 110 6.5 3.25 3.25 0 010-6.5z"/>
        </svg>
        <span>@colegio_isaac_newton</span>
      </a>

    </div>
  </div>

  {/* === GRID TIPO MOSAICO === */}
  <div className="container mx-auto px-6">
    <div className="
      grid 
      grid-cols-2 
      sm:grid-cols-3 
      lg:grid-cols-4 
      gap-6
    ">

      {[
        // === ORDEN EXACTO COMO LA IMAGEN DE REFERENCIA ===

        // FILA 1 – GRANDE
        {
          url: "https://www.instagram.com/p/C_OD8ERpXqU/",
          type: "video",
          src: "https://raimondi.edu.pe/wp-content/uploads/2024/09/VID_ENG_WEEK_10S.mp4",
        },

        // FILA 1 – PEQUEÑO
        {
          url: "https://www.instagram.com/p/C8xmv16yELo/",
          type: "video",
          src: "https://raimondi.edu.pe/wp-content/uploads/2024/08/VID_WEB_RAIMUN10_GIF.mp4",
        },

        // FILA 1 – PEQUEÑO
        {
          url: "https://www.instagram.com/p/C_Bkkxay0kW/",
          type: "video",
          src: "https://raimondi.edu.pe/wp-content/uploads/2024/08/VIDWEB_PALIO576x920_SMALL.mp4",
        },

        // FILA 1 – GRANDE
        {
          url: "https://www.instagram.com/p/C5Zi7z8PXU7/?img_index=1",
          type: "image",
          src: "https://raimondi.edu.pe/wp-content/uploads/2024/08/ig6.jpg",
        },

        // FILA 2 – PEQUEÑO
        {
          url: "https://www.instagram.com/p/DAD370Gp-rP/?img_index=1",
          type: "video",
          src: "https://raimondi.edu.pe/wp-content/uploads/2024/09/VID_ADCA_DANZA_WEB_ok-1.mp4",
        },

        // FILA 2 – GRANDE
        {
          url: "https://www.instagram.com/reel/C98p7pHNyPt/",
          type: "video",
          src: "https://raimondi.edu.pe/wp-content/uploads/2024/08/VID_WEB_PEDROSV.mp4",
        },

        // FILA 2 – GRANDE
        {
          url: "https://www.instagram.com/p/C-YplKoSxfa/?img_index=4",
          type: "video",
          src: "https://raimondi.edu.pe/wp-content/uploads/2024/08/VID_WEB_FABLAB10.mp4",
        },

        // FILA 2 – PEQUEÑO
        {
          url: "https://www.instagram.com/p/C_BLOu0JPhh/?img_index=1",
          type: "image",
          src: "https://raimondi.edu.pe/wp-content/uploads/2024/08/POST_PALIO.jpg",
        },

      ].map((item, i) => (
        <a
          key={i}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative rounded-2xl overflow-hidden shadow-xl group"
        >

          {/* Hover con ícono */}
          <div className="
            absolute inset-0 
            bg-black/40 opacity-0 
            group-hover:opacity-100 
            transition duration-300 
            flex items-center justify-center
          ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-10 h-10 opacity-90">
              <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.5h8.5A3.75 3.75 0 0120 7.25v9.5A3.75 3.75 0 0116.25 20h-8.5A3.75 3.75 0 014 16.75v-9.5A3.75 3.75 0 017.75 3.5zm10 1a1 1 0 100 2 1 1 0 000-2zM12 7.25A4.75 4.75 0 1012 16.75a4.75 4.75 0 000-9.5zm0 1.5a3.25 3.25 0 110 6.5 3.25 3.25 0 010-6.5z"/>
            </svg>
          </div>

          {/* Render imagen o video */}
          {item.type === "video" ? (
            <video
              className="w-full h-full object-cover"
              preload="none"
              muted
              autoPlay
              loop
              playsInline
            >
              <source src={item.src} type="video/mp4" />
            </video>
          ) : (
            <img
              src={item.src}
              alt="Galería"
              className="w-full h-full object-cover"
            />
          )}

        </a>
      ))}

    </div>
  </div>
</section>


        </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-verde-azulado to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-anton text-4xl md:text-5xl mb-6">
              ¿Listo para formar parte de nuestra comunidad?
            </h2>
            <p className="text-xl mb-8">
              Únete a la familia Isaac Newton y descubre todo tu potencial
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/admision"
                className="inline-flex items-center gap-2 bg-amarillo-dorado text-azul-oscuro px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
              >
                Postular ahora
                <ChevronRight />
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
      </section>
    </div>
  );
};

export default Inicio;

