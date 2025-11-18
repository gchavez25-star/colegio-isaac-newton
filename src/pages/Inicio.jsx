import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Play, Microscope, Music, Palette, Trophy, ChevronRight } from 'lucide-react';

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
    { nombre: 'PUCP', logo: 'https://via.placeholder.com/150x80?text=PUCP' },
    { nombre: 'UNMSM', logo: 'https://via.placeholder.com/150x80?text=UNMSM' },
    { nombre: 'UPC', logo: 'https://via.placeholder.com/150x80?text=UPC' },
    { nombre: 'UTEC', logo: 'https://via.placeholder.com/150x80?text=UTEC' }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section - Diseño de referencia */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-r from-verde-azulado via-teal-500 to-lime-400 overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenido izquierdo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              {/* Badges superiores */}
              <div className="flex flex-wrap gap-3 mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: 'spring' }}
                  className="inline-block bg-amarillo-dorado text-azul-oscuro px-5 py-2 rounded-full font-bold text-sm"
                >
                  ¡Nuevo ciclo 2025!
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  className="inline-block bg-verde-azulado text-white px-5 py-2 rounded-full font-semibold text-sm"
                >
                  Becas disponibles
                </motion.div>
              </div>

              {/* Título principal */}
              <h1 className="font-anton text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                Formando<br />
                <span className="text-amarillo-dorado">Científicos</span> del<br />
                Futuro
              </h1>

              {/* Descripción */}
              <p className="text-lg md:text-xl mb-8 text-white/90 max-w-xl">
                Educación de excelencia con metodología científica innovadora. 
                Desarrollamos el pensamiento crítico y la pasión por el 
                conocimiento en cada uno de nuestros estudiantes.
              </p>

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/nosotros"
                    className="inline-flex items-center gap-2 bg-amarillo-dorado text-azul-oscuro px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
                  >
                    <Users size={20} />
                    Conócenos más
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <input
                    type="text"
                    placeholder="Buscar..."
                    className="px-6 py-4 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-amarillo-dorado w-full sm:w-64"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Video promocional - lado derecho */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
                {/* Placeholder del video */}
                <div className="relative aspect-video bg-gradient-to-br from-teal-700 to-teal-900 rounded-xl overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/50"
                    >
                      <Play size={32} className="text-white ml-1" fill="white" />
                    </motion.div>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop"
                    alt="Campus"
                    className="w-full h-full object-cover opacity-60"
                  />
                </div>
                
                {/* Texto del video */}
                <div className="mt-4 text-white">
                  <h3 className="font-anton text-xl mb-2">Video Promocional</h3>
                  <p className="text-sm text-white/80">
                    Conoce nuestras instalaciones y metodología educativa
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
              Implementamos una metodología científica innovadora que combina el aprendizaje activo, 
              el pensamiento crítico y la experimentación práctica para formar estudiantes preparados 
              para los desafíos del siglo XXI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                titulo: 'Educación Integral',
                descripcion: 'Desarrollo académico, emocional y social equilibrado',
                icono: '📚'
              },
              {
                titulo: 'Método Científico',
                descripcion: 'Aprendizaje basado en la investigación y experimentación',
                icono: '🔬'
              },
              {
                titulo: 'Trabajo Colaborativo',
                descripcion: 'Fomentamos el trabajo en equipo y la comunicación efectiva',
                icono: '👥'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-5xl mb-4">{item.icono}</div>
                <h3 className="font-anton text-2xl text-azul-oscuro mb-3">
                  {item.titulo}
                </h3>
                <p className="text-gray-600">
                  {item.descripcion}
                </p>
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
                equipados con laboratorios de última generación, bibliotecas especializadas, áreas deportivas 
                y espacios diseñados para potenciar el aprendizaje.
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
            className="text-center mb-12"
          >
            <h2 className="font-anton text-4xl md:text-5xl mb-4">
              Nuestros Partners Universitarios
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Más del 85% de nuestros egresados ingresan a las mejores universidades del país
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-12">
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

