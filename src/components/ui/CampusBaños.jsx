import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  Video,
  Image,
  BookOpen,
  School,
  X
} from "lucide-react";
import { useState, useMemo } from "react";

/* =====================================================
   DATA CAMPUS BAÑOS DEL INCA
===================================================== */

const campusData = {
  nombre: "Campus Baños del Inca",
  direccion: "Av. Atahualpa s/n, Baños del Inca – Cajamarca",
  telefono: "932 274 370",
  email: "newtonbanos@inewton.edu.pe",
  horario: "Lunes a Viernes: 7:30 AM - 6:30 PM",

  mapa:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.018823!2d-78.4598!3d-7.1657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1",

  video:
    "https://www.youtube.com/embed/VIDEO_ID_BANOS",

  niveles: {
    Primaria: {
      titulo: "Nivel Primaria – Baños del Inca",
      descripcion:
        "Ambientes diseñados para el aprendizaje activo, con énfasis en el desarrollo emocional, cognitivo y social del estudiante.",
      imagen:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?w=1200",
      caracteristicas: [
        "Aulas amplias e iluminadas",
        "Laboratorio de cómputo",
        "Áreas verdes y recreativas",
        "Biblioteca escolar",
        "Seguridad permanente"
      ],
      galeria: [
        {
          titulo: "Aulas de Primaria",
          imagen:
            "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800"
        },
        {
          titulo: "Patios Recreativos",
          imagen:
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800"
        }
      ]
    },

    Secundaria: {
      titulo: "Nivel Secundaria – Baños del Inca",
      descripcion:
        "Infraestructura moderna orientada a la preparación académica, científica y tecnológica del estudiante.",
      imagen:
        "https://images.unsplash.com/photo-1541339907198-e0875663f974?w=1200",
      caracteristicas: [
        "Laboratorios de ciencias",
        "Salas multimedia",
        "Área de innovación y robótica",
        "Canchas deportivas",
        "Auditorio académico"
      ],
      galeria: [
        {
          titulo: "Laboratorio de Ciencias",
          imagen:
            "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800"
        },
        {
          titulo: "Sala de Innovación",
          imagen:
            "https://images.unsplash.com/photo-1581091012184-7c54cdded28d?w=800"
        }
      ]
    }
  }
};

const niveles = ["Primaria", "Secundaria"];

/* =====================================================
   BOTONES CTA
===================================================== */

const CTAButtons = () => (
  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
    <a
      href="https://wa.me/51932274370"
      target="_blank"
      className="px-8 py-4 rounded-xl bg-amarillo-dorado text-azul-oscuro
                 font-bold text-lg flex items-center justify-center gap-2
                 hover:scale-105 transition shadow-lg"
    >
      <Phone /> Contáctanos
    </a>

    <a
      href="/agenda-visita"
      className="px-8 py-4 rounded-xl bg-verde-azulado text-white
                 font-bold text-lg flex items-center justify-center gap-2
                 hover:bg-azul-oscuro hover:scale-105 transition shadow-lg"
    >
      <School /> Agenda una Visita
    </a>
  </div>
);

/* =====================================================
   COMPONENTE PRINCIPAL
===================================================== */

export default function InfraestructuraBanosDelInca() {
  const [nivelActivo, setNivelActivo] = useState("Primaria");
  const [modalOpen, setModalOpen] = useState(false);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  const contenido = useMemo(
    () => ({
      ...campusData,
      ...campusData.niveles[nivelActivo]
    }),
    [nivelActivo]
  );

  return (
    <div className="min-h-screen pt-24 bg-gray-50">

      {/* HERO */}
      <section className="py-20 bg-gradient-to-br from-azul-oscuro to-verde-azulado text-white text-center">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-anton text-5xl md:text-6xl mb-6"
          >
            Infraestructura Académica
            <br /> Campus Baños del Inca
          </motion.h1>

          <p className="text-xl md:text-2xl font-light mb-8">
            Educación de calidad en un entorno seguro y moderno
          </p>

          <CTAButtons />
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid lg:grid-cols-4 gap-8">

          {/* SIDEBAR */}
          <aside className="bg-white rounded-xl shadow-lg p-6 h-fit space-y-6">
            <h3 className="font-semibold text-xl text-azul-oscuro mb-4">
              Niveles Académicos
            </h3>

            {niveles.map((nivel) => (
              <button
                key={nivel}
                onClick={() => setNivelActivo(nivel)}
                className={`w-full mb-2 px-4 py-3 rounded-lg flex gap-2 items-center transition
                  ${
                    nivelActivo === nivel
                      ? "bg-verde-azulado text-white"
                      : "hover:bg-gray-100"
                  }`}
              >
                <School className="w-5 h-5" />
                {nivel}
              </button>
            ))}
          </aside>

          {/* INFO */}
          <motion.div
            key={nivelActivo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-3 space-y-10"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="font-anton text-4xl text-azul-oscuro mb-4">
                {contenido.titulo}
              </h2>
              <p className="text-gray-700 text-lg">
                {contenido.descripcion}
              </p>
            </div>

            <img
              src={contenido.imagen}
              alt={contenido.titulo}
              className="rounded-xl shadow-xl"
            />

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="font-bold text-2xl text-verde-azulado mb-4 flex gap-2">
                <BookOpen /> Características
              </h3>
              <ul className="space-y-3">
                {contenido.caracteristicas.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <ChevronRight className="text-amarillo-dorado" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="font-bold text-2xl mb-6 flex gap-2">
                <Image /> Galería
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {contenido.galeria.map((img, i) => (
                  <img
                    key={i}
                    src={img.imagen}
                    alt={img.titulo}
                    className="rounded-lg shadow-md"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
