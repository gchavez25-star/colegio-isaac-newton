import { useScroll, useTransform, motion } from "framer-motion";
import { BookOpen, GraduationCap, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Niveles = () => {
    return (
    <div className="min-h-screen pt-10 relative overflow-hidden">
      

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
