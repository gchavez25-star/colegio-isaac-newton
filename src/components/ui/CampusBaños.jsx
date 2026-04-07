import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
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
  X,
} from "lucide-react";
import { useState, useMemo } from "react";

/* =====================================================
   DATA CAMPUS BAÑOS DEL INCA
===================================================== */

const campusData = {
  nombre: "Campus Los Baños del Inca",
  direccion: "Jr. Yahuar Huacca N° 779, Los Baños del Inca",
  telefono: "920 438 721",
  email: "secretariabi@inewton.edu.pe",
  horario: "Lunes a Viernes: 7:30 AM – 6:30 PM",

  video: "https://www.youtube.com/embed/PvHZsaZvqNg",

  niveles: {
    Primaria: {
      titulo: "Nivel Primaria",
      descripcion:
        "Ambientes diseñados para el desarrollo integral del estudiante en un entorno natural y seguro, promoviendo el aprendizaje activo y el bienestar emocional.",
      imagen: "/Campus/Los Baños del Inca/Juego Primaria.jpg",
      caracteristicas: [
        "Aulas modernas e iluminadas",
        "Sala de cómputo equipada",
        "Área de Psicología Educativa",
        "Patios recreativos amplios",
        "Acompañamiento pedagógico permanente",
      ],
      galeria: [
        {
          titulo: "Aulas modernas",
          imagen: "/Campus/Los Baños del Inca/Juego Primaria 2.jpg",
        },
        {
          titulo: "Sala de cómputo",
          imagen: "/Campus/Los Baños del Inca/Laboratorio 1.jpg",
        },
      ],
    },

    Secundaria: {
      titulo: "Nivel Secundaria",
      descripcion:
        "Infraestructura orientada al desarrollo académico, tecnológico y personal del estudiante, en contacto con la naturaleza.",
      imagen: "/Campus/Los Baños del Inca/Plataforma.jpg",
      caracteristicas: [
        "Laboratorios y aulas especializadas",
        "Área de tecnología educativa",
        "Tópico y enfermería escolar",
        "Áreas deportivas al aire libre",
        "Espacios verdes para el aprendizaje",
      ],
      galeria: [
        {
          titulo: "Áreas deportivas",
          imagen: "/Campus/Los Baños del Inca/Local.jpg",
        },
        {
          titulo: "Tópico escolar",
          imagen:
            "https://images.unsplash.com/photo-1580281658629-9c5a77f9c1d6?w=800",
        },
      ],
    },
  },
};

const niveles = ["Primaria", "Secundaria"];

const ubicacion = {
  nombre: "Campus Los Baños del Inca",
  direccion: "Jr. Yahuar Huacca N° 779, Los Baños del Inca",
  lat: -7.1677904,
  lng: -78.4584945,
};

const esMovil = typeof window !== "undefined" && window.innerWidth < 768;
const zoom = esMovil ? 16 : 17;

const mapaEmbed = `https://www.google.com/maps?q=${ubicacion.lat},${
  ubicacion.lng
}(${encodeURIComponent(ubicacion.nombre)})&z=${zoom}&hl=es&output=embed`;

const mapaExterno = `https://www.google.com/maps/search/?api=1&query=${ubicacion.lat},${ubicacion.lng}`;

/* =====================================================
   BOTONES CTA
===================================================== */

const CTAButtons = () => (
  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
    <a
      href="https://wa.me/51920438721"
      target="_blank"
      rel="noopener noreferrer"
      className="px-8 py-4 rounded-xl bg-amarillo-dorado text-azul-oscuro
                 font-bold text-lg flex items-center justify-center gap-2
                 hover:scale-105 transition shadow-lg"
    >
      <Phone /> Contáctanos
    </a>

    <Link
      to="/agenda-visita"
      className="px-8 py-4 rounded-xl bg-verde-azulado text-white
                font-bold text-lg flex items-center justify-center gap-2
                hover:bg-azul-oscuro hover:scale-105 transition shadow-lg"
    >
      <School />
      Agenda una Visita
    </Link>
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
      ...campusData.niveles[nivelActivo],
    }),
    [nivelActivo],
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section
        className="relative min-h-[85vh] md:min-h-[90vh] 
             bg-cover bg-right-top text-white text-center 
             flex items-center"
        style={{
          backgroundImage: "url('/Campus/Los Baños del Inca/Ingreso.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/20" />

        <div className="relative z-10 container mx-auto px-6 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-anton text-5xl md:text-6xl mb-6"
          >
            Infraestructura Académica
            <br /> Campus Los Baños del Inca
          </motion.h1>

          <p className="text-xl md:text-2xl font-light mb-8">
            Educación en armonía con la naturaleza
          </p>

          {/* ICONOS DE CONTACTO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            {/* MAPA */}
            <a
              href="https://www.google.com/maps/place/Colegio+Isaac+Newton/@-7.1677851,-78.4633654,17z/data=!3m1!4b1!4m6!3m5!1s0x91b2456d977947b9:0x399e095184287eda!8m2!3d-7.1677904!4d-78.4584945!16s%2Fg%2F11vl1p_5lb?authuser=0&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full
                        hover:bg-white/20 transition backdrop-blur"
            >
              <MapPin className="w-6 h-6 text-amarillo-dorado" />
              <span className="font-semibold">Cómo llegar</span>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/51920438721"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full
                        hover:bg-white/20 transition backdrop-blur"
            >
              <Phone className="w-6 h-6 text-amarillo-dorado" />
              <span className="font-semibold">WhatsApp</span>
            </a>

            {/* CORREO */}
            <a
              href="mailto:secretariabi@inewton.edu.pe"
              className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full
                        hover:bg-white/20 transition backdrop-blur"
            >
              <Mail className="w-6 h-6 text-amarillo-dorado" />
              <span className="font-semibold">Correo</span>
            </a>
          </motion.div>

          {/* BOTONES CTA */}
          <CTAButtons />
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid lg:grid-cols-4 gap-8">
          {/* SIDEBAR */}
          <aside className="bg-white rounded-xl shadow-lg p-6 h-fit space-y-6">
            <div>
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
                      ? "bg-verde-azulado text-white shadow"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <School className="w-5 h-5" />
                  {nivel}
                </button>
              ))}
            </div>
            {/* DIVISOR */}
            <div className="border-t pt-4" />

            {/* INFO CAMPUS */}
            <div className="space-y-4 text-gray-700 text-sm">
              {/* DIRECCIÓN */}
              <a
                href="https://www.google.com/maps?q=-7.1677904,-78.4584945"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-verde-azulado transition"
              >
                <MapPin className="w-4 h-4 text-verde-azulado mt-1" />
                <span>
                  <strong>Dirección:</strong>
                  <br />
                  Jr. Yahuar Huacca #779,
                  <br />
                  Los Baños del Inca
                </span>
              </a>

              {/* TELÉFONO */}
              <a
                href="https://wa.me/51920438721"
                target="_blank"
                className="flex items-center gap-3 hover:text-verde-azulado transition"
              >
                <Phone className="w-4 h-4 text-verde-azulado" />
                <span>
                  <strong>Teléfono:</strong> 920 438 721
                </span>
              </a>

              {/* CORREO */}
              <a
                href="mailto:secretariabi@inewton.edu.pe"
                target="_blank"
                className="flex items-center gap-3 hover:text-verde-azulado transition"
              >
                <Mail className="w-4 h-4 text-verde-azulado shrink-0 min-w-[16px]" />

                <span className="break-all">
                  <strong>Correo:</strong>
                  <br />
                  secretariabi@inewton.edu.pe
                </span>
              </a>

              {/* HORARIO */}
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-verde-azulado" />

                <span>
                  <strong>Horario:</strong>
                  <br />
                  Lunes a Viernes
                  <br />
                  7:30 AM – 6:30 PM
                </span>
              </div>
            </div>
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
              <p className="text-gray-700 text-lg">{contenido.descripcion}</p>
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
                  <div
                    key={i}
                    className="cursor-pointer"
                    onClick={() => {
                      setImagenSeleccionada(img);
                      setModalOpen(true);
                    }}
                  >
                    <img
                      src={img.imagen}
                      alt={img.titulo}
                      className="rounded-lg shadow-md hover:scale-105 transition"
                    />
                    <p className="text-center font-semibold mt-2">
                      {img.titulo}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* MAPA */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="font-bold text-2xl text-azul-oscuro mb-4 flex gap-2 items-center">
                <MapPin className="text-verde-azulado" />
                Cómo Llegar
              </h3>

              <p className="mb-4 text-gray-600">
                <strong>{ubicacion.nombre}</strong>
                <br />
                {ubicacion.direccion}
              </p>

              <div className="h-96 rounded-xl overflow-hidden shadow-lg relative">
                <iframe
                  src={mapaEmbed}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa ${ubicacion.nombre}`}
                />

                {/* Botón Abrir en Google Maps */}
                <a
                  href={mapaExterno}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-verde-azulado text-white px-4 py-2 rounded-lg shadow-lg hover:bg-opacity-90 transition text-sm font-semibold"
                >
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="max-w-4xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={imagenSeleccionada.imagen}
                alt={imagenSeleccionada.titulo}
                className="rounded-xl"
              />
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 text-white"
              >
                <X size={32} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
