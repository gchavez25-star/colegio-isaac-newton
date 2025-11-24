import "swiper/css";
import "swiper/css/effect-fade";
import HeroSlider from '../components/ui/HeroSlider';
import AccesosRapidos from '../components/ui/AccesosRapidos';
import Talleres from "../components/ui/Talleres";
import PropuestaEducativa from "@/components/ui/PropuestaEducativa";  
import EspaciosAprendizaje from "@/components/ui/EspaciosAprendizaje";
import Campus from "../components/ui/Campus";
import PartnersGaleria from "@/components/ui/PartnersGaleria";
import CtaAdmision from "@/components/ui/CtaAdmision";

const Inicio = () => {
    return (
    <div className="min-h-screen ">

      {/* Nuevo Hero Slider */}
      <HeroSlider />

      {/* Accesos Rápidos */}
      <AccesosRapidos />

      {/* Propuesta Pedagógica */}
      <PropuestaEducativa/>

      {/* Espacios de Aprendizaje*/}
      <EspaciosAprendizaje/> 

      {/* Nuestros Campus */}
      <Campus/>

      {/* Talleres Extracurriculares */}
      <Talleres />
    
      {/* Partners Universitarios */}
      <PartnersGaleria/>

      {/* Call to Action */}
      <CtaAdmision/>

    </div>
  );
};
export default Inicio;

