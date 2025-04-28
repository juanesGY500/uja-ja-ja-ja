import { useEffect, useState } from 'react';
import './style.css';

function Aleatorio() {
  const [chiste, setChiste] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const obtenerChiste = async () => {
    try {
      const res = await fetch('https://official-joke-api.appspot.com/jokes/random');

      if (!res.ok) throw new Error(`Error en la solicitud: ${res.status}`);

      const data = await res.json();
      setChiste(data);
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { obtenerChiste(); }, []);

  if (loading) return <div className="container"><h2>Cargando chiste...</h2></div>;
  if (error) return <div className="container"><h2>Error: {error}</h2></div>;

  return (
    <div className="container">
      <h1>Chiste Aleatorio</h1>
      <div className="c-lista-pokemon-card">
        <p className="pokemon-name">{chiste.setup}</p>
        <p className="pokemon-id">{chiste.punchline}</p>
      </div>
    </div>
  );
}

export default Aleatorio;
