import React from 'react';
import LegalLayout from '@/components/layout/LegalLayout';

const PoliticaPrivacidade = () => {
  return (
    <LegalLayout title="Política de Privacidade">
      <p style={{ fontSize: '0.875rem', color: '#555555', marginBottom: '1.5rem', fontStyle: 'italic' }}>
        Última atualização: 27 de dezembro de 2025
      </p>

      <h2>Compromisso com a Transparência</h2>
      <p>
        Na Atomica Marketing, privacidade não é apenas uma exigência legal, é um pilar de confiança. Esta política descreve como coletamos, usamos e protegemos suas informações, em total conformidade com a LGPD (Lei Geral de Proteção de Dados - Brasil) e RGPD (Regulamento Geral de Proteção de Dados - Europa).
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

      <h2>3. Uso de Serviços Google e Dados do Usuário</h2>
      <p>
        A Atomica Marketing utiliza serviços do Google Cloud Platform para melhorar a experiência do usuário e otimizar nossos processos internos. Isso inclui:
      </p>
      <ul>
        <li>
          <strong>Google Analytics:</strong> Para análise estatística anónima do tráfego do site, ajudando-nos a entender como os visitantes interagem com o nosso conteúdo.
        </li>
        <li>
          <strong>Google Ads:</strong> Para veicular anúncios personalizados com base nos seus interesses e comportamento de navegação.
        </li>
        <li>
          <strong>Google OAuth:</strong> Para autenticação segura quando você opta por fazer login usando sua conta Google.
        </li>
        <li>
          <strong>APIs do Google Cloud:</strong> Para automação de processos internos e integração com ferramentas de IA.
        </li>
      </ul>
      <p>
        <strong>Importante:</strong> Os dados coletados através destes serviços são processados de acordo com a <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#67BBC0' }}>Política de Privacidade do Google</a> e são utilizados exclusivamente para os fins descritos nesta política. Você pode gerenciar suas preferências de anúncios em <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" style={{ color: '#67BBC0' }}>Configurações de Anúncios do Google</a>.
      </p>

      <h2>4. Compartilhamento de Informações</h2>
      <p>
        Nós <strong>NÃO</strong> vendemos seus dados para terceiros. O compartilhamento ocorre apenas com ferramentas parceiras essenciais para nossa operação (como plataformas de CRM, disparo de e-mails e processadores de pagamento), todas devidamente auditadas quanto à segurança.
      </p>

      <h2>5. Seus Direitos (Titular dos Dados)</h2>
      <p>Você pode solicitar a qualquer momento:</p>
      <ul>
        <li>A confirmação da existência de tratamento de dados.</li>
        <li>A correção de dados incompletos ou desatualizados.</li>
        <li>A exclusão total dos seus dados de nossa base.</li>
        <li>A revogação do consentimento para uso de dados.</li>
      </ul>
      <p>
        Para exercer esses direitos, entre em contato através do email: <a href="mailto:pedroarmbrust@atomica.group" style={{ color: '#67BBC0' }}>pedroarmbrust@atomica.group</a>
      </p>
    </LegalLayout>
  );
};

export default PoliticaPrivacidade;
