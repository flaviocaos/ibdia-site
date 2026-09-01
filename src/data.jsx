// --- DADOS INSTITUCIONAIS (fonte: Documento Técnico-Institucional IBDIA 2026) ---

export const NUCLEOS = [
  {
    icon: 'Brain',
    title: 'IA e Ciência de Dados',
    desc: 'Núcleo transversal e metodológico do Instituto, responsável pelo desenvolvimento de modelos, algoritmos e técnicas que sustentam os demais núcleos.',
    linhas: ['Machine Learning e Deep Learning', 'Modelos generativos, NLP e LLMs', 'Visão computacional', 'Séries temporais e análise preditiva', 'Detecção de anomalias', 'Sistemas de recomendação', 'AutoML, avaliação e benchmarking'],
    entregaveis: ['APIs preditivas', 'Modelos de classificação e previsão', 'Assistentes inteligentes', 'Sistemas de recomendação', 'Modelos de visão computacional'],
  },
  {
    icon: 'Globe',
    title: 'Geotecnologias e Inteligência Territorial',
    desc: 'Integra IA, dados geoespaciais e sensoriamento remoto para produzir inteligência territorial e ambiental.',
    linhas: ['GeoAI', 'SIG e análise espacial', 'Sensoriamento remoto', 'Imagens de satélite, drones e LiDAR', 'Detecção de mudanças', 'Modelagem territorial e geostatística'],
    entregaveis: ['Monitoramento territorial', 'Mapeamento automatizado', 'Detecção de ocupação, desmatamento e mineração', 'Plataformas WebGIS inteligentes', 'Planejamento territorial'],
  },
  {
    icon: 'BookOpen',
    title: 'Educação e Capacitação',
    desc: 'Responsável por transformar conhecimento produzido pelo Instituto em formação técnica, científica e executiva.',
    linhas: ['Educação digital', 'Laboratórios práticos', 'Formação em IA e dados', 'Metodologias de ensino tecnológico', 'Capacitação corporativa'],
    entregaveis: ['Cursos e trilhas', 'Bootcamps', 'Workshops', 'Programas in-company', 'Ambientes educacionais com datasets reais'],
  },
  {
    icon: 'Users',
    title: 'Inovação, Parcerias e Transferência Tecnológica',
    desc: 'Conecta o IBDIA ao ecossistema externo e estrutura a conversão de pesquisa em cooperação e inovação.',
    linhas: ['Inovação aberta', 'Transferência tecnológica', 'Ecossistemas de startups', 'Cooperação universidade-empresa', 'Provas de conceito'],
    entregaveis: ['Programas de inovação', 'Chamadas de parceiros', 'PoC Labs', 'Convênios científicos', 'Programas de aceleração tecnológica'],
  },
  {
    icon: 'ShieldCheck',
    title: 'Ética, Governança e Regulação de IA',
    desc: 'Pesquisa e desenvolve mecanismos para uso responsável, transparente, seguro e juridicamente adequado da IA.',
    linhas: ['Governança de IA', 'Auditoria algorítmica', 'Explainable AI', 'Fairness e bias', 'LGPD e proteção de dados', 'Gestão de riscos de IA'],
    entregaveis: ['Frameworks de governança', 'Auditoria de modelos', 'Relatórios de risco', 'Ferramentas de explicabilidade', 'Programas de IA responsável'],
  },
  {
    icon: 'Cpu',
    title: 'Engenharia, Dados e Infraestrutura Tecnológica',
    desc: 'Transforma pesquisa em sistemas confiáveis, escaláveis e operacionalizáveis.',
    linhas: ['Data Engineering', 'MLOps e LLMOps', 'Cloud e computação distribuída', 'APIs e microsserviços', 'HPC e infraestrutura de GPU', 'Observabilidade e ciclo de vida de modelos'],
    entregaveis: ['Plataforma tecnológica do IBDIA', 'Pipelines de dados', 'Infraestrutura de treinamento', 'Deploy de modelos', 'Arquiteturas de software científico'],
  },
  {
    icon: 'Building2',
    title: 'Negócios, Varejo e Indústria 4.0',
    desc: 'Aplica IA e analytics à competitividade empresarial, eficiência operacional e novos modelos de negócio.',
    linhas: ['Customer analytics', 'Recomendação e personalização', 'Previsão de demanda', 'Otimização e logística', 'Manutenção preditiva', 'Inteligência comercial e BI'],
    entregaveis: ['Recomendadores', 'Forecasting', 'RFM e segmentação', 'Analytics industrial', 'Automação inteligente'],
  },
  {
    icon: 'Leaf',
    title: 'Meio Ambiente, Mineração e Energia',
    desc: 'Pesquisa tecnologias orientadas por dados para sustentabilidade, recursos naturais, mineração e sistemas energéticos.',
    linhas: ['Monitoramento ambiental', 'IA para mineração', 'Modelagem de recursos naturais', 'Energia e previsão de demanda', 'Riscos ambientais', 'Mudanças climáticas e sensoriamento'],
    entregaveis: ['Detecção de impactos', 'Monitoramento de áreas mineradas', 'Previsão energética', 'Mapas ambientais inteligentes', 'Sistemas de alerta'],
  },
  {
    icon: 'ShieldAlert',
    title: 'Defesa, Segurança e Inteligência',
    desc: 'Desenvolve pesquisa em análise estratégica, consciência situacional e sistemas inteligentes para ambientes de segurança e defesa, dentro de marcos legais e éticos.',
    linhas: ['Fusão e análise de dados', 'Detecção de padrões e anomalias', 'Inteligência geoespacial', 'Cibersegurança analítica', 'Sistemas de apoio à decisão', 'Monitoramento e alerta'],
    entregaveis: ['Painéis de inteligência', 'Análise de risco', 'Detecção de eventos', 'GeoIntelligence', 'Sistemas analíticos de apoio'],
  },
  {
    icon: 'Laptop',
    title: 'Políticas Públicas, Infraestrutura, Saneamento e Cidades Inteligentes',
    desc: 'Aplica dados e IA ao planejamento, gestão pública e desenvolvimento de infraestrutura e serviços urbanos.',
    linhas: ['Smart Cities', 'Planejamento territorial', 'Mobilidade', 'Saneamento', 'Infraestrutura', 'Indicadores públicos', 'Modelagem de políticas públicas'],
    entregaveis: ['Painéis municipais', 'Inteligência territorial', 'Priorização de investimentos', 'Analytics de saneamento', 'Modelos de mobilidade'],
  },
  {
    icon: 'Activity',
    title: 'Saúde e Ciências da Vida',
    desc: 'Aplica IA e ciência de dados à pesquisa em saúde, gestão sanitária e desenvolvimento de ferramentas de apoio, respeitando requisitos éticos e regulatórios.',
    linhas: ['Health Analytics', 'Epidemiologia computacional', 'NLP em saúde', 'Imagens médicas', 'Bioinformática', 'Modelagem preditiva'],
    entregaveis: ['Dashboards de saúde', 'Previsão epidemiológica', 'Análise documental', 'Apoio à pesquisa clínica', 'Modelos de risco'],
  },
  {
    icon: 'Star',
    title: 'Astroinformática, Cosmologia Computacional e IA Científica',
    desc: 'Braço de ciência de fronteira do IBDIA, dedicado à aplicação de IA, ciência de dados e computação avançada a problemas das ciências fundamentais.',
    linhas: ['Astroinformática', 'Cosmologia computacional', 'Classificação de objetos celestes', 'Buracos negros e fenômenos astrofísicos', 'Ondas gravitacionais', 'Processamento de imagens astronômicas', 'Simulações científicas e detecção de anomalias'],
    entregaveis: ['Classificação de galáxias', 'Detecção de eventos e anomalias', 'Super-resolução de imagens astronômicas', 'Análise de grandes surveys', 'Modelos científicos reutilizáveis em outras áreas'],
  },
];

export const PRODUTOS = [
  { nome: 'IBDIA Forecast API', finalidade: 'API de análise preditiva e séries temporais para demanda, produção, consumo, energia e operações.' },
  { nome: 'IBDIA GeoAI', finalidade: 'Plataforma de mapeamento inteligente e análise automatizada de imagens de satélite e dados geoespaciais.' },
  { nome: 'IBDIA Health Intelligence', finalidade: 'Ambiente analítico para dados de saúde pública, indicadores, tendências e modelos preditivos.' },
  { nome: 'IBDIA Urban Intelligence', finalidade: 'Plataforma de inteligência territorial para prefeituras, planejamento urbano e políticas públicas.' },
  { nome: 'IBDIA Retail Intelligence', finalidade: 'Sistema de recomendação, segmentação, previsão e inteligência comercial para varejo.' },
  { nome: 'IBDIA Responsible AI', finalidade: 'Plataforma de auditoria, explicabilidade, governança e avaliação de riscos de modelos de IA.' },
  { nome: 'IBDIA OpenData AI', finalidade: 'Visualizador e analisador inteligente de dados públicos e bases abertas.' },
  { nome: 'IBDIA Learning Lab', finalidade: 'Ambiente educacional para aprendizagem prática de IA, dados e desenvolvimento de modelos.' },
  { nome: 'IBDIA Information Integrity', finalidade: 'Ferramentas de pesquisa e análise de padrões de desinformação e integridade informacional.' },
  { nome: 'IBDIA GeoData Integrator', finalidade: 'Integração de dados espaciais, tabulares, estatísticos e APIs para análise territorial.' },
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
