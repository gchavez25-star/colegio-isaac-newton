import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ArrowLeft, Facebook, Twitter, Linkedin, Link as LinkIcon, Clock } from "lucide-react";
import { useState } from "react";
import { getNoticiaBySlug } from "../../data/noticiasData";

const NoticiaDetalle = () => {
  const { slug } = useParams();
  const [linkCopiado, setLinkCopiado] = useState(false);

  // Obtener la noticia por slug
  const noticia = getNoticiaBySlug(slug);

  // Si no existe la noticia, redirigir a noticias
  if (!noticia) {
    return <Navigate to="/comunidad/publicaciones" replace />;
  }

  const copiarLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setLinkCopiado(true);
    setTimeout(() => setLinkCopiado(false), 2000);
  };

  const compartirFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank');
  };

  const compartirTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${window.location.href}&text=${noticia.titulo}`, '_blank');
  };

  const compartirLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">

      {/* HERO SECTION */}
      <section className="relative bg-azul-oscuro text-white py-24 pb-0">
        <div className="container mx-auto px-6">

          
          {/* Título y Metadata */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mb-12"
          >
            <h1 className="font-anton text-5xl md:text-7xl mb-8 leading-tight">
              {noticia.titulo}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-6">

              {/* Fecha y tiempo */}
              <div className="flex items-center gap-6 text-lg">
                <span>{noticia.fecha}</span>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{noticia.tiempoLectura}</span>
                </div>
              </div>

              {/* Botones compartir */}
              <div className="flex items-center gap-3">
                <span className="text-sm mr-2">Compartir</span>

                <button
                  onClick={compartirFacebook}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
                  aria-label="Compartir en Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </button>

                <button
                  onClick={compartirTwitter}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
                  aria-label="Compartir en Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </button>

                <button
                  onClick={compartirLinkedIn}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
                  aria-label="Compartir en LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </button>

                <button
                  onClick={copiarLink}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all relative"
                  aria-label="Copiar enlace"
                >
                  <LinkIcon className="w-5 h-5" />
                  {linkCopiado && (
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-verde-azulado text-white text-xs px-3 py-1 rounded whitespace-nowrap">
                      ¡Copiado!
                    </span>
                  )}
                </button>
              </div>

            </div>
          </motion.div>

          {/* =====================================================
              IMAGEN PRINCIPAL (MODIFICADA SEGÚN TU EJEMPLO)
          ====================================================== */}
         <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative w-full rounded-3xl overflow-hidden"
          style={{ paddingTop: "52%" }} 
        >
          <picture className="absolute inset-0 w-full h-full block">
            <source
              srcSet={noticia.imagenPrincipal}
              media="(max-width: 767px)"
            />
            <img
              src={noticia.imagenPrincipal}
              alt={noticia.titulo}
              className="w-full h-full object-contain object-center rounded-3xl"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/1200x800/013055/ffffff?text=Isaac+Newton";
              }}
            />
          </picture>
        </motion.div>

        </div>
      </section>

      {/* CONTENIDO */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">

            {/* Destacado */}
            {noticia.destacado && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#ffcd00]/20 rounded-3xl p-8 md:p-12 mb-12"
              >
                <p className="text-azul-oscuro text-xl md:text-2xl leading-relaxed font-medium">
                  {noticia.destacado}
                </p>
              </motion.div>
            )}

            {/* Contenido dinámico */}
            {noticia.contenido.map((bloque, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-12"
              >
                {bloque.tipo === "parrafo" && (
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {bloque.texto}
                  </p>
                )}

                {bloque.tipo === "imagen" && (
                  <div className="rounded-3xl overflow-hidden shadow-xl">
                    <img
                      src={bloque.src}
                      alt={bloque.alt}
                      className="w-full h-auto"
                      onError={(e) => {
                        e.target.src =
                          'https://via.placeholder.com/1200x800/013055/ffffff?text=Imagen';
                      }}
                    />
                  </div>
                )}

                {bloque.tipo === "video" && (
                  <div className="space-y-4">
                    <div className="relative rounded-3xl overflow-hidden shadow-xl group cursor-pointer">
                      <img
                        src={bloque.thumbnail}
                        alt="Video thumbnail"
                        className="w-full h-auto"
                        onError={(e) => {
                          e.target.src =
                            'https://via.placeholder.com/1200x800/013055/ffffff?text=Video';
                        }}
                      />
                      <div className="absolute inset-0 bg-azul-oscuro/40 group-hover:bg-azul-oscuro/60 transition-all flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-azul-oscuro border-b-[15px] border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                    {bloque.texto && (
                      <a
                        href={bloque.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-verde-azulado hover:text-azul-oscuro font-semibold underline"
                      >
                        {bloque.texto}
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* GALERÍA */}
      {noticia.galeria && noticia.galeria.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-anton text-4xl text-azul-oscuro mb-12 text-center"
            >
              Galería de Fotos
            </motion.h2>

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              navigation={true}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="!pb-16"
            >
              {noticia.galeria.map((imagen, index) => (
                <SwiperSlide key={index}>
                  <div className="rounded-3xl overflow-hidden shadow-xl h-96">
                    <img
                      src={imagen}
                      alt={`Galería ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.target.src =
                          `https://via.placeholder.com/800x600/013055/ffffff?text=Foto+${index + 1}`;
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </section>
      )}

      {/* BOTÓN VOLVER */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <Link
            to="/comunidad/publicaciones"
            className="inline-flex items-center gap-3 bg-verde-azulado text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-verde-azulado/90 transition-all shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-5 h-5" />
            Ver más noticias
          </Link>
        </div>
      </section>

    </div>
  );
};

export default NoticiaDetalle;
