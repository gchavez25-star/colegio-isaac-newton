import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Calendar, Users, CheckCircle, ChevronRight, Download, Play } from 'lucide-react';

// =====================================================
// COMPONENTE 1: RequisitosMatricula (Integrado)
// =====================================================

const requisitosEstudiante = [
  "Partida de nacimiento.",
  "Copia del DNI del postulante.",
  "Libreta de notas o informe de aprendizaje actualizado del colegio.",
  "Ficha única de matrícula",
  "Constancia de no adeudo de la institución educativa de origen.",
];

const requisitosPadres = [
  "Copia del DNI de ambos padres.",
  "De no ser el padre, documento que acredite.",
];

const RequisitosMatricula = () => {
  return (
    <div className="container mx-auto px-6 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative bg-white p-8 md:p-12 rounded-3xl shadow-2xl overflow-hidden"
      >
        
        {/* TÍTULO BICOLOR Y AÑO */}
        <div className="relative z-10 mb-8">
          <h2 className="text-6xl md:text-8xl leading-none font-anton">
            <span className="block text-amarillo-dorado -mb-4 md:-mb-6 relative z-10 italic font-serif" style={{ fontSize: '0.6em', transform: 'rotate(-5deg)', display: 'inline-block' }}>
              Requisitos
            </span>
            <span className="block text-azul-oscuro">
              MATRÍCULA
            </span>
          </h2>
          <p className="text-gray-600 mt-2">
            Para completar tu inscripción, asegúrate de cumplir con los siguientes datos.
          </p>
          
          {/* AÑO 2026 (Estilizado) */}
          <div className="absolute top-0 right-0 text-amarillo-dorado font-anton text-4xl transform rotate-12">
            2026
          </div>
        </div>

        {/* CONTENIDO PRINCIPAL (Grid de 2 columnas) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative">
          
          {/* COLUMNA IZQUIERDA: REQUISITOS */}
          <div className="space-y-8 relative z-10">
            
            {/* REQUISITOS ESTUDIANTE */}
            <div className="space-y-4">
              <div className="bg-verde-azulado inline-flex items-center px-4 py-2 rounded-lg shadow-lg">
                <Play className="w-5 h-5 text-white mr-2 fill-white" />
                <h3 className="text-white font-bold text-xl uppercase">Estudiante</h3>
              </div>
              
              <ul className="space-y-3 text-lg text-gray-700">
                {requisitosEstudiante.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-verde-azulado flex-shrink-0 mt-1" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            {/* REQUISITOS PADRES DE FAMILIA */}
            <div className="space-y-4">
              <div className="bg-verde-azulado inline-flex items-center px-4 py-2 rounded-lg shadow-lg">
                <Play className="w-5 h-5 text-white mr-2 fill-white" />
                <h3 className="text-white font-bold text-xl uppercase">Padres de familia</h3>
              </div>
              
              <ul className="space-y-3 text-lg text-gray-700">
                {requisitosPadres.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-verde-azulado flex-shrink-0 mt-1" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* BOTÓN DE LLAMADA A LA ACCIÓN */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-azul-oscuro text-white font-anton text-xl uppercase px-8 py-4 rounded-lg shadow-xl hover:bg-azul-oscuro/90 transition-colors"
            >
              ¡SÉ PARTE DE NOSOTROS!
            </motion.button>
          </div>

          {/* COLUMNA DERECHA: IMAGEN DEL ESTUDIANTE */}
          <div className="hidden lg:block absolute right-0 top-0 h-full w-1/2">
            {/* Fondo de color que se ve detrás de la imagen */}
            <div className="absolute inset-0 bg-amarillo-dorado/50 rounded-3xl transform translate-x-10 translate-y-10"></div>
            
            {/* Contenedor de la imagen con bordes redondeados */}
            <div className="absolute inset-0 rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="/matricula/estudiante-matricula.png" // Usar una imagen de un estudiante apuntando
                alt="Estudiante apuntando a los requisitos"
                className="w-full h-full object-cover object-top"
              />
              {/* Overlay sutil para integrar la imagen */}
              <div className="absolute inset-0 bg-verde-azulado/10"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};


// =====================================================
// COMPONENTE 2: Admision (Principal)
// =====================================================

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

      {/* Requisitos de Matrícula (Componente Gráfico) */}
      <section className="py-20 bg-gray-50">
        <RequisitosMatricula />
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
              Mantente al tanto de nuestro calendario de admisión
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {fechasImportantes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white text-azul-oscuro p-4 rounded-xl shadow-lg text-center"
              >
                <p className="text-sm font-semibold">{item.evento}</p>
                <p className="font-anton text-xl text-verde-azulado mt-1">{item.fecha}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Llamada a la Acción Final */}
      <section className="py-16 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-anton text-3xl md:text-4xl text-azul-oscuro mb-6">
            ¿Listo para unirte a la familia Newton?
          </h2>
          <Link
            to="/visita-guiada"
            className="inline-flex items-center gap-2 bg-verde-azulado text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-verde-azulado/90 transition-colors shadow-xl"
          >
            Agenda tu Visita Guiada
            <ChevronRight />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Admision;
