import React from 'react';
import '../styles/Hero.css'

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          DISPONÍVEL PARA PROJETOS
        </div>

        <h1 className="hero-title">
          DIEGHO<br />
          <span className="gradient-text">MORAES</span>
        </h1>

        <div className="hero-subtitle">
          <p className="subtitle-main">Full Stack Developer</p>
          <p className="subtitle-focus">Especialista em Frontend & Mobile</p>
        </div>

        <div className="hero-description">
          <p>
            Transformo ideias em produtos digitais excepcionais. Co-fundador da Duo Estúdio,
            desenvolvendo apps mobile do design ao deploy com React Native, TypeScript e Python.
          </p>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Anos de Experiência</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">40+</span>
            <span className="stat-label">Projetos Desenvolvidos</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Dedicação</span>
          </div>
        </div>

        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            VER PROJETOS <span>→</span>
          </a>
          <a href="#contact" className="btn btn-secondary">
            ENTRAR EM CONTATO
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;