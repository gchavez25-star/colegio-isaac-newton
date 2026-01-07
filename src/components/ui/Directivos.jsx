import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, BookOpen } from "lucide-react";

const Directivos = () => {
  const [selected, setSelected] = useState(null);

  const directivos = [
    {
      id: 1,
      nombre: "Ing. Noriega Alvaro, Deysi Aidee",
      cargo: "Gerente General",
      profesion: "Magister en Gestion de Proyectos",
      trayectoria: [
        "20 años de experiencia en gestión institucional",
        "Especialista en innovación educativa y acreditación escolar",
        "Expositor internacional en liderazgo y transformación digital",
        "Certificado en Harvard Leadership Program",
      ],
      imagen: "/Directivos/gerente.jpg",
    },
    {
      id: 2,
      nombre: "Mg. Soto Collazos, Ricardo Raúl",
      cargo: "Director",
      profesion: "Magíster en Educación y Liderazgo Pedagógico",
      trayectoria: [
        "15 años de experiencia docente y directiva",
        "Especialista en diseño curricular y evaluación formativa",
        "Certificada en liderazgo pedagógico y gestión escolar",
        "Miembro del Consejo Nacional de Educación",
      ],
      imagen: "/Directivos/directora.jpg",
    },
    {
      id: 3,
      nombre: "Lic. Asencio Carrera, Jorge Ivan",
      cargo: "Subdirector",
      profesion: "Licenciado en Educación y Gestión Institucional",
      trayectoria: [
        "10 años de experiencia en gestión educativa",
        "Implementador de proyectos de convivencia escolar",
        "Coordinador de equipos pedagógicos y operativos",
        "Especialista en resolución de conflictos y mediación",
      ],
      imagen: "/Directivos/subdirector.jpg",
    },
    {
      id: 4,
      nombre: "Lic. Ascurra Gutierrez, Alicia Marisol",
      cargo: "Subdirectora",
      profesion: "Licenciado en Educación y Gestión Institucional",
      trayectoria: [
        "10 años de experiencia en gestión educativa",
        "Implementador de proyectos de convivencia escolar",
        "Coordinador de equipos pedagógicos y operativos",
        "Especialista en resolución de conflictos y mediación",
      ],
      imagen: "/Directivos/subdirector.jpg",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-32 left-10 w-72 h-72 bg-[#013055] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ffcd00] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-anton text-[#013055] mb-4">
            Equipo Directivo
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Líderes comprometidos con la excelencia educativa.
          </p>
        </motion.div>

        {/* Gerente */}
        <div className="flex justify-center mb-12">
          <DirectivoCard
            persona={directivos[0]}
            setSelected={setSelected}
            destacado
          />
        </div>

        {/* Línea vertical */}
        <div className="flex justify-center mb-8">
          <div className="w-1 h-16 bg-[#013055] rounded-full" />
        </div>

        {/* Línea horizontal */}
        <div className="flex justify-center mb-10">
          <div className="h-1 w-2/3 bg-[#013055] rounded-full" />
        </div>

        {/* Director + Subdirectores (3 EN UNA SOLA FILA) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {directivos.slice(1).map((persona, index) => (
            <motion.div
              key={persona.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <DirectivoCard persona={persona} setSelected={setSelected} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-[#013055] p-8 text-white relative text-center">
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4"
                >
                  <X />
                </button>

                <img
                  src={selected.imagen}
                  className="w-32 h-32 mx-auto rounded-2xl object-cover border-4 border-white mb-4"
                />

                <h3 className="text-3xl font-anton">{selected.nombre}</h3>
                <p className="text-[#ffcd00] font-bold">{selected.cargo}</p>
                <p className="mt-2">{selected.profesion}</p>
              </div>

              <div className="p-8">
                <h4 className="flex items-center gap-2 text-2xl font-bold text-[#013055] mb-4">
                  <Award /> Trayectoria Profesional
                </h4>

                <ul className="space-y-3">
                  {selected.trayectoria.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="w-2 h-2 bg-[#ffcd00] rounded-full mt-2" />
                      {item}
                    </li>
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

const DirectivoCard = ({ persona, setSelected, destacado }) => (
  <motion.div
    whileHover={{ y: -8 }}
    className={`bg-white rounded-3xl shadow-xl border overflow-hidden ${
      destacado ? "max-w-md mx-auto" : ""
    }`}
  >
    <div className="bg-[#013055] p-6 text-white text-center">
      <h3 className="font-anton text-xl">{persona.nombre}</h3>
      <p className="text-[#ffcd00] font-semibold">{persona.cargo}</p>
    </div>

    <div className="-mt-12 flex justify-center">
      <img
        src={persona.imagen}
        className="w-28 h-28 rounded-2xl object-cover border-4 border-white shadow-lg"
      />
    </div>

    <div className="p-6 text-center">
      <p className="text-gray-600 mb-4">{persona.profesion}</p>
      <button
        onClick={() => setSelected(persona)}
        className="w-full py-3 bg-[#013055] text-white rounded-xl hover:bg-[#01253d]"
      >
        Ver Trayectoria Completa
      </button>
    </div>
  </motion.div>
);

export default Directivos;
