function JokeDetail({ chiste, onVolver, onAgregarFavorito }) {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <button onClick={onVolver} style={{
        marginBottom: '1rem',
        backgroundColor: '#4e73df',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer'
      }}>
        ← Volver
      </button>

      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
        {chiste.setup}
      </h1>

      <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>
        {chiste.punchline}
      </p>

      <button onClick={() => onAgregarFavorito(chiste)} style={{
        backgroundColor: 'green',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer'
      }}>
        Añadir a Favoritos
      </button>
    </div>
  );
}

export default JokeDetail;
