import userPhoto from '../assets/userPhoto.webp';
export default function AboutPerfil() {
  return (
    <article className="about-perfil">
      <div className="perfil-silhouette">
        <img src={userPhoto} alt="Perfil" className="imagen-perfil" />
      </div>
      <p>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </article>
  );
}