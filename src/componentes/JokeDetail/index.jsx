function JokeDetail({ chiste, onVolver }) {
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

      <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        {chiste.punchline}
      </p>
    </div>
  );
}

export default JokeDetail;
