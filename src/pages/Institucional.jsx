import React from 'react';
import { Handshake, TrendingUp, Server, Landmark, BarChart3 } from 'lucide-react';
import { SectionHeader, SubHeader, InfoCard, CheckList, Tag, usePageMeta } from '../components/UI.jsx';
import {
  ECOSSISTEMA, VALOR_PARCEIROS, SUSTENTABILIDADE_FONTES, ESTRUTURA,
  INFRA_ITENS, GOVERNANCA_ITENS, FASES, INDICADORES,
} from '../data.jsx';

const Institucional = () => {
  usePageMeta(
    'Institucional',
    'Parcerias, estrutura técnica, governança, sustentabilidade e roadmap de implantação do IBDIA.'
  );

  return (
    <div className="pt-32 pb-24 container mx-auto px-6 animate-in slide-in-from-bottom-4 duration-500">
      <SectionHeader
        title="Institucional"
        subtitle="Parcerias, estrutura, governança e o caminho de implantação do Instituto."
      />

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

      <div className="mb-20">
        <SubHeader title="Modelo de Sustentabilidade Institucional" subtitle="Como associação sem fins lucrativos, o IBDIA pode gerar receitas e captar recursos desde que aplicados em seus objetivos institucionais." />
        <div className="flex flex-wrap gap-3">
          {SUSTENTABILIDADE_FONTES.map((s, i) => <Tag key={i}>{s}</Tag>)}
        </div>
      </div>

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

      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <InfoCard icon={Server} title="Infraestrutura Tecnológica">
          <CheckList items={INFRA_ITENS} />
        </InfoCard>
        <InfoCard icon={Landmark} title="Governança Científica, Ética e Propriedade Intelectual">
          <CheckList items={GOVERNANCA_ITENS} />
        </InfoCard>
      </div>

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

      <div className="bg-[#0D3B66] rounded-[2.5rem] p-10 md:p-14 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Indicadores Estratégicos</h2>
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
};

export default Institucional;
