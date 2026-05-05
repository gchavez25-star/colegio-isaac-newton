import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const PrincipiosValores = () => {
  const sectionRef = useRef(null);

  // Parallax global (funciona siempre)
  const { scrollY } = useScroll();
  const yEscudo = useTransform(scrollY, [0, 900], [0, 120]); // Ajusta 120 si quieres más movimiento

  const valoresIzquierda = [
    {
      id: 1,
      titulo: "Responsabilidad",
      imagen: "/Nosotros/Principios/Responsabilidad.jpg.jpeg",
      imagenOptimizada:
        "/optimized/Nosotros/Principios/Responsabilidad.optimized.jpg",
      link: "/nosotros#valores",
      posicion: "object-center",
    },
    {
      id: 2,
      titulo: "Integridad",
      imagen: "/Nosotros/Principios/Integridad.jpg.jpeg",
      imagenOptimizada: "/optimized/Nosotros/Principios/Integridad.optimized.jpg",
      link: "/nosotros#valores",
      posicion: "object-center",
    },
    {
      id: 3,
      titulo: "Puntualidad",
      imagen: "/Nosotros/Principios/Puntualidad.jpg.jpeg",
      imagenOptimizada: "/optimized/Nosotros/Principios/Puntualidad.optimized.jpg",
      link: "/nosotros#valores",
      posicion: "object-center",
    },
  ];

  const valoresDerecha = [
    {
      id: 4,
      titulo: "Solidaridad",
      imagen: "/Nosotros/Principios/solidaridad.jpg.jpeg",
      imagenOptimizada: "/optimized/Nosotros/Principios/solidaridad.optimized.jpg",
      link: "/nosotros#valores",
      posicion: "object-center",
    },
    {
      id: 5,
      titulo: "Respeto",
      imagen: "/Nosotros/Principios/Respeto.jpg.jpeg",
      imagenOptimizada: "/optimized/Nosotros/Principios/Respeto.optimized.jpg",
      link: "/nosotros#valores",
      posicion: "object-center",
    },
    {
      id: 6,
      titulo: "Perseverancia",
      imagen: "/Nosotros/Principios/Perseverancia.png",
      imagenOptimizada:
        "/optimized/Nosotros/Principios/Perseverancia.optimized.jpg",
      link: "/nosotros#valores",
      posicion: "object-center",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-[#013055] relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-Anton text-4xl md:text-5xl text-white tracking-wide">
            Principios y Valores
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* DESKTOP */}
          <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 items-start">
            {/* COLUMNA IZQUIERDA */}
            <div className="col-span-5 space-y-8">
              {valoresIzquierda.map((valor, index) => (
                <motion.div
                  key={valor.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <TarjetaValor valor={valor} />
                </motion.div>
              ))}
            </div>

            {/* COLUMNA CENTRAL: ESCUDO PARALLAX + STICKY */}
            <div className="col-span-2 pt-32">
              <div className="sticky top-32">
                {/* Movimiento parallax */}
                <motion.div style={{ y: yEscudo }}>
                  <div className="text-center">
                    <div className="w-40 h-40 mx-auto opacity-25">
                      <img
                        src="/Escudo líneas.png"
                        alt="Escudo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* COLUMNA DERECHA */}
            <div className="col-span-5 space-y-8 mt-24">
              {valoresDerecha.map((valor, index) => (
                <motion.div
                  key={valor.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index + 3) * 0.15 }}
                  viewport={{ once: true }}
                >
                  <TarjetaValor valor={valor} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* MÓVIL / TABLET */}
          <div className="lg:hidden">
            {/* Escudo con parallax */}
            <motion.div
              style={{ y: yEscudo }}
              className="flex justify-center mb-12"
            >
              <div className="w-32 h-32 opacity-25">
                <img
                  src="/Escudo líneas.png"
                  alt="Escudo"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...valoresIzquierda, ...valoresDerecha].map((valor, index) => (
                <motion.div
                  key={valor.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <TarjetaValor valor={valor} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TarjetaValor = ({ valor }) => {
  return (
    <Link to={valor.link} className="group block">
      <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        {/* Imagen */}
        <div className="relative aspect-[3/2] overflow-hidden bg-white">
          <img
            src={valor.imagenOptimizada || valor.imagen}
            alt={valor.titulo}
            width="900"
            height="600"
            loading="lazy"
            decoding="async"
            sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
            className={`w-full h-full object-contain ${valor.posicion} group-hover:scale-[1.02] transition-transform duration-700`}
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = valor.imagen;
            }}
          />

          {/* Botón */}
          <div className="absolute bottom-6 right-6">
            <div className="w-14 h-14 bg-[#F5E6D3] rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#fccc00] transition-all group-hover:scale-110">
              <ArrowUpRight
                size={24}
                className="text-[#013055]"
                strokeWidth={2.5}
              />
            </div>
          </div>
        </div>

        {/* Texto */}
        <div className="p-8">
          <h3 className="monserrat text-3xl text-[#007a75] leading-tight transition-colors">
            {valor.titulo}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default PrincipiosValores;
