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
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;

