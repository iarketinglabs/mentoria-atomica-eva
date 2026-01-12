import React, { useState, useEffect } from 'react';

const StickyBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };

    checkMobile();
    handleScroll();
    
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isMobile || !isVisible) return null;

  return (
    <div
      className="depth-layer"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FCF9F2',
        borderTop: '2px solid #1B1B1B',
        padding: '0.75rem 1rem',
        zIndex: 50,
        transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.3s ease-in-out',
        boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.15)',
      }}
    >
      <a
        href="#formulario"
        style={{
          display: 'block',
          width: '100%',
          textAlign: 'center',
          background: '#FCCA29',
          color: '#1B1B1B',
          fontFamily: "'Caprasimo', serif",
          fontSize: '0.95rem',
          fontWeight: 700,
          padding: '0.65rem 1.5rem',
          border: '2px solid #1B1B1B',
          borderRadius: '10px',
          cursor: 'pointer',
          boxShadow: '3px 3px 0 #67BBC0',
          textDecoration: 'none',
        }}
      >
        Garantir Vaga
      </a>
    </div>
  );
};

export default StickyBar;
