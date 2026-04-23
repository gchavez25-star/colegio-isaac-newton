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
import { LOCATIONS } from "@/constants/locations";
import SEO from "@/components/SEO";

/* =====================================================
   DATA CAMPUS CAJAMARCA
===================================================== */

const campusData = {
  nombre: "Campus Cajamarca",
  direccion: LOCATIONS.cajamarca.address,
  telefono: "953 751 275",
  email: "secretaria.cajamarca@inewton.edu.pe",
  horario: "Lunes a Viernes: 7:30 AM - 6:30 PM",

  mapa: LOCATIONS.cajamarca.embedUrl,

  video: "https://www.youtube.com/embed/PvHZsaZvqNg",

  niveles: {
    Primaria: {
      titulo: "Nivel Primaria",
      descripcion:
        "Espacios pedagógicos diseñados para el desarrollo integral del estudiante, fomentando el aprendizaje activo, la creatividad y la formación en valores.",
      imagen: "/Campus/Cajamarca/Patio 3.optimized.jpg",
      caracteristicas: [
        "Aulas interactivas con pantallas digitales",
        "Laboratorio de cómputo educativo",
        "Patios recreativos seguros",
        "Comedor escolar supervisado",
      ],
      galeria: [
        {
          titulo: "Aulas Interactivas",
          imagen: "/Campus/Cajamarca/Aula.jpeg",
        },
        {
          titulo: "Laboratorio de Computo",
          imagen: "/Campus/Cajamarca/Laboratorio-de-computación.jpg",
        },
        {
          titulo: "Patios Recreativos Seguros",
          imagen: "/Campus/Cajamarca/Patio.optimized.jpg",
        },
      ],
    },

    Secundaria: {
      titulo: "Nivel Secundaria",
      descripcion:
        "Infraestructura moderna orientada a la formación preuniversitaria, la investigación científica y el desarrollo tecnológico.",
      imagen: "/Campus/Cajamarca/Secundaria.optimized.jpg",
      caracteristicas: [
        "Laboratorios de Física, Química y Biología",
        "Salas de estudio colaborativo",
        "Área tecnología",
        "Plataforma deportiva",
        "Auditorio institucional",
      ],
      galeria: [
        {
          titulo: "Laboratorio de Ciencias",
          imagen: "/Campus/Cajamarca/Laboratorio 2.jpg",
        },
        {
          titulo: "Espacios Amplios",
          imagen: "/Campus/Cajamarca/Patio 2.optimized.jpg",
        },
        {
          titulo: "Auditorio institucional",
          imagen: "/Campus/Cajamarca/Auditorio 1.jpg",
        },
      ],
    },
  },
};

const niveles = ["Primaria", "Secundaria"];

const ubicacion = {
  nombre: LOCATIONS.cajamarca.name,
  direccion: LOCATIONS.cajamarca.address,
};

const mapaEmbed = LOCATIONS.cajamarca.embedUrl;

const mapaExterno = LOCATIONS.cajamarca.mapUrl;

/* =====================================================
   BOTONES CTA
===================================================== */

const CTAButtons = () => (
  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
    <a
      href="https://wa.me/51953751275"
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

export default function InfraestructuraCajamarca() {
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
      <SEO
        title="Campus Cajamarca | Colegio Isaac Newton"
        description="Conoce el Campus Cajamarca del Colegio Isaac Newton: infraestructura para primaria y secundaria, aulas, laboratorios y espacios educativos modernos."
        canonicalPath="/campus/cajamarca"
        image="/Campus/Cajamarca/Pabellon A1.optimized.jpg"
      />
      {/* HERO */}
      <section
        className="relative min-h-[85vh] md:min-h-[90vh] 
             bg-cover bg-right-top text-white text-center 
             flex items-center"
        style={{
          backgroundImage: "url('/Contacto/Pabellon A1.optimized.webp')",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/20" />

        <div className="relative z-10 container mx-auto px-6 max-w-5xl">
          {/* TÍTULO */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-anton text-5xl md:text-6xl mb-6"
          >
            Infraestructura Académica
            <br /> Campus Cajamarca
          </motion.h1>

          {/* SUBTÍTULO */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-light mb-12"
          >
            Espacios modernos para Primaria y Secundaria
          </motion.p>

          {/* ICONOS DE CONTACTO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {/* MAPA */}
            <a
              href={mapaExterno}
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
              href="https://wa.me/51953751275"
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
              href="mailto:newtoncajamarca@inewton.edu.pe"
              className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full
                        hover:bg-white/20 transition backdrop-blur"
            >
              <Mail className="w-6 h-6 text-amarillo-dorado" />
              <span className="font-semibold">Correo</span>
            </a>
          </motion.div>

          {/* CTA */}
          <CTAButtons />
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid lg:grid-cols-4 gap-8">
          {/* MENU + INFO CAMPUS */}
          <aside className="bg-white rounded-xl shadow-lg p-6 h-fit space-y-6">
            {/* MENU */}
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
                        : "hover:bg-gray-100 "
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
                href={mapaExterno}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-verde-azulado transition"
              >
                <MapPin className="w-4 h-4 text-verde-azulado mt-1" />
                <span>
                  <strong>Dirección:</strong>
                  <br />
                  {LOCATIONS.cajamarca.shortAddress},
                  <br />
                  Cajamarca
                </span>
              </a>

              {/* TELÉFONO */}
              <a
                href="https://wa.me/51953751275"
                target="_blank"
                className="flex items-center gap-3 hover:text-verde-azulado transition"
              >
                <Phone className="w-4 h-4 text-verde-azulado" />
                <span>
                  <strong>Teléfono:</strong> 953 751 275
                </span>
              </a>

              {/* CORREO */}
              <a
                href="mailto:secretaria.cajamarca@inewton.edu.pe"
                target="_blank"
                className="flex items-center gap-3 hover:text-verde-azulado transition"
              >
                <Mail className="w-4 h-4 text-verde-azulado shrink-0 min-w-[16px]" />

                <span className="break-all">
                  <strong>Correo:</strong>
                  <br />
                  secretaria.cajamarca@inewton.edu.pe
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
            {/* TEXTO */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="font-anton text-4xl text-azul-oscuro mb-4">
                {contenido.titulo}
              </h2>
              <p className="text-gray-700 text-lg">{contenido.descripcion}</p>
            </div>

            {/* IMAGEN */}
            <img
              src={contenido.imagen}
              alt={contenido.titulo}
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 75vw, 90vw"
              className="rounded-xl shadow-xl"
            />

            {/* VIDEO INSTALACIONES */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="font-bold text-2xl text-azul-oscuro mb-4 flex gap-2">
                <Video className="text-verde-azulado" />
                Video de Instalaciones
              </h3>
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src={contenido.video}
                  className="w-full h-full"
                  allowFullScreen
                  title="Video instalaciones"
                />
              </div>
            </div>

            {/* CARACTERISTICAS */}
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

            {/* GALERIA */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="font-bold text-2xl mb-6 flex gap-2 text-[#013055]">
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
                      loading="lazy"
                      decoding="async"
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 90vw"
                      className="rounded-lg shadow-md hover:scale-105 transition"
                    />
                    <p className="text-center font-semibold mt-2 text-[#007a75]">
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

            {/* CTA FINAL */}
            <div className="bg-azul-oscuro text-white rounded-xl p-10 text-center">
              <h3 className="font-anton text-3xl mb-4">
                Agenda una visita guiada
              </h3>
              <p className="mb-6">
                Conoce nuestras instalaciones y vive la experiencia Isaac Newton
              </p>
              <CTAButtons />
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
                decoding="async"
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
