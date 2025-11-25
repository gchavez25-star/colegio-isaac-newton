import { motion } from "framer-motion";

const espacios = [
  {
    titulo: "Formación Integral",
    imagen: "/public/Aprendizaje/Formacion.jpg",
    color: "from-[#fccc00] to-[#fccc00]/80",
  },
  {
    titulo: "Tecnología",
    imagen: "/public/Aprendizaje/Tecnologia.jpg",
    color: "from-[#007a75] to-[#007a75]/80",
  },
  {
    titulo: "Deporte",
    imagen: "/public/Aprendizaje/Deporte.jpg",
    color: "from-[#013055] to-[#013055]/80",
  },
  {
    titulo: "Cultura",
    imagen: "/public/Aprendizaje/Cultura.JPG",
    color: "from-[#e2ddd0] to-[#e2ddd0]/80",
  },
];

export default function EspaciosAprendizaje() {
  return (
    <section className="py-24 bg-[#013055]">
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-anton text-4xl md:text-5xl text-white mb-4">
            Espacios de Aprendizaje
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto">
            Ambientes diseñados para potenciar la creatividad, el aprendizaje activo y el desarrollo integral.
          </p>
        </motion.div>

        {/* Tarjetas estilo imagen */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {espacios.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
            >
              {/* Imagen */}
              <img
                src={item.imagen}
                alt={item.titulo}
                className="w-full h-[420px] object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay degradado institucional */}
              <div
                className={`absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t ${item.color} flex items-end p-6`}
              >
                <div className="flex items-center gap-3 text-white text-xl font-bold">
                  <span>{item.titulo}</span>
                  <span className="w-8 h-8 flex items-center justify-center rounded-full border border-white/80 text-lg">
                    ➜
                  </span>
                </div>
              </div>

              {/* Oscurecido suave arriba */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
