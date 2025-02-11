import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import HeaderBar from './components/HeaderBar';
import Beer from './components/Beer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/:id" element={<Beer />} />
      </Routes>
    </div>
  );
}

export default App;
