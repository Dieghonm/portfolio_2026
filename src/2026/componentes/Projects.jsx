import React from 'react';
import '../styles/Projects.css'
import Carousel from './Carousel';

import edenInitial from '../../../data/Projetos/Eden-Map/00-inicial.png';
import edenHome from '../../../data/Projetos/Eden-Map/01-home.png';
import edenResoiracao from '../../../data/Projetos/Eden-Map/02-respiracao.png'; 
import edenMedit from '../../../data/Projetos/Eden-Map/03-medit.png';
import edenTrilha from '../../../data/Projetos/Eden-Map/04-trilha.png';
import edenVideo from '../../../data/Projetos/Eden-Map/05-video.png';

import doricaPC from '../../../data/Projetos/Dorica-Vitrine/pc.png'; 
import doricaMobile0 from '../../../data/Projetos/Dorica-Vitrine/mob0.jpeg';
import doricaMobile1 from '../../../data/Projetos/Dorica-Vitrine/mob1.jpeg';

import hit_finder1 from '../../../data/Projetos/hit_finder/hit_finder1.jpeg';
import hit_finder2 from '../../../data/Projetos/hit_finder/hit_finder2.jpeg';
import hit_finder3 from '../../../data/Projetos/hit_finder/hit_finder3.jpeg';
import hit_finder4 from '../../../data/Projetos/hit_finder/hit_finder4.jpeg';

function Projects() {
  const projectsData = [
    {
      title: "Eden Map",
      videos: ["UOKAQUN2pHc"],
      imgns: [edenInitial, edenHome, edenResoiracao, edenMedit, edenTrilha, edenVideo ],
      desc: "App mobile de jornada emocional com interface intuitiva, gamificação e dashboards. Desenvolvido end-to-end do design ao deploy na App Store e Play Store.",
      tech: ["React Native", "TypeScript", "Python", "PostgreSQL"],
      link: "https://github.com/Dieghonm/Eden-Map"
    },
    {
      title: "Dórica Vitrine",
      imgns: [doricaMobile0, doricaMobile1, doricaPC],
      desc: "Plataforma de visualização dos produtos mais vendidos dos mais de 20 catalogos de diferentes fabricas representados pela Dórica representações.",
      tech: ["react", "CSS", "JavaScript"],
      link: "https://dieghonm.github.io/Dorica-Vitrine/"
    },
    {
      title: "Karaokê Finder",
      imgns: [hit_finder1, hit_finder2,hit_finder3,hit_finder4],
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

  const buildMediaItems = (project) => {
    const videoItems = (project.videos || []).map((videoId) => ({
      type: 'video',
      videoId,
      alt: `${project.title} - video`,
    }));

    const imageItems = (project.imgns || []).map((image) => ({
      type: 'image',
      image,
      alt: `${project.title} - imagem`,
    }));

    return [...videoItems, ...imageItems];
  };

  return (
    <section className="projects" id="projects">
      
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-number"></span> PROJETOS EM DESTAQUE
        </h2>
        <p className="section-subtitle">
          Aplicações completas desenvolvidas com atenção aos detalhes, da concepção ao deploy
        </p>
      </div>

      <div className="projects-grid">
        {projectsData.map((project, index) => {
          const mediaItems = buildMediaItems(project);

          return (
            <div className="project-card" key={index}>
              {mediaItems.length > 0 ? (
                <Carousel
                  items={mediaItems}
                  itemsPerView={2}
                  autoPlay={true}
                  interval={3000}
                />
              ) : (
                <div className="project-image">{project.emoji}</div>
              )}

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
          );
        })}
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