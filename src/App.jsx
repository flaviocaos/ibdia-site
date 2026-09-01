import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronRight, Brain, Globe, BookOpen, Users, ShieldCheck, 
  Cpu, Building2, Leaf, ShieldAlert, Laptop, Activity, Star, 
  Mail, MapPin, Github, Linkedin, ExternalLink, Download, 
  CheckCircle2, Lightbulb, BarChart3, Database, Target, Eye, Heart,
  Rocket, Handshake, Landmark, Server, ScrollText, TrendingUp, Layers
} from 'lucide-react';
import {
  NUCLEOS, PROJETOS_PD, FRENTES, SETORES, VALORES, PUBLICACOES, EDUCACAO_FORMATOS,
  ECOSSISTEMA, VALOR_PARCEIROS, INTERNACIONALIZACAO, SUSTENTABILIDADE_FONTES,
  GOVERNANCA_ITENS, INFRA_ITENS, ESTRUTURA, FASES, INDICADORES,
} from './data.jsx';

const ICONS = {
  Brain, Globe, BookOpen, ShieldCheck, Cpu, Building2, Leaf, ShieldAlert,
  Laptop, Activity, Star, Users,
};

// --- COMPONENTES DE UI AUXILIARES ---

const SectionHeader = ({ title, subtitle, centered = false }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <div className={`w-12 h-1 bg-[#2EC4B6] mb-4 ${centered ? 'mx-auto' : ''}`}></div>
    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">{title}</h2>
    {subtitle && <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mx-auto">{subtitle}</p>}
  </div>
);

const SubHeader = ({ title, subtitle }) => (
  <div className="mb-8">
    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{title}</h3>
    {subtitle && <p className="text-slate-600 max-w-2xl">{subtitle}</p>}
  </div>
);

const NucleoCard = ({ icon, title, desc, linhas = [], entregaveis = [] }) => {
  const IconComponent = ICONS[icon] || Brain;
  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
      <div className="w-14 h-14 bg-slate-50 text-[#0D3B66] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0D3B66] group-hover:text-white transition-colors">
        <IconComponent size={28} />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-6">{desc}</p>
      {linhas.length > 0 && (
        <div className="pt-4 border-t border-slate-100">
          <p className="text-xs font-bold text-[#2EC4B6] uppercase tracking-wider mb-2">Linhas de pesquisa</p>
          <ul className="text-xs text-slate-500 space-y-1 mb-4">
            {linhas.map((item, i) => <li key={i}>• {item}</li>)}
          </ul>
        </div>
      )}
      {entregaveis.length > 0 && (
        <div className="pt-2">
          <p className="text-xs font-bold text-[#0D3B66] uppercase tracking-wider mb-2">Aplicações e entregáveis</p>
          <ul className="text-xs text-slate-500 space-y-1">
            {entregaveis.map((item, i) => <li key={i}>• {item}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
};

const Tag = ({ children }) => (
  <span className="inline-block bg-slate-50 border border-slate-100 text-slate-600 text-sm px-4 py-2 rounded-full">
    {children}
  </span>
);

const CheckList = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item, i) => (
      <li key={i} className="flex items-start space-x-3">
        <CheckCircle2 size={18} className="text-[#2EC4B6] flex-shrink-0 mt-0.5" />
        <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
      </li>
    ))}
  </ul>
);

const InfoCard = ({ icon: IconComponent, title, children }) => (
  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
    <div className="w-12 h-12 bg-blue-50 text-[#0D3B66] rounded-xl flex items-center justify-center mb-5">
      <IconComponent size={22} />
    </div>
    <h4 className="text-lg font-bold text-slate-900 mb-4">{title}</h4>
    {children}
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
            O IBDIA é uma associação científica e tecnológica sem fins lucrativos dedicada a pesquisa aplicada, tecnologia e formação avançada em Inteligência Artificial e Ciência de Dados, com impacto real para a sociedade brasileira.
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
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Sobre', id: 'sobre' },
    { name: 'Núcleos', id: 'nucleos' },
    { name: 'Projetos de P&D', id: 'produtos' },
    { name: 'Pesquisa', id: 'pesquisa' },
    { name: 'Institucional', id: 'institucional' },
    { name: 'Contato', id: 'contato' },
  ];

  const go = (id) => {
    setPath(id);
    setMobileOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`fixed w-full z-50 transition-[padding,box-shadow] duration-500 ${mobileOpen ? 'bg-white shadow-sm py-4' : scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => go('home')}>
          <div className="w-10 h-10 bg-gradient-to-br from-[#0D3B66] to-[#2EC4B6] rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <Brain size={22} />
          </div>
          <div>
            <span className="text-xl font-black tracking-tighter text-slate-900">IBDIA</span>
          </div>
        </div>
        
        <div className="hidden lg:flex space-x-7 items-center">
          {navLinks.map(link => (
            <button 
              key={link.id} 
              onClick={() => go(link.id)}
              className={`text-sm font-bold transition-all hover:text-[#2EC4B6] ${currentPath === link.id ? 'text-[#2EC4B6]' : 'text-slate-600'}`}
            >
              {link.name}
            </button>
          ))}
          <button onClick={() => go('contato')} className="bg-[#0D3B66] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-lg hover:bg-slate-800 transition-all active:scale-95">
            Seja Parceiro
          </button>
        </div>

        <button className="lg:hidden text-slate-900" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden container mx-auto px-6 pt-6 pb-2 flex flex-col space-y-4">
          {navLinks.map(link => (
            <button 
              key={link.id} 
              onClick={() => go(link.id)}
              className={`text-left text-base font-bold transition-all ${currentPath === link.id ? 'text-[#2EC4B6]' : 'text-slate-700'}`}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
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
            subtitle="Uma associação científica e tecnológica sem fins lucrativos dedicada à soberania tecnológica do Brasil através da Inteligência Artificial."
          />
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Com atuação <strong>100% remota e nacional</strong>, o IBDIA nasce como um hub de inovação multidisciplinar que conecta ciência, engenharia, dados e necessidades reais da sociedade — combinando produção científica, desenvolvimento experimental, inovação aberta, formação de profissionais, cooperação com universidades, empresas e governos, e transferência de tecnologia.
              </p>
              <p>
                O Instituto não se limita à prestação de serviços de tecnologia: pretende funcionar como um ambiente permanente de pesquisa, criação, experimentação e transformação de conhecimento em soluções aplicáveis, nas áreas de Inteligência Artificial, Machine Learning, Deep Learning, Ciência de Dados, Analytics, Business Intelligence, Geotecnologias e demais tecnologias emergentes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                <div className="text-center p-6 bg-slate-50 rounded-2xl">
                  <Target className="mx-auto mb-3 text-[#0D3B66]" />
                  <h4 className="font-bold text-slate-900">Missão</h4>
                  <p className="text-xs text-slate-500 mt-2">Pesquisar, desenvolver e democratizar tecnologias avançadas de IA e dados.</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-2xl">
                  <Eye className="mx-auto mb-3 text-[#0D3B66]" />
                  <h4 className="font-bold text-slate-900">Visão</h4>
                  <p className="text-xs text-slate-500 mt-2">Referência brasileira com presença internacional em pesquisa e formação em IA.</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-2xl">
                  <Heart className="mx-auto mb-3 text-[#0D3B66]" />
                  <h4 className="font-bold text-slate-900">Propósito</h4>
                  <p className="text-xs text-slate-500 mt-2">Impacto econômico, social, ambiental e científico através de dados e IA.</p>
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

          {/* Valores */}
          <div className="mb-20">
            <SubHeader title="Valores" subtitle="Os princípios que orientam toda a atuação do Instituto." />
            <div className="flex flex-wrap gap-3">
              {VALORES.map((v, i) => <Tag key={i}>{v}</Tag>)}
            </div>
          </div>

          {/* Modelo de Atuação */}
          <div className="mb-20">
            <SubHeader title="Modelo de Atuação" subtitle="Organizado em cinco frentes complementares." />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FRENTES.map((f, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <h5 className="font-bold text-slate-900 mb-2">{f.frente}</h5>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.atuacao}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Áreas Setoriais */}
          <div className="mb-20">
            <SubHeader title="Áreas Setoriais de Aplicação" subtitle="As tecnologias desenvolvidas nos núcleos são aplicadas transversalmente a diferentes setores." />
            <div className="flex flex-wrap gap-3">
              {SETORES.map((s, i) => <Tag key={i}>{s}</Tag>)}
            </div>
          </div>

          {/* Posicionamento */}
          <div className="bg-slate-50 rounded-[2.5rem] p-10 md:p-14 mb-8">
            <p className="text-xl md:text-2xl font-bold text-slate-900 leading-snug mb-4">
              O IBDIA deve ser percebido como um instituto de ciência e tecnologia orientado a dados e inteligência artificial — e não simplesmente como uma software house ou consultoria.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Seu diferencial está na integração entre pesquisa de fronteira, aplicações multissetoriais, desenvolvimento de tecnologia, educação, ética, cooperação e transferência de conhecimento. Essa combinação permite que um mesmo núcleo metodológico de IA seja aplicado a problemas tão diversos quanto saúde, mineração, infraestrutura, cidades, varejo, defesa, meio ambiente e astrofísica.
            </p>
          </div>
        </div>
      );

      case 'nucleos': return (
        <div className="pt-32 pb-24 container mx-auto px-6 animate-in slide-in-from-bottom-4 duration-500">
          <SectionHeader 
            title="Núcleos de Pesquisa e Desenvolvimento" 
            subtitle="Estrutura técnica dividida em doze verticais de excelência para atender a todos os setores da economia."
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {NUCLEOS.map((n, i) => (
              <NucleoCard key={i} icon={n.icon} title={n.title} desc={n.desc} linhas={n.linhas} entregaveis={n.entregaveis} />
            ))}
          </div>
        </div>
      );

      case 'produtos': return (
        <div className="pt-32 pb-24 container mx-auto px-6 animate-in slide-in-from-bottom-4 duration-500">
          <SectionHeader 
            title="Projetos de P&D" 
            subtitle="Pesquisa aplicada em estágios iniciais, conduzida pelos núcleos do IBDIA — ainda não são produtos comerciais."
            centered
          />

          <div className="bg-slate-50 rounded-[2.5rem] p-10 md:p-14 mb-16 max-w-4xl mx-auto text-center">
            <p className="text-slate-600 leading-relaxed">
              A frente de <strong>Geotecnologias e Inteligência Territorial</strong> do Instituto está estruturando a <strong>GeoAI Platform</strong>: um conjunto modular de projetos de pesquisa que combina agentes de linguagem natural, processamento geoespacial (GIS), visão computacional e modelos físicos para interpretar dados de satélite, radar, GNSS, topografia e geofísica. Os projetos abaixo estão em diferentes estágios — de especificação técnica a MVP — e resultados aplicáveis poderão futuramente ser licenciados ou transferidos para parceiros comerciais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJETOS_PD.map((p, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0D3B66] to-[#2EC4B6] rounded-xl flex items-center justify-center text-white">
                    <Layers size={22} />
                  </div>
                  <span className="text-xs font-bold text-[#0D3B66] bg-blue-50 px-3 py-1 rounded-full">{p.fase}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{p.nome}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{p.resumo}</p>
              </div>
            ))}
          </div>
        </div>
      );

      case 'pesquisa': return (
        <div className="pt-32 pb-24 container mx-auto px-6 animate-in slide-in-from-bottom-4 duration-500">
          <SectionHeader 
            title="Pesquisa, Publicações e Formação" 
            subtitle="Produção científica e educação como principais instrumentos de posicionamento do Instituto."
          />

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <InfoCard icon={ScrollText} title="Estratégia de Pesquisa e Publicações">
              <p className="text-sm text-slate-500 mb-5 leading-relaxed">
                Projetos próprios devem gerar papers, preprints, relatórios técnicos, white papers, datasets, benchmarks, modelos abertos e demonstrações tecnológicas — criando reputação, comprovando capacidade técnica e facilitando a aproximação com universidades, empresas, órgãos públicos e financiadores.
              </p>
              <CheckList items={PUBLICACOES} />
            </InfoCard>
            <InfoCard icon={BookOpen} title="Educação, Formação e Difusão do Conhecimento">
              <p className="text-sm text-slate-500 mb-5 leading-relaxed">
                A educação constitui uma frente permanente de impacto e sustentabilidade institucional.
              </p>
              <CheckList items={EDUCACAO_FORMATOS} />
            </InfoCard>
          </div>

          <div className="bg-slate-50 rounded-[2.5rem] p-10 md:p-14">
            <SubHeader title="Internacionalização" subtitle="A internacionalização começa por cooperação científica, projetos conjuntos, pesquisadores associados e acordos institucionais." />
            <div className="flex flex-wrap gap-3">
              {INTERNACIONALIZACAO.map((item, i) => <Tag key={i}>{item}</Tag>)}
            </div>
          </div>
        </div>
      );

      case 'institucional': return (
        <div className="pt-32 pb-24 container mx-auto px-6 animate-in slide-in-from-bottom-4 duration-500">
          <SectionHeader 
            title="Institucional" 
            subtitle="Parcerias, estrutura, governança e o caminho de implantação do Instituto."
          />

          {/* Parcerias */}
          <div className="mb-20">
            <SubHeader title="Parcerias e Ecossistema" subtitle="O IBDIA opera em rede, conectando-se aos principais grupos do ecossistema de ciência e inovação." />
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-blue-50 text-[#0D3B66] rounded-xl flex items-center justify-center mb-5">
                  <Handshake size={22} />
                </div>
                <h4 className="font-bold text-slate-900 mb-4">Relacionamento institucional</h4>
                <div className="flex flex-wrap gap-2">
                  {ECOSSISTEMA.map((e, i) => <Tag key={i}>{e}</Tag>)}
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-blue-50 text-[#0D3B66] rounded-xl flex items-center justify-center mb-5">
                  <TrendingUp size={22} />
                </div>
                <h4 className="font-bold text-slate-900 mb-4">Valor para empresas parceiras</h4>
                <CheckList items={VALOR_PARCEIROS} />
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mt-6 max-w-3xl">
              Contrapartidas, propriedade intelectual, exclusividade, publicação e uso de resultados são definidos caso a caso em contratos ou acordos de cooperação. Apoio financeiro ao Instituto não representa participação societária, já que o IBDIA é uma associação sem fins lucrativos.
            </p>
          </div>

          {/* Sustentabilidade */}
          <div className="mb-20">
            <SubHeader title="Modelo de Sustentabilidade Institucional" subtitle="Como associação sem fins lucrativos, o IBDIA pode gerar receitas e captar recursos desde que aplicados em seus objetivos institucionais." />
            <div className="flex flex-wrap gap-3">
              {SUSTENTABILIDADE_FONTES.map((s, i) => <Tag key={i}>{s}</Tag>)}
            </div>
          </div>

          {/* Estrutura Técnica */}
          <div className="mb-20">
            <SubHeader title="Estrutura Técnica e Administrativa" subtitle="Implantação progressiva, combinando equipe central de IA e dados com especialistas setoriais." />
            <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-500 uppercase text-xs tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Estrutura</th>
                    <th className="px-6 py-4">Perfil</th>
                    <th className="px-6 py-4">Referência</th>
                  </tr>
                </thead>
                <tbody>
                  {ESTRUTURA.map((row, i) => (
                    <tr key={i} className="border-t border-slate-100">
                      <td className="px-6 py-4 font-bold text-slate-900">{row.estrutura}</td>
                      <td className="px-6 py-4 text-slate-600">{row.perfil}</td>
                      <td className="px-6 py-4 text-slate-500">{row.ref}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Infra + Governança */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <InfoCard icon={Server} title="Infraestrutura Tecnológica">
              <CheckList items={INFRA_ITENS} />
            </InfoCard>
            <InfoCard icon={Landmark} title="Governança Científica, Ética e Propriedade Intelectual">
              <CheckList items={GOVERNANCA_ITENS} />
            </InfoCard>
          </div>

          {/* Estratégia de Implantação (roadmap sequencial) */}
          <div className="mb-20">
            <SubHeader title="Estratégia de Implantação" subtitle="Um caminho progressivo, em cinco fases, da autoridade científica à internacionalização." />
            <div className="space-y-4">
              {FASES.map((f, i) => (
                <div key={i} className="flex items-start space-x-5 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-[#0D3B66] text-white font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-1">{f.etapa}</h5>
                    <p className="text-sm text-slate-500 leading-relaxed">{f.objetivo}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores */}
          <div className="bg-[#0D3B66] rounded-[2.5rem] p-10 md:p-14 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Indicadores Estratégicos</h3>
            <p className="text-blue-100/70 mb-8 max-w-2xl">Métricas usadas para acompanhar o crescimento e o impacto do Instituto.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {INDICADORES.map((ind, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <BarChart3 size={18} className="text-[#2EC4B6] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-blue-50">{ind}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

      case 'projetos': return (
        <div className="pt-32 pb-24 container mx-auto px-6 animate-in slide-in-from-bottom-4 duration-500 text-center">
          <SectionHeader title="Projetos de Impacto" subtitle="Soluções reais que já estão em operação em diversos setores." />
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
                  <p>Atuação remota - Brasil</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-50 text-[#0D3B66] rounded-xl"><Mail /></div>
                  <a href="mailto:ibdiabrasil@gmail.com" className="hover:text-[#0D3B66] transition-colors">ibdiabrasil@gmail.com</a>
                </div>
                <div className="flex space-x-4 pt-4">
                  <button className="p-3 bg-slate-100 rounded-full hover:bg-[#0D3B66] hover:text-white transition-all"><Linkedin /></button>
                  <a href="https://github.com/flaviocaos" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 rounded-full hover:bg-[#0D3B66] hover:text-white transition-all"><Github /></a>
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
              <button onClick={() => setPath('produtos')} className="block text-slate-400 hover:text-white transition-colors text-sm">Projetos de P&D</button>
              <button onClick={() => setPath('pesquisa')} className="block text-slate-400 hover:text-white transition-colors text-sm">Pesquisa</button>
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
    </div>
  );
}
