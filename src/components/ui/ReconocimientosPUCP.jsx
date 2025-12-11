import { motion } from "framer-motion";
import React from "react";

export default function ReconocimientosPUCP() {
  const reconocimientos = [
    {
      year: "2018",
      desc: "Reconocimiento PUCP al Mejor Colegio de Cajamarca",
      img: "/PUCP/pucp1.png",
    },
    {
      year: "2019",
      desc: "Excelencia Académica Regional – PUCP",
      img: "/PUCP/pucp2.png",
    },
    {
      year: "2020",
      desc: "Alto Desempeño en Admisión – PUCP",
      img: "/PUCP/pucp3.png",
    },
    {
      year: "2021",
      desc: "Mejor Preparación Preuniversitaria – PUCP",
      img: "/PUCP/pucp4.png",
    },
    {
      year: "2022",
      desc: "Reconocimiento de Mérito Académico – PUCP",
      img: "/PUCP/pucp5.png",
    },
    {
      year: "2023",
      desc: "Primer Lugar en Ingresantes PUCP – Cajamarca",
      img: "/PUCP/pucp6.png",
    },
    {
      year: "2024",
      desc: "Institución Destacada por 7 Años Consecutivos – PUCP",
      img: "/PUCP/pucp7.png",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#013055] via-[#014a6e] to-[#013055] overflow-hidden text-white">
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-anton text-5xl mb-4">
            Reconocimientos PUCP
          </h2>
          <p className="text-lg max-w-4xl mx-auto">
            La Pontificia Universidad Católica del Perú (PUCP) 
            nos reconoce como el <strong> Mejor Colegio de Cajamarca </strong>  
            por 7 años consecutivos.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="w-full overflow-hidden py-8">
          <div className="flex animate-scroll gap-12 items-center">
            {[...reconocimientos, ...reconocimientos].map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 bg-white text-azul-oscuro rounded-2xl p-6 shadow-xl w-[260px] hover:scale-105 transition-all duration-300"
              >
                <img
                  src={item.img}
                  alt={item.desc}
                  className="h-24 mx-auto object-contain mb-4"
                />
                <h3 className="text-xl font-bold text-center mb-1">
                  {item.year}
                </h3>
                <p className="text-center text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
