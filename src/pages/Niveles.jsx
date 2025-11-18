import { motion } from 'framer-motion';
import { Baby, BookOpen, GraduationCap, ChevronRight } from 'lucide-react';

const Niveles = () => {
  const niveles = [
    {
      id: 'inicial',
      nombre: 'Inicial',
      edades: '3 - 5 años',
      color: 'azul-oscuro',
      icono: <Baby size={64} />,
      descripcion: 'En el nivel inicial, nuestros pequeños científicos comienzan su aventura educativa en un ambiente seguro, estimulante y lleno de amor. Desarrollamos sus habilidades cognitivas, motoras y socioemocionales a través del juego y la exploración.',
      caracteristicas: [
        'Estimulación temprana personalizada',
        'Desarrollo de habilidades socioemocionales',
        'Iniciación al método científico mediante el juego',
        'Psicomotricidad y expresión corporal',
        'Inglés desde los 3 años',
        'Arte y música'
      ],
      imagen: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=600&fit=crop',
      curriculo: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop'
    },
    {
      id: 'primaria',
      nombre: 'Primaria',
      edades: '6 - 11 años',
      color: 'verde-azulado',
      icono: <BookOpen size={64} />,
      descripcion: 'La primaria es la etapa donde consolidamos las bases del conocimiento científico y humanista. Nuestros estudiantes desarrollan el pensamiento crítico, la creatividad y las habilidades de investigación que los acompañarán toda la vida.',
      caracteristicas: [
        'Aprendizaje basado en proyectos',
        'Laboratorios de ciencias equipados',
        'Programa de lectoescritura avanzada',
        'Matemática aplicada y razonamiento lógico',
        'Inglés intensivo con certificación',
        'Talleres de robótica y programación'
      ],
      imagen: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop',
      curriculo: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop'
    },
    {
      id: 'secundaria',
      nombre: 'Secundaria',
      edades: '12 - 17 años',
      color: 'amarillo-dorado',
      icono: <GraduationCap size={64} />,
      descripcion: 'En secundaria, preparamos a nuestros estudiantes para los desafíos universitarios y profesionales. Fortalecemos su autonomía, liderazgo y compromiso social, mientras profundizamos en las áreas científicas y humanísticas.',
      caracteristicas: [
        'Preparación pre-universitaria integrada',
        'Especialización en ciencias o humanidades',
        'Proyectos de investigación científica',
        'Olimpiadas académicas nacionales',
        'Programa de orientación vocacional',
        'Convenios con universidades de prestigio'
      ],
      imagen: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
      curriculo: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-azul-oscuro to-verde-azulado text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-anton text-5xl md:text-6xl mb-6">
              Niveles Educativos
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Educación de excelencia desde los 3 hasta los 17 años
            </p>
          </motion.div>
        </div>
      </section>

      {/* Niveles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {niveles.map((nivel, index) => (
              <motion.div
                key={nivel.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Contenido */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    {/* Badge */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`inline-block bg-${nivel.color} text-white px-4 py-2 rounded-full font-bold mb-4`}
                    >
                      Inscripciones abiertas
                    </motion.div>

                    {/* Icono y título */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`text-${nivel.color}`}>
                        {nivel.icono}
                      </div>
                      <div>
                        <h2 className="font-anton text-4xl text-azul-oscuro">
                          {nivel.nombre}
                        </h2>
                        <p className="text-xl text-gray-600">
                          {nivel.edades}
                        </p>
                      </div>
                    </div>

                    {/* Descripción */}
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {nivel.descripcion}
                    </p>

                    {/* Características */}
                    <div className="space-y-3 mb-6">
                      {nivel.caracteristicas.map((caracteristica, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <ChevronRight className={`text-${nivel.color} flex-shrink-0 mt-1`} size={20} />
                          <span className="text-gray-700">{caracteristica}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Botón */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`bg-${nivel.color} text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity`}
                    >
                      Más información
                    </motion.button>
                  </motion.div>
                </div>

                {/* Imagen */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative"
                  >
                    {/* Imagen principal */}
                    <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                      <img
                        src={nivel.imagen}
                        alt={`Nivel ${nivel.nombre}`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Imagen curricular superpuesta */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="absolute -bottom-6 -right-6 w-48 h-32 rounded-lg overflow-hidden shadow-xl border-4 border-white"
                    >
                      <img
                        src={nivel.curriculo}
                        alt={`Currículo ${nivel.nombre}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          Ver currículo
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-azul-oscuro to-verde-azulado text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-anton text-4xl md:text-5xl mb-6">
              ¿Quieres conocer más sobre nuestros niveles educativos?
            </h2>
            <p className="text-xl mb-8">
              Agenda una visita a nuestros campus y descubre por qué somos la mejor opción educativa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amarillo-dorado text-azul-oscuro px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
              >
                Agendar visita
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-azul-oscuro px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
              >
                Descargar brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Niveles;

