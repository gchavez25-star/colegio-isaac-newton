import React from "react";

export default function LogoNewton() {
  return (
    <div className="flex items-center gap-3 scale-70 sm:scale-80 md:scale-85 origin-left select-none">
      {/* Escudo + Línea amarilla siempre visibles */}
     <div className="flex items-center gap-3 shrink-0">
        <img
          src="/Escudo líneas.png"
          alt="Escudo del colegio"
          className="h-12 w-auto sm:h-14 md:h-16"
        />
        <div className="h-12 sm:h-14 md:h-16 w-1 bg-[#fccc00]"></div>
      </div>

      {/* Textos visibles en TODAS LAS PANTALLAS */}
      <div className="flex flex-col leading-tight text-white w-full">

        {/* Superior: alineado a la izquierda */}
        <span className="font-montserrat text-sm sm:text-base md:text-lg">
          Colegio Privado de Ciencias
        </span>

        {/* Inferior: alineado a la derecha */}
        <span className="font-montserrat font-semibold tracking-wide text-lg sm:text-xl md:text-3xl whitespace-nowrap text-center leading-tight">
          ISAAC NEWTON
        </span>

      </div>

    </div>
  );
}