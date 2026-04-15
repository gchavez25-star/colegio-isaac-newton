import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '@/components/SEO';
import {
  BookOpen,
  Users,
  Heart,
  Zap,
  MessageCircle,
  MapPin,
  CheckCircle2
} from 'lucide-react';

/* =====================================================
   DATA DE SERVICIOS
===================================================== */

const serviciosData = [
  {
    id: 'academico',
    nombre: 'Académicos',
    icono: BookOpen,
    descripcion:
      'Programas de estudio innovadores y metodologías activas para el desarrollo integral.',
    items: [
      {
        titulo: 'Laboratorios Especializados',
        detalle:
          'Laboratorios de Física, Química y Biología equipados con tecnología moderna.',
        imagen:
          '/Header/Servicios/Laboratorio Especializados.optimized.webp'
      },
      {
        titulo: 'Programa de Idiomas',
        detalle:
          'Certificación en Inglés Richmond con inmersión cultural.',
        imagen:
          '/Header/Servicios/Programa Ingles.jpg'
      },
      {
        titulo: 'Plataforma Virtual SIEWEB',
        detalle:
          'Acceso 24/7 a notas, tareas, comunicados y materiales.',
        imagen:
          '/Header/Servicios/SIEWEB.optimized.webp'
      }
    ]
  },
  {
    id: 'extracurricular',
    nombre: 'Extracurriculares',
    icono: Users,
    descripcion:
      'Actividades que fortalecen talentos y habilidades.',
    items: [
      {
        titulo: 'Deportes',
        detalle:
          'Fútbol, vóley, básquet y natación.',
        imagen:
          '/Header/Servicios/Deportes .optimized.webp'
      },
      {
        titulo: 'Arte y Cultura',
        detalle:
          'Música, danza, teatro y artes plásticas.',
        imagen:
          '/Header/Servicios/Arte.optimized.webp'
      }
    ]
  },
  {
    id: 'bienestar',
    nombre: 'Bienestar',
    icono: Heart,
    descripcion:
      'Cuidado emocional y acompañamiento integral.',
    items: [
      {
        titulo: 'Departamento Psicopedagógico',
        detalle:
          'Orientación personalizada para estudiantes.',
        imagen:
          '/Header/Servicios/Psicologia.optimized.webp'
      }, 
      { titulo: 'Tópico y Enfermería', 
        detalle: 'Atención de primeros auxilios y seguimiento de salud escolar.', 
        imagen: '/Header/Servicios/Topico.optimized.webp' }, 

      { titulo: 'Escuela de Padres',
        detalle: 'Charlas y talleres para fortalecer las habilidades parentales.',
        imagen: '/Header/Servicios/Escuela.optimized.webp' }
    ]
  },
  {
    id: 'complementarios',
    nombre: 'Complementarios',
    icono: Zap,
    descripcion:
      'Servicios que facilitan la vida escolar.',
    items: [
      {
        titulo: 'Comedor y Cafetería',
        detalle:
          'Alimentación balanceada supervisada.',
        imagen:
          '/Header/Servicios/Comedor.optimized.webp'
      }
    ]
  }
];

/* =====================================================
   COMPONENTE
===================================================== */

export default function Servicios() {
  const [activeTab, setActiveTab] = useState(serviciosData[0].id);
  const [campus, setCampus] = useState('Cajamarca');

  const activeService = serviciosData.find(
    s => s.id === activeTab
  );

  /* ---------- CONFIG CAMPUS ---------- */
  const campusConfig = {
    Cajamarca: {
      telefono: '51932274369',
      label: 'Campus Cajamarca'
    },
    'Baños del Inca': {
      telefono: '51920438721',
      label: 'Campus Los Baños del Inca'
    }
  };

  /* ---------- DETECCIÓN MÓVIL ---------- */
  const isMobile =
    typeof window !== 'undefined' &&
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const mensaje = encodeURIComponent(
    `Hola, deseo información sobre los servicios del colegio en el ${campusConfig[campus].label}.`
  );

  const whatsappLink = isMobile
    ? `whatsapp://send?phone=${campusConfig[campus].telefono}&text=${mensaje}`
    : `https://web.whatsapp.com/send?phone=${campusConfig[campus].telefono}&text=${mensaje}`;

  return (
    <div className="min-h-screen  bg-gray-50">
      <SEO
        title="Servicios Educativos | Colegio Isaac Newton"
        description="Conoce los servicios académicos, extracurriculares, de bienestar y complementarios del Colegio Isaac Newton en Cajamarca y Los Baños del Inca."
        canonicalPath="/servicios"
        image="/Header/Servicios/Services.jpg"
      />

      {/* HERO SECTION - Estilo CBB */} 
     <section className="relative py-20 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Header/Servicios/Services.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-azul-oscuro to-verde-azulado opacity-80"></div>
      
      <div className="relative container mx-auto px-6 text-center max-w-4xl">
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


      {/* ================= TABS RESPONSIVOS ================= */}
      <section className="bg-white shadow sticky top-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 sm:gap-6 overflow-x-auto py-2 justify-start sm:justify-center">
            {serviciosData.map(servicio => (
              <button
                key={servicio.id}
                onClick={() => setActiveTab(servicio.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-3
                  whitespace-nowrap text-sm sm:text-base font-semibold
                  border-b-4 transition-all
                  ${
                    activeTab === servicio.id
                      ? 'text-azul-oscuro border-amarillo-dorado'
                      : 'text-gray-500 border-transparent hover:text-azul-oscuro'
                  }`}
              >
                <servicio.icono className="w-4 h-4 sm:w-5 sm:h-5" />
                {servicio.nombre}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTENIDO ================= */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="font-anton text-4xl text-verde-azulado mb-4">
                  {activeService.nombre}
                </h2>
                <p className="text-xl text-gray-600">
                  {activeService.descripcion}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {activeService.items.map((item, i) => (
                  <motion.div
                    key={i}
                    layout
                    whileHover={{ y: -6 }}
                    className="bg-white rounded-xl shadow border overflow-hidden text-center"
                  >
                    <div className="h-52 bg-gray-100">
                      <img
                        src={item.imagen}
                        alt={item.titulo}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-azul-oscuro mb-3">
                        {item.titulo}
                      </h3>
                      <p className="text-gray-600">
                        {item.detalle}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ================= CONTACTO WHATSAPP ================= */}
      <section className="py-16 bg-azul-oscuro/5">
        <div className="container mx-auto px-6 max-w-xl text-center">

          <h2 className="font-anton text-4xl text-azul-oscuro mb-6">
            Solicitar Información
          </h2>
          
          {/* Selector Campus con Layout Animation */}
          <motion.div
            layout
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            {Object.keys(campusConfig).map(nombre => (
              <motion.button
                layout
                key={nombre}
                onClick={() => setCampus(nombre)}
                className={`
                  flex items-center gap-3
                  px-5 py-4
                  rounded-xl
                  border-2
                  transition
                  text-[#013055]
                  ${
                    campus === nombre
                      ? 'border-verde-azulado bg-verde-azulado/10'
                      : 'border-gray-300 hover:border-verde-azulado'
                  }
                `}
              >
                <MapPin className="w-5 h-5 text-verde-azulado flex-shrink-0" />

                <span className="font-semibold whitespace-nowrap">
                  {campusConfig[nombre].label}
                </span>

                {campus === nombre && (
                  <CheckCircle2 className="w-6 h-6 text-verde-azulado ml-auto flex-shrink-0" />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Botón WhatsApp (sin número visible) */}
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#20ba5a] transition shadow"
          >
            <MessageCircle className="w-7 h-7" />
            Enviar WhatsApp
          </motion.a>

        </div>
      </section>

    </div>
  );
}
