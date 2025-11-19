import { motion } from 'framer-motion';
import { Mail, Calendar, ExternalLink } from 'lucide-react';

const AccesosRapidos = () => {
  const accesos = [
    {
      nombre: 'Correo',
      icono: <Mail size={38} />,
      link: 'https://mail.google.com/a/inewton.edu.pe',
      descripcion: 'Accede a tu correo institucional',
      external: true
    },
    {
      nombre: 'SIEWEB',
      icono: <ExternalLink size={38} />,
      link: 'https://in.sieweb.com.pe/sistema/login',
      descripcion: 'Sistema de información educativa',
      external: true
    },
    {
      nombre: 'Calendario',
      icono: <Calendar size={38} />,
      link: '/CALENDARIO 2026.pdf',
      descripcion: 'Consulta el calendario académico',
      external: true
    }
  ];

  return (
    <section className="py-6 relative z-10">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {accesos.map((acceso, index) => (
            <motion.a
              key={index}
              href={acceso.link}
              target={acceso.external ? "_blank" : "_self"}
              rel={acceso.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="
                bg-[#e9ecef]
                p-6 md:p-8
                min-h-[160px]
                rounded-2xl
                flex flex-col items-center justify-center text-center
                cursor-pointer
                transition-all duration-300
                shadow-[8px_8px_16px_#c5c7c9,_-8px_-8px_16px_#ffffff]
                hover:shadow-[4px_4px_10px_#c5c7c9,_-4px_-4px_10px_#ffffff]
              "
            >

              <motion.div
                whileHover={{ scale: 1.15, y: -3 }}
                transition={{ duration: 0.3 }}
                className="mb-4 text-[#007a75]"
              >
                {acceso.icono}
              </motion.div>

              <h3 className="font-anton text-xl text-[#013055] tracking-wide mb-1">
                {acceso.nombre}
              </h3>

              <p className="text-sm text-gray-600">
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
