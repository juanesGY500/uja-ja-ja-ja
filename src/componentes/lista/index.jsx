import { useEffect, useState } from 'react';
import './style.css';

function Lista({ onAgregarFavorito }) {
  const [chistes, setChistes] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandido, setExpandido] = useState(null); // Estado para controlar cuál chiste se expande

  const obtenerChistes = async () => {
    try {
      const res = await fetch('https://official-joke-api.appspot.com/jokes/ten');
      if (!res.ok) throw new Error(`Error en la solicitud: ${res.status}`);
      
      const data = await res.json();
      setChistes(data); // No es necesario concatenar, solo establecer los nuevos chistes
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

              {/* Si el chiste está expandido, mostrar la punchline */}
              {expandido === index && (
                <p className="punchline" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '1rem' }}>
                  {chiste.punchline}
                </p>
              )}

              {/* Botón para alternar el estado expandido */}
              <button
                className="ver-mas-btn"
                onClick={() => setExpandido(expandido === index ? null : index)}
              >
                {expandido === index ? "Ocultar" : "Ver más"}
              </button>

              {onAgregarFavorito && (
                <button
                  className="ver-mas-btn"
                  style={{ backgroundColor: 'green', marginTop: '5px' }}
                  onClick={() => onAgregarFavorito(chiste)}
                >
                  Añadir a Favoritos
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lista;
