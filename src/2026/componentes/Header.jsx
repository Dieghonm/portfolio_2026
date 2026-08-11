import React, { useState } from 'react';
import '../styles/Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    closeMenu();
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <button 
          className="nav-logo" 
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          style={{ border: 'var(--border-width) solid var(--color-primary)', padding: '0.5rem 1.5rem', background: 'var(--color-primary)', color: 'var(--bg-main)', fontSize: '2rem', fontWeight: '900', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.3s ease' }}
        >
          DM
        </button>

        <button 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projetos</a>
          <a href="#contact" onClick={closeMenu}>Contato</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;