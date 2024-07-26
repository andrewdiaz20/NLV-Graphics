import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import NavBar from './Components/Navigation';
import Stickers from './Components/Stickers';
import Footer from './Components/Footer';
import './stickers.css';
import Drinkware from './Components/Drinkware';
import './script'
import Large_Format_Printing from './Components/Large_Format_Printing';

function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path = '/'element={<Home/>}/>
          <Route path = '/Stickers'element={<Stickers/>}/>
          <Route path = '/Drinkware' element={<Drinkware/>}/>
          <Route path = '/Large_Format_Printing' element={<Large_Format_Printing/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;