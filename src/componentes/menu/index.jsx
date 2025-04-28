import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav style={{ marginBottom: '2rem' }}>
      <Link to="/">Lista</Link> | {' '}
      <Link to="/aleatorios">Aleatorios</Link> | {' '}
      <Link to="/favoritos">Favoritos</Link> | {' '}
      <Link to="/usuarios">Usuarios</Link>
    </nav>
  );
}

export default Menu;
