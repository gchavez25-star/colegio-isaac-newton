import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VideoModal = ({ isOpen, onClose, videoSrc }) => {
  const MotionDiv = motion.div;

  // Cerrar con ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <MotionDiv
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // cerrar al hacer click fuera
        >
          <MotionDiv
            className="relative w-[90%] md:w-[800px]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()} // evitar cierre al hacer click dentro
          >
            {/* Botón cerrar */}
            <button
              onClick={onClose}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✕
            </button>

            {/* VIDEO YOUTUBE */}
            <iframe
              width="100%"
              height="450"
              src={`${videoSrc}?autoplay=1`}
              title="Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="rounded-xl shadow-2xl"
            ></iframe>
          </MotionDiv>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
