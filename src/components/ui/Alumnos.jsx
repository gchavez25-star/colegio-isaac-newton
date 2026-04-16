import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SEO from "@/components/SEO";

// ===============================================
// DATA
// ===============================================

const alumnos = [
  {
    nombre: "María Rodríguez",
    logro: "Medalla de Oro - Olimpiada Nacional de Matemáticas",
    foto: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop",
    testimonio:
      "El colegio me enseñó a amar las matemáticas y a nunca rendirme ante los desafíos.",
  },
  {
    nombre: "Carlos Pérez",
    logro: "Ingreso directo a la PUCP - Beca completa",
    foto: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
    testimonio:
      "Gracias a la preparación que recibí, logré mi sueño de estudiar en la mejor universidad del país.",
  },
  {
    nombre: "Ana Torres",
    logro: "Proyecto de Ciencias - Finalista Nacional",
    foto: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
    testimonio:
      "Mi proyecto sobre energías renovables fue posible gracias al apoyo de mis profesores y los laboratorios del colegio.",
  },
];

const estudianteDelMes = {
  nombre: "Sofía Mendoza",
  grado: "5to de Secundaria",
  foto: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=600&fit=crop",
  logros: [
    "Promedio académico: 19.5",
    "Capitana del equipo de debate",
    "Voluntaria en programa de tutoría",
  ],
  mensaje:
    "Ser estudiante del mes es un honor que me motiva a seguir esforzándome y ayudando a mis compañeros.",
};

// ===============================================
// COMPONENTE PRINCIPAL
// ===============================================

const Alumnos = () => {
  return (
    <section className="py-20 bg-white">
      <SEO
        title="Alumnos destacados | Colegio Isaac Newton Cajamarca"
        description="Historias y logros de estudiantes del Colegio Isaac Newton, colegio privado en Cajamarca con formación integral en primaria y secundaria."
        canonicalPath="/comunidad/alumnos"
        image="/Logo-pagina-web.png"
      />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* ======================================================
              ESTUDIANTE DEL MES
          ====================================================== */}
          <div className="rounded-2xl p-10 mb-16 shadow-xl"
            style={{
              background: "linear-gradient(135deg, #ffcd00, #e6b800)",
            }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Award size={48} className="text-[#013055]" />
              <h2 className="font-anton text-4xl text-[#013055]">
                Estudiante del Mes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
              <div className="md:col-span-1">
                <img
                  src={estudianteDelMes.foto}
                  alt={estudianteDelMes.nombre}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg border-4 border-white"
                />
              </div>

              <div className="md:col-span-2">
                <h3 className="font-anton text-3xl text-[#013055] mb-2">
                  {estudianteDelMes.nombre}
                </h3>

                <p className="text-[#013055] font-semibold mb-4 font-montserrat">
                  {estudianteDelMes.grado}
                </p>

                <ul className="space-y-3 mb-4">
                  {estudianteDelMes.logros.map((logro, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-[#013055] font-montserrat"
                    >
                      <Award size={20} className="text-[#013055]" />
                      {logro}
                    </li>
                  ))}
                </ul>

                <p className="text-[#013055] italic font-montserrat text-lg">
                  "{estudianteDelMes.mensaje}"
                </p>
              </div>
            </div>
          </div>

          {/* ======================================================
              HISTORIAS DE ÉXITO
          ====================================================== */}

          <h2 className="font-anton text-4xl text-[#013055] mb-12 text-center">
            Historias de Éxito
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {alumnos.map((alumno, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={alumno.foto}
                    alt={alumno.nombre}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-anton text-2xl text-[#013055] mb-3">
                    {alumno.nombre}
                  </h3>

                  <div className="flex items-center gap-2 text-[#013055] mb-3 font-montserrat">
                    <Award size={20} className="text-[#ffcd00]" />
                    <p className="font-semibold text-sm">{alumno.logro}</p>
                  </div>

                  <p className="text-gray-600 italic text-sm font-montserrat">
                    "{alumno.testimonio}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Alumnos;
