import {
  ArrowRight,
  BookOpenText,
  BriefcaseBusiness,
  FileText,
  GraduationCap,
  Info,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  SiFacebook,
  SiInstagram,
  SiTiktok,
  SiYoutube,
} from "react-icons/si";
import { Link } from "react-router-dom";
import { LOCATIONS } from "@/constants/locations";

const contactIconClass = "mt-0.5 h-4 w-4 flex-none text-[#fccc00]";

const campusData = [
  {
    title: "Campus Cajamarca",
    address: LOCATIONS.cajamarca.shortAddress,
    mapUrl: LOCATIONS.cajamarca.mapUrl,
    phone: "953 751 275",
    whatsapp: "https://wa.me/51953751275",
    email: "secretaria.cajamarca@inewton.edu.pe",
  },
  {
    title: "Campus Los Baños del Inca",
    address: LOCATIONS.banos.shortAddress,
    mapUrl: LOCATIONS.banos.mapUrl,
    phone: "920 438 721",
    whatsapp: "https://wa.me/51920438721",
    email: "secretariabi@inewton.edu.pe",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/IsaacNewtonCajamarca",
    icon: SiFacebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/colegio_isaac_newton/?hl=es-la",
    icon: SiInstagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@ColegioPrivadoIsaacNewton",
    icon: SiYoutube,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@colegio_isaacnewton",
    icon: SiTiktok,
  },
];

const footerLinks = [
  {
    label: "Libro de reclamaciones",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdosVFR8OYBpIH48s8wyRgpnSetiE1Eyt2wiXWU1f49bcBN-Q/viewform?usp=header",
    external: true,
    icon: BookOpenText,
  },
  {
    label: "Solicite información",
    to: "/contacto",
    icon: Info,
  },
  {
    label: "Trabaja con nosotros",
    to: "/vacantes",
    icon: BriefcaseBusiness,
  },
  {
    label: "Términos legales",
    to: "/terminos",
    icon: FileText,
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#013055] pt-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-4">
          <div className="flex flex-col items-center gap-4 text-center">
            <img
              src="/Escudo líneas.png"
              className="h-24 object-contain md:h-28"
              alt="Escudo Colegio Isaac Newton"
              loading="lazy"
              decoding="async"
            />
            <p className="max-w-xs text-sm leading-relaxed text-white/75">
              Colegio Privado de Ciencias Isaac Newton
            </p>
          </div>

          <div className="flex flex-col justify-center gap-6 sm:flex-row lg:col-span-2 lg:justify-start">
            {campusData.map((campus) => (
              <div key={campus.title} className="w-full p-4 sm:w-80">
                <h3 className="mb-4 text-lg font-normal text-[#fccc00]">
                  {campus.title}
                </h3>

                <div className="space-y-3 text-sm text-white/85">
                  <a
                    href={campus.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 transition hover:text-[#fccc00]"
                  >
                    <MapPin className={contactIconClass} />
                    <span>{campus.address}</span>
                  </a>

                  <a
                    href={campus.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 transition hover:text-[#fccc00]"
                  >
                    <Phone className={contactIconClass} />
                    <span>{campus.phone}</span>
                  </a>

                  <a
                    href={`mailto:${campus.email}`}
                    className="flex items-center gap-3 break-all transition hover:text-[#fccc00]"
                  >
                    <Mail className={contactIconClass} />
                    <span>{campus.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-6 lg:items-end">
            <div className="flex gap-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 shadow-md transition hover:bg-[#fccc00] hover:text-[#013055]"
                  >
                    <Icon size={21} />
                  </a>
                );
              })}
            </div>

            <Link
              to="/admision"
              className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-7 py-3 text-sm font-bold shadow-md transition hover:border-[#fccc00] hover:bg-[#fccc00] hover:text-[#013055]"
            >
              <GraduationCap className="h-4 w-4" />
              Admisión y Traslados
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-14 border-t border-white/15 py-10">
        <div className="container mx-auto grid grid-cols-1 gap-4 px-4 text-sm sm:grid-cols-2 md:grid-cols-4">
          {footerLinks.map((item) => {
            const Icon = item.icon;
            const className =
              "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-white/85 transition hover:bg-white/10 hover:text-[#fccc00]";

            if (item.external) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  <Icon className="h-4 w-4 flex-none" />
                  <span>{item.label}</span>
                </a>
              );
            }

            return (
              <Link key={item.label} to={item.to} className={className}>
                <Icon className="h-4 w-4 flex-none" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-white/75">
        © 2026 Colegio Privado de Ciencias Isaac Newton. Todos los derechos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
