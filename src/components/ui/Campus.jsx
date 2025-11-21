import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import CampusCarousel from "./CampusCarousel";

const CampusSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-anton text-4xl md:text-5xl text-azul-oscuro leading-tight">
              Nuestros Campus
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Contamos con dos modernos campus estratégicamente ubicados en Cajamarca y 
              Baños del Inca, equipados con laboratorios innovadores, áreas deportivas 
              y espacios diseñados para potenciar el aprendizaje integral.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/campus"
                className="inline-flex items-center gap-3 bg-verde-azulado text-white px-8 py-4 
                rounded-xl font-semibold text-lg transition-all shadow-md hover:shadow-lg"
              >
                Ver campus
                <ChevronRight className="w-6 h-6" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Carrusel */}
          <CampusCarousel />

        </div>
      </div>
    </section>
  );
};

export default CampusSection;
