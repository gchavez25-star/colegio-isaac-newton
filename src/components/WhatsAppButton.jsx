import { useState } from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";
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
      <button
        onClick={() => setOpen(true)}
        type="button"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-all duration-300 hover:scale-110 active:scale-90 animate-[headerSubmenu_300ms_ease-out]"
        aria-label="Contactar por WhatsApp"
      >
        <SiWhatsapp size={30} />
      </button>

      {/* ================= CAMPUS SELECTOR ================= */}
      {open && (
          <div
            className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center animate-[headerFade_180ms_ease-out]"
            onClick={() => setOpen(false)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="whatsapp-campus-title"
              className="bg-white rounded-2xl p-6 w-80 shadow-2xl animate-[headerDropdown_220ms_ease-out]"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-semibold text-center mb-4 text-[#013055]">
                <span id="whatsapp-campus-title">
                Elige un campus
                </span>
              </h3>

              <div className="space-y-3">
                {Object.values(campuses).map((campus) => (
                  <button
                    key={campus.phone}
                    onClick={() => openWhatsApp(campus.phone)}
                    type="button"
                    className="w-full py-3 rounded-xl bg-green-500 text-white hover:bg-green-600 transition font-medium"
                  >
                    {campus.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

      {/* ================= SOCIAL NETWORKS ================= */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
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
