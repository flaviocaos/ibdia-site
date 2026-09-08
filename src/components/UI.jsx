import React, { useState } from 'react';
import { CheckCircle2, Brain, Globe, BookOpen, ShieldCheck, Cpu, Building2, Leaf, ShieldAlert, Laptop, Activity, Star, Users, Sprout, Zap, HeartPulse, Factory, Landmark, Lightbulb } from 'lucide-react';

const ICONS = {
  Brain, Globe, BookOpen, ShieldCheck, Cpu, Building2, Leaf, ShieldAlert,
  Laptop, Activity, Star, Users, Sprout, Zap, HeartPulse, Factory, Landmark, Lightbulb,
};


export const PageHero = ({ eyebrow = 'IBDIA', title, subtitle, centered = false, stats = [] }) => (
  <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#073B67] via-[#075A78] to-[#07899A]">
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <div className="absolute -right-24 -top-28 h-96 w-96 rounded-full border border-white/30" />
      <div className="absolute right-36 top-24 h-52 w-52 rounded-full border border-white/20" />
    </div>
    <div className={`relative mx-auto max-w-7xl px-6 pb-16 pt-36 lg:px-8 lg:pb-20 lg:pt-40 ${centered ? 'text-center' : ''}`}>
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100">
        {eyebrow}
      </p>
      <h1 className={`text-4xl font-bold tracking-tight text-white md:text-5xl ${centered ? 'mx-auto max-w-5xl' : 'max-w-5xl'}`}>
        {title}
      </h1>
      {subtitle && (
        <p className={`mt-6 text-lg leading-8 text-slate-100 ${centered ? 'mx-auto max-w-4xl' : 'max-w-4xl'}`}>
          {subtitle}
        </p>
      )}
      {stats.length > 0 && (
        <div className={`mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4 ${centered ? 'mx-auto max-w-4xl' : 'max-w-4xl'}`}>
          {stats.map(([value, label]) => (
            <div key={`${value}-${label}`} className="rounded-2xl border border-white/15 bg-white/10 p-4 text-left backdrop-blur">
              <div className="text-2xl font-bold text-white">{value}</div>
              <div className="mt-1 text-xs leading-5 text-slate-200">{label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  </section>
);

export const SectionHeader = ({ title, subtitle, centered = false }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <div className={`w-14 h-1 bg-[#07899A] mb-5 rounded-full ${centered ? 'mx-auto' : ''}`}></div>
    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#073B67] mb-4">{title}</h1>
    {subtitle && <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mx-auto">{subtitle}</p>}
  </div>
);

export const SubHeader = ({ title, subtitle }) => (
  <div className="mb-8">
    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#073B67] mb-2">{title}</h2>
    {subtitle && <p className="text-slate-600 max-w-2xl">{subtitle}</p>}
  </div>
);

export const NucleoCard = ({ codigo, icon, title, desc, linhas = [], entregaveis = [] }) => {
  const IconComponent = ICONS[icon] || Brain;
  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
      <div className="flex items-start justify-between gap-4 mb-6">
        <div className="w-14 h-14 bg-[#EAF4F6] text-[#073B67] rounded-2xl flex items-center justify-center group-hover:bg-[#073B67] group-hover:text-white transition-colors">
          <IconComponent size={28} />
        </div>
        {codigo && (
          <span className="inline-flex items-center rounded-full bg-[#073B67] px-3 py-1 text-xs font-bold tracking-wider text-white">
            {codigo}
          </span>
        )}
      </div>
      <h3 className="text-xl font-bold text-[#073B67] mb-3">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-6">{desc}</p>
      {linhas.length > 0 && (
        <div className="pt-4 border-t border-slate-100">
          <p className="text-xs font-bold text-[#07899A] uppercase tracking-wider mb-2">Linhas de pesquisa</p>
          <ul className="text-xs text-slate-500 space-y-1 mb-4">
            {linhas.map((item, i) => <li key={i}>• {item}</li>)}
          </ul>
        </div>
      )}
      {entregaveis.length > 0 && (
        <div className="pt-2">
          <p className="text-xs font-bold text-[#073B67] uppercase tracking-wider mb-2">Aplicações e entregáveis</p>
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
        <CheckCircle2 size={18} className="text-[#07899A] flex-shrink-0 mt-0.5" />
        <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
      </li>
    ))}
  </ul>
);

export const InfoCard = ({ icon: IconComponent, title, children }) => (
  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
    <div className="w-12 h-12 bg-[#EAF4F6] text-[#073B67] rounded-xl flex items-center justify-center mb-5">
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
        <CheckCircle2 size={48} className="text-[#07899A] mx-auto mb-4" />
        <h4 className="text-xl font-bold text-slate-900 mb-2">Mensagem enviada!</h4>
        <p className="text-slate-500">Obrigado pelo contato — responderemos em breve pelo e-mail informado.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-bold text-[#073B67] hover:text-[#07899A] transition-colors"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <input type="text" name="name" placeholder="Nome" required className="w-full px-5 py-3.5 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[#07899A] outline-none" />
        <input type="email" name="email" placeholder="E-mail" required className="w-full px-5 py-3.5 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[#07899A] outline-none" />
      </div>
      <select name="assunto" className="w-full px-5 py-3.5 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[#07899A] outline-none text-slate-500">
        <option>Parceria Corporativa</option>
        <option>Investigação Académica</option>
        <option>Imprensa</option>
      </select>
      <textarea name="message" placeholder="Mensagem" required className="w-full px-5 py-3.5 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[#07899A] outline-none h-32"></textarea>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full py-4 bg-[#073B67] text-white font-bold rounded-xl shadow-lg hover:bg-slate-800 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
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
