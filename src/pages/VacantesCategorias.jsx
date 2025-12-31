import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { vacantesData } from '@/data/vacantesData';


const categoriasConfig = {
  docente: {
    label: 'Docente',
    image: 'public/Vacantes/Docente.jpg'
  },
  administrativo: {
    label: 'Administrativo',
    image: 'public/Vacantes/Administrativo.jpg'
  },
  servicios: {
    label: 'Servicios',
    image: 'public/Vacantes/Servicios.jpg'
  }
};

export default function VacantesCategorias() {
  const categorias = [...new Set(vacantesData.map(v => v.tipo))];

  return (
    <>
     {/* HERO */}
        <section
        className="relative py-24 text-white bg-center bg-cover"
        style={{
            backgroundImage: `
            linear-gradient(
                rgba(7, 40, 66, 0.85),
                rgba(0, 128, 128, 0.85)
            ),
            url('/Vacantes/Convocatoria.jpg')
            `
        }}
        >
        <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="font-anton text-5xl md:text-6xl mb-4">
            Convocatorias Laborales
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Únete al equipo del Colegio Isaac Newton
            </p>
        </div>
        </section>


      {/* CATEGORÍAS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {categorias.map((tipo, index) => {
            const categoria = categoriasConfig[tipo];

            return (
              <motion.div
                key={tipo}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl shadow-lg overflow-hidden bg-gray-50 group"
              >
                {/* IMAGEN */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={categoria.image}
                    alt={categoria.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* CONTENIDO */}
                <div className="p-8 text-center">
                  <h3 className="font-anton text-3xl mb-4 text-[#013055]">
                    {categoria.label}
                  </h3>

                  <Link
                    to={`/vacantes/${tipo}`}
                    className="inline-flex items-center bg-[#007a75] text-white px-6 py-3 rounded-lg font-bold hover:bg-azul-oscuro/90 transition"
                  >
                    Ver Vacantes
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}