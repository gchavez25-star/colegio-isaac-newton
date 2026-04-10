import SEO from '@/components/SEO';
import NoticiasPage from '@/components/ui/NoticiasPage';
import Directivos from '@/components/ui/Directivos';
import Docentes from '@/components/ui/Docentes';

const Comunidad = () => {
  
  return (
    <div className="min-h-screen">
      <SEO
        title="Comunidad Educativa | Colegio Isaac Newton"
        description="Conoce la vida escolar del Colegio Isaac Newton: noticias, docentes, directivos y experiencias que fortalecen nuestra comunidad educativa."
        canonicalPath="/comunidad"
        image="/Comunidad/Publicaciones/Inicio/Inicio 1.jpg"
      />

      {/* Noticias */}
      <NoticiasPage />
      
      {/* Directivos */}
      <Directivos />

       {/* Docentes */}
      <Docentes />          

     {/* Alumnos */}
      {/*<Alumnos />*/}               
                  
  </div>   
  );
};

export default Comunidad;

