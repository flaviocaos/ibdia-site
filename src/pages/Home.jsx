import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Database } from 'lucide-react';
import { usePageMeta } from '../components/UI.jsx';

const Home = () => {
  usePageMeta(
    null,
    'IBDIA - Instituto Brasileiro de Dados e Inteligência Artificial. Ciência, Inovação e Soberania Tecnológica.'
  );

  return (
    <div className="animate-in fade-in duration-700">
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 px-4 py-1 rounded-full text-xs font-bold text-[#0D3B66] uppercase tracking-widest">
              <span className="w-2 h-2 bg-[#2EC4B6] rounded-full animate-pulse"></span>
              <span>Inovação, Ciência e Impacto</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight">
              Transformando dados em <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D3B66] to-[#2EC4B6]">inteligência</span> para o futuro.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              O IBDIA é uma associação científica e tecnológica sem fins lucrativos dedicada a pesquisa aplicada, tecnologia e formação avançada em Inteligência Artificial e Ciência de Dados, com impacto real para a sociedade brasileira.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/sobre"
                className="px-8 py-4 bg-[#0D3B66] text-white font-bold rounded-2xl shadow-xl hover:bg-[#118AB2] transition-all hover:-translate-y-1 flex items-center justify-center group"
              >
                Conheça o Instituto
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contato"
                className="px-8 py-4 bg-white text-[#0D3B66] border-2 border-slate-100 font-bold rounded-2xl shadow-sm hover:border-[#2EC4B6] transition-all text-center"
              >
                Seja Parceiro
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="relative z-10 bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl rotate-2">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
                alt="Inteligência Artificial"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 z-20">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#2EC4B6] rounded-xl text-white">
                  <Database size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">12</p>
                  <p className="text-xs font-bold text-slate-500 uppercase">Núcleos de Pesquisa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
