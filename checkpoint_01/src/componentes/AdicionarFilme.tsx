import { useState } from "react";

function AdicionarFilme({ onAddFilme }) {
  const [titulo, setTitulo] = useState("");
  const [ano, setAno] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo || !ano) return;

    const novoFilme = {
      id: Date.now(),
      titulo,
      ano,
    };
    
    onAddFilme(novoFilme);

    setTitulo("");
    setAno("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-pink rounded-lg shadow-md border max-w-md mx-auto mt-6"
    >
      <h2 className="text-lg font-semibold mb-4 text--800">Adicionar Filme</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Título do filme"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          placeholder="Ano de lançamento"
          value={ano}
          onChange={(e) => setAno(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-pink-700 transition"
      >
        Adicionar
      </button>
    </form>
  );
}

export default AdicionarFilme;
