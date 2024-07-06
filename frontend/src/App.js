import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import NavBar from './Components/Navigation';
import Stickers from './Components/stickers';
import Footer from './Components/Footer';
import './stickers.css';
import Drinkware from './Components/Drinkware';
import Contact from './Components/Contact';
import Item from './Components/ItemPage.';

function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path = '/'element={<Home/>}/>
          <Route path = '/Stickers'element={<Stickers/>}/>
          <Route path = '/Drinkware' element={<Drinkware/>}/>
          <Route path = '/Contact' element={<Contact/>}/>
          <Route path = '/:name' element={<Item/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;