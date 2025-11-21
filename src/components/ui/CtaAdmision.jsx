import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function CtaAdmision() {
  return (
    <section className="py-20 bg-gradient-to-r from-verde-azulado to-teal-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-anton text-4xl md:text-5xl mb-6">
            ¿Listo para formar parte de nuestra comunidad?
          </h2>
          <p className="text-xl mb-8">
            Únete a la familia Isaac Newton y descubre todo tu potencial
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/admision"
              className="inline-flex items-center gap-2 bg-amarillo-dorado text-azul-oscuro px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
            >
              Postular ahora
              <ChevronRight />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
