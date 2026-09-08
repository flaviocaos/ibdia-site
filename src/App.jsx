import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Sobre from './pages/Sobre.jsx';
import Nucleos from './pages/Nucleos.jsx';
import ProgramasProjetos from './pages/ProgramasProjetos.jsx';
import Pesquisa from './pages/Pesquisa.jsx';
import Institucional from './pages/Institucional.jsx';
import Contato from './pages/Contato.jsx';
import Participe from './pages/Participe.jsx';
import ProponhaProjeto from './pages/ProponhaProjeto.jsx';
import RedeIBDIA from './pages/RedeIBDIA.jsx';
import ParceriaInstitucional from './pages/ParceriaInstitucional.jsx';
import BibliotecaInstitucional from './pages/BibliotecaInstitucional.jsx';

// Rola a página para o topo sempre que a rota muda
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/nucleos" element={<Nucleos />} />
            <Route path="/projetos-pd" element={<ProgramasProjetos />} />
            <Route path="/pesquisa" element={<Pesquisa />} />
            <Route path="/institucional" element={<Institucional />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/participe" element={<Participe />} />
            <Route path="/proponha-projeto" element={<ProponhaProjeto />} />
            <Route path="/rede-ibdia" element={<RedeIBDIA />} />
            <Route path="/parceria-institucional" element={<ParceriaInstitucional />} />
            <Route path="/biblioteca" element={<BibliotecaInstitucional />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
