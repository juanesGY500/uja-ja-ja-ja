import './style.css';

function Creados({ chistesCreados }) {
  if (chistesCreados.length === 0) {
    return <div className="container"><h2>No hay chistes creados aún.</h2></div>;
  }

  return (
    <div className="container">
      <h1>Chistes Creados</h1>
      <div className="c-lista">
        {chistesCreados.map((chiste, index) => (
          <div key={index} className="c-lista-pokemon">
            <div className="c-lista-pokemon-card">
              <p className="pokemon-name">{`Chiste creado #${index + 1}`}</p>
              <p className="pokemon-id">{chiste.setup}</p>
              <p>{chiste.punchline}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Creados;
