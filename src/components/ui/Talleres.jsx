import { motion } from "framer-motion";

export default function Talleres() {
  // Puedes reemplazar este array con tus datos reales
  const talleres = [
    {
      titulo: "Vóley",
      descripcion: "Aprende técnica, coordinación y trabajo en equipo.",
      imagen: "/images/voley.jpg",
      icono: "🏐",
    },
    {
      titulo: "Música",
      descripcion: "Desarrolla tu talento musical con instrumentos.",
      imagen: "/images/musica.jpg",
      icono: "🎸",
    },
    {
      titulo: "Danza típica",
      descripcion: "Expresa tu cultura y movimiento.",
      imagen: "/images/danza.jpg",
      icono: "💃",
    },
    {
      titulo: "Fútbol",
      descripcion: "Refuerza tu resistencia y disciplina deportiva.",
      imagen: "/images/futbol.jpg",
      icono: "⚽",
    },
  ];

  return (
    <>
      {/* ================= HEADER TIPO AFICHE ================= */}
      <section className="relative w-full bg-white">

        {/* Fondo */}
        <div
          className="w-full h-[480px] md:h-[520px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/Inicio/TALLERES.png')",
          }}
        ></div>

        {/* Contenido */}
        <div className="relative -mt-24 z-10 pb-10">
          <div className="flex flex-col items-center">

            {/* Caja amarilla */}
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

            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl italic text-verde-azulado mt-2"
            >
              Extracurriculares
            </motion.p>

            {/* Texto */}
            <p className="max-w-3xl mx-auto mt-4 text-center text-gray-600 px-6">
              En Newton Sport, nos enfocamos en el desarrollo integral de cada
              estudiante. Por eso, ofrecemos una variedad de talleres diseñados 
              para potenciar habilidades y despertar nuevas pasiones por el deporte.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== GRID DE TALLERES ==================== */}
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
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl duration-300"
              >
                <div className="h-48 overflow-hidden">
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

                  <h3 className="font-anton text-xl text-azul-oscuro mb-2">
                    {taller.titulo}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    {taller.descripcion}
                  </p>

                  <button className="text-verde-azulado font-semibold hover:text-azul-oscuro transition-colors">
                    Más información →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
