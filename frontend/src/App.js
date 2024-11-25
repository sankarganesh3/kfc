import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbar2 from './components/Navbar2';
import Footer from './components/Footer';
import Contents from './pages/Contents';
import Menu from './pages/Menu';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar2/>
      <Routes>
        <Route path='/' element={<Contents/>}/>
        <Route path='/menu' element={<Menu/>}/>  
      </Routes>
      <Footer/>
      </BrowserRouter>      
    </div>
  );
}

export default App;
