import { motion } from 'framer-motion';
import { Target, Eye, Heart, Lightbulb, Users2, Award } from 'lucide-react';
import { useState } from 'react';

const Nosotros = () => {
  const [selectedYear, setSelectedYear] = useState(0);

  const historia = [
    {
      año: 1990,
      titulo: 'Fundación',
      descripcion: 'El Dr. Roberto Mendoza funda el Colegio Isaac Newton con la visión de crear una institución educativa centrada en las ciencias.'
    },
    {
      año: 2000,
      titulo: 'Expansión',
      descripcion: 'Apertura del segundo campus en Baños del Inca para atender la creciente demanda educativa.'
    },
    {
      año: 2010,
      titulo: 'Modernización',
      descripcion: 'Implementación de laboratorios de última generación y plataformas digitales de aprendizaje.'
    },
    {
      año: 2020,
      titulo: 'Reconocimiento Nacional',
      descripcion: 'Reconocidos como uno de los mejores colegios del norte del Perú por el Ministerio de Educación.'
    },
    {
      año: 2025,
      titulo: 'Innovación Continua',
      descripcion: 'Implementación de metodologías STEAM y programas de intercambio internacional.'
    }
  ];

  const valores = [
    {
      icono: <Heart size={48} />,
      titulo: 'Integridad',
      descripcion: 'Actuamos con honestidad, transparencia y coherencia en todas nuestras acciones educativas.'
    },
    {
      icono: <Lightbulb size={48} />,
      titulo: 'Excelencia',
      descripcion: 'Buscamos constantemente la mejora continua en todos los aspectos de nuestra labor educativa.'
    },
    {
      icono: <Users2 size={48} />,
      titulo: 'Respeto',
      descripcion: 'Valoramos la diversidad y promovemos un ambiente de respeto mutuo y tolerancia.'
    }
  ];

  const metodologia = [
    {
      titulo: 'Aprendizaje Basado en Proyectos',
      descripcion: 'Los estudiantes desarrollan proyectos reales que integran múltiples disciplinas y resuelven problemas concretos.'
    },
    {
      titulo: 'Método Científico Aplicado',
      descripcion: 'Enseñamos a observar, formular hipótesis, experimentar y concluir en todas las áreas del conocimiento.'
    },
    {
      titulo: 'Educación STEAM',
      descripcion: 'Integramos Ciencia, Tecnología, Ingeniería, Arte y Matemáticas en experiencias de aprendizaje significativas.'
    },
    {
      titulo: 'Pensamiento Crítico',
      descripcion: 'Fomentamos el análisis, la reflexión y el cuestionamiento constructivo en nuestros estudiantes.'
    }
  ];

  const logros = [
    { numero: '35+', texto: 'Años de experiencia' },
    { numero: '2000+', texto: 'Egresados exitosos' },
    { numero: '85%', texto: 'Ingreso a universidades top' },
    { numero: '50+', texto: 'Docentes especializados' }
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
              Sobre Nosotros
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Más de 35 años formando líderes con excelencia académica y valores científicos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fundador */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop"
                alt="Dr. Roberto Mendoza"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-anton text-4xl text-azul-oscuro mb-4">
                Nuestro Fundador
              </h2>
              <h3 className="text-2xl text-verde-azulado font-bold mb-4">
                Dr. Roberto Mendoza Castillo
              </h3>
              <p className="text-gray-600 mb-4">
                Físico de profesión y educador por vocación, el Dr. Mendoza fundó el Colegio 
                Isaac Newton en 1990 con la visión de crear una institución educativa que 
                combinara el rigor científico con una formación humanista integral.
              </p>
              <p className="text-gray-600">
                Su legado permanece vivo en cada estudiante que egresa de nuestra institución, 
                llevando consigo los valores de la curiosidad científica, el pensamiento crítico 
                y el compromiso con la excelencia.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-verde-azulado text-white p-4 rounded-full">
                  <Target size={32} />
                </div>
                <h2 className="font-anton text-3xl text-azul-oscuro">
                  Misión
                </h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Brindar una educación de excelencia basada en el método científico, 
                formando estudiantes íntegros, críticos y creativos, capaces de contribuir 
                positivamente al desarrollo de la sociedad con valores sólidos y competencias 
                del siglo XXI.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-azul-oscuro text-white p-4 rounded-full">
                  <Eye size={32} />
                </div>
                <h2 className="font-anton text-3xl text-azul-oscuro">
                  Visión
                </h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Ser reconocidos como la institución educativa líder en el norte del Perú, 
                referente en innovación pedagógica y formación científica, con egresados que 
                destacan en las mejores universidades del país y contribuyen al desarrollo 
                sostenible de la región.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-anton text-4xl md:text-5xl text-azul-oscuro mb-4">
              Nuestra Historia
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un recorrido por los hitos más importantes de nuestra institución
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Timeline visual */}
            <div className="flex justify-between mb-8 overflow-x-auto pb-4">
              {historia.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedYear(index)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex-shrink-0 px-6 py-3 rounded-full font-bold transition-all ${
                    selectedYear === index
                      ? 'bg-verde-azulado text-white'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  {item.año}
                </motion.button>
              ))}
            </div>

            {/* Contenido del año seleccionado */}
            <motion.div
              key={selectedYear}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-8 rounded-xl shadow-lg"
            >
              <h3 className="font-anton text-3xl text-azul-oscuro mb-4">
                {historia[selectedYear].titulo}
              </h3>
              <p className="text-lg text-gray-600">
                {historia[selectedYear].descripcion}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logros */}
      <section className="py-20 bg-azul-oscuro text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-anton text-4xl md:text-5xl mb-4">
              Logros Institucionales
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {logros.map((logro, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-anton text-5xl md:text-6xl text-amarillo-dorado mb-2">
                  {logro.numero}
                </div>
                <div className="text-lg">
                  {logro.texto}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-anton text-4xl md:text-5xl text-azul-oscuro mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Los pilares fundamentales que guían nuestra labor educativa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valores.map((valor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow"
              >
                <div className="text-verde-azulado mb-4 flex justify-center">
                  {valor.icono}
                </div>
                <h3 className="font-anton text-2xl text-azul-oscuro mb-3">
                  {valor.titulo}
                </h3>
                <p className="text-gray-600">
                  {valor.descripcion}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-anton text-4xl md:text-5xl text-azul-oscuro mb-4">
              Metodología Científica Innovadora
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Implementamos estrategias pedagógicas de vanguardia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {metodologia.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-verde-azulado hover:shadow-2xl transition-all"
              >
                <h3 className="font-anton text-xl text-azul-oscuro mb-3">
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
    </div>
  );
};

export default Nosotros;

