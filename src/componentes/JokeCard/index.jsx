function JokeCard({ chiste, onVerDetalle }) {
  return (
    <div className="p-4 border rounded shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold">{chiste.title}</h2>
      <p className="text-gray-600">{chiste.content.slice(0, 100)}...</p>
      <button onClick={() => onVerDetalle(chiste)} className="text-blue-500 mt-2 block">
        Ver más
      </button>
    </div>
  );
}

export default JokeCard;
