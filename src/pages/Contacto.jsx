import { useState } from "react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Send,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";

/* ==================================================
   CONFIGURACIÓN GENERAL
================================================== */

const niveles = ["Primaria", "Secundaria"];
const sedes = ["Cajamarca", "Los Baños del Inca"];

const contactosPorSede = {
  Cajamarca: {
    telefono: "953751275",
    telefonoTexto: "953 751 275",
    whatsapp: "51953751275",
    email: "secretaria.cajamarca@inewton.edu.pe",
    direccion: "Jr. Cruz de Piedra N° 582, Cajamarca",
    horario: "Lunes a Viernes: 7:30 AM - 6:30 PM",
    imagen: "/Contacto/Pabellon A1.png",
  },
  "Los Baños del Inca": {
    telefono: "920438721",
    telefonoTexto: "920 438 721",
    whatsapp: "51920438721",
    email: "secretariabi@inewton.edu.pe",
    direccion: "Jr. Yahuar Huaca N° 799, Los Baños del Inca",
    horario: "Lunes a Viernes: 7:30 AM - 6:30 PM",
    imagen: "/Contacto/Patio 1.jpg",
  },
};

const campusInfo = Object.keys(contactosPorSede).map((nombre) => ({
  nombre,
  ...contactosPorSede[nombre],
}));

const redesSociales = [
  {
    nombre: "Facebook",
    icono: <Facebook size={24} />,
    url: "https://www.facebook.com/IsaacNewtonCajamarca",
    color: "hover:text-blue-600",
  },
  {
    nombre: "Instagram",
    icono: <Instagram size={24} />,
    url: "https://www.instagram.com/colegio_isaac_newton/?hl=es-la",
    color: "hover:text-pink-600",
  },
  {
    nombre: "YouTube",
    icono: <Youtube size={24} />,
    url: "https://www.youtube.com/@ColegioPrivadoIsaacNewton",
    color: "hover:text-red-600",
  },
  {
    nombre: "TikTok",
    icono: <FaTiktok size={22} />,
    url: "https://www.tiktok.com/@colegio_isaacnewton",
    color: "hover:text-black",
  },
];

/* ==================================================
   COMPONENTE
================================================== */

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    nivel: "",
    sede: "",
    asunto: "",
    mensaje: "",
  });

  const [errores, setErrores] = useState({});
  const [cargando, setCargando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrores((prev) => ({ ...prev, [name]: "" }));
  };

  const validarFormulario = () => {
    const nuevosErrores = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.nombre.trim())
      nuevosErrores.nombre = "El nombre es obligatorio";
    if (!formData.correo.trim()) {
      nuevosErrores.correo = "El correo es obligatorio";
    } else if (!emailRegex.test(formData.correo)) {
      nuevosErrores.correo = "Correo inválido";
    }
    if (!formData.nivel) nuevosErrores.nivel = "Selecciona un nivel";
    if (!formData.sede) nuevosErrores.sede = "Selecciona una sede";
    if (!formData.asunto) nuevosErrores.asunto = "Selecciona un asunto";
    if (!formData.mensaje.trim())
      nuevosErrores.mensaje = "El mensaje es obligatorio";

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validarFormulario()) return;

    setCargando(true);
    setEnviado(false);

    const contacto = contactosPorSede[formData.sede];

    const mensajeWhatsApp = `
Nueva solicitud desde la Web:

Nombre: ${formData.nombre}
Correo: ${formData.correo}
Teléfono: ${formData.telefono || "No proporcionado"}

Nivel: ${formData.nivel}
Sede: ${formData.sede}
Asunto: ${formData.asunto}

Mensaje:
${formData.mensaje}
    `.trim();

    setTimeout(() => {
      setCargando(false);
      setEnviado(true);

      if (contacto?.whatsapp) {
        window.open(
          `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(
            mensajeWhatsApp,
          )}`,
          "_blank",
        );
      }

      setFormData({
        nombre: "",
        correo: "",
        telefono: "",
        nivel: "",
        sede: "",
        asunto: "",
        mensaje: "",
      });
    }, 1200);
  };
  return (
    <div className="min-h-screen">
      <SEO
        title="Contacto | Colegio Isaac Newton"
        description="Comunícate con el Colegio Isaac Newton. Encuentra teléfonos, correos, campus en Cajamarca y Los Baños del Inca, horarios de atención y formulario de contacto."
        canonicalPath="/contacto"
        image="/Contacto/Contacto.jpg"
      />

      {/* HERO SECTION */}
      <section
        className="relative py-32 md:py-48 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Contacto/Contacto.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-azul-oscuro/80 " />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-anton text-5xl md:text-7xl text-[#013055] mb-4"
          >
            Contáctanos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-[#fccd00] max-w-3xl mx-auto"
          >
            Estamos aquí para responder todas tus preguntas
          </motion.p>
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
                Completa el formulario y nos pondremos en contacto contigo a la
                brevedad
              </p>

              {enviado && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6"
                >
                  ¡Mensaje enviado exitosamente! Nos pondremos en contacto
                  contigo pronto.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg ${
                      errores.nombre ? "border-red-500" : "border-gray-300"
                    } focus:ring-2 focus:ring-verde-azulado`}
                  />
                  {errores.nombre && (
                    <p className="text-red-500 text-sm">{errores.nombre}</p>
                  )}
                </div>

                {/* Correo */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg ${
                      errores.correo ? "border-red-500" : "border-gray-300"
                    } focus:ring-2 focus:ring-verde-azulado`}
                  />
                  {errores.correo && (
                    <p className="text-red-500 text-sm">{errores.correo}</p>
                  )}
                </div>

                {/* Teléfono */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verde-azulado"
                  />
                </div>

                {/* Nivel */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nivel *
                  </label>
                  <select
                    name="nivel"
                    value={formData.nivel}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg ${
                      errores.nivel ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Selecciona un nivel</option>
                    {niveles.map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                  {errores.nivel && (
                    <p className="text-red-500 text-sm">{errores.nivel}</p>
                  )}
                </div>

                {/* Sede */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Campus *
                  </label>
                  <select
                    name="sede"
                    value={formData.sede}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg ${
                      errores.sede ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Selecciona una sede</option>
                    {sedes.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errores.sede && (
                    <p className="text-red-500 text-sm">{errores.sede}</p>
                  )}
                </div>

                {/* Asunto */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Asunto *
                  </label>
                  <select
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg ${
                      errores.asunto ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="informacion">Información general</option>
                    <option value="admision">Proceso de admisión</option>
                    <option value="visita">Agendar visita</option>
                    <option value="becas">Becas y beneficios</option>
                    <option value="otro">Otro</option>
                  </select>
                  {errores.asunto && (
                    <p className="text-red-500 text-sm">{errores.asunto}</p>
                  )}
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="mensaje"
                    rows="5"
                    value={formData.mensaje}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg resize-none ${
                      errores.mensaje ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errores.mensaje && (
                    <p className="text-red-500 text-sm">{errores.mensaje}</p>
                  )}
                </div>

                {/* Botón */}
                <motion.button
                  type="submit"
                  disabled={cargando || enviado}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-4 rounded-lg font-bold text-lg flex justify-center gap-2
                    ${
                      enviado
                        ? "bg-green-500"
                        : cargando
                          ? "bg-verde-azulado/70"
                          : "bg-verde-azulado hover:opacity-90"
                    } text-white`}
                >
                  {enviado
                    ? "¡Mensaje enviado!"
                    : cargando
                      ? "Enviando..."
                      : "Enviar mensaje"}
                  {!cargando && !enviado && <Send size={20} />}
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
                Visítanos en cualquiera de nuestros dos campus o comunícate con
                nosotros
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
                        <MapPin
                          size={20}
                          className="text-verde-azulado flex-shrink-0 mt-1"
                        />
                        <span>{campus.direccion}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <Phone
                          size={20}
                          className="text-verde-azulado flex-shrink-0"
                        />
                        <div>
                          <div>{campus.telefono}</div>
                          <div>{campus.celular}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <Mail
                          size={20}
                          className="text-verde-azulado flex-shrink-0"
                        />
                        <a
                          href={`mailto:${campus.email}`}
                          className="hover:text-verde-azulado transition-colors"
                        >
                          {campus.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <Clock
                          size={20}
                          className="text-verde-azulado flex-shrink-0"
                        />
                        <span>{campus.horario}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Redes Sociales */}

              <div className="bg-azul-oscuro p-8 rounded-xl w-full">
                <h3 className="font-anton text-2xl text-white text-center mb-6">
                  Síguenos en redes sociales
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 place-items-center">
                  {redesSociales.map((red, index) => (
                    <motion.a
                      key={index}
                      href={red.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-14 h-14 flex items-center justify-center rounded-full bg-white/10 text-white ${red.color}`}
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
                { dia: "Lunes a Viernes", horario: "7:30 AM - 6:30 PM" },
                { dia: "Sábados, Domingos y Feriados", horario: "Cerrado" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                >
                  <span className="font-semibold text-azul-oscuro">
                    {item.dia}
                  </span>
                  <span className="text-verde-azulado font-bold">
                    {item.horario}
                  </span>
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
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      campus.direccion,
                    )}`}
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
      <section className="relative py-24 bg-gradient-to-br from-[#013055] via-[#014a6e] to-[#013055] overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-anton text-4xl md:text-5xl mb-6 text-white">
              ¿Prefieres hablar directamente?
            </h2>
            <p className="text-xl mb-8 text-white">
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

