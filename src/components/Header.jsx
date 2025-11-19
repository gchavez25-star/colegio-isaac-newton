import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ExternalLink, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoNewton from "../components/ui/LogoNewton";
import { GraduationCap } from "lucide-react";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Niveles', path: '/niveles' },
    { name: 'Comunidad', path: '/comunidad' },
    { name: 'Campus', path: '/campus' },
    { name: 'Contacto', path: '/contacto' }
  ];

  const topLinks = [
    { name: 'Servicios', path: '#' },
    { name: 'Contáctanos', path: '/contacto' },
    { name: 'Trabaja con nosotros', path: '#' },
    { name: 'Reglamento', path: '#' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-azul-oscuro shadow-lg">
      {/* Top Bar */}
      <div className="bg-[#013055] border-b border-white/10 py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm text-white">
            <div className="hidden md:flex gap-6">
              {topLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="hover:text-amarillo-dorado transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="hidden sm:flex items-center gap-5 ml-auto text-white text-sm">

              {/* Sede Cajamarca */}
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone size={14} />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-semibold">Cajamarca</span>
                  <span className="text-xs">+51 932 274 369</span>
                </div>
              </div>

              {/* Sede Baños del Inca */}
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone size={14} />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-semibold">Baños del Inca</span>
                  <span className="text-xs">+51 920 438 721</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#013055] py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/">
              <LogoNewton />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-white hover:text-amarillo-dorado font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://in.sieweb.com.pe/sistema/login"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-2 rounded-lg font-semibold 
                          text-white bg-[#007a75] hover:bg-[#009185] transition-all"
              >
                <ExternalLink
                  size={16}
                  className="transition-transform group-hover:rotate-45"
                />
                SIEWEB
              </a>
              <Link
                to="/admision"
                className="group flex items-center gap-2 px-2 py-2 rounded-lg font-bold 
                          text-azul-oscuro bg-[#ffcd00] hover:bg-[#ffd633] transition-all"
              >
                <GraduationCap
                  size={18}
                  className="transition-transform group-hover:-translate-y-0.5"
                />
                Admisión
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-azul-oscuro border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-3">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-amarillo-dorado font-medium transition-colors py-2"
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="#"
                  className="flex items-center gap-2 text-white hover:text-amarillo-dorado font-medium transition-colors py-2"
                >
                  <ExternalLink size={18} />
                  SIEWEB
                </a>
                <Link
                  to="/admision"
                  onClick={() => setIsOpen(false)}
                  className="bg-amarillo-dorado text-azul-oscuro px-6 py-3 rounded-lg font-bold text-center hover:bg-yellow-400 transition-colors mt-2"
                >
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

