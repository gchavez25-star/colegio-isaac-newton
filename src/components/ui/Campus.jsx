import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  MapPin,
  ArrowRight,
  Sparkles,
  Building2,
  Trees,
} from "lucide-react";

const CampusSection = () => {
  const campusCards = [
    {
      name: "Campus Cajamarca",
      location: "Centro de la ciudad",
      image: "/Inicio/Campus/Cajamarca.png",
      description:
        "Instalaciones modernas en el corazón de Cajamarca con tecnología de punta.",
      icon: <Building2 className="w-6 h-6 text-azul-oscuro" />,
      highlights: [
        "Laboratorios equipados",
        "Biblioteca digital",
        "Áreas deportivas",
      ],
      color: "bg-verde-azulado",
      link: "/campus/cajamarca",
    },
    {
      name: "Campus Los Baños del Inca",
      location: "Zona natural",
      image: "/Inicio/Campus/Baños.png",
      description:
        "Entorno natural ideal para el aprendizaje experiencial y actividades al aire libre.",
      icon: <Trees className="w-6 h-6 text-azul-oscuro" />,
      highlights: [
        "Áreas verdes",
        "Espacios abiertos",
        "Conexión con naturaleza",
      ],
      color: "bg-amarillo-dorado",
      link: "/campus/banos",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-verde-azulado/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-verde-azulado/10 text-verde-azulado px-6 py-3 rounded-full font-semibold text-sm mb-6 border border-verde-azulado/20">
            <Sparkles size={18} />
            Dos Ubicaciones Estratégicas
          </div>
          <h2 className="font-anton text-4xl md:text-5xl text-azul-oscuro mb-4">
            Nuestros Campus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Espacios diseñados para inspirar el aprendizaje y el crecimiento
            integral
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {campusCards.map((campus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-80 bg-gray-200 overflow-hidden">
                <img
                  src={campus.image}
                  alt={campus.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <MapPin size={18} className="text-verde-azulado" />
                  <span className="font-semibold text-azul-oscuro text-sm">
                    {campus.location}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-8 space-y-6">
                <div className="flex items-center gap-3">
                  {campus.icon}
                  <h3 className="font-anton text-3xl text-azul-oscuro mb-3">
                    {campus.name}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {campus.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {campus.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <Link
                  to={campus.link}
                  className={`inline-flex items-center gap-3 ${campus.color} text-white px-8 py-4 rounded-xl font-bold text-lg transition-all group-hover:shadow-lg`}
                >
                  Explorar Campus
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div
                className={`absolute top-0 right-0 w-32 h-32 ${campus.color} opacity-10 rounded-bl-full`}
              ></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/campus"
            className="inline-flex items-center gap-3 bg-azul-oscuro text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-azul-oscuro/90 transition-all shadow-xl hover:shadow-2xl group"
          >
            Ver Todos los Campus
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CampusSection;
