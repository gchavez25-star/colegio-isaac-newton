import React from "react";

const logos = [
  {
    src: "/Partners/LOG_SANTILLANA.png",
    url: "https://www.santillana.com.pe/",
  },
  {
    src: "/Partners/LOG_RICHMOND.png",
    url: "https://richmondsolution.com/",
  },
  {
    src: "/Partners/LOG_SIEWEB.png",
    url: "https://sieweb.com.pe/",
  },
  {
    src: "/Partners/LOG_CAMARA.png",
    url: "https://camcajamarca.com.pe/",
  },
  {
    src: "/Partners/LOG_GOOGLE.png",
    url: "https://edu.google.com/intl/es-419_ALL/",
  },
  {
    src: "/Partners/LOG_PMI.png",
    url: "https://www.pmi.org/",
  },
];

export default function AliadosSlider() {
  return (
    <div className="w-full overflow-hidden py-8 bg-[#013055]">
      <div className="flex animate-scroll gap-12 items-center">
        {[...logos, ...logos].map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <div
              className="flex items-center justify-center rounded-xl p-4"
              style={{ backgroundColor: "white" }}
            >
              <img
                src={item.src}
                alt="Logo aliado"
                className="h-16 md:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-duration: 9s"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
