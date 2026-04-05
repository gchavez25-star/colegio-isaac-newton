import { motion } from "framer-motion";
import { Quote, Target, Eye } from "lucide-react";
import ReconocimientosPUCP from "./ReconocimientosPUCP";

const MensajeDirector = () => {
  return (
    <>
      {/* ====================================================== */}
      {/*                  SECCIÓN MENSAJE DEL DIRECTOR         */}
      {/* ====================================================== */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decoraciones */}
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
              <div className="absolute -inset-4 bg-gradient-to-br from-verde-azulado/20 to-amarillo-dorado/20 rounded-3xl blur-2xl"></div>

             <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[500px]">
                  <img
                    src="/Nosotros/Director.png"
                    alt="Director del Colegio Isaac Newton"
                    className="w-full h-full object-cover object-[center_20%]"
                  />
                </div>

              {/* Badge */}
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

            {/* Texto del Director */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Icono */}
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

              {/* Texto */}
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  En el <strong>Colegio Isaac Newton</strong>, creemos
                  firmemente que cada estudiante posee un potencial único que
                  merece ser descubierto y desarrollado. Nuestra misión es
                  proporcionar una educación integral que no solo forme mentes
                  brillantes, sino también corazones nobles y espíritus
                  resilientes.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  Con más de 28 años de experiencia en educación, hemos sido
                  testigos de cómo nuestros estudiantes se transforman en
                  líderes, innovadores y ciudadanos comprometidos con su
                  comunidad. Los invito a ser parte de esta familia que
                  construye el futuro.
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

      {/* ====================================================== */}
      {/*                 IDENTITY NEWTONIANA                    */}
      {/* ====================================================== */}
      <section className="py-16 md:py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          {/* Título */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-script text-4xl md:text-5xl text-amarillo-dorado">
              Identity
            </h2>
            <h1 className="font-anton text-5xl md:text-6xl text-azul-oscuro mt-2 leading-none">
              NEWTONIANA
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            {/* Imagen */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
                            <img
                src="/Nosotros/Identity.png"
                alt="Estudiante Newtoniana"
                className="relative z-10 max-w-[260px] sm:max-w-sm md:max-w-md rounded-xl"
              />
            </motion.div>

            {/* Misión y Visión */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div
                className="
                bg-gradient-to-b from-[#0E5C89] to-[#0A3D65] 
                text-white p-8 sm:p-10 md:p-12 rounded-[40px] sm:rounded-[60px] md:rounded-[80px]
                shadow-xl
              "
              >
                {/* Misión */}
                <div className="mb-10 md:mb-12">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-amarillo-dorado rounded-md flex items-center justify-center shadow-md">
                      <Target
                        className="text-azul-oscuro"
                        size={30}
                        strokeWidth={2.5}
                      />
                    </div>
                    <h3 className="font-anton text-3xl sm:text-4xl">MISIÓN</h3>
                  </div>

                  <p className="text-sm sm:text-base font-montserrat leading-relaxed opacity-90 ">
                    Somos una Institución Educativa competitiva e inclusiva que
                    promueve una formación integral con valores en nuestros
                    estudiantes para afrontar con éxito los retos del mundo
                    actual.
                  </p>
                </div>

                {/* Visión */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-amarillo-dorado rounded-md flex items-center justify-center shadow-md">
                      <Eye
                        className="text-azul-oscuro"
                        size={30}
                        strokeWidth={2.5}
                      />
                    </div>
                    <h3 className="font-anton text-3xl sm:text-4xl">VISIÓN</h3>
                  </div>

                  <p className="text-sm sm:text-base font-montserrat leading-relaxed opacity-90 ">
                    Ser una Institución Educativa licenciada que brinda una
                    educación integral con el propósito de formar personas
                    preparadas para los retos de un mundo cambiante.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section>
        <ReconocimientosPUCP />
      </section>
    </>
  );
};

export default MensajeDirector;
