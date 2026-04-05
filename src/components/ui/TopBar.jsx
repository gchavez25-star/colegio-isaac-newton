import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { FileText, Newspaper, Briefcase, Users } from "lucide-react";

const TopBar = () => {
  return (
    <div className="hidden md:block bg-[#013055] border-b border-white/10">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center text-white text-sm">
        {/* LINKS */}
        <div className="flex gap-6 items-center">
          {/* Reglamento (PDF) */}
          <a
            href="/Docs/R.I. 2026 NEWTON Cajamarca.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#fccc00] transition-colors"
          >
            <FileText size={18} />
            <span>Reglamento</span>
          </a>

          {/* Noticias */}
          <Link
            to="/comunidad/publicaciones"
            className="flex items-center gap-2 hover:text-[#ffcd00] transition-colors"
          >
            <Newspaper size={18} />
            <span>Noticias</span>
          </Link>

          {/* Servicios */}
          <Link
            to="/servicios"
            className="flex items-center gap-2 hover:text-[#fccc00] transition-colors"
          >
            <Users size={18} />
            <span>Servicios</span>
          </Link>

          {/* Trabaja con nosotros */}
          <Link
            to="/vacantes"
            className="flex items-center gap-2 hover:text-[#fccc00] transition-colors"
          >
            <Briefcase size={18} />
            <span>Trabaja con nosotros</span>
          </Link>
        </div>

        {/* SEDES + WHATSAPP */}
        <div className="flex gap-6">
          {[
            { sede: "Cajamarca", tel: "953751275"  },
            { sede: "Los Baños del Inca", tel: "920438721" },
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
