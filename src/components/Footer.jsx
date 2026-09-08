import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, ChevronRight, CheckCircle2 } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xzebregv';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    if (!email) return;

    setStatus('sending');

    const data = new FormData();
    data.append('email', email);
    data.append('assunto', 'Inscrição na Newsletter IBDIA');
    data.append('message', 'Nova inscrição na Newsletter do IBDIA.');
    data.append('origem', 'Rodapé do site IBDIA');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-20 mt-20">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <Brain className="text-[#07899A]" />
            <span className="text-xl font-bold">IBDIA</span>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed">
            Inovação científica e tecnológica com impacto social. O futuro da inteligência artificial começa aqui.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <h5 className="font-bold text-sm uppercase tracking-widest text-slate-500">Links</h5>

            <Link to="/sobre" className="block text-slate-400 hover:text-white transition-colors text-sm">
              Sobre
            </Link>

            <Link to="/nucleos" className="block text-slate-400 hover:text-white transition-colors text-sm">
              Núcleos
            </Link>

            <Link to="/projetos-pd" className="block text-slate-400 hover:text-white transition-colors text-sm">
              Programas e Projetos
            </Link>

            <Link to="/pesquisa" className="block text-slate-400 hover:text-white transition-colors text-sm">
              Pesquisa
            </Link>

            <Link to="/biblioteca" className="block text-slate-400 hover:text-white transition-colors text-sm">
              Biblioteca
            </Link>

            <Link to="/participe" className="block text-slate-400 hover:text-white transition-colors text-sm">
              Participe
            </Link>
          </div>

          <div className="space-y-4">
            <h5 className="font-bold text-sm uppercase tracking-widest text-slate-500">Legal</h5>

            <Link
              to="/privacidade"
              className="block text-slate-400 hover:text-white transition-colors text-sm"
            >
              Privacidade
            </Link>

            <Link
              to="/etica"
              className="block text-slate-400 hover:text-white transition-colors text-sm"
            >
              Ética
            </Link>
          </div>
        </div>

        <div>
          <h5 className="font-bold text-sm uppercase tracking-widest text-slate-500 mb-6">
            Newsletter
          </h5>

          {status === 'success' ? (
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2 size={18} className="text-[#07899A]" />
              <span>E-mail cadastrado com sucesso.</span>
            </div>
          ) : (
            <>
              <form onSubmit={handleNewsletterSubmit} className="flex space-x-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Seu e-mail"
                  required
                  className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm w-full outline-none focus:ring-1 focus:ring-[#07899A]"
                />

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  aria-label="Cadastrar e-mail na newsletter"
                  className="bg-[#07899A] px-4 py-2 rounded-lg hover:bg-white hover:text-[#073B67] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={18} />
                </button>
              </form>

              {status === 'sending' && (
                <p className="mt-3 text-xs text-slate-500">Enviando...</p>
              )}

              {status === 'error' && (
                <p className="mt-3 text-xs text-red-400">
                  Não foi possível cadastrar agora. Tente novamente.
                </p>
              )}
            </>
          )}
        </div>
      </div>

      <div className="container mx-auto px-6 pt-12 mt-12 border-t border-slate-800 text-center text-xs text-slate-600">
        © 2026 Instituto Brasileiro de Dados e IA. Atuação remota - Brasil.
      </div>
    </footer>
  );
};

export default Footer;
