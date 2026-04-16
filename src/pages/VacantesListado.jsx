import { motion } from 'framer-motion';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';
import { vacantesData } from '@/data/vacantesData';
import SEO from '@/components/SEO';

export default function VacantesListado() {
  const { tipo } = useParams();

  const tiposValidos = [...new Set(vacantesData.map(v => v.tipo))];

  if (tipo && !tiposValidos.includes(tipo)) {
    return <Navigate to="/vacantes" replace />;
  }

  const vacantesFiltradas = tipo
    ? vacantesData.filter(v => v.tipo === tipo)
    : vacantesData;

  return (
    <>
      <SEO
        title={`Vacantes ${tipo || 'disponibles'} | Colegio Isaac Newton Cajamarca`}
        description="Postula a convocatorias laborales del Colegio Isaac Newton en Cajamarca y Los Baños del Inca. Oportunidades para docentes, administrativos y servicios."
        canonicalPath={tipo ? `/vacantes/${tipo}` : "/vacantes"}
        image="/Header/Vacantes/Convocatoria.optimized.webp"
      />
      {/* ================= HERO ================= */}
      <section className="relative py-24 bg-gradient-to-br from-[#013055] to-[#007a75] text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-anton text-5xl mb-4 capitalize"
          >
            Vacantes {tipo || 'Disponibles'}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 max-w-2xl mx-auto text-lg"
          >
            Forma parte de nuestra comunidad educativa y crece profesionalmente con nosotros.
          </motion.p>
        </div>
      </section>

      {/* ================= LISTADO ================= */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">

          {/* BOTÓN VOLVER */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-14"
          >
            <Link
              to="/vacantes"
              aria-label="Volver a todas las vacantes del Colegio Isaac Newton"
              className="
                inline-flex items-center gap-3
                bg-white text-[#013055]
                px-6 py-3 rounded-full
                shadow-md hover:shadow-xl
                transition-all duration-300
                hover:-translate-x-1
                font-semibold
              "
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#013055] text-white">
                <ArrowLeft className="w-5 h-5" />
              </span>
              Volver a todas las vacantes
            </Link>
          </motion.div>

          {/* GRID DE VACANTES */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {vacantesFiltradas.map((vacante, index) => (
              <motion.div
                key={vacante.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="
                  bg-white rounded-2xl
                  shadow-lg hover:shadow-2xl
                  transition-all duration-300
                  flex flex-col
                "
              >
                <div className="p-6 flex-grow">
                  <h3 className="font-anton text-2xl mb-3 text-[#013055]">
                    {vacante.titulo}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {vacante.descripcion}
                  </p>

                  <p className="text-sm text-gray-500">
                    <span className="font-semibold text-gray-600">Requisitos:</span>{' '}
                    {vacante.requisitos}
                  </p>
                </div>

                <div className="p-6 border-t flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {vacante.fechaCierre}
                  </div>

                  <Link
                    to={`/postular/${vacante.id}`}
                    aria-label={`Postular a ${vacante.titulo}`}
                    className="
                      bg-amarillo-dorado text-[#013055]
                      px-5 py-2 rounded-lg
                      font-bold
                      hover:bg-amarillo-dorado/80
                      transition-all duration-300
                      hover:scale-105
                    "
                  >
                    Postular
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
