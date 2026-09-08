import React from 'react';
import { SectionHeader, NucleoCard, usePageMeta } from '../components/UI.jsx';
import { NUCLEOS } from '../data.jsx';

const Nucleos = () => {
  usePageMeta(
    'Núcleos de Pesquisa',
    'Os 12 núcleos de pesquisa e desenvolvimento do IBDIA: linhas de pesquisa e aplicações em IA, geotecnologias, saúde, defesa, meio ambiente e mais.'
  );

  return (
    <div className="pt-32 pb-24 container mx-auto px-6 animate-in slide-in-from-bottom-4 duration-500">
      <SectionHeader
        title="Núcleos de Pesquisa e Desenvolvimento"
        subtitle="Doze núcleos permanentes de competência científica e tecnológica, identificados de N01 a N12 e conectados aos Programas Estratégicos de PD&I."
        centered
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {NUCLEOS.map((n, i) => (
          <NucleoCard key={n.codigo || i} codigo={n.codigo} icon={n.icon} title={n.title} desc={n.desc} linhas={n.linhas} entregaveis={n.entregaveis} />
        ))}
      </div>
    </div>
  );
};

export default Nucleos;

