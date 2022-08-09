import './App.css';
import { Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import TraditionalHeroes from './components/TraditionalHeroes';
import QueryHeroes from './components/QueryHeroes';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='traditional-heroes' element={<TraditionalHeroes/>} />
          <Route path='query-heroes' element={<QueryHeroes/>} />
      </Routes>
    </div>
  );
}

export default App;
