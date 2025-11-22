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
        motionValue.set(from); // Reinicia cuando sale de vista
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

  const count1 = useCounter(0, 900, 2.5, isInView);
  const count2 = useCounter(0, 28, 2, isInView);
  const count3 = useCounter(0, 85, 2.2, isInView);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          {[
            {
              value: count1,
              suffix: "+",
              text: "Alumnos conforman la Familia Newtoniana"
            },
            {
              value: count2,
              suffix: "+",
              text: "Años de experiencia impartiendo educación de calidad"
            },
            {
              value: count3,
              suffix: "%",
              text: "Egresados estudian en universidades Top"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 rounded-2xl shadow-lg bg-[#013055]/5 hover:bg-[#013055]/10 transition-all duration-300"
            >
              <h3 className="text-8xl font-anton text-[#fccc00]">
                {item.suffix === "+" && "+"}
                <motion.span>{item.value}</motion.span>
                {item.suffix === "%" && "%"}
              </h3>
              <p className="mt-3 text-[#013055] font-montserrat text-lg">
                {item.text}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Metrics;
