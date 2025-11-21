import { motion } from "framer-motion";
import Metrics from "./Metrics";


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
          <div className="relative inline-block">
            <h3
              className="
                text-[#ffcd00]
                font-Coldcoast
                text-8xl md:text-7xl
                leading-none
                relative
                z-20
                translate-y-2    /* baja un poco para que se superponga */
              "
            >
              Propuesta
            </h3>

            <h2
              className="
                text-[#013055]
                font-FF World Std Two Regular
                text-10xl md:text-9xl
                leading-none
                -mt-4
                relative
                z-10
              "
            >
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
      {/* === MÉTRICAS INSTITUCIONALES === */}
      <Metrics/>

    </section>
  );
}
