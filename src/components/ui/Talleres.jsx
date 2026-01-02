import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Talleres() {
  const [activeIndex, setActiveIndex] = useState(null);

  const talleres = [
    { titulo: "Vóley", descripcion: "Aprende técnica, coordinación y trabajo en equipo.", imagen: "/Inicio/Voley.png", icono: "🏐" },
    { titulo: "Música", descripcion: "Desarrolla tu talento musical con instrumentos.", imagen: "/Inicio/Musica.png", icono: "🎸" },
    { titulo: "Danza típica", descripcion: "Expresa tu cultura y movimiento.", imagen: "/Inicio/Danza.png", icono: "💃" },
    { titulo: "Fútbol", descripcion: "Refuerza tu resistencia y disciplina deportiva.", imagen: "/Inicio/Futbol.png", icono: "⚽" },
  ];

  const whatsappNumbers = {
    cajamarca: "51987654321",
    baños: "51912345678",
  };

  const openWhatsApp = (campus) => {
    const numero = whatsappNumbers[campus];
    if (!numero) return;
    const url = `https://wa.me/${numero}?text=Hola%20quiero%20más%20información%20sobre%20los%20talleres`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <section className="relative w-full bg-white">
        <div
          className="w-full h-[480px] md:h-[520px] bg-cover bg-center"
          style={{ backgroundImage: "url('/Inicio/TALLERES.png')" }}
        />
        <div className="relative -mt-24 z-10 pb-10">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#fccc00] px-10 py-4 rounded-xl shadow-xl"
            >
              <h1 className="font-anton text-5xl md:text-6xl text-azul-oscuro tracking-tight">
                TALLERES
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-anton text-verde-azulado mt-4"
            >
              Extracurriculares
            </motion.p>

            <p className="max-w-3xl mx-auto mt-4 text-center text-gray-600 px-6">
              En Newton Sport, nos enfocamos en el desarrollo integral de cada
              estudiante. Por eso, ofrecemos una variedad de talleres diseñados
              para potenciar habilidades y despertar nuevas pasiones por el
              deporte.
            </p>
          </div>
        </div>
      </section>

      {/* ================= GRID DE TALLERES ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {talleres.map((taller, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl duration-300 relative"
              >
                {/* Imagen */}
                <div className="h-48 overflow-hidden rounded-t-xl">
                  <img
                    src={taller.imagen}
                    alt={taller.titulo}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="text-verde-azulado mb-3 text-3xl">
                    {taller.icono}
                  </div>
                  <h3 className="font-anton text-xl text-azul-oscuro mb-2">{taller.titulo}</h3>
                  <p className="text-gray-600 text-sm mb-4">{taller.descripcion}</p>

                  {/* Botón WhatsApp con hover en desktop y click en móvil */}
                  <div
                    className="relative inline-block"
                    onMouseEnter={() => window.innerWidth >= 768 && setActiveIndex(index)}
                    onMouseLeave={() => window.innerWidth >= 768 && setActiveIndex(null)}
                  >
                    <button
                      onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                      className="text-verde-azulado font-semibold hover:text-azul-oscuro transition-colors"
                    >
                      Más información →
                    </button>

                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 flex flex-col gap-2 z-50"
                        >
                          <button
                            onClick={() => openWhatsApp("cajamarca")}
                            className="block w-full px-4 py-2 rounded-lg bg-white text-[#013055] font-medium shadow-sm hover:bg-[#f0f4f8] transition-colors duration-200"
                          >
                            Cajamarca
                          </button>
                          <button
                            onClick={() => openWhatsApp("baños")}
                            className="block w-full px-4 py-2 rounded-lg bg-white text-[#013055] font-medium shadow-sm hover:bg-[#f0f4f8] transition-colors duration-200"
                          >
                            Los Baños del Inca
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
