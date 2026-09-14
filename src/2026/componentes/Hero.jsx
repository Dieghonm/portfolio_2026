import React from 'react';
import '../styles/Hero.css'

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">


        <h1 className="hero-title">
          DIEGHO<br />
          <span className="gradient-text">MORAES</span>
        </h1>

        <div className="hero-subtitle">
          <p className="subtitle-main">Full Stack Developer</p>
          <p className="subtitle-focus">Foco e profundidade técnica em Frontend & Mobile</p>
        </div>

        <div className="hero-description">
        <p>
          Transformo problemas e necessidades reais em produtos digitais. 
          Gosto de entender o contexto antes de sair codando, porque cada projeto tem suas particularidades 
          e a melhor solução começa por entender bem o problema. Com experiência em desenvolvimento Full Stack 
          e profundidade técnica em Frontend, construo aplicações web e mobile modernas, buscando equilíbrio 
          entre experiência do usuário, qualidade técnica e simplicidade.
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
                <div className="hero-badge">
          <span className="badge-dot"></span>
          DISPONÍVEL PARA PROJETOS
        </div>
      </div>
    </section>
  );
}

export default Hero;