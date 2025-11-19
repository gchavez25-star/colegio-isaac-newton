import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

// Importar estilos de Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroSlider = () => {
  const videoRef = useRef(null);

  const slides = [
    {
      id: 1,
      type: 'image',
      title: 'Admisión y Traslados 2025 – 2026',
      imageMobile: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=430&h=700&fit=crop',
      imageDesktop: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&h=713&fit=crop',
      buttons: [
        { text: 'Agenda una Visita Guiada', link: '/contacto', style: 'primary' }
      ]
    },
    {
      id: 2,
      type: 'video',
      title: 'Centro de Gestión del Aprendizaje',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      imageMobile: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=430&h=700&fit=crop',
      imageDesktop: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&h=713&fit=crop',
      buttons: [
        { text: 'Ver noticia', link: '/comunidad', style: 'primary' },
        { text: 'Ver video', link: '#', style: 'secondary', isVideo: true }
      ]
    },
    {
      id: 3,
      type: 'image',
      title: 'Formamos Científicos Líderes para el Mundo',
      imageMobile: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=430&h=700&fit=crop',
      imageDesktop: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=713&fit=crop',
      buttons: [
        { text: 'Conócenos', link: '/nosotros', style: 'primary' }
      ]
    },
    {
      id: 4,
      type: 'image',
      title: 'Un entorno Seguro y Familiar para tus hijos',
      imageMobile: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=430&h=700&fit=crop',
      imageDesktop: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&h=713&fit=crop',
      buttons: [
        { text: 'Inicia el Proceso de Admisión', link: '/admision', style: 'primary' }
      ]
    }
  ];

  return (
    <section className="heroSlider relative w-full h-screen">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={1500}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        fadeEffect={{
          crossFade: true
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet custom-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
        }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Video o Imagen de fondo */}
              {slide.type === 'video' && slide.videoUrl ? (
                <>
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover hidden md:block"
                  >
                    <source src={slide.videoUrl} type="video/mp4" />
                  </video>
                  <picture className="absolute inset-0 md:hidden">
                    <img
                      src={slide.imageMobile}
                      alt={slide.title}
                      className="w-full h-full object-cover scale-105 transition-transform duration-[6000ms] ease-out"
                    />
                  </picture>
                </>
              ) : (
                  <picture className="absolute inset-0">
                  <source srcSet={slide.imageMobile} media="(max-width: 767px)" />
                  <img
                    src={slide.imageDesktop}
                    alt={slide.title}
                    className="w-full h-full object-cover scale-105 transition-transform duration-[6000ms] ease-out"
                  />
                </picture>
              )}

              {/* Overlay oscuro con borde para separación visual */}
              <div className="absolute inset-0 bg-gradient-to-r from-azul-oscuro/80 via-azul-oscuro/50 to-transparent"></div>
              <div className="absolute inset-0 border-4 border-amarillo-dorado/0 transition-all duration-500"></div>

              {/* Contenido */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                  >
                    {/* Título */}
                    <h1 className="font-anton text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight drop-shadow-lg">
                      {slide.title}
                    </h1>

                    {/* Botones */}
                    <div className="flex flex-col sm:flex-row gap-3 items-start">
                      {slide.buttons.map((button, index) => (
                        <motion.a
                          key={index}
                          href={button.link}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`
                            inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-base md:text-lg transition-all shadow-lg
                            ${button.style === 'primary' 
                              ? 'bg-amarillo-dorado text-azul-oscuro hover:bg-yellow-400' 
                              : 'bg-verde-azulado text-white hover:bg-teal-600 border-2 border-white'
                            }
                          `}
                        >
                          {button.isVideo && <Play size={20} />}
                          {button.text}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Estilos personalizados para la paginación */}
      <style jsx>{`
        .heroSlider :global(.swiper-pagination) {
          bottom: 30px !important;
        }

        .heroSlider :global(.custom-bullet) {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          margin: 0 6px;
          transition: all 0.3s ease;
        }

        .heroSlider :global(.custom-bullet-active) {
          background: #fccc00;
          width: 40px;
          border-radius: 6px;
        }

        .heroSlider :global(.custom-bullet:hover) {
          background: rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;