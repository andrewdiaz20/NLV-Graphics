import './App.css';
import Home from './Components/Home';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import NavBar from './Components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path = '/'element={<Home/>}/>
          <Route path = '/Contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
