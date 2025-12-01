import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const IdentityNewtoniana = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      
      <div className="container mx-auto px-6">
        
        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-dancing text-6xl md:text-7xl text-amarillo-dorado mb-2 italic">
            Identity
          </h2>
          <h3 className="font-anton text-5xl md:text-6xl text-azul-oscuro uppercase tracking-wider">
            NEWTONIANA
          </h3>
        </motion.div>

        {/* Contenido principal */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">

            {/* Columna izquierda - Foto estudiante */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Decoraciones amarillas */}
              <div className="absolute top-20 left-10 w-16 h-16 z-10">
                <svg viewBox="0 0 100 100" className="text-amarillo-dorado fill-current">
                  <polygon points="50,10 90,90 10,90" />
                </svg>
              </div>

              <div className="absolute top-32 left-2 w-12 h-12 z-10">
                <svg viewBox="0 0 100 100" className="text-amarillo-dorado fill-current">
                  <polygon points="50,10 90,90 10,90" />
                </svg>
              </div>

              {/* Círculo decorativo verde */}
              <div className="absolute bottom-20 left-8 w-32 h-32 bg-[#8BC34A] rounded-full opacity-80 z-0"></div>

              {/* Foto del estudiante */}
              <div className="relative z-10 max-w-md mx-auto lg:mx-0">
                <div className="relative">
                  {/* Placeholder - reemplaza con foto real */}
                  <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-tl-[100px] overflow-hidden">
                    <img 
                      src="/Nosotros/Identity.png" 
                      alt="Estudiante Newtoniano"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

             
            </motion.div>

            {/* Columna derecha - Misión y Visión */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative lg:pl-12 mt-12 lg:mt-0"
            >
              {/* Panel con forma curva */}
              <div className="relative bg-gradient-to-br from-verde-azulado to-[#013055] rounded-[80px] p-12 shadow-2xl">
                
                {/* MISIÓN */}
                <div className="mb-12">
                  {/* Icono y título */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-amarillo-dorado rounded-full flex items-center justify-center flex-shrink-0">
                      <Target size={28} className="text-azul-oscuro" />
                    </div>
                    <h4 className="font-anton text-4xl text-white uppercase">
                      MISIÓN
                    </h4>
                  </div>

                  {/* Texto */}
                  <p className="text-white text-base leading-relaxed">
                    Somos una Institución Educativa competitiva e inclusiva que promueve 
                    una formación integral con valores en nuestros estudiantes para afrontar con 
                    éxito los retos del mundo actual.
                  </p>
                </div>

                {/* VISIÓN */}
                <div>
                  {/* Icono y título */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-amarillo-dorado rounded-full flex items-center justify-center flex-shrink-0">
                      <Eye size={28} className="text-azul-oscuro" />
                    </div>
                    <h4 className="font-anton text-4xl text-white uppercase">
                      VISIÓN
                    </h4>
                  </div>

                  {/* Texto */}
                  <p className="text-white text-base leading-relaxed">
                    Ser una Institución Educativa licenciada que brinda una educación integral con el 
                    propósito de formar personas preparadas para los retos de un mundo cambiante.
                  </p>
                </div>

              </div>
               {/* Línea amarilla decorativa inferior */}
              
            </motion.div>
            <div className="absolute bottom-0 right-0 w-48 h-2 bg-amarillo-dorado"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IdentityNewtoniana;
