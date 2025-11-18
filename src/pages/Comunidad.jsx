import { motion } from 'framer-motion';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, User, Award, BookOpen } from 'lucide-react';
import { publicaciones, categorias } from '../data/publicaciones';

const Comunidad = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');
  const [nivelFiltro, setNivelFiltro] = useState('Todos');

  const directivos = [
    {
      nombre: 'Dr. Roberto Mendoza Castillo',
      cargo: 'Director General',
      foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      bio: 'Físico y educador con más de 35 años de experiencia. Fundador del Colegio Isaac Newton y promotor de la educación científica en el Perú.'
    },
    {
      nombre: 'Mg. Carmen Silva Torres',
      cargo: 'Directora Académica',
      foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      bio: 'Magíster en Educación con especialización en Gestión Pedagógica. Lidera la innovación curricular y metodológica de la institución.'
    },
    {
      nombre: 'Lic. José Ramírez Vega',
      cargo: 'Director Administrativo',
      foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Administrador con amplia experiencia en gestión educativa. Responsable de la infraestructura y recursos institucionales.'
    },
    {
      nombre: 'Psic. María González Ruiz',
      cargo: 'Coordinadora de Psicología',
      foto: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
      bio: 'Psicóloga educativa especializada en desarrollo socioemocional. Lidera el departamento de bienestar estudiantil.'
    }
  ];

  const docentes = [
    {
      nombre: 'Prof. Ana Martínez',
      area: 'Matemáticas',
      nivel: 'Secundaria',
      foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      mensaje: 'Enseñar matemáticas es mostrar la belleza del pensamiento lógico y la resolución de problemas.'
    },
    {
      nombre: 'Prof. Carlos Pérez',
      area: 'Ciencias',
      nivel: 'Primaria',
      foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      mensaje: 'La ciencia es curiosidad en acción. Mi misión es despertar esa curiosidad en cada estudiante.'
    },
    {
      nombre: 'Prof. Lucía Fernández',
      area: 'Inglés',
      nivel: 'Secundaria',
      foto: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop',
      mensaje: 'Aprender un idioma es abrir una puerta al mundo. Ayudo a mis estudiantes a cruzar ese umbral.'
    },
    {
      nombre: 'Prof. Miguel Torres',
      area: 'Educación Física',
      nivel: 'Primaria',
      foto: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
      mensaje: 'El deporte forma carácter, disciplina y trabajo en equipo. Valores esenciales para la vida.'
    },
    {
      nombre: 'Prof. Rosa Campos',
      area: 'Inicial',
      nivel: 'Inicial',
      foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
      mensaje: 'Los primeros años son fundamentales. Cada día es una oportunidad para sembrar amor por el aprendizaje.'
    },
    {
      nombre: 'Prof. David Rojas',
      area: 'Historia',
      nivel: 'Secundaria',
      foto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
      mensaje: 'La historia nos enseña quiénes somos y hacia dónde vamos. Es el espejo de la humanidad.'
    }
  ];

  const alumnos = [
    {
      nombre: 'María Rodríguez',
      logro: 'Medalla de Oro - Olimpiada Nacional de Matemáticas',
      foto: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop',
      testimonio: 'El colegio me enseñó a amar las matemáticas y a nunca rendirme ante los desafíos.'
    },
    {
      nombre: 'Carlos Pérez',
      logro: 'Ingreso directo a la PUCP - Beca completa',
      foto: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop',
      testimonio: 'Gracias a la preparación que recibí, logré mi sueño de estudiar en la mejor universidad del país.'
    },
    {
      nombre: 'Ana Torres',
      logro: 'Proyecto de Ciencias - Finalista Nacional',
      foto: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop',
      testimonio: 'Mi proyecto sobre energías renovables fue posible gracias al apoyo de mis profesores y los laboratorios del colegio.'
    }
  ];

  const estudianteDelMes = {
    nombre: 'Sofía Mendoza',
    grado: '5to de Secundaria',
    foto: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=600&fit=crop',
    logros: [
      'Promedio académico: 19.5',
      'Capitana del equipo de debate',
      'Voluntaria en programa de tutoría'
    ],
    mensaje: 'Ser estudiante del mes es un honor que me motiva a seguir esforzándome y ayudando a mis compañeros.'
  };

  const publicacionesFiltradas = categoriaSeleccionada === 'Todos'
    ? publicaciones
    : publicaciones.filter(pub => pub.categoria === categoriaSeleccionada);

  const docentesFiltrados = nivelFiltro === 'Todos'
    ? docentes
    : docentes.filter(doc => doc.nivel === nivelFiltro);

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
              Nuestra Comunidad
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Conoce a las personas que hacen posible nuestra misión educativa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="publicaciones" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 bg-gray-100 p-2 rounded-lg">
              <TabsTrigger value="publicaciones" className="font-bold">
                Publicaciones
              </TabsTrigger>
              <TabsTrigger value="directivos" className="font-bold">
                Directivos
              </TabsTrigger>
              <TabsTrigger value="docentes" className="font-bold">
                Docentes
              </TabsTrigger>
              <TabsTrigger value="alumnos" className="font-bold">
                Alumnos
              </TabsTrigger>
            </TabsList>

            {/* Publicaciones */}
            <TabsContent value="publicaciones">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {/* Filtros */}
                <div className="flex flex-wrap gap-3 mb-8 justify-center">
                  {categorias.map((categoria) => (
                    <button
                      key={categoria}
                      onClick={() => setCategoriaSeleccionada(categoria)}
                      className={`px-4 py-2 rounded-full font-semibold transition-all ${
                        categoriaSeleccionada === categoria
                          ? 'bg-verde-azulado text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {categoria}
                    </button>
                  ))}
                </div>

                {/* Grid de publicaciones */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {publicacionesFiltradas.map((pub, index) => (
                    <motion.div
                      key={pub.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -10 }}
                      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                    >
                      <div className="h-48 overflow-hidden">
                        <img
                          src={pub.imagen}
                          alt={pub.titulo}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar size={16} />
                            {pub.fecha}
                          </span>
                          <span className="bg-verde-azulado text-white px-2 py-1 rounded text-xs font-semibold">
                            {pub.categoria}
                          </span>
                        </div>
                        <h3 className="font-anton text-xl text-azul-oscuro mb-2">
                          {pub.titulo}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {pub.resumen}
                        </p>
                        <button className="text-verde-azulado font-semibold hover:text-azul-oscuro transition-colors">
                          Ver más →
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Directivos */}
            <TabsContent value="directivos">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {directivos.map((directivo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, rotateY: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                    className="relative h-96 rounded-xl shadow-lg"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Frente */}
                    <div
                      className="absolute inset-0 rounded-xl overflow-hidden"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <img
                        src={directivo.foto}
                        alt={directivo.nombre}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                        <h3 className="font-anton text-2xl text-white mb-1">
                          {directivo.nombre}
                        </h3>
                        <p className="text-amarillo-dorado font-semibold">
                          {directivo.cargo}
                        </p>
                      </div>
                    </div>

                    {/* Reverso */}
                    <div
                      className="absolute inset-0 bg-azul-oscuro text-white rounded-xl p-6 flex flex-col justify-center"
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                      }}
                    >
                      <User size={48} className="text-amarillo-dorado mb-4" />
                      <h3 className="font-anton text-2xl mb-2">
                        {directivo.nombre}
                      </h3>
                      <p className="text-amarillo-dorado font-semibold mb-4">
                        {directivo.cargo}
                      </p>
                      <p className="text-sm leading-relaxed">
                        {directivo.bio}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* Docentes */}
            <TabsContent value="docentes">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {/* Filtros por nivel */}
                <div className="flex flex-wrap gap-3 mb-8 justify-center">
                  {['Todos', 'Inicial', 'Primaria', 'Secundaria'].map((nivel) => (
                    <button
                      key={nivel}
                      onClick={() => setNivelFiltro(nivel)}
                      className={`px-4 py-2 rounded-full font-semibold transition-all ${
                        nivelFiltro === nivel
                          ? 'bg-verde-azulado text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {nivel}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {docentesFiltrados.map((docente, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, rotateY: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      whileHover={{ rotateY: 180 }}
                      transition={{ duration: 0.6 }}
                      className="relative h-96 rounded-xl shadow-lg"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {/* Frente */}
                      <div
                        className="absolute inset-0 rounded-xl overflow-hidden"
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        <img
                          src={docente.foto}
                          alt={docente.nombre}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                          <h3 className="font-anton text-xl text-white mb-1">
                            {docente.nombre}
                          </h3>
                          <p className="text-amarillo-dorado font-semibold">
                            {docente.area}
                          </p>
                          <p className="text-white text-sm">
                            {docente.nivel}
                          </p>
                        </div>
                      </div>

                      {/* Reverso */}
                      <div
                        className="absolute inset-0 bg-verde-azulado text-white rounded-xl p-6 flex flex-col justify-center"
                        style={{
                          backfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)'
                        }}
                      >
                        <BookOpen size={48} className="text-amarillo-dorado mb-4" />
                        <h3 className="font-anton text-xl mb-2">
                          {docente.nombre}
                        </h3>
                        <p className="text-amarillo-dorado font-semibold mb-4">
                          {docente.area} - {docente.nivel}
                        </p>
                        <p className="text-sm leading-relaxed italic">
                          "{docente.mensaje}"
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Alumnos */}
            <TabsContent value="alumnos">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {/* Estudiante del mes */}
                <div className="bg-gradient-to-br from-amarillo-dorado to-yellow-500 rounded-xl p-8 mb-12">
                  <div className="flex items-center gap-4 mb-6">
                    <Award size={48} className="text-azul-oscuro" />
                    <h2 className="font-anton text-3xl text-azul-oscuro">
                      Estudiante del Mes
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-1">
                      <img
                        src={estudianteDelMes.foto}
                        alt={estudianteDelMes.nombre}
                        className="w-full h-64 object-cover rounded-xl shadow-lg"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="font-anton text-2xl text-azul-oscuro mb-2">
                        {estudianteDelMes.nombre}
                      </h3>
                      <p className="text-azul-oscuro font-semibold mb-4">
                        {estudianteDelMes.grado}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {estudianteDelMes.logros.map((logro, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-azul-oscuro">
                            <Award size={20} />
                            {logro}
                          </li>
                        ))}
                      </ul>
                      <p className="text-azul-oscuro italic">
                        "{estudianteDelMes.mensaje}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Historias destacadas */}
                <h2 className="font-anton text-3xl text-azul-oscuro mb-8 text-center">
                  Historias de Éxito
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {alumnos.map((alumno, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      whileHover={{ y: -10 }}
                      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                    >
                      <div className="h-64 overflow-hidden">
                        <img
                          src={alumno.foto}
                          alt={alumno.nombre}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-anton text-xl text-azul-oscuro mb-2">
                          {alumno.nombre}
                        </h3>
                        <div className="flex items-center gap-2 text-verde-azulado mb-3">
                          <Award size={20} />
                          <p className="font-semibold text-sm">
                            {alumno.logro}
                          </p>
                        </div>
                        <p className="text-gray-600 italic text-sm">
                          "{alumno.testimonio}"
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Comunidad;

