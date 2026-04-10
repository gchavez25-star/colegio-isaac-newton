import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import SEO from '@/components/SEO';

// Datos de ejemplo para el formulario
const niveles = ['Primaria', 'Secundaria'];
const sedes = ['Cajamarca', 'Los Baños del Inca'];

const VisitaGuiada = () => {
  const MotionDiv = motion.div;
  const MotionH1 = motion.h1;
  const MotionP = motion.p;
  const MotionButton = motion.button;

  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    nivel: '',
    sede: '',
    comentarios: '',
  });
  
  const [enviado, setEnviado] = useState(false);
  const [cargando, setCargando] = useState(false);


const contactosPorSede = {
  Cajamarca: {
    telefono: '932274369',
    telefonoTexto: '932 274 369',
    whatsapp: '51932274369',
    correo: 'newtoncajamarca@inewton.edu.pe',
    direccion: 'Jr. Cruz de Piedra 582, Cajamarca',
    maps: 'https://www.google.com/maps?q=-7.1677904,-78.4584945',
  },
  'Los Baños del Inca': {
    telefono: '920438721',
    telefonoTexto: '920 438 721',
    whatsapp: '51920438721',
    correo: 'secretariabi@inewton.edu.pe',
    direccion: 'Jr. Yahuar Huaca 799, Los Baños del Inca',
    maps: 'https://www.google.com/maps?q=-7.1583289,-78.5191143',
  },
};
const [errores, setErrores] = useState({});

const validarFormulario = () => {
  let valido = true;

  Object.entries(formData).forEach(([name, value]) => {
    if (name === 'comentarios') return;

    let error = '';

    if (!value.trim()) {
      error = 'Este campo es obligatorio';
    } else {
      if (name === 'correo' && !/^\S+@\S+\.\S+$/.test(value)) {
        error = 'Correo electrónico no válido';
      }
      if (name === 'telefono' && value.replace(/\D/g, '').length < 9) {
        error = 'Número de celular inválido';
      }
    }

    if (error) valido = false;

    setErrores(prev => ({ ...prev, [name]: error }));
  });

  return valido;
};


const validarCampo = (name, value) => {
  let error = '';

  if (!value.trim()) {
    error = 'Este campo es obligatorio';
  } else {
    if (name === 'correo' && !/^\S+@\S+\.\S+$/.test(value)) {
      error = 'Correo electrónico no válido';
    }
    if (name === 'telefono' && value.replace(/\D/g, '').length < 9) {
      error = 'Número de celular inválido';
    }
  }

  setErrores(prev => ({ ...prev, [name]: error }));
};

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData(prev => ({ ...prev, [name]: value }));
  validarCampo(name, value);
};

const contactoActual = contactosPorSede[formData.sede];

const handleSubmit = (e) => {
  e.preventDefault();

  if (!validarFormulario()) return;

  setCargando(true);
  setEnviado(false);

  console.log('Datos del formulario:', formData);

  setTimeout(() => {
    setCargando(false);
    setEnviado(true);

    // WhatsApp automático por sede (opcional activar)
    const contacto = contactosPorSede[formData.sede];
    if (contacto?.whatsapp) {
      const mensaje = `
Hola, deseo información sobre Visita Guiada.

Apoderado: ${formData.nombre}
Teléfono: ${formData.telefono}
Nivel: ${formData.nivel}
Sede: ${formData.sede}
      `;
      window.open(
        `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(mensaje)}`,
        '_blank'
      );
    }

  }, 1500);
};

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Visita Guiada | Colegio Isaac Newton"
        description="Agenda una visita guiada al Colegio Isaac Newton y conoce nuestras instalaciones, propuesta educativa y campus en Cajamarca y Los Baños del Inca."
        canonicalPath="/agenda-visita"
        image="/Admision/Visita/Fachada.jpg"
      />
      
      {/* HERO SECTION */}
      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/Admision/Visita/Fachada.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#013055]/92 via-[#013055]/78 to-[#013055]/48" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-[#ffcd00]/10" />
        <div className="absolute -left-16 top-20 h-44 w-44 rounded-full bg-[#ffcd00]/15 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="container relative z-10 mx-auto px-6 py-24 md:py-32 lg:py-36">
          <div className="max-w-4xl">
            <MotionDiv
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-[#ffcd00]" />
              Agenda una experiencia personalizada
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 rounded-[2rem] border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur-md md:p-10"
            >
              <MotionH1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="font-anton text-5xl leading-none text-white drop-shadow-2xl md:text-7xl lg:text-8xl"
              >
                Visita Guiada
              </MotionH1>

              <MotionP
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.8 }}
                className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90 md:text-2xl"
              >
                Recorre nuestros espacios, conoce el ambiente que acompaña a cada
                estudiante y descubre por qué Isaac Newton ofrece una experiencia
                educativa cercana, sólida y con visión de futuro.
              </MotionP>

              <MotionDiv
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7 }}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <a
                  href="#formulario-visita"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#ffcd00] px-7 py-4 text-base font-bold text-[#013055] shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <Calendar className="h-5 w-5" />
                  Agendar ahora
                </a>

                <a
                  href="#beneficios-visita"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15"
                >
                  Descubrir la experiencia
                  <ArrowRight className="h-5 w-5" />
                </a>
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.7 }}
                className="mt-8 grid gap-4 md:grid-cols-3"
              >
                <div className="rounded-2xl border border-white/15 bg-[#01294a]/55 p-4 text-white backdrop-blur-sm">
                  <p className="text-sm uppercase tracking-[0.18em] text-[#ffcd00]">
                    Recorrido
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    Instalaciones, aulas y espacios formativos.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-[#01294a]/55 p-4 text-white backdrop-blur-sm">
                  <p className="text-sm uppercase tracking-[0.18em] text-[#ffcd00]">
                    Orientación
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    Resolvemos tus dudas sobre nivel, sede y admisión.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-[#01294a]/55 p-4 text-white backdrop-blur-sm">
                  <p className="text-sm uppercase tracking-[0.18em] text-[#ffcd00]">
                    Atención
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    Confirmación rápida por parte de nuestro equipo.
                  </p>
                </div>
              </MotionDiv>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* SECCIÓN PRINCIPAL: FORMULARIO Y CONTENIDO */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* COLUMNA DE CONTENIDO (2/3) */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* PASOS PARA LA VISITA */}
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-verde-azulado"
              >
                <h2 className="font-anton text-4xl text-azul-oscuro mb-6">
                  Pasos para Agendar tu Visita
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-verde-azulado text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                    <div>
                      <h3 className="font text-xl text-azul-oscuro">Completa el Formulario</h3>
                      <p className="text-gray-600">Ingresa tus datos de contacto y el nivel educativo de tu interés en el formulario de la derecha.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-verde-azulado text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                    <div>
                      <h3 className="font text-xl text-azul-oscuro">Confirmación</h3>
                      <p className="text-gray-600">Nuestro equipo de admisiones se comunicará contigo en un plazo de 24 horas para confirmar la fecha y hora de tu visita.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-verde-azulado text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                    <div>
                      <h3 className="font text-xl text-azul-oscuro">¡Te Esperamos!</h3>
                      <p className="text-gray-600">Disfruta de un recorrido personalizado por nuestras instalaciones y resuelve todas tus dudas.</p>
                    </div>
                  </div>
                </div>
              </MotionDiv>

              {/* BENEFICIOS */}
              <MotionDiv
                id="beneficios-visita"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-amarillo-dorado"
              >
                <h2 className="font-anton text-4xl text-azul-oscuro mb-6">
                  ¿Qué Descubrirás en tu Visita?
                </h2>
                <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="flex-shrink-0 w-6 h-6 text-verde-azulado mt-1" />
                    <p>Conocerás nuestras Aulas Interactivas y laboratorios especializados.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="flex-shrink-0 w-6 h-6 text-verde-azulado mt-1" />
                    <p>Recorrerás nuestras áreas deportivas y recreativas.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="flex-shrink-0 w-6 h-6 text-verde-azulado mt-1" />
                    <p>Conversarás con nuestros directivos y docentes sobre nuestro modelo educativo.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="flex-shrink-0 w-6 h-6 text-verde-azulado mt-1" />
                    <p>Obtendrás información detallada sobre el proceso de admisión.</p>
                  </li>
                </ul>
              </MotionDiv>
            </div>

            {/* COLUMNA DE FORMULARIO (1/3) */}
            <MotionDiv
              id="formulario-visita"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 sticky top-24 h-fit"
            >
              <div className="bg-azul-oscuro p-8 rounded-2xl shadow-2xl">
                <h2 className="font-anton text-3xl text-amarillo-dorado mb-4 flex items-center gap-3">
                  <Calendar className="w-8 h-8" />
                  Agenda tu Visita
                </h2>
                <p className="text-white/80 mb-6">
                  Completa el formulario y nos pondremos en contacto contigo.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">

                {/* Nombre */}
                <div>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre y Apellido del Apoderado"
                    value={formData.nombre}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-lg border transition  
                    bg-white
                    text-[#013055]
                    placeholder:text-[#013055]
                    focus:bg-white
                    focus:text-[#013055]
                    focus:outline-none
                    focus:ring-0
                      ${errores.nombre ? 'border-red-500' : 'border-gray-300  bg-white'}
                    `}
                  />
                  {errores.nombre && (
                    <p className="text-red-400 text-xs mt-1">{errores.nombre}</p>
                  )}
                </div>

                {/* Correo */}
                <div>
                  <input
                    type="email"
                    name="correo"
                    placeholder="Correo Electrónico"
                    value={formData.correo}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-lg border transition
                       bg-white
                    text-[#013055]
                    placeholder:text-[#013055]
                    focus:bg-white
                    focus:text-[#013055]
                    focus:outline-none
                    focus:ring-0
                      ${errores.correo ? 'border-red-500' : 'border-gray-300 bg-white'}
                    `}
                  />
                  {errores.correo && (
                    <p className="text-red-400 text-xs mt-1">{errores.correo}</p>
                  )}
                </div>

                {/* Teléfono */}
                <div>
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="Teléfono Celular"
                    value={formData.telefono}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-lg border transition
                          bg-white
                    text-[#013055]
                    placeholder:text-[#013055]
                    focus:bg-white
                    focus:text-[#013055]
                    focus:outline-none
                    focus:ring-0
                      ${errores.telefono ? 'border-red-500' : 'border-gray-300  bg-white'}
                    `}
                  />
                  {errores.telefono && (
                    <p className="text-red-400 text-xs mt-1">{errores.telefono}</p>
                  )}
                </div>

                {/* Nivel */}
                <div>
                  <select
                    name="nivel"
                    value={formData.nivel}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-lg border
                          bg-white
                    text-[#013055]
                    placeholder:text-[#013055]
                    focus:bg-white
                    focus:text-[#013055]
                    focus:outline-none
                    focus:ring-0
                      ${errores.nivel ? 'border-red-500' : 'border-gray-300  bg-white'}
                    `}
                  >
                    <option value="">Nivel de Interés</option>
                    {niveles.map(n => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                  {errores.nivel && (
                    <p className="text-red-400 text-xs mt-1">{errores.nivel}</p>
                  )}
                </div>

                {/* Sede */}
                <div>
                  <select
                    name="sede"
                    value={formData.sede}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-lg border
                          bg-white
                    text-[#013055]
                    placeholder:text-[#013055]
                    focus:bg-white
                    focus:text-[#013055]
                    focus:outline-none
                    focus:ring-0
                      ${errores.sede ? 'border-red-500' : 'border-gray-300  bg-white'}
                    `}
                  >
                    <option value="">Sede de Interés</option>
                    {sedes.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errores.sede && (
                    <p className="text-red-400 text-xs mt-1">{errores.sede}</p>
                  )}
                </div>

                {/* Comentarios */}
                <textarea
                  name="comentarios"
                  placeholder="Comentarios (Opcional)"
                  value={formData.comentarios}
                  onChange={handleChange}
                  rows={3}
                  className="w-full p-3 rounded-lg border border-gray-300      bg-white
                    text-[#013055]
                    placeholder:text-[#013055]
                    focus:bg-white
                    focus:text-[#013055]
                    focus:outline-none
                    focus:ring-0"
                />

                {/* Botón */}
                <MotionButton
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  disabled={cargando || enviado}
                  className={`
                    w-full py-3 rounded-lg font-bold text-lg flex items-center justify-center gap-2
                    ${enviado
                      ? 'bg-green-500 text-white'
                      : cargando
                        ? 'bg-verde-azulado/70 text-white'
                        : 'bg-verde-azulado text-white hover:bg-verde-azulado/90'}
                  `}
                >
                  {enviado ? '¡Agendado!' : cargando ? 'Enviando...' : ' Enviar mensaje'}
                  {!cargando && !enviado && <ArrowRight className="w-5 h-5" />}
                </MotionButton>

              </form>

                
                {/* Información de contacto alternativa */}

                <div className="mt-6 pt-4 border-t border-white/20">
                  <MotionDiv
                    key={formData.sede || 'sin-sede'}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-4 text-sm text-white/90"
                  >
                    {!contactoActual ? (
                      <p className="text-white/70 italic">
                        Selecciona una sede para ver el contacto.
                      </p>
                    ) : (
                      <>
                        <p className="font-semibold">
                          Contáctanos directamente - {formData.sede}
                        </p>

                        {/* Teléfono */}
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-amarillo-dorado" />
                          <span>{contactoActual.telefonoTexto}</span>
                        </div>

                        {/* Correo */}
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-amarillo-dorado" />
                          <span>{contactoActual.correo}</span>
                        </div>

                        {/* Dirección */}
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-amarillo-dorado" />
                          <span>{contactoActual.direccion}</span>
                        </div>

                        {/* Botones de acción */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                          
                          {/* Llamar */}
                          <a
                            href={`tel:${contactoActual.telefono}`}
                            className="bg-white/10 hover:bg-white/20 transition rounded-lg py-2 text-center font"
                          >
                            Llamar ahora
                          </a>

                          {/* WhatsApp */}
                          <a
                            href={`https://wa.me/${contactoActual.whatsapp}?text=Hola,%20deseo%20información%20sobre%20admisión`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 hover:bg-green-700 transition rounded-lg py-2 text-center font text-white"
                          >
                           WhatsApp
                          </a>

                          {/* Google Maps */}
                          <a
                            href={contactoActual.maps}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 hover:bg-white/20 transition rounded-lg py-2 text-center font"
                          >
                            Google Maps
                          </a>

                        </div>
                      </>
                    )}
                  </MotionDiv>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE CONTACTO ALTERNATIVO (opcional, si el diseño lo requiere) */}
      <section className="py-16 bg-azul-oscuro/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-anton text-4xl text-azul-oscuro mb-4">
            ¿Tienes Preguntas?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Nuestro equipo de admisiones está listo para ayudarte.
          </p>
          <a
            href="mailto:admision@inewton.edu.pe"
            className="inline-flex items-center gap-3 bg-verde-azulado text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-verde-azulado/90 transition-all shadow-lg"
          >
            <Mail className="w-6 h-6" />
            Enviar un Correo
          </a>
        </div>
      </section>

    </div>
  );
};

export default VisitaGuiada;


