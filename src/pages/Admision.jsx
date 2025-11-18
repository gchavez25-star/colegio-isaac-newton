import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Calendar, Users, CheckCircle, ChevronRight, Download } from 'lucide-react';

const Admision = () => {
  const proceso = [
    {
      paso: 1,
      titulo: 'Solicitud de Información',
      descripcion: 'Completa el formulario de contacto o comunícate con nosotros para recibir información detallada sobre el proceso de admisión.',
      icono: <FileText size={48} />
    },
    {
      paso: 2,
      titulo: 'Visita Guiada',
      descripcion: 'Agenda una visita a nuestros campus para conocer las instalaciones, hablar con directivos y resolver todas tus dudas.',
      icono: <Calendar size={48} />
    },
    {
      paso: 3,
      titulo: 'Evaluación',
      descripcion: 'El estudiante participa en una evaluación diagnóstica acorde a su nivel educativo para conocer sus fortalezas y áreas de desarrollo.',
      icono: <Users size={48} />
    },
    {
      paso: 4,
      titulo: 'Matrícula',
      descripcion: 'Una vez aceptado, procede con la matrícula presentando la documentación requerida y realizando el pago correspondiente.',
      icono: <CheckCircle size={48} />
    }
  ];

  const requisitos = {
    inicial: [
      'Partida de nacimiento original',
      'DNI del estudiante (copia)',
      'DNI de los padres (copia)',
      'Certificado de salud',
      'Dos fotos tamaño carnet',
      'Constancia de no adeudo (si procede de otra institución)'
    ],
    primaria: [
      'Partida de nacimiento original',
      'DNI del estudiante (copia)',
      'DNI de los padres (copia)',
      'Certificado de estudios del nivel anterior',
      'Certificado de salud',
      'Dos fotos tamaño carnet',
      'Constancia de no adeudo (si procede de otra institución)'
    ],
    secundaria: [
      'Partida de nacimiento original',
      'DNI del estudiante (copia)',
      'DNI de los padres (copia)',
      'Certificado de estudios de primaria completa',
      'Libreta de notas del último año cursado',
      'Certificado de salud',
      'Dos fotos tamaño carnet',
      'Constancia de no adeudo (si procede de otra institución)'
    ]
  };

  const beneficios = [
    {
      titulo: 'Becas Académicas',
      descripcion: 'Ofrecemos becas parciales y completas para estudiantes con excelente rendimiento académico.',
      porcentaje: 'Hasta 100%'
    },
    {
      titulo: 'Becas Deportivas',
      descripcion: 'Reconocemos el talento deportivo con becas especiales para atletas destacados.',
      porcentaje: 'Hasta 50%'
    },
    {
      titulo: 'Descuentos por Hermanos',
      descripcion: 'Familias con más de un hijo matriculado reciben descuentos especiales.',
      porcentaje: '15% - 25%'
    }
  ];

  const fechasImportantes = [
    { evento: 'Inicio de inscripciones', fecha: 'Enero 2025' },
    { evento: 'Evaluaciones de admisión', fecha: 'Febrero 2025' },
    { evento: 'Proceso de matrícula', fecha: 'Febrero - Marzo 2025' },
    { evento: 'Inicio del año escolar', fecha: 'Marzo 2025' }
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-azul-oscuro to-verde-azulado text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="inline-block bg-amarillo-dorado text-azul-oscuro px-6 py-3 rounded-full font-bold mb-6 text-lg"
            >
              ¡Inscripciones Abiertas 2025!
            </motion.div>
            <h1 className="font-anton text-5xl md:text-6xl mb-6">
              Proceso de Admisión
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8">
              Únete a la familia Isaac Newton y descubre todo tu potencial
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 bg-amarillo-dorado text-azul-oscuro px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
              >
                Postular ahora
                <ChevronRight />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Proceso de Admisión */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-anton text-4xl md:text-5xl text-azul-oscuro mb-4">
              Proceso de Admisión
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cuatro pasos sencillos para formar parte de nuestra comunidad educativa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {proceso.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-verde-azulado text-white w-12 h-12 rounded-full flex items-center justify-center font-anton text-2xl">
                  {item.paso}
                </div>
                <div className="text-azul-oscuro mb-4 flex justify-center mt-6">
                  {item.icono}
                </div>
                <h3 className="font-anton text-xl text-azul-oscuro mb-3 text-center">
                  {item.titulo}
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  {item.descripcion}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requisitos por Nivel */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-anton text-4xl md:text-5xl text-azul-oscuro mb-4">
              Requisitos por Nivel
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Documentación necesaria según el nivel educativo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(requisitos).map(([nivel, docs], index) => (
              <motion.div
                key={nivel}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="font-anton text-2xl text-azul-oscuro mb-6 capitalize">
                  {nivel}
                </h3>
                <ul className="space-y-3">
                  {docs.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="text-verde-azulado flex-shrink-0 mt-1" size={20} />
                      <span className="text-sm">{doc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-azul-oscuro text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
            >
              <Download size={20} />
              Descargar lista completa
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Becas y Beneficios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-anton text-4xl md:text-5xl text-azul-oscuro mb-4">
              Becas y Beneficios
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Reconocemos el talento y el esfuerzo de nuestros estudiantes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beneficios.map((beneficio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-verde-azulado to-azul-oscuro text-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="font-anton text-5xl text-amarillo-dorado mb-4">
                  {beneficio.porcentaje}
                </div>
                <h3 className="font-anton text-2xl mb-3">
                  {beneficio.titulo}
                </h3>
                <p className="text-sm">
                  {beneficio.descripcion}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fechas Importantes */}
      <section className="py-20 bg-azul-oscuro text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-anton text-4xl md:text-5xl mb-4">
              Fechas Importantes
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Calendario del proceso de admisión 2025
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {fechasImportantes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-6 mb-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all"
              >
                <div className="flex items-center gap-4">
                  <Calendar size={32} className="text-amarillo-dorado" />
                  <span className="font-semibold text-lg">{item.evento}</span>
                </div>
                <span className="text-amarillo-dorado font-bold">{item.fecha}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Imagen Institucional */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-anton text-4xl text-azul-oscuro mb-6">
                ¿Por qué elegir Isaac Newton?
              </h2>
              <ul className="space-y-4 mb-6">
                {[
                  'Más de 35 años de experiencia educativa',
                  '85% de ingreso a universidades de prestigio',
                  'Metodología científica innovadora',
                  'Docentes altamente calificados',
                  'Instalaciones modernas y equipadas',
                  'Formación integral en valores'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <CheckCircle className="text-verde-azulado flex-shrink-0" size={24} />
                    <span className="text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 bg-verde-azulado text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
                >
                  Solicitar información
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
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop"
                alt="Estudiantes Isaac Newton"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-20 bg-gradient-to-r from-amarillo-dorado to-yellow-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-anton text-4xl md:text-5xl text-azul-oscuro mb-6">
              ¡Comienza tu futuro hoy!
            </h2>
            <p className="text-xl text-azul-oscuro mb-8">
              No pierdas la oportunidad de formar parte de la mejor institución educativa del norte del Perú
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 bg-azul-oscuro text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
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

export default Admision;

