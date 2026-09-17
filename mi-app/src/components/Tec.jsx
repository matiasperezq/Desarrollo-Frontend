import TecCard from './TecCard';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import python from '../assets/python.png';
import php from '../assets/php.png';
import mysql from '../assets/mysql.png';
import laravel from '../assets/laravel.png';
import git from '../assets/git.png';


const tecnologias = [
  { id: crypto.randomUUID(), nombre: 'HTML', imagen: html },
  { id: crypto.randomUUID(), nombre: 'CSS', imagen: css },
  { id: crypto.randomUUID(), nombre: 'JavaScript', imagen: js },
  { id: crypto.randomUUID(), nombre: 'React', imagen: react },
  { id: crypto.randomUUID(), nombre: 'Python', imagen: python },
  { id: crypto.randomUUID(), nombre: 'PHP', imagen: php },
  { id: crypto.randomUUID(), nombre: 'MySQL', imagen: mysql },
  { id: crypto.randomUUID(), nombre: 'Laravel', imagen: laravel },
  { id: crypto.randomUUID(), nombre: 'Git', imagen: git }
];

export default function Tec() {
  return (
    <aside className="tech-grid-container">
      {tecnologias.map((tech) => (
        <TecCard 
          key={tech.id} 
          nombre={tech.nombre} 
          imagen={tech.imagen}
        />
      ))}
    </aside>
  );
}