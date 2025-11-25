import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

const Metrics = () => {

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px", once: false });

  // Hook contador profesional
  const useCounter = (from = 0, to = 100, duration = 2, start = false) => {
    const motionValue = useMotionValue(from);
    const rounded = useTransform(motionValue, value => Math.floor(value));

    useEffect(() => {
      if (!start) {
        motionValue.set(from);
        return;
      }

      const controls = animate(motionValue, to, {
        duration,
        ease: "easeOut"
      });

      return controls.stop;
    }, [start, from, to, duration, motionValue]);

    return rounded;
  };

  // Valores de logros
  const count1 = useCounter(0, 28, 2, isInView);
  const count2 = useCounter(0, 900, 2.3, isInView);
  const count3 = useCounter(0, 50, 2.1, isInView);
  const count4 = useCounter(0, 85, 2.5, isInView);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Título tipo <h2 class="entry-title"> */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="entry-title text-center text-3xl md:text-4xl font-bold text-[#013055] mb-14"
        >
          Logros Institucionales
        </motion.h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">

          {[
            { value: count1, prefix: "+", suffix: "", text: "Años de experiencia impartiendo educación de calidad." },
            { value: count2, prefix: "+", suffix: "", text: "Alumnos conforman la Familia Newtoniana." },
            { value: count3, prefix: "+", suffix: "", text: "Docentes altamente capacitados." },
            { value: count4, prefix: "", suffix: "%", text: "de los alumnos van a la universidad luego de graduarse." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="
                group perspective
                bg-[#013055]/5 
                rounded-2xl 
                p-6 
                text-center 
                relative
                transition-all duration-500 
                lg:hover:rotate-y-180 
                lg:hover:bg-[#013055]/10 
                lg:hover:shadow-xl
              "
              style={{ transformStyle: "preserve-3d" }}
            >

              {/* Frente */}
              <div className="backface-hidden">
                <h3 className="text-7xl md:text-8xl font-anton text-[#fccc00] flex justify-center items-baseline gap-1 leading-none">

                  {/* + al inicio */}
                  {item.prefix && (
                    <span className="inline-block font-anton text-inherit leading-none">
                      {item.prefix}
                    </span>
                  )}

                  {/* Valor animado */}
                  <motion.span className="inline-block font-anton text-inherit leading-none">
                    {item.value}
                  </motion.span>

                  {/* % al final */}
                  {item.suffix && (
                    <span className="inline-block font-anton text-inherit leading-none">
                      {item.suffix}
                    </span>
                  )}
                </h3>

                <p className="mt-4 text-[#013055] font-montserrat text-lg">
                  {item.text}
                </p>
              </div>

              {/* Reverso */}
              <div
                className="
                  absolute inset-0 
                  flex items-center justify-center 
                  bg-[#007a75] 
                  rounded-2xl 
                  text-white 
                  backface-hidden 
                  rotate-y-180 
                  p-6
                "
              >
                <p className="text-xl font-montserrat font-semibold">
                  {item.text}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

        {/* Botón a Comunidad */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a
            href="/comunidad"
            className="
              inline-flex items-center gap-3
              border-2 border-[#fccc00]
              text-[#013055]
              font-montserrat font-semibold
              px-8 py-3 
              rounded-xl 
              text-lg 
              hover:bg-[#fccc00]
              hover:text-[#013055]
              transition-all duration-300 
              shadow-md hover:shadow-xl
            "
          >
            Ir a Comunidad

            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-5 h-5'
            >
              <path
                fillRule='evenodd'
                d='M13.47 4.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H3.75a.75.75 0 0 1 0-1.5h14.44l-4.72-4.72a.75.75 0 0 1 0-1.06Z'
                clipRule='evenodd'
              />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Metrics;
