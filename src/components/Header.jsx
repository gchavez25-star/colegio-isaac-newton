import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ExternalLink, Phone, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LogoNewton from "../components/ui/LogoNewton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Niveles", path: "/niveles" },
    { name: "Comunidad", path: "/comunidad" },
    { name: "Campus", path: "/campus" },
    { name: "Contacto", path: "/contacto" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#013055] shadow-lg">
      {/* TOP BAR */}
      <div className="hidden md:block bg-[#013055] border-b border-white/10">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-white text-sm">
          <div className="flex gap-6">
            {["Noticias", "Servicios", "Trabaja con nosotros"].map((item, i) => (
              <Link key={i} to="#" className="hover:text-[#fccc00] transition-colors">
                {item}
              </Link>
            ))}
          </div>

          <div className="flex gap-6">
            {[{ sede: "Cajamarca", tel: "+51 932 274 369" }, { sede: "Baños del Inca", tel: "+51 920 438 721" }].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-white/20">
                  <Phone size={14} />
                </div>
                <div className="leading-tight">
                  <p className="font-semibold">{item.sede}</p>
                  <p className="text-xs">{item.tel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NAVBAR PRINCIPAL */}
      <nav className="bg-[#013055]">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <LogoNewton />
          </Link>

          {/* MENU DESKTOP */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item, i) => (
              <NavLink
                key={i}
                to={item.path}
                className={({ isActive }) =>
                  `text-white font-medium transition-colors hover:text-[#fccc00] ${isActive ? "text-[#fccc00]" : ""}`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <a
              href="https://in.sieweb.com.pe/sistema/login"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#007a75] text-white font-semibold hover:bg-[#009185] transition"
            >
              <ExternalLink size={16} />
              SIEWEB
            </a>

            <Link
              to="/admision"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#fccc00] text-[#013055] font-bold hover:bg-yellow-400 transition"
            >
              <GraduationCap size={18} />
              Admisión
            </Link>
          </div>

          {/* BOTÓN MOBILE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MENÚ MOBILE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#013055] border-t border-white/10"
          >
            <div className="px-4 py-6 flex flex-col gap-4 text-center">
              {menuItems.map((item, i) => (
                <Link
                  key={i}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-white font-medium text-lg hover:text-[#fccc00] transition"
                >
                  {item.name}
                </Link>
              ))}

              <a
                href="https://in.sieweb.com.pe/sistema/login"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 text-white font-medium"
              >
                <ExternalLink size={18} />
                SIEWEB
              </a>

              <Link
                to="/admision"
                onClick={() => setIsOpen(false)}
                className="bg-[#fccc00] text-[#013055] py-3 rounded-xl font-bold"
              >
                Admisión
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

