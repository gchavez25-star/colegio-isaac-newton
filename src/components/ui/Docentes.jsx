import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Search, Mail, MapPin, GraduationCap, X } from "lucide-react";

// ========================================
// DATOS DE DOCENTES CON CORREOS
// ========================================
const docentes = [
  // CAJAMARCA - PRIMARIA
  {
    nombre: 'Prof. María González',
    area: 'Comunicación',
    nivel: 'Primaria',
    sede: 'Cajamarca',
    correo: 'maria.gonzalez@isaacnewton.edu.pe',
    foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    mensaje: 'La lectura y escritura son las llaves que abren todas las puertas del conocimiento.'
  },
  {
    nombre: 'Prof. Rosa Campos',
    area: 'Matemáticas',
    nivel: 'Primaria',
    sede: 'Cajamarca',
    correo: 'rosa.campos@isaacnewton.edu.pe',
    foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
    mensaje: 'Los primeros años son fundamentales. Cada día es una oportunidad para sembrar amor por el aprendizaje.'
  },
  {
    nombre: 'Prof. Juan Vásquez',
    area: 'Ciencias Naturales',
    nivel: 'Primaria',
    sede: 'Cajamarca',
    correo: 'juan.vasquez@isaacnewton.edu.pe',
    foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    mensaje: 'Despertar la curiosidad científica desde pequeños es mi mayor pasión.'
  },

  // CAJAMARCA - SECUNDARIA
  {
    nombre: 'Prof. Ana Martínez',
    area: 'Matemáticas',
    nivel: 'Secundaria',
    sede: 'Cajamarca',
    correo: 'ana.martinez@isaacnewton.edu.pe',
    foto: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop',
    mensaje: 'Enseñar matemáticas es mostrar la belleza del pensamiento lógico y la resolución de problemas.'
  },
  {
    nombre: 'Prof. Lucía Fernández',
    area: 'Inglés',
    nivel: 'Secundaria',
    sede: 'Cajamarca',
    correo: 'lucia.fernandez@isaacnewton.edu.pe',
    foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    mensaje: 'Aprender un idioma es abrir una puerta al mundo. Ayudo a mis estudiantes a cruzar ese umbral.'
  },
  {
    nombre: 'Prof. Roberto Silva',
    area: 'Física',
    nivel: 'Secundaria',
    sede: 'Cajamarca',
    correo: 'roberto.silva@isaacnewton.edu.pe',
    foto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
    mensaje: 'La física explica el universo. Mi misión es hacer que mis estudiantes lo comprendan y lo amen.'
  },

  // BAÑOS DEL INCA - PRIMARIA
  {
    nombre: 'Prof. Carlos Pérez',
    area: 'Ciencias',
    nivel: 'Primaria',
    sede: 'Baños del Inca',
    correo: 'carlos.perez@isaacnewton.edu.pe',
    foto: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    mensaje: 'La ciencia es curiosidad en acción. Mi misión es despertar esa curiosidad en cada estudiante.'
  },
  {
    nombre: 'Prof. Miguel Torres',
    area: 'Educación Física',
    nivel: 'Primaria',
    sede: 'Baños del Inca',
    correo: 'miguel.torres@isaacnewton.edu.pe',
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    mensaje: 'El deporte forma carácter, disciplina y trabajo en equipo. Valores esenciales para la vida.'
  },
  {
    nombre: 'Prof. Patricia Díaz',
    area: 'Arte',
    nivel: 'Primaria',
    sede: 'Baños del Inca',
    correo: 'patricia.diaz@isaacnewton.edu.pe',
    foto: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
    mensaje: 'El arte desarrolla la creatividad y la expresión. Cada niño es un artista en potencia.'
  },

  // BAÑOS DEL INCA - SECUNDARIA
  {
    nombre: 'Prof. David Rojas',
    area: 'Historia',
    nivel: 'Secundaria',
    sede: 'Baños del Inca',
    correo: 'david.rojas@isaacnewton.edu.pe',
    foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    mensaje: 'La historia nos enseña quiénes somos y hacia dónde vamos. Es el espejo de la humanidad.'
  },
  {
    nombre: 'Prof. Carmen Ruiz',
    area: 'Química',
    nivel: 'Secundaria',
    sede: 'Baños del Inca',
    correo: 'carmen.ruiz@isaacnewton.edu.pe',
    foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    mensaje: 'La química está en todo lo que nos rodea. Enseño a mis estudiantes a ver el mundo molecular.'
  },
  {
    nombre: 'Prof. Fernando López',
    area: 'Literatura',
    nivel: 'Secundaria',
    sede: 'Baños del Inca',
    correo: 'fernando.lopez@isaacnewton.edu.pe',
    foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    mensaje: 'La literatura es el arte de las palabras. Cada libro es un viaje a mundos infinitos.'
  }
];

export default function Docentes() {
  const [busqueda, setBusqueda] = useState('');
  const [sedeFiltro, setSedeFiltro] = useState('Todos');
  const [nivelFiltro, setNivelFiltro] = useState('Todos');
  const [docenteSeleccionado, setDocenteSeleccionado] = useState(null);

  // Filtrado de docentes
  const docentesFiltrados = docentes.filter((d) => {
    const coincideNombre = d.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                          d.area.toLowerCase().includes(busqueda.toLowerCase()) ||
                          d.correo.toLowerCase().includes(busqueda.toLowerCase());
    const coincideSede = sedeFiltro === 'Todos' || d.sede === sedeFiltro;
    const coincideNivel = nivelFiltro === 'Todos' || d.nivel === nivelFiltro;
    
    return coincideNombre && coincideSede && coincideNivel;
  });

  // Contador de docentes por categoría
  const contadores = {
    total: docentes.length,
    cajamarca: docentes.filter(d => d.sede === 'Cajamarca').length,
    banosDelInca: docentes.filter(d => d.sede === 'Baños del Inca').length,
    primaria: docentes.filter(d => d.nivel === 'Primaria').length,
    secundaria: docentes.filter(d => d.nivel === 'Secundaria').length,
  };

  return (
    <div className="w-full">
      
      {/* HERO */}
      <section className="py-24 bg-gradient-to-br from-azul-oscuro to-verde-azulado text-[#013055] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#013055] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-amarillo-dorado rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <GraduationCap className="w-20 h-20 mx-auto mb-6 text-amarillo-dorado" />
            <h1 className="font-anton text-5xl md:text-7xl mb-6">
              Nuestro Equipo Docente
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              Conoce a los profesionales comprometidos con la excelencia educativa y el desarrollo integral de nuestros estudiantes
            </p>
          </motion.div>

          {/* Estadísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-3xl font-bold text-amarillo-dorado">{contadores.total}</div>
              <div className="text-sm">Docentes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-3xl font-bold text-amarillo-dorado">{contadores.cajamarca}</div>
              <div className="text-sm">Cajamarca</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-3xl font-bold text-amarillo-dorado">{contadores.banosDelInca}</div>
              <div className="text-sm">Baños del Inca</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-3xl font-bold text-amarillo-dorado">{contadores.primaria + contadores.secundaria}</div>
              <div className="text-sm">Niveles</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE FILTROS Y BÚSQUEDA */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          
          {/* BUSCADOR */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Buscar por nombre, área o correo..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full pl-14 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-verde-azulado focus:outline-none text-lg transition-all shadow-lg"
              />
              {busqueda && (
                <button
                  onClick={() => setBusqueda('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </motion.div>

          {/* FILTROS POR SEDE */}
          <div className="mb-8">
            <h3 className="text-center text-lg font-semibold text-azul-oscuro mb-4 flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5" />
              Filtrar por Sede
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {['Todos', 'Cajamarca', 'Baños del Inca'].map((sede) => (
                <button
                  key={sede}
                  onClick={() => {
                    setSedeFiltro(sede);
                    setNivelFiltro('Todos'); // Reset nivel al cambiar sede
                  }}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg ${
                    sedeFiltro === sede
                      ? 'bg-amarillo-dorado text-azul-oscuro scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {sede}
                  {sede !== 'Todos' && (
                    <span className="ml-2 text-sm opacity-75">
                      ({docentes.filter(d => d.sede === sede).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* FILTROS POR NIVEL (aparece cuando se selecciona una sede específica) */}
          <AnimatePresence>
            {sedeFiltro !== 'Todos' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-8"
              >
                <h3 className="text-center text-lg font-semibold text-azul-oscuro mb-4 flex items-center justify-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Filtrar por Nivel Educativo
                </h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  {['Todos', 'Primaria', 'Secundaria'].map((nivel) => (
                    <button
                      key={nivel}
                      onClick={() => setNivelFiltro(nivel)}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg ${
                        nivelFiltro === nivel
                          ? 'bg-verde-azulado text-white scale-105'
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {nivel}
                      {nivel !== 'Todos' && sedeFiltro !== 'Todos' && (
                        <span className="ml-2 text-sm opacity-75">
                          ({docentes.filter(d => d.sede === sedeFiltro && d.nivel === nivel).length})
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CONTADOR DE RESULTADOS */}
          <div className="text-center mb-8">
            <p className="text-gray-600 text-lg">
              Mostrando <span className="font-bold text-verde-azulado">{docentesFiltrados.length}</span> docente{docentesFiltrados.length !== 1 ? 's' : ''}
              {busqueda && ` para "${busqueda}"`}
            </p>
          </div>

        </div>
      </section>

      {/* GRID DE DOCENTES */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          
          {docentesFiltrados.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-20 h-20 mx-auto text-gray-300 mb-4" />
              <h3 className="text-2xl font-bold text-gray-400 mb-2">No se encontraron docentes</h3>
              <p className="text-gray-500">Intenta con otros términos de búsqueda o filtros</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {docentesFiltrados.map((docente, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setDocenteSeleccionado(docente)}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100"
                >
                  {/* Foto */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={docente.foto}
                      alt={docente.nombre}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Badge de nivel */}
                    <div className="absolute top-4 right-4 bg-amarillo-dorado text-azul-oscuro px-3 py-1 rounded-full text-xs font-bold">
                      {docente.nivel}
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-azul-oscuro mb-2">
                      {docente.nombre}
                    </h3>
                    
                    <p className="text-verde-azulado font-semibold mb-3">
                      {docente.area}
                    </p>

                    <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{docente.sede}</span>
                    </div>

                    <div className="flex items-start gap-2 text-gray-600 text-sm">
                      <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span className="break-all">{docente.correo}</span>
                    </div>

                    <button className="mt-4 w-full bg-azul-oscuro text-white py-2 rounded-lg font-semibold hover:bg-verde-azulado transition-colors">
                      Ver más
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* MODAL DE DETALLE */}
      <AnimatePresence>
        {docenteSeleccionado && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDocenteSeleccionado(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Header con foto */}
              <div className="relative h-80">
                <img
                  src={docenteSeleccionado.foto}
                  alt={docenteSeleccionado.nombre}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-azul-oscuro via-azul-oscuro/50 to-transparent" />
                
                {/* Botón cerrar */}
                <button
                  onClick={() => setDocenteSeleccionado(null)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 rounded-full p-2 transition-all"
                >
                  <X size={24} />
                </button>

                {/* Info sobre la foto */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h2 className="text-4xl font-bold mb-2">{docenteSeleccionado.nombre}</h2>
                  <p className="text-amarillo-dorado text-xl font-semibold mb-2">
                    {docenteSeleccionado.area}
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {docenteSeleccionado.nivel}
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {docenteSeleccionado.sede}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-8">
                
                {/* Mensaje */}
                <div className="mb-6">
                  <BookOpen className="w-8 h-8 text-verde-azulado mb-3" />
                  <p className="text-gray-700 text-lg leading-relaxed italic">
                    "{docenteSeleccionado.mensaje}"
                  </p>
                </div>

                {/* Contacto */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-bold text-azul-oscuro mb-4 flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Información de Contacto
                  </h3>
                  <a
                    href={`mailto:${docenteSeleccionado.correo}`}
                    className="text-verde-azulado hover:text-azul-oscuro font-semibold break-all"
                  >
                    {docenteSeleccionado.correo}
                  </a>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
