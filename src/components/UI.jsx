import React, { useState } from 'react';
import { CheckCircle2, Brain, Globe, BookOpen, ShieldCheck, Cpu, Building2, Leaf, ShieldAlert, Laptop, Activity, Star, Users } from 'lucide-react';

const ICONS = {
  Brain, Globe, BookOpen, ShieldCheck, Cpu, Building2, Leaf, ShieldAlert,
  Laptop, Activity, Star, Users,
};

export const SectionHeader = ({ title, subtitle, centered = false }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <div className={`w-12 h-1 bg-[#2EC4B6] mb-4 ${centered ? 'mx-auto' : ''}`}></div>
    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">{title}</h1>
    {subtitle && <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mx-auto">{subtitle}</p>}
  </div>
);

export const SubHeader = ({ title, subtitle }) => (
  <div className="mb-8">
    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{title}</h2>
    {subtitle && <p className="text-slate-600 max-w-2xl">{subtitle}</p>}
  </div>
);

export const NucleoCard = ({ icon, title, desc, linhas = [], entregaveis = [] }) => {
  const IconComponent = ICONS[icon] || Brain;
  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
      <div className="w-14 h-14 bg-slate-50 text-[#0D3B66] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0D3B66] group-hover:text-white transition-colors">
        <IconComponent size={28} />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-6">{desc}</p>
      {linhas.length > 0 && (
        <div className="pt-4 border-t border-slate-100">
          <p className="text-xs font-bold text-[#2EC4B6] uppercase tracking-wider mb-2">Linhas de pesquisa</p>
          <ul className="text-xs text-slate-500 space-y-1 mb-4">
            {linhas.map((item, i) => <li key={i}>• {item}</li>)}
          </ul>
        </div>
      )}
      {entregaveis.length > 0 && (
        <div className="pt-2">
          <p className="text-xs font-bold text-[#0D3B66] uppercase tracking-wider mb-2">Aplicações e entregáveis</p>
          <ul className="text-xs text-slate-500 space-y-1">
            {entregaveis.map((item, i) => <li key={i}>• {item}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
};

export const Tag = ({ children }) => (
  <span className="inline-block bg-slate-50 border border-slate-100 text-slate-600 text-sm px-4 py-2 rounded-full">
    {children}
  </span>
);

export const CheckList = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item, i) => (
      <li key={i} className="flex items-start space-x-3">
        <CheckCircle2 size={18} className="text-[#2EC4B6] flex-shrink-0 mt-0.5" />
        <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
      </li>
    ))}
  </ul>
);

export const InfoCard = ({ icon: IconComponent, title, children }) => (
  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
    <div className="w-12 h-12 bg-blue-50 text-[#0D3B66] rounded-xl flex items-center justify-center mb-5">
      <IconComponent size={22} />
    </div>
    <h4 className="text-lg font-bold text-slate-900 mb-4">{title}</h4>
    {children}
  </div>
);

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xzebregv';

export const ContactForm = () => {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    const data = new FormData(form);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <CheckCircle2 size={48} className="text-[#2EC4B6] mx-auto mb-4" />
        <h4 className="text-xl font-bold text-slate-900 mb-2">Mensagem enviada!</h4>
        <p className="text-slate-500">Obrigado pelo contato — responderemos em breve pelo e-mail informado.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-bold text-[#0D3B66] hover:text-[#2EC4B6] transition-colors"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <input type="text" name="name" placeholder="Nome" required className="w-full px-5 py-3.5 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[#2EC4B6] outline-none" />
        <input type="email" name="email" placeholder="E-mail" required className="w-full px-5 py-3.5 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[#2EC4B6] outline-none" />
      </div>
      <select name="assunto" className="w-full px-5 py-3.5 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[#2EC4B6] outline-none text-slate-500">
        <option>Parceria Corporativa</option>
        <option>Investigação Académica</option>
        <option>Imprensa</option>
      </select>
      <textarea name="message" placeholder="Mensagem" required className="w-full px-5 py-3.5 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[#2EC4B6] outline-none h-32"></textarea>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full py-4 bg-[#0D3B66] text-white font-bold rounded-xl shadow-lg hover:bg-slate-800 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
      </button>
      {status === 'error' && (
        <p className="text-sm text-red-500 text-center">
          Não foi possível enviar agora. Tente novamente ou escreva direto para{' '}
          <a href="mailto:ibdiabrasil@gmail.com" className="underline">ibdiabrasil@gmail.com</a>.
        </p>
      )}
    </form>
  );
};

// Atualiza título da aba e meta description — ajuda no SEO de cada página
export const usePageMeta = (title, description) => {
  React.useEffect(() => {
    document.title = title ? `${title} | IBDIA` : 'IBDIA | Instituto Brasileiro de Dados e Inteligência Artificial';
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', description);
    }
  }, [title, description]);
};
