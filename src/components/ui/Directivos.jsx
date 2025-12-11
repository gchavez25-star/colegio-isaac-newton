import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const Directivos = () => {
  const [selected, setSelected] = useState(null);

  const directivos = [
    {
      id: 1,
      nombre: "Dr. Juan Pérez Gonzales",
      cargo: "Gerente General",
      profesion: "Doctor en Administración y Gestión Educativa",
      trayectoria: `
        • 20 años de experiencia en gestión institucional.
        • Especialista en innovación educativa y acreditación escolar.
        • Expositor internacional en liderazgo y transformación digital.
      `,
      imagen: "/Directivos/gerente.jpg",
    },
    {
      id: 2,
      nombre: "Mg. Carla Ruiz Mendoza",
      cargo: "Directora",
      profesion: "Magíster en Educación y Liderazgo Pedagógico",
      trayectoria: `
        • 15 años de experiencia docente y directiva.
        • Especialista en diseño curricular y evaluación formativa.
        • Certificada en liderazgo pedagógico y gestión escolar.
      `,
      imagen: "/Directivos/directora.jpg",
    },
    {
      id: 3,
      nombre: "Lic. Roberto Sánchez Torres",
      cargo: "Subdirector",
      profesion: "Licenciado en Educación y Gestión Institucional",
      trayectoria: `
        • 10 años de experiencia en gestión educativa.
        • Implementador de proyectos de convivencia escolar.
        • Coordinador de equipos pedagógicos y operativos.
      `,
      imagen: "/Directivos/subdirector.jpg",
    },
  ];

  return (
    <section className="py-28 bg-[#f4f7fb] relative">
      
      {/* TÍTULO */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-anton text-center text-azul-oscuro mb-20"
      >
        Equipo Directivo
      </motion.h2>

      {/* ORGANIGRAMA */}
      <div className="container mx-auto px-6 flex flex-col items-center relative">
        
        {/* Línea vertical animada */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "80%" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="absolute left-1/2 -translate-x-1/2 w-1 bg-verde-azulado/40 rounded-full"
        />

        {/* TARJETAS EN ORGANIGRAMA VERTICAL */}
        <div className="flex flex-col gap-16 relative z-10">

          {directivos.map((persona, index) => (
            <motion.div
              key={persona.id}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.3 }}
              className="relative flex flex-col items-center"
            >
              {/* Punto de conexión */}
              <div className="w-6 h-6 bg-amarillo-dorado rounded-full border-4 border-white shadow-lg mb-6" />

              {/* TARJETA PREMIUM */}
              <div className="
                bg-white border border-gray-200
                rounded-3xl shadow-xl p-10 w-full max-w-lg
                text-center hover:shadow-2xl transition-all duration-300
              ">
                
                {/* FOTO */}
                <div className="w-36 h-36 mx-auto rounded-full overflow-hidden shadow-lg mb-6">
                  <img
                    src={persona.imagen}
                    alt={persona.nombre}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src =
                        'https://via.placeholder.com/300x300/013055/ffffff?text=Foto';
                    }}
                  />
                </div>

                {/* NOMBRE */}
                <h3 className="text-3xl font-bold text-azul-oscuro">
                  {persona.nombre}
                </h3>

                {/* CARGO */}
                <p className="text-verde-azulado text-xl font-semibold mt-2">
                  {persona.cargo}
                </p>

                {/* PROFESIÓN */}
                <p className="text-gray-600 mt-3 leading-relaxed">
                  {persona.profesion}
                </p>

                {/* BOTÓN */}
                <button
                  onClick={() => setSelected(persona)}
                  className="
                    mt-6 px-6 py-3 rounded-full font-semibold 
                    bg-azul-oscuro text-white
                    hover:bg-verde-azulado transition-all duration-300
                  "
                >
                  Ver trayectoria
                </button>
              </div>
            </motion.div>
          ))}

        </div>
      </div>

      {/* MODAL DE TRAYECTORIA */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-2xl p-10 max-w-xl w-full relative"
            >
              {/* Cerrar */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-azul-oscuro"
              >
                <X size={28} />
              </button>

              {/* Foto */}
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg mb-6">
                <img
                  src={selected.imagen}
                  alt={selected.nombre}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-3xl text-center font-bold text-azul-oscuro">
                {selected.nombre}
              </h3>
              <p className="text-verde-azulado text-center font-semibold text-xl">
                {selected.cargo}
              </p>

              <p className="text-gray-600 text-center mt-2">
                {selected.profesion}
              </p>

              <h4 className="mt-8 mb-2 font-semibold text-azul-oscuro text-xl">
                Trayectoria Profesional
              </h4>

              <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                {selected.trayectoria}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Directivos;
