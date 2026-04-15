import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { 
  ArrowLeft, 
  Facebook, 
  Instagram,
  Youtube,
  Clock 
} from "lucide-react";
import { getNoticiaBySlug } from "../../data/noticiasData";

const NoticiaDetalle = () => {
  const { slug } = useParams();

  // Obtener la noticia por slug
  const noticia = getNoticiaBySlug(slug);

  // Si no existe la noticia, redirigir a noticias
  if (!noticia) {
    return <Navigate to="/comunidad/publicaciones" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${noticia.titulo} | Colegio Isaac Newton`}
        description={noticia.destacado || noticia.resumen || `Lee la publicación ${noticia.titulo} de la comunidad educativa Isaac Newton.`}
        canonicalPath={`/comunidad/${noticia.slug}`}
        image={noticia.imagenPrincipal}
        type="article"
      />

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
              {/* Redes sociales */}
                <div className="flex items-center gap-3 flex-wrap">

                  <span className="text-sm mr-2 font-semibold">
                    Síguenos
                  </span>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/IsaacNewtonCajamarca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/colegio_isaac_newton/?hl=es-la"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-pink-500 rounded-full flex items-center justify-center transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>

                  {/* TikTok */}
                  <a
                    href="https://www.tiktok.com/@colegio_isaacnewton"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-black rounded-full flex items-center justify-center transition-all"
                    aria-label="TikTok"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 fill-white"
                    >
                      <path d="M12 2h3a5 5 0 005 5v3a8 8 0 01-5-2v7a6 6 0 
                      11-6-6v3a3 3 0 103 3V2z"/>
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@ColegioPrivadoIsaacNewton"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-red-600 rounded-full flex items-center justify-center transition-all"
                    aria-label="YouTube"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 fill-white"
                    >
                      <path d="M21.8 8s-.2-1.5-.8-2.2c-.7-.8-1.5-.8-1.9-.9C16.4 
                      4.7 12 4.7 12 4.7h0s-4.4 
                      0-7.1.2c-.4 0-1.2.1-1.9.9C2.4 
                      6.5 2.2 8 2.2 8S2 
                      9.8 2 11.6v1.7C2 15.1 
                      2.2 17 2.2 17s.2 1.5.8 
                      2.2c.7.8 1.7.8 2.1.9 
                      1.5.1 6.9.2 6.9.2s4.4 
                      0 7.1-.2c.4 0 1.2-.1 
                      1.9-.9.6-.7.8-2.2.8-2.2s.2-1.8.2-3.6v-1.7C22 
                      9.8 21.8 8 21.8 
                      8zM10 14.5v-5l5 2.5-5 2.5z"/>
                    </svg>
                  </a>

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
              loading="eager"
              fetchPriority="high"
              decoding="async"
              sizes="100vw"
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
                      loading="lazy"
                      decoding="async"
                      sizes="(min-width: 1024px) 768px, 90vw"
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
                        loading="lazy"
                        decoding="async"
                        sizes="(min-width: 1024px) 768px, 90vw"
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
                      loading="lazy"
                      decoding="async"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 90vw"
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
