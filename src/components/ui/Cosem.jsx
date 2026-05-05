import { motion } from "framer-motion";
import { Building2, Users, ShieldCheck } from "lucide-react";

export default function EntePromotorCOSEM() {
  return (
    <section className="bg-[#f4f7fb] py-28 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e8f0fa] to-transparent pointer-events-none" />

      <div className="relative container mx-auto px-6 max-w-7xl">
        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-Anton text-4xl md:text-6xl text-[#013055] tracking-wide">
            Ente Promotor
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-light">
            Conoce a la institución que impulsa, gestiona y garantiza la calidad
            educativa del Colegio Privado de Ciencias Isaac Newton.
          </p>
        </motion.div>

        {/* Tarjeta principal COSEM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-12 md:p-16 relative overflow-hidden"
        >
          {/* Marca de agua */}
          <div className="absolute -right-10 -top-10 opacity-10">
            <Building2 size={220} className="text-[#013055]" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Información */}
            <div>
              <h3 className="font-Anton text-4xl md:text-5xl text-[#013055] mb-4 text-center">
                COSEM
              </h3>
              <h3 className="font-Anton text-2xl md:text-3xl text-[#007a75] mb-4">
                Complejo de Servicios Educativos Magister
              </h3>

              <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
                COSEM es la institución promotora que respalda la gestión
                integral del Colegio Privado de Ciencias Isaac Newton. Con una
                visión centrada en la formación de excelencia, COSEM garantiza
                una administración eficiente, moderna y orientada al desarrollo
                académico de alto nivel.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
                A través de políticas institucionales sólidas, infraestructura
                adecuada y un equipo profesional altamente capacitado, COSEM
                impulsa proyectos innovadores que fortalecen la educación
                científica, humanística y tecnológica.
              </p>

              {/* Iconos de fortalezas */}
              <div className="flex flex-col sm:flex-row gap-6 mt-8">
                <div className="flex items-center gap-4">
                  <ShieldCheck className="text-[#013055]" size={36} />
                  <span className="text-gray-800 font-semibold text-lg">
                    Gestión Transparente
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="text-[#013055]" size={36} />
                  <span className="text-gray-800 font-semibold text-lg">
                    Compromiso Institucional
                  </span>
                </div>
              </div>
            </div>

            {/* Imagen / Escudo */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 p-6 rounded-3xl shadow-xl flex items-center justify-center">
                <img
                  src="/Nosotros/COSEM.jpg"
                  alt="Escudo Newton"
                  className="w-full h-full object-contain opacity-80"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bloque adicional para Academia Newton */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-[#013055] rounded-3xl shadow-2xl p-12 text-white"
        >
          <h3 className="font-Anton text-3xl md:text-4xl mb-6 text-center">
            Academia Newton
          </h3>

          <p className="text-center text-lg max-w-3xl mx-auto leading-relaxed mb-10">
            Bajo la administración de COSEM, la Academia Newton potencia las
            capacidades académicas de los estudiantes, ofreciendo programas de
            alto rendimiento, preparación preuniversitaria y reforzamiento
            académico con docentes especializados.
          </p>

          {/* BOTÓN + REDES */}
          <div className="flex flex-col items-center gap-8">
            {/* Botón Web */}
            <a
              href="https://www.facebook.com/people/Academia-Preuniversitaria-Newton/61566145179252/"
              target="_blank"
              className="bg-white text-[#013055] px-10 py-3 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Visitar Página
            </a>

            {/* Redes Sociales */}
            <div className="flex gap-8 text-3xl">
              <a
                href="https://www.tiktok.com"
                target="_blank"
                className="hover:text-[#ffdd00] transition"
              >
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="hover:text-[#ffdd00] transition"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                className="hover:text-[#ffdd00] transition"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                className="hover:text-[#ffdd00] transition"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
