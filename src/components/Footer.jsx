import { Facebook, Instagram, Youtube } from "lucide-react";
import { FaTiktok as Tiktok } from "react-icons/fa6";



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
                   <a
                  href="https://www.google.com/maps/place/Jirón+Cruz+de+Piedra+582,+Cajamarca+06002/@-7.1581757,-78
                        .521763,824m/data=!3m1!1e3!4m6!3m5!1s0x91b25af8ca0453bd:0xd21c7cc12fafaf02!8m2!3d-
                        7.1581757!4d-78.5191881!16s%2Fg%2F11c2d9pqtn?authuser=1&entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  className="block whitespace-nowrap hover:text-[#ffcd00]">
                  Jr. Cruz de Piedra N° 582
                </a>
                 <a
                  href="https://wa.me/51932274369"
                  target="_blank"
                  className="block whitespace-nowrap hover:text-[#ffcd00]">
                  932 374 369
                </a>
                 <a
                  href="mailto:admision@inewton.edu.pe"
                  className="block whitespace-nowrap hover:text-[#ffcd00]">
                  ✉ admision@inewton.edu.pe
                </a>
              </p>
            </div>

            {/* Tarjeta Baños del Inca */}
            <div className="backdrop-blur-md rounded-2xl p-6 w-56 ">
              <h3 className="text-lg font text-[#fccc00] mb-3">
                Campus Baños del Inca
              </h3>
              <p className="text-sm text-white whitespace-nowrap">
                 <a
                  href="https://www.google.com/maps/place/Colegio+Isaac+Newton/@-7.1677787,-78.4590773,19z/data=
                  !4m15!1m8!3m7!1s0x91b244dbfc60b8e3:0xb39a7c0873e74a5c!2sYahuar+Huaca+728-902,+Baños+del+Inca+06004!
                  3b1!8m2!3d-7.1675386!4d-78.4589437!16s%2Fg%2F11h76cc8vc!3m5!1s0x91b2456d977947b9:0x399e095184287eda!8
                  m2!3d-7.1677904!4d-78.4584945!16s%2Fg%2F11vl1p_5lb?authuser=1&entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAF
                  QAw%3D%3D"
                  target="_blank"
                  className="block whitespace-nowrap hover:text-[#007a75]">
                  Jr. Yahuar Huaca N° 779
                </a>
                 <a
                  href="https://wa.me/51920438721"
                  target="_blank"
                  className="block whitespace-nowrap hover:text-[#fccc00]">
                  920438721
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
    href="https://www.facebook.com/IsaacNewtonCajamarca"   // 👉 cambia por tu URL
    target="_blank"
    className="font-bold h-12 w-12 rounded-full bg-white/10 flex items-center justify-center
               hover:bg-[#fccc00] hover:text-[#013055] transition shadow-md"
  >
    <Facebook size={22} />
  </a>

  {/* INSTAGRAM */}
  <a
    href="https://www.instagram.com/colegio_isaac_newton/?hl=es-la"  // 👉 cambia por tu URL
    target="_blank"
    className="font-bold h-12 w-12 rounded-full bg-white/10 flex items-center justify-center
               hover:bg-[#fccc00] hover:text-[#013055] transition shadow-md"
  >
    <Instagram size={22} />
  </a>

  {/* YOUTUBE */}
  <a
    href="https://www.youtube.com/@ColegioPrivadoIsaacNewton"  // 👉 cambia por tu URL
    target="_blank"
    className="font-bold h-12 w-12 rounded-full bg-white/10 flex items-center justify-center
               hover:bg-[#fccc00] hover:text-[#013055] transition shadow-md"
  >
    <Youtube size={22} />
  </a>

  {/* TIKTOK (reemplaza al LinkedIn) */}
  <a
    href="https://www.tiktok.com/@colegio_isaacnewton"   // 👉 cambia por tu URL
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
