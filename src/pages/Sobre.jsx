import React from 'react';
import { CheckCircle2, Target, Eye, Heart } from 'lucide-react';
import { SectionHeader, SubHeader, Tag, usePageMeta } from '../components/UI.jsx';
import { FRENTES, SETORES, VALORES } from '../data.jsx';

const Sobre = () => {
  usePageMeta(
    'O Instituto',
    'Conheça o IBDIA: missão, visão, valores, modelo de atuação e áreas de aplicação de um instituto de pesquisa em dados e inteligência artificial.'
  );

  return (
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
              { t: 'Independência', d: 'Pesquisa científica sem amarras comerciais.' },
              { t: 'Ecossistema', d: 'Integração direta com startups e universidades.' },
              { t: 'Soberania', d: 'Desenvolvimento de modelos de linguagem e dados nacionais.' },
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

      <div className="mb-20">
        <SubHeader title="Valores" subtitle="Os princípios que orientam toda a atuação do Instituto." />
        <div className="flex flex-wrap gap-3">
          {VALORES.map((v, i) => <Tag key={i}>{v}</Tag>)}
        </div>
      </div>

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

      <div className="mb-20">
        <SubHeader title="Áreas Setoriais de Aplicação" subtitle="As tecnologias desenvolvidas nos núcleos são aplicadas transversalmente a diferentes setores." />
        <div className="flex flex-wrap gap-3">
          {SETORES.map((s, i) => <Tag key={i}>{s}</Tag>)}
        </div>
      </div>

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
};

export default Sobre;
