import React, { useMemo, useState } from "react";

const PROGRAMAS = [
  {
    id: "P01",
    nome: "GeoAI",
    titulo: "Inteligência Geoespacial",
    descricao: "Pesquisa e desenvolvimento em Inteligência Artificial aplicada a território, sensoriamento remoto, geociências, infraestrutura, ambiente e dados espaciais.",
    nucleos: ["N01", "N02", "N05", "N06", "N07", "N11", "N12"],
    projetos: [
      {
        nome: "GeoAI Platform",
        tipo: "Plataforma",
        status: "Em desenvolvimento",
        descricao: "Plataforma modular para transformar imagens, mapas, sensores, vetores e séries temporais em inteligência geoespacial.",
        modulos: ["Radar AI", "Dam Monitor AI", "Survey AI", "Flood AI", "GNSS AI", "Urban AI", "Geology AI", "Coast AI", "Reservoir AI", "Geophysics AI"],
      },
      {
        nome: "TerraLens AI",
        tipo: "Projeto / tecnologia",
        status: "Pesquisa e validação",
        descricao: "Inteligência territorial baseada em observação da Terra, imagens de satélite, drones, ortofotos e outras fontes geoespaciais.",
      },
    ],
  },
  {
    id: "P02",
    nome: "Forecast AI",
    titulo: "Predição e Inteligência Preditiva",
    descricao: "Modelos de previsão, séries temporais, detecção de anomalias, risco, demanda e construção de cenários para diferentes domínios.",
    nucleos: ["N01", "N04", "N05", "N06", "N11", "N12"],
    projetos: [
      {
        nome: "Forecast AI",
        tipo: "Engine / plataforma",
        status: "Pesquisa e desenvolvimento",
        descricao: "Engine reutilizável de forecasting e detecção de anomalias para aplicações setoriais.",
        modulos: ["Previsão de demanda", "Séries temporais", "Detecção de anomalias", "Cenários e risco", "Previsão operacional"],
      },
    ],
  },
  {
    id: "P03",
    nome: "OpenData AI",
    titulo: "Dados Abertos e Inteligência Pública",
    descricao: "Integração, busca, interpretação e geração de inteligência a partir de dados públicos e abertos com IA, RAG, analytics e geotecnologias.",
    nucleos: ["N01", "N02", "N03", "N05", "N06", "N09"],
    projetos: [
      {
        nome: "OpenData AI",
        tipo: "Plataforma",
        status: "Pesquisa e desenvolvimento",
        descricao: "Plataforma para conectar bases públicas, estruturar conhecimento e ampliar o acesso a dados por meio de IA.",
        modulos: ["Integração de bases públicas", "Busca semântica", "RAG sobre dados abertos", "Observatórios inteligentes", "Agentes de consulta"],
      },
    ],
  },
  {
    id: "P04",
    nome: "Responsible AI",
    titulo: "IA Responsável, Segura e Confiável",
    descricao: "Pesquisa aplicada a governança de IA, explicabilidade, fairness, vieses, segurança, privacidade, risco, auditoria e monitoramento.",
    nucleos: ["N01", "N09", "Transversal"],
    projetos: [
      {
        nome: "Responsible AI Platform",
        tipo: "Framework / plataforma",
        status: "Pesquisa e desenvolvimento",
        descricao: "Framework para avaliação, governança e monitoramento de sistemas de Inteligência Artificial.",
        modulos: ["Model Cards", "Avaliação de vieses", "Explicabilidade", "Monitoramento de drift", "Auditoria e risco", "IBDIA Responsible AI Score"],
      },
    ],
  },
  {
    id: "P05",
    nome: "AgroAI",
    titulo: "IA para Agronegócio e Agricultura Digital",
    descricao: "Inteligência Artificial, dados, visão computacional e sensoriamento aplicados à agricultura de precisão, solos, culturas, produtividade e cadeias agroindustriais.",
    nucleos: ["N01", "N02", "N06", "N11"],
    projetos: [
      {
        nome: "Carteira AgroAI",
        tipo: "Projetos de pesquisa",
        status: "Estruturação",
        descricao: "Carteira inicial de projetos aplicados ao agronegócio e à agricultura digital.",
        modulos: ["Monitoramento de culturas", "Inteligência de solos", "Produtividade e previsão de safra", "Agricultura de precisão", "Detecção de estresse e anomalias", "Agroclima e risco", "Satélite e drones aplicados ao agro"],
      },
    ],
  },
  {
    id: "P06",
    nome: "Energy & Resources AI",
    titulo: "IA para Energia e Recursos Naturais",
    descricao: "Pesquisa em IA e dados aplicada a energia, água, mineração, petróleo e gás, eficiência, reservatórios e gestão inteligente de recursos naturais.",
    nucleos: ["N01", "N02", "N05", "N06", "N12"],
    projetos: [
      {
        nome: "Carteira Energy & Resources AI",
        tipo: "Projetos de pesquisa",
        status: "Estruturação",
        descricao: "Carteira inicial de projetos para energia e recursos naturais.",
        modulos: ["Previsão de geração e consumo", "Eficiência energética", "Recursos hídricos", "Reservatórios", "Mineração e recursos minerais", "Monitoramento ambiental", "Análise de ativos e infraestrutura energética"],
      },
    ],
  },
];

const TRANSVERSAIS = [
  {
    nome: "FazAí",
    tipo: "Ecossistema de produtos de IA Generativa",
    status: "Desenvolvimento de produto",
    descricao: "Família de aplicações de IA generativa voltada à produtividade e criação assistida, construída sobre um core compartilhado.",
    itens: ["FazAí Livro", "FazAí Slides", "FazAí Proposta", "FazAí Currículo", "FazAí Social", "FazAí Curso", "FazAí Anúncio", "FazAí Site", "FazAí Loja", "FazAí Cardápio", "FazAí Negócio", "FazAí Vídeo"],
  },
  {
    nome: "IBDIA Intelligence",
    tipo: "Plataforma transversal",
    status: "Em estruturação",
    descricao: "Camada de soluções analíticas e de apoio à decisão que combina previsão, RAG, recomendação, dados e IA responsável.",
    itens: ["Analytics", "RAG", "Forecast", "Recomendação", "IA responsável", "Apoio à decisão"],
  },
  {
    nome: "SEGI",
    tipo: "Projeto / tecnologia aplicada",
    status: "Reformulação e validação",
    descricao: "Sistema de Gestão Inteligente de Empreendimentos, Obras e Infraestrutura com dados, documentos, indicadores, alertas e componentes de IA.",
    itens: ["Gestão de projetos e obras", "IA documental", "Indicadores", "Alertas", "GeoAI", "Forecast"],
  },
  {
    nome: "Retail Intelligence",
    tipo: "Projeto / linha de pesquisa aplicada",
    status: "Reclassificado como projeto",
    descricao: "Tecnologias de segmentação, recomendação, previsão de demanda, CRM e comportamento de consumo. Permanece no portfólio sem status de Programa Estratégico.",
    itens: ["Segmentação", "RFM", "Recomendação", "Churn", "Previsão de demanda", "CRM"],
  },
  {
    nome: "AstroAI",
    tipo: "Projeto científico experimental",
    status: "Pesquisa",
    descricao: "Aplicação de IA a dados astronômicos e problemas científicos, mantida como frente experimental sem status de Programa Estratégico.",
    itens: ["Classificação", "Curvas de luz", "Anomalias", "Visão computacional", "Benchmarks científicos"],
  },
];

const STATUS_STYLE = {
  "Em desenvolvimento": "bg-teal-50 text-teal-700 border-teal-200",
  "Pesquisa e validação": "bg-sky-50 text-sky-700 border-sky-200",
  "Pesquisa e desenvolvimento": "bg-sky-50 text-sky-700 border-sky-200",
  "Estruturação": "bg-amber-50 text-amber-700 border-amber-200",
  "Desenvolvimento de produto": "bg-violet-50 text-violet-700 border-violet-200",
  "Em estruturação": "bg-amber-50 text-amber-700 border-amber-200",
  "Reformulação e validação": "bg-orange-50 text-orange-700 border-orange-200",
  "Reclassificado como projeto": "bg-slate-50 text-slate-700 border-slate-200",
  "Pesquisa": "bg-indigo-50 text-indigo-700 border-indigo-200",
};

function Badge({ children }) {
  return <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-600">{children}</span>;
}

function StatusBadge({ status }) {
  return <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${STATUS_STYLE[status] || "bg-slate-50 text-slate-700 border-slate-200"}`}>{status}</span>;
}

export default function ProgramasProjetos() {
  const [programaAtivo, setProgramaAtivo] = useState("Todos");
  const programasVisiveis = useMemo(() => programaAtivo === "Todos" ? PROGRAMAS : PROGRAMAS.filter((programa) => programa.id === programaAtivo), [programaAtivo]);

  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-[#073B67] via-[#075A78] to-[#07899A]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100">Pesquisa, Desenvolvimento e Inovação</p>
          <h1 className="max-w-5xl text-4xl font-bold tracking-tight text-white md:text-5xl">Programas e Projetos de P&D</h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-100">O IBDIA organiza sua atuação em Programas Estratégicos de longo prazo, projetos executáveis, plataformas tecnológicas e aplicações. Essa arquitetura conecta os 12 Núcleos de Pesquisa e permite que resultados evoluam da pesquisa à validação e à transferência tecnológica.</p>
          <div className="mt-9 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[["12","Núcleos de Pesquisa"],["6","Programas Estratégicos"],["E0–E8","Maturidade tecnológica"],["PD&I","Pesquisa ao impacto"]].map(([valor, rotulo]) => (
              <div key={rotulo} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur"><div className="text-2xl font-bold text-white">{valor}</div><div className="mt-1 text-xs leading-5 text-slate-200">{rotulo}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid gap-6 md:grid-cols-4">
            {[["Núcleo","Competência científica e tecnológica permanente."],["Programa","Agenda estratégica de médio e longo prazo."],["Projeto","Unidade executável de pesquisa, desenvolvimento ou inovação."],["Produto / Plataforma","Aplicação concreta derivada de um ou mais projetos."]].map(([titulo, texto]) => (
              <div key={titulo} className="rounded-2xl border border-slate-200 bg-white p-5"><h2 className="font-semibold text-[#073B67]">{titulo}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{texto}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#07899A]">6 Programas Estratégicos</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#073B67]">Grandes agendas de pesquisa do IBDIA</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">Cada Programa conecta diferentes Núcleos e pode reunir vários projetos, datasets, modelos, engines, publicações e produtos ao longo do tempo.</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          <button onClick={() => setProgramaAtivo("Todos")} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${programaAtivo === "Todos" ? "bg-[#073B67] text-white" : "border border-slate-200 bg-white text-slate-600 hover:border-[#07899A]"}`}>Todos</button>
          {PROGRAMAS.map((programa) => <button key={programa.id} onClick={() => setProgramaAtivo(programa.id)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${programaAtivo === programa.id ? "bg-[#073B67] text-white" : "border border-slate-200 bg-white text-slate-600 hover:border-[#07899A]"}`}>{programa.id}</button>)}
        </div>
        <div className="mt-10 space-y-8">
          {programasVisiveis.map((programa) => (
            <article key={programa.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white p-7 md:p-8">
                <div className="flex flex-wrap items-center gap-3"><span className="rounded-full bg-[#073B67] px-3 py-1 text-xs font-bold text-white">{programa.id}</span><span className="text-sm font-semibold text-[#07899A]">{programa.nome}</span></div>
                <h3 className="mt-3 text-2xl font-bold text-slate-900">{programa.titulo}</h3>
                <p className="mt-3 max-w-4xl leading-7 text-slate-600">{programa.descricao}</p>
                <div className="mt-5 flex flex-wrap gap-2">{programa.nucleos.map((n) => <Badge key={n}>{n}</Badge>)}</div>
              </div>
              <div className="p-7 md:p-8"><h4 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Projetos e ativos vinculados</h4>
                <div className="mt-5 grid gap-5 lg:grid-cols-2">{programa.projetos.map((projeto) => (
                  <div key={projeto.nome} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                    <div className="flex flex-wrap items-center gap-2"><span className="text-xs font-semibold uppercase tracking-wider text-[#07899A]">{projeto.tipo}</span><StatusBadge status={projeto.status} /></div>
                    <h5 className="mt-3 text-xl font-bold text-[#073B67]">{projeto.nome}</h5><p className="mt-3 text-sm leading-6 text-slate-600">{projeto.descricao}</p>
                    {projeto.modulos && <div className="mt-5 flex flex-wrap gap-2">{projeto.modulos.map((m) => <Badge key={m}>{m}</Badge>)}</div>}
                  </div>
                ))}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#07899A]">Portfólio transversal</p><h2 className="mt-2 text-3xl font-bold tracking-tight text-[#073B67]">Projetos, plataformas e tecnologias</h2><p className="mt-4 leading-7 text-slate-600">Algumas iniciativas atendem a vários Programas simultaneamente ou possuem natureza própria de produto, aplicação ou pesquisa. Por isso, não são tratadas como Programas Estratégicos.</p></div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{TRANSVERSAIS.map((item) => (
            <article key={item.nome} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="text-xs font-semibold uppercase tracking-wider text-[#07899A]">{item.tipo}</div><h3 className="mt-2 text-xl font-bold text-[#073B67]">{item.nome}</h3><div className="mt-3"><StatusBadge status={item.status} /></div><p className="mt-4 text-sm leading-6 text-slate-600">{item.descricao}</p><div className="mt-5 flex flex-wrap gap-2">{item.itens.map((s) => <Badge key={s}>{s}</Badge>)}</div></article>
          ))}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl bg-[#073B67] p-8 text-white md:p-10"><div className="grid gap-8 lg:grid-cols-[1.1fr_1.9fr] lg:items-center"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Maturidade tecnológica</p><h2 className="mt-2 text-3xl font-bold">Da ideia à escala: E0–E8</h2><p className="mt-4 leading-7 text-slate-200">Projetos do IBDIA possuem diferentes níveis de maturidade. O estágio informado evita que pesquisa, conceito ou PoC seja apresentado prematuramente como produto operacional.</p></div><div className="grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-9">{[["E0","Ideia"],["E1","Conceito"],["E2","Pesquisa"],["E3","PoC"],["E4","MVP"],["E5","Validação"],["E6","Piloto"],["E7","Produto"],["E8","Escala"]].map(([c,n]) => <div key={c} className="rounded-xl border border-white/15 bg-white/10 p-3 text-center"><div className="font-bold">{c}</div><div className="mt-1 text-[11px] leading-4 text-slate-200">{n}</div></div>)}</div></div></div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50"><div className="mx-auto max-w-7xl px-6 py-14 text-center lg:px-8"><h2 className="text-2xl font-bold text-[#073B67]">Colabore com a pesquisa do IBDIA</h2><p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">Pesquisadores, empresas, universidades, startups e instituições podem propor projetos, desafios de inovação, estudos conjuntos, pilotos e cooperação científica.</p><div className="mt-7 flex flex-wrap justify-center gap-3"><a href="/proponha-projeto" className="rounded-xl bg-[#073B67] px-5 py-3 text-sm font-semibold text-white">Propor um projeto</a><a href="/rede-ibdia" className="rounded-xl border border-[#073B67] bg-white px-5 py-3 text-sm font-semibold text-[#073B67]">Participar da Rede IBDIA</a><a href="/biblioteca" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700">Biblioteca Institucional</a></div></div></section>
    </main>
  );
}

