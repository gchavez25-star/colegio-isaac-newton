import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, BookOpen, Users } from "lucide-react";

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
      nivel: 1,
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
      nivel: 2,
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
      nivel: 3,
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">

      {/* Fondo decorativo institucional (muy leve) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-32 left-10 w-72 h-72 bg-[#013055] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ffcd00] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-anton text-[#013055] mb-4">
            Equipo Directivo
          </h2>
          <p className="text-xl font-montserrat text-gray-700 max-w-2xl mx-auto">
            Líderes comprometidos con la excelencia educativa y el desarrollo de nuestra comunidad.
          </p>
        </motion.div>

        {/* ORGANIGRAMA */}
        <div className="max-w-7xl mx-auto">

          {/* GERENCIA GENERAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <DirectivoCard persona={directivos[0]} setSelected={setSelected} destacado={true} />
          </motion.div>

          {/* Línea vertical */}
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "60px" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-1 bg-[#013055] rounded-full"
            />
          </div>

          {/* Línea horizontal */}
          <div className="relative mb-8">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="h-1 bg-[#013055] mx-auto rounded-full"
            />
          </div>

          {/* DIRECTOR – SUBDIRECTOR */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {directivos.slice(1).map((persona, index) => (
              <motion.div
                key={persona.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.2 }}
                className="flex justify-center"
              >
                <DirectivoCard persona={persona} setSelected={setSelected} destacado={false} />
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* MODAL */}
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
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white font-montserrat rounded-3xl shadow-2xl max-w-2xl w-full relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-[#013055] p-8 text-white relative">

                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2"
                >
                  <X size={24} />
                </button>

                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-xl border-4 border-white/30 mb-4">
                    <img
                      src={selected.imagen}
                      alt={selected.nombre}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-3xl font-anton text-center">
                    {selected.nombre}
                  </h3>
                  <p className="text-[#ffcd00] font-bold text-xl mt-1 text-center">
                    {selected.cargo}
                  </p>
                  <p className="text-white/90 mt-2 text-sm font-montserrat">
                    {selected.profesion}
                  </p>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-8 font-montserrat text-gray-700">

                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-[#013055]" />
                  <h4 className="text-2xl font-bold text-[#013055]">
                    Trayectoria Profesional
                  </h4>
                </div>

                <ul className="space-y-4">
                  {selected.trayectoria.map((logro, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-[#ffcd00] rounded-full mt-2" />
                      <span className="text-lg">{logro}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-gray-200">
                  <span className="flex items-center gap-2 px-4 py-2 bg-[#013055]/10 text-[#013055] rounded-full text-sm font-semibold">
                    <BookOpen className="w-4 h-4" />
                    Líder Educativo
                  </span>

                  <span className="flex items-center gap-2 px-4 py-2 bg-[#ffcd00]/20 text-[#8b6d00] rounded-full text-sm font-semibold">
                    <Award className="w-4 h-4" />
                    Certificado
                  </span>
                </div>

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
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
    className={`
      bg-white rounded-3xl shadow-xl hover:shadow-2xl
      border border-gray-200 transition-all duration-300
      overflow-hidden font-montserrat
      ${destacado ? "max-w-md w-full" : "max-w-sm w-full"}
    `}
  >

    {/* Header */}
    <div
      className={`
        bg-[#013055] p-6 text-white relative overflow-hidden
        ${destacado ? "pb-20" : "pb-16"}
      `}
    >
      {destacado && (
        <div className="absolute top-4 right-4 bg-[#ffcd00] text-[#013055] px-3 py-1 rounded-full text-xs font-bold">
          GERENCIA
        </div>
      )}

      <div className="relative z-10 text-center">
        <h3 className={`font-bold font-anton ${destacado ? "text-2xl" : "text-xl"} mb-1`}>
          {persona.nombre}
        </h3>
        <p className="text-[#ffcd00] font-semibold">
          {persona.cargo}
        </p>
      </div>
    </div>

    {/* Foto */}
    <div className="flex justify-center -mt-16 mb-4 relative z-20">
      <div
        className={`${destacado ? "w-32 h-32" : "w-28 h-28"}
        rounded-2xl overflow-hidden shadow-xl border-4 border-white`}
      >
        <img
          src={persona.imagen}
          alt={persona.nombre}
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* Contenido */}
    <div className="px-6 pb-6 text-center">
      <p className={`text-gray-600 ${destacado ? "text-base" : "text-sm"} mb-6`}>
        {persona.profesion}
      </p>

      <button
        onClick={() => setSelected(persona)}
        className="w-full py-3 rounded-xl font-semibold 
        bg-[#013055] text-white hover:bg-[#01253d]
        transition-all duration-300 font-montserrat"
      >
        Ver Trayectoria Completa
      </button>
    </div>

  </motion.div>
);

export default Directivos;
