import { motion } from 'framer-motion';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { vacantesData } from '@/data/vacantesData';

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
      {/* HERO */}
      <section className="py-20 bg-gradient-to-br from-azul-oscuro to-verde-azulado text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-anton text-5xl mb-4 capitalize">
            Vacantes {tipo}
          </h1>
        </div>
      </section>

      {/* LISTADO */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vacantesFiltradas.map((vacante, index) => (
            <motion.div
              key={vacante.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg flex flex-col"
            >
              <div className="p-6 flex-grow">
                <h3 className="font-anton text-2xl mb-3 text-[#013055]">
                  {vacante.titulo}
                </h3>
                <p className="text-gray-600 mb-4">
                  {vacante.descripcion}
                </p>
                <p className="text-sm text-gray-500">
                  Requisitos: {vacante.requisitos}
                </p>
              </div>

              <div className="p-6 border-t flex justify-between items-center">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  {vacante.fechaCierre}
                </div>

                <Link
                  to={`/postular/${vacante.id}`}
                  className="bg-amarillo-dorado text-azul-oscuro px-4 py-2 rounded-lg font-bold hover:bg-amarillo-dorado/80 transition"
                >
                  Postular
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
