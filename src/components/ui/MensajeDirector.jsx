import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const MensajeDirector = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amarillo-dorado/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-verde-azulado/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

          {/* Foto del Director */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Marco decorativo */}
            <div className="absolute -inset-4 bg-gradient-to-br from-verde-azulado/20 to-amarillo-dorado/20 rounded-3xl blur-2xl"></div>
            
            {/* Foto */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              {/* Placeholder - reemplaza con la foto real */}
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-200 to-gray-300">
                <img 
                  src="/Nosotros/Director.png" 
                  alt="Director del Colegio Isaac Newton"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Badge decorativo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-amarillo-dorado text-azul-oscuro px-8 py-4 rounded-2xl shadow-xl"
            >
              <div className="font-black text-2xl">15+</div>
              <div className="font-semibold text-sm">Años de experiencia</div>
            </motion.div>
          </motion.div>

          {/* Mensaje del Director */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Icono de comillas */}
            <div className="w-16 h-16 bg-gradient-to-br from-verde-azulado to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Quote size={32} className="text-white" />
            </div>

            {/* Título */}
            <div>
              <h2 className="font-anton text-4xl md:text-5xl text-azul-oscuro leading-tight mb-4">
                Mensaje del Director
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-verde-azulado to-amarillo-dorado rounded-full"></div>
            </div>

            {/* Mensaje */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                En el <strong>Colegio Isaac Newton</strong>, creemos firmemente que cada estudiante 
                posee un potencial único que merece ser descubierto y desarrollado. Nuestra misión 
                es proporcionar una educación integral que no solo forme mentes brillantes, sino 
                también corazones nobles y espíritus resilientes.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Con más de 28 años de experiencia en educación, hemos sido testigos de cómo nuestros 
                estudiantes se transforman en líderes, innovadores y ciudadanos comprometidos con su 
                comunidad. Los invito a ser parte de esta familia que construye el futuro.
              </p>
            </div>

            {/* Firma */}
            <div className="pt-6 border-t border-gray-200">
              <div className="font-anton text-2xl text-azul-oscuro mb-1">
                Mg. Ricardo Raul Soto Collazos
              </div>
              <div className="text-verde-azulado font-semibold text-lg">
                Director 
              </div>
              <div className="text-gray-600 text-sm mt-1">
                Colegio Privado de Ciencias Isaac Newton
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MensajeDirector;
