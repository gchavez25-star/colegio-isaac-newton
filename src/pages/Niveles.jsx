import NivelPrimaria from "@/components/ui/NivelPrimaria";
import NivelSecundaria from "@/components/ui/NivelSecundaria";
import SEO from "@/components/SEO";

const Niveles = () => {
    return (
    <div className="min-h-screen relative overflow-hidden">
      <SEO
        title="Niveles Educativos | Colegio Isaac Newton"
        description="Explora nuestros niveles educativos de primaria y secundaria, con enfoque integral, acompañamiento cercano y preparación académica de alto nivel."
        canonicalPath="/niveles"
        image="/Niveles/Secundaria/Secundaria.jpg"
      />
      {/* Primaria*/}
      <NivelPrimaria/>

      {/* Secundaria */}
      <NivelSecundaria/>

      {/* ================= CTA INSTITUCIONAL ================= */}
      <section className="py-24 bg-[#f8fafc] text-[#013055]">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          
          <h2 className="font-anton text-4xl md:text-5xl mb-6 leading-tight">
            Conozca nuestros niveles educativos
          </h2>

          <p className="text-lg md:text-xl text-[#013055]/80 mb-10">
            Agende una visita guiada o descargue nuestro brochure institucional y
            conozca nuestra propuesta educativa integral.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            {/* CTA Principal – Servicio de Agendamiento */}
            <a
              href="/agenda-visita"
              className="inline-flex items-center justify-center
                        bg-amarillo-dorado text-azul-oscuro
                        px-10 py-4 rounded-xl font-semibold text-lg
                        shadow-md hover:shadow-lg hover:opacity-95
                        transition-all focus:outline-none focus:ring-2
                        focus:ring-amarillo-dorado"
            >
              Agendar visita
            </a>

            {/* CTA Secundario – Brochure PDF */}
            <a
              href="/Docs/Brochure 2026 Newton.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center
                        bg-white border border-[#013055]/20
                        text-azul-oscuro px-10 py-4 rounded-xl
                        font-semibold text-lg
                        hover:bg-[#013055]/5 transition-all
                        focus:outline-none focus:ring-2
                        focus:ring-[#013055]"
            >
              Descargar brochure
            </a>

          </div>
        </div>
      </section>



    </div>
  );
};

export default Niveles;
