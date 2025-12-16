import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Niveles from './pages/Niveles';
import Comunidad from './pages/Comunidad';
import Campus from './pages/Campus';
import Admision from './pages/Admision';
import Contacto from './pages/Contacto';
import NivelPrimaria from './components/ui/NivelPrimaria';
import NivelSecundaria from './components/ui/NivelSecundaria';
import Directivos from './components/ui/Directivos';
import NoticiasPage from './components/ui/NoticiasPage';
import NoticiaDetalle from './components/ui/NoticiaDetalle';
import Docentes from './components/ui/Docentes';
import Alumnos from './components/ui/Alumnos';
import CampusBanos from './components/ui/CampusBaños';
import CampusCajamarca from './components/ui/CampusCajamarca';
import VisitaGuiada from './components/ui/VisitaGuiada';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/niveles" element={<Niveles />} />
            <Route path="/comunidad" element={<Comunidad />} />
            <Route path="/campus" element={<Campus />} />
            <Route path="/admision" element={<Admision />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/nivel/primaria" element={<NivelPrimaria />} />
            <Route path="/nivel/secundaria" element={<NivelSecundaria />} />
            <Route path='/comunidad/publicaciones' element={<NoticiasPage />} />
            <Route path="/comunidad/:slug" element={<NoticiaDetalle />} />
            <Route path='/comunidad/directivos' element={<Directivos />} />
            <Route path='/comunidad/docentes' element={<Docentes/>} />
            <Route path='/comunidad/alumnos' element={<Alumnos/>} />
            <Route path='/campus/banos' element={<CampusBanos/>} />
            <Route path='/campus/cajamarca' element={<CampusCajamarca/>} />
            <Route path='/agenda-visita' element={<VisitaGuiada/>} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;

