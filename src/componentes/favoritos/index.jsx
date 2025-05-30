function Favoritos({ favoritos }) {
  if (favoritos.length === 0) {
    return <div style={{ textAlign: 'center', marginTop: '2rem' }}>No tienes chistes favoritos aún.</div>;
  }

  return (
    <div className="container">
      <h1>Chistes Favoritos</h1>
      <div className="c-lista">
        {favoritos.map((chiste, index) => (
          <div key={index} className="c-lista-pokemon">
            <div className="c-lista-pokemon-card">
              <p className="pokemon-name">{chiste.setup}</p>
              <p className="pokemon-id">{chiste.punchline}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favoritos;
