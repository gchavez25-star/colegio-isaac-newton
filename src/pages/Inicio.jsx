import { lazy, Suspense } from "react";
import SEO from "@/components/SEO";
import HeroSlider from "../components/ui/HeroSlider";
import AccesosRapidos from "../components/ui/AccesosRapidos";
import WelcomeNewton from "@/components/ui/WelcomeNewton";

const Metrics = lazy(() => import("@/components/ui/Metrics"));
const PropuestaEducativa = lazy(() => import("@/components/ui/PropuestaEducativa"));
const Campus = lazy(() => import("../components/ui/Campus"));
const Talleres = lazy(() => import("../components/ui/Talleres"));
const EspaciosAprendizaje = lazy(() => import("@/components/ui/EspaciosAprendizaje"));
const PartnersGaleria = lazy(() => import("@/components/ui/PartnersGaleria"));
const CtaAdmision = lazy(() => import("@/components/ui/CtaAdmision"));

const Inicio = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Colegio Isaac Newton Cajamarca | Primaria y Secundaria"
        description="Colegio privado en Cajamarca y Los Baños del Inca con formación integral, ciencia, valores y acompañamiento para primaria y secundaria."
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

        <Suspense fallback={null}>
          <Metrics />

          <PropuestaEducativa />

          <Campus />

          <Talleres />
        </Suspense>
      </div>
      <Suspense fallback={null}>
        <EspaciosAprendizaje />
        <PartnersGaleria />
        <CtaAdmision />
      </Suspense>
    </div>
  );
};

export default Inicio;
