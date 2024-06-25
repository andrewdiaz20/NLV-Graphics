import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import NavBar from './Components/Navigation';
import Stickers from './Components/Stickers';
import Footer from './Components/Footer';
import './stickers.css';
import Drinkware from './Components/Drinkware';

function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path = '/'element={<Home/>}/>
          <Route path = '/Stickers'element={<Stickers/>}/>
          <Route path = '/Drinkware' element={<Drinkware/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;