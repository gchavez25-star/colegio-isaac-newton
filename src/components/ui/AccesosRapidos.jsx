import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronRight,
  ExternalLink,
  Folder,
  Mail,
  Monitor,
  PackageCheck,
  PanelTop,
  ShoppingBag,
} from "lucide-react";

const CARD_CLASSES = `
  bg-white
  p-8 md:p-10
  min-h-[240px]
  h-full
  rounded-3xl
  flex flex-col items-center justify-center text-center
  cursor-pointer
  transition-all duration-300
  shadow-[0_10px_40px_rgba(0,0,0,0.1)]
  hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]
  hover:-translate-y-2
  border border-gray-100
  group
  animate-[headerSubmenu_400ms_ease-out]
`;

const CLOSE_DELAY = 240;

const platformPanelAnimation = {
  hidden: { opacity: 0, y: 10, height: 0 },
  visible: {
    opacity: 1,
    y: 0,
    height: "auto",
    transition: {
      duration: 0.24,
      ease: "easeOut",
      staggerChildren: 0.045,
      delayChildren: 0.04,
    },
  },
  exit: {
    opacity: 0,
    y: 8,
    height: 0,
    transition: { duration: 0.16, ease: "easeIn" },
  },
};

const platformItemAnimation = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.18, ease: "easeOut" },
  },
};

const AccesosRapidos = () => {
  const [isPlatformsOpen, setIsPlatformsOpen] = useState(false);
  const closeTimeoutRef = useRef(null);
  const platformsRef = useRef(null);

  const accesos = [
    {
      nombre: "Correo",
      icono: <Mail size={48} />,
      link: "https://mail.google.com/a/inewton.edu.pe",
      descripcion: "Accede a tu correo institucional",
      external: true,
    },
    {
      nombre: "SIEWEB",
      icono: <ExternalLink size={48} />,
      link: "https://in.sieweb.com.pe/sistema/login",
      descripcion: "Sistema de información educativa",
      external: true,
    },
    {
      nombre: "Google Drive",
      icono: <Folder size={48} />,
      link: "https://drive.google.com/a/inewton.edu.pe",
      descripcion: "Acceso a documentos y recursos compartidos",
      external: true,
    },
  ];

  const plataformas = [
    {
      nombre: "Monitoreo",
      icono: <Monitor size={22} />,
      link: "https://isaac-newton.novacore.pe/login",
    },
    {
      nombre: "Logística",
      icono: <PackageCheck size={22} />,
      link: "https://isaac-newton.novacore.pe/login",
    },
    {
      nombre: "Bazar",
      icono: <ShoppingBag size={22} />,
      link: "https://inewton.edu.pe/mi_sistema/modules/auth/login.php",
    },
  ];

  const clearCloseTimeout = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const openPlatforms = useCallback(() => {
    clearCloseTimeout();
    setIsPlatformsOpen(true);
  }, [clearCloseTimeout]);

  const closePlatforms = useCallback(() => {
    clearCloseTimeout();
    setIsPlatformsOpen(false);
  }, [clearCloseTimeout]);

  const scheduleClosePlatforms = useCallback(() => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setIsPlatformsOpen(false);
      closeTimeoutRef.current = null;
    }, CLOSE_DELAY);
  }, [clearCloseTimeout]);

  const togglePlatforms = useCallback(() => {
    clearCloseTimeout();
    setIsPlatformsOpen((current) => !current);
  }, [clearCloseTimeout]);

  const handlePlatformsClick = () => {
    const isHoverDevice = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;

    if (isHoverDevice) {
      openPlatforms();
      return;
    }

    togglePlatforms();
  };

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!platformsRef.current?.contains(event.target)) {
        closePlatforms();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      clearCloseTimeout();
    };
  }, [clearCloseTimeout, closePlatforms]);

  return (
    <section className="relative -mt-20 z-20 pb-12">
      <div className="container mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {accesos.map((acceso, index) => (
            <a
              key={index}
              href={acceso.link}
              target={acceso.external ? "_blank" : "_self"}
              rel={acceso.external ? "noopener noreferrer" : undefined}
              className={CARD_CLASSES}
            >
              <div className="mb-6 text-[#013055] group-hover:text-[#ffcd00] transition-all duration-300 group-hover:scale-110 group-hover:rotate-[5deg]">
                {acceso.icono}
              </div>

              <h3 className="font-anton text-2xl md:text-3xl text-[#013055] tracking-wide mb-3 uppercase">
                {acceso.nombre}
              </h3>

              <p className="text-sm md:text-base text-gray-600 font-montserrat leading-relaxed">
                {acceso.descripcion}
              </p>
            </a>
          ))}

          <div ref={platformsRef} className="h-full">
            <div
              onMouseEnter={openPlatforms}
              onMouseLeave={scheduleClosePlatforms}
              className={`${CARD_CLASSES} w-full h-[240px] overflow-hidden ${
                isPlatformsOpen ? "justify-start p-5 md:p-5" : ""
              }`}
            >
              <button
                type="button"
                aria-expanded={isPlatformsOpen}
                aria-haspopup="true"
                aria-label="Abrir accesos a plataformas institucionales"
                onClick={handlePlatformsClick}
                className="flex w-full flex-col items-center text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffcd00] focus-visible:ring-offset-2 rounded-2xl"
              >
                <div
                  className={`text-[#013055] group-hover:text-[#ffcd00] transition-all duration-300 group-hover:scale-110 group-hover:rotate-[5deg] ${
                    isPlatformsOpen ? "mb-2" : "mb-6"
                  }`}
                >
                  <PanelTop size={isPlatformsOpen ? 36 : 48} />
                </div>

                <h3
                  className={`font-anton text-2xl md:text-3xl text-[#013055] tracking-wide uppercase ${
                    isPlatformsOpen ? "mb-0" : "mb-3"
                  }`}
                >
                  Plataformas
                </h3>

                <AnimatePresence initial={false}>
                  {!isPlatformsOpen && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.14, ease: "easeOut" }}
                      className="text-sm md:text-base text-gray-600 font-montserrat leading-relaxed"
                    >
                      Accede a servicios institucionales
                    </motion.p>
                  )}
                </AnimatePresence>
              </button>

              <AnimatePresence>
                {isPlatformsOpen && (
                  <motion.div
                    variants={platformPanelAnimation}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="w-full overflow-hidden"
                  >
                    <div className="mt-3 w-full space-y-1.5 border-t border-gray-100 pt-3">
                      {plataformas.map((plataforma) => (
                        <motion.a
                          key={plataforma.nombre}
                          variants={platformItemAnimation}
                          href={plataforma.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={closePlatforms}
                          className="
                            flex items-center gap-4
                            rounded-2xl
                            px-3 py-2
                            text-[#013055]
                            transition-all duration-300
                            hover:bg-[#013055] hover:text-white
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffcd00] focus-visible:ring-offset-2
                            group/item
                          "
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#ffcd00]/20 text-[#013055] transition-colors duration-300 group-hover/item:bg-[#ffcd00]">
                            {plataforma.icono}
                          </span>

                          <span className="flex-1 text-left font-montserrat text-sm font-semibold">
                            {plataforma.nombre}
                          </span>

                          <ChevronRight
                            size={18}
                            className="transition-transform duration-300 group-hover/item:translate-x-1"
                          />
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccesosRapidos;
