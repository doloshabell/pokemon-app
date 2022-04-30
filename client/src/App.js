import { Route, Routes } from 'react-router-dom';
import './App.css';
import PokemonList from './pages/PokemonList';
import PokemonDetail from './pages/PokemonDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loading-skeleton/dist/skeleton.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </div>
  );
}

export default App;
