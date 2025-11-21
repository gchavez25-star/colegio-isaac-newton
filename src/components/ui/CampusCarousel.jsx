import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function CampusCarousel() {
  return (
    <section className="campus-carousel-container w-full py-10 ">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        speed={2500}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 150,
          modifier: 2,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide--one">
          <span>Campus Central</span>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide--two">
          <span>Campus Newton</span>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide--three">
          <span>Laboratorios</span>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide--four">
          <span>Áreas Deportivas</span>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide--five">
          <span>Auditorio</span>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
