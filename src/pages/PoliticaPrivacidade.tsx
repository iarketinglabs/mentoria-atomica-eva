import React from 'react';
import LegalLayout from '@/components/layout/LegalLayout';

const PoliticaPrivacidade = () => {
  return (
    <LegalLayout title="Política de Privacidade">
      <h2>Compromisso com a Transparência</h2>
      <p>
        Na Atomica Marketing, privacidade não é apenas uma exigência legal, é um pilar de confiança. Esta política descreve como coletamos, usamos e protegemos suas informações, em total conformidade com a LGPD (Lei Geral de Proteção de Dados - Brasil).
      </p>

      <h2>1. Dados que Coletamos</h2>
      <p>Coletamos apenas as informações estritamente necessárias para a prestação de nossos serviços e comunicação:</p>
      <ul>
        <li>
          <strong>Dados de Identificação:</strong> Nome, e-mail e telefone (coletados quando você preenche nossos formulários voluntariamente).
        </li>
        <li>
          <strong>Dados de Navegação:</strong> Endereço IP, tipo de dispositivo, navegador e localização aproximada.
        </li>
      </ul>

      <h2>2. Finalidade do Uso dos Dados</h2>
      <p>Utilizamos suas informações para:</p>
      <ul>
        <li>Enviar conteúdos educativos, newsletters e propostas comerciais sobre automação e IA.</li>
        <li>Otimizar nossos serviços e personalizar sua experiência.</li>
        <li>Prevenir fraudes e garantir a segurança da plataforma.</li>
      </ul>

      <h2>3. Compartilhamento de Informações</h2>
      <p>
        Nós <strong>NÃO</strong> vendemos seus dados para terceiros. O compartilhamento ocorre apenas com ferramentas parceiras essenciais para nossa operação (como plataformas de CRM, disparo de e-mails e processadores de pagamento), todas devidamente auditadas quanto à segurança.
      </p>

      <h2>4. Seus Direitos (Titular dos Dados)</h2>
      <p>Você pode solicitar a qualquer momento:</p>
      <ul>
        <li>A confirmação da existência de tratamento de dados.</li>
        <li>A correção de dados incompletos ou desatualizados.</li>
        <li>A exclusão total dos seus dados de nossa base.</li>
      </ul>
      <p>
        Para exercer esses direitos, basta responder a qualquer um de nossos e-mails ou entrar em contato pelo nosso suporte oficial.
      </p>
    </LegalLayout>
  );
};

export default PoliticaPrivacidade;
