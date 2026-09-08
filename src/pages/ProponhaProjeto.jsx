import React from 'react';
import { SectionHeader, SubHeader, usePageMeta } from '../components/UI.jsx';
import SubmissionForm, { Field, CheckGrid, inputClass, textareaClass, selectClass } from '../components/SubmissionForm.jsx';

const areas = ['IA e Ciência de Dados','Geotecnologias / GeoAI','Saúde e Biomedicina','Indústria e Manufatura','Cidades e Infraestrutura','Meio Ambiente e Clima','Defesa e Segurança','Educação e Capacitação','Políticas Públicas e Sociedade','Inovação Aberta e Startups','Agronegócio e Agricultura Digital','Energia e Recursos Naturais'];
const programas = ['IBDIA GeoAI','IBDIA Forecast','IBDIA OpenData AI','IBDIA Responsible AI','IBDIA Retail Intelligence','IBDIA AstroAI','Não sei / ainda não definido'];

export default function ProponhaProjeto(){
  usePageMeta('Proponha um Projeto', 'Formulário oficial para submissão de projetos, pesquisas, tecnologias e propostas de colaboração ao IBDIA.');
  return <div className="pt-32 pb-24 container mx-auto px-6 max-w-5xl">
    <SectionHeader title="Proponha um Projeto ao IBDIA" subtitle="Submeta uma ideia, pesquisa, tecnologia ou proposta de colaboração para triagem e possível enquadramento nos Núcleos, Programas e projetos de PD&I do Instituto." />
    <SubmissionForm prefix="PROJ" subject="IBDIA — Nova submissão de projeto" submitLabel="Enviar proposta de projeto">
      <section><SubHeader title="1. Identificação do proponente" />
        <div className="grid md:grid-cols-2 gap-5">
          <Field label="Nome completo" required><input name="nome" required className={inputClass}/></Field>
          <Field label="E-mail" required><input name="email" type="email" required className={inputClass}/></Field>
          <Field label="Telefone / WhatsApp"><input name="telefone" className={inputClass}/></Field>
          <Field label="Instituição / empresa"><input name="instituicao" className={inputClass}/></Field>
          <Field label="Cargo / função"><input name="cargo" className={inputClass}/></Field>
          <Field label="Cidade / Estado / País"><input name="localidade" className={inputClass}/></Field>
          <Field label="LinkedIn"><input name="linkedin" type="url" placeholder="https://" className={inputClass}/></Field>
          <Field label="Lattes / ORCID / Site"><input name="perfil_academico" placeholder="URL ou identificador" className={inputClass}/></Field>
        </div>
      </section>
      <section><SubHeader title="2. Projeto ou proposta" />
        <div className="space-y-5">
          <Field label="Título do projeto" required><input name="titulo_projeto" required className={inputClass}/></Field>
          <Field label="Resumo executivo" required hint="Explique o projeto em linguagem clara, preferencialmente em até 1.500 caracteres."><textarea name="resumo" required maxLength="2000" className={textareaClass}/></Field>
          <Field label="Problema ou oportunidade" required><textarea name="problema" required className={textareaClass}/></Field>
          <Field label="Objetivo principal" required><textarea name="objetivo" required className={textareaClass}/></Field>
          <Field label="Resultados/entregáveis esperados"><textarea name="resultados" className={textareaClass}/></Field>
        </div>
      </section>
      <section><SubHeader title="3. Enquadramento científico e tecnológico" />
        <Field label="Áreas relacionadas"><CheckGrid name="areas" options={areas}/></Field>
        <div className="grid md:grid-cols-2 gap-5 mt-5">
          <Field label="Programa estratégico mais relacionado"><select name="programa" className={selectClass}><option value="">Selecione</option>{programas.map(x=><option key={x}>{x}</option>)}</select></Field>
          <Field label="Estágio atual"><select name="estagio" className={selectClass}><option>Ideia inicial</option><option>Pesquisa em andamento</option><option>PoC</option><option>MVP</option><option>Protótipo funcional</option><option>Validação / Piloto</option><option>Produto existente</option></select></Field>
        </div>
        <div className="space-y-5 mt-5">
          <Field label="Tecnologias, métodos e ferramentas"><textarea name="tecnologias" className={textareaClass}/></Field>
          <Field label="Dados disponíveis"><textarea name="dados" className={textareaClass}/></Field>
          <Field label="Resultados já obtidos"><textarea name="resultados_obtidos" className={textareaClass}/></Field>
        </div>
      </section>
      <section><SubHeader title="4. Colaboração pretendida" />
        <Field label="O que você espera do IBDIA?"><CheckGrid name="expectativa" options={['Pesquisa conjunta','Apoio metodológico/técnico','Desenvolvimento de PoC/MVP','Acesso a pesquisadores/especialistas','Parceria institucional','Busca conjunta de financiamento','Validação e benchmark','Transferência/licenciamento','Publicação científica','Outro']}/></Field>
        <div className="grid md:grid-cols-2 gap-5 mt-5">
          <Field label="Existe equipe atualmente?"><select name="equipe" className={selectClass}><option>Não</option><option>Sim, 1–2 pessoas</option><option>Sim, 3–5 pessoas</option><option>Sim, mais de 5 pessoas</option></select></Field>
          <Field label="Existe financiamento ou orçamento?"><select name="financiamento" className={selectClass}><option>Não</option><option>Em busca de financiamento</option><option>Sim, parcial</option><option>Sim, disponível</option><option>Prefiro discutir em reunião</option></select></Field>
        </div>
      </section>
      <section><SubHeader title="5. Propriedade intelectual, confidencialidade e documentos" />
        <div className="space-y-5">
          <Field label="Existe propriedade intelectual, código, dataset ou tecnologia preexistente?"><textarea name="pi_existente" className={textareaClass}/></Field>
          <Field label="Há necessidade de confidencialidade antes de uma conversa técnica?"><select name="confidencialidade" className={selectClass}><option>Não</option><option>Sim</option><option>A definir</option></select></Field>
          <Field label="Links para documentos, currículo, repositório, demonstração ou materiais"><textarea name="links" placeholder="Cole links do Google Drive, GitHub, site, vídeo, artigo etc." className={textareaClass}/></Field>
          <Field label="Informações adicionais"><textarea name="observacoes" className={textareaClass}/></Field>
        </div>
      </section>
    </SubmissionForm>
  </div>
}
