// --- DADOS INSTITUCIONAIS (fonte: Documento Técnico-Institucional IBDIA 2026) ---

export const NUCLEOS = [
  {
    codigo: 'N01',
    icon: 'Brain',
    title: 'Inteligência Artificial e Dados',
    desc: 'Núcleo transversal dedicado ao desenvolvimento de métodos, modelos, algoritmos e arquiteturas de IA e ciência de dados que sustentam os demais núcleos.',
    linhas: ['Machine Learning e Deep Learning', 'Modelos generativos, NLP e LLMs', 'Visão computacional', 'Séries temporais e análise preditiva', 'Detecção de anomalias', 'Sistemas de recomendação', 'Avaliação e benchmarking'],
    entregaveis: ['Modelos e APIs de IA', 'Engines analíticos', 'Assistentes inteligentes', 'Sistemas de recomendação', 'Benchmarks e componentes reutilizáveis'],
  },
  {
    codigo: 'N02',
    icon: 'Globe',
    title: 'Geotecnologias e Aplicações',
    desc: 'Integra IA, dados geoespaciais, sensoriamento remoto e geociências para produzir inteligência territorial e aplicações espaciais.',
    linhas: ['GeoAI', 'SIG e análise espacial', 'Sensoriamento remoto', 'Satélites, drones e LiDAR', 'Detecção de mudanças', 'Modelagem territorial'],
    entregaveis: ['Mapeamento automatizado', 'Monitoramento territorial', 'WebGIS inteligentes', 'Modelos geoespaciais', 'Soluções de apoio ao planejamento'],
  },
  {
    codigo: 'N03',
    icon: 'HeartPulse',
    title: 'Saúde e Biomedicina',
    desc: 'Pesquisa aplicações de IA, dados e modelagem computacional em saúde, biomedicina, apoio clínico e análise de informações biomédicas.',
    linhas: ['IA em saúde', 'Dados biomédicos', 'Modelos preditivos', 'Visão computacional médica', 'NLP clínico', 'Bioinformática aplicada'],
    entregaveis: ['Modelos de apoio à decisão', 'Ferramentas analíticas', 'Protótipos de IA em saúde', 'Estudos e benchmarks', 'Soluções de análise biomédica'],
  },
  {
    codigo: 'N04',
    icon: 'Factory',
    title: 'Indústria e Manufatura',
    desc: 'Aplica IA, dados e automação inteligente à produtividade, qualidade, manutenção, processos industriais e manufatura avançada.',
    linhas: ['Indústria 4.0', 'Manutenção preditiva', 'Visão computacional industrial', 'Otimização de processos', 'Digital twins', 'Analytics industrial'],
    entregaveis: ['Modelos preditivos', 'Inspeção automatizada', 'Sistemas de manutenção', 'Analytics de produção', 'PoCs industriais'],
  },
  {
    codigo: 'N05',
    icon: 'Building2',
    title: 'Cidades Inteligentes e Infraestrutura',
    desc: 'Desenvolve aplicações de IA e dados para infraestrutura, obras, mobilidade, saneamento, serviços urbanos e cidades inteligentes.',
    linhas: ['Smart Cities', 'Infraestrutura inteligente', 'Mobilidade', 'Saneamento', 'Monitoramento de obras', 'Gestão de ativos'],
    entregaveis: ['Painéis e indicadores', 'Modelos de priorização', 'Monitoramento de infraestrutura', 'Sistemas de apoio à decisão', 'Soluções urbanas inteligentes'],
  },
  {
    codigo: 'N06',
    icon: 'Leaf',
    title: 'Meio Ambiente e Clima',
    desc: 'Pesquisa tecnologias baseadas em IA, dados e observação da Terra para sustentabilidade, clima, ecossistemas e riscos ambientais.',
    linhas: ['Monitoramento ambiental', 'Mudanças climáticas', 'Biodiversidade', 'Riscos ambientais', 'Uso e cobertura da terra', 'Modelagem ambiental'],
    entregaveis: ['Mapas e indicadores ambientais', 'Sistemas de alerta', 'Modelos de risco', 'Monitoramento de mudanças', 'Produtos de inteligência ambiental'],
  },
  {
    codigo: 'N07',
    icon: 'ShieldAlert',
    title: 'Defesa e Segurança',
    desc: 'Desenvolve pesquisa em análise estratégica, consciência situacional e sistemas inteligentes para segurança e defesa, dentro de marcos legais e éticos.',
    linhas: ['Fusão de dados', 'Detecção de padrões e anomalias', 'GeoIntelligence', 'Cibersegurança analítica', 'Apoio à decisão', 'Monitoramento e alerta'],
    entregaveis: ['Painéis de inteligência', 'Análise de risco', 'Detecção de eventos', 'GeoIntelligence', 'Sistemas analíticos de apoio'],
  },
  {
    codigo: 'N08',
    icon: 'BookOpen',
    title: 'Educação e Capacitação',
    desc: 'Transforma conhecimento científico e tecnológico em formação, capacitação profissional e disseminação de competências em IA e dados.',
    linhas: ['Educação digital', 'Formação em IA e dados', 'Laboratórios práticos', 'Metodologias de ensino tecnológico', 'Capacitação corporativa'],
    entregaveis: ['Cursos e trilhas', 'Bootcamps', 'Workshops', 'Programas in-company', 'Ambientes educacionais'],
  },
  {
    codigo: 'N09',
    icon: 'Landmark',
    title: 'Políticas Públicas e Sociedade',
    desc: 'Aplica IA, dados e métodos analíticos à formulação, avaliação e monitoramento de políticas públicas e desafios sociais.',
    linhas: ['Dados públicos', 'Avaliação de políticas', 'Indicadores sociais', 'Planejamento público', 'IA para governo', 'Análise de impacto'],
    entregaveis: ['Observatórios', 'Painéis públicos', 'Modelos de priorização', 'Estudos de impacto', 'Ferramentas de apoio à gestão pública'],
  },
  {
    codigo: 'N10',
    icon: 'Lightbulb',
    title: 'Inovação Aberta e Startups',
    desc: 'Conecta o IBDIA ao ecossistema de inovação e estrutura a transformação de pesquisa em cooperação, experimentação e transferência tecnológica.',
    linhas: ['Inovação aberta', 'Startups e spin-offs', 'Transferência tecnológica', 'Cooperação universidade-empresa', 'Provas de conceito'],
    entregaveis: ['Chamadas de inovação', 'PoC Labs', 'Programas com startups', 'Convênios científicos', 'Transferência de tecnologia'],
  },
  {
    codigo: 'N11',
    icon: 'Sprout',
    title: 'Agronegócio e Agricultura Digital',
    desc: 'Aplica IA, dados, sensoriamento e geotecnologias à agricultura de precisão, solos, produção e cadeias agroindustriais.',
    linhas: ['Agricultura de precisão', 'Sensoriamento remoto aplicado ao agro', 'IA para solos e produtividade', 'Inteligência agroclimática', 'Monitoramento de culturas', 'Analytics agroindustrial'],
    entregaveis: ['Mapas e modelos agrícolas', 'Monitoramento de culturas', 'Modelos de produtividade', 'Inteligência agroclimática', 'Soluções de agricultura digital'],
  },
  {
    codigo: 'N12',
    icon: 'Zap',
    title: 'Energia e Recursos Naturais',
    desc: 'Aplica IA, dados e geotecnologias à exploração responsável, monitoramento, eficiência e gestão de energia e recursos naturais.',
    linhas: ['Previsão de geração e consumo', 'Eficiência energética', 'Recursos hídricos e reservatórios', 'Mineração e geociências computacionais', 'Petróleo e gás', 'Monitoramento ambiental de ativos'],
    entregaveis: ['Modelos de previsão energética', 'Analytics de recursos naturais', 'Monitoramento de ativos', 'Detecção de anomalias', 'Soluções para energia, mineração e recursos hídricos'],
  },
];

export const PROJETOS_PD = [
  {
    nome: 'Survey AI',
    resumo: 'Controle de qualidade e análise automática de levantamentos topográficos (CSV, DXF, SHP, GNSS/RINEX): outliers, fechamento, densidade e comparação entre campanhas.',
    fase: 'MVP em desenvolvimento',
  },
  {
    nome: 'Radar AI',
    resumo: 'Análise inteligente de imagens SAR (Sentinel-1 e outras missões): detecção de mudanças, coerência interferométrica e deslocamento do terreno via linguagem natural.',
    fase: 'Especificação técnica',
  },
  {
    nome: 'Dam Monitor AI',
    resumo: 'Integração de GNSS, InSAR, piezômetros, inclinômetros e drones para apoiar engenheiros na detecção de comportamentos anômalos em barragens.',
    fase: 'Especificação técnica',
  },
  {
    nome: 'Urban AI',
    resumo: 'Inteligência geoespacial sobre crescimento urbano: expansão, densificação, impermeabilização e mudança de uso do solo a partir de imagens multitemporais.',
    fase: 'Especificação técnica',
  },
  {
    nome: 'Geology AI',
    resumo: 'Identificação assistida de lineamentos, falhas e estruturas geológicas cruzando DEM, SAR, óptico e dados geofísicos, como apoio à validação de campo.',
    fase: 'Pesquisa exploratória',
  },
  {
    nome: 'Flood AI',
    resumo: 'Mapeamento de áreas inundadas via SAR e modelagem hidrológica de cenários de chuva, com estimativa de infraestrutura e áreas expostas.',
    fase: 'Pesquisa exploratória',
  },
  {
    nome: 'Coast AI',
    resumo: 'Extração automática de linha de costa em séries históricas de imagens para calcular taxas de erosão e acreção costeira.',
    fase: 'Pesquisa exploratória',
  },
  {
    nome: 'Reservoir AI',
    resumo: 'Modelagem de reservatórios hídricos (volume, assoreamento) e módulo experimental com Fourier Neural Operators para reservatórios subterrâneos.',
    fase: 'Pesquisa exploratória',
  },
  {
    nome: 'GNSS AI',
    resumo: 'Diagnóstico automático da qualidade de sessões GNSS: multipath, DOP, cycle slips e explicação em linguagem natural das causas de baixa qualidade.',
    fase: 'Pesquisa exploratória',
  },
  {
    nome: 'Geophysics AI',
    resumo: 'Plataforma modular para GPR, magnetometria e outros métodos geofísicos, com processamento de sinal e reconhecimento de padrões e anomalias.',
    fase: 'Pesquisa exploratória',
  },
];

export const FRENTES = [
  { frente: 'Pesquisa científica e aplicada', atuacao: 'Papers, white papers, benchmarks, datasets, modelos, experimentos e estudos de fronteira.' },
  { frente: 'Desenvolvimento tecnológico', atuacao: 'Software, APIs, plataformas, modelos de IA, ferramentas analíticas, PoCs e ativos tecnológicos.' },
  { frente: 'Educação e formação', atuacao: 'Cursos, trilhas, workshops, programas corporativos, formação de pesquisadores e capacitação profissional.' },
  { frente: 'Cooperação e inovação aberta', atuacao: 'Projetos conjuntos com universidades, empresas, startups, governos, laboratórios e organizações internacionais.' },
  { frente: 'Transferência e aplicação', atuacao: 'Transformação de resultados de P&D em soluções aplicáveis ao mercado, políticas públicas e setores estratégicos.' },
];

export const SETORES = [
  'Geotecnologias e inteligência territorial', 'Mineração e recursos naturais', 'Infraestrutura e engenharia',
  'Saneamento e recursos hídricos', 'Meio ambiente e sustentabilidade', 'Planejamento territorial e cidades inteligentes',
  'Varejo, comércio e consumo', 'Saúde e ciências da vida', 'Negócios, finanças e inteligência empresarial',
  'Defesa, segurança e inteligência', 'Indústria e logística', 'Energia', 'Educação', 'Políticas públicas',
  'Ciências fundamentais, astronomia, astrofísica e cosmologia',
];

export const VALORES = [
  'Excelência científica e técnica', 'Ética, segurança e transparência', 'Inovação com propósito',
  'Colaboração e ciência em rede', 'Responsabilidade social e ambiental', 'Independência intelectual',
  'Formação e democratização do conhecimento', 'Orientação a impacto e resultados',
];

export const PUBLICACOES = [
  'Agenda anual de pesquisa por núcleo', 'Séries editoriais IBDIA White Papers e IBDIA Technical Reports',
  'Repositórios oficiais de código, datasets e modelos', 'Participação em conferências e periódicos',
  'Projetos conjuntos com pesquisadores externos', 'Challenges e benchmarks próprios',
  'Política institucional de autoria, dados e propriedade intelectual',
];

export const EDUCACAO_FORMATOS = [
  'Cursos livres e formações técnicas', 'Trilhas de IA, ML, Deep Learning, Data Science, GeoAI e BI',
  'Capacitação para empresas e governos', 'Programas para pesquisadores e estudantes',
  'Workshops e escolas de verão', 'Seminários e conferências', 'Conteúdo aberto e programas de popularização científica',
];

export const ECOSSISTEMA = ['Universidades e centros de pesquisa', 'Empresas e startups', 'Governos', 'Fundações de apoio', 'Agências de fomento', 'Organismos multilaterais e instituições internacionais'];

export const VALOR_PARCEIROS = [
  'Acesso a projetos e conhecimento de fronteira', 'Desenvolvimento cooperativo de P&D',
  'Provas de conceito e experimentação', 'Formação especializada de equipes',
  'Participação em programas e laboratórios temáticos', 'Acesso a pesquisadores e rede acadêmica',
  'Licenciamento e transferência de tecnologia conforme instrumentos específicos',
  'Associação institucional a projetos de ciência, inovação e impacto',
];

export const INTERNACIONALIZACAO = [
  'Publicações em inglês', 'Conselho científico internacional', 'Pesquisadores visitantes',
  'MoUs com universidades e laboratórios', 'Participação em consórcios internacionais',
  'Representações estratégicas no exterior', 'Projetos multilíngues e intercâmbio de pesquisadores',
];

export const SUSTENTABILIDADE_FONTES = [
  'Projetos de P&D contratados', 'Convênios e cooperação científica', 'Editais e recursos de fomento',
  'Doações e apoio institucional', 'Patrocínio de programas e laboratórios', 'Cursos e capacitações',
  'Licenciamento de tecnologia e software', 'Prestação de serviços técnicos compatíveis com os objetivos estatutários',
  'Eventos, publicações e programas educacionais',
];

export const GOVERNANCA_ITENS = [
  'Governança científica e revisão de projetos', 'Ética em pesquisa e uso responsável de IA',
  'Proteção de dados e LGPD', 'Segurança da informação', 'Propriedade intelectual e licenciamento',
  'Autoria científica e conflitos de interesse', 'Gestão de datasets e reprodutibilidade',
  'Contratação e bolsas', 'Prestação de contas e transparência', 'Avaliação de impacto e indicadores',
];

export const INFRA_ITENS = [
  'Workstations de alto desempenho para IA e ciência de dados', 'Servidores GPU para treinamento e inferência',
  'Armazenamento NAS e políticas de backup', 'Cloud pública e arquitetura híbrida', 'Rede de alta velocidade',
  'Ambientes de desenvolvimento e repositórios Git', 'Plataforma de MLOps/LLMOps',
  'Governança, segurança e controle de acesso', 'Ambientes de dados geoespaciais e bancos PostGIS',
  'Infraestrutura para cursos, laboratórios e demonstrações',
];

export const ESTRUTURA = [
  { estrutura: 'Direção científica e tecnológica', perfil: 'Liderança de P&D, estratégia científica, arquitetura e qualidade', ref: '1 núcleo executivo' },
  { estrutura: 'Núcleo central de IA e Dados', perfil: 'Cientistas de dados, ML Engineers, analistas', ref: 'Equipe transversal' },
  { estrutura: 'Núcleos especializados', perfil: 'Coordenadores e especialistas por domínio', ref: '12 núcleos' },
  { estrutura: 'Engenharia e infraestrutura', perfil: 'Data Engineering, MLOps, Cloud/HPC', ref: 'Equipe compartilhada' },
  { estrutura: 'Gestão de projetos e inovação', perfil: 'PM, inovação, convênios e transferência', ref: 'Equipe compartilhada' },
  { estrutura: 'Administrativo-financeiro', perfil: 'Gestão, contabilidade, secretaria e comunicação', ref: 'Estrutura enxuta e escalável' },
];

export const FASES = [
  { etapa: 'Fase 1 — Autoridade científica', objetivo: 'Implantar governança, núcleos prioritários, agenda de pesquisa, site, repositórios e primeiras publicações.' },
  { etapa: 'Fase 2 — Cooperação', objetivo: 'Firmar parcerias com universidades, pesquisadores, empresas e órgãos de fomento; estruturar projetos conjuntos.' },
  { etapa: 'Fase 3 — Produtos e serviços', objetivo: 'Transformar pesquisas maduras em softwares, APIs, PoCs, consultorias e capacitações.' },
  { etapa: 'Fase 4 — Escala', objetivo: 'Ampliar equipe, infraestrutura, portfólio, programas de formação e captação.' },
  { etapa: 'Fase 5 — Internacionalização', objetivo: 'Consolidar redes globais, projetos internacionais e, quando justificável, presença institucional no exterior.' },
];

export const INDICADORES = [
  'Número e qualidade de publicações', 'Projetos de P&D ativos', 'Recursos captados',
  'Parcerias nacionais e internacionais', 'Tecnologias, softwares e modelos desenvolvidos',
  'Datasets e repositórios publicados', 'Licenças e transferências de tecnologia',
  'Profissionais e estudantes capacitados', 'Bolsas e pesquisadores vinculados',
  'Impacto comprovado em organizações e políticas públicas',
];
