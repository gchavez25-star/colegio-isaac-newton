import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function LogoNewton() {
  const containerRef = useRef(null);
  const [width, setWidth] = useState("auto");

  // Observa cambios en el tamaño del contenedor sin lag
  useEffect(() => {
    if (!containerRef.current) return;

    const topSpan = containerRef.current.querySelector(".top-text");
    if (!topSpan) return;

    const resizeObserver = new ResizeObserver(() => {
      setWidth(`${topSpan.offsetWidth}px`);
    });

    resizeObserver.observe(topSpan);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <Link
      to="/"
      className="flex items-center select-none cursor-pointer hover:opacity-90 transition-opacity"
    >
      <div className="flex items-center gap-2 sm:gap-3">

        {/* Escudo */}
        <img
          src="/Escudo líneas.png"
          alt="Escudo Isaac Newton"
          className="h-8 xs:h-9 sm:h-10 md:h-11 lg:h-12 w-auto object-contain flex-shrink-0"
        />

        {/* Línea amarilla */}
        <div className="bg-[#fccc00] w-0.5 sm:w-[3px] h-8 xs:h-9 sm:h-10 md:h-11 lg:h-12" />

        {/* Textos */}
        <div
          ref={containerRef}
          className="flex flex-col justify-center leading-tight text-white font-montserrat"
        >
          {/* Texto superior */}
          <span
            className="top-text block font-medium 
                       text-[7px] xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs"
            style={{ whiteSpace: "nowrap" }}
          >
            Colegio Privado de Ciencias
          </span>

          {/* Texto principal (Newton) */}
          <span
            className="block font-bold tracking-wide
                       text-[10px] xs:text-[11px] sm:text-[13px] md:text-[15px] lg:text-lg"
            style={{
              width,
              whiteSpace: "nowrap",
              textAlign: "justify",
              textAlignLast: "justify",
              textJustify: "inter-character"
            }}
          >
            ISAAC NEWTON
          </span>
        </div>

      </div>
    </Link>
  );
}
