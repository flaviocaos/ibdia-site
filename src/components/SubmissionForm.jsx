import React, { useMemo, useState } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xzebregv';

const makeCode = (prefix) => {
  const now = new Date();
  const y = now.getFullYear();
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `IBDIA-${prefix}-${y}-${rand}`;
};

export const Field = ({ label, required = false, hint, children }) => (
  <label className="block">
    <span className="block text-sm font-bold text-slate-800 mb-2">
      {label}{required && <span className="text-[#2EC4B6] ml-1">*</span>}
    </span>
    {children}
    {hint && <span className="block text-xs text-slate-500 mt-2 leading-relaxed">{hint}</span>}
  </label>
);

export const inputClass = 'w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none text-slate-800 placeholder:text-slate-400';
export const textareaClass = `${inputClass} min-h-32 resize-y`;
export const selectClass = `${inputClass} appearance-none`;

export const CheckGrid = ({ name, options }) => (
  <div className="grid md:grid-cols-2 gap-3">
    {options.map((option) => (
      <label key={option} className="flex items-start gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50 hover:border-[#2EC4B6] transition-colors cursor-pointer">
        <input type="checkbox" name={name} value={option} className="mt-1 accent-[#0D3B66]" />
        <span className="text-sm text-slate-700 leading-relaxed">{option}</span>
      </label>
    ))}
  </div>
);

export default function SubmissionForm({ prefix, subject, children, submitLabel = 'Enviar submissão' }) {
  const [status, setStatus] = useState('idle');
  const code = useMemo(() => makeCode(prefix), [prefix]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
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
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl p-8 md:p-12 text-center">
        <CheckCircle2 size={52} className="text-[#2EC4B6] mx-auto mb-5" />
        <h2 className="text-2xl font-black text-slate-900 mb-3">Submissão recebida</h2>
        <p className="text-slate-600 max-w-xl mx-auto leading-relaxed">
          Obrigado. Sua submissão foi encaminhada ao IBDIA para triagem institucional. O envio não representa aprovação, vínculo, contratação ou compromisso de financiamento.
        </p>
        <div className="mt-6 inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-[#0D3B66] text-sm font-bold">
          Referência: {code}
        </div>
        <button onClick={() => setStatus('idle')} className="block mx-auto mt-7 text-sm font-bold text-[#0D3B66] hover:text-[#2EC4B6]">
          Enviar nova submissão
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-[2rem] border border-slate-100 shadow-xl p-6 md:p-10 space-y-8">
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="codigo_referencia" value={code} />
      {children}
      <div className="pt-4 border-t border-slate-100">
        <label className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
          <input type="checkbox" name="declaracao" required className="mt-1 accent-[#0D3B66]" />
          <span>
            Declaro que as informações fornecidas são verdadeiras e autorizo o IBDIA a utilizá-las exclusivamente para análise da submissão, contato e organização institucional, observadas as regras aplicáveis de privacidade e confidencialidade.
          </span>
        </label>
        <p className="text-xs text-slate-500 mt-4 leading-relaxed">
          Importante: o envio deste formulário não cria vínculo associativo, empregatício, societário, contratual ou obrigação de financiamento pelo IBDIA.
        </p>
      </div>
      <button type="submit" disabled={status === 'sending'} className="w-full py-4 bg-[#0D3B66] text-white font-bold rounded-xl shadow-lg hover:bg-slate-800 transition-all disabled:opacity-60 disabled:cursor-not-allowed">
        {status === 'sending' ? 'Enviando...' : submitLabel}
      </button>
      {status === 'error' && (
        <div className="flex gap-3 items-start rounded-xl bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
          <span>Não foi possível enviar agora. Tente novamente ou escreva para <a href="mailto:ibdiabrasil@gmail.com" className="underline font-bold">ibdiabrasil@gmail.com</a>.</span>
        </div>
      )}
    </form>
  );
}
