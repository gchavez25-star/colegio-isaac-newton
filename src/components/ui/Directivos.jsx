import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X } from "lucide-react";
import SEO from "@/components/SEO";

const Directivos = () => {
  const [selected, setSelected] = useState(null);
  const [activeCardId, setActiveCardId] = useState(null);

  const directivos = [
    {
      id: 1,
      nombre: "Deysi Aidee Noriega Alfaro",
      cargo: "Gerente General",
      profesion: "Magíster en Administración y Gerencia Empresarial",
      imagen: "/Comunidad/Directivos/NORIEGA ALFARO DEYSI AIDEÉ.optimized.jpg",
      email: "dnoriega@inewton.edu.pe",
      linkedin: "#",
      trayectoria: [
        "20 años liderando instituciones educativas",
        "Especialista en innovación educativa",
        "Formación ejecutiva internacional",
      ],
    },
    {
      id: 2,
      nombre: "Ricardo Raúl Soto Collazos",
      cargo: "Director",
      profesion: "Magíster en Educación",
      imagen: "/Comunidad/Directivos/SOTO COLLAZOS RICARDO RAUL.jpg",
      email: "rsoto@inewton.edu.pe",
      linkedin: "#",
      trayectoria: ["Liderazgo pedagógico", "Gestión curricular"],
    },
    {
      id: 3,
      nombre: "Jorge Ivan Asencio Carrera",
      cargo: "Subdirector - Campus Cajamarca",
      profesion: "Licenciado en Educación",
      imagen: "/Comunidad/Directivos/ASENCIO-CARRERA-JORGE-IVAN.jpg",
      email: "jasencio@inewton.edu.pe",
      linkedin: "#",
      trayectoria: [
        "25 años de experiencia profesional",
        "Gestión institucional",
        "Convivencia escolar",
      ],
    },
    {
      id: 4,
      nombre: "Alicia Marisol Ascurra Gutierrez",
      cargo: "Subdirectora - Campus Los Baños del Inca",
      profesion: "Licenciada en Educación",
      imagen: "/Comunidad/Directivos/ALICIA-MARISOL-ASCURRA-GUTIERREZ.jpg",
      email: "aascurra@inewton.edu.pe",
      linkedin: "#",
      trayectoria: [
        "25 años de experiencia profesional",
        "Coordinación académica",
        "Gestión educativa",
      ],
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-gray-50 to-white">
      <SEO
        title="Equipo Directivo | Colegio Isaac Newton Cajamarca"
        description="Conoce al equipo directivo del Colegio Isaac Newton, institución educativa privada en Cajamarca y Los Baños del Inca comprometida con la excelencia académica."
        canonicalPath="/comunidad/directivos"
        image="/Comunidad/Directivos/SOTO COLLAZOS RICARDO RAUL.jpg"
      />
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-anton text-[#013055] mb-4">
            Equipo Directivo
          </h1>
          <div className="w-20 h-[2px] bg-[#ffcd00] mx-auto mb-4" />
          <p className="text-gray-600 max-w-xl mx-auto">
            Liderazgo estratégico orientado a la excelencia académica y
            formación integral.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {directivos.map((persona) => (
            <PremiumCard
              key={persona.id}
              persona={persona}
              setSelected={setSelected}
              activeCardId={activeCardId}
              setActiveCardId={setActiveCardId}
            />
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <ModalDirectivo selected={selected} setSelected={setSelected} />
        )}
      </AnimatePresence>
    </section>
  );
};

/* ================= CARD ================= */

const PremiumCard = ({
  persona,
  setSelected,
  activeCardId,
  setActiveCardId,
}) => {
  const isActive = activeCardId === persona.id;

  const handleCardClick = () => {
    const usesTouchInteraction =
      typeof window !== "undefined" &&
      window.matchMedia("(hover: none)").matches;

    if (usesTouchInteraction) {
      setActiveCardId(isActive ? null : persona.id);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      onClick={handleCardClick}
      className="group relative rounded-3xl overflow-hidden shadow-lg cursor-pointer"
    >
      <img
        src={persona.imagen}
        alt={`${persona.nombre}, ${persona.cargo} del Colegio Isaac Newton`}
        loading="lazy"
        decoding="async"
        className="w-full h-[380px] object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <div className="absolute bottom-0 p-6 text-white">
        <h3 className="text-lg font">{persona.nombre}</h3>
        <p className="text-[#ffcd00] text-sm">{persona.cargo}</p>
      </div>

      {/* HOVER */}
      <div
        className={`absolute inset-0 transition duration-300 backdrop-blur-md bg-white/10 flex flex-col justify-center items-center text-white p-6 text-center ${
          isActive ? "opacity-100" : "opacity-0"
        } group-hover:opacity-100`}
      >
        <h3 className="text-xl font-semibold mb-1">{persona.nombre}</h3>
        <p className="text-[#ffcd00] text-sm mb-2">{persona.cargo}</p>
        <p className="text-sm text-gray-200 mb-4">{persona.profesion}</p>

        <div className="flex gap-4 mb-4">
          <a
            href={`mailto:${persona.email}`}
            onClick={(e) => e.stopPropagation()}
            aria-label={`Enviar correo a ${persona.nombre}`}
            className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition"
          >
            <Mail size={18} />
          </a>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setSelected(persona);
          }}
          className="px-4 py-2 bg-white text-[#013055] rounded-lg text-sm font-medium hover:bg-gray-200 transition"
          type="button"
        >
          Ver perfil completo
        </button>
      </div>
    </motion.div>
  );
};

/* ================= MODAL ================= */

const ModalDirectivo = ({ selected, setSelected }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };

    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  });

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelected(null)}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="directivo-modal-title"
        className="bg-white rounded-3xl w-full max-w-4xl h-[90vh] overflow-hidden shadow-2xl flex flex-col relative"
        initial={{ scale: 0.9, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 40 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* BOTÓN CERRAR */}
        <button
          onClick={() => setSelected(null)}
          type="button"
          aria-label="Cerrar perfil del directivo"
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow"
        >
          <X size={20} className="text-[#013055]" />
        </button>

        {/* CONTENIDO */}
        <div className="flex flex-col md:flex-row h-full">
          {/* IMAGEN */}
          <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-6">
            <img
              src={selected.imagen}
              alt={`${selected.nombre}, ${selected.cargo}`}
              loading="lazy"
              decoding="async"
              className="max-h-full object-contain rounded-xl"
            />
          </div>

          {/* INFO */}
          <div className="md:w-1/2 p-8 overflow-y-auto">
            <div className="mb-6">
              <h3
                id="directivo-modal-title"
                className="text-2xl font-semibold text-[#013055]"
              >
                {selected.nombre}
              </h3>

              <p className="text-[#ffcd00] font-medium">{selected.cargo}</p>

              <p className="text-gray-500 mt-2">{selected.profesion}</p>
            </div>

            <div className="h-[1px] bg-gray-200 mb-6" />

            <h4 className="text-lg font-semibold text-[#013055] mb-4">
              Trayectoria Profesional
            </h4>

            <ul className="space-y-3 text-gray-700">
              {selected.trayectoria.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 bg-[#ffcd00] rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Directivos;
