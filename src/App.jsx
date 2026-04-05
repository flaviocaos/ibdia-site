import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronRight, Brain, Globe, BookOpen, Users, ShieldCheck, 
  Cpu, Building2, Leaf, ShieldAlert, Laptop, Activity, Star, 
  Mail, MapPin, Github, Linkedin, ExternalLink, Download, 
  CheckCircle2, Lightbulb, BarChart3, Database, Target, Eye, Heart
} from 'lucide-react';

// --- COMPONENTES DE UI AUXILIARES ---

const SectionHeader = ({ title, subtitle, centered = false }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <div className={`w-12 h-1 bg-[#2EC4B6] mb-4 ${centered ? 'mx-auto' : ''}`}></div>
    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">{title}</h2>
    {subtitle && <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mx-auto">{subtitle}</p>}
  </div>
);

const NucleoCard = ({ icon: IconComponent, title, description, applications = [] }) => (
  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
    <div className="w-14 h-14 bg-slate-50 text-[#0D3B66] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0D3B66] group-hover:text-white transition-colors">
      <IconComponent size={28} />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed mb-6">{description}</p>
    {applications.length > 0 && (
      <div className="pt-4 border-t border-slate-100">
        <p className="text-xs font-bold text-[#2EC4B6] uppercase tracking-wider mb-2">Aplicações</p>
        <ul className="text-xs text-slate-500 space-y-1">
          {applications.map((app, i) => <li key={i}>• {app}</li>)}
        </ul>
      </div>
    )}
  </div>
);

// --- PÁGINAS ---

const HomePage = ({ setPath }) => (
  <div className="animate-in fade-in duration-700">
    {/* Hero Section */}
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
            O IBDIA é um centro de excelência em pesquisa e inovação focado em criar soluções éticas de IA que geram valor real para a sociedade brasileira.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => setPath('sobre')}
              className="px-8 py-4 bg-[#0D3B66] text-white font-bold rounded-2xl shadow-xl hover:bg-[#118AB2] transition-all hover:-translate-y-1 flex items-center justify-center group"
            >
              Conheça o Instituto
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setPath('contato')}
              className="px-8 py-4 bg-white text-[#0D3B66] border-2 border-slate-100 font-bold rounded-2xl shadow-sm hover:border-[#2EC4B6] transition-all"
            >
              Seja Parceiro
            </button>
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

const Navbar = ({ currentPath, setPath }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Sobre', id: 'sobre' },
    { name: 'Núcleos', id: 'nucleos' },
    { name: 'Projetos', id: 'projetos' },
    { name: 'Contato', id: 'contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setPath('home')}>
          <div className="w-10 h-10 bg-gradient-to-br from-[#0D3B66] to-[#2EC4B6] rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <Brain size={22} />
          </div>
          <div>
            <span className="text-xl font-black tracking-tighter text-slate-900">IBDIA</span>
          </div>
        </div>
        
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map(link => (
            <button 
              key={link.id} 
              onClick={() => { setPath(link.id); window.scrollTo(0,0); }}
              className={`text-sm font-bold transition-all hover:text-[#2EC4B6] ${currentPath === link.id ? 'text-[#2EC4B6]' : 'text-slate-600'}`}
            >
              {link.name}
            </button>
          ))}
          <button className="bg-[#0D3B66] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-lg hover:bg-slate-800 transition-all active:scale-95">
            Seja Parceiro
          </button>
        </div>
      </div>
    </nav>
  );
};

export default function App() {
  const [path, setPath] = useState('home');

  const renderContent = () => {
    switch (path) {
      case 'home': return <HomePage setPath={setPath} />;
      case 'sobre': return (
        <div className="pt-32 pb-24 container mx-auto px-6 animate-in slide-in-from-bottom-4 duration-500">
          <SectionHeader 
            title="O Instituto" 
            subtitle="Uma associação científica sem fins lucrativos dedicada à soberania tecnológica do Brasil através da Inteligência Artificial."
          />
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Sediado em <strong>Urubici, Santa Catarina</strong>, o IBDIA nasce como um hub de inovação que conecta pesquisadores de elite a problemas reais da indústria e do governo.
              </p>
              <p>
                A nossa missão é garantir que o Brasil não seja apenas um consumidor de tecnologia, mas um protagonista global na criação de sistemas inteligentes éticos e transparentes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                <div className="text-center p-6 bg-slate-50 rounded-2xl">
                  <Target className="mx-auto mb-3 text-[#0D3B66]" />
                  <h4 className="font-bold text-slate-900">Missão</h4>
                  <p className="text-xs text-slate-500 mt-2">Impacto social através da ciência.</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-2xl">
                  <Eye className="mx-auto mb-3 text-[#0D3B66]" />
                  <h4 className="font-bold text-slate-900">Visão</h4>
                  <p className="text-xs text-slate-500 mt-2">Liderança em IA no Hemisfério Sul.</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-2xl">
                  <Heart className="mx-auto mb-3 text-[#0D3B66]" />
                  <h4 className="font-bold text-slate-900">Valores</h4>
                  <p className="text-xs text-slate-500 mt-2">Ética, rigor e transparência.</p>
                </div>
              </div>
            </div>
            <div className="bg-[#0D3B66] rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#2EC4B6]/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
               <h3 className="text-3xl font-bold mb-6">Diferenciais</h3>
               <ul className="space-y-6">
                 {[
                   { t: "Independência", d: "Pesquisa científica sem amarras comerciais." },
                   { t: "Ecossistema", d: "Integração direta com startups e universidades." },
                   { t: "Soberania", d: "Desenvolvimento de modelos de linguagem e dados nacionais." }
                 ].map((item, i) => (
                   <li key={i} className="flex space-x-4">
                     <CheckCircle2 className="text-[#2EC4B6] flex-shrink-0" />
                     <div>
                       <h5 className="font-bold">{item.t}</h5>
                       <p className="text-sm text-blue-100/70">{item.d}</p>
                     </div>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      );
      case 'nucleos': return (
        <div className="pt-32 pb-24 container mx-auto px-6 animate-in slide-in-from-bottom-4 duration-500">
          <SectionHeader 
            title="Núcleos de Atuação" 
            subtitle="Estrutura técnica dividida em doze verticais de excelência para atender a todos os sectores da economia."
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <NucleoCard icon={Brain} title="IA e Ciência de Dados" description="Modelagem estatística profunda e aprendizagem automática." applications={["Deep Learning", "Processamento de Linguagem Natural"]} />
            <NucleoCard icon={Globe} title="Geotecnologias" description="Monitorização e análise de dados geospaciais via satélite." applications={["Monitorização de desmatamento", "Agricultura de precisão"]} />
            <NucleoCard icon={BookOpen} title="Educação" description="Ferramentas de ensino adaptativo e formação técnica de ponta." applications={["Plataformas EdTech", "Treino corporativo"]} />
            <NucleoCard icon={ShieldCheck} title="Ética e Governança" description="Auditoria de algoritmos e conformidade com a proteção de dados." applications={["IA Responsável", "Auditoria LGPD"]} />
            <NucleoCard icon={Cpu} title="Engenharia e Infra" description="Sistemas distribuídos e computação de alta performance." applications={["Data Lakes", "MLOps"]} />
            <NucleoCard icon={Activity} title="Saúde" description="Diagnóstico assistido e bioinformática computacional." applications={["Análise de imagens médicas", "Medicina preditiva"]} />
            <NucleoCard icon={Building2} title="Negócios e Indústria" description="Otimização de processos e indústria 4.0." applications={["Manutenção preditiva", "Supply Chain"]} />
            <NucleoCard icon={Leaf} title="Meio Ambiente" description="Simulações climáticas e transição energética." applications={["Créditos de Carbono", "Previsão Climática"]} />
            <NucleoCard icon={ShieldAlert} title="Defesa e Inteligência" description="Segurança cibernética e análise estratégica de sinais." applications={["Cibersegurança", "Vigilância Estratégica"]} />
            <NucleoCard icon={Laptop} title="Cidades Inteligentes" description="Integração de IoT para gestão urbana eficiente." applications={["Tráfego Inteligente", "Gestão de Resíduos"]} />
            <NucleoCard icon={Star} title="Astroinformática" description="Big Data aplicado à astronomia e exploração espacial." applications={["Identificação de astros", "Sinais espaciais"]} />
            <NucleoCard icon={Users} title="Inovação e Parcerias" description="Hub de conexão entre academia e mercado." applications={["Transferência tecnológica", "Incubação"]} />
          </div>
        </div>
      );
      case 'projetos': return (
        <div className="pt-32 pb-24 container mx-auto px-6 animate-in slide-in-from-bottom-4 duration-500 text-center">
          <SectionHeader title="Projetos de Impacto" subtitle="Soluções reais que já estão em operação em diversos sectores." />
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            {[
              { t: "GeoIA Amazónia", d: "Sistema de monitorização em tempo real de focos de calor usando visão computacional.", c: "Meio Ambiente" },
              { t: "EducaIA", d: "Tutor inteligente personalizado para redes públicas de ensino.", c: "Educação" }
            ].map((p, i) => (
              <div key={i} className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all text-left">
                <div className="h-48 bg-slate-200"></div>
                <div className="p-8">
                  <span className="text-xs font-bold text-[#2EC4B6] uppercase tracking-widest">{p.c}</span>
                  <h4 className="text-2xl font-bold mt-2 mb-4">{p.t}</h4>
                  <p className="text-slate-600 mb-6">{p.d}</p>
                  <button className="text-[#0D3B66] font-bold flex items-center hover:translate-x-1 transition-transform">
                    Ver Case Study <ChevronRight size={18} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
      case 'contato': return (
        <div className="pt-32 pb-24 container mx-auto px-6 animate-in slide-in-from-bottom-4 duration-500">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader title="Vamos conversar?" subtitle="Estamos abertos a parcerias de investigação, projetos corporativos e visitas institucionais." />
              <div className="space-y-8 mt-10 text-slate-600">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-50 text-[#0D3B66] rounded-xl"><MapPin /></div>
                  <p>Urubici, Santa Catarina - Brasil</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-50 text-[#0D3B66] rounded-xl"><Mail /></div>
                  <p>contato@ibdia.org.br</p>
                </div>
                <div className="flex space-x-4 pt-4">
                  <button className="p-3 bg-slate-100 rounded-full hover:bg-[#0D3B66] hover:text-white transition-all"><Linkedin /></button>
                  <button className="p-3 bg-slate-100 rounded-full hover:bg-[#0D3B66] hover:text-white transition-all"><Github /></button>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Nome" className="w-full px-5 py-3.5 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[#2EC4B6] outline-none" />
                  <input type="email" placeholder="E-mail" className="w-full px-5 py-3.5 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[#2EC4B6] outline-none" />
                </div>
                <select className="w-full px-5 py-3.5 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[#2EC4B6] outline-none text-slate-500">
                  <option>Parceria Corporativa</option>
                  <option>Investigação Académica</option>
                  <option>Imprensa</option>
                </select>
                <textarea placeholder="Mensagem" className="w-full px-5 py-3.5 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[#2EC4B6] outline-none h-32"></textarea>
                <button className="w-full py-4 bg-[#0D3B66] text-white font-bold rounded-xl shadow-lg hover:bg-slate-800 transition-all">Enviar Mensagem</button>
              </form>
            </div>
          </div>
        </div>
      );
      default: return <HomePage setPath={setPath} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPath={path} setPath={setPath} />
      <main>
        {renderContent()}
      </main>
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
              <button onClick={() => setPath('sobre')} className="block text-slate-400 hover:text-white transition-colors text-sm">Sobre</button>
              <button onClick={() => setPath('nucleos')} className="block text-slate-400 hover:text-white transition-colors text-sm">Núcleos</button>
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
          © 2024 Instituto Brasileiro de Dados e IA. Urubici, SC - Brasil.
        </div>
      </footer>
    </div>
  );
}