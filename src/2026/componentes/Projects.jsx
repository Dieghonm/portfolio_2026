import React from 'react';
import '../styles/Projects.css'

function Projects() {
  const projectsData = [
    {
      emoji: "🗺️",
      title: "Eden Map",
      desc: "App mobile de jornada emocional com interface intuitiva, gamificação e dashboards. Desenvolvido end-to-end do design ao deploy na App Store e Play Store.",
      tech: ["React Native", "TypeScript", "Python", "PostgreSQL"],
      link: "https://github.com/Dieghonm/Eden-Map"
    },
    {
      emoji: "📊",
      title: "Data Vision",
      desc: "Plataforma de visualização e análise de dados com dashboards interativos, filtros dinâmicos e múltiplos tipos de gráficos.",
      tech: ["Python", "Pandas", "Matplotlib", "Streamlit"],
      link: "https://github.com/Dieghonm/DataVision"
    },
    {
      emoji: "🎤",
      title: "Karaokê Finder",
      desc: "App mobile para busca e organização de músicas de karaokê com sistema de favoritos e filtros inteligentes.",
      tech: ["React Native", "Expo", "Context API"],
      link: "https://github.com/Dieghonm/hit_finder"
    },
    {
      emoji: "🎲",
      title: "Morpheus Project",
      desc: "Plataforma Full Stack para mestres de RPG com gerenciamento de personagens, campanhas e histórias.",
      tech: ["React", "Python", "Flask", "MySQL"],
      link: "https://github.com/Dieghonm/morpheus-project"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-number">02.</span> PROJETOS EM DESTAQUE
        </h2>
        <p className="section-subtitle">
          Aplicações completas desenvolvidas com atenção aos detalhes, da concepção ao deploy
        </p>
      </div>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">{project.emoji}</div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.desc}</p>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                VER CÓDIGO →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-footer">
        <a
          href="https://github.com/Dieghonm?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          VER TODOS NO GITHUB →
        </a>
      </div>
    </section>
  );
}

export default Projects;