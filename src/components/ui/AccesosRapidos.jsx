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

const CLOSE_DELAY = 320;

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

  const closePlatforms = useCallback(() => {
    clearCloseTimeout();
    setIsPlatformsOpen(false);
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
      {/* Contenedor con padding lateral */}
      <div className="container mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {accesos.map((acceso, index) => (
            <a
              key={index}
              href={acceso.link}
              target={acceso.external ? "_blank" : "_self"}
              rel={acceso.external ? "noopener noreferrer" : undefined}
              className={CARD_CLASSES}
            >
              {/* Icono */}
              <div className="mb-6 text-[#013055] group-hover:text-[#ffcd00] transition-all duration-300 group-hover:scale-110 group-hover:rotate-[5deg]">
                {acceso.icono}
              </div>

              {/* Título */}
              <h3 className="font-anton text-2xl md:text-3xl text-[#013055] tracking-wide mb-3 uppercase">
                {acceso.nombre}
              </h3>

              {/* Descripción */}
              <p className="text-sm md:text-base text-gray-600 font-montserrat leading-relaxed">
                {acceso.descripcion}
              </p>
            </a>
          ))}

          <div ref={platformsRef} className="relative h-full">
            <button
              type="button"
              aria-expanded={isPlatformsOpen}
              aria-haspopup="true"
              onClick={handlePlatformsClick}
              onMouseEnter={openPlatforms}
              onMouseLeave={scheduleClosePlatforms}
              className={`${CARD_CLASSES} w-full`}
            >
              {/* Icono */}
              <div className="mb-6 text-[#013055] group-hover:text-[#ffcd00] transition-all duration-300 group-hover:scale-110 group-hover:rotate-[5deg]">
                <PanelTop size={48} />
              </div>

              {/* Título */}
              <h3 className="font-anton text-2xl md:text-3xl text-[#013055] tracking-wide mb-3 uppercase">
                Plataformas
              </h3>

              {/* Descripción */}
              <p className="text-sm md:text-base text-gray-600 font-montserrat leading-relaxed">
                Accede a servicios institucionales
              </p>
            </button>

            <AnimatePresence>
              {isPlatformsOpen && (
                <motion.div
                  initial={{ opacity: 0, x: 12, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 10, y: 4, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  onMouseEnter={openPlatforms}
                  onMouseLeave={scheduleClosePlatforms}
                  className="
                    z-40
                    absolute
                    left-0
                    right-0
                    top-full
                    mt-4
                    w-full
                    rounded-3xl
                    border border-gray-100
                    bg-white
                    p-3
                    shadow-[0_20px_60px_rgba(0,0,0,0.16)]
                    xl:left-full xl:right-auto xl:top-0 xl:ml-5 xl:mt-0 xl:w-[300px]
                  "
                >
                  <div className="space-y-2">
                    {plataformas.map((plataforma) => (
                      <a
                        key={plataforma.nombre}
                        href={plataforma.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closePlatforms}
                        className="
                          flex items-center gap-4
                          rounded-2xl
                          px-4 py-3
                          text-[#013055]
                          transition-all duration-300
                          hover:bg-[#013055] hover:text-white
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffcd00] focus-visible:ring-offset-2
                          group/item
                        "
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#ffcd00]/20 text-[#013055] transition-colors duration-300 group-hover/item:bg-[#ffcd00]">
                          {plataforma.icono}
                        </span>

                        <span className="flex-1 text-left font-montserrat text-sm font-semibold">
                          {plataforma.nombre}
                        </span>

                        <ChevronRight
                          size={18}
                          className="transition-transform duration-300 group-hover/item:translate-x-1"
                        />
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccesosRapidos;
