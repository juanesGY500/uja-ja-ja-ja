import { useState } from 'react';
import Lista from './componentes/lista';
import Aleatorio from './componentes/aleatorios';

function App() {
  const [vista, setVista] = useState('lista');

  return (
    <div>
      <header style={{ textAlign: 'center', margin: '20px' }}>
        <button onClick={() => setVista('lista')} style={{ marginRight: '10px' }}>Ver Lista</button>
        <button onClick={() => setVista('aleatorio')}>Ver Aleatorio</button>
      </header>

      {vista === 'lista' ? <Lista /> : <Aleatorio />}
    </div>
  );
}

export default App;
