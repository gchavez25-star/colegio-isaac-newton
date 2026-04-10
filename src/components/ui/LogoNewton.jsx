import React from "react";
import { Link } from "react-router-dom";

export default function LogoNewton() {
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
          className="
            h-7 xs:h-8 sm:h-9 md:h-10 lg:h-12 
            w-auto object-contain flex-shrink-0
          "
        />

        {/* Línea amarilla */}
        <div
          className="
            bg-[#fccc00] 
            w-[2px] xs:w-[2.5px] sm:w-[3px] lg:w-[4px] 
            h-7 xs:h-8 sm:h-9 md:h-10 lg:h-12
          "
        />

        {/* Texto */}
        <div
          className="
            flex flex-col justify-center 
            leading-tight text-white font-montserrat
          "
        >

          {/* Superior */}
          <span
            className="
              block font-medium whitespace-nowrap
              text-[7.5px] xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs
            "
          >
            Colegio Privado de Ciencias
          </span>

          {/* Principal */}
          <span
            className="
              block font-bold whitespace-nowrap
              text-[11px] xs:text-[12px] sm:text-[13px] md:text-[15px] lg:text-lg
              tracking-[0.6px] sm:tracking-[0.8px] md:tracking-[1px] lg:tracking-[1.3px]
            "
          >
            ISAAC NEWTON
          </span>

        </div>

      </div>
    </Link>
  );
}
