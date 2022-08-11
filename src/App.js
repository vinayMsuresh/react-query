import './App.css';
import { Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import TraditionalHeroes from './components/TraditionalHeroes';
import QueryHeroes from './components/QueryHeroes';
import HeroDetails from './components/HeroDetails';
import ParallelQueries from './components/ParallelQueries';
import DynamicParallel from './components/DynamicParallel';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='traditional-heroes' element={<TraditionalHeroes/>} />
          <Route path='query-heroes' element={<QueryHeroes/>}/> 
          <Route path='/heroes/:heroId' element={<HeroDetails/>} />
          <Route path='parallel-queries' element={<ParallelQueries/>} />
          <Route path='dynamic-parallel' element={<DynamicParallel ids={[1, 2]} />} />
      </Routes>
      
    </div>
  );
}

export default App;
