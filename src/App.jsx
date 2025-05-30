import { useState } from 'react';
import Lista from './componentes/lista';
import Aleatorio from './componentes/aleatorios';
import JokeDetail from './componentes/JokeDetail';
import Favoritos from './componentes/favoritos';
import Crear from './componentes/Crear';
import Creados from './componentes/Creados';

function App() {
  const [vista, setVista] = useState('lista');
  const [chisteSeleccionado, setChisteSeleccionado] = useState(null);
  const [favoritos, setFavoritos] = useState([]);
  const [chistesCreados, setChistesCreados] = useState([]);

  const manejarAgregarFavorito = (chiste) => {
    const yaExiste = favoritos.find((f) => f.setup === chiste.setup && f.punchline === chiste.punchline);
    if (!yaExiste) setFavoritos([...favoritos, chiste]);
  };

  const manejarAgregarChiste = (nuevoChiste) => {
    setChistesCreados([...chistesCreados, nuevoChiste]);
  };

  const renderizarVista = () => {
    switch (vista) {
      case 'lista':
        return <Lista onVerDetalle={setChisteSeleccionado} onAgregarFavorito={manejarAgregarFavorito} />;
      case 'aleatorio':
        return <Aleatorio />;
      case 'detalle':
        return <JokeDetail chiste={chisteSeleccionado} onBack={() => setVista('lista')} />;
      case 'favoritos':
        return <Favoritos favoritos={favoritos} />;
      case 'crear':
        return <Crear onAgregarChiste={manejarAgregarChiste} />;
      case 'creados':
        return <Creados chistesCreados={chistesCreados} />;
      default:
        return <Lista onVerDetalle={setChisteSeleccionado} onAgregarFavorito={manejarAgregarFavorito} />;
    }
  };

  return (
    <div>
      <header style={{ textAlign: 'center', margin: '20px' }}>
        <button onClick={() => setVista('lista')} style={{ margin: '0 10px' }}>Ver Lista</button>
        <button onClick={() => setVista('aleatorio')} style={{ margin: '0 10px' }}>Ver Aleatorio</button>
        <button onClick={() => setVista('favoritos')} style={{ margin: '0 10px' }}>Favoritos</button>
        <button onClick={() => setVista('crear')} style={{ margin: '0 10px' }}>Crear</button>
        <button onClick={() => setVista('creados')} style={{ margin: '0 10px' }}>Creados</button>
      </header>
      {renderizarVista()}
    </div>
  );
}

export default App;
