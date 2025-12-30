import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Users,
  Heart,
  Zap,
  ChevronRight,
  Mail
} from 'lucide-react';

// =====================================================
// 1. ESTRUCTURA DE DATOS DE SERVICIOS
// =====================================================

const serviciosData = [
  {
    id: 'academico',
    nombre: 'Académicos',
    icono: BookOpen,
    descripcion: 'Programas de estudio innovadores y metodologías activas para el desarrollo integral.',
    items: [
      {
        titulo: 'Metodología STEAM',
        detalle: 'Integración de Ciencia, Tecnología, Ingeniería, Arte y Matemáticas en el currículo.',
        imagen: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop'
      },
      {
        titulo: 'Laboratorios Especializados',
        detalle: 'Laboratorios de Física, Química, Biología y Robótica equipados con tecnología de punta.',
        imagen: 'https://images.unsplash.com/photo-1581092917826-0716294b593c?w=400&h=250&fit=crop'
      },
      {
        titulo: 'Programa de Idiomas',
        detalle: 'Certificación en Inglés (Cambridge) y Francés, con inmersión cultural.',
        imagen: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=250&fit=crop'
      },
      {
        titulo: 'Plataforma Virtual SIEWEB',
        detalle: 'Acceso a notas, tareas, comunicados y material de estudio 24/7 para padres y alumnos.',
        imagen: 'https://images.unsplash.com/photo-1550009158-9dab1d216430?w=400&h=250&fit=crop'
      }
    ]
  },
  {
    id: 'extracurricular',
    nombre: 'Extracurriculares',
    icono: Users,
    descripcion: 'Talleres y actividades que complementan la formación académica y fomentan el talento.',
    items: [
      {
        titulo: 'Deportes',
        detalle: 'Fútbol, Vóley, Básquet y Natación con entrenadores especializados.',
        imagen: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=250&fit=crop'
      },
      {
        titulo: 'Arte y Cultura',
        detalle: 'Talleres de Música, Danza, Teatro y Artes Plásticas.',
        imagen: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?w=400&h=250&fit=crop'
      },
      {
        titulo: 'Robótica y Programación',
        detalle: 'Club de Robótica con participación en concursos nacionales e internacionales.',
        imagen: 'https://images.unsplash.com/photo-1535223289827-42f41e99899e?w=400&h=250&fit=crop'
      },
      {
        titulo: 'Liderazgo y Debate',
        detalle: 'Club de Debate y Modelo de Naciones Unidas (MUN) para desarrollar habilidades de oratoria.',
        imagen: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=400&h=250&fit=crop'
      }
    ]
  },
  {
    id: 'bienestar',
    nombre: 'Bienestar',
    icono: Heart,
    descripcion: 'Servicios de apoyo emocional, psicológico y de salud para toda la comunidad educativa.',
    items: [
      {
        titulo: 'Departamento Psicopedagógico',
        detalle: 'Orientación y apoyo individualizado para estudiantes y familias.',
        imagen: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=250&fit=crop'
      },
      {
        titulo: 'Tópico y Enfermería',
        detalle: 'Atención de primeros auxilios y seguimiento de salud escolar.',
        imagen: 'https://images.unsplash.com/photo-1576092768241-dec231879549?w=400&h=250&fit=crop'
      },
      {
        titulo: 'Escuela de Padres',
        detalle: 'Charlas y talleres para fortalecer las habilidades parentales.',
        imagen: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&h=250&fit=crop'
      }
    ]
  },
  {
    id: 'complementarios',
    nombre: 'Complementarios',
    icono: Zap,
    descripcion: 'Servicios esenciales que facilitan la vida escolar diaria.',
    items: [
      {
        titulo: 'Transporte Escolar',
        detalle: 'Rutas seguras y monitoreadas con personal capacitado.',
        imagen: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=250&fit=crop'
      },
      {
        titulo: 'Comedor y Cafetería',
        detalle: 'Menús balanceados y nutritivos supervisados por nutricionistas.',
        imagen: 'https://images.unsplash.com/photo-1551884170-09ea70b55707?w=400&h=250&fit=crop'
      },
      {
        titulo: 'Venta de Uniformes',
        detalle: 'Tienda escolar con uniformes oficiales y material deportivo.',
        imagen: 'https://images.unsplash.com/photo-1581092917826-0716294b593c?w=400&h=250&fit=crop'
      }
    ]
  }
];

// =====================================================
// 2. COMPONENTE PRINCIPAL SERVICIOS
// =====================================================

export default function Servicios() {
  const [activeTab, setActiveTab] = useState(serviciosData[0].id);
  const activeService = serviciosData.find(s => s.id === activeTab);

  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      
      {/* HERO SECTION - Estilo CBB */}
      <section className="py-20 bg-gradient-to-br from-azul-oscuro to-verde-azulado text-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-anton text-5xl md:text-6xl mb-4"
          >
            Nuestros Servicios
          </motion.h1>
          <p className="text-xl font-light">
            Todo lo que necesitas para una experiencia educativa completa y de calidad.
          </p>
        </div>
      </section>

      {/* TABS DE NAVEGACIÓN */}
      <section className="bg-white shadow-lg sticky top-0 z-10">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto whitespace-nowrap justify-center md:justify-start">
            {serviciosData.map((servicio) => (
              <button
                key={servicio.id}
                onClick={() => setActiveTab(servicio.id)}
                className={`
                  flex items-center gap-2 px-6 py-4 text-lg font-semibold transition-all relative
                  ${activeTab === servicio.id
                    ? 'text-azul-oscuro border-b-4 border-amarillo-dorado'
                    : 'text-gray-500 hover:text-azul-oscuro hover:bg-gray-50'
                  }
                `}
              >
                <servicio.icono className="w-5 h-5" />
                {servicio.nombre}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENIDO DINÁMICO */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            {activeService && (
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                
                {/* DESCRIPCIÓN GENERAL */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-center max-w-3xl mx-auto mb-12"
                >
                  <h2 className="font-anton text-4xl text-verde-azulado mb-4">
                    {activeService.nombre}
                  </h2>
                  <p className="text-xl text-gray-600">
                    {activeService.descripcion}
                  </p>
                </motion.div>

                {/* GRID DE SERVICIOS INDIVIDUALES */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {activeService.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                      className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 cursor-pointer"
                    >
                      {/* Imagen */}
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={item.imagen} 
                          alt={item.titulo} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      
                      {/* Contenido */}
                      <div className="p-6">
                        <h3 className="font-bold text-xl text-azul-oscuro mb-3 flex items-center gap-2">
                          <ChevronRight className="w-5 h-5 text-amarillo-dorado" />
                          {item.titulo}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.detalle}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* SECCIÓN DE CONTACTO (Opcional) */}
      <section className="py-16 bg-azul-oscuro/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-anton text-4xl text-azul-oscuro mb-4">
            ¿Interesado en un Servicio?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contáctanos para más detalles sobre horarios y costos.
          </p>
          <a
            href="/contacto" // Enlace a tu página de contacto
            className="inline-flex items-center gap-3 bg-verde-azulado text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-verde-azulado/90 transition-all shadow-lg"
          >
            <Mail className="w-6 h-6" />
            Solicitar Información
          </a>
        </div>
      </section>

    </div>
  );
}
