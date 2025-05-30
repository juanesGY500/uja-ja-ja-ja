import { useEffect, useState } from 'react';
import './style.css';

function Lista({ onVerDetalle }) {
  const [chistes, setChistes] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const obtenerChistes = async () => {
    try {
      const res = await fetch('https://official-joke-api.appspot.com/jokes/ten');
      if (!res.ok) throw new Error(`Error en la solicitud: ${res.status}`);
      
      const data = await res.json();
      setChistes((prevChistes) => [...prevChistes, ...data]);
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerChistes();
  }, []);

  const filtrarChistes = () => {
    return chistes.filter((chiste) =>
      chiste.setup.toLowerCase().includes(busqueda.toLowerCase()) ||
      chiste.punchline.toLowerCase().includes(busqueda.toLowerCase())
    );
  };

  const handleScroll = (e) => {
    const container = e.target;
    const bottom = container.scrollHeight === container.scrollTop + container.clientHeight;
    if (bottom && !loading) {
      setLoading(true);
      obtenerChistes();
    }
  };

  useEffect(() => {
    const container = document.querySelector('.c-lista');
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [loading]);

  if (loading && chistes.length === 0) return <div className="container"><h2>Cargando chistes...</h2></div>;
  if (error) return <div className="container"><h2>Error: {error}</h2></div>;

  return (
    <div className="container">
      <h1>Lista de Chistes</h1>
      <input
        className="c-buscador"
        type="text"
        placeholder="Buscar chiste..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <div className="c-lista">
        {filtrarChistes().map((chiste, index) => (
          <div key={index} className="c-lista-pokemon">
            <div className="c-lista-pokemon-card">
              <p className="pokemon-name">{`Chiste #${index + 1}`}</p>
              <p className="pokemon-id">{chiste.setup}</p>
              <button
                className="ver-mas-btn"
                onClick={() => onVerDetalle(chiste)}
              >
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lista;
