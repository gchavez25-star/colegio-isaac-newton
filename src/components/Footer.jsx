import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-azul-oscuro text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Columna 1: Logo y descripción */}
          <div>
            <div className="mb-4">
              <img 
                src="/logo-vertical-azul.png" 
                alt="Colegio Isaac Newton" 
                className="h-20 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm text-gray-300">
              Formando líderes con excelencia académica y valores científicos desde 1990.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="font-anton text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/nosotros" className="hover:text-amarillo-dorado transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/niveles" className="hover:text-amarillo-dorado transition-colors">
                  Niveles Educativos
                </Link>
              </li>
              <li>
                <Link to="/comunidad" className="hover:text-amarillo-dorado transition-colors">
                  Nuestra Comunidad
                </Link>
              </li>
              <li>
                <Link to="/admision" className="hover:text-amarillo-dorado transition-colors">
                  Admisión
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-amarillo-dorado transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Campus Cajamarca */}
          <div>
            <h3 className="font-anton text-lg mb-4">Campus Cajamarca</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Av. Héroes del Cenepa 123, Cajamarca</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>(076) 123-456</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>cajamarca@isaacnewton.edu.pe</span>
              </li>
            </ul>
          </div>

          {/* Columna 4: Campus Baños del Inca */}
          <div>
            <h3 className="font-anton text-lg mb-4">Campus Baños del Inca</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Jr. Los Baños 456, Baños del Inca</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>(076) 789-012</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>banos@isaacnewton.edu.pe</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-300">
              © 2025 Colegio Privado de Ciencias Isaac Newton. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-amarillo-dorado transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-amarillo-dorado transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-amarillo-dorado transition-colors"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

