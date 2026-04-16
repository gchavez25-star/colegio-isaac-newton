import { Link } from "react-router-dom";
import {
  ScrollText,
  Newspaper,
  Briefcase,
  BriefcaseBusiness,
  PhoneCall,
} from "lucide-react";

const TopBar = () => {
  const sedes = [
    { sede: "Cajamarca", tel: "953751275" },
    { sede: "Los Baños del Inca", tel: "920438721" },
  ];

  return (
    <div className="hidden md:block bg-[#013055]">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center text-white text-sm">
        {/* LINKS */}
        <div className="flex gap-6 items-center">
          <a
            href="/Docs/R.I. 2026 NEWTON Cajamarca.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#fccc00] transition-colors duration-300"
          >
            <ScrollText size={17} />
            <span>Reglamento</span>
          </a>

          <Link
            to="/comunidad/publicaciones"
            className="flex items-center gap-2 hover:text-[#fccc00] transition-colors duration-300"
          >
            <Newspaper size={17} />
            <span>Noticias</span>
          </Link>

          <Link
            to="/servicios"
            className="flex items-center gap-2 hover:text-[#fccc00] transition-colors duration-300"
          >
            <Briefcase size={17} />
            <span>Servicios</span>
          </Link>

          <Link
            to="/vacantes"
            className="flex items-center gap-2 hover:text-[#fccc00] transition-colors duration-300"
          >
            <BriefcaseBusiness size={17} />
            <span>Trabaja con nosotros</span>
          </Link>
        </div>

        {/* SEDES */}
        <div className="flex gap-6 items-center">
          {sedes.map((item, i) => (
            <a
              key={i}
              href={`https://wa.me/51${item.tel}?text=Hola%2C%20quisiera%20más%20información.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#fccc00] transition-colors duration-300"
            >
              <div className="p-1 rounded-full bg-white/15">
                <PhoneCall size={13} />
              </div>
              <span className="leading-tight font-medium">
                {item.sede} {item.tel}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;