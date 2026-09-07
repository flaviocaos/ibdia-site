import React from 'react';
import { SectionHeader, SubHeader, usePageMeta } from '../components/UI.jsx';
import SubmissionForm, { Field, CheckGrid, inputClass, textareaClass, selectClass } from '../components/SubmissionForm.jsx';

export default function ParceriaInstitucional(){
 usePageMeta('Parceria Institucional', 'Proposta de parceria científica, tecnológica e empresarial com o IBDIA.');
 return <div className="pt-32 pb-24 container mx-auto px-6 max-w-5xl">
  <SectionHeader title="Seja um Parceiro do IBDIA" subtitle="Empresas, universidades, ICTs, startups, governos e organizações podem propor pesquisa cooperativa, PD&I, pilotos, inovação aberta, capacitação e transferência tecnológica." />
  <SubmissionForm prefix="PARC" subject="IBDIA — Nova proposta de parceria institucional" submitLabel="Enviar proposta de parceria">
   <section><SubHeader title="1. Organização e responsável" />
    <div className="grid md:grid-cols-2 gap-5">
      <Field label="Nome da organização" required><input name="organizacao" required className={inputClass}/></Field>
      <Field label="Tipo de organização"><select name="tipo_organizacao" className={selectClass}><option>Empresa</option><option>Universidade / ICT</option><option>Startup</option><option>Governo / órgão público</option><option>ONG / fundação</option><option>Agência de fomento</option><option>Organização internacional</option><option>Outra</option></select></Field>
      <Field label="Nome do responsável" required><input name="responsavel" required className={inputClass}/></Field>
      <Field label="Cargo / função"><input name="cargo" className={inputClass}/></Field>
      <Field label="E-mail" required><input name="email" type="email" required className={inputClass}/></Field>
      <Field label="Telefone / WhatsApp"><input name="telefone" className={inputClass}/></Field>
      <Field label="Site da organização"><input name="site" type="url" placeholder="https://" className={inputClass}/></Field>
      <Field label="Cidade / Estado / País"><input name="localidade" className={inputClass}/></Field>
    </div>
   </section>
   <section><SubHeader title="2. Interesse da parceria" />
    <Field label="Modalidades de interesse"><CheckGrid name="modalidades" options={['Pesquisa cooperativa','PD&I contratado','Co-desenvolvimento','PoC / MVP','Piloto com dados reais','Inovação aberta','Licenciamento / transferência tecnológica','Capacitação / workshop','Submissão conjunta a edital / grant','Apoio institucional / patrocínio','Dados / infraestrutura / cloud','Outro']}/></Field>
    <div className="space-y-5 mt-6">
      <Field label="Desafio, problema ou oportunidade" required><textarea name="desafio" required className={textareaClass}/></Field>
      <Field label="Resultado esperado da parceria"><textarea name="resultado_esperado" className={textareaClass}/></Field>
      <Field label="Áreas/tecnologias relacionadas"><textarea name="areas_tecnologias" placeholder="Ex.: GeoAI, forecasting, RAG, dados públicos, Responsible AI..." className={textareaClass}/></Field>
    </div>
   </section>
   <section><SubHeader title="3. Recursos e condições" />
    <div className="grid md:grid-cols-2 gap-5">
      <Field label="Há dados disponíveis?"><select name="dados_disponiveis" className={selectClass}><option>Não</option><option>Sim</option><option>Parcialmente</option><option>A definir</option></select></Field>
      <Field label="Há equipe técnica envolvida?"><select name="equipe_tecnica" className={selectClass}><option>Não</option><option>Sim</option><option>Em formação</option><option>A definir</option></select></Field>
      <Field label="Existe orçamento / financiamento?"><select name="orcamento" className={selectClass}><option>Não definido</option><option>Em avaliação</option><option>Sim, parcial</option><option>Sim, disponível</option><option>Depende de edital/grant</option></select></Field>
      <Field label="Prazo desejado"><select name="prazo" className={selectClass}><option>Sem prazo definido</option><option>Até 3 meses</option><option>3–6 meses</option><option>6–12 meses</option><option>Mais de 12 meses</option></select></Field>
    </div>
    <div className="space-y-5 mt-5">
      <Field label="Restrições de confidencialidade, dados ou propriedade intelectual"><textarea name="restricoes" className={textareaClass}/></Field>
      <Field label="Links para documentos, briefing, apresentação ou materiais"><textarea name="links" className={textareaClass}/></Field>
      <Field label="Observações adicionais"><textarea name="observacoes" className={textareaClass}/></Field>
    </div>
   </section>
  </SubmissionForm>
 </div>
}
