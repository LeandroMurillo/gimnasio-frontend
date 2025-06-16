import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/nosotros">Sobre nosotros</Link>
      <Link to="/nav">Menu enlace</Link>
      <Link to="/no-existe">Error 404</Link>
    </nav>
  );
}
