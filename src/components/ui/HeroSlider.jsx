import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Play } from "lucide-react";
import VideoModal from "./VideoModal";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    title: "Admisión y Traslados 2026 - 2027",
    imageMobile: "/Inicio/Hero/Prueba.jpg",
    imageDesktop: "/Inicio/Hero/Prueba.jpg",
    imageMobileWebp: "/optimized/Inicio/Hero/Prueba-960.webp",
    imageDesktopWebp: "/optimized/Inicio/Hero/Prueba-1920.webp",
    buttons: [
      {
        text: "Agenda una Visita Guiada",
        link: "/agenda-visita",
      },
    ],
  },
  {
    id: 2,
    title: "Nuestros Espacios Educativos",
    imageMobile: "/Inicio/Hero/Visita.jpg",
    imageDesktop: "/Inicio/Hero/Visita.jpg",
    imageMobileWebp: "/optimized/Inicio/Hero/Visita-960.webp",
    imageDesktopWebp: "/optimized/Inicio/Hero/Visita-1920.webp",
    videoUrl: "https://www.youtube.com/embed/PvHZsaZvqNg",
    buttons: [
      {
        text: "Ver noticia",
        link: "/comunidad/publicaciones",
      },
      { text: "Ver video", isVideo: true },
    ],
  },
  {
    id: 3,
    title: "Formamos Científicos Líderes para el Mundo",
    imageMobile: "/Inicio/Hero/Alumno.jpg",
    imageDesktop: "/Inicio/Hero/Alumno.jpg",
    imageMobileWebp: "/optimized/Inicio/Hero/Alumno-960.webp",
    imageDesktopWebp: "/optimized/Inicio/Hero/Alumno-1920.webp",
    buttons: [{ text: "Conócenos", link: "/nosotros" }],
  },
  {
    id: 4,
    title: "Un entorno Seguro y Familiar para tus hijos",
    imageMobile: "/Inicio/Hero/Familia.jpg",
    imageDesktop: "/Inicio/Hero/Familia.jpg",
    imageMobileWebp: "/optimized/Inicio/Hero/Familia-960.webp",
    imageDesktopWebp: "/optimized/Inicio/Hero/Familia-1920.webp",
    buttons: [
      {
        text: "Inicia el Proceso de Admisión",
        link: "/admision",
      },
    ],
  },
];

const HeroSlider = () => {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const handleButtonClick = useCallback((button, slide) => {
    if (button.isVideo) {
      if (slide.videoUrl) {
        setVideoSrc(slide.videoUrl);
        setShowVideo(true);
      }
      return;
    }

    if (button.link) {
      navigate(button.link);
    }
  }, [navigate]);

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
        {slides.map((slide, index) => {
          const isPrioritySlide = index === 0;
          const TitleTag = isPrioritySlide ? "h1" : "h2";

          return (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <picture className="absolute inset-0">
                <source
                  srcSet={slide.imageMobileWebp}
                  media="(max-width: 767px)"
                  type="image/webp"
                  sizes="100vw"
                />
                <source
                  srcSet={slide.imageDesktopWebp}
                  type="image/webp"
                  sizes="100vw"
                />
                <source
                  srcSet={slide.imageMobile}
                  media="(max-width: 767px)"
                  sizes="100vw"
                />
                <img
                  src={slide.imageDesktop}
                  alt={slide.title}
                  width="1920"
                  height="1280"
                  loading={isPrioritySlide ? "eager" : "lazy"}
                  fetchPriority={isPrioritySlide ? "high" : "low"}
                  decoding={isPrioritySlide ? "sync" : "async"}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
              </picture>

              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  <div
                    className="max-w-2xl animate-[headerDropdown_650ms_ease-out]"
                  >
                    <TitleTag className="font-anton text-3xl leading-tight md:text-5xl text-white mb-5 md:mb-6 max-w-[12rem] sm:max-w-none">
                      {slide.title}
                    </TitleTag>

                    <div className="flex flex-col items-start sm:flex-row gap-3">
                      {slide.buttons.map((button, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleButtonClick(button, slide)}
                          aria-label={button.text}
                          className="inline-flex items-center gap-3 bg-[#ffcd00] text-[#013055]
                          font-semibold px-4 py-2.5 sm:px-8 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-lg leading-tight transition-transform duration-300 hover:scale-[1.04] active:scale-[0.96] self-start w-fit max-w-full"
                        >
                          {button.isVideo && <Play size={20} />}
                          {button.text}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          );
        })}
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
