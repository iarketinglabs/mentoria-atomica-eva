import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [language, setLanguage] = useState<'pt-PT' | 'pt-BR'>('pt-PT');
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [selectedMission, setSelectedMission] = useState<string>('');
  return (
    <div style={{ fontFamily: "'Jost', sans-serif", backgroundColor: '#FCF9F2', color: '#1B1B1B', margin: 0, padding: 0 }}>
      <style>{`
        /* Helper to balance text lines */
        .text-balance { text-wrap: balance; }

        /* Smooth scroll animation */
        html {
          scroll-behavior: smooth;
        }

        /* =========================================================
         EFEITOS VISUAIS DO GUIA DE MARCA
        ============================================================ */
        
        .bg-grain-pulp {
            background-color: #FCF9F2; /* Creme-100 */
            position: relative;
            overflow: hidden; /* To contain the pseudo-element */
        }
        .bg-grain-pulp::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            width: 100%; height: 100%;
            pointer-events: none;
            background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNyIgbnVtT2N0YXZlcz0iMiIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDciLz48L3N2Zz4=');
            z-index: 0;
        }
        section > div, section > h1, section > h2, section > h3, section > h4, section > p, section > a {
            position: relative; z-index: 1;
        }
        
        .card-raised {
            box-shadow: 6px 6px 0px #A9A9A9;
            border: 2px solid #3D3D3D;
            transition: transform .15s ease, box-shadow .15s ease;
            background-color: #FCF9F2;
            border-radius: 4px;
        }
        .card-raised:hover {
            transform: translate(-2px, -2px);
            box-shadow: 4px 4px 0 #3D3D3D;
        }

        /* Remove hover animation for specific cards */
        .how-it-works-cards .card-raised:hover,
        .bonuses-community .card-raised:hover,
        .social-proof .testimonial:hover,
        .faq-cta .value-stack.card-raised:hover {
            transform: none;
            box-shadow: 6px 6px 0px #A9A9A9;
        }

        /* Add hover animation for FAQ items */
        .faq-cta details > summary:hover {
            background: #A8DEE0;
        }

        /* Add hover shadow effect for "Esta missão é para si?" cards */
        .mission-card:hover {
            box-shadow: 12px 12px 0px #1B1B1B;
        }

        /* Mobile trust logos scroll */
        @media(max-width: 767px) {
            .trust-logos {
                overflow-x: auto;
                white-space: nowrap;
                padding-bottom: 0.5rem;
            }
            .trust-logos::-webkit-scrollbar {
                height: 4px;
            }
            .trust-logos::-webkit-scrollbar-track {
                background: #E5DBC7;
                border-radius: 2px;
            }
            .trust-logos::-webkit-scrollbar-thumb {
                background: #67BBC0;
                border-radius: 2px;
            }
        }

        /* Responsive typography adjustments */
        @media(max-width: 767px) {
            h1 { font-size: 3rem !important; }
            h2, .bab-title { font-size: 2.25rem !important; }
            h3 { font-size: 1.75rem !important; }
            
            /* Company logos grid 2x2 - remove all margins */
            .company-logos-grid {
                display: grid !important;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr 1fr;
                gap: 1.5rem;
                max-width: 300px;
                margin: 0 auto;
            }
            .company-logos-grid img {
                margin: 0 !important;
            }
            
            /* Retro-futurista image 20% smaller, max 550px */
            .retro-futurista-img {
                max-width: 280px !important;
            }
            
            /* Mission cards padding 15px */
            .mission-card {
                padding: 15px !important;
            }
            
            /* Lab and rocket images centered */
            .lab-img, .rocket-img {
                margin-left: auto !important;
                margin-right: auto !important;
                display: block;
            }
            
            /* Mentor photo 35% smaller and centered */
            .mentor-photo img {
                width: 255px !important;
                max-width: 255px !important;
                margin: 0 auto !important;
                display: block;
            }
            
            /* Pillar cards margin-bottom 50px between them */
            .pillar-cards .card:not(:last-child) {
                margin-bottom: 50px;
            }
            
            /* Bonus header title keeps desktop line-height */
            /* Bonus included text line-height 15px max */
            .bonus-included-text {
                line-height: 15px !important;
            }
            
            /* Bonus items centered layout for mobile */
            .bonus-guides, .bonus-community {
                flex-direction: column !important;
                align-items: center !important;
                text-align: center !important;
            }
            .bonus-guides img, .bonus-community img {
                margin: 0 auto 1rem auto !important;
            }
            
            /* 1 Ano de Guias Vivos margin-bottom 50px */
            .bonus-guides {
                margin-bottom: 50px !important;
            }
            
            /* FAQ padding 15px */
            .faq-cta details > summary {
                padding: 1rem 15px !important;
            }
            .faq-cta details > div {
                padding: 1rem 15px !important;
            }
        }

        .cta-primary{
          background:#FCCA29; color:#1B1B1B; font-family:'Caprasimo',serif;
          font-size:1rem; font-weight:700; padding:0.75rem 2.25rem;
          border: 2px solid #1B1B1B; border-radius:12px; cursor:pointer;
          box-shadow:6px 6px 0 #67BBC0;
          transition:transform .15s ease, box-shadow .15s ease;
          text-decoration: none;
          display: inline-block;
        }
        .cta-primary:hover{ transform:translate(-2px,-2px); box-shadow:4px 4px 0 #67BBC0; }

        .cta-secondary {
          background:#67BBC0; color:#1B1B1B; font-family:'Caprasimo',serif; font-size:1rem; font-weight:700;
          padding:0.75rem 2rem; border:2px solid #1B1B1B; border-radius:12px; cursor:pointer;
          box-shadow:6px 6px 0 #FCCA29; transition:transform .15s ease, box-shadow .15s ease;
          text-decoration: none; display: inline-block;
        }
        .cta-secondary:hover { transform:translate(-2px,-2px); box-shadow:4px 4px 0 #FCCA29; }

        .problem-container{display:flex;flex-direction:column;gap:2rem;max-width:1000px;margin:0 auto;}
        .problem-text{flex:1;}
        .problem-image{flex:1;display:flex;align-items:center;justify-content:center;}
        @media(min-width:768px){.problem-container{flex-direction:row;}}

        .bab-container{display:flex;flex-direction:column;gap:2rem;max-width:1000px;margin:0 auto;}
        .bab-step{display:flex;flex-direction:column;gap:1rem;text-align:left; padding: 2rem; background-color: #FCF9F2; border-radius: 4px;}
        .bab-icon{width:160px;height:160px;}
        .bab-label{font-family:'Caprasimo',serif;font-size:1.5rem;font-weight:700;}
        .bab-title{font-family:'Caprasimo',serif;font-size:2.5rem;font-weight:700;color:#1B1B1B;line-height:1.2;}
        .bab-text{font-size:1.125rem;line-height:1.6;color:#3D3D3D;}
        @media(min-width:768px){.bab-container{flex-direction:row;}.bab-step{flex:1;}}

        .mentor-container{ display:flex; flex-direction:column; gap:2rem; max-width:1000px; margin:0 auto; align-items:center; }
        .mentor-photo{flex:1;order:1; align-self: stretch;}
        .mentor-bio{flex:4;order:2;}
        .mentor-photo img{ border-radius:16px; width:393px; height:auto; object-fit:cover; max-width:393px; }
        .mentor-title{font-family:'Caprasimo',serif;font-size:2rem;font-weight:700;color:#1B1B1B;margin-bottom:1rem;}
        .mentor-text{font-size:1.125rem;line-height:1.6;color:#3D3D3D;}
        ul.mentor-list{list-style:none;padding:0;margin:1rem 0;}
        ul.mentor-list li{margin-bottom:0.75rem;display:flex;gap:0.5rem;align-items:flex-start;}
        ul.mentor-list li span{color:#67BBC0;font-weight:700;}
        @media(min-width:768px){ .mentor-container{flex-direction:row;align-items:flex-start;} .mentor-photo{order:1; flex-basis: 25%;} .mentor-bio{order:2;} }

        .how-it-works-cards .cards-container{display:flex;flex-direction:column;gap:2rem;max-width:1000px;margin:0 auto;}
        .how-it-works-cards .card{padding:1.5rem;flex:1;display:flex;flex-direction:column;align-items:center;text-align:center;}
        .how-it-works-cards .card img{width:240px;height:240px;margin-bottom:1rem;object-fit:cover;}
        .how-it-works-cards .card h3{font-family:'Caprasimo',serif;font-size:1.5rem;font-weight:700;color:#1B1B1B;margin-bottom:0.75rem;}
        .how-it-works-cards .card p{font-size:1rem;line-height:1.5;color:#3D3D3D;margin-bottom:1rem;}
        .how-it-works-cards .card ul{list-style:none;padding:0;margin:0 0 1rem 0;font-size:0.95rem;line-height:1.4;color:#3D3D3D;text-align:left;}
        .how-it-works-cards .card ul li{display:flex;gap:0.5rem;margin-bottom:0.5rem;}
        .how-it-works-cards .card ul li span{color:#67BBC0;font-weight:700;}
        @media(min-width:768px){.how-it-works-cards .cards-container{flex-direction:row;}.card{margin:0 0.5rem;}}

        .bonuses-community .bonus-container{max-width:1000px;margin:0 auto;display:flex;flex-direction:column;gap:2rem;}
        .bonuses-community .bonus-header h2{font-family:'Caprasimo',serif;font-size:2.5rem;font-weight:700;color:#1B1B1B;text-align:center;margin-bottom:0.5rem;}
        .bonuses-community .bonus-header p{font-size:1.125rem;line-height:1.6;color:#3D3D3D;text-align:center;max-width:800px;margin:0 auto;}
        .bonuses-community .bonus-list{display:flex;flex-direction:column;gap:1rem;margin-top:2rem;}
        .bonuses-community .bonus-item{border:2px solid #67BBC0;padding:1.5rem;display:flex;gap:1rem;align-items:flex-start;}
        .bonuses-community .bonus-item img{width:108px;height:108px;flex-shrink:0;}
        .bonuses-community .bonus-item-content{flex:1;}
        .bonuses-community .bonus-item-content h3{font-family:'Caprasimo',serif;font-size:1.25rem;font-weight:700;color:#1B1B1B;margin-bottom:0.25rem;}
        .bonuses-community .bonus-item-content .value-tag{font-family:'Caprasimo',serif;font-size:1rem;color:#FF304C;margin:0 0 0.5rem 0;}
        .bonuses-community .bonus-item-content p{font-size:1rem;line-height:1.5;color:#3D3D3D;margin:0.75rem 0 0;}
        .bonuses-community .tag-included{display:inline-block;background:#67BBC0;color:#f7f1e1;font-family:'Caprasimo',serif;font-size:0.875rem;font-weight:700;padding:0.25rem 0.75rem;border-radius:4px;}

        .social-proof .proof-container{max-width:1000px;margin:0 auto;display:flex;flex-direction:column;gap:2rem;align-items:center;}
        .social-proof .proof-header h2{font-family:'Caprasimo',serif;font-size:2.5rem;font-weight:700;color:#1B1B1B;text-align:center;}
        .social-proof .proof-header p{font-size:1rem;line-height:1.6;color:#3D3D3D;text-align:center;max-width:800px;margin:0 auto;}
        .social-proof .testimonials{display:flex;flex-direction:column;gap:2rem;margin-top:2rem; width: 100%;} 
        @media(min-width:768px){ .social-proof .testimonials{flex-direction:row;} }
        .social-proof .testimonial{background:#E5DBC7; border:2px solid #1B1B1B;border-radius:4px;padding:1.5rem;display:flex;flex-direction:column;gap:1rem;align-items:center;text-align:center; flex: 1 1 0px; box-shadow: 6px 6px 0px #A9A9A9;}
        .social-proof .testimonial video, .social-proof .testimonial img{width:100%;border-radius:4px; aspect-ratio: 16/9; object-fit: cover;}
        .social-proof .testimonial blockquote{font-style:italic;font-size:1rem;line-height:1.5;color:#1B1B1B;margin:0;}
        .social-proof .testimonial cite{font-size:0.875rem;color:#3D3D3D;}

        .pricing-offer-cards .cards-container{max-width:1000px;margin:0 auto;display:flex;flex-direction:column;gap:2rem;}
        .pricing-offer-cards .price-card{background:#FCF9F2; border-radius:4px; padding:2rem;flex:1;display:flex;flex-direction:column;align-items:center;text-align:center;position:relative;}
        .pricing-offer-cards .price-card.highlight{border:2px solid #FF304C;}
        .pricing-offer-cards .badge{position:absolute;top:-10px;right:-10px;background:#FF304C;color:#FCF9F2;font-family:'Caprasimo',serif;font-size:0.75rem;font-weight:700;padding:0.25rem 0.75rem;border-radius:4px;}
        .pricing-offer-cards .price-card h3{font-family:'Caprasimo',serif;font-size:1.75rem;font-weight:700;color:#1B1B1B;margin-bottom:1rem;}
        .pricing-offer-cards .price-original{font-size:1rem;color:#3D3D3D;text-decoration:line-through;margin-bottom:0.25rem;}
        .pricing-offer-cards .price-value{font-size:2.5rem;font-weight:700;color:#67BBC0;margin-bottom:0.5rem;text-shadow: 2px 2px 0px #272727;}
        .pricing-offer-cards .price-note{font-size:0.875rem;color:#3D3D3D;margin-bottom:1rem;}
        .pricing-offer-cards .inclusions{list-style:none;padding:0;text-align:left;font-size:0.9rem;line-height:1.5;color:#3D3D3D;margin-bottom:1.5rem;}
        .pricing-offer-cards .inclusions li{margin-bottom:0.75rem;display:flex;gap:0.5rem;align-items:flex-start;}
        .pricing-offer-cards .inclusions li span{color:#67BBC0;font-weight:700;}
        .pricing-offer-cards .tag-included-container { position: relative; display: inline-block; vertical-align: middle; margin-left: 0.5rem; }
        .pricing-offer-cards .tag-included-bg { background:#67BBC0; padding:0.1rem 0.5rem; border-radius:4px; }
        .pricing-offer-cards .tag-included-text { position: relative; z-index: 1; color:#f7f1e1 !important; font-family:'Caprasimo',serif; font-size: 0.75rem; }
        .pricing-offer-cards .select-mission{font-size:1rem;padding:0.5rem;margin-bottom:1rem;border:2px solid #67BBC0;border-radius:4px;}
        .pricing-offer-cards .progress-container{width:100%;max-width:300px;margin:1rem 0;display:none;flex-direction:column;align-items:center;}
        .pricing-offer-cards .progress-label{font-size:0.875rem;color:#3D3D3D;margin-bottom:0.5rem;}
        .pricing-offer-cards .progress-bar{background:#E5DBC7;border-radius:4px;overflow:hidden;position:relative;width:100%;height:8px;}
        .pricing-offer-cards .progress-fill{width:0%;height:100%;background:#67BBC0;animation:pulse 2s infinite;}
        .pricing-offer-cards .progress-count{position:absolute;top:-1.25rem;right:0;font-size:0.75rem;color:#1B1B1B;}
        .pricing-offer-cards .cta-card{background:#FCCA29;color:#1B1B1B;font-family:'Caprasimo',serif;font-size:1rem;font-weight:700;padding:0.75rem 2rem;border:2px solid #1B1B1B;border-radius:12px;cursor:pointer;box-shadow:6px 6px 0 #67BBC0;transition:transform .15s ease,box-shadow .15s ease; text-decoration: none; display: inline-block;}
        .pricing-offer-cards .cta-card:hover{transform:translate(-2px,-2px);box-shadow:4px 4px 0 #67BBC0;}
        @media(min-width:768px){.pricing-offer-cards .cards-container{flex-direction:row;}.price-card{margin:0 0.5rem;}}
        @keyframes pulse {0% {opacity:0.6;}50% {opacity:1;}100% {opacity:0.6;}}

        .faq-cta details { margin-bottom: 1rem; }
        .faq-cta details > summary {
          display: flex; justify-content: space-between; align-items: center; cursor: pointer;
          padding: 1rem 1.5rem; background: #E5DBC7; color: #1B1B1B;
          font-size: 1.25rem; font-weight: 600; list-style: none;
          border: 2px solid #3D3D3D; border-radius: 1rem; user-select: none;
          transition: background-color 0.3s ease;
        }
        .faq-cta details > summary:after { content: '▸'; font-size: 1.25rem; transition: transform 0.3s ease; }
        .faq-cta details[open] > summary:after { transform: rotate(90deg); }
        .faq-cta details > div {
          padding: 1rem 1.5rem; background: #FCF9F2; font-size: 1rem; line-height: 1.6;
          border-left: 2px solid #E5DBC7; border-right: 2px solid #E5DBC7; border-bottom: 2px solid #E5DBC7;
          border-radius: 0 0 1rem 1rem; margin-top: -0.5rem;
        }
        .faq-cta .value-stack {
          background: #FCF9F2; border: 2px solid #E5DBC7; border-radius: 1rem; padding: 1.5rem;
          font-size: 1rem; line-height: 1.6; color: #1B1B1B;
        }
        .faq-cta .value-stack ul { list-style: none; padding: 0; margin: 0; }
        .faq-cta .value-stack li { margin-bottom: 0.5rem; }
        .faq-cta .value-stack p strong + span { color: #FF304C; font-weight:700; }
        .faq-cta .investment-highlight {
          background: #E5DBC7; border: 2px solid #3D3D3D; color: #1B1B1B; font-size: 1.5rem;
          font-weight: 700; padding: 1rem; border-radius: 0.75rem; text-align: center; margin-top: 1rem;
        }
        .faq-cta .investment-highlight .price-highlight {
          color: #fcca29; text-shadow: 2px 2px 0px #272727;
        }
        .faq-cta .cta-final .cta-primary {
          font-size:1.125rem; padding:1rem 2rem; border-radius:0.75rem;
          text-decoration: none; display: inline-block;
        }

        .signup-form input, .signup-form select { border:2px solid #E5DBC7; border-radius:4px; padding:0.75rem; font-size:1rem; background:#FCF9F2; width: 100%; box-sizing: border-box; }
        .signup-form .checkbox-custom { display:flex; align-items:center; gap:0.5rem; cursor:pointer; }
        .signup-form .checkbox-custom input { appearance:none; width:20px; height:20px; border:2px solid #E5DBC7; border-radius:4px; position:relative; flex-shrink: 0; }
        .signup-form .checkbox-custom input:checked::before { content:'✱'; position:absolute; top: -3px; left: 2px; color:#67BBC0; font-size:1.25rem; }
      `}</style>

      {/* Language Switcher */}
      <div style={{position: 'fixed', top: '20px', right: '20px', zIndex: 1000}}>
        <div style={{position: 'relative'}}>
          <button
            onClick={() => setShowLanguageMenu(!showLanguageMenu)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: '#FCF9F2',
              border: '2px solid #1B1B1B',
              borderRadius: '8px',
              cursor: 'pointer',
              fontFamily: "'Jost', sans-serif",
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#1B1B1B',
              boxShadow: '4px 4px 0px #67BBC0',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translate(-2px, -2px)';
              e.currentTarget.style.boxShadow = '6px 6px 0px #67BBC0';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translate(0, 0)';
              e.currentTarget.style.boxShadow = '4px 4px 0px #67BBC0';
            }}
          >
            <Globe size={18} />
            <span>{language === 'pt-BR' ? 'PT-BR' : 'PT-PT'}</span>
          </button>
          
          {showLanguageMenu && (
            <div style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              right: 0,
              background: '#FCF9F2',
              border: '2px solid #1B1B1B',
              borderRadius: '8px',
              boxShadow: '4px 4px 0px #67BBC0',
              minWidth: '200px',
              overflow: 'hidden',
              zIndex: 1001
            }}>
              <button
                onClick={() => {
                  setLanguage('pt-PT');
                  setShowLanguageMenu(false);
                }}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  background: language === 'pt-PT' ? '#E5DBC7' : 'transparent',
                  border: 'none',
                  borderBottom: '1px solid #E5DBC7',
                  cursor: 'pointer',
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: language === 'pt-PT' ? 700 : 400,
                  color: '#1B1B1B',
                  textAlign: 'left',
                  transition: 'background 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  if (language !== 'pt-PT') e.currentTarget.style.background = '#F5F5F0';
                }}
                onMouseLeave={(e) => {
                  if (language !== 'pt-PT') e.currentTarget.style.background = 'transparent';
                }}
              >
                Português de Portugal
              </button>
              <button
                onClick={() => {
                  setLanguage('pt-BR');
                  setShowLanguageMenu(false);
                }}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  background: language === 'pt-BR' ? '#E5DBC7' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: language === 'pt-BR' ? 700 : 400,
                  color: '#1B1B1B',
                  textAlign: 'left',
                  transition: 'background 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  if (language !== 'pt-BR') e.currentTarget.style.background = '#F5F5F0';
                }}
                onMouseLeave={(e) => {
                  if (language !== 'pt-BR') e.currentTarget.style.background = 'transparent';
                }}
              >
                Português do Brasil
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-grain-pulp relative py-16 px-4 text-center overflow-hidden">
        <div className="relative z-10">
          <h1 className="font-swanky text-5xl md:text-7xl font-normal leading-tight text-[#67BBC0]" style={{textShadow: '3px 3px 0px #1B1B1B', fontFamily: "'Fontdiner Swanky', cursive"}}>
            {language === 'pt-BR' ? 'Entre na Vanguarda do Marketing' : 'Entra na Vanguarda do Marketing'}
          </h1>
          <h2 className="font-oswald text-3xl md:text-5xl font-medium leading-snug my-6 max-w-4xl mx-auto uppercase" style={{fontFamily: "'Oswald', sans-serif"}}>
            {language === 'pt-BR' ? 'Use IA para entregar em 5 dias o que hoje leva 30' : 'Usa a IA para conquistares em 5 dias o que hoje farias em 30'}
          </h2>
          
          {/* Placeholder para Vídeo */}
          <div className="max-w-3xl mx-auto my-8">
            <div className="aspect-w-16 aspect-h-9 bg-[#1B1B1B] rounded-xl border-4 border-[#1B1B1B] shadow-[8px_8px_0px_#FCCA29]">
              <img src="https://placehold.co/1280x720/1B1B1B/FCF9F2?text=V%C3%ADdeo+de+Apresenta%C3%A7%C3%A3o" alt="Vídeo de Apresentação da Mentoria" className="w-full h-full object-cover rounded-lg"/>
            </div>
          </div>

          <h3 className="font-oswald text-xl md:text-2xl font-medium leading-normal text-[#3D3D3D] max-w-4xl mx-auto mb-8" style={{fontFamily: "'Oswald', sans-serif"}}>
            {language === 'pt-BR' ? 'Enquanto os seus concorrentes apenas arranham a superfície do ChatGPT, este é o seu plano de voo para dominar a IA a sério e garantir a sua vantagem competitiva.' : 'Enquanto a tua concorrência apenas arranha a superfície do ChatGPT, este é o teu plano de voo para dominar a IA a sério e garantir uma vantagem competitiva.'}
          </h3>
          <a href="#how-it-works" className="cta-primary mb-4">
            Reservar o meu lugar na Mentoria
          </a>
          <p className="text-sm text-[#3D3D3D] max-w-lg mx-auto mt-4">
            Apenas 12 vagas por turma • -25 % pré‑lançamento • Garantia de reembolso total
          </p>
          
          {/* Logos de Empresas */}
          <div className="mt-12">
            <p className="font-oswald text-lg text-[#3D3D3D] mb-4" style={{fontFamily: "'Oswald', sans-serif"}}>Empresas cujos colaboradores já foram nossos alunos:</p>
            <div className="company-logos-grid flex justify-center items-center space-x-8 md:space-x-12 grayscale opacity-60">
              <img src="/lovable-uploads/c41a9516-d15e-4713-bd6e-3fbae0530b2c.png" alt="Logo Empresa 1" className="h-12" style={{height: '50px'}} />
              <img src="/lovable-uploads/38467e40-d55a-464e-a1a5-6583161e9211.png" alt="Logo Empresa 2" className="h-12" style={{height: '50px'}} />
              <img src="/lovable-uploads/9284f42b-9f7b-4b8a-8c55-a867f975594c.png" alt="Logo Empresa 3" className="h-12" style={{height: '50px'}} />
              <img src="/lovable-uploads/231f247f-884f-4dfc-8d76-0d203ec097d3.png" alt="Logo Empresa 4" className="h-12" style={{height: '50px'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-[#E0F2F3] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-caprasimo text-4xl md:text-6xl font-bold leading-tight" style={{textShadow: '3px 3px 0px #FDE68A', fontFamily: "'Caprasimo', serif"}}>
            A IA já não é o futuro, é o presente.
          </h2>
          <h3 className="font-oswald text-2xl md:text-3xl font-medium text-[#3D3D3D] mt-4 mb-8" style={{fontFamily: "'Oswald', sans-serif"}}>
            {language === 'pt-BR' ? 'Está no comando ou a ficar para trás?' : 'Sentes-te no comando ou a ficar para trás?'}
          </h3>
          <p className="text-lg md:text-xl text-[#3D3D3D] mb-12 max-w-3xl mx-auto">
            O marketing que funcionava até Janeiro de 2025 está a tornar-se obsoleto. A cada dia que passa, a distância entre quem domina IA e quem apenas "usa o ChatGPT" aumenta exponencialmente.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mt-12">
          {/* Coluna da Esquerda: Imagem */}
          <div>
            <img src="/lovable-uploads/04c82f71-7985-4a26-b53d-a81bb9857d83.png" alt="Ilustração retro-futurista de um marketer a comandar IAs" className="retro-futurista-img rounded-xl w-full max-w-[500px] mx-auto"/>
          </div>
          {/* Coluna da Direita: Grelha de Dores */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#FCF9F2] p-6 rounded-lg border border-[#E5DBC7]">
              <p className="text-lg"><span className="text-[#67BBC0] font-bold text-2xl mr-2">→</span><strong>A queda do tráfego orgânico:</strong> O Google AI Overview está a transformar o SEO, e as estratégias que antes garantiam visibilidade e resultados estão a perder relevância vertiginosamente.</p>
            </div>
            <div className="bg-[#FCF9F2] p-6 rounded-lg border border-[#E5DBC7]">
              <p className="text-lg"><span className="text-[#67BBC0] font-bold text-2xl mr-2">→</span><strong>A nova expectativa do cliente:</strong> {language === 'pt-BR' ? 'O seu cliente agora espera respostas instantâneas e mensagens hiper-personalizadas, um padrão estabelecido pela automação que os seus concorrentes já usam.' : 'O teu cliente espera respostas instantâneas e mensagens hiper-personalizadas, um padrão estabelecido pela automação que a tua concorrência já usa.'}</p>
            </div>
            <div className="bg-[#FCF9F2] p-6 rounded-lg border border-[#E5DBC7]">
              <p className="text-lg"><span className="text-[#67BBC0] font-bold text-2xl mr-2">→</span><strong>A democratização da concorrência:</strong> Qualquer um agora pode construir lead magnets, ferramentas e até SaaS sem código, o que torna o mercado mais competitivo e inovador do que nunca.</p>
            </div>
            <div className="bg-[#FCF9F2] p-6 rounded-lg border border-[#E5DBC7]">
              <p className="text-lg"><span className="text-[#67BBC0] font-bold text-2xl mr-2">→</span><strong>A pressão por "super produtividade":</strong> {language === 'pt-BR' ? 'O trabalho que antes exigia uma equipa está a ser centralizado numa só pessoa que orquestra IAs, o que eleva drasticamente a barra do que é esperado de um profissional de marketing.' : 'O trabalho que antes exigia uma equipa está a ser centralizado numa só pessoa que domina as IAs, o que eleva drasticamente a fasquia do que é esperado de um profissional de marketing.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem É Section */}
      <section className="bg-grain-pulp relative py-16 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="font-caprasimo text-4xl md:text-6xl font-bold leading-tight mb-12" style={{textShadow: '3px 3px 0px #FF8C9B', fontFamily: "'Caprasimo', serif"}}>
            {language === 'pt-BR' ? 'Esta missão é para si?' : 'Esta missão é para ti?'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card Marketer */}
            <div className="mission-card bg-[#FCF9F2] rounded-xl border-2 border-[#1B1B1B] text-center shadow-[8px_8px_0px_#1B1B1B] transition-all duration-300" style={{padding: '2rem'}}>
              <img src="/lovable-uploads/b5ad3c58-2619-4326-99a9-cf14c06792d5.png" alt="Ícone para Marketer" className="mx-auto mb-6 rounded-full border-2 border-[#1B1B1B]" style={{width: '170px', height: '170px'}} />
              <h3 className="font-caprasimo text-2xl text-[#1B1B1B] mb-1" style={{fontFamily: "'Caprasimo', serif"}}>PARA O(A) MARKETER</h3>
              <h4 className="font-oswald text-xl font-medium text-[#67BBC0] mb-4" style={{fontFamily: "'Oswald', sans-serif"}}>Que se recusa a ser obsoleto</h4>
              <p className="text-lg text-[#3D3D3D] leading-relaxed">
                {language === 'pt-BR' ? 'Sente a pressão para entregar mais, enquanto as táticas que levou anos para dominar perdem eficácia a cada dia. Esta mentoria é o seu rearmamento estratégico para transformar a ansiedade da substituição em autoridade, tornando-se o profissional que o mercado disputa.' : 'Sentes a pressão para entregar mais, enquanto as táticas que levaram anos para dominar perdem eficácia a cada dia que passa. Esta mentoria é o teu re-armamento estratégico para transformar a "ansiedade da substituição" em autoridade. Torna-te o profissional que o mercado disputa.'}
              </p>
            </div>
            {/* Card Diretor(a) */}
            <div className="mission-card bg-[#FCF9F2] rounded-xl border-2 border-[#1B1B1B] text-center shadow-[8px_8px_0px_#1B1B1B] transition-all duration-300" style={{padding: '2rem'}}>
              <img src="/lovable-uploads/311299fb-2f65-4df0-a9ff-054964a5906e.png" alt="Ícone para Diretor" className="mx-auto mb-6 rounded-full border-2 border-[#1B1B1B]" style={{width: '170px', height: '170px'}} />
              <h3 className="font-caprasimo text-2xl text-[#1B1B1B] mb-1" style={{fontFamily: "'Caprasimo', serif"}}>PARA O(A) DIRETOR(A)</h3>
              <h4 className="font-oswald text-xl font-medium text-[#67BBC0] mb-4" style={{fontFamily: "'Oswald', sans-serif"}}>Que lidera a vanguarda</h4>
              <p className="text-lg text-[#3D3D3D] leading-relaxed">
                {language === 'pt-BR' ? 'Vê a concorrência a mover-se mais rápido e precisa de capacitar a sua equipa para não apenas competir, mas dominar. Transforme o seu departamento num centro de excelência em IA, entregando mais, com maior qualidade e menos recursos, e posicione a sua equipa — e a sua liderança — como a verdadeira vantagem competitiva da empresa.' : 'Vês a concorrência a mover-se mais rápido e precisas de capacitar a tua equipa para não apenas competir, mas dominar. Transforma o teu departamento num centro de excelência em IA, entregando mais, com maior qualidade e menos recursos. Posiciona a tua equipa — e a tua liderança — como a verdadeira vantagem competitiva da empresa.'}
              </p>
            </div>
            {/* Card Criativo(a) */}
            <div className="mission-card bg-[#FCF9F2] rounded-xl border-2 border-[#1B1B1B] text-center shadow-[8px_8px_0px_#1B1B1B] transition-all duration-300" style={{padding: '2rem'}}>
              <img src="/lovable-uploads/b63df122-307e-4ffc-b627-ac381dfa8f27.png" alt="Ícone para Criativo" className="mx-auto mb-6 rounded-full border-2 border-[#1B1B1B]" style={{width: '170px', height: '170px'}} />
              <h3 className="font-caprasimo text-2xl text-[#1B1B1B] mb-1" style={{fontFamily: "'Caprasimo', serif"}}>PARA O(A) CRIATIVO(A)</h3>
              <h4 className="font-oswald text-xl font-medium text-[#67BBC0] mb-4" style={{fontFamily: "'Oswald', sans-serif"}}>Cujos limites são a imaginação</h4>
              <p className="text-lg text-[#3D3D3D] leading-relaxed">
                {language === 'pt-BR' ? 'Percebe que os orçamentos para produções tradicionais estão a diminuir, enquanto a procura por volume e velocidade explode. Combine a sua visão única com o poder de um estúdio de Hollywood no seu computador, execute ideias antes impossíveis e torne-se um "time de uma pessoa só".' : 'Percebes que os orçamentos para produções tradicionais estão a diminuir, enquanto a procura por volume e velocidade explode. Combina a tua visão única com o poder de um estúdio de Hollywood no teu computador. Executa ideias que antes eram impossíveis e torna-te uma pessoa "dos sete ofícios".'}
              </p>
            </div>
            {/* Card Empreendedor(a) */}
            <div className="mission-card bg-[#FCF9F2] rounded-xl border-2 border-[#1B1B1B] text-center shadow-[8px_8px_0px_#1B1B1B] transition-all duration-300" style={{padding: '2rem'}}>
              <img src="/lovable-uploads/24e5342e-71fb-462e-9f42-f6147aa6c256.png" alt="Ícone para Empreendedor" className="mx-auto mb-6 rounded-full border-2 border-[#1B1B1B]" style={{width: '170px', height: '170px'}} />
              <h3 className="font-caprasimo text-2xl text-[#1B1B1B] mb-1" style={{fontFamily: "'Caprasimo', serif"}}>PARA O(A) EMPREENDEDOR(A)</h3>
              <h4 className="font-oswald text-xl font-medium text-[#67BBC0] mb-4" style={{fontFamily: "'Oswald', sans-serif"}}>Que ganha vantagem de forma ágil</h4>
              <p className="text-lg text-[#3D3D3D] leading-relaxed">
                {language === 'pt-BR' ? 'Sabe que neste novo mercado, a agilidade supera o tamanho e que os "mamutes" estão vulneráveis. Use a IA para impulsionar vendas, a partir de um marketing mais inteligente e eficiente com menos investimento. Ganhe vantagem competitiva sobre os concorrentes mais lentos e aproveite a maior reconfiguração do mercado do século.' : 'Já percebeste que neste novo mercado, a agilidade supera o tamanho e que os "mamutes" estão vulneráveis. Usa a IA para impulsionar vendas, a partir de um marketing mais inteligente e eficiente com menos investimento. Ganha vantagem competitiva sobre a concorrência mais lenta e aproveita a maior reconfiguração do mercado do século.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise Section - Before After Bridge */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-start">
          <div className="bab-step">
            <img src="/lovable-uploads/d8bcdf7a-4eee-4f99-b2e1-8fb14e15a981.png" alt="Ícone de sobrecarga de informação" className="h-30 ml-0 mb-0" style={{width: '120px', height: '120px', marginLeft: '0px', marginBottom: '0px'}}/>
            <span className="font-oswald text-lg font-bold text-[#FF304C] block mb-2" style={{fontFamily: "'Oswald', sans-serif"}}>ANTES</span>
            <h3 className="font-caprasimo text-3xl text-[#1B1B1B] mb-2" style={{fontFamily: "'Caprasimo', serif"}}>Profissional Reativo</h3>
            <p className="text-lg text-[#3D3D3D]">{language === 'pt-BR' ? 'Passa mais tempo a testar ferramentas do que a criar resultados. Sente que os concorrentes estão a decolar enquanto você continua na pista, com medo de se tornar obsoleto.' : 'Passas mais tempo a testar ferramentas do que a criar resultados. Sentes que a concorrência está a levantar voo enquanto tu continuas na pista, com medo de te tornares obsoleto. Dá medo, né?'}</p>
          </div>
          <div className="bab-step">
            <img src="/lovable-uploads/c20bd8ef-123a-4a7c-a077-ee2fdf3e7917.png" alt="Ícone de lançamento de jornada" className="h-30 ml-0 mb-0" style={{width: '120px', height: '120px', marginLeft: '0px', marginBottom: '0px'}}/>
            <span className="font-oswald text-lg font-bold text-[#67BBC0] block mb-2" style={{fontFamily: "'Oswald', sans-serif"}}>A PONTE</span>
            <h3 className="font-caprasimo text-3xl text-[#1B1B1B] mb-2" style={{fontFamily: "'Caprasimo', serif"}}>A Mentoria Atomica</h3>
            <p className="text-lg text-[#3D3D3D]">{language === 'pt-BR' ? 'Condensei quase 2 anos de experiência diária e mais de uma década em marketing neste plano de voo intensivo. Filtrei o ruído por si. Em apenas 30 dias, irá dominar fluxos práticos e frameworks prontos para implementar IA real no seu marketing.' : 'Condensei quase 2 anos de experiência diária e mais de uma década em marketing neste plano de voo intensivo. Filtrei o ruído por ti. Em apenas 30 dias, irás dominar fluxos práticos e frameworks prontos para implementar IA real no teu marketing.'}</p>
          </div>
          <div className="bab-step">
            <img src="/lovable-uploads/4566798f-cf76-47c1-a33b-3c7411f83489.png" alt="Ícone de sucesso e clareza" className="h-30 ml-0 mb-0" style={{width: '120px', height: '120px', marginLeft: '0px', marginBottom: '0px'}}/>
            <span className="font-oswald text-lg font-bold text-[#FCCA29] block mb-2" style={{fontFamily: "'Oswald', sans-serif"}}>DEPOIS</span>
            <h3 className="font-caprasimo text-3xl text-[#1B1B1B] mb-2" style={{fontFamily: "'Caprasimo', serif"}}>Estratega no Comando</h3>
            <p className="text-lg text-[#3D3D3D]">{language === 'pt-BR' ? 'Automatiza o trabalho repetitivo para se focar onde a sua criatividade e pensamento crítico brilham, transformando ideias complexas em realidade e ser a referência que a sua equipa procura quando o tema é inovação.' : 'Automatizas o trabalho repetitivo para te focares onde a tua criatividade e pensamento crítico brilham, transformando ideias complexas em realidade e ser a referência que a tua equipa procura quando o tema é inovação.'}</p>
          </div>
        </div>
      </section>

      {/* A Solução e Oportunidade Section */}
      <section className="bg-[#FEF8E4] py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-caprasimo text-4xl md:text-6xl font-bold leading-tight mb-12" style={{textShadow: '3px 3px 0px #a8dee0', fontFamily: "'Caprasimo', serif"}}>
            {language === 'pt-BR' ? 'Saia da Teoria para Aplicações Práticas de IA no Marketing' : 'Sai da Teoria para Aplicações Práticas de IA no Marketing'}
          </h2>
          
          {/* Parte 1: A Solução */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16 text-left">
            <div className="order-2 md:order-1">
              <h3 className="font-oswald text-3xl text-[#1B1B1B] mb-6" style={{fontFamily: "'Oswald', sans-serif"}}>{language === 'pt-BR' ? 'A Solução: O Que Vai Construir' : 'A Solução: O Que Vais Construir'}</h3>
              <ul className="space-y-6 text-lg text-[#3D3D3D]">
                <li className="flex items-start"><span className="text-[#67BBC0] font-bold text-2xl mr-4 mt-1">✓</span><span><strong>Uma equipa de marketing completa à {language === 'pt-BR' ? 'sua' : 'tua'} disposição:</strong> {language === 'pt-BR' ? 'Tenha um copywriter, um estratega, um designer e um analista de dados a trabalhar para si 24/7, libertando o seu tempo para o que realmente importa.' : 'Terás um copywriter, um estratega, um designer e um analista de dados a trabalhar para ti 24/7, libertando o teu tempo para o que realmente importa.'}</span></li>
                <li className="flex items-start"><span className="text-[#67BBC0] font-bold text-2xl mr-4 mt-1">✓</span><span><strong>A capacidade de prototipar o impossível:</strong> com o Vibe Coding, {language === 'pt-BR' ? 'Ideias' : 'ideias'} que antes ficavam na gaveta por serem muito caras ou complexas, agora podem ser testadas e lançadas em dias, não em meses.</span></li>
                <li className="flex items-start"><span className="text-[#67BBC0] font-bold text-2xl mr-4 mt-1">✓</span><span><strong>O fim das tarefas repetitivas:</strong> {language === 'pt-BR' ? 'Aprenda a automatizar tudo o que é aborrecido, demorado e de baixo valor, para que possa focar a sua energia onde ela cria mais impacto e diversão.' : 'Aprende a automatizar tudo o que é aborrecido, demorado e de baixo valor, para que possas focar a tua energia onde ela tem mais impacto e diversão.'}</span></li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <img src="/lovable-uploads/302bbba5-22d5-49e5-80f3-4c74f0b9b86c.png" alt="Laboratório de IA" className="lab-img rounded-xl w-full border-2 border-[#1B1B1B] shadow-[10px_10px_0px_#67BBC0]"/>
            </div>
          </div>

          {/* Parte 2: A Oportunidade */}
          <div className="grid md:grid-cols-2 gap-12 items-center text-left">
            <div>
              <img src="/lovable-uploads/ab081d3f-7d29-414a-b25b-342af50a2422.png" alt="Foguete da Oportunidade" className="rocket-img rounded-xl w-full border-2 border-[#1B1B1B] shadow-[10px_10px_0px_#FCCA29]"/>
            </div>
            <div>
              <h3 className="font-oswald text-3xl text-[#1B1B1B] mb-6" style={{fontFamily: "'Oswald', sans-serif"}}>A Oportunidade: Porquê Agora</h3>
              <ul className="space-y-6 text-lg text-[#3D3D3D]">
                <li className="flex items-start"><span className="text-[#FF304C] font-bold text-2xl mr-4 mt-1">!</span><span><strong>Ainda estamos no "modo fácil".</strong> {language === 'pt-BR' ? 'A maioria dos profissionais e empresas ainda está no processo de adaptação. Quem sair na frente agora ganha uma vantagem competitiva imensa e define as regras do jogo.' : 'A maioria dos profissionais e empresas ainda está no processo de adaptação. Quem aproveitar o lançamento do agora, ganha uma vantagem competitiva imensa e define as regras do jogo.'}</span></li>
                <li className="flex items-start"><span className="text-[#FF304C] font-bold text-2xl mr-4 mt-1">!</span><span><strong>{language === 'pt-BR' ? 'Pense nisto como 1993.' : 'Pensa nisto como 1993.'}</strong> Quem entendeu a internet naquela altura, preparou-se para a revolução de 2007. Hoje, estamos a preparar-nos para uma mudança ainda maior, mas que chegará em 2 anos, não em 14.</span></li>
                <li className="flex items-start"><span className="text-[#FF304C] font-bold text-2xl mr-4 mt-1">!</span><span><strong>Revoluções como esta só acontecem a cada 20 anos.</strong> {language === 'pt-BR' ? 'Esta é a sua oportunidade de conquistar as "unfair advantages" que o vão destacar na próxima década. Não espere pela próxima grande onda — a janela de oportunidade não ficará aberta para sempre.' : 'Esta é a tua oportunidade de conquistar as "unfair advantages" que te vão destacar na próxima década. Não esperes pela próxima grande onda - a janela de oportunidade não vai ficar aberta para sempre.'}</span></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16">
            <a href="#how-it-works" className="cta-primary">
              Garantir a minha Vantagem Competitiva
            </a>
          </div>
        </div>
      </section>

      {/* Mentor Section */}
      <section className="mentor bg-grain-pulp" style={{padding:'4rem 1rem'}}>
        <div className="mentor-container max-w-6xl mx-auto">
          <div className="mentor-photo">
            <img src="/lovable-uploads/847498a7-1f70-467a-8fe7-ce3a3442ab78.png" alt="Foto de Pedro Armbrust, mentor" />
          </div>
          <div className="mentor-bio">
            <h2 className="mentor-title" style={{textShadow: '3px 3px 0px #A8DEE0'}}>
              Sobre o Mentor: Pedro Armbrust
            </h2>
            <p className="mentor-text">
              {language === 'pt-BR' ? 'A sua missão é desmistificar a complexidade da Inteligência Artificial, traduzindo-a em estratégias práticas que lhe permitem ganhar eficiência e comprovar o ROI do uso de IA no Marketing.' : 'A sua missão é desmistificar a complexidade da Inteligência Artificial, traduzindo-a em estratégias práticas que te vão permitir ganhar eficiência e comprovar o ROI do uso de IA no Marketing.'}
            </p>
            
            <h3 className="font-oswald text-xl font-medium uppercase tracking-wider text-[#008C94] mt-6 mb-3" style={{fontFamily: "'Oswald', sans-serif"}}>Mais de 10 anos de experiência em marketing</h3>
            <p className="mentor-text">
              A sua carreira foi construída na linha da frente do marketing digital, onde liderou projetos de grande impacto:
            </p>
            <ul style={{marginTop: '1rem', marginBottom: '1rem', paddingLeft: '0', listStyle: 'none'}}>
              <li style={{marginBottom: '0.75rem', color: '#3D3D3D', lineHeight: '1.6'}}>✱ <strong>Resultados Comprovados:</strong> Gerou um crescimento superior a 187% na receita digital de uma empresa {language === 'pt-PT' ? 'multinacional ' : ''}através da reestruturação de funis de marketing e da automação de processos de CRM.</li>
              <li style={{marginBottom: '0.75rem', color: '#3D3D3D', lineHeight: '1.6'}}>✱ <strong>Domínio de Conteúdo:</strong> Idealizou e construiu um blog de raiz que se tornou o principal canal de tráfego orgânico da empresa, ultrapassando as 66.000 visitas mensais.</li>
              <li style={{marginBottom: '0.75rem', color: '#3D3D3D', lineHeight: '1.6'}}>✱ <strong>Visão Estratégica:</strong> Liderou um projeto complexo de rebranding, implementando a nova identidade de marca no mercado.</li>
            </ul>

            <h3 className="font-oswald text-xl font-medium uppercase tracking-wider text-[#008C94] mt-6 mb-3" style={{fontFamily: "'Oswald', sans-serif"}}>Trajetória Internacional</h3>
            <p className="mentor-text">
              Brasileiro a viver em Portugal há 4 anos, desenvolveu e adaptou estratégias para mercados como o do Brasil, Portugal, Reino Unido e França.
            </p>

            <h3 className="font-oswald text-xl font-medium uppercase tracking-wider text-[#008C94] mt-6 mb-3" style={{fontFamily: "'Oswald', sans-serif"}}>Fundador da Atomica</h3>
            <p className="mentor-text">
              Com o objetivo de promover a literacia em IA junto de marketers e criativos. Para isso, desenvolveu um método de ensino focado nos 5 Pilares da IA, partilhado em workshops e bootcamps.
            </p>
            <h4 className="trust-title" style={{marginTop:'2rem', textAlign:'center', color:'#3D3D3D'}}>
              Um percurso validado por grandes marcas e instituições:
            </h4>
            <div className="logo-bar" style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'2rem', flexWrap:'wrap', padding:'1rem 0', filter: 'grayscale(100%) opacity(0.7)'}}>
              <img src="/lovable-uploads/a1b182de-aa94-4dce-9cb7-36ff12206a28.png" alt="Pluxee" style={{height:'30px'}} />
              <img src="/lovable-uploads/d3f98ce5-4863-4a81-ab6c-245efa5906ff.png" alt="Accor" style={{height:'30px'}} />
              <img src="/lovable-uploads/e12ea51d-a650-41f1-a09c-159ff69b06ec.png" alt="Gupy" style={{height:'30px'}} />
              <img src="/lovable-uploads/e2e9ef18-15e1-43fc-8909-8f889ffdb900.png" alt="EDIT." style={{height:'30px'}} />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Cards */}
      <section id="how-it-works" className="how-it-works-cards" style={{background:'#FEF8E4', padding:'4rem 1rem'}}>
        <div className="max-w-6xl mx-auto">
          <h2 style={{fontFamily:"'Caprasimo',serif", fontSize:'2.5rem', fontWeight:700, color:'#1B1B1B', textAlign:'center', marginBottom:'1.5rem', textShadow: '3px 3px 0px #A8DEE0'}}>
            {language === 'pt-BR' ? 'Os 3 Pilares da Sua Transformação em IA' : 'Os 3 Pilares da Tua Transformação em IA'}
          </h2>
          <div className="general-info" style={{maxWidth:'800px', margin:'0 auto 2rem', textAlign:'center'}}>
            <p style={{fontSize:'1rem', lineHeight:1.5}}>
              <span style={{color:'#008C94', fontWeight:700}}>✱</span> {language === 'pt-BR' ? 'Cada mentoria tem 20 horas ao longo de 1 mês' : 'Cada mentoria tem 20 horas durante 1 mês'} &nbsp;|&nbsp; 
              <span style={{color:'#008C94', fontWeight:700}}>✱</span> Aulas de 2h30 às 2ª e 4ª ou 3ª e 5ª feiras &nbsp;|&nbsp; 
              <span style={{color:'#008C94', fontWeight:700}}>✱</span> Turmas de 8 a 12 participantes
            </p>
          </div>
          <div className="cards-container pillar-cards" style={{gap: '0.5rem'}}>
            <div className="card card-raised" style={{padding: '2rem', flex: '1', maxWidth: '400px'}}>
            <img src="/lovable-uploads/3a5df82f-f4cb-44ab-bbf5-61e9e715c22f.png" alt="Conteúdo IA" />
            <h3>Criação de Conteúdo com IA</h3>
            <div style={{display: 'inline-block', background: '#67BBC0', color: '#f7f1e1', fontFamily: "'Caprasimo', serif", fontSize: '0.875rem', fontWeight: '700', padding: '0.25rem 0.75rem', borderRadius: '4px', marginTop: '0.5rem', marginBottom: '1rem'}}>
              Mentoria 1
            </div>
            <p>{language === 'pt-BR' ? 'Vá muito além de vencer a "síndrome da página em branco". Nesta mentoria, irá transformar a IA de uma simples ferramenta para gerar rascunhos num verdadeiro copiloto estratégico.' : 'Vai muito além de vencer o "síndrome da página em branco". Nesta mentoria, vais transformar a IA de uma simples ferramenta para gerar rascunhos num verdadeiro copiloto estratégico.'}</p>
            <ul style={{marginTop: '1rem', marginBottom: '1rem', paddingLeft: '0', listStyle: 'none'}}>
              <li style={{marginBottom: '0.5rem', color: '#3D3D3D', lineHeight: '1.4'}}>✱ {language === 'pt-BR' ? 'Aprenda a planear, criar e otimizar conteúdo de alta performance que converte e encanta, aplicando hiper personalização em escala e com uma velocidade que antes parecia impossível.' : 'Aprende a planear, criar e otimizar conteúdo de alta performance que converte e encanta, aplicando hiper personalização em escala e com uma velocidade que antes parecia impossível.'}</li>
              <li style={{marginBottom: '0.5rem', color: '#3D3D3D', lineHeight: '1.4'}}>✱ {language === 'pt-BR' ? 'Dominar a Engenharia de Prompt e de Contexto para construir um copiloto de confiança, que evita alucinações e lhe entrega análises críticas para as suas decisões estratégicas.' : 'Domina a Engenharia de Prompt e de Contexto para construir um copiloto de confiança, que evita alucinações e te entrega análises críticas para as tuas decisões estratégicas.'}</li>
              <li style={{marginBottom: '0.5rem', color: '#3D3D3D', lineHeight: '1.4'}}>✱ {language === 'pt-BR' ? 'Treinar a LLM para internalizar e replicar o tom de voz autêntico da sua marca em todo o ciclo de conteúdo, garantindo originalidade para se destacar do "AI Slop" genérico.' : 'Treina a LLM para internalizar e replicar o tom de voz autêntico da tua marca em todo o ciclo de conteúdo, garantindo originalidade para te destacares do "AI Slop" genérico.'}</li>
              <li style={{marginBottom: '0.5rem', color: '#3D3D3D', lineHeight: '1.4'}}>✱ {language === 'pt-BR' ? 'Construir, num laboratório prático, Agentes e ativos de marketing reais (e-mails, LPs, posts), enquanto faz um raio-x completo às ferramentas de vanguarda como ChatGPT, Gemini, Claude, Manus e Lovable.' : 'Constrói, num laboratório prático, Agentes e ativos de marketing reais (e-mails, LPs, posts), enquanto fazes um raio-x completo às ferramentas de vanguarda como ChatGPT, Gemini, Claude, Manus e Lovable.'}</li>
            </ul>
          </div>
          <div className="card card-raised" style={{padding: '2rem', flex: '1', maxWidth: '400px'}}>
            <img src="/lovable-uploads/9b8b72a4-73dd-4d92-b2a8-e18d84e26be1.png" alt="Audiovisual IA" />
            <h3>Produção Audiovisual com IA</h3>
            <div style={{display: 'inline-block', background: '#67BBC0', color: '#f7f1e1', fontFamily: "'Caprasimo', serif", fontSize: '0.875rem', fontWeight: '700', padding: '0.25rem 0.75rem', borderRadius: '4px', marginTop: '0.5rem', marginBottom: '1rem'}}>
              Mentoria 2
            </div>
            <p>{language === 'pt-BR' ? 'Abandone os orçamentos milionários e as barreiras técnicas que limitam a sua visão. Esta mentoria é o seu acesso a um estúdio de Hollywood no seu computador, transformando ideias em produções de qualidade profissional com uma fração do custo.' : 'Abandona os orçamentos milionários e as barreiras técnicas que limitam a tua visão. Esta mentoria é o teu acesso a um estúdio de Hollywood no teu computador, transformando ideias em produções de qualidade profissional com uma fração do custo.'}</p>
            <ul style={{marginTop: '1rem', marginBottom: '1rem', paddingLeft: '0', listStyle: 'none'}}>
              <li style={{marginBottom: '0.5rem', color: '#3D3D3D', lineHeight: '1.4'}}>✱ {language === 'pt-BR' ? 'Aplicar técnicas avançadas como engenharia de prompt de imagem e vídeo, consistência, upscale, VFX, lipsync e deepfake para um acabamento profissional.' : 'Aplica técnicas avançadas como engenharia de prompt de imagem e vídeo, consistência, upscale, VFX, lipsync e deepfake para um acabamento profissional.'}</li>
              <li style={{marginBottom: '0.5rem', color: '#3D3D3D', lineHeight: '1.4'}}>✱ {language === 'pt-BR' ? 'Construir o seu arsenal de produção completo, ao explorar workflows envolvendo Midjourney, Google Veo3, Eleven Labs, Descript, ChatGPT, Flux, Suno, HeyGen, Kling, Runway, Hailuo, Capcut e muitas outras.' : 'Constrói o teu arsenal de produção completo, ao explorar workflows envolvendo Midjourney, Google Veo3, Eleven Labs, Descript, ChatGPT, Flux, Suno, HeyGen, Kling, Runway, Hailuo, Capcut e muitas outras.'}</li>
              <li style={{marginBottom: '0.5rem', color: '#3D3D3D', lineHeight: '1.4'}}>✱ {language === 'pt-BR' ? 'Executar, num laboratório 100% prático, uma campanha do zero, desde a criação de moodboard, logo, produto, mockup, avatar, UGC até culminar na produção de um anúncio de 30 segundos feito inteiramente com IA.' : 'Executa, num laboratório 100% prático, uma campanha do zero, desde a criação de moodboard, logo, produto, mockup, avatar, UGC até culminar na produção de um anúncio de 30 segundos feito inteiramente com IA.'}</li>
            </ul>
          </div>
          <div className="card card-raised" style={{padding: '2rem', flex: '1', maxWidth: '400px'}}>
            <img src="/lovable-uploads/fb394bd6-e0d1-46de-88d5-5d621c8514b9.png" alt="Automação IA" />
            <h3>Automação de Marketing com IA</h3>
            <div style={{display: 'inline-block', background: '#67BBC0', color: '#f7f1e1', fontFamily: "'Caprasimo', serif", fontSize: '0.875rem', fontWeight: '700', padding: '0.25rem 0.75rem', borderRadius: '4px', marginTop: '0.5rem', marginBottom: '1rem'}}>
              Mentoria 3
            </div>
            <p>{language === 'pt-BR' ? 'Aprenda a habilidade mais importante do futuro e ganhe uma vantagem quase desleal sobre a concorrência. Domine automação, mesmo sem qualquer experiência técnica, elevando a sua produtividade a outro patamar.' : 'Aprende a habilidade mais importante do futuro e ganha uma vantagem quase desleal sobre a tua concorrência. Domina a automação, mesmo sem qualquer experiência técnica, elevando a tua produtividade a um novo patamar.'}</p>
            <ul style={{marginTop: '1rem', marginBottom: '1rem', paddingLeft: '0', listStyle: 'none'}}>
              <li style={{marginBottom: '0.5rem', color: '#3D3D3D', lineHeight: '1.4'}}>✱ {language === 'pt-BR' ? 'Ir além das automações lineares clássicas, aprendendo a construir e orquestrar sistemas com múltiplos Agentes de IA, capazes de lidar com ambiguidades e tomar decisões dinâmicas.' : 'Vai além das automações lineares clássicas, aprendendo a construir e orquestrar sistemas com múltiplos Agentes de IA, capazes de lidar com ambiguidades e tomar decisões dinâmicas.'}</li>
              <li style={{marginBottom: '0.5rem', color: '#3D3D3D', lineHeight: '1.4'}}>✱ {language === 'pt-BR' ? 'Dominar do zero um arsenal de ferramentas low/no-code (Make, n8n, Apify, Airtable) e explorar técnicas avançadas como RAG, APIs e MCPs para construir sistemas robustos.' : 'Domina do zero um arsenal de ferramentas low/no-code (Make, n8n, Apify, Airtable) e explora técnicas avançadas como RAG, APIs e MCPs para construir sistemas robustos.'}</li>
              <li style={{marginBottom: '0.5rem', color: '#3D3D3D', lineHeight: '1.4'}}>✱ {language === 'pt-BR' ? 'Executar projetos que automatizam problemas reais: desde a geração de leads por scraping, lançamento de campanhas e qualificação, até o agendamento de reuniões e atendimento.' : 'Executa projetos que automatizam problemas reais: desde a geração de leads por scraping, lançamento de campanhas e qualificação, até o agendamento de reuniões e atendimento.'}</li>
              <li style={{marginBottom: '0.5rem', color: '#3D3D3D', lineHeight: '1.4'}}>✱ {language === 'pt-BR' ? 'Desbloquear o poder do Vibe Coding para desenvolver apps, ferramentas e lead magnets complexos sem saber programar. Foque na ideia e resultado, em um fluxo contínuo e agradável de criação, enquanto a IA faz o trabalho duro.' : 'Desbloqueia o poder do Vibe Coding para desenvolver apps, ferramentas e lead magnets complexos sem saber programar. Foca-te na ideia e resultado, num fluxo contínuo e agradável de criação, enquanto a IA faz o trabalho duro.'}</li>
            </ul>
          </div>
        </div>
          <div style={{textAlign:'center', marginTop:'2rem'}}>
            <a href="#formulario" className="cta-secondary">Ver Preços e Próximas Turmas</a>
          </div>
        </div>
      </section>

      {/* Bonuses & Community */}
      <section className="bonuses-community" style={{background:'#E0F2F3', padding:'4rem 1rem'}}>
        <div className="bonus-container max-w-6xl mx-auto">
          <div className="bonus-header">
            <h2><span style={{textShadow: '3px 3px 0px #FDE68A'}}>{language === 'pt-BR' ? 'Para Garantir a Sua Decolagem, Incluímos o Combustível Extra' : 'Para Garantir a Tua Descolagem, Incluímos o Combustível Extra'}</span><br />
            <span className="bonus-included-text" style={{fontSize:'1rem', fontWeight:400}}>(incluído em todas as mentorias, sem custo adicional)</span></h2>
            <p>{language === 'pt-BR' ? 'Ao garantir a sua vaga na mentoria, recebe automaticamente e sem qualquer custo adicional acesso a este ecossistema de valor. Cada bónus foi desenhado para acelerar os seus resultados e mantê-lo na vanguarda, muito depois de a mentoria terminar.' : 'Ao garantires a tua vaga na mentoria, recebes automaticamente e sem qualquer custo adicional acesso a um ecossistema de valor. Cada bónus foi desenhado para acelerar os teus resultados e manter-te na vanguarda, muito depois de a mentoria terminar.'}</p>
          </div>
          <div className="bonus-list">
            <div className="bonus-item card-raised bonus-guides">
              <img src="/lovable-uploads/36c32b95-f826-4be1-a77a-6d166afa9ec9.png" alt="Guias Vivos" />
              <div className="bonus-item-content">
                <h3>1 Ano de Guias Vivos</h3>
                <div className="value-tag"><s>Valor: {language === 'pt-BR' ? '2.000R$' : '324€/ano'}</s></div>
                <span className="tag-included">incluído</span>
                <p>{language === 'pt-BR' ? 'O seu investimento na mentoria não pode ficar obsoleto. Por isso, criámos os nossos 3 Guias Vivos: uma base de conhecimento que está sempre 100% atualizada com as novidades de IA. Tenha acesso 24/7 a prompts, ferramentas testadas e estratégias que só partilhamos dentro do nosso ecossistema.' : 'O teu investimento na mentoria não pode ficar obsoleto. Por isso, criámos os nossos 3 Guias Vivos: uma base de conhecimento que está sempre 100% atualizada com as novidades de IA. Terás acesso 24/7 a prompts, ferramentas testadas e estratégias que só partilhamos dentro do nosso ecossistema.'}</p>
              </div>
            </div>
            <div className="bonus-item card-raised bonus-community">
              <img src="/lovable-uploads/7dd9bd91-9bcd-4fd6-80b4-8c8dc8ee647e.png" alt="Comunidade Discord" />
              <div className="bonus-item-content">
                <h3>Comunidade Visionários do Marketing</h3>
                <div className="value-tag"><s>Valor: {language === 'pt-BR' ? '630R$' : '108€/ano'}</s></div>
                <span className="tag-included">incluído</span>
                <p>{language === 'pt-BR' ? 'A inovação é um desporto de equipa. Entre para o círculo fechado dos profissionais que, como você, estão na linha da frente a testar as novas fronteiras da IA. Um ambiente para partilhar o que funciona, receber ajuda para o que não funciona, e encontrar parceiros para as suas próximas missões profissionais.' : 'A inovação é um desporto de equipa. Entra para o círculo fechado dos profissionais que, como tu, estão na linha da frente a testar as novas fronteiras da IA. Um ambiente para partilhar o que funciona, receber ajuda para o que não funciona, e encontrar parceiros para as tuas próximas missões profissionais.'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="social-proof" style={{background:'#FCF9F2', padding:'4rem 1rem'}}>
        <div className="proof-container max-w-6xl mx-auto">
          <div className="proof-header">
            <h2 style={{textShadow: '3px 3px 0px #FF8C9B'}}>O Que Dizem Nossos Comandantes</h2>
            <p>Histórias reais de marketers que transformaram as suas carreiras — e os seus resultados — com o nosso plano de voo em IA.</p>
          </div>
          <div className="testimonials">
            <div className="testimonial">
              <img src="/lovable-uploads/ff179a0b-4c4e-4026-88e8-cd4e4ccf43d7.png" alt="Luísa Lemos depoimento" />
              <blockquote>"Com IA, o meu processo criativo, antes demorado, vai da ideia à execução muito mais rápido!"</blockquote>
              <cite>— Luísa Lemos, Brand Strategist</cite>
            </div>
            <div className="testimonial">
              <img src="/lovable-uploads/daa2fade-028f-458c-b36f-121f2636fdd2.png" alt="Rita Bandeira depoimento" />
              <blockquote>"Mesmo não sendo marketer, ganhei sentido crítico para aplicar a IA em qualquer projeto."</blockquote>
              <cite>— Rita Bandeira, Project Manager na Sword Health</cite>
            </div>
            <div className="testimonial">
              <img src="/lovable-uploads/1310eb1a-7a6f-4423-832a-9869d3f3368b.png" alt="Pedro Lino depoimento" />
              <blockquote>"Enquanto o mundo fala de ChatGPT, eu já uso o que nem 10% do mercado conhece."</blockquote>
              <cite>— Pedro Lino, Empreendedor</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Offer */}
      <section className="pricing-offer-cards" style={{background:'#E5DBC7', padding:'4rem 1rem'}}>
        <div className="max-w-6xl mx-auto">
          <h2 style={{fontFamily:"'Caprasimo',serif", fontSize:'2.5rem', fontWeight:700, color:'#1B1B1B', textAlign:'center', marginBottom:'2rem', textShadow: '3px 3px 0px #A8DEE0'}}>
            {language === 'pt-BR' ? 'Escolha o Seu Plano de Voo' : 'Escolhe o Teu Plano de Voo'}
          </h2>
          <div className="cards-container">
          <div className="price-card">
            <h3>Mentoria Avulsa</h3>
            <div className="price-original">{language === 'pt-BR' ? '1.450R$' : '230€'}</div>
            <div className="price-value">{language === 'pt-BR' ? '1.200R$' : '184€'}</div>
            <div className="price-note">(20% desconto pré-lançamento)</div>
            <ul className="inclusions">
              <li><span>✱</span>{language === 'pt-BR' ? '20h de mentoria ao longo de 1 mês' : '20h de mentoria durante 1 mês'}</li>
              <li><span>✱</span>Grupos de 8 a 12 profissionais de marketing</li>
              <li><span>✱</span>Guias Vivos <s>({language === 'pt-BR' ? '2.000R$' : '324€/ano'})</s> <span className="tag-included-container"><span className="tag-included-bg"><span className="tag-included-text">incluído</span></span></span></li>
              <li><span>✱</span>Comunidade Visionários <s>({language === 'pt-BR' ? '680R$' : '108€/ano'})</s> <span className="tag-included-container"><span className="tag-included-bg"><span className="tag-included-text">incluído</span></span></span></li>
            </ul>
            <label htmlFor="mission-select" style={{fontFamily:"'Caprasimo',serif", fontSize:'1rem', color:'#1B1B1B', marginBottom:'0.5rem'}}>{language === 'pt-BR' ? 'Escolha a sua missão:' : 'Escolhe a tua missão:'}</label>
            <select 
              id="mission-select" 
              className="select-mission"
              value={selectedMission}
              onChange={(e) => setSelectedMission(e.target.value)}
            >
              <option value="" hidden>Selecionar missão</option>
              <option value="conteudo">IA para Criação de Conteúdo</option>
              <option value="audiovisual">IA para Produção Audiovisual</option>
              <option value="automacao">IA para Automação de Marketing</option>
            </select>
            
            {selectedMission && (
              <div style={{marginTop: '1rem', marginBottom: '1rem'}}>
                <div style={{
                  display: 'flex',
                  gap: '4px',
                  marginBottom: '0.5rem',
                  height: '24px'
                }}>
                  {Array.from({ length: 12 }).map((_, index) => {
                    const enrollmentCounts = { conteudo: 3, audiovisual: 6, automacao: 9 };
                    const enrolled = enrollmentCounts[selectedMission as keyof typeof enrollmentCounts] || 0;
                    return (
                      <div
                        key={index}
                        style={{
                          flex: 1,
                          backgroundColor: index < enrolled ? '#67BBC0' : '#E5DBC7',
                          borderRadius: '2px',
                          transition: 'background-color 0.3s ease'
                        }}
                      />
                    );
                  })}
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#3D3D3D',
                  marginBottom: '0.75rem',
                  textAlign: 'center'
                }}>
                  {(() => {
                    const enrollmentCounts = { conteudo: 3, audiovisual: 6, automacao: 9 };
                    const enrolled = enrollmentCounts[selectedMission as keyof typeof enrollmentCounts] || 0;
                    return `${12 - enrolled} vagas disponíveis`;
                  })()}
                </div>
                <div style={{
                  fontSize: '0.95rem',
                  color: '#1B1B1B',
                  fontWeight: 600,
                  textAlign: 'center',
                  fontFamily: "'Oswald', sans-serif"
                }}>
                  {selectedMission === 'conteudo' && (language === 'pt-BR' ? 'Horário: 2ª e 4ª às 17h' : 'Horário: 2ª e 4ª às 21h')}
                  {selectedMission === 'audiovisual' && (language === 'pt-BR' ? 'Horário: 3ª e 5ª às 17h' : 'Horário: 3ª e 5ª às 21h')}
                  {selectedMission === 'automacao' && (language === 'pt-BR' ? 'Horário: 2ª e 4ª às 17h' : 'Horário: 2ª e 4ª às 21h')}
                </div>
              </div>
            )}
            
            <a href="#formulario" className="cta-card">Reservar Mentoria Avulsa</a>
          </div>
          <div className="price-card highlight">
            <div className="badge">MELHOR VALOR</div>
            <h3>Pacote 3 Mentorias</h3>
            <div className="price-original">{language === 'pt-BR' ? '4.350R$' : '690€'}</div>
            <div className="price-value">{language === 'pt-BR' ? '3.140R$' : '497€'}</div>
            <div className="price-note">(+10% desconto no pacote)</div>
            <ul className="inclusions">
              <li><span>✱</span>60h de mentoria (3 x 20h)</li>
              <li style={{fontSize:'0.875rem', color:'#3D3D3D', paddingLeft:'1.5rem'}}>– IA para Criação de Conteúdo</li>
              <li style={{fontSize:'0.875rem', color:'#3D3D3D', paddingLeft:'1.5rem'}}>– IA para Produção Audiovisual</li>
              <li style={{fontSize:'0.875rem', color:'#3D3D3D', paddingLeft:'1.5rem'}}>– IA para Automação de Marketing</li>
              <li><span>✱</span>1 hora de Consultoria Individual</li>
              <li><span>✱</span>Inclui todos os benefícios da Mentoria Avulsa</li>
            </ul>
            <a href="#formulario" className="cta-card">Reservar Pacote Completo</a>
          </div>
        </div>
          <div style={{textAlign:'center', marginTop:'1.5rem', color:'#1B1B1B', fontSize:'1rem', display:'flex', alignItems:'center', justifyContent:'center', gap:'0.5rem'}}>
            <img src="/lovable-uploads/1d68c02c-1579-450d-b879-266bde8d46d4.png" alt="Garantia" style={{width:'20px', height:'20px'}} />
            <span>Risco Zero: Reembolso total após a 1.ª aula se não estiveres 100% satisfeito.</span>
          </div>
        </div>
      </section>

      {/* FAQ & CTA Final */}
      <section className="faq-cta" style={{backgroundColor:'#FCF9F2', padding:'4rem 1rem'}}>
        <div className="container max-w-6xl mx-auto" style={{display:'flex', flexDirection:'column', gap:'2.5rem'}}>
          <div className="faq" style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
            <details><summary>Preciso de tempo extra para acompanhar as aulas?</summary><div>{language === 'pt-BR' ? 'Sabemos que a sua agenda está sempre ao rubro. Por isso, cada sessão de 2h30m é gravada em alta qualidade e disponibilizada nos Guias Vivos, permitindo rever as lições a qualquer momento. Em vez de roubar o seu tempo, esta mentoria é desenhada para devolvê‑lhe tempo livre: aprenda a otimizar fluxos com IA e ganhe horas semanais para o que realmente importa.' : 'Sabemos que a tua agenda está sempre ao rubro. Por isso, cada sessão de 2h30m é gravada em alta qualidade e disponibilizada nos Guias Vivos, permitindo rever as lições a qualquer momento. Em vez de roubar o teu tempo, esta mentoria é desenhada para te devolver tempo livre: aprende a otimizar fluxos com IA e ganha horas semanais para o que realmente importa.'}</div></details>
            <details><summary>Não estou seguro do meu nível de domínio de IA.</summary><div>{language === 'pt-BR' ? 'Esta mentoria foi concebida exatamente para si, independentemente do seu ponto de partida. Começamos com o essencial — conhecer o "Olá, Mundo!" da IA — e evoluímos progressivamente para casos avançados. Além das aulas, poderá trocar ideias com a comunidade Visionários do Marketing, garantindo suporte contínuo. Ao final das 20h, terá confiança para criar, automatizar e liderar projetos com IA.' : 'Esta mentoria foi concebida exatamente para ti, independentemente do teu ponto de partida. Começamos com o essencial — conhecer o "Olá, Mundo!" da IA — e evoluímos progressivamente para casos avançados. Além das aulas, poderás trocar ideias com a comunidade Visionários do Marketing, garantindo suporte contínuo. Ao final das 20h, terás a confiança para criar, automatizar e liderar projetos com IA.'}</div></details>
            <details><summary>Qual será o retorno sobre o investimento?</summary><div>{language === 'pt-BR' ? 'O ROI traduz-se em três níveis:' : 'O ROI traduz-se em três níveis:'}<ol style={{margin:'0.5rem 0 0', paddingLeft:'1.5rem'}}><li><strong>Eficiência</strong>: {language === 'pt-BR' ? 'Automatize até 50% dos seus fluxos de marketing e recupere dezenas de horas por mês.' : 'Automatiza até 50% dos teus fluxos de marketing e recupera dezenas de horas por mês.'}</li><li><strong>Performance</strong>: {language === 'pt-BR' ? 'Crie conteúdos e anúncios que convertem melhor, aumentando leads e engagement.' : 'Cria conteúdos e anúncios que convertem melhor, aumentando leads e engagement.'}</li><li><strong>Carreira</strong>: {language === 'pt-BR' ? 'Posicione-se como especialista em IA, atraindo melhores oportunidades e salários.' : 'Posiciona-te como especialista em IA, atraindo melhores oportunidades e salários.'} Muitos dos nossos alunos confirmam que o tempo poupado e os ganhos em performance superam facilmente o investimento inicial.</li></ol></div></details>
            <details><summary>A que terei acesso exatamente após a inscrição?</summary><div>{language === 'pt-BR' ? 'Imediatamente após a confirmação do pagamento, receberá um e-mail de boas-vindas com o seu acesso à nossa comunidade exclusiva no Discord e aos Guias Vivos. Os detalhes e o calendário para as sessões ao vivo da sua turma serão enviados na semana anterior ao início da mentoria.' : 'Imediatamente após a confirmação do pagamento, receberás um e-mail de boas-vindas com o seu acesso à nossa comunidade exclusiva no Discord e aos Guias Vivos. Os detalhes e o calendário para as sessões ao vivo da tua turma serão enviados na semana anterior ao início da mentoria.'}</div></details>
            <details><summary>E se eu faltar a uma aula ao vivo?</summary><div>{language === 'pt-BR' ? 'Não há problema. Todas as sessões são gravadas e disponibilizadas na nossa plataforma em até 24 horas. Poderá assistir quando quiser e quantas vezes precisar. Além disso, pode sempre colocar as suas dúvidas sobre a aula na comunidade do Discord.' : 'Não há problema. Todas as sessões são gravadas e disponibilizadas na nossa plataforma até 24 horas. Poderás assistir quando quiseres e quantas vezes precisares. Além disso, podes sempre colocar as tuas dúvidas sobre a aula na comunidade do Discord.'}</div></details>
            <details><summary>As ferramentas de IA que vamos usar são pagas? Terei custos extra?</summary><div>{language === 'pt-BR' ? 'A grande maioria das mais de 30 ferramentas que exploramos possui versões gratuitas robustas, que são suficientes para realizar todos os exercícios da mentoria. Para algumas ferramentas mais avançadas, mostraremos como aproveitar os períodos de teste gratuito (free trials) para que não tenha qualquer custo adicional durante o curso.' : 'A grande maioria das mais de 30 ferramentas que exploramos possui versões gratuitas robustas, que são suficientes para realizar todos os exercícios da mentoria. Para algumas ferramentas mais avançadas, mostraremos como aproveitar os períodos de teste gratuito (free trials) para que não tenhas qualquer custo adicional durante o curso.'}</div></details>
            <details><summary>Esta mentoria é só teórica ou vamos mesmo "pôr a mão na massa"?</summary><div>{language === 'pt-BR' ? 'A nossa filosofia é \'aprender fazendo\'. Cada sessão tem uma componente teórica curta e direta, seguida de exercícios práticos onde você irá aplicar imediatamente o que aprendeu. O objetivo é que termine cada aula com algo novo que pode usar no seu trabalho no dia seguinte.' : 'A nossa filosofia é \'aprender fazendo\'. Cada sessão tem uma componente teórica curta e direta, seguida de exercícios práticos onde vais aplicar imediatamente o que aprendeste. O objetivo é que termines cada aula com algo novo que podes usar no teu trabalho no dia seguinte.'}</div></details>
            <details><summary>Que tipo de suporte terei se ficar com dúvidas ou bloqueado?</summary><div>{language === 'pt-BR' ? 'Você nunca estará sozinho. Terá suporte contínuo através de três canais: durante as aulas ao vivo para interação direta, na nossa comunidade exclusiva no Discord para perguntas rápidas e feedback dos colegas e do mentor, e nas sessões mensais de Q&A da comunidade, mesmo após o fim da sua mentoria.' : 'Nunca estarás sozinho. Terás suporte contínuo através de três canais: durante as aulas ao vivo para interação direta; na nossa comunidade exclusiva no Discord para perguntas rápidas e feedback dos colegas e do mentor; e, nas sessões mensais de Q&A da comunidade, mesmo após o fim da tua mentoria.'}</div></details>
            <details><summary>O acesso à comunidade e aos guias é vitalício?</summary><div>{language === 'pt-BR' ? 'O seu acesso à comunidade \'Visionários do Marketing\' no Discord é vitalício. O acesso aos \'Guias Vivos\' está incluído por um período de 12 meses após a sua inscrição, garantindo que se mantém atualizado durante um ano inteiro.' : 'O teu acesso à comunidade \'Visionários do Marketing\' no Discord é vitalício. O acesso aos \'Guias Vivos\' está incluído por um período de 12 meses após a tua inscrição, garantindo que te manténs atualizado durante um ano inteiro.'}</div></details>
            <details><summary>Qual é a diferença entre esta mentoria e um curso online sobre IA?</summary><div>{language === 'pt-BR' ? 'Cursos ensinam ferramentas. A mentoria Atomica leva-o a outro nível: ensina-o a pensar e agir estrategicamente com IA, com acompanhamento direto, frameworks comprovadas e resultados imediatos. Enquanto os cursos convencionais ficam desatualizados rapidamente, a Atómica está sempre na linha da frente dos últimos lançamentos de IA — para que aplique hoje o que o mercado só vai descobrir amanhã.' : 'Cursos ensinam ferramentas. A mentoria Atomica leva-te a outro nível: ensina-te a pensar e agir estrategicamente com IA, com acompanhamento direto, frameworks comprovadas e resultados imediatos.'}</div></details>
            <details><summary>Quanto tempo preciso dedicar por semana?</summary><div>{language === 'pt-BR' ? 'Cada sessão tem em média 2h30 e todas ficam gravadas para que você possa rever quando quiser. Além disso, propomos desafios práticos rápidos (30 a 60 minutos) para aplicar o que aprendeu no seu próprio contexto.\nAo todo, o curso conta com 20 horas de formação, e 2 a 3 horas por semana são suficientes para aproveitar ao máximo a mentoria.' : 'Cada sessão tem em média 2h30 e todas ficam gravadas para que possas rever quando quiseres. Além disso, propomos desafios práticos rápidos (30–60 minutos) para aplicares o que aprendeste no teu próprio contexto.\nNo total, o curso inclui 20 horas de formação, e bastam 2 a 3 horas por semana para tirares o máximo proveito da mentoria.'}</div></details>
            <details><summary>As turmas têm vagas limitadas?</summary><div>{language === 'pt-BR' ? 'Sim! Cada turma é formada por, no máximo, 12 participantes, para que você tenha atenção individual, tempo para praticar e ainda troque experiências com outros profissionais, ampliando seu networking de forma estratégica.' : 'Sim! Cada turma é formada por, no máximo, 12 participantes, para que tenhas a atenção individual necessária, tempo para praticar e ainda troques experiências com outros profissionais, ampliando teu networking de forma estratégica.'}</div></details>
          </div>
          <div className="value-stack card-raised">
            <p><strong>Resumo de Valor:</strong></p>
            <ul>
              <li>Mentoria de 20h (Valor Original: {language === 'pt-BR' ? '1.450R$' : '230€'})</li>
              <li>Guias Vivos (Assinatura Anual: {language === 'pt-BR' ? '2.000R$' : '324€'})</li>
              <li>Comunidade Visionários do Marketing (Assinatura Anual: {language === 'pt-BR' ? '680R$' : '108€'})</li>
            </ul>
            <p><strong>Valor Original Total:</strong> <span style={{color:'#FF304C', fontWeight:700}}>{language === 'pt-BR' ? '4.180R$' : '662€'}</span></p>
            <div className="investment-highlight">{language === 'pt-BR' ? 'O seu investimento hoje:' : 'O teu investimento hoje:'} Apenas <span style={{color: '#1B1B1B', textShadow: '2px 2px 0px #FCCA29'}}>{language === 'pt-BR' ? '1.200R$' : '184€'}</span></div>
          </div>
          <div className="cta-final" style={{textAlign:'center'}}>
            <h2 style={{fontFamily:"'Caprasimo',serif", fontSize:'2.5rem', color:'#1B1B1B', marginBottom:'1rem', textShadow: '3px 3px 0px #A8DEE0'}}>
              {language === 'pt-BR' ? 'Pronto para assumir o comando da sua carreira?' : 'Pronto para assumires o comando da tua carreira profissional?'}
            </h2>
            <a href="#formulario" className="cta-primary">ASSUMIR O MEU LUGAR NO COMANDO</a>
            <p style={{fontSize:'0.875rem', marginTop:'0.75rem', color:'#3D3D3D'}}>
              Apenas 12 vagas por turma. Risco Zero com a nossa Garantia Total.
            </p>
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section id="formulario" className="signup-form bg-grain-pulp" style={{padding:'4rem 1rem'}}>
        <div className="max-w-6xl mx-auto">
          <form onSubmit={async (e) => {
            e.preventDefault();
            const button = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;
            const originalText = button.textContent;
            const form = e.target as HTMLFormElement;
            
            // Get form values
            const nome = (form.querySelector('#nome-completo') as HTMLInputElement).value.trim();
            const email = (form.querySelector('#email') as HTMLInputElement).value.trim();
            const telefone = (form.querySelector('#phone') as HTMLInputElement).value.trim();
            
            // Client-side validation
            if (nome.length < 2 || nome.length > 100) {
              alert('Nome deve ter entre 2 e 100 caracteres.');
              return;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
              alert('Por favor, insira um email válido.');
              return;
            }
            
            const phoneRegex = /^[0-9\s\-\+\(\)]+$/;
            if (!phoneRegex.test(telefone) || telefone.length < 6) {
              alert('Por favor, insira um telefone válido.');
              return;
            }
            
            // Get selected mentorships
            const mentoriasInputs = form.querySelectorAll('input[name="Mentoria(s) de Interesse"]:checked') as NodeListOf<HTMLInputElement>;
            const mentorias = Array.from(mentoriasInputs).map(input => input.value);
            
            button.textContent = 'ENVIANDO...';
            button.disabled = true;
            
            try {
              const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-form`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome, email, telefone, mentorias })
              });
              
              const data = await response.json();
              
              if (response.ok && data.success) {
                button.textContent = 'Recebemos a sua inscrição!';
                button.style.backgroundColor = '#22c55e';
                
                setTimeout(() => {
                  form.reset();
                  button.textContent = originalText;
                  button.disabled = false;
                  button.style.backgroundColor = '';
                }, 3000);
              } else {
                throw new Error(data.error || 'Erro ao enviar');
              }
              
            } catch (error) {
              console.error('Error:', error);
              button.textContent = 'Não foi possível enviar. Tente novamente.';
              button.style.backgroundColor = '#ef4444';
              
              setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
                button.style.backgroundColor = '';
              }, 3000);
            }
          }} className="card-raised" style={{maxWidth:'600px', margin:'0 auto', display:'flex', flexDirection:'column', gap:'1.5rem', padding: '2rem'}}>
          <h2 style={{fontFamily:"'Caprasimo',serif", fontSize:'2.5rem', textAlign:'center', marginBottom:'1rem', color: '#1B1B1B', textShadow: '3px 3px 0px #A8DEE0'}}>{language === 'pt-BR' ? 'Reserve a sua Vaga' : 'Reserva a tua Vaga'}</h2>
          <div>
              <label htmlFor="nome-completo" style={{fontWeight:600, display: 'block', marginBottom: '0.5rem'}}>Nome Completo</label>
              <input type="text" id="nome-completo" name="Nome Completo" placeholder="Maria Silva" required />
          </div>
          <div>
              <label htmlFor="email" style={{fontWeight:600, display: 'block', marginBottom: '0.5rem'}}>Email</label>
              <input type="email" id="email" name="E-mail" placeholder="email@exemplo.com" required />
          </div>
          <div>
              <label htmlFor="phone" style={{fontWeight:600, display: 'block', marginBottom: '0.5rem'}}>Telefone</label>
              <input type="tel" id="phone" name="Telefone" placeholder="912 345 678" required style={{width: '100%'}} />
          </div>
          <fieldset style={{border:'none', padding:0}}>
            <legend style={{fontWeight:600, marginBottom:'0.5rem'}}>Mentoria(s) de Interesse</legend>
            <div style={{display:'flex', flexDirection:'column', gap:'0.5rem'}}>
              <label className="checkbox-custom"><input type="checkbox" name="Mentoria(s) de Interesse" value="IA generativa para criação de conteúdo" /> IA generativa para criação de conteúdo</label>
              <label className="checkbox-custom"><input type="checkbox" name="Mentoria(s) de Interesse" value="IA generativa para audiovisual" /> IA generativa para audiovisual</label>
              <label className="checkbox-custom"><input type="checkbox" name="Mentoria(s) de Interesse" value="IA generativa para automação de marketing" /> IA generativa para automação de marketing</label>
            </div>
          </fieldset>
          <button type="submit" className="cta-primary" style={{width: '100%'}}>RESERVAR A MINHA VAGA</button>
          <p style={{fontSize:'0.875rem', color:'#555555', textAlign:'center', marginTop:'0.5rem'}}>
            {language === 'pt-BR' ? 'Junte-se aos profissionais de marketing de vanguarda. Risco Zero com a nossa Garantia Incondicional.' : 'Junta-te aos profissionais de marketing de vanguarda. Risco Zero com a nossa Garantia Incondicional.'}
          </p>
        </form>
        </div>
      </section>

      <footer className="footer-legal" style={{backgroundColor:'#E5DBC7', padding:'2rem 1rem', fontSize:'0.875rem'}}>
        <div style={{maxWidth:'800px', margin:'0 auto', textAlign:'center'}}>
          <p style={{margin:'0.25rem 0', color:'#1B1B1B', fontWeight:600}}>Cria com I.A. Unipessoal Lda. | NIF: 510000000 | Sede: Lisboa, Portugal</p>
          <div style={{margin: '0.5rem 0', display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'1rem'}}>
            <Link to="/politica-cookies" style={{color:'#1B1B1B', textDecoration:'none'}}>RGPD e Cookies</Link>
            <Link to="/politica-privacidade" style={{color:'#1B1B1B', textDecoration:'none'}}>Política de Privacidade</Link>
            <Link to="/termos-de-uso" style={{color:'#1B1B1B', textDecoration:'none'}}>Termos & Condições</Link>
          </div>
          <p style={{margin:'0.25rem 0', color:'#1B1B1B'}}>Contato: <a href="mailto:geral@criacomia.com" style={{color:'#1B1B1B', textDecoration:'none'}}>geral@criacomia.com</a></p>
          <p style={{margin:'0.25rem 0', color:'#555555'}}>© 2025 Cria com I.A. | Todos os direitos reservados.</p>
          <p style={{maxWidth:'800px', margin:'1rem auto 0', color:'#555555', lineHeight:1.4, textAlign:'center'}}>
            Disclaimer: Esta mentoria é uma ferramenta de capacitação educacional. Os resultados individuais podem variar e dependem do empenho e da aplicação de cada aluno. Este conteúdo não substitui consultoria jurídica, contabilística ou fiscal.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default Index;
