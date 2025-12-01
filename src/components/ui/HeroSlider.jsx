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
      imageMobile: '/Hero/Prueba.jpg',
      imageDesktop: '/Hero/Prueba.jpg',
      buttons: [
        { text: 'Agenda una Visita Guiada', link: '/contacto', style: 'primary' },
      ],
    },
    {
      id: 2,
      type: 'image',
      title: 'Nuestros Espacios Educativos',
      imageMobile: '/Hero/Visita.jpg',
      imageDesktop: '/Hero/Visita.jpg',
      videoUrl: 'https://drive.google.com/uc?export=download&id=6vKq5Ac-hQ96UdR20luryTy42bkTFFv8',
      buttons: [
        { text: 'Ver noticia', link: '/comunidad', style: 'primary' },
        { text: 'Ver video', style: 'secondary', isVideo: true },
      ],
    },
    {
      id: 3,
      type: 'image',
      title: 'Formamos Científicos Líderes para el Mundo',
      imageMobile: '/Hero/Alumno.jpg',
      imageDesktop: '/Hero/Alumno.jpg',
      buttons: [{ text: 'Conócenos', link: '/nosotros', style: 'primary' }],
    },
    {
      id: 4,
      type: 'image',
      title: 'Un entorno Seguro y Familiar para tus hijos',
      imageMobile: '/Hero/Familia.jpg',
      imageDesktop: '/Hero/Familia.jpg',
      buttons: [
        { text: 'Inicia el Proceso de Admisión', link: '/admision', style: 'primary' },
      ],
    },
  ];

  const handleButtonClick = (button, slide) => {
    if (button.isVideo) {
      if (slide.videoUrl) {
        setVideoSrc(slide.videoUrl);
        setShowVideo(true);
      } else {
        console.warn('No se encontró videoUrl en este slide');
      }
    } else {
      window.location.href = button.link;
    }
  };

  return (
    <section className="heroSlider relative w-full h-screen overflow-hidden">

      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1600}
        autoplay={{
          delay: 4200,
          disableOnInteraction: false,
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

              {/* VIDEO DESKTOP */}
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

              {/* OVERLAY PROFESIONAL */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

              {/* CONTENIDO */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    className="max-w-2xl"
                  >
                    <h1 className="font-anton text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight drop-shadow-xl">
                      {slide.title}
                    </h1>

                    {/* BOTONES */}
                    <div className="flex flex-col sm:flex-row gap-3 items-start">
                      {slide.buttons.map((button, index) => (
                        <motion.button
                          key={index}
                          onClick={() => handleButtonClick(button, slide)}
                          whileHover={{ scale: 1.07 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-3 bg-[#ffcd00] text-[#013055]
                            font-montserrat font-semibold px-8 py-3 rounded-xl text-lg
                            hover:bg-[#ffe066] transition-all duration-300 shadow-lg hover:shadow-2xl"
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
          width: 40px;
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
