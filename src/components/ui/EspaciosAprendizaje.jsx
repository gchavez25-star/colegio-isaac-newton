import { motion } from "framer-motion";

export default function EspaciosAprendizaje() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#013055_0%,#007a75_50%,#00a69c_100%)] animate-bgMove opacity-90"></div>

      {/* Brillo izquierdo */}
      <div className="absolute -left-20 top-1/2 w-60 h-60 bg-cyan-300/20 blur-3xl rounded-full animate-pulseSlow"></div>

      {/* Brillo derecho */}
      <div className="absolute -right-20 top-1/3 w-72 h-72 bg-yellow-300/20 blur-3xl rounded-full animate-pulseSlow delay-300"></div>

      <div className="container relative mx-auto px-4">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-anton text-4xl md:text-5xl text-white drop-shadow-lg mb-4">
            Espacios de Aprendizaje
          </h2>

          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Ambientes diseñados para potenciar la creatividad, el aprendizaje activo,
            la tecnología y el uso de metodologías innovadoras en todos los niveles.
          </p>
        </motion.div>

        {/* GRID MODERNO */}
        <div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {[
            { titulo: "Aula Virtual", icono: "/Virtual.png" },
            { titulo: "Aulas Equipadas", icono: "/Aula.png" },
            { titulo: "Cafetín", icono: "/Cafetin.png" },
            { titulo: "Laboratorio Ciencias y Cómputo", icono: "/Laboratorio.png" },
            { titulo: "Áreas de recreación", icono: "/Juegos.png" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.08,
                rotateX: 10,
                rotateY: 10,
                boxShadow: "0 25px 50px rgba(0,0,0,0.45)",
              }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl p-4"
            >
              {/* Línea de acento animada */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ffcd00] to-transparent animate-slideLine"></div>

              {/* Título */}
              <div className="text-center mb-4">
                <h3 className="font-anton text-white text-base sm:text-lg tracking-wide">
                  {item.titulo}
                </h3>
              </div>

              {/* Icono */}
              <div className="flex items-center justify-center h-32 sm:h-40 relative">
                <motion.img
                  src={item.icono}
                  alt={item.titulo}
                  initial={{ scale: 0.9 }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ duration: 0.35 }}
                  className="w-20 h-20 sm:w-24 sm:h-24 invert brightness-0 drop-shadow-xl"
                />

                {/* Halo animado */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.6, scale: 1.4 }}
                  className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#00f2ff]/30 blur-xl animate-pulseHalo"
                />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
