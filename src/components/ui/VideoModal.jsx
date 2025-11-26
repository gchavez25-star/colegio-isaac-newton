import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoModal({ isOpen, onClose, videoSrc }) {
  if (!videoSrc) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-[90%] max-w-4xl bg-black rounded-xl overflow-hidden shadow-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            {/* Botón cerrar */}
            <button
              onClick={() => {
                onClose(); // Cierra modal
              }}
              className="absolute top-3 right-3 z-50 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full"
            >
              <X size={24} />
            </button>

            {/* Video */}
            <video
              src={videoSrc}
              controls
              autoPlay
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
