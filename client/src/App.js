import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import PokemonList from './pages/PokemonList';
import PokemonDetail from './pages/PokemonDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loading-skeleton/dist/skeleton.css'
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<PokemonList />} />
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

function Index() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App;