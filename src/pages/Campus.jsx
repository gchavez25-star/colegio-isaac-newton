import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, School, ChevronRight, BookOpen } from "lucide-react";
import SEO from "@/components/SEO";

/* =====================================================
   DATA DE CAMPUS
===================================================== */

const campusData = {
  Cajamarca: {
    seo: {
      title: "Campus Cajamarca | Colegio Isaac Newton",
      description:
        "Infraestructura moderna del Campus Cajamarca del Colegio Isaac Newton.",
      image: "/seo/campus-cajamarca.jpg",
    },
    whatsapp: "51953751275",
    direccion: "Jr. Cruz de Piedra 582, Cajamarca",
    mapa: "https://www.google.com/maps/place/Colegio+Isaac+Newton+Cajamarca/@-7.1583236,-78.5216892,17z/data=!3m1!4b1!4m6!3m5!1s0x91b25af8ca0f6cbb:0xb3d709b3b3a239d2!8m2!3d-7.1583289!4d-78.5191143!16s%2Fg%2F11c5rn8bt5?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D",

    General: {
      titulo: "Infraestructura General",
      descripcion:
        "Campus principal con infraestructura moderna orientada a la excelencia académica.",
      imagen: "/public/Campus/Campus Colegio.jpg",
      caracteristicas: [
        "Auditorio institucional",
        "Laboratorios especializados",
        "Biblioteca física y digital",
        "Áreas administrativas",
      ],
    },

    Primaria: {
      titulo: "Nivel Primaria",
      descripcion:
        "Espacios pedagógicos diseñados para el desarrollo integral del estudiante.",
      imagen: "/public/Campus/Espacios Pedagogicos.jpg",
      caracteristicas: [
        "Aulas interactivas",
        "Laboratorio de cómputo",
        "Patios recreativos",
        "Comedor escolar",
      ],
    },

    Secundaria: {
      titulo: "Nivel Secundaria",
      descripcion: "Infraestructura orientada a la formación preuniversitaria.",
      imagen: "/public/Campus/Infraestructura.jpg",
      caracteristicas: [
        "Laboratorios de ciencias",
        "Área de tecnología",
        "Auditorio académico",
      ],
    },
  },

  "Baños del Inca": {
    seo: {
      title: "Campus Los Baños del Inca | Colegio Isaac Newton",
      description:
        "Campus rodeado de naturaleza y amplios espacios de aprendizaje.",
      image: "/Campus/Los Baños del Inca/Patio 1.jpg",
    },
    whatsapp: "51920438721",
    direccion: "Jr. Yahuar Huacca #779, Baños del Inca",
    mapa: "https://www.google.com/maps/place/Colegio+Isaac+Newton+Los+Ba%C3%B1os+del+Inca/@-7.167169,-78.4619201,17z/data=!3m1!4b1!4m6!3m5!1s0x91b2456d977947b9:0x399e095184287eda!8m2!3d-7.1671743!4d-78.4593452!16s%2Fg%2F11vl1p_5lb?entry=ttu&g_ep=EgoyMDI2MDQwNS4wIKXMDSoASAFQAw%3D%3D",

    General: {
      titulo: "Infraestructura General",
      descripcion:
        "Campus rodeado de naturaleza que promueve el bienestar estudiantil.",
      imagen: "/Campus/Los Baños del Inca/Patio 1.jpg",
      caracteristicas: [
        "Áreas verdes",
        "Ambientes abiertos",
        "Canchas deportivas",
      ],
    },

    Primaria: {
      titulo: "Nivel Primaria",
      descripcion: "Ambientes amplios y naturales para el aprendizaje activo.",
      imagen: "/Campus/Los Baños del Inca/Primaria Baja.jpg",
      caracteristicas: [
        "Aulas iluminadas",
        "Sala de cómputo",
        "Patios amplios",
      ],
    },

    Secundaria: {
      titulo: "Nivel Secundaria",
      descripcion: "Formación académica en armonía con la naturaleza.",
      imagen: "/Campus/Los Baños del Inca/Pabellon.jpg",
      caracteristicas: ["Laboratorios", "Áreas deportivas", "Salas de estudio"],
    },
  },
};

const sedes = Object.keys(campusData);
const niveles = ["General", "Primaria", "Secundaria"];

/* =====================================================
   CTA WHATSAPP
===================================================== */

function WhatsAppCTA({ sede, nivel }) {
  const telefono = campusData[sede].whatsapp;
  const mensaje = encodeURIComponent(
    `Hola, deseo información sobre ${nivel} en el Campus ${sede} del Colegio Isaac Newton.`,
  );

  return (
    <a
      href={`https://wa.me/${telefono}?text=${mensaje}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg"
    >
      Contactar por WhatsApp
    </a>
  );
}

/* =====================================================
   COMPONENTE PRINCIPAL
===================================================== */

export default function Campus() {
  const [sedeActiva, setSedeActiva] = useState("Cajamarca");
  const [nivelActivo, setNivelActivo] = useState("General");

  const sedeData = campusData[sedeActiva];
  const nivelData = sedeData[nivelActivo];

  const seoTitle = `${nivelActivo} | ${sedeData.seo.title}`;
  const seoDescription = `${nivelData.descripcion} ${sedeData.seo.description}`;

  return (
    <div className="min-h-screen bg-gray-50 ">
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonicalPath="/campus"
        image={sedeData.seo.image}
      />

      {/* HERO */}
      <section
        className="relative py-24 text-white text-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/public/Campus/Campus.jpg')",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br" />

        {/* CONTENIDO */}
        <div className="relative z-10 container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-anton text-5xl md:text-6xl mb-4 text-white"
          >
            Campus Isaac Newton
          </motion.h1>

          <p className="text-xl max-w-2xl mx-auto text-[#ffcd00]">
            Infraestructura académica por sede
          </p>
        </div>
      </section>

      {/* SEDES */}
      <div className="flex justify-center border-b mt-10">
        {sedes.map((sede) => (
          <button
            key={sede}
            onClick={() => {
              setSedeActiva(sede);
              setNivelActivo("General");
            }}
            className={`px-8 py-3 font-semibold ${
              sede === sedeActiva
                ? "border-b-4 border-yellow-400 text-[#013055]"
                : "text-gray-500"
            }`}
          >
            <MapPin className="inline mr-2" />
            {sede}
          </button>
        ))}
      </div>

      {/* CONTENIDO */}
      <section className="py-16 container mx-auto px-6 grid lg:grid-cols-4 gap-8">
        {/* NIVELES */}
        <aside className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-4 text-[#013055]">Niveles</h3>
          {niveles.map((nivel) => (
            <button
              key={nivel}
              onClick={() => setNivelActivo(nivel)}
              className={`w-full mb-2 px-4 py-3 rounded-lg flex gap-2 items-center ${
                nivel === nivelActivo
                  ? "bg-teal-700 text-white "
                  : "hover:bg-gray-100  text-gray-700"
              }`}
            >
              <School />
              {nivel}
            </button>
          ))}
        </aside>

        {/* INFO */}
        <motion.div className="lg:col-span-3 space-y-10">
          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-4xl font-bold mb-4 text-[#013055]">
              {nivelData.titulo} - {sedeActiva}
            </h2>
            <p>{nivelData.descripcion}</p>
          </div>

          <img src={nivelData.imagen} className="rounded-xl shadow-xl" />

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-2xl font-bold mb-4 flex gap-2 text-[#013055]">
              <BookOpen /> Características
            </h3>
            <ul>
              {nivelData.caracteristicas.map((c, i) => (
                <li key={i} className="flex gap-2 text-gray-700">
                  <ChevronRight />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-10 rounded-xl shadow text-center">
            <h3 className="text-2xl font-bold mb-4 text-[#013055]">
              ¿Deseas más información?
            </h3>
            <WhatsAppCTA sede={sedeActiva} nivel={nivelActivo} />
          </div>

          <iframe
            src={sedeData.mapa}
            className="w-full h-96 rounded-xl"
            loading="lazy"
          />
        </motion.div>
      </section>
    </div>
  );
}

