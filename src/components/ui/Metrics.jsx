import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const Metrics = () => {

  // === Hook interno para animar números ===
  const useCounter = (from = 0, to = 100, duration = 2) => {
    const motionValue = useMotionValue(from);
    const rounded = useTransform(motionValue, value => Math.floor(value));

    useEffect(() => {
      const controls = animate(motionValue, to, { duration });
      return controls.stop;
    }, [motionValue, to, duration]);

    return rounded;
  };

  // === Valores animados ===
  const count1 = useCounter(0, 900, 2);
  const count2 = useCounter(0, 28, 2);
  const count3 = useCounter(0, 85, 2);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          {/* Item 1 */}
          <div className="p-6 rounded-2xl shadow-lg bg-[#013055]/5 hover:bg-[#013055]/10 transition-all duration-300">
            <h3 className="text-8xl font-anton text-[#fccc00]">
              +<motion.span>{count1}</motion.span>
            </h3>
            <p className="mt-3 text-[#013055] font-montserrat text-lg">
              Alumnos conforman la Familia Newtoniana
            </p>
          </div>

          {/* Item 2 */}
          <div className="p-6 rounded-2xl shadow-lg bg-[#013055]/5 hover:bg-[#013055]/10 transition-all duration-300">
            <h3 className="text-8xl font-anton text-[#fccc00]">
              +<motion.span>{count2}</motion.span>
            </h3>
            <p className="mt-3 text-[#013055] font-montserrat text-lg">
              Años de experiencia impartiendo educación de calidad
            </p>
          </div>

          {/* Item 3 */}
          <div className="p-6 rounded-2xl shadow-lg bg-[#013055]/5 hover:bg-[#013055]/10 transition-all duration-300">
            <h3 className="text-8xl font-anton text-[#fccc00]">
              <motion.span>{count3}</motion.span>%
            </h3>
            <p className="mt-3 text-[#013055] font-montserrat text-lg">
              Egresados estudian en universidades Top
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Metrics;
