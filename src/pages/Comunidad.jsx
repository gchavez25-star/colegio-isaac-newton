import { motion } from 'framer-motion';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, User, Award, BookOpen } from 'lucide-react';
import { publicaciones, categorias } from '../data/publicaciones';
import NoticiasPage from '@/components/ui/NoticiasPage';
import Directivos from '@/components/ui/Directivos';
import Docentes from '@/components/ui/Docentes';
import Alumnos from '@/components/ui/Alumnos';

const Comunidad = () => {
  
  return (
    <div className="min-h-screen">

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

