import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PrincipiosValores = () => {
  const valoresIzquierda = [
    {
      id: 1,
      titulo: "Responsabilidad",
      imagen: "/valores/familia-educacion.jpg",
      link: "/nosotros#valores"
    },
    {
      id: 2,
      titulo: "Integridad",
      imagen: "/valores/atencion-diversidad.jpg",
      link: "/nosotros#valores"
    },
    {
      id: 3,
      titulo: "Puntualidad",
      imagen: "/valores/deportes.jpg",
      link: "/nosotros#valores"
    }
  ];

  const valoresDerecha = [
    {
      id: 4,
      titulo: "Solidaridad",
      imagen: "/valores/educacion-persona.jpg",
      link: "/nosotros#valores"
    },
    {
      id: 5,
      titulo: "Respeto",
      imagen: "/valores/excelencia.jpg",
      link: "/nosotros#valores"
    },
    {
      id: 6,
      titulo: "Perseverancia",
      imagen: "/valores/mejoramiento.jpg",
      link: "/nosotros#valores"
    }
  ];

  return (
    <section className="py-32 bg-[#013055] relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-Anton text-4xl md:text-5xl text-white tracking-wide">
            Principios y Valores
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto">

          {/* DESKTOP: 3 columnas */}
          <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 items-start">
            
            {/* COLUMNA IZQUIERDA - 5 columnas */}
            <div className="col-span-5 space-y-8">
              {valoresIzquierda.map((valor, index) => (
                <motion.div
                  key={valor.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <TarjetaValor valor={valor} />
                </motion.div>
              ))}
            </div>

            {/* COLUMNA CENTRAL - 2 columnas (escudo) */}
            <div className="col-span-2 pt-32">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="sticky top-32"
              >
                <div className="text-center">
                                    
                  {/* Escudo */}
                  <div className="w-40 h-40 mx-auto opacity-25">
                    <img
                      src="/Escudo líneas.png"
                      alt="Escudo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* COLUMNA DERECHA - 5 columnas */}
            <div className="col-span-5 space-y-8">
              {valoresDerecha.map((valor, index) => (
                <motion.div
                  key={valor.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index + 3) * 0.15 }}
                  viewport={{ once: true }}
                >
                  <TarjetaValor valor={valor} />
                </motion.div>
              ))}
            </div>

          </div>

          {/* MÓVIL/TABLET: Grid normal */}
          <div className="lg:hidden">
            {/* Escudo arriba */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center mb-12"
            >
              <div className="text-center">
                <div className="font-serif text-4xl text-[#D4C5A9] font-bold mb-3">
                  2009
                </div>
                <div className="w-32 h-32 mx-auto opacity-25">
                  <img
                    src="/Escudo líneas.png"
                    alt="Escudo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </motion.div>

            {/* Tarjetas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[...valoresIzquierda, ...valoresDerecha].map((valor, index) => (
                <motion.div
                  key={valor.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <TarjetaValor valor={valor} />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Componente Tarjeta
const TarjetaValor = ({ valor }) => {
  return (
    <Link to={valor.link} className="group block">
      <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        
        {/* Imagen */}
        <div className="relative h-80 bg-gray-200 overflow-hidden">
          <img
            src={valor.imagen}
            alt={valor.titulo}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          
          {/* Botón */}
          <div className="absolute bottom-6 right-6">
            <div className="w-14 h-14 bg-[#F5E6D3] rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#fccc00] transition-all group-hover:scale-110">
              <ArrowUpRight size={24} className="text-[#013055]" strokeWidth={2.5} />
            </div>
          </div>
        </div>

        {/* Texto */}
        <div className="p-8">
          <h3 className="font-serif text-xl text-[#2C5F2D] leading-tight group-hover:text-[#007a75] transition-colors duration-300">
            {valor.titulo}
          </h3>
        </div>

      </div>
    </Link>
  );
};

export default PrincipiosValores;
