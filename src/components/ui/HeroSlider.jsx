import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import VideoModal from "./VideoModal";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HeroSlider = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const MotionDiv = motion.div;
  const MotionButton = motion.button;

  const slides = [
    {
      id: 1,
      type: "image",
      title: "Admisión y Traslados 2026 – 2027",
      imageMobile: "/Inicio/Hero/Prueba.jpg",
      imageDesktop: "/Inicio/Hero/Prueba.jpg",
      buttons: [
        {
          text: "Agenda una Visita Guiada",
          link: "/agenda-visita",
          style: "primary",
        },
      ],
    },
    {
      id: 2,
      type: "image",
      title: "Nuestros Espacios Educativos",
      imageMobile: "/Inicio/Hero/Visita.jpg",
      imageDesktop: "/Inicio/Hero/Visita.jpg",
      videoUrl: "https://www.youtube.com/embed/PvHZsaZvqNg",
      buttons: [
        {
          text: "Ver noticia",
          link: "/comunidad/publicacionesw",
          style: "primary",
        },
        { text: "Ver video", style: "secondary", isVideo: true },
      ],
    },
    {
      id: 3,
      type: "image",
      title: "Formamos Científicos Líderes para el Mundo",
      imageMobile: "/Inicio/Hero/Alumno.jpg",
      imageDesktop: "/Inicio/Hero/Alumno.jpg",
      buttons: [{ text: "Conócenos", link: "/nosotros", style: "primary" }],
    },
    {
      id: 4,
      type: "image",
      title: "Un entorno Seguro y Familiar para tus hijos",
      imageMobile: "/Inicio/Hero/Familia.jpg",
      imageDesktop: "/Inicio/Hero/Familia.jpg",
      buttons: [
        {
          text: "Inicia el Proceso de Admisión",
          link: "/admision",
          style: "primary",
        },
      ],
    },
  ];

  const handleButtonClick = (button, slide) => {
    if (button.isVideo) {
      if (slide.videoUrl) {
        setVideoSrc(slide.videoUrl);
        setShowVideo(true);
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
        autoplay={{ delay: 4200, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet custom-bullet",
          bulletActiveClass:
            "swiper-pagination-bullet-active custom-bullet-active",
        }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <picture className="absolute inset-0">
                <source srcSet={slide.imageMobile} media="(max-width: 767px)" />
                <img
                  src={slide.imageDesktop}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </picture>

              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  <MotionDiv
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="max-w-2xl"
                  >
                    <h1 className="font-anton text-3xl md:text-5xl text-white mb-6">
                      {slide.title}
                    </h1>

                    <div className="flex flex-col sm:flex-row gap-3">
                      {slide.buttons.map((button, index) => (
                        <MotionButton
                          key={index}
                          onClick={() => handleButtonClick(button, slide)}
                          whileHover={{ scale: 1.07 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-3 bg-[#ffcd00] text-[#013055]
                          font-semibold px-8 py-3 rounded-xl text-lg"
                        >
                          {button.isVideo && <Play size={20} />}
                          {button.text}
                        </MotionButton>
                      ))}
                    </div>
                  </MotionDiv>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* MODAL */}
      <VideoModal
        isOpen={showVideo}
        videoSrc={videoSrc}
        onClose={() => {
          setShowVideo(false);
          setVideoSrc("");
        }}
      />
    </section>
  );
};

export default HeroSlider;
