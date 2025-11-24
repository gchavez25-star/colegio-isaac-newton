import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="hidden md:block bg-[#013055] border-b border-white/10">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center text-white text-sm">

        {/* LINKS */}
        <div className="flex gap-6">
          <Link to="/noticias" className="hover:text-[#ffcd00] transition-colors">
            Noticias
          </Link>
          <Link to="/servicios" className="hover:text-[#fccc00] transition-colors">
            Servicios
          </Link>
          <Link to="/trabaja-con-nosotros" className="hover:text-[#fccc00] transition-colors">
            Trabaja con nosotros
          </Link>
        </div>

        {/* SEDES + WHATSAPP */}
        <div className="flex gap-6">
          {[
            { sede: "Cajamarca", tel: "932274369" },
            { sede: "Baños del Inca", tel: "920438721" }
          ].map((item, i) => (
            <a
              key={i}
              href={`https://wa.me/${item.tel}?text=Hola%2C%20quisiera%20más%20información.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#fccc00] transition-colors"
            >
              <div className="p-1 rounded-full bg-white/20">
                <Phone size={14} />
              </div>
              <p className="leading-tight font-medium">
                {item.sede} {item.tel.replace("51", "51 ")}
              </p>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TopBar;
