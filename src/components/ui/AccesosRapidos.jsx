import { motion } from 'framer-motion';
import { Mail, Calendar, ExternalLink } from 'lucide-react';

const AccesosRapidos = () => {
  const accesos = [
    {
      nombre: 'Correo',
      icono: <Mail size={40} />,
      color: 'bg-amarillo-dorado',
      hoverColor: 'hover:bg-yellow-500',
      link: 'https://accounts.google.com/ServiceLogin?service=mail',
      descripcion: 'Accede a tu correo institucional',
      external: true
    },
    {
      nombre: 'SIEWEB',
      icono: <ExternalLink size={40} />,
      color: 'bg-red-700',
      hoverColor: 'hover:bg-red-800',
      link: '#',
      descripcion: 'Sistema de información educativa',
      external: true
    },
    {
      nombre: 'Calendario',
      icono: <Calendar size={40} />,
      color: 'bg-orange-100',
      hoverColor: 'hover:bg-orange-200',
      textColor: 'text-orange-800',
      link: '/calendario-academico.pdf',
      descripcion: 'Consulta el calendario académico',
      external: false
    }
  ];

  return (
    <section className="py-0 -mt-12 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl rounded-lg overflow-hidden">
          {accesos.map((acceso, index ) => (
            <motion.a
              key={index}
              href={acceso.link}
              target={acceso.external ? "_blank" : "_self"}
              rel={acceso.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className={`${acceso.color} ${acceso.hoverColor} ${acceso.textColor || 'text-white'} p-8 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer group min-h-[180px]`}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                {acceso.icono}
              </motion.div>
              <h3 className="font-anton text-2xl mb-2">
                {acceso.nombre}
              </h3>
              <p className={`text-sm ${acceso.textColor ? 'text-orange-700' : 'text-white/80'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
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