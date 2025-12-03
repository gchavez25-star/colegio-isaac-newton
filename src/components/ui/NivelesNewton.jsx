import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function NivelesEducativos() {
  const niveles = [
    {
      title: "Primaria",
      desc: "Alumnos de 6 a 11 años",
      img: "/images/primaria.jpg",
      link: "#",
    },
    {
      title: "Secundaria",
      desc: "Alumnos de 12 a 17 años",
      img: "/images/secundaria.jpg",
      link: "#",
    },
  ];

  return (
    <section className="relative w-full py-20 overflow-hidden bg-white">
      {/* Título */}
      <div className="max-w-5xl mx-auto text-center px-6 mb-20">
        <h3 className="text-4xl font-bold text-[#013055] mb-4">
          Niveles Educativos
        </h3>
        <p className="text-lg text-[#013055] leading-relaxed">
          El Colegio Isaac Newton acompaña a los estudiantes desde los primeros años
          hasta la etapa final de su formación escolar, con un enfoque académico,
          humano y científico.
        </p>
      </div>

      {/* Escudo flotante con parallax suave */}
      <motion.img
        src="/escudo-newton.png"
        className="absolute left-1/2 top-32 -translate-x-1/2 w-[420px] opacity-20"
        initial={{ y: -40 }}
        whileInView={{ y: 40 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Líneas decorativas animadas */}
      <svg className="absolute top-0 left-0 w-full z-0" height="2600">
        <motion.path
          d="M50 0 C300 300 600 500 900 900 C1200 1300 600 1500 400 2000 C300 2300 700 2500 900 2600"
          stroke="#007a75"
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
          initial={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
          whileInView={{ strokeDashoffset: 0 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </svg>

      <svg className="absolute top-0 left-0 w-full z-0" height="2600">
        <motion.path
          d="M1200 0 C900 200 800 600 950 1100 C1100 1600 400 1700 500 2100 C600 2400 200 2600 50 2800"
          stroke="#fccc00"
          strokeWidth="20"
          fill="none"
          strokeLinecap="round"
          initial={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
          whileInView={{ strokeDashoffset: 0 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
        />
      </svg>

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 mt-24">
        {niveles.map((n, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="overflow-hidden">
              <img
                src={n.img}
                alt={n.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            <div className="p-6">
              <h4 className="text-2xl font-bold text-[#013055] mb-2">
                {n.title}
              </h4>
              <p className="text-[#007a75] mb-4">{n.desc}</p>

              <Link
                to={n.link}
                className="inline-flex items-center gap-2 text-[#013055] font-medium border border-[#fccc00] px-4 py-2 rounded-full group-hover:bg-[#fccc00] transition-all duration-300"
              >
                Conoce más
                <ArrowUpRight
                  size={20}
                  className="transition-all group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
