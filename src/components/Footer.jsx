import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ChevronRight } from 'lucide-react';

const Footer = () => (
  <footer className="bg-[#0B1F33] text-white py-20 mt-20">
    <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
      <div>
        <div className="flex items-center space-x-3 mb-6">
          <Brain className="text-[#07899A]" />
          <span className="text-xl font-bold">IBDIA</span>
        </div>

        <p className="text-[#AFC3D3] text-sm leading-relaxed">
          Inovação científica e tecnológica com impacto social. O futuro da inteligência artificial começa aqui.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <h5 className="font-bold text-sm uppercase tracking-widest text-[#6F8BA1]">
            Links
          </h5>

          <Link
            to="/sobre"
            className="block text-[#AFC3D3] hover:text-[#24B8C7] transition-colors text-sm"
          >
            Sobre
          </Link>

          <Link
            to="/nucleos"
            className="block text-[#AFC3D3] hover:text-[#24B8C7] transition-colors text-sm"
          >
            Núcleos
          </Link>

          <Link
            to="/projetos-pd"
            className="block text-[#AFC3D3] hover:text-[#24B8C7] transition-colors text-sm"
          >
            Programas e Projetos
          </Link>

          <Link
            to="/pesquisa"
            className="block text-[#AFC3D3] hover:text-[#24B8C7] transition-colors text-sm"
          >
            Pesquisa
          </Link>

          <Link
            to="/biblioteca"
            className="block text-[#AFC3D3] hover:text-[#24B8C7] transition-colors text-sm"
          >
            Biblioteca
          </Link>

          <Link
            to="/participe"
            className="block text-[#AFC3D3] hover:text-[#24B8C7] transition-colors text-sm"
          >
            Participe
          </Link>
        </div>

        <div className="space-y-4">
          <h5 className="font-bold text-sm uppercase tracking-widest text-[#6F8BA1]">
            Legal
          </h5>

          <button className="block text-[#AFC3D3] hover:text-[#24B8C7] transition-colors text-sm">
            Privacidade
          </button>

          <button className="block text-[#AFC3D3] hover:text-[#24B8C7] transition-colors text-sm">
            Ética
          </button>
        </div>
      </div>

      <div>
        <h5 className="font-bold text-sm uppercase tracking-widest text-[#6F8BA1] mb-6">
          Newsletter
        </h5>

        <div className="flex space-x-2">
          <input
            type="email"
            placeholder="Seu e-mail"
            className="bg-[#142A40] border border-[#24425C] rounded-lg px-4 py-2 text-sm w-full outline-none placeholder:text-[#8097A9] focus:ring-1 focus:ring-[#07899A]"
          />

          <button className="bg-[#07899A] px-4 py-2 rounded-lg hover:bg-[#24B8C7] transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-6 pt-12 mt-12 border-t border-[#24425C] text-center text-xs text-[#6F8BA1]">
      © 2026 Instituto Brasileiro de Dados e Inteligência Artificial — IBDIA. Todos os direitos reservados.
    </div>
  </footer>
);

export default Footer;
