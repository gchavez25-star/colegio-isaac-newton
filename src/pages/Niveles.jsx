import { useScroll, useTransform, motion } from "framer-motion";
import { BookOpen, GraduationCap, ChevronRight } from "lucide-react";

const Niveles = () => {
  const niveles = [
    {
      id: "primaria",
      nombre: "Primaria",
      edades: "6 - 11 años",
      color: "verde-azulado",
      icono: <BookOpen size={64} />,
      descripcion:
        "La primaria es la etapa donde consolidamos las bases del conocimiento científico y humanista. Nuestros estudiantes desarrollan el pensamiento crítico, la creatividad y las habilidades de investigación que los acompañarán toda la vida.",
      caracteristicas: [
        "Aprendizaje basado en proyectos",
        "Laboratorios de ciencias equipados",
        "Programa de lectoescritura avanzada",
        "Matemática aplicada y razonamiento lógico",
        "Inglés intensivo con certificación",
        "Talleres de robótica y programación"
      ],
      imagen:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop",
      curriculo:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop"
    },
    {
      id: "secundaria",
      nombre: "Secundaria",
      edades: "12 - 17 años",
      color: "amarillo-dorado",
      icono: <GraduationCap size={64} />,
      descripcion:
        "En secundaria, preparamos a nuestros estudiantes para los desafíos universitarios y profesionales. Fortalecemos su autonomía, liderazgo y compromiso social, mientras profundizamos en las áreas científicas y humanísticas.",
      caracteristicas: [
        "Preparación pre-universitaria integrada",
        "Especialización en ciencias o humanidades",
        "Proyectos de investigación científica",
        "Olimpiadas académicas nacionales",
        "Programa de orientación vocacional",
        "Convenios con universidades de prestigio"
      ],
      imagen:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      curriculo:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop"
    }
  ];

  // ========================================
  // PARALLAX — Movimiento suave al scrollear
  // ========================================
  const { scrollYProgress } = useScroll();

  // Movimiento vertical suave (de -150px a 150px)
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <div className="min-h-screen pt-32 relative overflow-hidden">

      {/* =================================================
          LÍNEAS DECORATIVAS SIEMPRE VISIBLES + PARALLAX
      ================================================= */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute inset-0 w-full h-[450vh] pointer-events-none z-0"
      >
        {/* Línea verde */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 4500"
          preserveAspectRatio="none"
        >
          <path
            d="
              M80 0 
              C300 500 600 900 900 1600 
              C1200 2300 600 2800 400 3400 
              C250 3800 700 4200 950 4500
            "
            stroke="#007a75"
            strokeWidth="14"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        {/* Línea dorada */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 4500"
          preserveAspectRatio="none"
        >
          <path
            d="
              M1100 0 
              C850 600 1000 1200 1100 1900 
              C1200 2600 400 3200 500 3700 
              C650 4100 300 4300 120 4500
            "
            stroke="#fccc00"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* =================================================
          HERO
      ================================================= */}
      <section className=" bg-gradient-to-br from-azul-oscuro to-verde-azulado text-[#013055] relative z-10">
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

      {/* =================================================
          NIVELES
      ================================================= */}
      <section className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {niveles.map((nivel, index) => (
              <motion.div
                key={nivel.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* CONTENIDO */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    {/* Badge */}
                    <div
                      className={`inline-block bg-${nivel.color} text-white px-4 py-2 rounded-full font-bold mb-4`}
                    >
                      Inscripciones abiertas
                    </div>

                    {/* Icono + Título */}
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

                    {/* Características */}
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

                    {/* Botón */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`bg-${nivel.color} text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity`}
                    >
                      Más información
                    </motion.button>
                  </motion.div>
                </div>

                {/* IMAGENES */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Imagen principal */}
                    <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                      <img
                        src={nivel.imagen}
                        alt={nivel.nombre}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Mini imagen curricular */}
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-gradient-to-r from-azul-oscuro to-verde-azulado text-[#013055] relative z-10">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-anton text-4xl md:text-5xl mb-6">
            ¿Quieres conocer más sobre nuestros niveles educativos?
          </h2>
          <p className="text-xl mb-8">
            Agenda una visita y descubre por qué somos la mejor opción educativa.
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
