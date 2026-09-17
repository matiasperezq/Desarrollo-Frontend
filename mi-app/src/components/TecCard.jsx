export default function TecCard({ nombre, imagen }) {
  return (
    <div className="tech-card">
      <img src={imagen} alt={`Logo de ${nombre}`} className="tech-icon-img" />
      <span className="tech-name">{nombre}</span>
    </div>
  );
}