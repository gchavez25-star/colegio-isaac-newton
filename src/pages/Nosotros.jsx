import { motion } from 'framer-motion';
import { Target, Eye, Heart, Lightbulb, Users2, Award } from 'lucide-react';
import { useState } from 'react';
import HeroNewton from '@/components/ui/HeroNewton';
import MensajeDirector from '@/components/ui/MensajeDirector';
import History from '@/components/ui/History';
import PrincipiosValores from '@/components/ui/PrincipiosValores';

const Nosotros = () => {
  const [selectedYear, setSelectedYear] = useState(0);

    const valores = [
    {
      icono: <Heart size={48} />,
      titulo: 'Integridad',
      descripcion: 'Actuamos con honestidad, transparencia y coherencia en todas nuestras acciones educativas.'
    },
    {
      icono: <Lightbulb size={48} />,
      titulo: 'Excelencia',
      descripcion: 'Buscamos constantemente la mejora continua en todos los aspectos de nuestra labor educativa.'
    },
    {
      icono: <Users2 size={48} />,
      titulo: 'Respeto',
      descripcion: 'Valoramos la diversidad y promovemos un ambiente de respeto mutuo y tolerancia.'
    }
  ];

  const metodologia = [
    {
      titulo: 'Aprendizaje Basado en Proyectos',
      descripcion: 'Los estudiantes desarrollan proyectos reales que integran múltiples disciplinas y resuelven problemas concretos.'
    },
    {
      titulo: 'Método Científico Aplicado',
      descripcion: 'Enseñamos a observar, formular hipótesis, experimentar y concluir en todas las áreas del conocimiento.'
    },
    {
      titulo: 'Educación STEAM',
      descripcion: 'Integramos Ciencia, Tecnología, Ingeniería, Arte y Matemáticas en experiencias de aprendizaje significativas.'
    },
    {
      titulo: 'Pensamiento Crítico',
      descripcion: 'Fomentamos el análisis, la reflexión y el cuestionamiento constructivo en nuestros estudiantes.'
    }
  ];

  const logros = [
    { numero: '28+', texto: 'Años de experiencia' },
    { numero: '2000+', texto: 'Egresados exitosos' },
    { numero: '85%', texto: 'Ingreso a universidades top' },
    { numero: '50+', texto: 'Docentes especializados' }
  ];

  return (
    <div className="min-h-screen">
        
    {/* Hero Section */}
      <HeroNewton />
  
    {/* Quienes Somos */}
    <section id="quienes">
      <MensajeDirector />
    </section>
  
    {/* Historia */}
    <section id="historia">
      <History/>
    </section>
     
    {/* Valores */}
    <section>
      <PrincipiosValores/>
    </section>
      

      {/* Metodología */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-anton text-4xl md:text-5xl text-azul-oscuro mb-4">
              Metodología Científica Innovadora
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Implementamos estrategias pedagógicas de vanguardia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {metodologia.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-verde-azulado hover:shadow-2xl transition-all"
              >
                <h3 className="font-anton text-xl text-azul-oscuro mb-3">
                  {item.titulo}
                </h3>
                <p className="text-gray-600">
                  {item.descripcion}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;

