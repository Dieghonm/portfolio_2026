import React from "react";
import "../styles/AboutMe.css";

const careerSteps = [
    {
        period: "FORMAÇÃO",
        title: "Administração & Empreendedorismo",
        description:
            "Formação em Administração e Empreendedorismo, construindo uma base sólida em negócios, gestão e processos."
    },
    {
        period: "15+ ANOS",
        title: "Administração & Gestão",
        description:
            "Experiência profissional principalmente em RH e gestão de pessoas, além de atuação em compras, cobrança e processos administrativos."
    },
    {
        period: "TRANSIÇÃO",
        title: "Da Gestão para Tecnologia",
        description:
            "Há 5 anos, iniciei uma transição planejada para tecnologia através de uma formação intensiva em desenvolvimento de software."
    },
    {
        period: "ATUALMENTE",
        title: "Desenvolvimento de Software",
        description:
            "Atuação no desenvolvimento de aplicações web e mobile, com foco em React, React Native, TypeScript e JavaScript, além de experiência com backend e APIs."
    }
];

const professionalSkills = [
    "Visão de negócio",
    "Comunicação",
    "Resolução de problemas",
    "Entendimento de requisitos",
    "Gestão de processos",
    "Trabalho em equipe"
];

function AboutMe() {
    return (
        <section className="about-me" id="sobre">
            <div className="about-me__container">
                <div className="about-me__header">
                    <span className="about-me__eyebrow">
                        SOBRE MIM
                    </span>

                    <h2>ALÉM DO CÓDIGO</h2>

                    <p className="about-me__intro">
                        Minha experiência em tecnologia começou há 5 anos,
                        mas minha experiência em entender pessoas, processos
                        e problemas começou muito antes.
                    </p>
                </div>

                <div className="about-me__content">
                    <div className="about-me__story">
                        <h3>MINHA TRAJETÓRIA</h3>

                        <p>
                            Minha carreira começou na Administração, com
                            formação em Administração e Empreendedorismo e
                            mais de 15 anos de experiência profissional,
                            principalmente em RH e gestão de pessoas.
                        </p>

                        <p>
                            Há 5 anos, decidi direcionar minha experiência
                            para tecnologia e iniciei uma nova trajetória
                            profissional através de uma formação intensiva
                            em desenvolvimento de software.
                        </p>

                        <p>
                            Hoje atuo como desenvolvedor de software,
                            construindo aplicações web e mobile com foco em
                            Frontend, enquanto continuo ampliando minha
                            formação em Análise e Desenvolvimento de
                            Sistemas.
                        </p>

                        <p>
                            Essa combinação de experiências me permite olhar
                            para um projeto não apenas pelo código, mas também
                            pelo problema que precisa ser resolvido, pelas
                            pessoas envolvidas e pelo resultado que a solução
                            precisa gerar.
                        </p>
                    </div>

                    <div className="about-me__skills">
                        <h3>O QUE TRAGO ALÉM DA TECNOLOGIA</h3>

                        <div className="about-me__skills-grid">
                            {professionalSkills.map((skill) => (
                                <span
                                    className="about-me__skill"
                                    key={skill}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="about-me__timeline">
                    {careerSteps.map((step, index) => (
                        <article
                            className="about-me__timeline-item"
                            key={step.period}
                        >
                            <div className="about-me__timeline-number">
                                0{index + 1}
                            </div>

                            <span className="about-me__timeline-period">
                                {step.period}
                            </span>

                            <h3>{step.title}</h3>

                            <p>{step.description}</p>
                        </article>
                    ))}
                </div>

                <div className="about-me__education">
                    <div className="about-me__education-icon">
                        +
                    </div>

                    <div>
                        <span className="about-me__education-label">
                            FORMAÇÃO ATUAL
                        </span>

                        <h3>
                            Análise e Desenvolvimento de Sistemas
                        </h3>

                        <p>
                            Graduação em andamento, aprofundando conhecimentos
                            técnicos e consolidando minha atuação profissional
                            em tecnologia.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;