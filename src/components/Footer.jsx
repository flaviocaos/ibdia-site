import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ChevronRight } from 'lucide-react';

const Footer = () => (
  <footer className="bg-slate-900 text-white py-20 mt-20">
    <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
      <div>
        <div className="flex items-center space-x-3 mb-6">
          <Brain className="text-[#2EC4B6]" />
          <span className="text-xl font-bold">IBDIA</span>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">
          Inovação científica e tecnológica com impacto social. O futuro da inteligência artificial começa aqui.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <h5 className="font-bold text-sm uppercase tracking-widest text-slate-500">Links</h5>
          <Link to="/sobre" className="block text-slate-400 hover:text-white transition-colors text-sm">Sobre</Link>
          <Link to="/nucleos" className="block text-slate-400 hover:text-white transition-colors text-sm">Núcleos</Link>
          <Link to="/projetos-pd" className="block text-slate-400 hover:text-white transition-colors text-sm">Projetos de P&D</Link>
          <Link to="/pesquisa" className="block text-slate-400 hover:text-white transition-colors text-sm">Pesquisa</Link>
        </div>
        <div className="space-y-4">
          <h5 className="font-bold text-sm uppercase tracking-widest text-slate-500">Legal</h5>
          <button className="block text-slate-400 hover:text-white transition-colors text-sm">Privacidade</button>
          <button className="block text-slate-400 hover:text-white transition-colors text-sm">Ética</button>
        </div>
      </div>
      <div>
        <h5 className="font-bold text-sm uppercase tracking-widest text-slate-500 mb-6">Newsletter</h5>
        <div className="flex space-x-2">
          <input type="email" placeholder="Seu e-mail" className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm w-full outline-none focus:ring-1 focus:ring-[#2EC4B6]" />
          <button className="bg-[#2EC4B6] px-4 py-2 rounded-lg hover:bg-white hover:text-[#0D3B66] transition-colors"><ChevronRight size={18} /></button>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-6 pt-12 mt-12 border-t border-slate-800 text-center text-xs text-slate-600">
      © 2026 Instituto Brasileiro de Dados e IA. Atuação remota - Brasil.
    </div>
  </footer>
);

export default Footer;
