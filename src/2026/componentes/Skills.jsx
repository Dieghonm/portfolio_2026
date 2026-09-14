import {
  Smartphone,
  Server,
  ChartNoAxesCombined,
  Wrench
} from 'lucide-react';

import React from 'react';
import '../styles/Skills.css';

function Skills() {
  const skillsData = [
    {
      icon: Smartphone,
      title: "Frontend & Mobile",
      items: [
        { name: "React.js", description: "Biblioteca para criação de interfaces web interativas." },
        { name: "React Native", description: "Framework para desenvolvimento de aplicativos mobile multiplataforma." },
        { name: "JavaScript", description: "Linguagem essencial para aplicações web modernas." },
        { name: "TypeScript", description: "JavaScript com tipagem estática para código mais seguro." },
        { name: "Expo", description: "Plataforma para desenvolvimento e publicação de apps React Native." },
        { name: "Next.js", description: "Framework React para aplicações web rápidas e escaláveis." },
        { name: "TailwindCSS", description: "Framework CSS baseado em classes utilitárias." },
        { name: "Styled Components", description: "Estilização de componentes React utilizando CSS-in-JS." }
      ]
    },
    {
      icon: Server,
      title: "Backend & Database",
      items: [
        { name: "Node.js", description: "Runtime JavaScript para desenvolvimento de aplicações backend." },
        { name: "Python", description: "Linguagem versátil para backend, automação e dados." },
        { name: "FastAPI", description: "Framework Python moderno para criação de APIs rápidas." },
        { name: "Django", description: "Framework Python completo para desenvolvimento web." },
        { name: "Java", description: "Linguagem robusta utilizada em aplicações e sistemas backend." },
        { name: "Spring", description: "Framework Java para construção de aplicações backend." },
        { name: "REST APIs", description: "Arquitetura para comunicação entre aplicações através de HTTP." },
        { name: "PostgreSQL", description: "Banco de dados relacional open source avançado." },
        { name: "MongoDB", description: "Banco de dados NoSQL orientado a documentos." },
        { name: "JWT", description: "Padrão utilizado para autenticação e troca segura de informações." }
      ]
    },
    {
      icon: ChartNoAxesCombined,
      title: "Data Science",
      items: [
        { name: "Pandas", description: "Biblioteca Python para análise e manipulação de dados." },
        { name: "NumPy", description: "Biblioteca Python para computação numérica e científica." },
        { name: "Matplotlib", description: "Biblioteca para criação de gráficos e visualizações de dados." },
        { name: "Seaborn", description: "Biblioteca para visualização estatística baseada em Matplotlib." },
        { name: "Streamlit", description: "Framework Python para criação rápida de aplicações de dados." },
        { name: "Data Analysis", description: "Análise de dados para encontrar padrões e gerar insights." }
      ]
    },
    {
      icon: Wrench,
      title: "DevOps & Tools",
      items: [
        { name: "Git", description: "Sistema de controle de versão para gerenciamento de código." },
        { name: "Docker", description: "Plataforma para criação e execução de aplicações em containers." },
        { name: "CI/CD", description: "Automação de integração, testes e entrega contínua." },
        { name: "Figma", description: "Ferramenta colaborativa para design e prototipação de interfaces." },
        { name: "Jest", description: "Framework JavaScript para testes automatizados." },
        { name: "Cypress", description: "Framework para testes end-to-end de aplicações web." },
        { name: "AI-assisted development", description: "IA aplicada ao desenvolvimento" }
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-number"></span> TECH STACK
        </h2>

        <p className="section-subtitle">
          Expertise técnico em desenvolvimento Full Stack com foco em criar experiências digitais memoráveis
        </p>
      </div>

      <div className="skills-grid">
        {skillsData.map((card, i) => {
          const Icon = card.icon;

          return (
            <div className="skill-card" key={i}>
              <div className="skill-header">
                <span className="skill-icon">
                  <Icon size={28} strokeWidth={1.8} />
                </span>

                <h3 className="skill-category">
                  {card.title}
                </h3>
              </div>

              <div className="skill-items">
                {card.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="skill-tag"
                    data-description={skill.description}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
