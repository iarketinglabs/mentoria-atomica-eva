import React from 'react';
import LegalLayout from '@/components/layout/LegalLayout';

const TermosUso = () => {
  return (
    <LegalLayout title="Termos e Condições de Uso">
      <h2>1. Aceitação</h2>
      <p>
        Bem-vindo à Atomica Marketing. Ao acessar nosso site e utilizar nossos serviços, você concorda integralmente com os termos abaixo descritos.
      </p>

      <h2>2. Propriedade Intelectual</h2>
      <p>
        Todo o conteúdo deste site (incluindo textos, marcas, logotipos, vídeos e imagens) é de propriedade exclusiva da Atomica Marketing. É proibida a reprodução, cópia ou comercialização de qualquer material sem autorização expressa por escrito.
      </p>

      <h2>3. Uso de Inteligência Artificial e Resultados</h2>
      <p>Nossa empresa atua como um laboratório de inovação, utilizando ferramentas de IA Generativa para marketing e automação.</p>
      <ul>
        <li>
          <strong>Natureza da Tecnologia:</strong> A IA é uma ferramenta de suporte e otimização.
        </li>
        <li>
          <strong>Isenção de Garantia de Resultado:</strong> Embora apliquemos as melhores práticas de mercado, não garantimos resultados financeiros específicos (ROI), vendas ou métricas exatas, uma vez que o sucesso depende também da execução estratégica, do mercado e de fatores externos ao nosso controle.
        </li>
      </ul>

      <h2>4. Responsabilidades</h2>
      <p>
        Nós nos esforçamos para manter o site disponível e seguro 24/7, mas não nos responsabilizamos por instabilidades técnicas de terceiros ou da internet. O usuário é responsável pela veracidade das informações fornecidas em nossos formulários.
      </p>

      <h2>5. Foro</h2>
      <p>
        Para dirimir quaisquer controvérsias oriundas deste termo, as partes elegem o foro da comarca da sede da empresa, renunciando a qualquer outro por mais privilegiado que seja.
      </p>
    </LegalLayout>
  );
};

export default TermosUso;
