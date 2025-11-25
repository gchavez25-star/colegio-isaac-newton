import React from "react";
import { motion } from "framer-motion";
import StudentImg from "/Inicio/Welcome.png"; 
// Ajusta la ruta según tu proyecto

export default function WelcomeNewton() {
  return (
    <section className="w-full px-4 py-12 flex justify-center">
      {/* Contenedor principal animado */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="
          flex flex-col md:flex-row 
          bg-white rounded-2xl shadow-xl overflow-hidden
          max-w-5xl w-full
        "
      >
        {/* IMAGEN IZQUIERDA */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full"
        >
          <img
            src={StudentImg}
            alt="Estudiante Isaac Newton"
            className="w-full h-full object-cover md:rounded-l-2xl"
          />
        </motion.div>

        {/* TEXTO DERECHA */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full p-8 md:p-10 flex flex-col justify-center"
        >
          {/* TÍTULO */}
          <h2 className="entry-title text-3xl md:text-4xl font-bold leading-tight text-[#013055] mb-5">
            Bienvenidos
             </h2>

          {/* PÁRRAFO */}
          <p className="text-gray-700 text-base md:text-lg text-justify leading-relaxed font-montserrat">
            Somos el Colegio Privado de Ciencias “Isaac Newton” y formamos
            estudiantes íntegros, críticos y con sólidos valores. Nuestro
            modelo educativo combina la innovación tecnológica, metodologías
            activas, neurociencias e idiomas con un enfoque en el desarrollo
            sostenible para preparar a nuestros estudiantes como líderes
            conscientes y competentes en un mundo global.
          </p>

          {/* BOTÓN */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="
                inline-flex items-center gap-3
                mt-7 px-8 py-3 
                rounded-xl
                font-semibold font-montserrat
                border-2 border-[#013055]
                text-white
                bg-[#013055]
                hover:bg-[#fccc00]
                hover:border-[#fccc00]
                hover:text-[#013055]
                transition-all duration-300
                shadow-md hover:shadow-xl
            "
            >
            Conoce más de nosotros

            {/* Ícono flecha */}
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-5 h-5'
            >
                <path
                fillRule='evenodd'
                d='M13.47 4.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H3.75a.75.75 0 0 1 0-1.5h14.44l-4.72-4.72a.75.75 0 0 1 0-1.06Z'
                clipRule='evenodd'
                />
            </svg>
            </motion.a>

        </motion.div>
      </motion.div>
    </section>
  );
}
