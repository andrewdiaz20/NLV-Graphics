import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import NavBar from './Components/Navigation';
import stickers_Labels from './Components/Stickers_Labels';

function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path = '/'element={<Home/>}/>
          <Route path = '/stickers_Labels'element={<stickers_Labels/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
