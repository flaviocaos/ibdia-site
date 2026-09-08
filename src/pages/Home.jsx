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
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-to-br from-[#073B67] via-[#075A78] to-[#07899A]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-4 py-1 rounded-full text-xs font-bold text-cyan-100 backdrop-blur uppercase tracking-widest">
              <span className="w-2 h-2 bg-[#07899A] rounded-full animate-pulse"></span>
              <span>Inovação, Ciência e Impacto</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight">
              Transformando dados em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 to-white">
                inteligência
              </span>{' '}
              para o futuro.
            </h1>

            <p className="text-xl text-slate-100 leading-relaxed max-w-xl">
              O IBDIA é uma associação científica e tecnológica sem fins lucrativos
              dedicada a pesquisa aplicada, tecnologia e formação avançada em
              Inteligência Artificial e Ciência de Dados, com impacto real para a
              sociedade brasileira.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/sobre"
                className="px-8 py-4 bg-white text-[#073B67] font-bold rounded-2xl shadow-xl hover:bg-slate-100 transition-all hover:-translate-y-1 flex items-center justify-center group"
              >
                Conheça o Instituto
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/participe"
                className="px-8 py-4 bg-white/10 text-white border border-white/25 font-bold rounded-2xl shadow-sm hover:bg-white/15 backdrop-blur transition-all text-center"
              >
                Participe do IBDIA
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
                <div className="p-3 bg-[#07899A] rounded-xl text-white">
                  <Database size={24} />
                </div>

                <div>
                  <p className="text-2xl font-bold text-slate-900">12</p>
                  <p className="text-xs font-bold text-slate-500 uppercase">
                    Núcleos de Pesquisa
                  </p>
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
