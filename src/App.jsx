import { useState } from 'react';
import Lista from './componentes/lista';
import Aleatorio from './componentes/aleatorios';
import JokeDetail from './componentes/JokeDetail'; // nuevo

function App() {
  const [vista, setVista] = useState('lista');
  const [chisteSeleccionado, setChisteSeleccionado] = useState(null); // nuevo

  const mostrarDetalle = (chiste) => {
    setChisteSeleccionado(chiste);
    setVista('detalle');
  };

  return (
    <div>
      <header style={{ textAlign: 'center', margin: '20px' }}>
        <button onClick={() => setVista('lista')} style={{ marginRight: '10px' }}>Ver Lista</button>
        <button onClick={() => setVista('aleatorio')}>Ver Aleatorio</button>
      </header>

      {vista === 'lista' && <Lista onVerDetalle={mostrarDetalle} />}
      {vista === 'aleatorio' && <Aleatorio />}
      {vista === 'detalle' && chisteSeleccionado && (
        <JokeDetail chiste={chisteSeleccionado} onVolver={() => setVista('lista')} />
      )}
    </div>
  );
}

export default App;
