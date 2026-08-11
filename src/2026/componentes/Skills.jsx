import React from 'react';
import '../styles/Skills.css'

function Skills() {
  const skillsData = [
    {
      icon: "📱",
      title: "Frontend & Mobile",
      items: ["React Native", "Expo", "React.js", "Next.js", "TypeScript", "JavaScript", "TailwindCSS", "Styled Components"]
    },
    {
      icon: "⚙️",
      title: "Backend & Database",
      items: ["Python", "FastAPI", "Django", "Node.js", "PostgreSQL", "MongoDB", "REST APIs", "JWT"]
    },
    {
      icon: "📊",
      title: "Data Science",
      items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Streamlit", "Data Analysis"]
    },
    {
      icon: "🛠️",
      title: "DevOps & Tools",
      items: ["Git", "Docker", "CI/CD", "Figma", "Jest", "Cypress"]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-number">01.</span> TECH STACK
        </h2>
        <p className="section-subtitle">
          Expertise técnico em desenvolvimento Full Stack com foco em criar experiências digitais memoráveis
        </p>
      </div>

      <div className="skills-grid">
        {skillsData.map((card, i) => (
          <div className="skill-card" key={i}>
            <div className="skill-header">
              <span className="skill-icon">{card.icon}</span>
              <h3 className="skill-category">{card.title}</h3>
            </div>
            <div className="skill-items">
              {card.items.map((tag, idx) => (
                <span key={idx} className="skill-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;