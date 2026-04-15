import { memo } from "react";

const logos = [
  {
    name: "Santillana",
    src: "/Inicio/Partners/LOG_SANTILLANA.png",
    url: "https://www.santillana.com.pe/",
  },
  {
    name: "Richmond",
    src: "/Inicio/Partners/LOG_RICHMOND.png",
    url: "https://richmondsolution.com/",
  },
  {
    name: "SIEWEB",
    src: "/Inicio/Partners/LOG_SIEWEB.png",
    url: "https://sieweb.com.pe/",
  },
  {
    name: "Cámara de Comercio de Cajamarca",
    src: "/Inicio/Partners/LOG_CAMARA.png",
    url: "https://camcajamarca.com.pe/",
  },
  {
    name: "Google for Education",
    src: "/Inicio/Partners/LOG_GOOGLE.png",
    url: "https://edu.google.com/intl/es-419_ALL/",
  },
  {
    name: "PMI",
    src: "/Inicio/Partners/LOG_PMI.png",
    url: "https://www.pmi.org/",
  },
];

const repeatedLogos = [...logos, ...logos];

function AliadosSlider() {
  return (
    <div className="w-full overflow-hidden py-8 bg-[#013055]">
      <div className="flex animate-scroll gap-12 items-center">
        {repeatedLogos.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visitar ${item.name}`}
            className="flex-shrink-0"
          >
            <div
              className="flex items-center justify-center rounded-xl p-4"
              style={{ backgroundColor: "white" }}
            >
              <img
                src={item.src}
                alt={`Logo ${item.name}`}
                width="180"
                height="80"
                loading="lazy"
                decoding="async"
                className="h-16 md:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default memo(AliadosSlider);
