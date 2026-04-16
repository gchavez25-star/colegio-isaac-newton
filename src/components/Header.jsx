import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ExternalLink,
  GraduationCap,
  ChevronDown,
  Newspaper,
  MapPinned,
  Building2,
  BadgeInfo,
  ShieldCheck,
  Landmark,
  BookMarked,
  LibraryBig,
  BriefcaseBusiness,
  School2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LogoNewton from "./ui/LogoNewton";
import TopBar from "./ui/TopBar";

const HEADER_BLUE = "#013055";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateHeaderState = () => {
      setIsScrolled(window.scrollY > 20);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeaderState);
        ticking = true;
      }
    };

    updateHeaderState();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setOpenSubMenu(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setOpenSubMenu(null);
  };

  const subMenuIcons = {
    "Quiénes Somos": BadgeInfo,
    Principios: ShieldCheck,
    "Ente Promotor": Landmark,
    Primaria: BookMarked,
    Secundaria: LibraryBig,
    Publicaciones: Newspaper,
    Directivos: BriefcaseBusiness,
    Docentes: School2,
    Cajamarca: Building2,
    "Los Baños del Inca": MapPinned,
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
          desc: "Campus secundario",
        },
      ],
    },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-out ${
          isScrolled ? "shadow-lg shadow-black/20" : "shadow-none"
        }`}
        style={{ backgroundColor: HEADER_BLUE }}
      >
        <div
          className={`hidden lg:block overflow-hidden transition-all duration-300 ease-out ${
            isScrolled
              ? "max-h-0 opacity-0 pointer-events-none"
              : "max-h-20 opacity-100"
          }`}
          style={{ backgroundColor: HEADER_BLUE }}
        >
          <TopBar />
        </div>

       <nav
          className="flex-none transition-all duration-300 ease-out border-0"
          style={{
            backgroundColor: HEADER_BLUE,
            borderTop: "none",
            borderBottom: "none",
            boxShadow: "none",
          }}
        >
          <div
            className={`container mx-auto px-4 lg:px-6 flex items-center justify-between gap-6 flex-nowrap transition-all duration-300 ease-out ${
              isScrolled ? "py-2.5 lg:py-3" : "py-3 lg:py-3.5"
            }`}
          >
            <div
              className={`flex-none min-w-fit transition-transform duration-300 ${
                isScrolled ? "scale-[0.97]" : "scale-100"
              }`}
            >
              <LogoNewton />
            </div>

            <div className="hidden lg:flex items-center gap-7 xl:gap-9 flex-none">
              {menuItems.map((item, i) => (
                <div
                  key={i}
                  className="relative group flex-none"
                  onMouseEnter={() => setHoveredMenu(i)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  {!item.sub ? (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `text-white text-[15px] font-semibold tracking-wide hover:text-yellow-400 transition-colors duration-300 relative ${
                          isActive ? "text-yellow-400" : ""
                        }`
                      }
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                    </NavLink>
                  ) : (
                    <>
                      <button
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={hoveredMenu === i}
                        className="text-white text-[15px] font-semibold tracking-wide flex items-center gap-1.5 group-hover:text-yellow-400 transition-colors duration-300 relative flex-none"
                      >
                        {item.name}
                        <ChevronDown
                          size={15}
                          className={`transition-transform duration-300 ${
                            hoveredMenu === i ? "rotate-180" : ""
                          }`}
                        />
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                      </button>

                      <AnimatePresence>
                        {hoveredMenu === i && (
                          <motion.div
                            initial={{ opacity: 0, y: -12, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -12, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute bg-white shadow-2xl rounded-2xl p-2.5 top-10 left-0 min-w-[300px] z-50 border border-gray-100 flex-none"
                          >
                            <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45"></div>

                            {item.sub.map((subItem, j) => {
                              const Icon = subMenuIcons[subItem.name];
                              return (
                                <Link
                                  key={j}
                                  to={subItem.path}
                                  className="group/item flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-teal-600/5 hover:to-yellow-400/5 transition-all duration-300 border border-transparent hover:border-teal-600/20 flex-none"
                                >
                                  <div className="mt-0.5 p-2.5 rounded-xl bg-slate-900/5 group-hover/item:bg-teal-600/15 transition-all duration-300 shadow-sm flex-none">
                                    {Icon && (
                                      <Icon
                                        size={18}
                                        className="text-slate-900 group-hover/item:text-teal-700 transition-colors duration-300"
                                      />
                                    )}
                                  </div>

                                  <div className="flex-1">
                                    <div className="text-[15px] font-bold text-slate-900 group-hover/item:text-teal-700 transition-colors duration-300">
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
                                    className="mt-1 -rotate-90 text-gray-300 group-hover/item:text-teal-700 group-hover/item:translate-x-1 transition-all duration-300 opacity-0 group-hover/item:opacity-100"
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
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md flex-none"
                style={{ backgroundColor: "#007a75" }}
              >
                <ExternalLink size={15} /> SIEWEB
              </a>

              <Link
                to="/admision"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-slate-900 text-sm font-black transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg flex-none"
                style={{ backgroundColor: "#fccc00" }}
              >
                <GraduationCap size={16} />
                Admisión
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              aria-label={isOpen ? "Cerrar menú principal" : "Abrir menú principal"}
              aria-expanded={isOpen}
              className="lg:hidden text-white flex-none p-2 hover:bg-white/10 rounded-xl transition-all duration-300 active:scale-95"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden fixed inset-0 top-[72px] bg-black/45"
                onClick={closeMobileMenu}
              />

              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="lg:hidden relative border-t shadow-2xl flex-none"
                style={{
                  background: `linear-gradient(to bottom, ${HEADER_BLUE}, ${HEADER_BLUE})`,
                  borderColor: "rgba(250, 204, 21, 0.2)",
                }}
              >
                <div className="container mx-auto px-4 py-5 flex flex-col gap-2.5 max-h-[calc(100vh-72px)] overflow-y-auto">
                  {menuItems.map((item, i) => (
                    <div
                      key={i}
                      className="border-b border-white/5 pb-2.5 last:border-0 flex-none"
                    >
                      {!item.sub ? (
                        <Link
                          to={item.path}
                          onClick={closeMobileMenu}
                          className="block text-white font-semibold text-base py-3 px-4 rounded-xl hover:bg-white/10 hover:text-yellow-400 transition-all duration-300 active:scale-98"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <div className="flex-none">
                          <button
                            onClick={() =>
                              setOpenSubMenu(openSubMenu === i ? null : i)
                            }
                            type="button"
                            aria-expanded={openSubMenu === i}
                            className="text-white w-full flex justify-between items-center font-semibold text-base py-3 px-4 rounded-xl hover:bg-white/10 hover:text-yellow-400 transition-all duration-300 flex-none"
                          >
                            {item.name}
                            <ChevronDown
                              className={`transition-transform duration-300 ${
                                openSubMenu === i ? "rotate-180" : ""
                              }`}
                              size={18}
                            />
                          </button>

                          <AnimatePresence>
                            {openSubMenu === i && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.25 }}
                                className="mt-2 flex flex-col bg-white/5 rounded-xl p-2 border-l-4 ml-2 shadow-inner flex-none"
                                style={{ borderColor: "#fccc00" }}
                              >
                                {item.sub.map((subItem, j) => {
                                  const Icon = subMenuIcons[subItem.name];
                                  return (
                                    <Link
                                      key={j}
                                      to={subItem.path}
                                      onClick={closeMobileMenu}
                                      className="flex items-center gap-3 text-white/95 text-[15px] font-medium hover:text-yellow-400 hover:bg-white/10 px-4 py-2.5 rounded-lg transition-all duration-300 flex-none"
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

                  <div className="flex flex-col gap-3 pt-3 mt-3 border-t border-white/10 flex-none">
                    <a
                      href="https://in.sieweb.com.pe/sistema/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-white font-bold py-3.5 rounded-xl transition-all duration-300 text-[15px] shadow-lg active:scale-98 flex-none"
                      style={{ backgroundColor: "#007a75" }}
                    >
                      <ExternalLink size={17} /> SIEWEB
                    </a>

                    <Link
                      to="/admision"
                      onClick={closeMobileMenu}
                      className="py-3.5 rounded-xl font-black text-center transition-all duration-300 text-[15px] shadow-xl active:scale-98 flex items-center justify-center gap-2 flex-none"
                      style={{ backgroundColor: "#fccc00", color: "#013055" }}
                    >
                      <GraduationCap size={18} />
                      Admisión
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      <div className={`${isScrolled ? "h-[72px] lg:h-[76px]" : "h-[84px] lg:h-[124px]"}`} />
    </>
  );
};

export default Header;