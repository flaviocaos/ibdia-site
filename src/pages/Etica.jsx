import React from 'react';
import { PageHero, usePageMeta } from '../components/UI.jsx';

export default function Etica() {
  usePageMeta(
    'Ética e Integridade',
    'Princípios de ética, integridade científica e uso responsável de inteligência artificial no IBDIA.'
  );

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Ética e Integridade"
        subtitle="Princípios que orientam pesquisa, desenvolvimento tecnológico, colaboração e uso responsável de inteligência artificial no IBDIA."
      />

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="space-y-10 text-slate-600 leading-8">
          <div>
            <h2 className="text-2xl font-bold text-[#073B67] mb-4">1. Integridade científica</h2>
            <p>
              O IBDIA busca promover pesquisa e desenvolvimento baseados em rigor metodológico,
              transparência, rastreabilidade de resultados, reconhecimento adequado de autoria e
              rejeição a práticas de fabricação, falsificação ou manipulação indevida de evidências.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#073B67] mb-4">2. Inteligência Artificial responsável</h2>
            <p>
              Projetos envolvendo Inteligência Artificial devem considerar, conforme sua natureza,
              aspectos de segurança, explicabilidade, qualidade de dados, vieses, privacidade,
              supervisão humana, impactos sociais e riscos decorrentes da aplicação da tecnologia.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#073B67] mb-4">3. Ética em dados</h2>
            <p>
              A obtenção, utilização, armazenamento e compartilhamento de dados devem respeitar
              finalidades legítimas, requisitos legais, direitos dos titulares e boas práticas de
              segurança e governança da informação.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#073B67] mb-4">4. Conflitos de interesse</h2>
            <p>
              Pesquisadores, colaboradores e parceiros devem comunicar situações que possam comprometer
              a independência técnica, científica ou institucional de decisões relacionadas a projetos,
              avaliações, publicações ou parcerias.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#073B67] mb-4">5. Respeito e colaboração</h2>
            <p>
              O ambiente de colaboração do IBDIA deve ser pautado por respeito profissional,
              diversidade de perspectivas, boa-fé, responsabilidade, cooperação e tratamento digno
              entre participantes de projetos e atividades institucionais.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#073B67] mb-4">6. Propriedade intelectual e autoria</h2>
            <p>
              Direitos de autoria, propriedade intelectual, confidencialidade e reconhecimento de
              contribuições devem ser tratados de maneira clara e compatível com os instrumentos
              institucionais e acordos aplicáveis a cada projeto.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#073B67] mb-4">7. Comunicação de questões éticas</h2>
            <p>
              Dúvidas ou comunicações relacionadas a ética e integridade podem ser encaminhadas para
              {' '}<a className="font-semibold text-[#07899A] hover:underline" href="mailto:ibdiabrasil@gmail.com">
                ibdiabrasil@gmail.com
              </a>.
            </p>
          </div>

          <p className="pt-4 text-sm text-slate-500">
            Diretrizes institucionais em desenvolvimento — versão pública informativa, setembro de 2026.
          </p>
        </div>
      </section>
    </>
  );
}
