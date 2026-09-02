import React from 'react';
import { Layers } from 'lucide-react';
import { SectionHeader, usePageMeta } from '../components/UI.jsx';
import { PROJETOS_PD } from '../data.jsx';

const ProjetosPD = () => {
  usePageMeta(
    'Projetos de P&D',
    'Projetos de pesquisa e desenvolvimento em andamento no IBDIA, incluindo a GeoAI Platform: Radar AI, Dam Monitor AI, Survey AI e outros.'
  );

  return (
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
};

export default ProjetosPD;
