import React from 'react';
import { Link } from 'react-router-dom';

interface LegalLayoutProps {
  children: React.ReactNode;
  title: string;
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ children, title }) => {
  return (
    <div style={{ fontFamily: "'Jost', sans-serif", backgroundColor: '#FCF9F2', color: '#1B1B1B', margin: 0, padding: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        .legal-content h2 {
          font-family: 'Caprasimo', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #1B1B1B;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .legal-content h2:first-child {
          margin-top: 0;
        }
        .legal-content p {
          font-size: 1rem;
          line-height: 1.8;
          color: #3D3D3D;
          margin-bottom: 1rem;
        }
        .legal-content ul {
          list-style: none;
          padding: 0;
          margin: 1rem 0;
        }
        .legal-content ul li {
          padding-left: 1.5rem;
          position: relative;
          margin-bottom: 0.75rem;
          line-height: 1.6;
          color: #3D3D3D;
        }
        .legal-content ul li::before {
          content: '•';
          color: #67BBC0;
          font-weight: bold;
          position: absolute;
          left: 0;
        }
        .legal-content strong {
          color: #1B1B1B;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #67BBC0;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s ease;
        }
        .back-link:hover {
          color: #1B1B1B;
        }
      `}</style>
      
      {/* Header */}
      <header style={{ backgroundColor: '#E5DBC7', padding: '1rem 2rem', borderBottom: '2px solid #3D3D3D' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span style={{ fontFamily: "'Caprasimo', serif", fontSize: '1.5rem', color: '#1B1B1B' }}>Atomica Marketing</span>
          </Link>
          <Link to="/" className="back-link">
            ← Voltar à página principal
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: "'Caprasimo', serif", fontSize: '2.5rem', fontWeight: 700, color: '#1B1B1B', marginBottom: '2rem', textAlign: 'center', textShadow: '3px 3px 0px #A8DEE0' }}>
            {title}
          </h1>
          <div className="legal-content" style={{ backgroundColor: '#FCF9F2', padding: '2rem', border: '2px solid #E5DBC7', borderRadius: '8px' }}>
            {children}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#E5DBC7', padding: '2rem 1rem', fontSize: '0.875rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ margin: '0.25rem 0', color: '#1B1B1B', fontWeight: 600 }}>Atomica Unipessoal Lda. | NIF: 510000000 | Sede: Lisboa, Portugal</p>
          <div style={{ margin: '0.5rem 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/politica-cookies" style={{ color: '#1B1B1B', textDecoration: 'none' }}>RGPD e Cookies</Link>
            <Link to="/politica-privacidade" style={{ color: '#1B1B1B', textDecoration: 'none' }}>Política de Privacidade</Link>
            <Link to="/termos-de-uso" style={{ color: '#1B1B1B', textDecoration: 'none' }}>Termos & Condições</Link>
          </div>
          <p style={{ margin: '0.25rem 0', color: '#1B1B1B' }}>Contato: <a href="mailto:geral@criacomia.com" style={{ color: '#1B1B1B', textDecoration: 'none' }}>geral@criacomia.com</a></p>
          <p style={{ margin: '0.25rem 0', color: '#555555' }}>© 2025 Atomica | Todos os direitos reservados.</p>
          <p style={{ maxWidth: '800px', margin: '1rem auto 0', color: '#555555', lineHeight: 1.4, textAlign: 'center' }}>
            Disclaimer: Esta mentoria é uma ferramenta de capacitação educacional. Os resultados individuais podem variar e dependem do empenho e da aplicação de cada aluno. Este conteúdo não substitui consultoria jurídica, contabilística ou fiscal.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LegalLayout;
