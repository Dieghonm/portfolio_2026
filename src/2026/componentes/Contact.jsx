import React from 'react';
import '../styles/Contact.css'

function Contact() {
  const contactData = [
    { icon: '💼', label: 'LinkedIn', value: '/in/diegho-neves', href: 'https://linkedin.com/in/diegho-neves' },
    { icon: '💻', label: 'GitHub', value: '@Dieghonm', href: 'https://github.com/Dieghonm' },
    { icon: '📧', label: 'Email', value: 'dieghonm@gmail.com', href: 'mailto:dieghonm@gmail.com' },
    { icon: '📱', label: 'WhatsApp', value: '(21) 99205-6229', href: 'tel:+5521992056229' }
  ];

  return (
    <section className="contact" id="contact">
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-number"></span> VAMOS CONVERSAR
        </h2>
        <p className="section-subtitle">
          Disponível para projetos remotos, híbridos ou presenciais no Rio de Janeiro
        </p>
      </div>

      <div className="contact-grid">
        {contactData.map((contact, index) => (
          <a 
            key={index} 
            href={contact.href} 
            target={contact.href.startsWith('http') ? '_blank' : '_self'} 
            rel="noopener noreferrer" 
            className="contact-card"
          >
            <div className="contact-icon">{contact.icon}</div>
            <div>
              <div className="contact-label">{contact.label}</div>
              <div className="contact-value">{contact.value}</div>
            </div>
          </a>
        ))}
      </div>

      <div className="contact-cta">
        <h3 className="cta-title">Pronto para criar algo incrível?</h3>
        <p className="cta-subtitle">
          Estou sempre aberto a discutir novos projetos, ideias criativas <br/>
          ou oportunidades de fazer parte da sua visão.
        </p>
        <a href="mailto:dieghonm@gmail.com" className="btn btn-primary">
          INICIAR CONVERSA →
        </a>
      </div>
    </section>
  );
}

export default Contact;