import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { 
  Menu, X, ExternalLink, Phone, GraduationCap, ChevronDown,
  Users, History, Target, Building, BookOpen, School,
  Newspaper, UserCheck, UsersRound, Award, MapPin, Home
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LogoNewton from "./ui/LogoNewton";
import TopBar from "./ui/TopBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  // Iconos para cada submenú
  const subMenuIcons = {
    "Quiénes Somos": Users,
    "Nuestra Historia": History,
    "Principios": Target,
    "Ente Promotor": Building,
    "Primaria": BookOpen,
    "Secundaria": School,
    "Publicaciones": Newspaper,
    "Directivos": UserCheck,
    "Docentes": UsersRound,
    "Alumnos": Award,
    "Cajamarca": MapPin,
    "Baños del Inca": Home,
  };

  const menuItems = [
    { name: "Inicio", path: "/" },

    {
      name: "Nosotros",
      sub: [
        { name: "Quiénes Somos", path: "/nosotros#quienes", desc: "Conoce nuestra identidad" },
        { name: "Nuestra Historia", path: "/nosotros#historia", desc: "Nuestro recorrido" },
        { name: "Principios", path: "/nosotros#principios", desc: "Valores institucionales" },
        { name: "Ente Promotor", path: "/nosotros#ente", desc: "Quiénes nos respaldan" },
      ],
    },

    {
      name: "Niveles",
      sub: [
        { name: "Primaria", path: "/niveles/primaria", desc: "1° a 6° grado" },
        { name: "Secundaria", path: "/niveles/secundaria", desc: "1° a 5° año" },
      ],
    },

    {
      name: "Comunidad",
      sub: [
        { name: "Publicaciones", path: "/comunidad/publicaciones", desc: "Noticias y eventos" },
        { name: "Directivos", path: "/comunidad/directivos", desc: "Nuestro equipo directivo" },
        { name: "Docentes", path: "/comunidad/docentes", desc: "Plana docente" },
        { name: "Alumnos", path: "/comunidad/alumnos", desc: "Estudiantes destacados" },
      ],
    },

    {
      name: "Campus",
      sub: [
        { name: "Cajamarca", path: "/campus/cajamarca", desc: "Sede principal" },
        { name: "Baños del Inca", path: "/campus/banos", desc: "Sede secundaria" },
      ],
    },

    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-azul-oscuro shadow-lg">

      {/* TOP BAR */}
      <TopBar/>

      {/* NAV DESKTOP */}
      <nav className="bg-azul-oscuro">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">

          {/* Logo */}
        <LogoNewton/>

          {/* MENU DESKTOP */}
          <div className="hidden lg:flex items-center gap-8 relative">

            {menuItems.map((item, i) => (
              <div 
                key={i} 
                className="relative group"
                onMouseEnter={() => setHoveredMenu(i)}
                onMouseLeave={() => setHoveredMenu(null)}
              >

                {!item.sub ? (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-white font-medium hover:text-amarillo-dorado transition ${
                        isActive ? "text-amarillo-dorado" : ""
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>

                ) : (
                  <>
                    <button className="text-white font-medium flex items-center gap-1 group-hover:text-amarillo-dorado transition">
                      {item.name}
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform ${hoveredMenu === i ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {/* SUBMENU DESKTOP MEJORADO */}
                    <AnimatePresence>
                      {hoveredMenu === i && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="
                            absolute
                            bg-white shadow-2xl
                            rounded-2xl p-2 top-10 left-0 min-w-[280px] z-50
                            border-2 border-amarillo-dorado/20
                          "
                        >
                          {/* Flecha superior */}
                          <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l-2 border-t-2 border-amarillo-dorado/20 transform rotate-45"></div>
                          
                          {item.sub.map((subItem, j) => {
                            const Icon = subMenuIcons[subItem.name];
                            return (
                              <Link
                                key={j}
                                to={subItem.path}
                                className="
                                  group/item
                                  flex items-start gap-3 px-4 py-3 rounded-xl
                                  hover:bg-gradient-to-r hover:from-amarillo-dorado/10 hover:to-verde-azulado/10
                                  transition-all duration-300
                                  border border-transparent hover:border-amarillo-dorado/30
                                "
                              >
                                {/* Icono */}
                                <div className="mt-0.5 p-2 rounded-lg bg-azul-oscuro/5 group-hover/item:bg-amarillo-dorado/20 transition-colors">
                                  {Icon && <Icon size={20} className="text-azul-oscuro group-hover/item:text-verde-azulado transition-colors" />}
                                </div>
                                
                                {/* Texto */}
                                <div className="flex-1">
                                  <div className="font-semibold text-azul-oscuro group-hover/item:text-verde-azulado transition-colors">
                                    {subItem.name}
                                  </div>
                                  {subItem.desc && (
                                    <div className="text-xs text-gray-500 mt-0.5">
                                      {subItem.desc}
                                    </div>
                                  )}
                                </div>

                                {/* Flecha indicadora */}
                                <ChevronDown 
                                  size={16} 
                                  className="mt-1 -rotate-90 text-gray-400 group-hover/item:text-amarillo-dorado transition-colors opacity-0 group-hover/item:opacity-100"
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

            <a
              href="https://in.sieweb.com.pe/sistema/login"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-verde-azulado text-white font-semibold hover:bg-teal-600 transition-all hover:scale-105 shadow-lg"
            >
              <ExternalLink size={16} /> SIEWEB
            </a>

            <Link
              to="/admision"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amarillo-dorado text-azul-oscuro font-bold hover:bg-yellow-400 transition-all hover:scale-105 shadow-lg"
            >
              <GraduationCap size={18} />
              Admisión
            </Link>

          </div>

          {/* BOTÓN MOBILE */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
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
            className="lg:hidden bg-azul-oscuro border-t border-white/10"
          >
            <div className="px-4 py-6 flex flex-col gap-4">

              {menuItems.map((item, i) => (
                <div key={i}>
                  {!item.sub ? (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="text-white font-medium text-lg hover:text-amarillo-dorado transition"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => setOpenSubMenu(openSubMenu === i ? null : i)}
                        className="text-white w-full flex justify-between items-center font-medium text-lg hover:text-amarillo-dorado transition"
                      >
                        {item.name}
                        <ChevronDown
                          className={`${openSubMenu === i ? "rotate-180" : ""} transition`}
                        />
                      </button>

                      {/* SUBMENU MOBILE MEJORADO */}
                      <AnimatePresence>
                        {openSubMenu === i && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 flex flex-col gap-1 bg-white/5 rounded-xl p-2 border-l-4 border-amarillo-dorado"
                          >
                            {item.sub.map((subItem, j) => {
                              const Icon = subMenuIcons[subItem.name];
                              return (
                                <Link
                                  key={j}
                                  to={subItem.path}
                                  onClick={() => setIsOpen(false)}
                                  className="flex items-center gap-3 text-white/90 text-base hover:text-amarillo-dorado hover:bg-white/10 px-3 py-2 rounded-lg transition"
                                >
                                  {Icon && <Icon size={18} />}
                                  <span>{subItem.name}</span>
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

              <a
                href="https://in.sieweb.com.pe/sistema/login"
                target="_blank"
                className="flex items-center justify-center gap-2 text-white font-medium bg-verde-azulado py-3 rounded-xl hover:bg-teal-600 transition"
              >
                <ExternalLink size={18} /> SIEWEB
              </a>

              <Link
                to="/admision"
                onClick={() => setIsOpen(false)}
                className="bg-amarillo-dorado text-azul-oscuro py-3 rounded-xl font-bold text-center hover:bg-yellow-400 transition"
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
