import React from 'react';
import '../styles/Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="brand-name">DIEGHO MORAES</div>
      <div className="brand-tagline">Full Stack Developer</div>
      
      <div className="footer-links">
        <a href="https://github.com/Dieghonm" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/diegho-neves" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:dieghonm@gmail.com">Email</a>
      </div>

      <p className="footer-copyright">
        © {currentYear} Diegho Moraes. Desenvolvido com React & ❤️
      </p>
      <p className="footer-location">
        Rio de Janeiro, Brasil 🇧🇷
      </p>
    </footer>
  );
}

export default Footer;