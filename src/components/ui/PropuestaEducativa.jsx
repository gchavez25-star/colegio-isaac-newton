import { motion } from "framer-motion";

export default function PropuestaEducativa() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* ==== TEXTOS ==== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Título estilo afiche */}
            <div>
              <h3 className="text-[#ffcd00] font-anton text-4xl mb-0 leading-none">
                Propuesta
              </h3>
              <h2 className="text-[#013055] font-anton text-6xl leading-none -mt-3">
                EDUCATIVA
              </h2>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              El enfoque educativo por competencias de la Educación Básica integra
              conocimientos, habilidades y actitudes para enfrentar situaciones significativas,
              adaptadas al estudiante, promoviendo pensamiento crítico y sentido ético.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Nuestro modelo educativo innovador integra la tecnología, la neurociencia
              aplicada al aprendizaje, las metodologías activas y el dominio de idiomas,
              promoviendo el desarrollo de competencias globales. Asimismo, fomentamos una
              educación con enfoque en el desarrollo sostenible.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Nuestra propuesta pedagógica organiza experiencias, proyectos y unidades
              didácticas orientadas al desarrollo de competencias, promoviendo autonomía,
              trabajo en equipo y la participación dinámica de docentes y estudiantes.
            </p>
          </motion.div>

          {/* ==== IMAGEN AL ESTILO DEL AFICHE ==== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Fondo amarillo desplazado */}
            <div className="absolute inset-0 bg-[#fccc00] rounded-lg translate-x-4 translate-y-4"></div>

            {/* Imagen del estudiante (la que subiste) */}
            <img
              src="/Inicio/PROPUESTA.png"
              alt="Estudiante"
              className="relative z-10 rounded-lg shadow-xl w-full object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
