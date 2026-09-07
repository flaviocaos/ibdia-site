import React from 'react';
import { SectionHeader, SubHeader, usePageMeta } from '../components/UI.jsx';
import SubmissionForm, { Field, CheckGrid, inputClass, textareaClass, selectClass } from '../components/SubmissionForm.jsx';

const categorias = ['Pesquisador Colaborador','Pesquisador Associado','Pesquisador Sênior','Jovem Pesquisador','Especialista Colaborador','Pesquisador Visitante / Visiting Researcher','Líder de Projeto (mediante avaliação)','Outra modalidade'];
const nucleos = ['IA e Ciência de Dados','Geotecnologias e Inteligência Territorial','Educação e Capacitação','Inovação, Parcerias e Transferência Tecnológica','Ética, Governança e Regulação de IA','Engenharia, Dados e Infraestrutura Tecnológica','Negócios, Varejo e Indústria 4.0','Meio Ambiente, Mineração e Energia','Defesa, Segurança e Inteligência','Políticas Públicas, Infraestrutura, Saneamento e Cidades Inteligentes','Saúde, Biotecnologia e Ciências da Vida','Ciências Fundamentais, Astronomia, Astrofísica e Cosmologia'];

export default function RedeIBDIA(){
 usePageMeta('Rede IBDIA', 'Candidatura à Rede IBDIA de pesquisadores, profissionais, estudantes e especialistas.');
 return <div className="pt-32 pb-24 container mx-auto px-6 max-w-5xl">
  <SectionHeader title="Faça parte da Rede IBDIA" subtitle="Manifestação de interesse para pesquisadores, profissionais, docentes, estudantes e especialistas que desejam colaborar com projetos, Núcleos e Programas do Instituto." />
  <SubmissionForm prefix="REDE" subject="IBDIA — Nova candidatura à Rede IBDIA" submitLabel="Enviar candidatura">
   <section><SubHeader title="1. Dados profissionais" />
    <div className="grid md:grid-cols-2 gap-5">
      <Field label="Nome completo" required><input name="nome" required className={inputClass}/></Field>
      <Field label="E-mail" required><input name="email" type="email" required className={inputClass}/></Field>
      <Field label="Telefone / WhatsApp"><input name="telefone" className={inputClass}/></Field>
      <Field label="Cidade / Estado / País"><input name="localidade" className={inputClass}/></Field>
      <Field label="Instituição / empresa atual"><input name="instituicao" className={inputClass}/></Field>
      <Field label="Cargo / função atual"><input name="cargo" className={inputClass}/></Field>
      <Field label="LinkedIn" required><input name="linkedin" type="url" required placeholder="https://" className={inputClass}/></Field>
      <Field label="Lattes / ORCID / site"><input name="lattes_orcid" className={inputClass}/></Field>
    </div>
   </section>
   <section><SubHeader title="2. Formação e experiência" />
    <div className="grid md:grid-cols-2 gap-5">
      <Field label="Maior titulação"><select name="titulacao" className={selectClass}><option>Graduação em andamento</option><option>Graduação</option><option>Especialização / MBA</option><option>Mestrado em andamento</option><option>Mestrado</option><option>Doutorado em andamento</option><option>Doutorado</option><option>Pós-doutorado</option><option>Outro</option></select></Field>
      <Field label="Área principal de formação"><input name="area_formacao" className={inputClass}/></Field>
    </div>
    <div className="space-y-5 mt-5">
      <Field label="Resumo da experiência profissional/científica" required><textarea name="experiencia" required className={textareaClass}/></Field>
      <Field label="Tecnologias, métodos e competências"><textarea name="competencias" className={textareaClass}/></Field>
      <Field label="Publicações, projetos ou realizações relevantes"><textarea name="publicacoes_projetos" className={textareaClass}/></Field>
    </div>
   </section>
   <section><SubHeader title="3. Interesse no IBDIA" />
     <Field label="Categoria(s) de interesse"><CheckGrid name="categorias_interesse" options={categorias}/></Field>
     <div className="mt-6"><Field label="Núcleos de maior interesse"><CheckGrid name="nucleos_interesse" options={nucleos}/></Field></div>
     <div className="mt-6"><Field label="Como gostaria de colaborar?"><CheckGrid name="formas_colaboracao" options={['Participar de projetos de PD&I','Propor novas pesquisas','Revisar trabalhos e metodologias','Orientar jovens pesquisadores','Desenvolver software/modelos/dados','Participar de publicações','Apoiar eventos e formação','Conectar parceiros','Liderar projeto quando houver aderência','Outro']}/></Field></div>
   </section>
   <section><SubHeader title="4. Disponibilidade e vínculo" />
    <div className="grid md:grid-cols-2 gap-5">
      <Field label="Disponibilidade estimada"><select name="disponibilidade" className={selectClass}><option>Até 2 h/semana</option><option>2–5 h/semana</option><option>5–10 h/semana</option><option>Mais de 10 h/semana</option><option>Por projeto / a combinar</option></select></Field>
      <Field label="Modalidade preferida"><select name="modalidade" className={selectClass}><option>Colaboração voluntária/associada</option><option>Bolsa quando disponível</option><option>Projeto financiado</option><option>Prestação técnica por projeto</option><option>Pesquisa cooperativa</option><option>A combinar</option></select></Field>
    </div>
    <div className="space-y-5 mt-5">
      <Field label="Por que deseja participar da Rede IBDIA?" required><textarea name="motivacao" required className={textareaClass}/></Field>
      <Field label="Links para currículo, portfólio, GitHub, publicações ou outros materiais"><textarea name="links" className={textareaClass}/></Field>
      <Field label="Observações adicionais"><textarea name="observacoes" className={textareaClass}/></Field>
    </div>
   </section>
  </SubmissionForm>
 </div>
}
