import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Play, Microscope, Music, Palette, Trophy, ChevronRight } from 'lucide-react';
import HeroSlider from '../components/ui/HeroSlider';
import AccesosRapidos from '../components/ui/AccesosRapidos';

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

  const partners = [
    { nombre: 'PMI', logo: 'https://via.placeholder.com/150x80?text=PUCP' },
    { nombre: 'GOOGLE SITE', logo: 'https://via.placeholder.com/150x80?text=PUCP' },
    { nombre: 'CAMARA DE COMERCIO', logo: 'https://via.placeholder.com/150x80?text=PUCP' },
    { nombre: 'SIEWEB', logo: 'https://via.placeholder.com/150x80?text=PUCP' },
    { nombre: 'PIZA Ediciones', logo: 'https://via.placeholder.com/150x80?text=UNMSM' },
    { nombre: 'SANTILLANA', logo: 'https://via.placeholder.com/150x80?text=UPC' },
    { nombre: 'RICHMOND', logo: 'https://via.placeholder.com/150x80?text=UTEC' }
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

        <div
            className="
              grid 
              grid-cols-2            /* Móvil: 3 columnas */
              sm:grid-cols-2
              md:grid-cols-3         /* Tablet: 3 columnas */
              lg:grid-cols-5         /* Desktop: 5 columnas */
              gap-6 
              mt-10
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="
                  rounded-2xl 
                  overflow-hidden 
                  shadow-lg 
                  bg-[#013055]
                "
              >
                {/* Encabezado */}
                <div className="bg-[#ffcd00] py-3 text-center">
                  <h3 className="
                    font-anton 
                    text-[#013055] 
                    text-base 
                    sm:text-lg 
                    tracking-wide
                  ">
                    {item.titulo}
                  </h3>
                </div>

                {/* Icono */}
                <div className="flex items-center justify-center h-32 sm:h-40 p-4">
                  <img
                    src={item.icono}
                    alt={item.titulo}
                    className="
                      w-16 h-16 
                      sm:w-20 sm:h-20
                      invert brightness-0
                      transition-transform duration-300
                      hover:scale-110
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
              Nuestros Partners
            </h2>
            <p className="text-lg max-w-5xl mx-auto">
              Más del 85% de nuestros egresados ingresan a las mejores universidades del país
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-10">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="bg-white p-6 rounded-lg"
              >
                <img
                  src={partner.logo}
                  alt={partner.nombre}
                  className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
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

