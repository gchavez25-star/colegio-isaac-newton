import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ChevronRight, Video, Image, BookOpen, School } from 'lucide-react';
import { useState, useMemo } from 'react';

// =====================================================
// 1. ESTRUCTURA DE DATOS PARA MÚLTIPLES SEDES Y NIVELES
// =====================================================

// Datos base del campus Cajamarca (tomados del código original)
const campusCajamarcaBase = {
  direccion: 'Av. Héroes del Cenepa 123, Cajamarca',
  telefono: '(076) 123-456',
  email: 'cajamarca@isaacnewton.edu.pe',
  horario: 'Lunes a Viernes: 7:00 AM - 5:00 PM',
  mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.1!2d-78.5!3d-7.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!5e0!3m2!1ses!2spe',
  video: 'https://www.youtube.com/embed/VIDEO_ID_CAJAMARCA',
};

// Datos base del campus Baños del Inca (datos ficticios)
const campusBanosIncaBase = {
  direccion: 'Av. Los Incas 456, Baños del Inca',
  telefono: '(076) 789-012',
  email: 'banosdelinca@isaacnewton.edu.pe',
  horario: 'Lunes a Viernes: 7:30 AM - 4:30 PM',
  mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.1!2d-78.5!3d-7.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!5e0!3m2!1ses!2spe',
  video: 'https://www.youtube.com/embed/VIDEO_ID_BANOS_INCA',
};

const infraestructuraData = {
  'Cajamarca': {
    ...campusCajamarcaBase,
    'General': {
      titulo: 'Infraestructura General',
      descripcion: 'Nuestro campus principal concentra la gestión académica y administrativa del colegio. Cuenta con infraestructura moderna, laboratorios especializados y servicios de apoyo integral al estudiante.',
      imagen: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=800&fit=crop',
      caracteristicas: [
        'Laboratorios de Física, Química y Biología',
        'Biblioteca física y digital',
        'Área de Psicología Educativa',
        'Tópico y enfermería escolar',
        'Auditorio institucional',
        'Canchas deportivas techadas'
      ],
      galeria: [
        { titulo: 'Laboratorios de Ciencias', imagen: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop' },
        { titulo: 'Biblioteca Central', imagen: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=600&fit=crop' },
        { titulo: 'Auditorio Principal', imagen: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop' },
        { titulo: 'Área de Psicología', imagen: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop' }
      ]
    },
    'Inicial': {
      titulo: 'Nivel Inicial',
      descripcion: 'Espacios diseñados para el desarrollo integral de los más pequeños, fomentando la creatividad y el juego como herramientas de aprendizaje.',
      imagen: 'https://images.unsplash.com/photo-1576092768241-dec231879549?w=1200&h=800&fit=crop',
      caracteristicas: ['Aulas temáticas', 'Patios de juego seguros', 'Huerto escolar', 'Sala de psicomotricidad'],
      galeria: []
    },
    'Primaria': {
      titulo: 'Nivel Primaria',
      descripcion: 'Aulas amplias y equipadas para una educación activa y participativa. Contamos con tecnología de punta para el desarrollo de proyectos.',
      imagen: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1200&h=800&fit=crop',
      caracteristicas: ['Aulas interactivas', 'Laboratorio de cómputo', 'Cancha de usos múltiples', 'Comedor escolar'],
      galeria: []
    },
    'Secundaria': {
      titulo: 'Nivel Secundaria',
      descripcion: 'Infraestructura especializada para la formación preuniversitaria. Laboratorios avanzados y espacios de estudio colaborativo.',
      imagen: 'https://images.unsplash.com/photo-1541339907198-e0875663f974?w=1200&h=800&fit=crop',
      caracteristicas: ['Laboratorios avanzados de ciencias', 'Salas de estudio grupal', 'Gimnasio', 'Área de robótica'],
      galeria: []
    }
  },
  'Baños del Inca': {
    ...campusBanosIncaBase,
    'General': {
      titulo: 'Infraestructura General',
      descripcion: 'Nuestro campus en Baños del Inca ofrece un ambiente tranquilo y natural, ideal para el aprendizaje. Mantenemos los mismos estándares de calidad y equipamiento.',
      imagen: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=1200&h=800&fit=crop',
      caracteristicas: [
        'Aulas con vista a la naturaleza',
        'Talleres de arte y música',
        'Campo deportivo de grass natural',
        'Biblioteca con áreas de lectura al aire libre'
      ],
      galeria: []
    },
    'Inicial': {
      titulo: 'Nivel Inicial',
      descripcion: 'Jardines y áreas de juego al aire libre, aprovechando el entorno natural para la estimulación temprana.',
      imagen: 'https://images.unsplash.com/photo-1576092768241-dec231879549?w=1200&h=800&fit=crop',
      caracteristicas: ['Patios de juego con elementos naturales', 'Aulas con luz natural', 'Sala de siesta'],
      galeria: []
    },
    'Primaria': {
      titulo: 'Nivel Primaria',
      descripcion: 'Fomentamos el aprendizaje experiencial con espacios que permiten la conexión con el medio ambiente.',
      imagen: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1200&h=800&fit=crop',
      caracteristicas: ['Invernadero educativo', 'Laboratorio de idiomas', 'Cancha de fútbol'],
      galeria: []
    },
    'Secundaria': {
      titulo: 'Nivel Secundaria',
      descripcion: 'Espacios de concentración y debate, preparando a los estudiantes para los desafíos académicos futuros.',
      imagen: 'https://images.unsplash.com/photo-1541339907198-e0875663f974?w=1200&h=800&fit=crop',
      caracteristicas: ['Salas de conferencias', 'Laboratorio de robótica', 'Biblioteca especializada'],
      galeria: []
    }
  }
};

const niveles = ['General', 'Inicial', 'Primaria', 'Secundaria'];
const sedes = ['Cajamarca', 'Baños del Inca'];

// =====================================================
// 2. COMPONENTE PRINCIPAL INFRAESTRUCTURA
// =====================================================

export default function Infraestructura() {
  const [selectedSede, setSelectedSede] = useState('Cajamarca');
  const [selectedNivel, setSelectedNivel] = useState('General');
  const [modalOpen, setModalOpen] = useState(false);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  const sedeData = infraestructuraData[selectedSede];
  const nivelData = sedeData[selectedNivel];
  
  // Datos combinados para el contenido
  const contenido = useMemo(() => ({
    ...sedeData, // Direccion, telefono, email, horario, mapa, video
    ...nivelData // Titulo, descripcion, imagen, caracteristicas, galeria
  }), [sedeData, nivelData]);

  const abrirModal = (item) => {
    setImagenSeleccionada(item);
    setModalOpen(true);
  };

  const cerrarModal = () => {
    setModalOpen(false);
    setImagenSeleccionada(null);
  };

  return (
    <div className="min-h-screen pt-24 bg-white">
      
      {/* HERO SECTION */}
      <section className="py-16 bg-gradient-to-br from-azul-oscuro to-verde-azulado text-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-anton text-5xl md:text-6xl mb-4"
          >
            Nuestra Infraestructura
          </motion.h1>
          <p className="text-xl font-light">Espacios diseñados para la excelencia educativa</p>
        </div>
      </section>

      {/* 3. CONTENIDO PRINCIPAL CON TABS */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          
          {/* TABS SUPERIORES PARA SEDES (Cajamarca / Baños del Inca) */}
          <div className="flex justify-center mb-10 border-b border-gray-200">
            {sedes.map((sede) => (
              <button
                key={sede}
                onClick={() => {
                  setSelectedSede(sede);
                  setSelectedNivel('General'); // Reset al cambiar de sede
                }}
                className={`
                  px-8 py-3 text-lg font-semibold transition-all relative
                  ${selectedSede === sede
                    ? 'text-azul-oscuro border-b-4 border-amarillo-dorado'
                    : 'text-gray-500 hover:text-azul-oscuro'
                  }
                `}
              >
                <MapPin className="w-5 h-5 inline-block mr-2" />
                {sede}
              </button>
            ))}
          </div>

          {/* CONTENIDO CON MENÚ LATERAL PARA NIVELES */}
          <div className="grid lg:grid-cols-4 gap-8">
            
            {/* MENÚ LATERAL (Niveles) - Estilo SIR */}
            <div className="lg:col-span-1 bg-white rounded-xl shadow-lg p-4 h-fit">
              <h3 className="text-xl font-bold text-azul-oscuro mb-4 border-b pb-2">
                Secciones
              </h3>
              <nav className="space-y-2">
                {niveles.map((nivel) => (
                  <button
                    key={nivel}
                    onClick={() => setSelectedNivel(nivel)}
                    className={`
                      w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3
                      ${selectedNivel === nivel
                        ? 'bg-verde-azulado text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-100'
                      }
                    `}
                  >
                    <School className="w-5 h-5" />
                    {nivel}
                  </button>
                ))}
              </nav>
            </div>

            {/* CONTENIDO PRINCIPAL */}
            <motion.div
              key={selectedSede + selectedNivel}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3 space-y-12"
            >
              
              {/* TÍTULO Y DESCRIPCIÓN */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="font-anton text-4xl text-azul-oscuro mb-4">
                  {contenido.titulo} - {selectedSede}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {contenido.descripcion}
                </p>
              </div>

              {/* IMAGEN PRINCIPAL */}
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img src={contenido.imagen} alt={contenido.titulo} className="w-full h-auto object-cover" />
              </div>

              {/* CARACTERÍSTICAS Y CONTACTO */}
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* CARACTERÍSTICAS */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="font-bold text-2xl text-verde-azulado mb-4 flex items-center gap-2">
                    <BookOpen className="w-6 h-6" />
                    Características Destacadas
                  </h3>
                  <ul className="space-y-3">
                    {contenido.caracteristicas.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <ChevronRight className="w-5 h-5 text-amarillo-dorado mt-1 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CONTACTO */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="font-bold text-2xl text-verde-azulado mb-4 flex items-center gap-2">
                    <Phone className="w-6 h-6" />
                    Información de Contacto
                  </h3>
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-center gap-3">
                      <MapPin className="text-azul-oscuro" /> {contenido.direccion}
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="text-azul-oscuro" /> {contenido.telefono}
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="text-azul-oscuro" /> {contenido.email}
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="text-azul-oscuro" /> {contenido.horario}
                    </div>
                  </div>
                </div>
              </div>

              {/* VIDEO */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="font-bold text-2xl text-azul-oscuro mb-4 flex items-center gap-2">
                  <Video className="w-6 h-6 text-verde-azulado" />
                  Recorrido Virtual
                </h3>
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src={contenido.video}
                    className="w-full h-full"
                    allowFullScreen
                    title={`Recorrido ${contenido.titulo} - ${selectedSede}`}
                  />
                </div>
              </div>

              {/* GALERÍA */}
              {contenido.galeria && contenido.galeria.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="font-bold text-2xl text-azul-oscuro mb-6 flex items-center gap-2">
                    <Image className="w-6 h-6 text-verde-azulado" />
                    Galería de Instalaciones
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {contenido.galeria.map((item, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => abrirModal(item)}
                        className="cursor-pointer rounded-lg overflow-hidden shadow-md"
                      >
                        <img src={item.imagen} alt={item.titulo} className="w-full h-36 object-cover" />
                        <div className="p-2 bg-azul-oscuro text-white text-center text-sm font-semibold">
                          {item.titulo}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* MAPA */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="font-bold text-2xl text-azul-oscuro mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-verde-azulado" />
                  Ubicación
                </h3>
                <div className="h-96 rounded-xl overflow-hidden shadow-lg">
                  <iframe src={contenido.mapa} className="w-full h-full" loading="lazy" title={`Mapa ${selectedSede}`} />
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {modalOpen && imagenSeleccionada && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={cerrarModal}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={imagenSeleccionada.imagen} alt={imagenSeleccionada.titulo} className="rounded-xl shadow-2xl" />
              <h3 className="font-anton text-white text-3xl mt-4 text-center">
                {imagenSeleccionada.titulo}
              </h3>
              <button
                onClick={cerrarModal}
                className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/50 rounded-full p-2"
              >
                <X size={28} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
