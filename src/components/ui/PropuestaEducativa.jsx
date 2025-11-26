import React from "react";
import { motion } from "framer-motion";

export default function PropuestaEducativa() {
  return (
    <section className="w-full px-4 py-12 flex justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
        className="
          flex flex-col md:flex-row
          bg-white rounded-2xl shadow-xl overflow-hidden
          max-w-6xl w-full
        "
      >

        {/* TEXTO IZQUIERDA */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
          className="md:w-1/2 w-full p-8 md:p-10 flex flex-col justify-center order-1"
        >

          <div className="relative inline-block mb-6">
            <h3 className="text-[#fccc00] text-4xl md:text-5xl font-bold leading-none">
              Propuesta
            </h3>
            <h2 className="text-[#013055] text-5xl md:text-6xl font-bold leading-none -mt-2">
              EDUCATIVA
            </h2>
          </div>

          <p className="text-gray-700 text-base md:text-lg text-justify leading-relaxed">
            El enfoque educativo por competencias integra conocimientos, habilidades y actitudes
            para afrontar situaciones reales, promoviendo pensamiento crítico, autonomía y
            formación ética.
          </p>

          <p className="text-gray-700 text-base md:text-lg text-justify leading-relaxed mt-4">
            Nuestro modelo combina tecnología, neurociencia, metodologías activas y dominio
            de idiomas, impulsando competencias globales y una educación con enfoque sostenible.
          </p>

          {/* BOTÓN */}
          <motion.a
            href="#niveles"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="
              inline-flex items-center gap-3
              mt-8 px-8 py-3
              rounded-xl
              font-semibold
              border-2 border-[#013055]
              text-white
              bg-[#013055]
              hover:bg-[#fccc00]
              hover:border-[#fccc00]
              hover:text-[#013055]
              transition-all duration-300
              shadow-md hover:shadow-xl
              w-fit
            "
          >
            Ver niveles educativos

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M13.47 4.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H3.75a.75.75 0 0 1 0-1.5h14.44l-4.72-4.72a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </motion.a>

        </motion.div>

        {/* IMAGEN DERECHA */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
          className="md:w-1/2 w-full relative order-2"
        >
          {/* Fondo amarillo desplazado */} <div className="absolute inset-0 bg-[#fccc00] rounded-lg translate-x-4 translate-y-4"></div>

          <img
            src="/Inicio/PROPUESTA.png"
            alt="Propuesta Educativa"
            className="relative z-10 w-full h-full object-cover rounded-2xl"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
