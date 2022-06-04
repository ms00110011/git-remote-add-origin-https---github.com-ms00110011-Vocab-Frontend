import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home/Home';
import { Result } from './Components/Result/Result';
import {Route,Routes} from 'react-router-dom'


function App() {
  return (
    <div className="App">

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/result' element={<Result />} />
    </Routes>

    

    </div>
  );
}

export default App;
