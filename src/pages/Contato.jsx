import React from 'react';
import { Mail, MapPin, Linkedin, Github, MessageCircle } from 'lucide-react';
import { SectionHeader, ContactForm, usePageMeta } from '../components/UI.jsx';

const Contato = () => {
  usePageMeta(
    'Contato',
    'Entre em contato com o IBDIA para parcerias de pesquisa, projetos corporativos e visitas institucionais.'
  );

  return (
    <div className="pt-32 pb-24 container mx-auto px-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeader title="Vamos conversar?" subtitle="Estamos abertos a parcerias de investigação, projetos corporativos e visitas institucionais." />
          <div className="space-y-8 mt-10 text-slate-600">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-50 text-[#0D3B66] rounded-xl"><MapPin /></div>
              <p>Atuação remota - Brasil</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-50 text-[#0D3B66] rounded-xl"><Mail /></div>
              <a href="mailto:ibdiabrasil@gmail.com" className="hover:text-[#0D3B66] transition-colors">ibdiabrasil@gmail.com</a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-50 text-[#0D3B66] rounded-xl"><MessageCircle /></div>
              <a href="https://wa.me/5548991711308" target="_blank" rel="noopener noreferrer" className="hover:text-[#0D3B66] transition-colors">+55 48 99171-1308</a>
            </div>
            <div className="flex space-x-4 pt-4">
              <a href="https://www.linkedin.com/in/flavio-antonio-oliveira-da-silva" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 rounded-full hover:bg-[#0D3B66] hover:text-white transition-all"><Linkedin /></a>
              <a href="https://github.com/flaviocaos" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 rounded-full hover:bg-[#0D3B66] hover:text-white transition-all"><Github /></a>
            </div>
          </div>
        </div>
        <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contato;
