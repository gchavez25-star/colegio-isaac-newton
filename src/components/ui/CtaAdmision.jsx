// src/components/Noticias/NoticiasSection.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { getAllNoticias } from "@/data/noticiasData";

const NoticiasSection = () => {
  // Obtener todas las noticias y tomar las 3 más recientes
  const noticias = getAllNoticias().slice(0, 3);

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#013055] via-[#014a6e] to-[#013055] overflow-hidden">
      
      {/* Patrón de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Encabezado */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-anton text-4xl md:text-5xl text-white mb-2">
              Últimas Noticias
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-amarillo-dorado to-yellow-400 rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/comunidad/publicaciones"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full 
              border-2 border-white/30 text-white font-semibold text-lg
              hover:bg-white/10 hover:border-white/50 transition-all duration-300
              backdrop-blur-sm"
            >
              Ver todas las noticias
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {noticias.map((noticia, index) => (
            <motion.article
              key={noticia.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Imagen */}
              <div className="relative h-64 overflow-hidden rounded-t-3xl">
                
                <img
                  src={noticia.imagenPrincipal}
                  alt={noticia.titulo}
                  className="absolute inset-0 w-full h-full object-cover 
                  group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/600x400/013055/ffffff?text=Isaac+Newton";
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-verde-azulado/40 to-azul-oscuro/40"></div>

                {/* Badge */}
                <div className="absolute top-6 right-6 w-14 h-14 bg-[#f5e6d3] rounded-full 
                flex items-center justify-center shadow-lg group-hover:scale-110 
                transition-transform duration-300">
                  <FileText size={24} className="text-azul-oscuro" />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Contenido */}
              <div className="p-8 space-y-4">
                
                {/* Título */}
                <h3 className="font-anton text-2xl text-azul-oscuro leading-tight 
                group-hover:text-verde-azulado transition-colors duration-300 min-h-[4rem]">
                  {noticia.titulo}
                </h3>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  
                  <span className="text-gray-600 font-medium text-sm">
                    {noticia.fecha}
                  </span>

                  <Link
                    to={`/comunidad/${noticia.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full 
                    border-2 border-[#007a75] text-[#007a75] font-bold text-sm
                    hover:bg-[#007a75] hover:text-white transition-all duration-300
                    group-hover:scale-105"
                  >
                    Leer
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>

                </div>
              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default NoticiasSection;
