import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ExternalLink, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
      <div className="bg-azul-oscuro border-b border-white/10 py-2">
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
            <div className="flex items-center gap-2 ml-auto">
              <Phone size={16} />
              <span>+51 976 123 456</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-azul-oscuro py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo-simple.png"
                alt="Isaac Newton"
                className="h-12 w-12 rounded-full"
              />
              <div className="text-white">
                <div className="font-anton text-xl leading-tight">Isaac Newton</div>
                <div className="text-xs text-gray-300">Colegio de Ciencias</div>
              </div>
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
                href="#"
                className="flex items-center gap-2 text-white hover:text-amarillo-dorado font-medium transition-colors border border-white/30 px-4 py-2 rounded-lg"
              >
                <ExternalLink size={16} />
                SIEWEB
              </a>
              <Link
                to="/admision"
                className="bg-amarillo-dorado text-azul-oscuro px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
              >
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

