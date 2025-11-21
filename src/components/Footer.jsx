import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-[#013055] text-white pt-16">

      {/* ================= PARTE SUPERIOR ================= */}
        <div className="container mx-auto px-4 grid grid-cols-[auto_1fr_auto_auto] gap-12 items-center">

          {/* 1️⃣ LOGO — se adapta automáticamente */}
          <div className="flex justify-start">
            <img
              src="/Escudo líneas.png"
              className="h-28 brightness-0 invert object-contain"
              alt="Logo"
            />
          </div>

          {/* 2️⃣ CAMPUS — ancho ampliado */}
          <div className="flex justify-start gap-8">

            {/* Tarjeta Cajamarca */}
            <div className="backdrop-blur-md rounded-2xl p-6 w-56 ">
              <h3 className="text-lg font text-[#fccc00] mb-3">
                Campus Cajamarca
              </h3>
              <p className="text-sm text-white whitespace-nowrap">
                <span className="block">Jr. Cruz de Piedra N° 582</span>
                <span className="block">920 438 721</span>
              </p>
            </div>

            {/* Tarjeta Baños del Inca */}
            <div className="backdrop-blur-md rounded-2xl p-6 w-56 ">
              <h3 className="text-lg font text-[#fccc00] mb-3">
                Campus Baños del Inca
              </h3>
              <p className="text-sm text-white whitespace-nowrap">
                 <a
                  href="https://www.google.com/maps?q=Jr.+Yahuar+Huaca+779+Baños+del+Inca"
                  target="_blank"
                  className="block whitespace-nowrap hover:text-[#007a75]">
                  Jr. Yahuar Huaca N° 779
                </a>
                 <a
                  href="https://wa.me/51932374369"
                  target="_blank"
                  className="block whitespace-nowrap hover:text-[#fccc00]">
                  932 374 369
                </a>
                 <a
                  href="mailto:admision@inewton.edu.pe"
                  className="block whitespace-nowrap hover:text-[#fccc00]">
                  ✉ admision@inewton.edu.pe
                </a>
              </p>
            </div>

          </div>

          {/* 3️⃣ REDES SOCIALES — ahora centradas */}
          <div className="flex justify-center items-center gap-5">
           <div className="flex justify-center items-center gap-5">

  {/* FACEBOOK */}
  <a
    href="https://facebook.com/inewton"   // 👉 cambia por tu URL
    target="_blank"
    className="font-bold h-12 w-12 rounded-full bg-white/10 flex items-center justify-center
               hover:bg-[#fccc00] hover:text-[#013055] transition shadow-md"
  >
    <Facebook size={22} />
  </a>

  {/* INSTAGRAM */}
  <a
    href="https://instagram.com/inewton"  // 👉 cambia por tu URL
    target="_blank"
    className="font-bold h-12 w-12 rounded-full bg-white/10 flex items-center justify-center
               hover:bg-[#fccc00] hover:text-[#013055] transition shadow-md"
  >
    <Instagram size={22} />
  </a>

  {/* YOUTUBE */}
  <a
    href="https://youtube.com/@inewton"  // 👉 cambia por tu URL
    target="_blank"
    className="font-bold h-12 w-12 rounded-full bg-white/10 flex items-center justify-center
               hover:bg-[#fccc00] hover:text-[#013055] transition shadow-md"
  >
    <Youtube size={22} />
  </a>

  {/* TIKTOK (reemplaza al LinkedIn) */}
  <a
    href="https://tiktok.com/@inewton"   // 👉 cambia por tu URL
    target="_blank"
    className="font-bold h-12 w-12 rounded-full bg-white/10 flex items-center justify-center
               hover:bg-[#fccc00] hover:text-[#013055] transition shadow-md"
  >
    <Tiktok size={22} />
  </a>

</div>

          </div>

          {/* 4️⃣ BOTÓN ADMISION */}
          <div className="flex justify-end">
            <a
              href="/Contacto"
              className="font-bold px-8 py-3 border border-white rounded-full text-sm hover:bg-[#fccc00] 
                        hover:text-[#013055] transition shadow-md whitespace-nowrap"
            >
              Admisión y Traslados →
            </a>
          </div>
        </div>


      {/* ================= ENLACES MEDIOS ================= */}
      <div className="mt-14 border-t border-white/20 py-10">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 text-center text-sm gap-6">

          <a className="hover:text-[#fccc00] transition">✦ Libro de reclamaciones</a>
          <a className="hover:text-[#fccc00] transition">✦ Solicite información</a>
          <a className="hover:text-[#fccc00] transition">✦ Trabaja con nosotros</a>
          <a className="hover:text-[#fccc00] transition">✦ Términos legales</a>

        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="text-center py-6 text-sm text-white/80 border-t border-white/10">
        © 2025 Colegio Privado de Ciencias Isaac Newton. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
