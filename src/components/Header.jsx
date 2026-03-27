import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ExternalLink,
  GraduationCap,
  ChevronDown,
  Users,
  History,
  Target,
  Building,
  BookOpen,
  School,
  Newspaper,
  UserCheck,
  UsersRound,
  Award,
  MapPin,
  Home,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LogoNewton from "./ui/LogoNewton";
import TopBar from "./ui/TopBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const subMenuIcons = {
    "Quiénes Somos": Users,
    "Nuestra Historia": History,
    Principios: Target,
    "Ente Promotor": Building,
    Primaria: BookOpen,
    Secundaria: School,
    Publicaciones: Newspaper,
    Directivos: UserCheck,
    Docentes: UsersRound,
    Alumnos: Award,
    Cajamarca: MapPin,
    "Baños del Inca": Home,
  };

  const menuItems = [
    { name: "Inicio", path: "/" },
    {
      name: "Nosotros",
      sub: [
        {
          name: "Quiénes Somos",
          path: "/nosotros?section=quienes",
          desc: "Conoce nuestra identidad",
        },
        {
          name: "Nuestra Historia",
          path: "/nosotros?section=historia",
          desc: "Nuestro recorrido",
        },
        {
          name: "Principios",
          path: "/nosotros?section=valores",
          desc: "Valores institucionales",
        },
        {
          name: "Ente Promotor",
          path: "/nosotros?section=ente",
          desc: "Quiénes nos respaldan",
        },
      ],
    },

    {
      name: "Niveles",
      sub: [
        { name: "Primaria", path: "/nivel/primaria", desc: "1° a 6° grado" },
        { name: "Secundaria", path: "/nivel/secundaria", desc: "1° a 5° año" },
      ],
    },
    {
      name: "Comunidad",
      sub: [
        {
          name: "Publicaciones",
          path: "/comunidad/publicaciones",
          desc: "Noticias y eventos",
        },
        {
          name: "Directivos",
          path: "/comunidad/directivos",
          desc: "Nuestro equipo directivo",
        },
        {
          name: "Docentes",
          path: "/comunidad/docentes",
          desc: "Plana docente",
        },
        {
          name: "Alumnos",
          path: "/comunidad/alumnos",
          desc: "Estudiantes destacados",
        },
      ],
    },
    {
      name: "Campus",
      sub: [
        {
          name: "Cajamarca",
          path: "/campus/cajamarca",
          desc: "Campus principal",
        },
        {
          name: "Los Baños del Inca",
          path: "/campus/banos",
          desc: "Campus secundaria",
        },
      ],
    },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-azul-oscuro shadow-2xl h-auto flex-none">
      {/* TOP BAR desktop */}
      <div className="hidden lg:block">
        <TopBar />
      </div>

      {/* NAV PRINCIPAL */}
      <nav className="bg-azul-oscuro border-b border-amarillo-dorado/10 flex-none">
        <div
          className="container mx-auto px-4 lg:px-6 py-2.5 lg:py-3 
                        flex items-center justify-between gap-6 flex-nowrap"
        >
          {/* LOGO */}
          <div className="flex-none min-w-fit">
            <LogoNewton />
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-9 flex-none">
            {menuItems.map((item, i) => (
              <div
                key={i}
                className="relative group flex-none"
                onMouseEnter={() => setHoveredMenu(i)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                {/* LINKS SIN SUBMENU */}
                {!item.sub ? (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-white text-[15px] font-semibold tracking-wide hover:text-amarillo-dorado transition-colors duration-300 relative ${
                        isActive ? "text-amarillo-dorado" : ""
                      }`
                    }
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amarillo-dorado group-hover:w-full transition-all duration-300"></span>
                  </NavLink>
                ) : (
                  <>
                    {/* BOTÓN PADRE */}
                    <button className="text-white text-[15px] font-semibold tracking-wide flex items-center gap-1.5 group-hover:text-amarillo-dorado transition-colors duration-300 relative flex-none">
                      {item.name}
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-300 ${hoveredMenu === i ? "rotate-180" : ""}`}
                      />
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amarillo-dorado group-hover:w-full transition-all duration-300"></span>
                    </button>

                    {/* SUBMENU DESKTOP */}
                    <AnimatePresence>
                      {hoveredMenu === i && (
                        <motion.div
                          initial={{ opacity: 0, y: -12, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -12, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute bg-white shadow-2xl rounded-2xl p-2.5 top-10 left-0 min-w-[300px] z-50 border border-gray-100 backdrop-blur-sm flex-none"
                        >
                          <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-gray-100 transform rotate-45"></div>

                          {item.sub.map((subItem, j) => {
                            const Icon = subMenuIcons[subItem.name];
                            return (
                              <Link
                                key={j}
                                to={subItem.path}
                                className="group/item flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-verde-azulado/5 hover:to-amarillo-dorado/5 transition-all duration-300 border border-transparent hover:border-verde-azulado/20 flex-none"
                              >
                                <div className="mt-0.5 p-2.5 rounded-xl bg-azul-oscuro/5 group-hover/item:bg-verde-azulado/15 transition-all duration-300 shadow-sm flex-none">
                                  {Icon && (
                                    <Icon
                                      size={18}
                                      className="text-azul-oscuro group-hover/item:text-verde-azulado transition-colors duration-300"
                                    />
                                  )}
                                </div>

                                <div className="flex-1">
                                  <div className="text-[15px] font-bold text-azul-oscuro group-hover/item:text-verde-azulado transition-colors duration-300">
                                    {subItem.name}
                                  </div>
                                  {subItem.desc && (
                                    <div className="text-[11px] text-gray-500 mt-1 leading-tight">
                                      {subItem.desc}
                                    </div>
                                  )}
                                </div>

                                <ChevronDown
                                  size={16}
                                  className="mt-1 -rotate-90 text-gray-300 group-hover/item:text-verde-azulado group-hover/item:translate-x-1 transition-all duration-300 opacity-0 group-hover/item:opacity-100"
                                />
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </div>
            ))}

            {/* BOTONES CTA DESKTOP */}
            <a
              href="https://in.sieweb.com.pe/sistema/login"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-verde-azulado text-white text-sm font-bold hover:bg-verde-azulado/90 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md flex-none"
            >
              <ExternalLink size={15} /> SIEWEB
            </a>

            <Link
              to="/admision"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amarillo-dorado text-azul-oscuro text-sm font-black hover:bg-amarillo-dorado/90 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg flex-none"
            >
              <GraduationCap size={16} />
              Admisión
            </Link>
          </div>

          {/* BOTÓN MOBILE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white flex-none p-2 hover:bg-white/10 rounded-xl transition-all duration-300 active:scale-95"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-gradient-to-b from-azul-oscuro to-azul-oscuro/95 backdrop-blur-md border-t border-amarillo-dorado/20 shadow-2xl flex-none"
          >
            <div className="container mx-auto px-4 py-5 flex flex-col gap-2.5 max-h-[calc(100vh-70px)] overflow-y-auto">
              {menuItems.map((item, i) => (
                <div
                  key={i}
                  className="border-b border-white/5 pb-2.5 last:border-0 flex-none"
                >
                  {!item.sub ? (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="block text-white font-semibold text-base py-3 px-4 rounded-xl hover:bg-white/10 hover:text-amarillo-dorado transition-all duration-300 active:scale-98"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div className="flex-none">
                      <button
                        onClick={() =>
                          setOpenSubMenu(openSubMenu === i ? null : i)
                        }
                        className="text-white w-full flex justify-between items-center font-semibold text-base py-3 px-4 rounded-xl hover:bg-white/10 hover:text-amarillo-dorado transition-all duration-300 flex-none"
                      >
                        {item.name}
                        <ChevronDown
                          className={`transition-transform duration-300 ${openSubMenu === i ? "rotate-180" : ""}`}
                          size={18}
                        />
                      </button>

                      {/* SUBMENU MOBILE */}
                      <AnimatePresence>
                        {openSubMenu === i && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="mt-2 flex flex-col bg-white/5 rounded-xl p-2 border-l-4 border-amarillo-dorado ml-2 shadow-inner flex-none"
                          >
                            {item.sub.map((subItem, j) => {
                              const Icon = subMenuIcons[subItem.name];
                              return (
                                <Link
                                  key={j}
                                  to={subItem.path}
                                  onClick={() => setIsOpen(false)}
                                  className="flex items-center gap-3 text-white/95 text-[15px] font-medium hover:text-amarillo-dorado hover:bg-white/10 px-4 py-2.5 rounded-lg transition-all duration-300 flex-none"
                                >
                                  {Icon && (
                                    <Icon size={17} className="flex-none" />
                                  )}
                                  <span>{subItem.name}</span>
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}

              {/* BOTONES MOBILE */}
              <div className="flex flex-col gap-3 pt-3 mt-3 border-t border-white/10 flex-none">
                <a
                  href="https://in.sieweb.com.pe/sistema/login"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-center gap-2 text-white font-bold bg-verde-azulado py-3.5 rounded-xl hover:bg-verde-azulado/90 transition-all duration-300 text-[15px] shadow-lg active:scale-98 flex-none"
                >
                  <ExternalLink size={17} /> SIEWEB
                </a>

                <Link
                  to="/admision"
                  onClick={() => setIsOpen(false)}
                  className="bg-amarillo-dorado text-azul-oscuro py-3.5 rounded-xl font-black text-center hover:bg-amarillo-dorado/90 transition-all duration-300 text-[15px] shadow-xl active:scale-98 flex items-center justify-center gap-2 flex-none"
                >
                  <GraduationCap size={18} />
                  Admisión
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
