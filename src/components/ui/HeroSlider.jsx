import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import VideoModal from './VideoModal'; 

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroSlider = () => {
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');

  const slides = [
    {
      id: 1,
      type: 'image',
      title: 'Admisión y Traslados 2025 – 2026',
      imageMobile: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=430&h=700&fit=crop',
      imageDesktop: '/Hero/Admision.jpg',
      buttons: [
        { text: 'Agenda una Visita Guiada', link: '/contacto', style: 'primary' },
      ],
    },
    {
      id: 2,
      type: 'video',
      title: 'Nuestros Espacios Educativos',
      videoUrl: '/Hero/Admision2026.mp4',

      // 📱 Imagen estática para móvil
      imageMobile: '/Hero/Admision2026.jpg',

      // 🖥️ Video para desktop
      imageDesktop: '/Hero/Admision2026.mp4',

      buttons: [
        { text: 'Ver noticia', link: '/comunidad', style: 'primary' },
        { text: 'Ver video', style: 'secondary', isVideo: true },
      ],
    },
    {
      id: 3,
      type: 'image',
      title: 'Formamos Científicos Líderes para el Mundo',
      imageMobile: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=430&h=700&fit=crop',
      imageDesktop: '/Hero/Futuro.jpg',
      buttons: [{ text: 'Conócenos', link: '/nosotros', style: 'primary' }],
    },
    {
      id: 4,
      type: 'image',
      title: 'Un entorno Seguro y Familiar para tus hijos',
      imageMobile: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=430&h=700&fit=crop',
      imageDesktop: '/Hero/28.jpg',
      buttons: [
        { text: 'Inicia el Proceso de Admisión', link: '/admision', style: 'primary' },
      ],
    },
  ];

  const handleButtonClick = (button, slide) => {
    if (button.isVideo) {
      setVideoSrc(slide.videoUrl);
      setShowVideo(true);
    } else {
      window.location.href = button.link;
    }
  };

  return (
    <section className="heroSlider relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={1400}
        autoplay={{
          delay: 3800,
          disableOnInteraction: false,
        }}
        fadeEffect={{ crossFade: true }}
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

              {/* --- VIDEO SOLO EN DESKTOP --- */}
              {slide.type === 'video' ? (
                <>
                  <video
                   ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={slide.videoUrl} type="video/mp4" />
                  </video>

                  {/* Imagen para móvil */}
                  <img
                    src={slide.imageMobile}
                    className="absolute inset-0 w-full h-full object-cover md:hidden"
                    alt={slide.title}
                  />
                </>
              ) : (
                <picture className="absolute inset-0">
                  <source srcSet={slide.imageMobile} media="(max-width: 767px)" />
                  <img
                    src={slide.imageDesktop}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </picture>
              )}

              {/* CONTENIDO */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                  >
                    <h1 className="font-anton text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight drop-shadow-lg">
                      {slide.title}
                    </h1>

                    {/* BOTONES */}
                    <div className="flex flex-col sm:flex-row gap-3 items-start">
                      {slide.buttons.map((button, index) => (
                        <motion.button
                          key={index}
                          onClick={() => handleButtonClick(button, slide)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-3 bg-[#ffcd00] text-[#013055]
                            font-montserrat font-semibold px-8 py-3 rounded-xl text-lg
                            hover:bg-[#fccc00] transition-all duration-300 shadow-md hover:shadow-xl"
                        >
                          {button.isVideo && <Play size={20} />}
                          {button.text}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Estilos de paginación */}
      <style jsx>{`
        .heroSlider :global(.swiper-pagination) {
          bottom: 30px !important;
        }
        .heroSlider :global(.custom-bullet) {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          margin: 0 6px;
          transition: all 0.3s ease;
          border-radius: 50%;
        }
        .heroSlider :global(.custom-bullet-active) {
          background: #fccc00;
          width: 38px;
          border-radius: 6px;
        }
      `}</style>

      {/* MODAL */}
      <VideoModal
        isOpen={showVideo}
        onClose={() => setShowVideo(false)}
        videoSrc={videoSrc}
      />
    </section>
  );
};

export default HeroSlider;
