import React, { useMemo, useState } from 'react';
import { BookOpen, Download, ExternalLink, FileText, Search, ShieldCheck } from 'lucide-react';
import { PageHero, usePageMeta } from '../components/UI.jsx';

const documentos = [
  {
    codigo: '01',
    titulo: 'Plano Estratégico de PD&I 2026–2030',
    descricao: 'Direção estratégica do Instituto para pesquisa, desenvolvimento, inovação, maturidade tecnológica e impacto no ciclo 2026–2030.',
    categoria: 'Estratégia e PD&I',
    status: 'Documento Institucional',
    arquivo: '/documentos/plano-estrategico-pdi-2026-2030.pdf',
  },
  {
    codigo: '02',
    titulo: 'Roadmap Tecnológico e de Produtos 2026–2030',
    descricao: 'Sequenciamento de tecnologias, produtos, estágios de maturidade e prioridades do portfólio de PD&I.',
    categoria: 'Estratégia e PD&I',
    status: 'Documento Institucional',
    arquivo: '/documentos/roadmap-tecnologico-produtos-2026-2030.pdf',
  },
  {
    codigo: '03',
    titulo: 'Manual dos 12 Núcleos de Pesquisa',
    descricao: 'Estrutura científica permanente do IBDIA, incluindo N11 Agronegócio e Agricultura Digital e N12 Energia e Recursos Naturais.',
    categoria: 'Estratégia e PD&I',
    status: 'Documento Institucional',
    arquivo: '/documentos/manual-12-nucleos-pesquisa.pdf',
  },
  {
    codigo: '04',
    titulo: 'Caderno dos 6 Programas Estratégicos de PD&I',
    descricao: 'Detalhamento das agendas transversais GeoAI, Forecast, OpenData AI, Responsible AI, Retail Intelligence e AstroAI.',
    categoria: 'Estratégia e PD&I',
    status: 'Documento Institucional',
    arquivo: '/documentos/caderno-6-programas-estrategicos-pdi.pdf',
  },
  {
    codigo: '05',
    titulo: 'Catálogo de Tecnologias e Produtos 2026',
    descricao: 'Portfólio tecnológico do IBDIA com plataformas, aplicações, Technology Core e classificação de maturidade E0–E8.',
    categoria: 'Tecnologias e Produtos',
    status: 'Documento Institucional',
    arquivo: '/documentos/catalogo-tecnologias-produtos-2026.pdf',
  },
  {
    codigo: '06',
    titulo: 'Manual de Desenvolvimento de Produtos de PD&I',
    descricao: 'Metodologia pública de desenvolvimento E0–E8, com princípios de pesquisa, validação, segurança, documentação e transferência.',
    categoria: 'Tecnologias e Produtos',
    status: 'Versão Pública',
    arquivo: '/documentos/manual-desenvolvimento-produtos-pdi-versao-publica.pdf',
  },
  {
    codigo: '07',
    titulo: 'Política de Propriedade Intelectual e Transferência Tecnológica',
    descricao: 'Diretrizes públicas para titularidade, proteção, abertura, licenciamento e transferência de ativos científicos e tecnológicos.',
    categoria: 'Políticas e Governança',
    status: 'Minuta — Versão Pública',
    arquivo: '/documentos/politica-propriedade-intelectual-transferencia-tecnologica-versao-publica.pdf',
  },
  {
    codigo: '08',
    titulo: 'Política de Parcerias Científicas e Empresariais',
    descricao: 'Diretrizes públicas para cooperação com universidades, empresas, startups, governos e demais organizações.',
    categoria: 'Políticas e Governança',
    status: 'Minuta — Versão Pública',
    arquivo: '/documentos/politica-parcerias-cientificas-empresariais-versao-publica.pdf',
  },
  {
    codigo: '10',
    titulo: 'Manual de Governança Científica e Tecnológica 2026–2030',
    descricao: 'Arquitetura pública de governança dos Núcleos, Programas, projetos, dados, IA, publicações, PI e parcerias.',
    categoria: 'Políticas e Governança',
    status: 'Versão Pública',
    arquivo: '/documentos/manual-governanca-cientifica-tecnologica-versao-publica.pdf',
  },
  {
    codigo: '11',
    titulo: 'Plano de Publicações e Ciência Aberta 2026–2030',
    descricao: 'Diretrizes para papers, preprints, relatórios, datasets, software, benchmarks, reprodutibilidade e abertura responsável.',
    categoria: 'Ciência Aberta',
    status: 'Documento Institucional',
    arquivo: '/documentos/plano-publicacoes-ciencia-aberta-2026-2030.pdf',
  },
  {
    codigo: '12',
    titulo: 'Portfólio Institucional 2026–2030',
    descricao: 'Visão integrada do IBDIA, sua arquitetura de PD&I, Núcleos, Programas, tecnologias e oportunidades de colaboração.',
    categoria: 'Institucional',
    status: 'Documento Institucional',
    arquivo: '/documentos/portfolio-institucional-2026-2030.pdf',
  },
  {
    codigo: '13',
    titulo: 'Submissão de Projetos e Propostas de Colaboração',
    descricao: 'Processo público para apresentação de ideias, pesquisas, tecnologias, desafios e propostas de colaboração ao IBDIA.',
    categoria: 'Participação e Colaboração',
    status: 'Versão Pública',
    arquivo: '/documentos/submissao-projetos-colaboracao-versao-publica.pdf',
  },
  {
    codigo: '14',
    titulo: 'Modelo de Colaboração e Rede de Pesquisadores',
    descricao: 'Categorias, critérios de ingresso, modalidades de colaboração, direitos, deveres, afiliação e participação na Rede IBDIA.',
    categoria: 'Participação e Colaboração',
    status: 'Documento Institucional',
    arquivo: '/documentos/modelo-colaboracao-rede-pesquisadores.pdf',
  },
];

const categorias = ['Todos', ...Array.from(new Set(documentos.map(doc => doc.categoria)))];

const StatusBadge = ({ status }) => {
  const isMinuta = status.includes('Minuta');
  const isPublica = status.includes('Versão Pública');
  const classes = isMinuta
    ? 'bg-amber-50 text-amber-700 border-amber-100'
    : isPublica
      ? 'bg-cyan-50 text-cyan-700 border-cyan-100'
      : 'bg-[#EAF4F6] text-[#073B67] border-blue-100';

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${classes}`}>
      {status}
    </span>
  );
};

const BibliotecaInstitucional = () => {
  const [busca, setBusca] = useState('');
  const [categoria, setCategoria] = useState('Todos');

  usePageMeta(
    'Biblioteca Institucional',
    'Documentos públicos do IBDIA sobre estratégia de PD&I, Núcleos, Programas, tecnologias, governança, ciência aberta e colaboração.'
  );

  const filtrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    return documentos.filter(doc => {
      const matchCategoria = categoria === 'Todos' || doc.categoria === categoria;
      const matchBusca = !termo || [doc.titulo, doc.descricao, doc.categoria, doc.status, doc.codigo]
        .join(' ')
        .toLowerCase()
        .includes(termo);
      return matchCategoria && matchBusca;
    });
  }, [busca, categoria]);

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500">
      <PageHero
        eyebrow="Acervo Institucional"
        title="Biblioteca Institucional"
        subtitle="Documentos públicos que apresentam a arquitetura científica, tecnológica e institucional do IBDIA."
        stats={[["13", "Documentos públicos"], ["PD&I", "Estratégia e tecnologia"], ["Governança", "Políticas públicas"], ["Aberta", "Consulta e download"]]}
      />
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
<div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8 mb-10">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white text-[#073B67] flex items-center justify-center shadow-sm flex-shrink-0">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h2 className="font-bold text-slate-900 mb-2">Publicação institucional responsável</h2>
            <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">
              Alguns documentos são disponibilizados integralmente; outros possuem versão pública específica, com procedimentos internos,
              alçadas e controles administrativos resumidos ou suprimidos. Documentos identificados como minuta ainda dependem de aprovação
              formal e, quando aplicável, revisão jurídica.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between mb-10">
        <div className="relative w-full lg:max-w-md">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={busca}
            onChange={e => setBusca(e.target.value)}
            placeholder="Buscar documento..."
            className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#07899A]"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categorias.map(item => (
            <button
              key={item}
              onClick={() => setCategoria(item)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                categoria === item
                  ? 'bg-[#073B67] text-white'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-slate-500">
          {filtrados.length} {filtrados.length === 1 ? 'documento encontrado' : 'documentos encontrados'}
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filtrados.map(doc => (
          <article key={doc.codigo} className="bg-white border border-slate-100 rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all flex flex-col">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="w-12 h-12 bg-[#EAF4F6] text-[#073B67] rounded-2xl flex items-center justify-center">
                <FileText size={23} />
              </div>
              <span className="text-xs font-black tracking-widest text-slate-300">DOC {doc.codigo}</span>
            </div>

            <div className="mb-4">
              <StatusBadge status={doc.status} />
            </div>

            <p className="text-xs uppercase tracking-widest font-bold text-[#07899A] mb-2">{doc.categoria}</p>
            <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">{doc.titulo}</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-7 flex-grow">{doc.descricao}</p>

            <div className="flex gap-3">
              <a
                href={doc.arquivo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#073B67] text-white text-sm font-bold hover:bg-slate-800 transition-colors"
              >
                <ExternalLink size={16} />
                Visualizar
              </a>
              <a
                href={doc.arquivo}
                download
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-50 text-slate-700 text-sm font-bold hover:bg-slate-100 transition-colors"
                aria-label={`Baixar ${doc.titulo}`}
              >
                <Download size={17} />
              </a>
            </div>
          </article>
        ))}
      </div>

      {filtrados.length === 0 && (
        <div className="text-center py-20">
          <BookOpen size={44} className="text-slate-300 mx-auto mb-4" />
          <h3 className="font-bold text-slate-800 mb-2">Nenhum documento encontrado</h3>
          <p className="text-sm text-slate-500">Tente outro termo de busca ou selecione uma categoria diferente.</p>
        </div>
      )}
      </div>
    </div>
  );
};

export default BibliotecaInstitucional;
