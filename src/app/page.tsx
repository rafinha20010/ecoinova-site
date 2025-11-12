'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Leaf, TrendingUp, DollarSign, Shield, Menu, X, ArrowRight, CheckCircle, Users } from 'lucide-react';

export default function EcoInovaLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const valores = [
    {
      icon: <Leaf style={{ width: 48, height: 48, color: '#16a34a' }} />,
      titulo: "Sustentabilidade",
      desc: "Compromisso com o futuro do planeta através de energia limpa e renovável"
    },
    {
      icon: <TrendingUp style={{ width: 48, height: 48, color: '#16a34a' }} />,
      titulo: "Inovação",
      desc: "Tecnologia de ponta para maximizar a eficiência energética"
    },
    {
      icon: <Shield style={{ width: 48, height: 48, color: '#16a34a' }} />,
      titulo: "Transparência",
      desc: "Processos claros e honestos em cada etapa do projeto"
    },
    {
      icon: <DollarSign style={{ width: 48, height: 48, color: '#16a34a' }} />,
      titulo: "Custo-benefício",
      desc: "Soluções acessíveis sem comprometer a qualidade"
    }
  ];

  const equipe = [
    {
      nome: "Ana Paula Silva",
      cargo: "CEO & Fundadora",
      bio: "15 anos em energia renovável",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    },
    {
      nome: "Ricardo Mendes",
      cargo: "CTO",
      bio: "Especialista em sistemas fotovoltaicos",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      nome: "Juliana Costa",
      cargo: "Diretora de Operações",
      bio: "Gestão de projetos sustentáveis",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
    },
    {
      nome: "Carlos Oliveira",
      cargo: "Diretor Comercial",
      bio: "Conexão com clientes e comunidades",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
    }
  ];

  const timeline = [
    { ano: "2020", evento: "Fundação da EcoInova com foco em residências" },
    { ano: "2022", evento: "Expandimos para pequenos comércios, 500+ instalações" },
    { ano: "2024", evento: "Reconhecimento nacional em sustentabilidade" },
    { ano: "2030", evento: "Meta: Líderes em energia solar residencial" }
  ];

  return (
    <>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Header */
        .header {
          position: fixed;
          width: 100%;
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .header-scrolled {
          background: white;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 24px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 24px;
          font-weight: bold;
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 32px;
          list-style: none;
        }

        .nav-links a {
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }

        .mobile-menu {
          display: none;
          padding: 16px 0;
        }

        .mobile-menu.open {
          display: block;
        }

        .mobile-menu a {
          display: block;
          padding: 8px 0;
          text-decoration: none;
          color: #374151;
        }

        /* Hero */
        .hero {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(135deg, #16a34a 0%, #22c55e 50%, #10b981 100%);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.2);
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .hero-blob-1 {
          position: absolute;
          top: 80px;
          right: 80px;
          width: 384px;
          height: 384px;
          background: #fbbf24;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.2;
          animation: pulse 3s ease-in-out infinite;
        }

        .hero-blob-2 {
          position: absolute;
          bottom: 80px;
          left: 80px;
          width: 384px;
          height: 384px;
          background: #86efac;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.2;
          animation: pulse 3s ease-in-out infinite;
          animation-delay: 1s;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          color: white;
          max-width: 1200px;
          padding: 0 24px;
        }

        .hero-title {
          font-size: 64px;
          font-weight: bold;
          margin-bottom: 48px;
        }

        .manifesto-cards {
          display: flex;
          flex-direction: column;
          gap: 32px;
          max-width: 900px;
          margin: 0 auto 48px;
        }

        .manifesto-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 32px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .manifesto-card h2 {
          font-size: 24px;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .manifesto-card p {
          font-size: 20px;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: white;
          color: #16a34a;
          padding: 16px 32px;
          border-radius: 50px;
          font-weight: bold;
          font-size: 18px;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .cta-button:hover {
          background: #f0fdf4;
          transform: scale(1.05);
        }

        /* História */
        .historia-section {
          padding: 96px 24px;
          background: linear-gradient(to bottom, white, #f0fdf4);
        }

        .section-title {
          text-align: center;
          font-size: 48px;
          font-weight: bold;
          color: #111827;
          margin-bottom: 16px;
        }

        .section-line {
          width: 96px;
          height: 4px;
          background: #16a34a;
          margin: 0 auto 48px;
        }

        .historia-text {
          max-width: 900px;
          margin: 0 auto 48px;
          font-size: 20px;
          color: #374151;
          line-height: 1.8;
          text-align: center;
        }

        .timeline {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 4px;
          background: #16a34a;
        }

        .timeline-item {
          display: flex;
          align-items: center;
          margin-bottom: 48px;
          position: relative;
        }

        .timeline-item:nth-child(even) {
          flex-direction: row-reverse;
        }

        .timeline-content {
          width: 50%;
          padding: 0 32px;
        }

        .timeline-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          padding: 24px;
        }

        .timeline-item:nth-child(even) .timeline-card {
          text-align: left;
        }

        .timeline-item:nth-child(odd) .timeline-card {
          text-align: right;
        }

        .timeline-year {
          display: inline-block;
          background: #16a34a;
          color: white;
          padding: 8px 16px;
          border-radius: 50px;
          font-weight: bold;
          margin-bottom: 12px;
        }

        .timeline-event {
          color: #374151;
          font-size: 18px;
        }

        .timeline-dot {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: #16a34a;
          border: 4px solid white;
          border-radius: 50%;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .timeline-spacer {
          width: 50%;
        }

        /* Valores */
        .valores-section {
          padding: 96px 24px;
          background: white;
        }

        .valores-desc {
          text-align: center;
          font-size: 20px;
          color: #4b5563;
          max-width: 800px;
          margin: 0 auto 48px;
        }

        .valores-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 32px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .valor-card {
          background: linear-gradient(135deg, #f0fdf4 0%, white 100%);
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s;
          border: 1px solid #dcfce7;
        }

        .valor-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .valor-icon {
          width: 80px;
          height: 80px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
        }

        .valor-card:hover .valor-icon {
          transform: scale(1.1);
        }

        .valor-titulo {
          font-size: 24px;
          font-weight: bold;
          color: #111827;
          margin-bottom: 12px;
          text-align: center;
        }

        .valor-desc {
          color: #4b5563;
          text-align: center;
          line-height: 1.6;
        }

        /* Equipe */
        .equipe-section {
          padding: 96px 24px;
          background: linear-gradient(to bottom, #f0fdf4, white);
        }

        .equipe-desc {
          text-align: center;
          font-size: 20px;
          color: #4b5563;
          max-width: 800px;
          margin: 0 auto 48px;
        }

        .equipe-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 32px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .equipe-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s;
        }

        .equipe-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .equipe-img-container {
          position: relative;
          height: 256px;
          overflow: hidden;
        }

        .equipe-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }

        .equipe-card:hover .equipe-img {
          transform: scale(1.1);
        }

        .equipe-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, #16a34a, transparent);
          opacity: 0.6;
        }

        .equipe-info {
          padding: 24px;
        }

        .equipe-nome {
          font-size: 20px;
          font-weight: bold;
          color: #111827;
          margin-bottom: 4px;
        }

        .equipe-cargo {
          color: #16a34a;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .equipe-bio {
          color: #4b5563;
          font-size: 14px;
        }

        /* CTA Final */
        .cta-final {
          padding: 96px 24px;
          background: linear-gradient(135deg, #16a34a, #10b981);
          position: relative;
          overflow: hidden;
        }

        .cta-final-bg {
          position: absolute;
          inset: 0;
          opacity: 0.1;
        }

        .cta-final-blob-1 {
          position: absolute;
          top: 0;
          left: 0;
          width: 384px;
          height: 384px;
          background: #fbbf24;
          border-radius: 50%;
          filter: blur(80px);
        }

        .cta-final-blob-2 {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 384px;
          height: 384px;
          background: #86efac;
          border-radius: 50%;
          filter: blur(80px);
        }

        .cta-final-content {
          position: relative;
          z-index: 10;
          text-align: center;
          color: white;
          max-width: 1200px;
          margin: 0 auto;
        }

        .cta-final-title {
          font-size: 48px;
          font-weight: bold;
          margin-bottom: 24px;
        }

        .cta-final-subtitle {
          font-size: 24px;
          margin-bottom: 32px;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
          opacity: 0.9;
        }

        .cta-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
          align-items: center;
          margin-bottom: 64px;
        }

        .cta-button-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: white;
          color: #16a34a;
          padding: 20px 40px;
          border-radius: 50px;
          font-weight: bold;
          font-size: 18px;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .cta-button-primary:hover {
          background: #f0fdf4;
          transform: scale(1.05);
        }

        .cta-button-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: white;
          padding: 20px 40px;
          border-radius: 50px;
          font-weight: bold;
          font-size: 18px;
          border: 2px solid white;
          cursor: pointer;
          transition: all 0.3s;
        }

        .cta-button-secondary:hover {
          background: white;
          color: #16a34a;
          transform: scale(1.05);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 32px;
          max-width: 900px;
          margin: 0 auto;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 48px;
          font-weight: bold;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 18px;
          opacity: 0.9;
        }

        /* Footer */
        .footer {
          background: #111827;
          color: white;
          padding: 48px 24px;
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 24px;
          font-weight: bold;
        }

        .footer-text {
          text-align: center;
        }

        .footer-copyright {
          color: #9ca3af;
          margin-bottom: 8px;
        }

        .footer-tagline {
          color: #6b7280;
          font-size: 14px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .hero-title {
            font-size: 36px;
          }

          .manifesto-card h2 {
            font-size: 20px;
          }

          .manifesto-card p {
            font-size: 16px;
          }

          .section-title {
            font-size: 32px;
          }

          .timeline-line {
            left: 24px;
          }

          .timeline-item,
          .timeline-item:nth-child(even) {
            flex-direction: row;
          }

          .timeline-content {
            width: calc(100% - 60px);
            margin-left: 60px;
            padding: 0;
          }

          .timeline-card {
            text-align: left !important;
          }

          .timeline-dot {
            position: absolute;
            left: 0;
          }

          .timeline-spacer {
            display: none;
          }

          .cta-final-title {
            font-size: 32px;
          }

          .cta-final-subtitle {
            font-size: 18px;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .footer-content {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (min-width: 769px) {
          .footer-content {
            flex-direction: row;
            justify-content: space-between;
          }

          .footer-text {
            text-align: right;
          }
        }
      `}</style>

      <div>
        {/* Header */}
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
          <nav className="nav">
            <a href="#" className="logo">
              <Sun style={{ width: 32, height: 32, color: isScrolled ? '#16a34a' : 'white' }} />
              <span style={{ color: isScrolled ? '#111827' : 'white' }}>EcoInova</span>
            </a>
            
            <div className="nav-links">
              {['Manifesto', 'História', 'Valores', 'Equipe'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{ color: isScrolled ? '#374151' : 'white' }}
                >
                  {item}
                </a>
              ))}
            </div>

            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <X style={{ width: 24, height: 24, color: isScrolled ? '#111827' : 'white' }} />
              ) : (
                <Menu style={{ width: 24, height: 24, color: isScrolled ? '#111827' : 'white' }} />
              )}
            </button>
          </nav>

          {mobileMenuOpen && (
            <div className="mobile-menu open">
              {['Manifesto', 'História', 'Valores', 'Equipe'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </header>

        {/* Hero Section - Manifesto */}
        <section id="manifesto" className="hero">
          <div className="hero-overlay" />
          
          <div className="hero-bg">
            <div className="hero-blob-1" />
            <div className="hero-blob-2" />
          </div>

          <div className="hero-content">
            <h1 className="hero-title">Energia Limpa para Todos</h1>
            
            <div className="manifesto-cards">
              <div className="manifesto-card">
                <h2>
                  <Sun style={{ width: 32, height: 32 }} />
                  Nossa Missão
                </h2>
                <p>Democratizar o acesso à energia limpa no Brasil</p>
              </div>
              
              <div className="manifesto-card">
                <h2>
                  <TrendingUp style={{ width: 32, height: 32 }} />
                  Nossa Visão
                </h2>
                <p>Ser líder em soluções de energia solar residencial até 2030</p>
              </div>
            </div>

            <button className="cta-button">
              Faça um Orçamento Gratuito
              <ArrowRight style={{ width: 20, height: 20 }} />
            </button>
          </div>
        </section>

        {/* Nossa História */}
        <section id="história" className="historia-section">
          <div className="container">
            <h2 className="section-title">Nossa História</h2>
            <div className="section-line" />

            <p className="historia-text">
              Fundada em 2020, a <strong>EcoInova</strong> nasceu do sonho de tornar a energia solar acessível para cada lar brasileiro. 
              Começamos com uma pequena equipe apaixonada por sustentabilidade e, desde então, já transformamos mais de 500 residências 
              e estabelecimentos comerciais em exemplos de eficiência energética. Nosso compromisso vai além da instalação: 
              construímos um futuro mais verde, um teto solar por vez.
            </p>

            <div className="timeline">
              <div className="timeline-line" />
              
              {timeline.map((item, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-content">
                    <div className="timeline-card">
                      <span className="timeline-year">{item.ano}</span>
                      <p className="timeline-event">{item.evento}</p>
                    </div>
                  </div>
                  
                  <div className="timeline-dot">
                    <CheckCircle style={{ width: 24, height: 24, color: 'white' }} />
                  </div>
                  
                  <div className="timeline-spacer" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Valores */}
        <section id="valores" className="valores-section">
          <div className="container">
            <h2 className="section-title">Nossos Valores</h2>
            <p className="valores-desc">
              Princípios que guiam cada decisão e projeto da EcoInova
            </p>
            <div className="section-line" />

            <div className="valores-grid">
              {valores.map((valor, idx) => (
                <div key={idx} className="valor-card">
                  <div className="valor-icon">{valor.icon}</div>
                  <h3 className="valor-titulo">{valor.titulo}</h3>
                  <p className="valor-desc">{valor.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipe */}
        <section id="equipe" className="equipe-section">
          <div className="container">
            <h2 className="section-title">Conheça Nossa Equipe</h2>
            <p className="equipe-desc">
              Especialistas apaixonados por transformar o futuro energético do Brasil
            </p>
            <div className="section-line" />

            <div className="equipe-grid">
              {equipe.map((membro, idx) => (
                <div key={idx} className="equipe-card">
                  <div className="equipe-img-container">
                    <img src={membro.img} alt={membro.nome} className="equipe-img" />
                    <div className="equipe-img-overlay" />
                  </div>
                  <div className="equipe-info">
                    <h3 className="equipe-nome">{membro.nome}</h3>
                    <p className="equipe-cargo">{membro.cargo}</p>
                    <p className="equipe-bio">{membro.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="cta-final">
          <div className="cta-final-bg">
            <div className="cta-final-blob-1" />
            <div className="cta-final-blob-2" />
          </div>
          
          <div className="cta-final-content">
            <h2 className="cta-final-title">Pronto para Transformar sua Energia?</h2>
            <p className="cta-final-subtitle">
              Junte-se a centenas de brasileiros que já reduziram suas contas de luz em até 95%
            </p>
            
            <div className="cta-buttons">
              <button className="cta-button-primary">
                Solicitar Orçamento Gratuito
                <ArrowRight style={{ width: 20, height: 20 }} />
              </button>
              <button className="cta-button-secondary">
                <Users style={{ width: 20, height: 20 }} />
                Falar com Especialista
              </button>
            </div>

            <div className="stats-grid">
              <div className="stat-item">
                <p className="stat-number">500+</p>
                <p className="stat-label">Instalações Realizadas</p>
              </div>
              <div className="stat-item">
                <p className="stat-number">95%</p>
                <p className="stat-label">Economia Média</p>
              </div>
              <div className="stat-item">
                <p className="stat-number">4.9★</p>
                <p className="stat-label">Avaliação dos Clientes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-logo">
              <Sun style={{ width: 32, height: 32, color: '#4ade80' }} />
              <span>EcoInova Ltda.</span>
            </div>
            
            <div className="footer-text">
              <p className="footer-copyright">
                © 2024 EcoInova. Todos os direitos reservados.
              </p>
              <p className="footer-tagline">
                Democratizando o acesso à energia limpa no Brasil
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}