import { useEffect } from "react";

const VideoModal = ({ isOpen, onClose, videoSrc }) => {
  // Cerrar con ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-[headerFade_180ms_ease-out]"
          onClick={onClose} // cerrar al hacer click fuera
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Video del Colegio Isaac Newton"
            className="relative w-[90%] md:w-[800px] animate-[headerDropdown_220ms_ease-out]"
            onClick={(e) => e.stopPropagation()} // evitar cierre al hacer click dentro
          >
            {/* Botón cerrar */}
            <button
              onClick={onClose}
              type="button"
              aria-label="Cerrar video"
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
          </div>
        </div>
      )}
    </>
  );
};

export default VideoModal;
