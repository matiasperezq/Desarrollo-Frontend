import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'tecnologias', 'projects', 'contact'];
      let currentSection = 'home';

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          if (window.scrollY >= element.offsetTop - 150) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="navbar-header">
      <nav className="navbar-nav">
        <ul className="navbar-links">
          <li>
            <a 
              href="#about" 
              className={activeSection === 'about' ? 'active' : ''}
            >
              Sobre mi
            </a>
          </li>
          <li>
            <a 
              href="#tecnologias" 
              className={activeSection === 'tecnologias' ? 'active' : ''}
            >
              Tecnologias
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={activeSection === 'projects' ? 'active' : ''}
            >
              Proyectos
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}