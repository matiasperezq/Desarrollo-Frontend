import ProjectCard from "./ProjectCard";
import img from "../assets/css.png";

export default function Proyects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2 className="about_heading section-heading">Proyectos</h2>
      </div>
      <div className="projects-content">
        <ProjectCard 
          titulo="Titulo"
          descripcion="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imagen={img} 
          linkApp="#"
        />
        
      </div>
    </section>
  );
}