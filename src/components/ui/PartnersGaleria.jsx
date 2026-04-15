import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import AliadosSlider from "./AliadosSlider";

const socialItems = [
  {
    url: "https://www.instagram.com/reel/DWoGUgjEYHs/?hl=es-la",
    src: "/Instagram/✨ Día Mundial de Concienciación sobre el Autismo 💙Hoy, en el Colegio Isaac Newton, nos unimos p.mp4",
  },
  {
    url: "https://www.instagram.com/reel/DV_dJENkcGR/?hl=es-la",
    src: "/Instagram/📱 ¿Sabías que ahora el uso de celulares en colegios está regulado en el PerúLa Ley N.º 32385 bu.mp4",
  },
  {
    url: "https://www.instagram.com/reel/DVycay7Edj9/?hl=es-la",
    src: "/Instagram/🚀 En el Colegio Privado de Ciencias “Isaac Newton”, sabemos que los grandes logros empiezan con.mp4",
  },
  {
    url: "https://www.instagram.com/reel/DVkSzAlkRGw/?hl=es-la",
    src: "/Instagram/Revivamos juntos este gran momento… ✨Ayer nuestros campus de Cajamarca y Los Baños del Inca volv.mp4",
  },
  {
    url: "https://www.instagram.com/reel/DVZp3AlEQAZ/?hl=es-la",
    src: "/Instagram/✨ Nuestro director, Ricardo Raúl Soto Collazos, comparte la visión que marcará el rumbo del Cole.mp4",
  },
  {
    url: "https://www.instagram.com/reel/DVUDt99Ebce/?hl=es-la",
    src: "/Instagram/✨📚 ¡Estamos a nada de empezar una nueva aventura escolar!Los pasillos volverán a llenarse de so.mp4",
  },
  {
    url: "https://www.instagram.com/reel/DVTn3TcjiVL/?hl=es-la",
    src: "/Instagram/Así vivió Brina su primer día en Newton ✨📚Desde que llegó, empezó a recorrer cada espacio, desc.mp4",
  },
  {
    url: "https://www.instagram.com/reel/DUb5DRZEeBt/?hl=es-la",
    src: "/Instagram/Felicitamos con especial reconocimiento a Angie Juliet Solís Salazar 💐 por su destacada partici.mp4",
  },
];

function LazySocialVideo({ src }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;

    if (!container || !video || !("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.2 },
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (shouldLoad && video) {
      video.load();
      video.play().catch(() => {});
    }
  }, [shouldLoad]);

  return (
    <div ref={containerRef} className="w-full h-full bg-black/20">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        preload="none"
        muted
        loop
        playsInline
        width="360"
        height="640"
        aria-label="Video de la galeria social Isaac Newton"
      >
        {shouldLoad && <source src={src} type="video/mp4" />}
      </video>
    </div>
  );
}

export default function PartnersGaleria() {
  return (
    <section className="py-20 bg-azul-oscuro text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-anton text-5xl md:text-5xl mb-4">
            Partners Estratégicos
          </h2>
          <p className="text-lg max-w-5xl mx-auto">
            Más del 85% de nuestros egresados ingresan a las mejores universidades del país
          </p>
        </motion.div>

        {/* Slider Aliados */}
        <AliadosSlider />

        {/* Galería Social */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-6 mb-12">
            <div className="flex flex-col items-center space-y-3">
              <h2 className="font-anton text-4xl md:text-5xl text-white drop-shadow-lg">
                Galería Social
              </h2>
              <p className="text-white/80 text-lg text-center">
                Momentos destacados del colegio compartidos en nuestras redes.
              </p>

              <a
                href="https://www.instagram.com/colegio_isaac_newton/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 mt-3 text-white hover:text-[#fccc00] transition text-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.5h8.5A3.75 3.75 0 0120 7.25v9.5A3.75 3.75 0 0116.25 20h-8.5A3.75 3.75 0 014 16.75v-9.5A3.75 3.75 0 017.75 3.5zm10 1a1 1 0 100 2 1 1 0 000-2zM12 7.25A4.75 4.75 0 1012 16.75a4.75 4.75 0 000-9.5zm0 1.5a3.25 3.25 0 110 6.5 3.25 3.25 0 010-6.5z" />
                </svg>
                <span>@colegio_isaac_newton</span>
              </a>
            </div>
          </div>

          {/* Grid mosaico */}
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {socialItems.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative rounded-2xl overflow-hidden shadow-xl group"
                >
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      className="w-10 h-10 opacity-90"
                    >
                      <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.5h8.5A3.75 3.75 0 0120 7.25v9.5A3.75 3.75 0 0116.25 20h-8.5A3.75 3.75 0 014 16.75v-9.5A3.75 3.75 0 017.75 3.5zm10 1a1 1 0 100 2 1 1 0 000-2zM12 7.25A4.75 4.75 0 1012 16.75a4.75 4.75 0 000-9.5zm0 1.5a3.25 3.25 0 110 6.5 3.25 3.25 0 010-6.5z" />
                    </svg>
                  </div>

                  <LazySocialVideo src={item.src} />
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
