import { useSearchParams } from "react-router-dom";
import SEO from "@/components/SEO";
import MensajeDirector from "@/components/ui/MensajeDirector";
import History from "@/components/ui/History";
import PrincipiosValores from "@/components/ui/PrincipiosValores";
import EntePromotorCOSEM from "@/components/ui/Cosem";
import { useEffect } from "react";

const Nosotros = () => {
  const [searchParams] = useSearchParams();
  const section = searchParams.get("section"); // historia, quienes, valores, etc.

  // Scroll suave a la sección cuando section exista
  useEffect(() => {
    if (section) {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [section]);

  return (
    <div className="min-h-screen">
      <SEO
        title="Nosotros | Colegio Isaac Newton"
        description="Conoce la misión, visión, principios y propuesta institucional del Colegio Isaac Newton, una comunidad educativa enfocada en ciencia, valores y formación integral."
        canonicalPath="/nosotros"
        image="/Nosotros/Director.optimized.webp"
      />

      {/* ⭐ SI NO hay ?section → mostrar TODA la página */}
      {!section && (
        <>
          <section id="quienes">
            <MensajeDirector />
          </section>

              {/* HISTORIA OCULTA */}
        {/*
        <section id="historia">
          <History />
        </section>
        */}
          <section id="valores">
            <PrincipiosValores />
          </section>

          <section id="ente">
            <EntePromotorCOSEM />
          </section>
        </>
      )}

      {/* ⭐ SI HAY ?section=historia → solo mostrar esa sección */}
      {section === "quienes" && (
        <section id="quienes">
          <MensajeDirector />
        </section>
      )}

       {/*
    {section === "historia" && (
      <section id="historia">
        <History />
      </section>
    )}
    */}

      {section === "valores" && (
        <section id="valores">
          <PrincipiosValores />
        </section>
      )}

      {section === "ente" && (
        <section id="ente">
          <EntePromotorCOSEM />
        </section>
      )}

    </div>
  );
};

export default Nosotros;
