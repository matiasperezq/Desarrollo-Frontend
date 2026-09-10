export default function Navbar() {
  return (
    <header className="navbar-header">
      <nav className="navbar-nav">
        <ul className="navbar-links">
          <li><a href="#home" className="active">Sobre mi</a></li>
          <li><a href="#tecnologias">Tecnologias</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}