import React, { useState } from "react";
import { motion } from "framer-motion";

/* ===============================
   COMPONENTE: Fundador 
================================ */
const Fundador = () => {
  return (
    <section className="py-20 bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ==== FOTO ==== */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="/Nosotros/JorgeVidal.jpg"
              alt="Dr. Jorge Vidal Asencio Sangay"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </motion.div>

          {/* ==== TEXTO ==== */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-700"
          >
            <h2 className="font-anton text-4xl text-[#013055] mb-4">
              Nuestro Fundador
            </h2>

            <h3 className="text-2xl font-bold text-[#00838F] mb-4">
              Dr. Jorge Vidal Asencio Sangay <span className="text-gray-500">(†)</span>
            </h3>

            <p className="text-gray-600 mb-4 leading-relaxed text-justify">
              Escritor y docente peruano nacido en Cajamarca, reconocido por su destacada trayectoria
              en la formación académica superior. Realizó sus estudios en instituciones emblemáticas
              como la Gran Unidad Escolar San Ramón, la Universidad Nacional de Cajamarca y la
              Universidad Nacional de Educación Enrique Guzmán y Valle.
            </p>

            <p className="text-gray-600 leading-relaxed text-justify">
              Su visión educativa y su compromiso con el desarrollo intelectual de la región dieron
              origen a nuestra institución. Su legado continúa presente en cada estudiante que
              promueve la curiosidad científica, el pensamiento crítico y la búsqueda constante de la excelencia.
            </p>

            <blockquote className="mt-6 italic text-[#013055] border-l-4 border-[#013055] pl-4">
              “La educación es el camino para transformar vidas. Ese fue su legado y hoy es nuestra misión.”
            </blockquote>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

/* ===============================
   TIMELINE VERTICAL PROFESIONAL
================================ */
const TimelineItem = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="relative pl-12 border-l-4 border-[#00838F] pb-12"
    >
      {/* CÍRCULO */}
      <div className="absolute -left-4 top-0 w-8 h-8 bg-[#00838F] rounded-full shadow-lg"></div>

      <h3 className="font-anton text-3xl text-[#013055] mb-2">{item.año}</h3>
      <h4 className="text-xl font-bold text-[#00838F] mb-4">{item.titulo}</h4>

      {/* Imagen opcional */}
      {item.img && (
        <img
          src={item.img}
          alt={item.titulo}
          className="w-full h-64 object-cover rounded-xl shadow-md mb-4"
        />
      )}

      <p className="text-gray-600 leading-relaxed text-justify">{item.descripcion}</p>
    </motion.div>
  );
};

/* ===============================
   COMPONENTE PRINCIPAL
================================ */
export default function History() {
  const historia = [
    {
      año: "1998",
      titulo: "Fundación del Colegio",
      descripcion:
        "Iniciamos nuestro compromiso con la educación y la ciencia, marcando el primer gran hito institucional.",
      img: "/Nosotros/hito1998.jpg",
    },
    {
      año: "2005",
      titulo: "Apertura de la Sede Baños del Inca",
      descripcion:
        "Expansión estratégica que permitió llevar nuestra propuesta educativa a más familias de la región.",
      img: "/Nosotros/hito2005.jpg",
    },
    {
      año: "2015",
      titulo: "Modernización Tecnológica",
      descripcion:
        "Actualización de infraestructura, laboratorios y herramientas digitales para una educación moderna.",
      img: "/Nosotros/hito2015.jpg",
    },
    {
      año: "2024",
      titulo: "Expansión Académica",
      descripcion:
        "Nuevos programas, metodologías activas y una renovada visión educativa para el futuro.",
      img: "/Nosotros/hito2024.jpg",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* FUNDADOR */}
      <Fundador />

      {/* HISTORIA */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="font-anton text-5xl text-[#013055] mb-4">Nuestra Historia</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un recorrido por los hitos más importantes que construyeron nuestra identidad institucional.
            </p>
          </motion.div>

          <div className="relative">
            {historia.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
