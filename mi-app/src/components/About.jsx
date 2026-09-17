import AboutPerfil from './AboutPerfil';
import Tec from './Tec';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2 className="about_heading section-heading">Sobre mi</h2>
      </div>
      {/* Contenedor Flexbox para alinear los dos componentes lado a lado */}
      <div className="about-content">
        <AboutPerfil />
        <Tec />
      </div>
      
    </section>
  );
}