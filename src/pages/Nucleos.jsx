import React from 'react';
import { PageHero, NucleoCard, usePageMeta } from '../components/UI.jsx';
import { NUCLEOS } from '../data.jsx';

const Nucleos = () => {
  usePageMeta(
    'Núcleos de Pesquisa',
    'Os 12 núcleos de pesquisa e desenvolvimento do IBDIA: linhas de pesquisa e aplicações em IA, geotecnologias, saúde, defesa, meio ambiente e mais.'
  );

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500">
      <PageHero
        eyebrow="Estrutura Científica"
        title="Núcleos de Pesquisa e Desenvolvimento"
        subtitle="Doze núcleos permanentes de competência científica e tecnológica, identificados de N01 a N12 e conectados aos Programas Estratégicos de PD&I."
        centered
        stats={[["12", "Núcleos de Pesquisa"], ["N01–N12", "Estrutura oficial"], ["6", "Programas Estratégicos"], ["PD&I", "Atuação transversal"]]}
      />
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {NUCLEOS.map((n, i) => (
          <NucleoCard key={n.codigo || i} codigo={n.codigo} icon={n.icon} title={n.title} desc={n.desc} linhas={n.linhas} entregaveis={n.entregaveis} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Nucleos;

