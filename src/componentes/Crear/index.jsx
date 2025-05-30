import { useState } from 'react';
import './style.css';

function Crear({ onAgregarChiste }) {
  const [setup, setSetup] = useState('');
  const [punchline, setPunchline] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (setup && punchline) {
      onAgregarChiste({ setup, punchline });
      setSetup('');
      setPunchline('');
      alert('¡Chiste creado con éxito!');
    }
  };

  return (
    <div className="container">
      <h1>Crear Chiste</h1>
      <form onSubmit={manejarEnvio}>
        <input
          type="text"
          placeholder="Inicio del chiste..."
          value={setup}
          onChange={(e) => setSetup(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Remate del chiste..."
          value={punchline}
          onChange={(e) => setPunchline(e.target.value)}
          required
        />
        <button type="submit">Crear Chiste</button>
      </form>
    </div>
  );
}

export default Crear;
