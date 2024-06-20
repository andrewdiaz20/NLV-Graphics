import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import NavBar from './Components/Navigation';
import stickers from './Components/stickers';

function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path = '/'element={<Home/>}/>
          <Route path = '/stickers'element={<stickers/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;