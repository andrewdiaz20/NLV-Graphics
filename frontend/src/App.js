import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import NavBar from './Components/Navigation';
import Stickers_Labels from './Components/stickers_lab';

function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path = '/'element={<Home/>}/>
          <Route path = '/Stickers_Labels'element={<Stickers_Labels/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;