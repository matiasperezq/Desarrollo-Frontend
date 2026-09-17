// src/components/ProjectCard.jsx
export default function ProjectCard({ titulo, descripcion, imagen, linkApp,  }) {
  return (
    <article className="project-card">
      <div className="project-visual">
        <img src={imagen} alt={`Captura de ${titulo}`} className="project-image" />
      </div>

      <div className="project-info">
        <h3 className="project-title">{titulo}</h3>
        <p className="project-desc">{descripcion}</p>
        
        <div className="project-links">
          <a href={linkApp} target="_blank" rel="noreferrer" className="project-link">
            Link
          </a>
        </div>
      </div>
    </article>
  );
}