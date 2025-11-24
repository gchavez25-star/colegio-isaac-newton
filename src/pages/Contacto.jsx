import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Send } from 'lucide-react';
import { useState } from 'react';

const Contacto = () => {
  const [enviado, setEnviado] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Formulario enviado:', data);
    // Aquí se implementaría el envío real del formulario
    setEnviado(true);
    reset();
    setTimeout(() => setEnviado(false), 5000);
  };

  const campusInfo = [
    {
      nombre: 'Campus Cajamarca',
      direccion: 'Av. Héroes del Cenepa 123, Cajamarca',
      telefono: '(076) 123-456',
      celular: '+51 976 123 456',
      email: 'cajamarca@isaacnewton.edu.pe',
      horario: 'Lunes a Viernes: 7:00 AM - 5:00 PM',
      imagen: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop'
    },
    {
      nombre: 'Campus Baños del Inca',
      direccion: 'Jr. Los Baños 456, Baños del Inca',
      telefono: '(076) 789-012',
      celular: '+51 976 789 012',
      email: 'banos@isaacnewton.edu.pe',
      horario: 'Lunes a Viernes: 7:00 AM - 5:00 PM',
      imagen: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=600&h=400&fit=crop'
    }
  ];

  const redesSociales = [
    {
      nombre: 'Facebook',
      icono: <Facebook size={24} />,
      url: 'https://facebook.com/isaacnewton',
      color: 'hover:text-blue-600'
    },
    {
      nombre: 'Instagram',
      icono: <Instagram size={24} />,
      url: 'https://instagram.com/isaacnewton',
      color: 'hover:text-pink-600'
    },
    {
      nombre: 'YouTube',
      icono: <Youtube size={24} />,
      url: 'https://youtube.com/isaacnewton',
      color: 'hover:text-red-600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-azul-oscuro to-verde-azulado text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-anton text-5xl md:text-6xl mb-6">
              Contáctanos
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Estamos aquí para responder todas tus preguntas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formulario y Mapa */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-anton text-4xl text-azul-oscuro mb-6">
                Envíanos un mensaje
              </h2>
              <p className="text-gray-600 mb-8">
                Completa el formulario y nos pondremos en contacto contigo a la brevedad
              </p>

              {enviado && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6"
                >
                  ¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Nombre */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    {...register('nombre', { required: 'El nombre es obligatorio' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-verde-azulado"
                    placeholder="Tu nombre completo"
                  />
                  {errors.nombre && (
                    <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>
                  )}
                </div>

                {/* Correo */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'El correo es obligatorio',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Correo electrónico inválido'
                      }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-verde-azulado"
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Teléfono */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    {...register('telefono')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-verde-azulado"
                    placeholder="+51 999 999 999"
                  />
                </div>

                {/* Asunto */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Asunto *
                  </label>
                  <select
                    {...register('asunto', { required: 'Selecciona un asunto' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-verde-azulado"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="informacion">Información general</option>
                    <option value="admision">Proceso de admisión</option>
                    <option value="visita">Agendar visita</option>
                    <option value="becas">Becas y beneficios</option>
                    <option value="otro">Otro</option>
                  </select>
                  {errors.asunto && (
                    <p className="text-red-500 text-sm mt-1">{errors.asunto.message}</p>
                  )}
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    {...register('mensaje', { required: 'El mensaje es obligatorio' })}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-verde-azulado resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                  {errors.mensaje && (
                    <p className="text-red-500 text-sm mt-1">{errors.mensaje.message}</p>
                  )}
                </div>

                {/* Botón */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-verde-azulado text-white px-6 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Enviar mensaje
                </motion.button>
              </form>
            </motion.div>

            {/* Información de contacto */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-anton text-4xl text-azul-oscuro mb-6">
                Información de contacto
              </h2>
              <p className="text-gray-600 mb-8">
                Visítanos en cualquiera de nuestros dos campus o comunícate con nosotros
              </p>

              <div className="space-y-6">
                {campusInfo.map((campus, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-gray-50 p-6 rounded-xl shadow-lg"
                  >
                    <h3 className="font-anton text-2xl text-azul-oscuro mb-4">
                      {campus.nombre}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 text-gray-700">
                        <MapPin size={20} className="text-verde-azulado flex-shrink-0 mt-1" />
                        <span>{campus.direccion}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <Phone size={20} className="text-verde-azulado flex-shrink-0" />
                        <div>
                          <div>{campus.telefono}</div>
                          <div>{campus.celular}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <Mail size={20} className="text-verde-azulado flex-shrink-0" />
                        <a href={`mailto:${campus.email}`} className="hover:text-verde-azulado transition-colors">
                          {campus.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <Clock size={20} className="text-verde-azulado flex-shrink-0" />
                        <span>{campus.horario}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Redes Sociales */}
              <div className="mt-8 bg-azul-oscuro p-6 rounded-xl">
                <h3 className="font-anton text-2xl text-white mb-4">
                  Síguenos en redes sociales
                </h3>
                <div className="flex gap-4">
                  {redesSociales.map((red, index) => (
                    <motion.a
                      key={index}
                      href={red.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`text-white ${red.color} transition-colors`}
                    >
                      {red.icono}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Horarios de Atención */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-anton text-4xl md:text-5xl text-azul-oscuro mb-4">
              Horarios de Atención
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Estamos disponibles para atenderte en los siguientes horarios
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <div className="space-y-4">
              {[
                { dia: 'Lunes a Viernes', horario: '7:00 AM - 5:00 PM' },
                { dia: 'Sábados', horario: '8:00 AM - 1:00 PM' },
                { dia: 'Domingos y Feriados', horario: 'Cerrado' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                >
                  <span className="font-semibold text-azul-oscuro">{item.dia}</span>
                  <span className="text-verde-azulado font-bold">{item.horario}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mapa de ubicación */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-anton text-4xl md:text-5xl text-azul-oscuro mb-4">
              Encuéntranos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Visita cualquiera de nuestros dos campus
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {campusInfo.map((campus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={campus.imagen}
                    alt={campus.nombre}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-anton text-2xl text-azul-oscuro mb-2">
                    {campus.nombre}
                  </h3>
                  <p className="text-gray-600 flex items-center gap-2 mb-4">
                    <MapPin size={18} className="text-verde-azulado" />
                    {campus.direccion}
                  </p>
                  <motion.a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(campus.direccion)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-verde-azulado text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
                  >
                    Ver en Google Maps
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-verde-azulado to-azul-oscuro text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-anton text-4xl md:text-5xl mb-6">
              ¿Prefieres hablar directamente?
            </h2>
            <p className="text-xl mb-8">
              Llámanos o escríbenos por WhatsApp y con gusto te atenderemos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+51976123456"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-azul-oscuro px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
              >
                <Phone size={20} />
                Llamar ahora
              </motion.a>
              <motion.a
                href="https://wa.me/51976123456"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors"
              >
                WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;

