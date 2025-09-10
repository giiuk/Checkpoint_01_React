import { useState } from "react";
import AdicionarFilme from "./AdicionarFilme";

function Filmes() {
  const [filmes, setFilmes] = useState([]);

  const adicionarFilme = (novoFilme) => {
    setFilmes([...filmes, novoFilme]);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Minha lista de filmes</h2>
      <ul className="space-y-2">
        {filmes.map((filme) => (
          <li
            className="p-4 border rounded-lg shadow-sm bg-pink-50"
          >
            <h3 className="text-lg font-medium">{filme.titulo}</h3>
            <p className="text-sm text-gray-600">{filme.ano}</p>
          </li>
        ))}
      </ul>

      <AdicionarFilme onAddFilme={adicionarFilme} />
    </div>
  );
}

export default Filmes;
