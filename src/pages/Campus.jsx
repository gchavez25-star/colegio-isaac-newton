import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Campus = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  const campusData = [
    {
      id: 'cajamarca',
      nombre: 'Campus Cajamarca',
      direccion: 'Av. Héroes del Cenepa 123, Cajamarca',
      telefono: '(076) 123-456',
      email: 'cajamarca@isaacnewton.edu.pe',
      horario: 'Lunes a Viernes: 7:00 AM - 5:00 PM',
      descripcion: 'Nuestro campus principal cuenta con modernas instalaciones, laboratorios equipados con tecnología de última generación, biblioteca especializada, auditorio, canchas deportivas y áreas verdes diseñadas para el aprendizaje integral.',
      imagen: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop',
      caracteristicas: [
        'Laboratorios de Física, Química y Biología',
        'Biblioteca con más de 10,000 volúmenes',
        'Auditorio para 300 personas',
        'Canchas deportivas techadas',
        'Cafetería y comedor',
        'Enfermería equipada'
      ],
      mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.1!2d-78.5!3d-7.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDknMDAuMCJTIDc4wrAzMCcwMC4wIlc!5e0!3m2!1ses!2spe!4v1234567890'
    },
    {
      id: 'banos',
      nombre: 'Campus Baños del Inca',
      direccion: 'Jr. Los Baños 456, Baños del Inca',
      telefono: '(076) 789-012',
      email: 'banos@isaacnewton.edu.pe',
      horario: 'Lunes a Viernes: 7:00 AM - 5:00 PM',
      descripcion: 'Ubicado en el pintoresco distrito de Baños del Inca, este campus ofrece un ambiente tranquilo y propicio para el aprendizaje, con instalaciones modernas y espacios amplios rodeados de naturaleza.',
      imagen: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=800&h=600&fit=crop',
      caracteristicas: [
        'Laboratorio de Ciencias integrado',
        'Sala de cómputo con 40 equipos',
        'Biblioteca digital',
        'Áreas deportivas al aire libre',
        'Huerto escolar',
        'Zona de recreación'
      ],
      mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.1!2d-78.45!3d-7.16!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDknMzYuMCJTIDc4wrAyNycwMC4wIlc!5e0!3m2!1ses!2spe!4v1234567890'
    }
  ];

  const galeria = [
    {
      titulo: 'Laboratorio de Ciencias',
      imagen: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop'
    },
    {
      titulo: 'Biblioteca',
      imagen: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop'
    },
    {
      titulo: 'Auditorio',
      imagen: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop'
    },
    {
      titulo: 'Canchas Deportivas',
      imagen: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop'
    },
    {
      titulo: 'Aulas Modernas',
      imagen: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop'
    },
    {
      titulo: 'Áreas Verdes',
      imagen: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop'
    }
  ];

  const abrirModal = (imagen) => {
    setImagenSeleccionada(imagen);
    setModalOpen(true);
  };

  const cerrarModal = () => {
    setModalOpen(false);
    setImagenSeleccionada(null);
  };

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-azul-oscuro to-verde-azulado text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-anton text-5xl md:text-6xl mb-6">
              Nuestros Campus
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Dos sedes diseñadas para ofrecer los mejores espacios de aprendizaje
            </p>
          </motion.div>
        </div>
      </section>

      {/* Campus Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {campusData.map((campus, index) => (
              <motion.div
                key={campus.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Tarjeta Flip */}
                <motion.div
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                  className="relative h-96 rounded-xl shadow-2xl cursor-pointer"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Frente */}
                  <div
                    className="absolute inset-0 rounded-xl overflow-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <img
                      src={campus.imagen}
                      alt={campus.nombre}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h2 className="font-anton text-4xl text-white mb-2">
                        {campus.nombre}
                      </h2>
                      <p className="text-white flex items-center gap-2">
                        <MapPin size={20} />
                        {campus.direccion}
                      </p>
                    </div>
                  </div>

                  {/* Reverso */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-azul-oscuro to-verde-azulado text-white rounded-xl p-8 flex flex-col justify-center"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <h3 className="font-anton text-2xl mb-4">
                      {campus.nombre}
                    </h3>
                    <p className="text-sm mb-4 leading-relaxed">
                      {campus.descripcion}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-amarillo-dorado text-azul-oscuro px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity flex items-center gap-2 justify-center"
                    >
                      Ver más
                      <ChevronRight />
                    </motion.button>
                  </div>
                </motion.div>

                {/* Información detallada */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="mt-8 bg-gray-50 p-6 rounded-xl"
                >
                  <h3 className="font-anton text-2xl text-azul-oscuro mb-4">
                    Características
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {campus.caracteristicas.map((caracteristica, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <ChevronRight className="text-verde-azulado flex-shrink-0 mt-1" size={20} />
                        {caracteristica}
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-center gap-3">
                      <Phone size={20} className="text-verde-azulado" />
                      <span>{campus.telefono}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail size={20} className="text-verde-azulado" />
                      <span>{campus.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock size={20} className="text-verde-azulado" />
                      <span>{campus.horario}</span>
                    </div>
                  </div>

                  <motion.a
                    href={`https://wa.me/51976123456?text=${encodeURIComponent(`Hola, me gustaría obtener más información sobre el ${campus.nombre}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
                  >
                    Contactar por WhatsApp
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mapas Interactivos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-anton text-4xl md:text-5xl text-azul-oscuro mb-4">
              Ubicación
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Encuéntranos fácilmente en cualquiera de nuestros dos campus
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {campusData.map((campus, index) => (
              <motion.div
                key={campus.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="p-6 bg-azul-oscuro text-white">
                  <h3 className="font-anton text-2xl mb-2">
                    {campus.nombre}
                  </h3>
                  <p className="flex items-center gap-2">
                    <MapPin size={20} />
                    {campus.direccion}
                  </p>
                </div>
                <div className="h-96">
                  <iframe
                    src={campus.mapa}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-anton text-4xl md:text-5xl text-azul-oscuro mb-4">
              Galería de Instalaciones
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Conoce nuestros espacios diseñados para el aprendizaje
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galeria.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => abrirModal(item)}
                className="relative h-64 rounded-xl overflow-hidden shadow-lg cursor-pointer"
              >
                <img
                  src={item.imagen}
                  alt={item.titulo}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4 hover:bg-opacity-60 transition-all">
                  <h3 className="font-anton text-xl text-white">
                    {item.titulo}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de imagen */}
      {modalOpen && imagenSeleccionada && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={cerrarModal}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl w-full"
          >
            <button
              onClick={cerrarModal}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-amarillo-dorado"
            >
              ×
            </button>
            <img
              src={imagenSeleccionada.imagen}
              alt={imagenSeleccionada.titulo}
              className="w-full h-auto rounded-xl"
            />
            <h3 className="font-anton text-2xl text-white mt-4 text-center">
              {imagenSeleccionada.titulo}
            </h3>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Campus;

