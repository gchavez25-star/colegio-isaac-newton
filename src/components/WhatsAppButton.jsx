import { useState } from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SiTiktok, SiWhatsapp } from "react-icons/si";

const campuses = {
  cajamarca: {
    label: "Campus Cajamarca",
    phone: "51953751275",
  },
  banos: {
    label: "Campus Los Baños del Inca",
    phone: "51920438721",
  },
};

export default function FloatingSocialButtons() {
  const [open, setOpen] = useState(false);

  const message = encodeURIComponent(
    "Hola, me gustaría obtener información sobre el Colegio Isaac Newton.",
  );

  const openWhatsApp = (phone) => {
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    setOpen(false);
  };

  return (
    <>
      {/* ================= WHATSAPP BUTTON ================= */}
      <motion.button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        aria-label="Contactar por WhatsApp"
      >
        <SiWhatsapp size={30} />
      </motion.button>

      {/* ================= CAMPUS SELECTOR ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 w-80 shadow-2xl"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-semibold text-center mb-4 text-[#013055]">
                Elige un campus
              </h3>

              <div className="space-y-3">
                {Object.values(campuses).map((campus) => (
                  <button
                    key={campus.phone}
                    onClick={() => openWhatsApp(campus.phone)}
                    className="w-full py-3 rounded-xl bg-green-500 text-white hover:bg-green-600 transition font-medium"
                  >
                    {campus.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= SOCIAL NETWORKS ================= */}
      <div className="fixed bottom-6 left-6 z-50 hidden flex-col gap-3 md:flex">
        <a
          href="https://www.facebook.com/IsaacNewtonCajamarca"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="bg-blue-600 p-3 rounded-full text-white shadow-lg hover:scale-110 transition-transform"
        >
          <Facebook size={22} />
        </a>

        <a
          href="https://www.instagram.com/colegio_isaac_newton/?hl=es-la"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="bg-pink-600 p-3 rounded-full text-white shadow-lg hover:scale-110 transition-transform"
        >
          <Instagram size={22} />
        </a>

        <a
          href="https://www.tiktok.com/@colegio_isaacnewton"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="bg-black p-3 rounded-full text-white shadow-lg hover:scale-110 transition-transform"
        >
          <SiTiktok size={20} />
        </a>

        <a
          href="https://www.youtube.com/@ColegioPrivadoIsaacNewton"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="bg-red-600 p-3 rounded-full text-white shadow-lg hover:scale-110 transition-transform"
        >
          <Youtube size={22} />
        </a>
      </div>
    </>
  );
}
