import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const CampusBanos = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  const campus = {
    nombre: 'Campus Baños del Inca',
    direccion: 'Jr. Los Baños 456, Baños del Inca',
    telefono: '(076) 789-012',
    email: 'banos@isaacnewton.edu.pe',
    horario: 'Lunes a Viernes: 7:00 AM - 5:00 PM',
    descripcion:
      'Nuestra sede Baños del Inca ofrece un entorno natural y tranquilo, ideal para el aprendizaje integral, combinando infraestructura moderna con amplios espacios abiertos.',
    imagen:
      'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=1200&h=800&fit=crop',
    caracteristicas: [
      'Aulas modernas e iluminadas',
      'Sala de cómputo equipada',
      'Área de Psicología Educativa',
      'Tópico y enfermería escolar',
      'Áreas deportivas al aire libre',
      'Amplias áreas verdes'
    ],
    video: 'https://www.youtube.com/embed/VIDEO_ID',
    mapa:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.1!2d-78.45!3d-7.16!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!5e0!3m2!1ses!2spe'
  };

  const galeria = [
    {
      titulo: 'Aulas modernas',
      imagen: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop'
    },
    {
      titulo: 'Área de Psicología',
      imagen: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop'
    },
    {
      titulo: 'Tópico escolar',
      imagen: 'https://images.unsplash.com/photo-1580281658629-9c5a77f9c1d6?w=800&h=600&fit=crop'
    },
    {
      titulo: 'Áreas verdes',
      imagen: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop'
    }
  ];

  const abrirModal = (item) => {
    setImagenSeleccionada(item);
    setModalOpen(true);
  };

  const cerrarModal = () => {
    setModalOpen(false);
    setImagenSeleccionada(null);
  };

  return (
    <div className="min-h-screen pt-32">
      {/* HERO */}
      <section className="py-20 bg-gradient-to-br from-azul-oscuro to-verde-azulado text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-anton text-5xl md:text-6xl mb-6"
          >
            {campus.nombre}
          </motion.h1>
          <p className="text-xl font-light">Educación en armonía con la naturaleza</p>
        </div>
      </section>

      {/* TARJETA + INFO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.6 }}
            className="relative h-96 rounded-xl shadow-2xl"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div
              className="absolute inset-0 rounded-xl overflow-hidden"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <img src={campus.imagen} alt={campus.nombre} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <h2 className="font-anton text-4xl">{campus.nombre}</h2>
                <p className="flex items-center gap-2">
                  <MapPin size={20} /> {campus.direccion}
                </p>
              </div>
            </div>

            <div
              className="absolute inset-0 bg-azul-oscuro text-white rounded-xl p-6 flex flex-col justify-center"
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
              <p className="text-sm leading-relaxed mb-6">{campus.descripcion}</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {campus.caracteristicas.map((item, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <ChevronRight size={16} className="text-amarillo-dorado" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <Phone className="text-verde-azulado" /> {campus.telefono}
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-verde-azulado" /> {campus.email}
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-verde-azulado" /> {campus.horario}
            </div>

            <a
              href={`https://wa.me/51976123456?text=${encodeURIComponent(
                'Hola, deseo información del Campus Baños del Inca'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-6 bg-green-500 text-white px-6 py-3 rounded-lg font-bold"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-anton text-4xl text-azul-oscuro mb-6 text-center">
            Conoce nuestro campus
          </h2>
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={campus.video}
              className="w-full h-full"
              allowFullScreen
              title="Campus Baños del Inca"
            />
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-anton text-4xl text-azul-oscuro mb-10 text-center">
            Instalaciones
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galeria.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                onClick={() => abrirModal(item)}
                className="cursor-pointer rounded-xl overflow-hidden shadow-lg"
              >
                <img src={item.imagen} alt={item.titulo} className="w-full h-56 object-cover" />
                <div className="p-3 bg-black text-white text-center font-anton">
                  {item.titulo}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MAPA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-anton text-4xl text-azul-oscuro mb-6 text-center">
            Ubicación
          </h2>
          <div className="h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe src={campus.mapa} className="w-full h-full" loading="lazy" />
          </div>
        </div>
      </section>

      {/* MODAL */}
      {modalOpen && imagenSeleccionada && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={cerrarModal}
        >
          <div className="max-w-4xl p-4">
            <img src={imagenSeleccionada.imagen} alt={imagenSeleccionada.titulo} className="rounded-xl" />
            <h3 className="font-anton text-white text-2xl mt-4 text-center">
              {imagenSeleccionada.titulo}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampusBanos;
