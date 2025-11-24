import React from "react";

export default function LogoNewton({ className = "", variant = "header" }) {
  // Tamaños según el uso
  const sizes = {
    header: "h-12 md:h-14",
    large: "h-20 md:h-24",
    small: "h-8 md:h-10"
  };

  return (
    <div className={`flex items-center gap-2 md:gap-3 select-none ${className}`}>
      
      {/* Escudo SVG Detallado */}
      <svg 
        viewBox="0 0 120 120" 
        className={`w-auto flex-shrink-0 ${sizes[variant] || sizes.header}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradiente para el escudo */}
          <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#014a7a" />
            <stop offset="100%" stopColor="#013055" />
          </linearGradient>
          
          {/* Sombra */}
          <filter id="shadow">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
          </filter>
        </defs>
        
        {/* Forma del escudo principal */}
        <path
          d="M60 8 L100 25 L100 60 Q100 85 60 110 Q20 85 20 60 L20 25 Z"
          fill="url(#shieldGradient)"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          filter="url(#shadow)"
        />
        
        {/* Borde decorativo interior */}
        <path
          d="M60 15 L95 30 L95 60 Q95 82 60 102 Q25 82 25 60 L25 30 Z"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          opacity="0.6"
        />
        
        {/* División en cuadrantes */}
        <line x1="60" y1="30" x2="60" y2="85" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.4"/>
        <line x1="30" y1="57" x2="90" y2="57" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.4"/>
        
        {/* Cuadrante superior izquierdo - Átomo */}
        <g transform="translate(45, 43)">
          <circle cx="0" cy="0" r="2.5" fill="#FCCC00"/>
          <ellipse cx="0" cy="0" rx="10" ry="5" fill="none" stroke="#FFFFFF" strokeWidth="1.2"/>
          <ellipse cx="0" cy="0" rx="10" ry="5" fill="none" stroke="#FFFFFF" strokeWidth="1.2" transform="rotate(60)"/>
          <ellipse cx="0" cy="0" rx="10" ry="5" fill="none" stroke="#FFFFFF" strokeWidth="1.2" transform="rotate(120)"/>
          <circle cx="10" cy="0" r="1.8" fill="#FCCC00"/>
          <circle cx="-5" cy="8.5" r="1.8" fill="#FCCC00"/>
          <circle cx="-5" cy="-8.5" r="1.8" fill="#FCCC00"/>
        </g>
        
        {/* Cuadrante superior derecho - Libros */}
        <g transform="translate(75, 43)">
          {/* Libro 1 */}
          <rect x="-8" y="-6" width="7" height="10" fill="#FFFFFF" stroke="#013055" strokeWidth="0.5"/>
          <line x1="-4.5" y1="-6" x2="-4.5" y2="4" stroke="#013055" strokeWidth="0.4"/>
          
          {/* Libro 2 */}
          <rect x="1" y="-5" width="7" height="9" fill="#FCCC00" stroke="#013055" strokeWidth="0.5"/>
          <line x1="4.5" y1="-5" x2="4.5" y2="4" stroke="#013055" strokeWidth="0.4"/>
          
          {/* Libro 3 */}
          <rect x="-4" y="4" width="8" height="2" fill="#FFFFFF" stroke="#013055" strokeWidth="0.5"/>
        </g>
        
        {/* Cuadrante inferior - Laureles */}
        <g transform="translate(60, 72)">
          {/* Rama izquierda */}
          <path 
            d="M-20,5 Q-15,0 -12,2 Q-9,4 -6,3 Q-3,2 0,5" 
            fill="none" 
            stroke="#FCCC00" 
            strokeWidth="1.5"
          />
          {/* Hojas izquierda */}
          <ellipse cx="-16" cy="1" rx="2.5" ry="4" fill="#FCCC00" opacity="0.8" transform="rotate(-30 -16 1)"/>
          <ellipse cx="-12" cy="2" rx="2.5" ry="4" fill="#FCCC00" opacity="0.8" transform="rotate(-15 -12 2)"/>
          <ellipse cx="-8" cy="3" rx="2.5" ry="4" fill="#FCCC00" opacity="0.8" transform="rotate(0 -8 3)"/>
          <ellipse cx="-4" cy="3" rx="2.5" ry="4" fill="#FCCC00" opacity="0.8" transform="rotate(15 -4 3)"/>
          
          {/* Rama derecha */}
          <path 
            d="M20,5 Q15,0 12,2 Q9,4 6,3 Q3,2 0,5" 
            fill="none" 
            stroke="#FCCC00" 
            strokeWidth="1.5"
          />
          {/* Hojas derecha */}
          <ellipse cx="16" cy="1" rx="2.5" ry="4" fill="#FCCC00" opacity="0.8" transform="rotate(30 16 1)"/>
          <ellipse cx="12" cy="2" rx="2.5" ry="4" fill="#FCCC00" opacity="0.8" transform="rotate(15 12 2)"/>
          <ellipse cx="8" cy="3" rx="2.5" ry="4" fill="#FCCC00" opacity="0.8" transform="rotate(0 8 3)"/>
          <ellipse cx="4" cy="3" rx="2.5" ry="4" fill="#FCCC00" opacity="0.8" transform="rotate(-15 4 3)"/>
        </g>
        
        {/* Círculo central decorativo */}
        <circle cx="60" cy="57" r="15" fill="none" stroke="#FFFFFF" strokeWidth="1" opacity="0.3"/>
        
        {/* Texto en el escudo */}
        <text 
          x="60" 
          y="100" 
          textAnchor="middle" 
          fontSize="7" 
          fill="#FFFFFF" 
          fontFamily="serif"
          fontWeight="bold"
          letterSpacing="1"
        >
          SCIENTIA
        </text>
        
        {/* Año de fundación (opcional) */}
        <text 
          x="60" 
          y="108" 
          textAnchor="middle" 
          fontSize="5" 
          fill="#FCCC00" 
          fontFamily="serif"
        >
          EST. 2024
        </text>
      </svg>
      
      {/* Línea vertical amarilla dorada */}
      <div className={`${sizes[variant] || sizes.header} w-0.5 md:w-1 bg-[#fccc00] flex-shrink-0`}></div>
      
      {/* Textos */}
      <div className="flex flex-col justify-center leading-none text-white">
        <span className="text-[10px] md:text-xs font-normal tracking-normal mb-0.5 md:mb-1 whitespace-nowrap">
          Colegio Privado de Ciencias
        </span>
        <span className="text-base md:text-xl lg:text-2xl font-bold tracking-tight whitespace-nowrap">
          ISAAC NEWTON
        </span>
      </div>

    </div>
  );
}
