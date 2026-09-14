import React from "react";
import "../styles/HowIDevelop.css";
const developmentSteps = [
  {
    number: "01",
    title: "ENTENDER",
    description:
      "Investigo o problema, o contexto e os requisitos para compreender o que precisa ser resolvido."
  },
  {
    number: "02",
    title: "PLANEJAR",
    description:
      "Defino a abordagem técnica, a estrutura da solução e as tecnologias mais adequadas."
  },
  {
    number: "03",
    title: "DESENVOLVER",
    description:
      "Implemento interfaces, funcionalidades e integrações com foco em qualidade e experiência do usuário."
  },
  {
    number: "04",
    title: "VALIDAR",
    description:
      "Testo, debugo, reviso e otimizo o código para garantir uma solução consistente."
  },
  {
    number: "05",
    title: "ENTREGAR",
    description:
      "Publico a aplicação, acompanho seu funcionamento e realizo manutenções quando necessário."
  }
];

function HowIDevelop() {
  return (
    <section className="how-i-develop" id="como-desenvolvo">
      <div className="how-i-develop__container">
        <div className="how-i-develop__header">
          <span className="how-i-develop__eyebrow">
            PROCESSO DE DESENVOLVIMENTO
          </span>

          <h2>COMO EU DESENVOLVO</h2>

          <p>
            Transformo problemas em soluções digitais através de um processo
            que combina análise, desenvolvimento e melhoria contínua.
          </p>
        </div>

        <div className="how-i-develop__steps">
          {developmentSteps.map((step) => (
            <article
              className="how-i-develop__step"
              key={step.number}
            >
              <span className="how-i-develop__number">
                {step.number}
              </span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <div className="how-i-develop__ai">
          <div className="how-i-develop__ai-icon">
            ✦
          </div>

          <div className="how-i-develop__ai-content">
            <span className="how-i-develop__ai-label">
              PRODUTIVIDADE & TECNOLOGIA
            </span>

            <h3>IA APLICADA AO DESENVOLVIMENTO</h3>

            <p>
              Utilizo ferramentas de Inteligência Artificial como apoio
              ao desenvolvimento de software, acelerando a implementação
              de funcionalidades, investigando bugs e explorando
              alternativas técnicas.
            </p>

            <p>
              As decisões técnicas, a revisão, os testes e a validação
              do código permanecem sob minha responsabilidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowIDevelop;