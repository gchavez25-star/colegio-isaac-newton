import { motion } from 'framer-motion';
import { Mail, Calendar, ExternalLink } from 'lucide-react';

const AccesosRapidos = () => {
  const accesos = [
    {
      nombre: 'Correo',
      icono: <Mail size={40} />, // tamaño reducido
      color: 'bg-[#013055]',
      hoverColor: 'hover:bg-[#013055]',
      link: 'https://accounts.google.com/ServiceLogin?service=mail',
      descripcion: 'Accede a tu correo institucional',
      external: true
    },
    {
      nombre: 'SIEWEB',
      icono: <ExternalLink size={40} />, // tamaño reducido
      color: 'bg-[#007a75]',
      hoverColor: 'hover:bg-[#007a75]',
      link: '#',
      descripcion: 'Sistema de información educativa',
      external: true
    },
    {
      nombre: 'Calendario',
      icono: <Calendar size={40} />, // tamaño reducido
      color: 'bg-[#ffcd00]',
      hoverColor: 'hover:bg-[#ffcd00]',
      link: '/calendario-academico.pdf',
      descripcion: 'Consulta el calendario académico',
      external: false
    }
  ];

  return (
    <section className="py-0 -mt-12 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl rounded-lg overflow-hidden">
          {accesos.map((acceso, index) => (
            <motion.a
              key={index}
              href={acceso.link}
              target={acceso.external ? "_blank" : "_self"}
              rel={acceso.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className={`${acceso.color} ${acceso.hoverColor} ${acceso.textColor || 'text-white'} p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer group min-h-[40px] md:min-h-[50px] lg:min-h-[100px]`}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.15 }}
                transition={{ duration: 0.5 }}
                className="mb-2"
              >
                {acceso.icono}
              </motion.div>
              <h3 className="font-anton text-lg md:text-xl lg:text-2xl mb-1">{acceso.nombre}</h3>
              <p className={`text-sm md:text-xs lg:text-sm ${acceso.textColor ? 'text-orange-700' : 'text-white/80'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
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
