import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

const Directivos = () => {
  const [selected, setSelected] = useState(null);

  const directivos = [
    {
      id: 1,
      nombre: "Deysi Noriega",
      cargo: "Gerente General",
      profesion: "Magíster en Gestión de Proyectos",
      imagen: "/Comunidad/Directivos/noriega-deysi.png",
      email: "direccion@inewton.edu.pe",
      linkedin: "#",
      trayectoria: [
        "20 años liderando instituciones educativas",
        "Especialista en innovación educativa",
        "Formación ejecutiva internacional",
      ],
    },
    {
      id: 2,
      nombre: "Ricardo Soto",
      cargo: "Director",
      profesion: "Magíster en Educación",
      imagen: "/Directivos/director.jpg",
      email: "director@inewton.edu.pe",
      linkedin: "#",
      trayectoria: ["Liderazgo pedagógico", "Gestión curricular"],
    },
    {
      id: 3,
      nombre: "Jorge Asencio",
      cargo: "Subdirector",
      profesion: "Licenciado en Educación",
      imagen: "/Directivos/subdirector.jpg",
      email: "subdirector@inewton.edu.pe",
      linkedin: "#",
      trayectoria: ["Gestión institucional", "Convivencia escolar"],
    },
    {
      id: 4,
      nombre: "Alicia Ascurra",
      cargo: "Subdirectora",
      profesion: "Licenciada en Educación",
      imagen: "/Docentes/Los Baños del Inca/Directivo/ascurra.jpg",
      email: "subdireccion@inewton.edu.pe",
      linkedin: "#",
      trayectoria: ["Coordinación académica", "Gestión educativa"],
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-anton text-[#013055] mb-4">
            Equipo Directivo
          </h2>
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
            />
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selected.imagen}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-4 left-6 text-white">
                  <h3 className="text-2xl font-semibold">{selected.nombre}</h3>
                  <p className="text-[#ffcd00]">{selected.cargo}</p>
                </div>
              </div>

              <div className="p-6">
                <h4 className="font-semibold text-[#013055] mb-3">
                  Trayectoria Profesional
                </h4>
                <ul className="space-y-2 text-gray-700">
                  {selected.trayectoria.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const PremiumCard = ({ persona, setSelected }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="group relative rounded-3xl overflow-hidden shadow-lg cursor-pointer"
    >
      {/* IMAGEN */}
      <img src={persona.imagen} className="w-full h-[380px] object-cover" />

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* INFO BASE */}
      <div className="absolute bottom-0 p-6 text-white">
        <h3 className="text-lg font-semibold leading-tight">
          {persona.nombre}
        </h3>
        <p className="text-[#ffcd00] text-sm">{persona.cargo}</p>
      </div>

      {/* HOVER GLASS */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 backdrop-blur-md bg-white/10 flex flex-col justify-center items-center text-white p-6 text-center">
        <h3 className="text-xl font-semibold mb-1">{persona.nombre}</h3>

        <p className="text-[#ffcd00] text-sm mb-2">{persona.cargo}</p>

        <p className="text-sm text-gray-200 mb-4">{persona.profesion}</p>

        {/* ACCIONES */}
        <div className="flex gap-4 mb-4">
          <a
            href={`mailto:${persona.email}`}
            className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition"
          >
            <Mail size={18} />
          </a>

          <a
            href={persona.linkedin}
            target="_blank"
            className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition"
          >
            <Linkedin size={18} />
          </a>
        </div>

        <button
          onClick={() => setSelected(persona)}
          className="px-4 py-2 bg-white text-[#013055] rounded-lg text-sm font-medium hover:bg-gray-200 transition"
        >
          Ver perfil completo
        </button>
      </div>
    </motion.div>
  );
};

export default Directivos;
