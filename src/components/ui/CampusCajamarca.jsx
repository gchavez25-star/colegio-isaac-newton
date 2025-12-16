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
   DATA CAMPUS
===================================================== */

const campusData = {
  nombre: "Campus Cajamarca",
  direccion: "Jr. Cruz de Piedra 582, Cajamarca",
  telefono: "932 274 369",
  email: "newtoncajamarca@inewton.edu.pe",
  horario: "Lunes a Viernes: 7:30 AM - 6:30 PM",

  mapa: "www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d896.8977769707326!2d-78.51926669999999!3d-7.158194300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b25af8ca0f6cbb%3A0xb3d709b3b3a239d2!2sC.P.C.%20Isaac%20Newton!5e1!3m2!1ses-419!2spe!4v1765823134766!5m2!1ses-419!2spe",

  video:
    "https://www.youtube.com/embed/VIDEO_ID_AQUI",

  niveles: {
    Primaria: {
      titulo: "Nivel Primaria",
      descripcion:
        "Espacios pedagógicos diseñados para el desarrollo integral del estudiante, fomentando el aprendizaje activo, la creatividad y la formación en valores.",
      imagen:
        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1200",
      caracteristicas: [
        "Aulas interactivas con pantallas digitales",
        "Laboratorio de cómputo educativo",
        "Patios recreativos seguros",
        "Comedor escolar supervisado"
      ],
      galeria: [
        {
          titulo: "Aulas Interactivas",
          imagen:
            "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800"
        },
        {
          titulo: "Laboratorio de Computo",
          imagen:
            "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800"
        },
        {
          titulo: "Patios recreativos seguros",
          imagen:
            "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800"
        }
      ]
    },

    Secundaria: {
      titulo: "Nivel Secundaria",
      descripcion:
        "Infraestructura moderna orientada a la formación preuniversitaria, la investigación científica y el desarrollo tecnológico.",
      imagen:
        "https://images.unsplash.com/photo-1541339907198-e0875663f974?w=1200",
      caracteristicas: [
        "Laboratorios de Física, Química y Biología",
        "Salas de estudio colaborativo",
        "Área tecnología",
        "Plataforma deportiva",
        "Auditorio institucional"
      ],
      galeria: [
        {
          titulo: "Laboratorio de Ciencias",
          imagen:
            "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800"
        },
        {
          titulo: "Área de Tecnologia",
          imagen:
            "https://images.unsplash.com/photo-1581091012184-7c54cdded28d?w=800"
        },
        {
          titulo: "Auditorio institucional",
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
      href="https://wa.me/51932274369"
      target="_blank"
      rel="noopener noreferrer"
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

export default function InfraestructuraCajamarca() {
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
            <br /> Campus Cajamarca
            </motion.h1>

            <p className="text-xl md:text-2xl font-light mb-8">
            Espacios modernos para Primaria y Secundaria
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
                href="https://www.google.com/maps?q=Av.+Héroes+del+Cenepa+123,+Cajamarca"
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
                href="https://wa.me/51932274369"
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
                href="mailto:cajamarca@isaacnewton.edu.pe"
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
                href="https://www.google.com/maps?q=Av.+Héroes+del+Cenepa+123,+Cajamarca"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-verde-azulado transition"
            >
                <MapPin className="w-4 h-4 text-verde-azulado mt-1" />
                <span>
                <strong>Dirección:</strong><br />
                Jr. Cruz de Piedra 582,<br />
                Cajamarca
                </span>
            </a>

            {/* TELÉFONO */}
            <a
                href="https://wa.me/51932274369"
                target="_blank"
                className="flex items-center gap-3 hover:text-verde-azulado transition"
            >
                <Phone className="w-4 h-4 text-verde-azulado" />
                <span>
                <strong>Teléfono:</strong> 932 274 369
                </span>
            </a>

            {/* CORREO */}
            <a
            href="mailto:newtoncajamarca@inewton.edu.pe"
            target="_blank"
            className="flex items-center gap-3 hover:text-verde-azulado transition"
            >
            <Mail  className="w-4 h-4 text-verde-azulado shrink-0 min-w-[16px]" />

            <span className="break-all">
              <strong>Correo:</strong><br />
              newtoncajamarca@inewton.edu.pe
            </span>

            </a>


            {/* HORARIO */}
            <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-verde-azulado" />

            <span>
                <strong>Horario:</strong><br />
                Lunes a Viernes<br />
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
              <h3 className="font-bold text-2xl text-azul-oscuro mb-4 flex gap-2">
                <MapPin className="text-verde-azulado" />
                Cómo Llegar
              </h3>
              <div className="h-96 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src={contenido.mapa}
                  className="w-full h-full"
                  loading="lazy"
                  title="Mapa Campus Cajamarca"
                />
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
