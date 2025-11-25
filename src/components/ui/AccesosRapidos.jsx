import { motion } from 'framer-motion';
import { Mail, Calendar, ExternalLink } from 'lucide-react';

const AccesosRapidos = () => {
  const accesos = [
    {
      nombre: 'Correo',
      icono: <Mail size={48} />,
      link: 'https://mail.google.com/a/inewton.edu.pe',
      descripcion: 'Accede a tu correo institucional',
      external: true
    },
    {
      nombre: 'SIEWEB',
      icono: <ExternalLink size={48} />,
      link: 'https://in.sieweb.com.pe/sistema/login',
      descripcion: 'Sistema de información educativa',
      external: true
    },
    {
      nombre: 'Calendario',
      icono: <Calendar size={48} />,
      link: '/CALENDARIO 2026.pdf',
      descripcion: 'Consulta el calendario académico',
      external: true
    }
  ];

  return (
    <section className="relative -mt-20 z-20 pb-12">
      {/* Contenedor con padding lateral */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {accesos.map((acceso, index) => (
            <motion.a
              key={index}
              href={acceso.link}
              target={acceso.external ? "_blank" : "_self"}
              rel={acceso.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.15,
                duration: 0.5,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="
                bg-white
                p-8 md:p-10
                min-h-[220px]
                rounded-3xl
                flex flex-col items-center justify-center text-center
                cursor-pointer
                transition-all duration-300
                shadow-[0_10px_40px_rgba(0,0,0,0.1)]
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                border border-gray-100
                group
              "
            >

              {/* Icono */}
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
                className="mb-6 text-[#013055] group-hover:text-[#007a75] transition-colors duration-300"
              >
                {acceso.icono}
              </motion.div>

              {/* Título */}
              <h3 className="font-anton text-2xl md:text-3xl text-[#013055] tracking-wide mb-3 uppercase">
                {acceso.nombre}
              </h3>

              {/* Descripción */}
              <p className="text-sm md:text-base text-gray-600 font-montserrat leading-relaxed">
                {acceso.descripcion}
              </p>

            </motion.a>
          ))}

        </div>
        
      </div>
    </section>
  );
};

export default AccesosRapidos;
