
import Header from './componentes/Header';
import Filmes from './componentes/Filmes';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Letterboxd" />
      <Filmes />
    </div>
  );
}

export default App;
