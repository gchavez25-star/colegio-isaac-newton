import React from "react";

export default function LogoNewton() {
  return (
    <div className="flex items-center scale-70 sm:scale-80 md:scale-85 origin-left gap-3 select-none">
      {/* Escudo */}
      <img
        src="/Escudo líneas.png"
        alt="Escudo del colegio"
        className="h-10 w-8 sm:h-12 sm:w-10 md:h-14 md:w-12"
      />

      {/* Línea amarilla */}
      <div className="h-8 sm:h-10 md:h-14 w-1 bg-[#fccc00]"></div>

      {/* Texto oculto en móvil, visible desde sm */}
      <div className="hidden sm:flex flex-col leading-tight text-white w-max">
        <span className="text-sm sm:text-base md:text-lg font-montserrat px-1">
          Colegio Privado de Ciencias
        </span>
        <span className="font-anton tracking-[0.14em] text-2xl sm:text-3xl md:text-4xl px-1" >
          ISAAC NEWTON 
        </span>
      </div>
    </div>
  );
}
