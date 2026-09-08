import React from 'react';
import { PageHero, usePageMeta } from '../components/UI.jsx';

export default function Privacidade() {
  usePageMeta(
    'Política de Privacidade',
    'Política de Privacidade do Instituto Brasileiro de Dados e Inteligência Artificial — IBDIA.'
  );

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Política de Privacidade"
        subtitle="Como o IBDIA trata dados pessoais e informações enviadas por meio de seus canais digitais."
      />

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="space-y-10 text-slate-600 leading-8">
          <div>
            <h2 className="text-2xl font-bold text-[#073B67] mb-4">1. Compromisso com a privacidade</h2>
            <p>
              O Instituto Brasileiro de Dados e Inteligência Artificial — IBDIA valoriza a privacidade,
              a segurança e o tratamento responsável das informações fornecidas por visitantes,
              pesquisadores, parceiros e demais usuários de seus canais institucionais.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#073B67] mb-4">2. Dados que podem ser coletados</h2>
            <p>
              O IBDIA pode receber dados fornecidos voluntariamente pelo usuário, como nome, e-mail,
              telefone, organização, área de atuação, currículo, informações sobre propostas de projetos,
              manifestações de interesse, mensagens de contato e inscrições na newsletter.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#073B67] mb-4">3. Finalidades do tratamento</h2>
            <p>
              As informações recebidas podem ser utilizadas para responder contatos, avaliar propostas,
              organizar processos de colaboração, manter comunicação institucional, enviar informações
              solicitadas, administrar a rede de pesquisadores e aperfeiçoar os serviços e canais do Instituto.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#073B67] mb-4">4. Compartilhamento</h2>
            <p>
              O IBDIA não comercializa dados pessoais. Informações poderão ser compartilhadas com
              fornecedores de tecnologia ou parceiros estritamente quando necessário à operação dos
              serviços, ao atendimento de solicitações ou ao cumprimento de obrigações legais.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#073B67] mb-4">5. Segurança e conservação</h2>
            <p>
              O Instituto busca adotar medidas administrativas e tecnológicas adequadas para proteger
              os dados sob sua responsabilidade e conservar as informações somente pelo período necessário
              às finalidades institucionais e às obrigações aplicáveis.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#073B67] mb-4">6. Direitos do titular</h2>
            <p>
              O titular poderá solicitar informações sobre seus dados, correção, atualização ou exclusão,
              quando aplicável, por meio dos canais institucionais do IBDIA, observadas as hipóteses legais
              de conservação.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#073B67] mb-4">7. Contato</h2>
            <p>
              Solicitações relacionadas à privacidade podem ser encaminhadas para
              {' '}<a className="font-semibold text-[#07899A] hover:underline" href="mailto:ibdiabrasil@gmail.com">
                ibdiabrasil@gmail.com
              </a>.
            </p>
          </div>

          <p className="pt-4 text-sm text-slate-500">
            Última atualização: setembro de 2026.
          </p>
        </div>
      </section>
    </>
  );
}
