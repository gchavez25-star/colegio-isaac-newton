import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FileText } from "lucide-react";
import { getAllNoticias, getNoticiasByCategoria } from "../../data/noticiasData";

const NoticiasPage = () => {
  const categorias = ["Todas", "Alumnos", "Artículos", "Eventos", "Prensa"];
  const [categoriaActiva, setCategoriaActiva] = useState("Todas");

  // Obtener todas las noticias
  const todasLasNoticias = getAllNoticias();
  
  // Filtrar noticias según categoría activa
  const noticiasFiltradas = getNoticiasByCategoria(categoriaActiva);

  // Noticias destacadas para el slider (primeras 4)
  const noticiasDestacadas = todasLasNoticias.slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      
      {/* HERO SECTION CON SLIDER */}
      <section className="relative min-h-screen bg-azul-oscuro overflow-hidden">
        
        {/* Contenedor principal con grid */}
        <div className="container mx-auto px-6 py-24 min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LADO IZQUIERDO - Texto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <h1 className="font-anton text-5xl md:text-7xl leading-tight">
              Lo último en Isaac Newton
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              ¡Sumérgete en lo que hace que Isaac Newton sea único!
            </p>
          </motion.div>

          {/* LADO DERECHO - Slider de Noticias */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              className="!pb-16"
            >
              {noticiasDestacadas.map((noticia) => (
                <SwiperSlide key={noticia.id}>
                  <TarjetaNoticia noticia={noticia} />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

        </div>
      </section>

      {/* FILTROS DE CATEGORÍAS */}
      <section className="py-12 bg-gray-50 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaActiva(categoria)}
                className={`
                  px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300
                  ${categoriaActiva === categoria
                    ? 'bg-verde-azulado text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                  }
                `}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID DE NOTICIAS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {noticiasFiltradas.map((noticia, index) => (
              <motion.div
                key={noticia.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <TarjetaNoticiaGrid noticia={noticia} />
              </motion.div>
            ))}
          </motion.div>

          {noticiasFiltradas.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-xl">
                No hay noticias en esta categoría
              </p>
            </div>
          )}

        </div>
      </section>

    </div>
  );
};

// Componente de Tarjeta para el Slider
const TarjetaNoticia = ({ noticia }) => {
  return (
    <Link to={`/noticias/${noticia.slug}`}>
      <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl p-8 group cursor-pointer hover:shadow-3xl transition-all duration-500">
        
        {/* Imagen */}
        <div className="relative h-80 rounded-3xl overflow-hidden mb-6">
          <img
            src={noticia.imagenMiniatura || noticia.imagenPrincipal}
            alt={noticia.titulo}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/800x600/013055/ffffff?text=Isaac+Newton';
            }}
          />
        </div>

        {/* Categorías */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {noticia.categorias.map((cat, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-verde-azulado font-semibold text-sm">
                {cat}
              </span>
              {index < noticia.categorias.length - 1 && (
                <span className="text-amarillo-dorado text-lg">◆</span>
              )}
            </div>
          ))}
        </div>

        {/* Título */}
        <h3 className="font-anton text-2xl text-azul-oscuro mb-4 leading-tight">
          {noticia.titulo}
        </h3>

        {/* Footer con fecha y botón */}
        <div className="flex items-center justify-between">
          <span className="text-gray-600 text-lg">
            {noticia.fecha}
          </span>
          
          <div className="w-14 h-14 bg-[#f5e6d3] rounded-full flex items-center justify-center group-hover:bg-amarillo-dorado transition-colors duration-300">
            <FileText className="w-6 h-6 text-azul-oscuro" />
          </div>
        </div>

      </div>
    </Link>
  );
};

// Componente de Tarjeta para el Grid
const TarjetaNoticiaGrid = ({ noticia }) => {
  return (
    <Link to={`/comunidad/${noticia.slug}`}>
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer hover:-translate-y-2">
        
        {/* Imagen */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={noticia.imagenMiniatura || noticia.imagenPrincipal}
            alt={noticia.titulo}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/600x400/013055/ffffff?text=Isaac+Newton';
            }}
          />
        </div>

        {/* Contenido */}
        <div className="p-6">
          
          {/* Categorías */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {noticia.categorias.slice(0, 2).map((cat, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-verde-azulado font-semibold text-xs">
                  {cat}
                </span>
                {index < Math.min(noticia.categorias.length, 2) - 1 && (
                  <span className="text-amarillo-dorado text-sm">◆</span>
                )}
              </div>
            ))}
          </div>

          {/* Título */}
          <h3 className="font-anton text-xl text-azul-oscuro mb-3 leading-tight line-clamp-2">
            {noticia.titulo}
          </h3>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <span className="text-gray-600">
              {noticia.fecha}
            </span>
            
            <span className="text-verde-azulado font-semibold hover:text-azul-oscuro transition-colors">
              Leer →
            </span>
          </div>

        </div>

      </div>
    </Link>
  );
};

export default NoticiasPage;
