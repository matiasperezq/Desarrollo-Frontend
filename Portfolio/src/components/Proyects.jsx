import ProjectCard from "./ProjectCard";
import img from "../assets/css.png";

const proyectos = [
  {
    id: crypto.randomUUID(),
    titulo: "Titulo del Proyecto 1",
    descripcion: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imagen: img, 
    linkApp: "#",
    linkMas: "#"
  },
  {
    id: crypto.randomUUID(),
    titulo: "Titulo del Proyecto 2",
    descripcion: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imagen: img, 
    linkApp: "#",
    linkMas: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2 className="about_heading section-heading">Proyectos</h2>
      </div>
      
      <div className="projects-content">
        {proyectos.map((proyecto, index) => (
          <ProjectCard 
            key={proyecto.id}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            imagen={proyecto.imagen}
            linkApp={proyecto.linkApp}
            reverse={index % 2 !== 0} 
          />
        ))}
      </div>
    </section>
  );
}