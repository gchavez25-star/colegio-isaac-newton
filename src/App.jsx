import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import WhatsAppButton from './components/WhatsAppButton';
import Inicio from './pages/Inicio';
import './App.css';

const Footer = lazy(() => import('./components/Footer'));
const Nosotros = lazy(() => import('./pages/Nosotros'));
const Niveles = lazy(() => import('./pages/Niveles'));
const Comunidad = lazy(() => import('./pages/Comunidad'));
const Campus = lazy(() => import('./pages/Campus'));
const Admision = lazy(() => import('./pages/Admision'));
const Contacto = lazy(() => import('./pages/Contacto'));
const NivelPrimaria = lazy(() => import('./components/ui/NivelPrimaria'));
const NivelSecundaria = lazy(() => import('./components/ui/NivelSecundaria'));
const Directivos = lazy(() => import('./components/ui/Directivos'));
const NoticiasPage = lazy(() => import('./components/ui/NoticiasPage'));
const NoticiaDetalle = lazy(() => import('./components/ui/NoticiaDetalle'));
const Docentes = lazy(() => import('./components/ui/Docentes'));
const Alumnos = lazy(() => import('./components/ui/Alumnos'));
const CampusBanos = lazy(() => import('./components/ui/CampusBaños'));
const CampusCajamarca = lazy(() => import('./components/ui/CampusCajamarca'));
const VisitaGuiada = lazy(() => import('./components/ui/VisitaGuiada'));
const Servicios = lazy(() => import('./components/ui/Servicios'));
const VacantesCategorias = lazy(() => import('@/pages/VacantesCategorias'));
const VacantesListado = lazy(() => import('@/pages/VacantesListado'));
const Postular = lazy(() => import('@/pages/Postular'));
const TerminosYCondiciones = lazy(() => import('./components/ui/TerminosYCondiciones'));

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={null}>
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
              <Route path="/comunidad/publicaciones" element={<NoticiasPage />} />
              <Route path="/comunidad/:slug" element={<NoticiaDetalle />} />
              <Route path="/comunidad/directivos" element={<Directivos />} />
              <Route path="/comunidad/docentes" element={<Docentes />} />
              <Route path="/comunidad/alumnos" element={<Alumnos />} />
              <Route path="/campus/banos" element={<CampusBanos />} />
              <Route path="/campus/cajamarca" element={<CampusCajamarca />} />
              <Route path="/agenda-visita" element={<VisitaGuiada />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/vacantes" element={<VacantesCategorias />} />
              <Route path="/vacantes/:tipo" element={<VacantesListado />} />
              <Route path="/postular/:id" element={<Postular />} />
              <Route path="/terminos" element={<TerminosYCondiciones />} />
            </Routes>
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
