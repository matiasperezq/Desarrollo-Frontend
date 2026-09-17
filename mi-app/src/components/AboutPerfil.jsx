import userPhoto from '../assets/userPhoto.webp';
export default function AboutPerfil() {
  return (
    <article className="about-perfil">
      <div className="perfil-silhouette">
        <img src={userPhoto} alt="Perfil" className="imagen-perfil" />
      </div>
      <p>
        Fully committed to the philosophy of life-long learning, I'm a full
        stack developer with a deep passion for JavaScript, React and all things web development.
        The unique combination of creativity, logic, technology and never running out of new things to
        discover, drives my excitement and passion for web development. When I'm not at my computer I like to
        spend my time reading, keeping fit and playing guitar.
      </p>
    </article>
  );
}