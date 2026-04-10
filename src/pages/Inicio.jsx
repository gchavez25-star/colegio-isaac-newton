import "swiper/css";
import "swiper/css/effect-fade";
import SEO from "@/components/SEO";
import HeroSlider from "../components/ui/HeroSlider";
import AccesosRapidos from "../components/ui/AccesosRapidos";
import Talleres from "../components/ui/Talleres";
import PropuestaEducativa from "@/components/ui/PropuestaEducativa";
import EspaciosAprendizaje from "@/components/ui/EspaciosAprendizaje";
import Campus from "../components/ui/Campus";
import PartnersGaleria from "@/components/ui/PartnersGaleria";
import CtaAdmision from "@/components/ui/CtaAdmision";
import WelcomeNewton from "@/components/ui/WelcomeNewton";
import Metrics from "@/components/ui/Metrics";

const Inicio = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Colegio Isaac Newton | Educación de excelencia en Cajamarca"
        description="Descubre el Colegio Privado de Ciencias Isaac Newton: propuesta educativa integral, campus en Cajamarca y Los Baños del Inca, admisión abierta y formación de líderes."
        canonicalPath="/"
        image="/Inicio/Hero/Alumno.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Colegio Privado de Ciencias Isaac Newton",
          url: typeof window !== "undefined" ? window.location.origin : undefined,
          inLanguage: "es-PE",
        }}
      />

      {/* HERO FULL WIDTH */}
      <HeroSlider />

      {/* CONTENIDO CENTRADO */}
      <div className="max-w-7xl mx-auto px-6">
        <AccesosRapidos />

        <WelcomeNewton />

        <Metrics />

        <PropuestaEducativa />

        <Campus />

        <Talleres />
      </div>
      <EspaciosAprendizaje />
      <PartnersGaleria />
      <CtaAdmision />
    </div>
  );
};

export default Inicio;
