import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/nosotros">Sobre nosotros</Link>
      <Link to="/nav">Menu enlce</Link>
      <Link to="/no-existe">Error 404</Link>
    </nav>
  );
};

export default Menu;
