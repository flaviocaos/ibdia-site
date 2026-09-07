import React from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, Users, Handshake, ArrowRight } from 'lucide-react';
import { SectionHeader, usePageMeta } from '../components/UI.jsx';

const options = [
  {
    icon: FlaskConical,
    title: 'Proponha um Projeto',
    text: 'Envie uma ideia, pesquisa, tecnologia ou proposta de PD&I para avaliação e possível desenvolvimento em colaboração com o Instituto.',
    to: '/proponha-projeto',
    cta: 'Submeter projeto',
  },
  {
    icon: Users,
    title: 'Faça parte da Rede IBDIA',
    text: 'Pesquisadores, profissionais, professores, estudantes e especialistas podem manifestar interesse em participar da rede científica e tecnológica.',
    to: '/rede-ibdia',
    cta: 'Candidatar-se à rede',
  },
  {
    icon: Handshake,
    title: 'Seja um Parceiro Institucional',
    text: 'Universidades, empresas, startups, governos e organizações podem propor cooperação, pilotos, PD&I, inovação aberta e transferência tecnológica.',
    to: '/parceria-institucional',
    cta: 'Propor parceria',
  },
];

export default function Participe() {
  usePageMeta('Participe', 'Porta de entrada do IBDIA para projetos, pesquisadores, especialistas e parceiros institucionais.');
  return (
    <div className="pt-32 pb-24 container mx-auto px-6 animate-in fade-in duration-500">
      <SectionHeader centered title="Participe do IBDIA" subtitle="Escolha a porta de entrada mais adequada para sua proposta. Cada submissão passa por triagem e avaliação institucional." />
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {options.map(({ icon: Icon, title, text, to, cta }) => (
          <div key={to} className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all p-8 flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0D3B66] flex items-center justify-center mb-6"><Icon size={28} /></div>
            <h2 className="text-xl font-black text-slate-900 mb-3">{title}</h2>
            <p className="text-sm text-slate-600 leading-relaxed flex-1">{text}</p>
            <Link to={to} className="mt-7 inline-flex items-center gap-2 font-bold text-[#0D3B66] hover:text-[#2EC4B6]">
              {cta} <ArrowRight size={17} />
            </Link>
          </div>
        ))}
      </div>
      <div className="max-w-4xl mx-auto mt-12 bg-slate-50 rounded-2xl p-6 text-sm text-slate-600 leading-relaxed border border-slate-100">
        A submissão de uma proposta ou candidatura não gera aprovação automática, vínculo com o Instituto, contratação ou compromisso de financiamento. O IBDIA poderá solicitar informações adicionais ou reunião antes de qualquer decisão.
      </div>
    </div>
  );
}
