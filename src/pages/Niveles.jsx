import { useScroll, useTransform, motion } from "framer-motion";
import { BookOpen, GraduationCap, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Niveles = () => {
  const niveles = [
    {
      id: "primaria",
      nombre: "Primaria",
      edades: "6 - 11 años",
      color: "verde-azulado",
      icono: <BookOpen size={64} />,
      descripcion:
        "La primaria es la etapa donde consolidamos las bases del conocimiento científico y humanista. Nuestros estudiantes desarrollan pensamiento crítico, creatividad y habilidades de investigación que los acompañarán toda la vida.",
      caracteristicas: [
        "Aprendizaje basado en proyectos",
        "Laboratorios de ciencias equipados",
        "Programa de lectoescritura avanzada",
        "Matemática aplicada y razonamiento lógico",
        "Inglés intensivo con certificación",
        "Talleres de robótica y programación",
      ],
      imagen: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800",
      curriculo:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600",
    },
    {
      id: "secundaria",
      nombre: "Secundaria",
      edades: "12 - 17 años",
      color: "amarillo-dorado",
      icono: <GraduationCap size={64} />,
      descripcion:
        "En secundaria, preparamos a nuestros estudiantes para los desafíos universitarios. Fortalecemos autonomía, liderazgo y compromiso social, mientras profundizamos en ciencias y humanidades.",
      caracteristicas: [
        "Preparación pre-universitaria integrada",
        "Especialización en ciencias o humanidades",
        "Proyectos de investigación científica",
        "Olimpiadas académicas profesionales",
        "Programa de orientación vocacional",
        "Convenios con universidades de prestigio",
      ],
      imagen: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
      curriculo:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600",
    },
  ];

  return (
    <div className="min-h-screen pt-10 relative overflow-hidden">
      {/* FONDO */}
      <div className="absolute inset-0 -z-10 bg-white">
        <div className="absolute top-0 left-0 w-full h-[1400px] bg-gradient-to-br from-[#e6f3ff] to-transparent skew-y-3" />
        <div className="absolute bottom-0 right-0 w-full h-[1400px] bg-gradient-to-tl from-[#fff4c2] to-transparent -skew-y-3" />
      </div>

      {/* HERO */}
      <section className="text-[#013055] pb-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-anton text-5xl md:text-6xl mb-6">
              Niveles Educativos
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Educación de excelencia desde los 6 hasta los 17 años
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECCIONES */}
      <section className="py-20">
        <div className="container mx-auto px-4 space-y-24">
          {niveles.map((nivel) => {
            const reverse = nivel.id === "secundaria"; // Secundaria a la derecha

            return (
              <motion.div
                key={nivel.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  reverse ? "lg:flex-row" : ""
                }`}
              >
                {/* TEXTO */}
                <motion.div
                  initial={{ opacity: 0, x: reverse ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`inline-block bg-${nivel.color} text-white px-4 py-2 rounded-full font-bold mb-4`}
                  >
                    Inscripciones abiertas
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className={`text-${nivel.color}`}>{nivel.icono}</div>
                    <div>
                      <h2 className="font-anton text-4xl text-azul-oscuro">
                        {nivel.nombre}
                      </h2>
                      <p className="text-xl text-gray-600">{nivel.edades}</p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {nivel.descripcion}
                  </p>

                  <div className="space-y-3 mb-6">
                    {nivel.caracteristicas.map((c, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <ChevronRight
                          className={`text-${nivel.color} flex-shrink-0 mt-1`}
                          size={20}
                        />
                        <span className="text-gray-700">{c}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* BOTÓN CON LINK */}
                  <Link to={`/nivel/${nivel.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`bg-${nivel.color} text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity`}
                    >
                      Más información
                    </motion.button>
                  </Link>
                </motion.div>

                {/* IMAGEN */}
                <motion.div
                  initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                    <img
                      src={nivel.imagen}
                      alt={nivel.nombre}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="absolute -bottom-6 -right-6 w-48 h-32 rounded-lg overflow-hidden shadow-xl border-4 border-white"
                  >
                    <img
                      src={nivel.curriculo}
                      alt={`Currículo ${nivel.nombre}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#007a75] bg-opacity-40 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        Ver currículo
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-[#013055]">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-anton text-4xl md:text-5xl mb-6">
            ¿Quieres conocer más sobre nuestros niveles educativos?
          </h2>
          <p className="text-xl mb-8">
            Agenda una visita y descubre por qué somos la mejor opción
            educativa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amarillo-dorado text-azul-oscuro px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity">
              Agendar visita
            </button>
            <button className="bg-white text-azul-oscuro px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity">
              Descargar brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Niveles;
