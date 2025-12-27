import React from 'react';
import LegalLayout from '@/components/layout/LegalLayout';

const PoliticaCookies = () => {
  return (
    <LegalLayout title="Política de Cookies e Conformidade (RGPD/LGPD)">
      <h2>1. O que são Cookies?</h2>
      <p>
        Cookies são pequenos arquivos de texto salvos no seu navegador quando você visita o site da Atomica Marketing. Eles funcionam como a "memória" do site, permitindo que reconheçamos você e melhoremos sua experiência de navegação. Não são vírus e não capturam informações que você não nos forneceu voluntariamente.
      </p>

      <h2>2. Categorias de Cookies que utilizamos</h2>
      <p>Classificamos nossos cookies em três níveis de necessidade:</p>
      <ul>
        <li>
          <strong>Essenciais:</strong> Indispensáveis para o site funcionar corretamente. Sem eles, certas funcionalidades podem falhar.
        </li>
        <li>
          <strong>Analíticos (Estatísticos):</strong> Usamos ferramentas como Google Analytics para entender quantos visitantes recebemos, quais páginas são mais acessadas e de onde vêm nossos acessos. Esses dados são anônimos.
        </li>
        <li>
          <strong>Marketing e Rastreamento:</strong> Utilizamos pixels de plataformas como Meta (Facebook/Instagram) e Google Ads. Eles nos ajudam a mostrar anúncios relevantes para você baseados no seu interesse em soluções de IA e automação, evitando que você veja propaganda repetitiva ou irrelevante.
        </li>
      </ul>

      <h2>3. Controle do Usuário</h2>
      <p>
        Você tem total controle sobre seus dados. Ao acessar nosso site, você pode gerenciar suas preferências de cookies. Além disso, a qualquer momento, você pode limpar o histórico de cookies e cache nas configurações do seu navegador (Chrome, Safari, Firefox, etc.).
      </p>

      <h2>4. Dúvidas sobre Dados?</h2>
      <p>
        Se você tiver qualquer dúvida sobre como processamos seus dados de navegação, entre em contato conosco através do nosso canal oficial de suporte.
      </p>
    </LegalLayout>
  );
};

export default PoliticaCookies;
