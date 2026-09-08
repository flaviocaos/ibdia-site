import React from 'react';
import { ScrollText, BookOpen } from 'lucide-react';
import { PageHero, SubHeader, InfoCard, CheckList, Tag, usePageMeta } from '../components/UI.jsx';
import { PUBLICACOES, EDUCACAO_FORMATOS, INTERNACIONALIZACAO } from '../data.jsx';

const Pesquisa = () => {
  usePageMeta(
    'Pesquisa, Publicações e Formação',
    'Estratégia de pesquisa, publicações científicas, educação e internacionalização do IBDIA.'
  );

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500">
      <PageHero
        eyebrow="Ciência e Conhecimento"
        title="Pesquisa, Publicações e Formação"
        subtitle="Produção científica, ciência aberta e educação como instrumentos de impacto, reputação e difusão do conhecimento."
      />
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
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
    </div>
  );
};

export default Pesquisa;

