import { Facebook, Instagram, Youtube } from "lucide-react";
import { FaTiktok as Tiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#013055] text-white pt-16">

      {/* ================= PARTE SUPERIOR ================= */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-center">

          {/* LOGO */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/Escudo líneas.png"
              className="h-24 md:h-28 brightness-0 invert object-contain"
              alt="Logo"
            />
          </div>

          {/* CAMPUS */}
          <div className="lg:col-span-2 flex flex-col sm:flex-row justify-center lg:justify-start gap-6">

            {/* Cajamarca */}
            <div className="backdrop-blur-md rounded-2xl p-6 w-full sm:w-64">
              <h3 className="text-lg font-semibold text-[#fccc00] mb-3">
                Campus Cajamarca
              </h3>
              <a
                href="https://www.google.com/maps/place/Jirón+Cruz+de+Piedra+582,+Cajamarca"
                target="_blank"
                className="block text-sm hover:text-[#fccc00] transition"
              >
                Jr. Cruz de Piedra N° 582
              </a>
              <a
                href="https://wa.me/51932274369"
                target="_blank"
                className="block text-sm hover:text-[#fccc00] transition"
              >
                932 374 369
              </a>
              <a
                href="mailto:admision@inewton.edu.pe"
                className="block text-sm hover:text-[#fccc00] transition"
              >
                ✉ admision@inewton.edu.pe
              </a>
            </div>

            {/* Baños del Inca */}
            <div className="backdrop-blur-md rounded-2xl p-6 w-full sm:w-64">
              <h3 className="text-lg font-semibold text-[#fccc00] mb-3">
                Campus Baños del Inca
              </h3>
              <a
                href="https://www.google.com/maps/place/Colegio+Isaac+Newton"
                target="_blank"
                className="block text-sm hover:text-[#fccc00] transition"
              >
                Jr. Yahuar Huaca N° 779
              </a>
              <a
                href="https://wa.me/51920438721"
                target="_blank"
                className="block text-sm hover:text-[#fccc00] transition"
              >
                920 438 721
              </a>
              <a
                href="mailto:admision@inewton.edu.pe"
                className="block text-sm hover:text-[#fccc00] transition"
              >
                ✉ admision@inewton.edu.pe
              </a>
            </div>
          </div>

          {/* REDES + BOTÓN */}
          <div className="flex flex-col items-center lg:items-end gap-6">

            {/* Redes */}
            <div className="flex gap-4">
              {[{
                href: "https://www.facebook.com/IsaacNewtonCajamarca",
                icon: <Facebook size={22} />
              },{
                href: "https://www.instagram.com/colegio_isaac_newton/?hl=es-la",
                icon: <Instagram size={22} />
              },{
                href: "https://www.youtube.com/@ColegioPrivadoIsaacNewton",
                icon: <Youtube size={22} />
              },{
                href: "https://www.tiktok.com/@colegio_isaacnewton",
                icon: <Tiktok size={22} />
              }].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center
                             hover:bg-[#fccc00] hover:text-[#013055] transition shadow-md"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* Botón */}
            <a
              href="/Contacto"
              className="font-bold px-8 py-3 border border-white rounded-full text-sm
                         hover:bg-[#fccc00] hover:text-[#013055] transition shadow-md"
            >
              Admisión y Traslados →
            </a>
          </div>
        </div>
      </div>

      {/* ================= LINKS INFERIORES ================= */}
      <div className="mt-14 border-t border-white/20 py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 text-center justify-center items-center md:grid-cols-4 text-center text-sm gap-6">
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
